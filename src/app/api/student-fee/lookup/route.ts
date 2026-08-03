import { NextRequest, NextResponse } from "next/server";
import { rpc } from "@/lib/supabaseRpc";

// What a student currently owes: the re-registration fee for their next term,
// and the shortfall that unlocks their next semester's admit card.
//
// The mobile number is required as well as the application number. The database
// function checks both, so this endpoint cannot be used to walk the student
// list with nothing but an application number.

type FeeRow = {
  found: boolean;
  student_name: string | null;
  application_no: string | null;
  enrollment_no: string | null;
  email: string | null;
  mobile: string | null;
  program_name: string | null;
  session_name: string | null;
  center_name: string | null;
  status: string | null;
  current_term: string | null;
  next_term: string | null;
  fee_collected: number | null;
  re_registration_fee: number | null;
  re_registration_note: string | null;
  admit_card_sem: number | null;
  admit_card_fee: number | null;
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

  if (!reference || !mobile) {
    return NextResponse.json(
      { error: "Application number and registered mobile number are both required." },
      { status: 400 }
    );
  }

  let rows: FeeRow[];
  try {
    rows = await rpc<FeeRow[]>("student_fee_lookup", {
      p_ref: reference,
      p_mobile: mobile,
    });
  } catch (err) {
    if (err instanceof Error && err.message === "not-configured") {
      return NextResponse.json(
        { error: "Fee lookup is not configured. Please contact the university." },
        { status: 500 }
      );
    }
    return NextResponse.json(
      { error: "Could not reach the fee service. Please try again later." },
      { status: 502 }
    );
  }

  const row = rows?.[0];
  if (!row?.found) {
    return NextResponse.json(
      {
        error:
          "No student found for that application number and mobile number. Please check both and try again.",
      },
      { status: 404 }
    );
  }

  return NextResponse.json({
    found: true,
    studentName: row.student_name,
    applicationNo: row.application_no,
    enrollmentNo: row.enrollment_no,
    email: row.email,
    mobile: row.mobile,
    programName: row.program_name,
    sessionName: row.session_name,
    centerName: row.center_name,
    status: row.status,
    currentTerm: row.current_term,
    nextTerm: row.next_term,
    feeCollected: row.fee_collected,
    reRegistrationFee: row.re_registration_fee ?? 0,
    reRegistrationNote: row.re_registration_note,
    admitCardSemester: row.admit_card_sem,
    admitCardFee: row.admit_card_fee ?? 0,
  });
}
