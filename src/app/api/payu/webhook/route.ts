import { NextRequest, NextResponse } from "next/server";
import { getPayuConfig, markCouponPaid, verifyResponseHash } from "@/lib/payu";

// PayU server-to-server (S2S) webhook. Unlike the browser `callback`, PayU's
// servers POST here directly, so it fires even if the customer closes the
// browser before being redirected back. We verify the signature and, on a
// genuine success, mark the approval coupon paid in Supabase. This is
// idempotent with the browser callback — whichever arrives first (or both)
// writes the same paid state.
//
// Configure this URL in the PayU dashboard's webhook / S2S settings:
//   https://<your-domain>/api/payu/webhook
export async function POST(request: NextRequest) {
  let params: Record<string, string> = {};
  try {
    const form = await request.formData();
    for (const [k, v] of form.entries()) {
      params[k] = typeof v === "string" ? v : "";
    }
  } catch {
    // PayU may send JSON in some integrations; fall back to that.
    try {
      params = (await request.json()) as Record<string, string>;
    } catch {
      return NextResponse.json({ ok: false, error: "bad payload" }, { status: 400 });
    }
  }

  let valid = false;
  try {
    const { key, salt } = getPayuConfig();
    valid = verifyResponseHash(params, key, salt);
  } catch {
    valid = false;
  }

  if (valid && params.status === "success") {
    await markCouponPaid(params.txnid ?? "", params.txnid ?? "");
  }

  // PayU just needs a 200 to consider the notification delivered.
  return NextResponse.json({ ok: true });
}
