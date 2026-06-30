import { NextRequest, NextResponse } from "next/server";

// Look up an EXISTING Admission Partner's payable amount by its approval code,
// from the admin app's Supabase.
//
// In the admin app an "approval code" is the first 8 hex characters of an
// `approval`-type coupon's UUID `id` (e.g. coupon id
// "ca0ed0f3-9c1a-4f05-..." → approval code "CA0ED0F3"). The coupon's
// `face_value` is the amount the partner must pay, and it links to the
// `centers` table via `center_id` for the partner's name / contact details.

type CouponRow = {
  id: string;
  center_id: string | null;
  face_value: number | null;
  is_used: boolean | null;
  is_activated: boolean | null;
  payment_txn_id: string | null;
};

type CenterRow = {
  center_name: string | null;
  email: string | null;
  phone: string | null;
  contact_mobile: string | null;
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

  // Accept whatever the partner was given. Two forms are supported:
  //   1. The full coupon_code (e.g. "CPNA93B932820").
  //   2. The "approval code" = the leading 8 hex chars of the coupon's UUID
  //      (e.g. "BE4A92E9"); a full coupon UUID is tolerated too.
  const rawInput = String(body.approvalCode ?? "").trim();
  if (!rawInput) {
    return NextResponse.json(
      { error: "Please enter a valid approval code." },
      { status: 400 }
    );
  }
  const code = (rawInput.toLowerCase().match(/[0-9a-f]{8}/) ?? [])[0];

  const baseUrl = process.env.SUPABASE_URL;
  const anonKey = process.env.SUPABASE_ANON_KEY;
  if (!baseUrl || !anonKey) {
    return NextResponse.json(
      { error: "Payment lookup is not configured. Please contact support." },
      { status: 500 }
    );
  }

  const headers = { apikey: anonKey, Authorization: `Bearer ${anonKey}` };
  const select =
    "select=id,center_id,face_value,is_used,is_activated,payment_txn_id";

  async function findCoupon(query: string): Promise<CouponRow | undefined> {
    const res = await fetch(`${baseUrl}/rest/v1/coupons?${query}&${select}`, {
      headers,
      cache: "no-store",
    });
    if (!res.ok) throw new Error("lookup failed");
    return ((await res.json()) as CouponRow[])[0];
  }

  let coupon: CouponRow | undefined;
  try {
    // 1) Exact coupon_code match (the code printed for the partner).
    coupon = await findCoupon(
      `coupon_code=eq.${encodeURIComponent(rawInput.toUpperCase())}` +
        `&coupon_type=eq.approval`
    );
    // 2) Fallback: treat the input as the UUID-prefix approval code. UUIDs are
    //    ordered, so a range over the first segment matches that prefix.
    if (!coupon && code) {
      coupon = await findCoupon(
        `id=gte.${code}-0000-0000-0000-000000000000` +
          `&id=lte.${code}-ffff-ffff-ffff-ffffffffffff` +
          `&coupon_type=eq.approval`
      );
    }
  } catch {
    return NextResponse.json(
      { error: "Could not reach the payment service. Please try again later." },
      { status: 502 }
    );
  }

  if (!coupon) {
    return NextResponse.json(
      {
        error:
          "No partner found for that approval code. Please check and try again.",
      },
      { status: 404 }
    );
  }

  // Fetch the linked partner's details (best-effort — payment can proceed even
  // if this lookup returns nothing).
  let center: CenterRow | undefined;
  if (coupon.center_id) {
    try {
      const centerUrl =
        `${baseUrl}/rest/v1/centers` +
        `?id=eq.${encodeURIComponent(coupon.center_id)}` +
        `&select=center_name,email,phone,contact_mobile`;
      const res = await fetch(centerUrl, { headers, cache: "no-store" });
      if (res.ok) {
        center = ((await res.json()) as CenterRow[])[0];
      }
    } catch {
      // ignore — partner details are optional
    }
  }

  const mobileRaw = center?.contact_mobile ?? center?.phone ?? "";

  return NextResponse.json({
    found: true,
    // The canonical approval code (first 8 hex of the coupon UUID). The client
    // sends this to PayU so the txnid carries the right code regardless of
    // whether the partner typed the coupon_code or the approval code.
    approvalCode: coupon.id.slice(0, 8),
    centerName: center?.center_name ?? null,
    email: center?.email ?? null,
    mobile: normalizeMobile(String(mobileRaw)) || null,
    amount: coupon.face_value ?? null,
    // Verified by the Account Dept (is_activated) or already consumed (is_used) —
    // nothing more to pay.
    isPaid: Boolean(coupon.is_activated || coupon.is_used),
    // Paid online (payment_txn_id) but not yet verified by the Account Dept —
    // the payment is under review, so don't ask the partner to pay again.
    isReviewing: Boolean(
      coupon.payment_txn_id && !coupon.is_activated && !coupon.is_used
    ),
  });
}
