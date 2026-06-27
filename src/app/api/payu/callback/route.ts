import { NextRequest, NextResponse } from "next/server";
import { getPayuConfig, markCouponPaid, verifyResponseHash } from "@/lib/payu";

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
