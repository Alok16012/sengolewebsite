import { NextRequest, NextResponse } from "next/server";
import { buildRequestHash, getPayuConfig, newStudentTxnId } from "@/lib/payu";
import { rpc } from "@/lib/supabaseRpc";

// Start a student fee payment.
//
// The amount is NOT taken on trust from the browser. student_payment_intent
// re-derives what the student actually owes and refuses the transaction if the
// two disagree, so editing the page cannot turn a ₹4,000 fee into ₹1. Only once
// the intent is stored — keyed by the transaction id — is the PayU form
// returned, which is also how the callback later knows whose payment it was.

const KINDS = new Set(["re_registration", "admit_card"]);

const LABEL: Record<string, string> = {
  re_registration: "Re-Registration Fee",
  admit_card: "Admit Card Fee",
};

export async function POST(request: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const reference = String(body.reference ?? "").trim();
  const mobile = String(body.mobile ?? "").trim();
  const kind = String(body.kind ?? "").trim();
  const firstname = String(body.firstname ?? "").trim() || "Student";
  const email =
    String(body.email ?? "").trim() ||
    "noreply@sengolinternationaluniversity.edu.in";
  const amount = Number(body.amount);

  if (!reference || !mobile || !KINDS.has(kind)) {
    return NextResponse.json({ error: "Invalid payment request." }, { status: 400 });
  }
  if (!Number.isFinite(amount) || amount <= 0) {
    return NextResponse.json({ error: "Nothing is payable right now." }, { status: 400 });
  }

  let config;
  try {
    config = getPayuConfig();
  } catch (e) {
    return NextResponse.json({ error: (e as Error).message }, { status: 500 });
  }

  const txnid = newStudentTxnId();

  let accepted = false;
  try {
    accepted = Boolean(
      await rpc<boolean>("student_payment_intent", {
        p_ref: reference,
        p_mobile: mobile,
        p_kind: kind,
        p_amount: amount,
        p_txn: txnid,
      })
    );
  } catch (err) {
    if (err instanceof Error && err.message === "not-configured") {
      return NextResponse.json(
        { error: "Payments are not configured. Please contact the university." },
        { status: 500 }
      );
    }
    return NextResponse.json(
      { error: "Could not reach the fee service. Please try again later." },
      { status: 502 }
    );
  }

  if (!accepted) {
    return NextResponse.json(
      {
        error:
          "This amount no longer matches what is due. Please reload the page and check the fee again.",
      },
      { status: 409 }
    );
  }

  const productinfo = LABEL[kind];
  const payuAmount = amount.toFixed(2);
  const hash = buildRequestHash(
    { txnid, amount: payuAmount, productinfo, firstname, email },
    config.key,
    config.salt
  );

  const origin =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    new URL(request.url).origin;

  return NextResponse.json({
    paymentUrl: config.paymentUrl,
    params: {
      key: config.key,
      txnid,
      amount: payuAmount,
      productinfo,
      firstname,
      email,
      phone: mobile,
      surl: `${origin}/api/payu/callback`,
      furl: `${origin}/api/payu/callback`,
      hash,
    },
  });
}
