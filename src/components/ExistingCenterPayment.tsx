"use client";

import { useState } from "react";

const inputClass =
  "w-full rounded-xl bg-white px-4 py-3 text-[15px] text-ink ring-1 ring-brand-cream transition placeholder:text-muted/70 focus:outline-none focus:ring-2 focus:ring-brand-1";
const labelClass = "mb-1.5 block text-sm font-semibold text-ink";

type Lookup = {
  approvalCode: string | null;
  centerName: string | null;
  email: string | null;
  mobile: string | null;
  amount: number | null;
  isPaid: boolean;
  isInactive: boolean;
};

function formatINR(amount: number | null) {
  if (amount == null) return "—";
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

export default function ExistingCenterPayment() {
  const [approvalCode, setApprovalCode] = useState("");
  const [lookup, setLookup] = useState<Lookup | null>(null);
  const [loading, setLoading] = useState(false);
  const [paying, setPaying] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleShowAmount(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLookup(null);
    setLoading(true);
    try {
      const res = await fetch("/api/online-center/amount", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ approvalCode }),
      });
      const json = await res.json();
      if (!res.ok) {
        setError(json.error ?? "Could not fetch the amount. Please try again.");
      } else if ((json as Lookup).isInactive) {
        // Activated before but switched off by the admin — not payable online.
        setError("Your Approval Code is inactive. To request activation, please contact the Deputy Director or fill out the Enquiry Form.");
      } else if ((json as Lookup).isPaid) {
        // Spent codes (paid via PayU, or marked Approved/Activated by the admin)
        // must not be charged again — show a clear message instead of an amount.
        setError("This approval code is already approved / paid. No further payment is required.");
      } else {
        setLookup(json as Lookup);
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    }
    setLoading(false);
  }

  async function handlePayNow() {
    if (!lookup) return;
    setError(null);
    setPaying(true);
    try {
      const res = await fetch("/api/payu/initiate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstname: lookup.centerName || "Center",
          email: lookup.email || "noreply@sengolinternationaluniversity.edu.in",
          phone: lookup.mobile || "9999999999",
          amount: lookup.amount,
          productinfo: "Admission Partner Fee",
          // Use the canonical approval code resolved by the lookup, not the raw
          // typed value (the partner may have typed the coupon_code instead).
          udf1: lookup.approvalCode ?? approvalCode.trim(),
        }),
      });
      const json = (await res.json()) as {
        paymentUrl?: string;
        params?: Record<string, string>;
        error?: string;
      };
      if (!res.ok || !json.paymentUrl || !json.params) {
        setError(json.error ?? "Could not start payment. Please try again.");
        setPaying(false);
        return;
      }

      // Build a hidden form and POST to PayU's hosted checkout.
      const form = document.createElement("form");
      form.method = "POST";
      form.action = json.paymentUrl;
      for (const [name, value] of Object.entries(json.params)) {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = name;
        input.value = value;
        form.appendChild(input);
      }
      document.body.appendChild(form);
      form.submit();
    } catch {
      setError("Network error. Please check your connection and try again.");
      setPaying(false);
    }
  }

  // Steps 1 & 2 — enter details, show amount, pay.
  return (
    <div className="rounded-2xl bg-white p-7 ring-1 ring-brand-cream sm:p-10">
      <form onSubmit={handleShowAmount} className="grid gap-5">
        <div>
          <label htmlFor="approvalCode" className={labelClass}>
            Approval Code *
          </label>
          <input
            id="approvalCode"
            value={approvalCode}
            onChange={(e) => {
              setApprovalCode(e.target.value);
              setLookup(null);
            }}
            type="text"
            required
            placeholder="Enter your approval code"
            className={inputClass}
          />
        </div>

        {error && (
          <div className="rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700 ring-1 ring-red-200">
            {error}
          </div>
        )}

        {!lookup && (
          <div>
            <button
              type="submit"
              disabled={loading}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl brand-gradient px-7 py-3.5 font-semibold text-white shadow-md transition hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
            >
              {loading ? "Checking…" : "Show Amount"}
            </button>
          </div>
        )}
      </form>

      {lookup && (
        <div className="mt-6 border-t border-brand-cream pt-6">
          <div className="mt-2 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                Amount Payable
              </p>
              <p className="mt-1 text-3xl font-extrabold text-ink">
                {formatINR(lookup.amount)}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={handlePayNow}
            disabled={paying}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-7 py-3.5 font-semibold text-white shadow-md transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
          >
            {paying ? "Processing…" : "💳 Pay Now"}
          </button>
        </div>
      )}
    </div>
  );
}
