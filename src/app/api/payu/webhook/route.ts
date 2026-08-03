import { NextRequest, NextResponse } from "next/server";
import {
  confirmStudentPayment,
  getPayuConfig,
  markCouponPaid,
  verifyPaymentByTxnid,
  verifyResponseHash,
} from "@/lib/payu";

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

  const txnid = params.txnid ?? "";

  // Primary: authoritative server-to-server status check.
  let success = false;
  try {
    const tx = await verifyPaymentByTxnid(txnid);
    if (tx && String(tx.status).toLowerCase() === "success") success = true;
  } catch {
    // fall back to hash verification
  }
  if (!success) {
    try {
      const { key, salt } = getPayuConfig();
      if (params.status === "success" && verifyResponseHash(params, key, salt)) {
        success = true;
      }
    } catch {
      // ignore
    }
  }

  if (success) {
    // Same two-kinds handling as the browser callback: a student fee is
    // identified by its pre-recorded intent, everything else carries an
    // approval code at the front of the txnid. Both paths are idempotent, so
    // it does not matter which of the two notifications arrives first.
    const wasStudentFee = await confirmStudentPayment(txnid);
    if (!wasStudentFee) await markCouponPaid(txnid, txnid);
  }

  // PayU just needs a 200 to consider the notification delivered.
  return NextResponse.json({ ok: true });
}
