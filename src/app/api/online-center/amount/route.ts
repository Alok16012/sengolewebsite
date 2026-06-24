import { NextRequest, NextResponse } from "next/server";

// Look up an EXISTING Online Information Center's payable amount by its
// approval code + registered mobile number, from the admin app's Supabase
// `centers` table.
//
// NOTE: the column names `approval_code` and `mobile` are ASSUMED to match the
// admin app's schema. If the admin app uses different names (e.g. `phone`,
// `approval_no`), update APPROVAL_CODE_COL / MOBILE_COL below.

const APPROVAL_CODE_COL = "approval_code";
const MOBILE_COL = "mobile";

type CenterRow = {
  center_name: string | null;
  email: string | null;
  payment_amount: number | null;
  base_fee: number | null;
  amount_paid: number | null;
  payment_status: string | null;
  [key: string]: unknown;
};

const SELECT_FIELDS =
  `center_name,email,payment_amount,base_fee,amount_paid,payment_status,` +
  `${APPROVAL_CODE_COL},${MOBILE_COL}`;

function normalizeMobile(value: string) {
  return value.replace(/\D/g, "").slice(-10);
}

export async function POST(request: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const approvalCode = String(body.approvalCode ?? "").trim();
  const mobile = normalizeMobile(String(body.mobile ?? ""));

  if (!approvalCode || !mobile) {
    return NextResponse.json(
      { error: "Approval code and mobile number are required." },
      { status: 400 }
    );
  }

  const baseUrl = process.env.SUPABASE_URL;
  const anonKey = process.env.SUPABASE_ANON_KEY;
  if (!baseUrl || !anonKey) {
    return NextResponse.json(
      { error: "Payment lookup is not configured. Please contact support." },
      { status: 500 }
    );
  }

  const url =
    `${baseUrl}/rest/v1/centers` +
    `?${APPROVAL_CODE_COL}=eq.${encodeURIComponent(approvalCode)}` +
    `&select=${encodeURIComponent(SELECT_FIELDS)}`;

  let rows: CenterRow[];
  try {
    const res = await fetch(url, {
      headers: { apikey: anonKey, Authorization: `Bearer ${anonKey}` },
      cache: "no-store",
    });
    if (!res.ok) {
      return NextResponse.json(
        { error: "Could not reach the payment service. Please try again later." },
        { status: 502 }
      );
    }
    rows = (await res.json()) as CenterRow[];
  } catch {
    return NextResponse.json(
      { error: "Network error. Please try again later." },
      { status: 502 }
    );
  }

  // Match the mobile too, so the approval code alone can't reveal data.
  const row = rows.find(
    (r) => normalizeMobile(String(r[MOBILE_COL] ?? "")) === mobile
  );

  if (!row) {
    return NextResponse.json(
      {
        error:
          "No center found for that approval code and mobile number. Please check and try again.",
      },
      { status: 404 }
    );
  }

  const isPaid = (row.payment_status ?? "").toLowerCase() === "paid";
  const amount = row.payment_amount ?? row.base_fee ?? null;

  return NextResponse.json({
    found: true,
    centerName: row.center_name,
    email: row.email,
    amount,
    isPaid,
  });
}
