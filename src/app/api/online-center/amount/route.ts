import { NextRequest, NextResponse } from "next/server";
import { rpc } from "@/lib/supabaseRpc";

// Look up an EXISTING Admission Partner's payable amount by its approval code.
//
// The partner may type either the printed coupon code ("CPNB8F953A330") or the
// "approval code" — the first 8 hex characters of the coupon's UUID. Both forms
// are handled inside the database function.
//
// This used to read the `coupons` and `centers` tables straight through
// PostgREST with the anon key. Those tables are no longer anon-readable (the
// anon key ships in public JavaScript, so anyone holding it could read or mint
// approval codes), and this lookup quietly began answering "no partner found"
// for every code. It now goes through approval_code_lookup, which returns just
// these fields. See website_public_api.sql in the admin app repo.

type LookupRow = {
  approval_code: string;
  amount: number | null;
  is_paid: boolean;
  is_reviewing: boolean;
  center_name: string | null;
  center_email: string | null;
  center_phone: string | null;
};

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

  const rawInput = String(body.approvalCode ?? "").trim();
  if (!rawInput) {
    return NextResponse.json(
      { error: "Please enter a valid approval code." },
      { status: 400 }
    );
  }

  let rows: LookupRow[];
  try {
    rows = await rpc<LookupRow[]>("approval_code_lookup", { p_code: rawInput });
  } catch (err) {
    if (err instanceof Error && err.message === "not-configured") {
      return NextResponse.json(
        { error: "Payment lookup is not configured. Please contact support." },
        { status: 500 }
      );
    }
    return NextResponse.json(
      { error: "Could not reach the payment service. Please try again later." },
      { status: 502 }
    );
  }

  const row = rows?.[0];
  if (!row) {
    return NextResponse.json(
      {
        error:
          "No partner found for that approval code. Please check and try again.",
      },
      { status: 404 }
    );
  }

  return NextResponse.json({
    found: true,
    // The canonical approval code. The client sends this on to PayU so the
    // txnid carries the right code however the partner typed it.
    approvalCode: row.approval_code,
    centerName: row.center_name,
    email: row.center_email,
    mobile: normalizeMobile(String(row.center_phone ?? "")) || null,
    amount: row.amount,
    // Verified by the Account Dept, or already consumed — nothing left to pay.
    isPaid: Boolean(row.is_paid),
    // Paid online but not yet verified — don't ask the partner to pay twice.
    isReviewing: Boolean(row.is_reviewing),
  });
}
