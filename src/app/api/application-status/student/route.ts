import { NextRequest, NextResponse } from "next/server";

// Look up a STUDENT application in the admin app's Supabase database by its
// application number + email, and return a sanitized status (plus a payment
// link when the fee is still unpaid). Mirrors the center lookup, but reads the
// `students` table.
//
// NOTE: the table name (`students`) and column names below are assumed to match
// the admin app's schema. If the admin app uses different names, update
// STUDENTS_TABLE and the SELECT_FIELDS / row mapping accordingly.

const STUDENTS_TABLE = "students";

type StudentRow = {
  application_no: string | null;
  student_name: string | null;
  email: string | null;
  approval_status: string | null;
  payment_status: string | null;
  payment_amount: number | null;
  base_fee: number | null;
  amount_paid: number | null;
  payment_link_url: string | null;
  payment_paid_at: string | null;
  created_at: string | null;
};

const SELECT_FIELDS =
  "application_no,student_name,email,approval_status,payment_status," +
  "payment_amount,base_fee,amount_paid,payment_link_url,payment_paid_at,created_at";

export async function POST(request: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const applicationNo = String(body.applicationNo ?? "").trim();
  const email = String(body.email ?? "").trim().toLowerCase();

  if (!applicationNo || !email) {
    return NextResponse.json(
      { error: "Application number and email are required." },
      { status: 400 }
    );
  }

  const baseUrl = process.env.SUPABASE_URL;
  const anonKey = process.env.SUPABASE_ANON_KEY;
  if (!baseUrl || !anonKey) {
    return NextResponse.json(
      { error: "Status lookup is not configured. Please contact support." },
      { status: 500 }
    );
  }

  const url =
    `${baseUrl}/rest/v1/${STUDENTS_TABLE}` +
    `?application_no=eq.${encodeURIComponent(applicationNo)}` +
    `&select=${encodeURIComponent(SELECT_FIELDS)}`;

  let rows: StudentRow[];
  try {
    const res = await fetch(url, {
      headers: {
        apikey: anonKey,
        Authorization: `Bearer ${anonKey}`,
      },
      cache: "no-store",
    });
    if (!res.ok) {
      return NextResponse.json(
        { error: "Could not reach the status service. Please try again later." },
        { status: 502 }
      );
    }
    rows = (await res.json()) as StudentRow[];
  } catch {
    return NextResponse.json(
      { error: "Network error. Please try again later." },
      { status: 502 }
    );
  }

  // Match the email too, so the application number alone can't reveal data.
  const row = rows.find((r) => (r.email ?? "").trim().toLowerCase() === email);

  if (!row) {
    return NextResponse.json(
      {
        error:
          "No application found for that application number and email. Please check and try again.",
      },
      { status: 404 }
    );
  }

  const isPaid = (row.payment_status ?? "").toLowerCase() === "paid";
  const feeAmount = row.payment_amount ?? row.base_fee ?? null;

  return NextResponse.json({
    found: true,
    applicationNo: row.application_no,
    // The result UI shows this name line under the application number.
    centerName: row.student_name,
    approvalStatus: row.approval_status,
    paymentStatus: row.payment_status,
    isPaid,
    feeAmount,
    amountPaid: row.amount_paid,
    paymentLinkUrl: isPaid ? null : row.payment_link_url,
    paymentPaidAt: row.payment_paid_at,
    submittedAt: row.created_at,
  });
}
