"use client";

import { useState } from "react";

const inputClass =
  "w-full rounded-xl bg-white px-4 py-3 text-[15px] text-ink ring-1 ring-brand-cream transition placeholder:text-muted/70 focus:outline-none focus:ring-2 focus:ring-brand-1";
const labelClass = "mb-1.5 block text-sm font-semibold text-ink";

type Lookup = {
  studentName: string | null;
  applicationNo: string | null;
  enrollmentNo: string | null;
  email: string | null;
  programName: string | null;
  sessionName: string | null;
  centerName: string | null;
  status: string | null;
  currentTerm: string | null;
  nextTerm: string | null;
  reRegistrationFee: number;
  reRegistrationNote: string | null;
  admitCardSemester: number | null;
  admitCardFee: number;
};

type Kind = "re_registration" | "admit_card";

function formatINR(amount: number | null) {
  if (amount == null) return "—";
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

function Detail({ label, value }: { label: string; value: string | null }) {
  if (!value) return null;
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wide text-muted">{label}</p>
      <p className="mt-0.5 text-[15px] font-semibold text-ink">{value}</p>
    </div>
  );
}

export default function StudentFeePayment() {
  const [reference, setReference] = useState("");
  const [mobile, setMobile] = useState("");
  const [lookup, setLookup] = useState<Lookup | null>(null);
  const [loading, setLoading] = useState(false);
  const [paying, setPaying] = useState<Kind | null>(null);
  const [error, setError] = useState<string | null>(null);

  function reset() {
    setLookup(null);
    setError(null);
  }

  async function handleLookup(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLookup(null);
    setLoading(true);
    try {
      const res = await fetch("/api/student-fee/lookup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ reference, mobile }),
      });
      const json = await res.json();
      if (!res.ok) setError(json.error ?? "Could not fetch your fee. Please try again.");
      else setLookup(json as Lookup);
    } catch {
      setError("Network error. Please check your connection and try again.");
    }
    setLoading(false);
  }

  async function handlePay(kind: Kind, amount: number) {
    if (!lookup) return;
    setError(null);
    setPaying(kind);
    try {
      const res = await fetch("/api/student-fee/initiate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          reference,
          mobile,
          kind,
          amount,
          firstname: lookup.studentName ?? "Student",
          email: lookup.email ?? undefined,
        }),
      });
      const json = (await res.json()) as {
        paymentUrl?: string;
        params?: Record<string, string>;
        error?: string;
      };
      if (!res.ok || !json.paymentUrl || !json.params) {
        setError(json.error ?? "Could not start payment. Please try again.");
        setPaying(null);
        return;
      }
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
      setPaying(null);
    }
  }

  const nothingDue =
    lookup && lookup.reRegistrationFee <= 0 && lookup.admitCardFee <= 0;

  return (
    <div className="rounded-2xl bg-white p-7 ring-1 ring-brand-cream sm:p-10">
      <form onSubmit={handleLookup} className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="reference" className={labelClass}>
            Application / Enrollment Number *
          </label>
          <input
            id="reference"
            value={reference}
            onChange={(e) => {
              setReference(e.target.value);
              reset();
            }}
            type="text"
            required
            placeholder="e.g. ADM-2025-00053"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="mobile" className={labelClass}>
            Registered Mobile Number *
          </label>
          <input
            id="mobile"
            value={mobile}
            onChange={(e) => {
              setMobile(e.target.value);
              reset();
            }}
            type="tel"
            required
            inputMode="numeric"
            placeholder="10-digit mobile number"
            className={inputClass}
          />
        </div>

        {error && (
          <div className="rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700 ring-1 ring-red-200 sm:col-span-2">
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
              {loading ? "Checking…" : "Show My Fee"}
            </button>
          </div>
        )}
      </form>

      {lookup && (
        <div className="mt-7 border-t border-brand-cream pt-6">
          <div className="grid gap-4 sm:grid-cols-3">
            <Detail label="Student" value={lookup.studentName} />
            <Detail label="Programme" value={lookup.programName} />
            <Detail label="Session" value={lookup.sessionName} />
            <Detail label="Application No" value={lookup.applicationNo} />
            <Detail label="Enrollment No" value={lookup.enrollmentNo} />
            <Detail label="Current Term" value={lookup.currentTerm} />
          </div>

          <div className="mt-7 grid gap-4">
            {/* Re-registration */}
            <div className="rounded-xl bg-brand-cream/30 p-5 ring-1 ring-brand-cream">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                Re-Registration
                {lookup.nextTerm ? ` — ${lookup.nextTerm}` : ""}
              </p>
              {lookup.reRegistrationFee > 0 ? (
                <>
                  <p className="mt-1 text-3xl font-extrabold text-ink">
                    {formatINR(lookup.reRegistrationFee)}
                  </p>
                  <button
                    type="button"
                    onClick={() => handlePay("re_registration", lookup.reRegistrationFee)}
                    disabled={paying !== null}
                    className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-7 py-3 font-semibold text-white shadow-md transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                  >
                    {paying === "re_registration" ? "Processing…" : "💳 Pay Re-Registration Fee"}
                  </button>
                  <p className="mt-3 text-sm text-muted">
                    Your term moves forward once the university approves the request that this
                    payment raises.
                  </p>
                </>
              ) : (
                <p className="mt-1 text-sm text-muted">
                  {lookup.reRegistrationNote ?? "Nothing to pay right now."}
                </p>
              )}
            </div>

            {/* Admit card */}
            <div className="rounded-xl bg-brand-cream/30 p-5 ring-1 ring-brand-cream">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                Admit Card
                {lookup.admitCardSemester ? ` — Semester ${lookup.admitCardSemester}` : ""}
              </p>
              {lookup.admitCardFee > 0 ? (
                <>
                  <p className="mt-1 text-3xl font-extrabold text-ink">
                    {formatINR(lookup.admitCardFee)}
                  </p>
                  <button
                    type="button"
                    onClick={() => handlePay("admit_card", lookup.admitCardFee)}
                    disabled={paying !== null}
                    className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-7 py-3 font-semibold text-white shadow-md transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                  >
                    {paying === "admit_card" ? "Processing…" : "💳 Pay Admit Card Fee"}
                  </button>
                  <p className="mt-3 text-sm text-muted">
                    This clears the fee for Semester {lookup.admitCardSemester}, which is what
                    releases that semester&rsquo;s admit card.
                  </p>
                </>
              ) : (
                <p className="mt-1 text-sm text-muted">
                  Your fee is clear — there is nothing to pay for your admit card.
                </p>
              )}
            </div>
          </div>

          {nothingDue && (
            <p className="mt-5 rounded-xl bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-800 ring-1 ring-emerald-200">
              You have no dues at the moment. If you were expecting a fee here, please contact
              your study centre.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
