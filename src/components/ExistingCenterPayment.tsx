"use client";

import { useState } from "react";

const inputClass =
  "w-full rounded-xl bg-white px-4 py-3 text-[15px] text-ink ring-1 ring-brand-cream transition placeholder:text-muted/70 focus:outline-none focus:ring-2 focus:ring-brand-1";
const labelClass = "mb-1.5 block text-sm font-semibold text-ink";

type Lookup = { centerName: string | null; amount: number | null; isPaid: boolean };
type Receipt = {
  referenceNo: string;
  approvalCode: string;
  mobile: string;
  centerName: string | null;
  amount: number | null;
  paidAt: string;
};

function formatINR(amount: number | null) {
  if (amount == null) return "—";
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

function makeReferenceNo() {
  const stamp = Date.now().toString(36).toUpperCase();
  const rand = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `OIC-${stamp}-${rand}`;
}

export default function ExistingCenterPayment() {
  const [approvalCode, setApprovalCode] = useState("");
  const [mobile, setMobile] = useState("");
  const [lookup, setLookup] = useState<Lookup | null>(null);
  const [receipt, setReceipt] = useState<Receipt | null>(null);
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
        body: JSON.stringify({ approvalCode, mobile }),
      });
      const json = await res.json();
      if (!res.ok) {
        setError(json.error ?? "Could not fetch the amount. Please try again.");
      } else {
        setLookup(json as Lookup);
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    }
    setLoading(false);
  }

  function handlePayNow() {
    setPaying(true);
    // Generate an acknowledgment receipt with a reference number.
    setReceipt({
      referenceNo: makeReferenceNo(),
      approvalCode: approvalCode.trim(),
      mobile: mobile.trim(),
      centerName: lookup?.centerName ?? null,
      amount: lookup?.amount ?? null,
      paidAt: new Date().toLocaleString("en-IN"),
    });
    setPaying(false);
  }

  function reset() {
    setApprovalCode("");
    setMobile("");
    setLookup(null);
    setReceipt(null);
    setError(null);
  }

  // Step 3 — receipt with reference number.
  if (receipt) {
    return (
      <div className="rounded-2xl bg-white p-7 ring-1 ring-brand-cream sm:p-10">
        <div className="flex flex-col items-center text-center">
          <span className="grid h-14 w-14 place-items-center rounded-full bg-emerald-50 text-3xl text-emerald-600 ring-1 ring-emerald-200">
            ✓
          </span>
          <h3 className="mt-4 text-2xl font-extrabold text-ink">Payment Receipt</h3>
          <p className="mt-1 text-[15px] text-muted">
            Please save this reference number for your records.
          </p>
        </div>

        <dl className="mt-8 divide-y divide-brand-cream">
          {[
            ["Reference No", receipt.referenceNo],
            ["Center Name", receipt.centerName || "—"],
            ["Approval Code", receipt.approvalCode],
            ["Mobile No", receipt.mobile],
            ["Amount Paid", formatINR(receipt.amount)],
            ["Date & Time", receipt.paidAt],
          ].map(([label, value]) => (
            <div key={label} className="flex items-center justify-between gap-4 py-3">
              <dt className="text-sm font-semibold text-muted">{label}</dt>
              <dd className="text-right text-[15px] font-bold text-ink">{value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-8 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => window.print()}
            className="inline-flex items-center justify-center gap-2 rounded-xl brand-gradient px-7 py-3 font-semibold text-white shadow-md transition hover:opacity-95"
          >
            🖨️ Print Receipt
          </button>
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center justify-center rounded-xl px-7 py-3 font-semibold text-brand-1 ring-1 ring-brand-cream transition hover:bg-brand-light"
          >
            New Payment
          </button>
        </div>
      </div>
    );
  }

  // Steps 1 & 2 — enter details, show amount, pay.
  return (
    <div className="rounded-2xl bg-white p-7 ring-1 ring-brand-cream sm:p-10">
      <form onSubmit={handleShowAmount} className="grid gap-5 sm:grid-cols-2">
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
        <div>
          <label htmlFor="mobile" className={labelClass}>
            Mobile No *
          </label>
          <input
            id="mobile"
            value={mobile}
            onChange={(e) => {
              setMobile(e.target.value);
              setLookup(null);
            }}
            type="tel"
            inputMode="numeric"
            required
            placeholder="10-digit mobile number"
            className={inputClass}
          />
        </div>

        {error && (
          <div className="sm:col-span-2 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700 ring-1 ring-red-200">
            {error}
          </div>
        )}

        {!lookup && (
          <div className="sm:col-span-2">
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
          {lookup.centerName && (
            <p className="text-[15px] text-ink/80">{lookup.centerName}</p>
          )}
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

          {lookup.isPaid ? (
            <p className="mt-6 rounded-xl bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700 ring-1 ring-emerald-200">
              This center&apos;s fee is already marked as paid.
            </p>
          ) : (
            <button
              type="button"
              onClick={handlePayNow}
              disabled={paying}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-7 py-3.5 font-semibold text-white shadow-md transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
            >
              {paying ? "Processing…" : "💳 Pay Now"}
            </button>
          )}
        </div>
      )}
    </div>
  );
}
