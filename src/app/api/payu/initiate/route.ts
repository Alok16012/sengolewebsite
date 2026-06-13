import { NextRequest, NextResponse } from "next/server";
import {
  buildRequestHash,
  getPayuConfig,
  newTxnId,
} from "@/lib/payu";

export async function POST(request: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const firstname = String(body.firstname ?? "").trim();
  const email = String(body.email ?? "").trim();
  const phone = String(body.phone ?? "").trim();
  const productinfo = String(body.productinfo ?? "Fee Payment").trim();
  const rawAmount = Number(body.amount);

  if (!firstname || !email || !phone) {
    return NextResponse.json(
      { error: "Name, email and phone are required" },
      { status: 400 }
    );
  }
  if (!Number.isFinite(rawAmount) || rawAmount <= 0) {
    return NextResponse.json(
      { error: "Enter a valid amount" },
      { status: 400 }
    );
  }

  let config;
  try {
    config = getPayuConfig();
  } catch (e) {
    return NextResponse.json(
      { error: (e as Error).message },
      { status: 500 }
    );
  }

  const amount = rawAmount.toFixed(2);
  const txnid = newTxnId();

  const hash = buildRequestHash(
    { txnid, amount, productinfo, firstname, email },
    config.key,
    config.salt
  );

  const origin = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    new URL(request.url).origin;

  return NextResponse.json({
    paymentUrl: config.paymentUrl,
    params: {
      key: config.key,
      txnid,
      amount,
      productinfo,
      firstname,
      email,
      phone,
      surl: `${origin}/api/payu/callback`,
      furl: `${origin}/api/payu/callback`,
      hash,
    },
  });
}
