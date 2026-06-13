import { NextRequest, NextResponse } from "next/server";
import { getPayuConfig, verifyResponseHash } from "@/lib/payu";

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
