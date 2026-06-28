import { NextRequest, NextResponse } from "next/server";
import {
  getPayuConfig,
  markCouponPaid,
  verifyPaymentByTxnid,
  verifyResponseHash,
} from "@/lib/payu";

export async function POST(request: NextRequest) {
  const form = await request.formData();
  const params: Record<string, string> = {};
  for (const [k, v] of form.entries()) {
    params[k] = typeof v === "string" ? v : "";
  }

  const origin =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    new URL(request.url).origin;

  const txnid = params.txnid ?? "";

  // Primary: authoritative server-to-server status check (independent of the
  // response-hash shape, which PayU's live gateway can vary).
  let success = false;
  let how = "none";
  try {
    const tx = await verifyPaymentByTxnid(txnid);
    if (tx && String(tx.status).toLowerCase() === "success") {
      success = true;
      how = "api";
    }
  } catch {
    // ignore — fall back to hash verification below
  }

  // Fallback: trust PayU's signed response hash if the API didn't confirm.
  if (!success) {
    try {
      const { key, salt } = getPayuConfig();
      if (params.status === "success" && verifyResponseHash(params, key, salt)) {
        success = true;
        how = "hash";
      }
    } catch {
      // ignore
    }
  }

  if (success) {
    // The approval code is embedded at the front of the txnid.
    await markCouponPaid(txnid, txnid);
  }

  const dest = success ? "/pay-now/success" : "/pay-now/failure";

  const query = new URLSearchParams({
    txnid,
    amount: params.amount ?? "",
    status: params.status ?? "",
    ...(success ? {} : { reason: "verification_failed" }),
  });

  // TEMP DEBUG: when not successful, pass a compact, non-secret dump of the
  // PayU response so the failure page can surface what actually arrived.
  if (!success) {
    const safe: Record<string, string> = {};
    for (const [k, v] of Object.entries(params)) {
      if (k.toLowerCase() === "hash") {
        safe[k] = String(v).slice(0, 12) + "…";
      } else {
        safe[k] = String(v).slice(0, 60);
      }
    }
    safe.__how = how;
    query.set(
      "dbg",
      Buffer.from(JSON.stringify(safe)).toString("base64url").slice(0, 1500)
    );
  }

  // PayU POSTs here; redirect the browser to a GET result page.
  return NextResponse.redirect(`${origin}${dest}?${query.toString()}`, {
    status: 303,
  });
}
