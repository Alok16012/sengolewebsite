import { NextRequest, NextResponse } from "next/server";
import { getPayuConfig, verifyResponseHash } from "@/lib/payu";

// Mark the approval coupon identified by `rawCode` as used/paid and store the
// PayU transaction id. The approval code is the first 8 hex chars of an
// approval-type coupon's UUID id (tolerates a full UUID being passed too).
async function markCouponPaid(rawCode: string, txnid: string) {
  const code = (rawCode.trim().toLowerCase().match(/[0-9a-f]{8}/) ?? [])[0];
  if (!code) return;

  const baseUrl = process.env.SUPABASE_URL;
  const anonKey = process.env.SUPABASE_ANON_KEY;
  if (!baseUrl || !anonKey) return;

  const url =
    `${baseUrl}/rest/v1/coupons` +
    `?id=gte.${code}-0000-0000-0000-000000000000` +
    `&id=lte.${code}-ffff-ffff-ffff-ffffffffffff` +
    `&coupon_type=eq.approval`;

  try {
    await fetch(url, {
      method: "PATCH",
      headers: {
        apikey: anonKey,
        Authorization: `Bearer ${anonKey}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      cache: "no-store",
      body: JSON.stringify({
        is_used: true,
        used_at: new Date().toISOString(),
        payment_txn_id: txnid,
      }),
    });
  } catch {
    // best-effort — don't block the user's redirect on a write failure
  }
}

export async function POST(request: NextRequest) {
  const form = await request.formData();
  const params: Record<string, string> = {};
  for (const [k, v] of form.entries()) {
    params[k] = typeof v === "string" ? v : "";
  }

  const origin =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    new URL(request.url).origin;

  let valid = false;
  try {
    const { key, salt } = getPayuConfig();
    valid = verifyResponseHash(params, key, salt);
  } catch {
    valid = false;
  }

  const success = valid && params.status === "success";

  // On a verified successful payment, mark the matching approval coupon as paid
  // in the admin app's Supabase and record the PayU transaction id. The approval
  // code travels through PayU in udf1. Best-effort: never block the redirect.
  if (success) {
    await markCouponPaid(params.udf1 ?? "", params.txnid ?? "");
  }

  const dest = success ? "/pay-now/success" : "/pay-now/failure";

  const query = new URLSearchParams({
    txnid: params.txnid ?? "",
    amount: params.amount ?? "",
    status: params.status ?? "",
    ...(valid ? {} : { reason: "verification_failed" }),
  });

  // PayU POSTs here; redirect the browser to a GET result page.
  return NextResponse.redirect(`${origin}${dest}?${query.toString()}`, {
    status: 303,
  });
}
