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

  // Accept the code as typed, then extract the leading 8 hex characters (the
  // approval code), case-insensitively. This also tolerates someone pasting a
  // full coupon UUID.
  const raw = String(body.approvalCode ?? "").trim().toLowerCase();
  const code = (raw.match(/[0-9a-f]{8}/) ?? [])[0];

  if (!code) {
    return NextResponse.json(
      { error: "Please enter a valid approval code." },
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

  const headers = { apikey: anonKey, Authorization: `Bearer ${anonKey}` };

  // Find the approval coupon whose UUID begins with the entered code. UUIDs are
  // ordered, so a range over the first segment matches any id with that prefix.
  const couponUrl =
    `${baseUrl}/rest/v1/coupons` +
    `?id=gte.${code}-0000-0000-0000-000000000000` +
    `&id=lte.${code}-ffff-ffff-ffff-ffffffffffff` +
    `&coupon_type=eq.approval` +
    `&select=id,center_id,face_value,is_used,is_activated`;

  let coupons: CouponRow[];
  try {
    const res = await fetch(couponUrl, { headers, cache: "no-store" });
    if (!res.ok) {
      return NextResponse.json(
        { error: "Could not reach the payment service. Please try again later." },
        { status: 502 }
      );
    }
    coupons = (await res.json()) as CouponRow[];
  } catch {
    return NextResponse.json(
      { error: "Network error. Please try again later." },
      { status: 502 }
    );
  }

  const coupon = coupons[0];
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
    centerName: center?.center_name ?? null,
    email: center?.email ?? null,
    mobile: normalizeMobile(String(mobileRaw)) || null,
    amount: coupon.face_value ?? null,
    isPaid: Boolean(coupon.is_used),
  });
}
