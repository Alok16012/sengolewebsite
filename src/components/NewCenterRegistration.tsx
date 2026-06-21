"use client";

import { useState } from "react";

const inputClass =
  "w-full rounded-xl bg-white px-4 py-3 text-[15px] text-ink ring-1 ring-brand-cream transition placeholder:text-muted/70 focus:outline-none focus:ring-2 focus:ring-brand-1";
const labelClass = "mb-1.5 block text-sm font-semibold text-ink";

type Submitted = {
  referenceNo: string;
  centerName: string;
  centerHeadName: string;
  mobile: string;
};

function makeReferenceNo() {
  const stamp = Date.now().toString(36).toUpperCase();
  const rand = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `OIC-NEW-${stamp}-${rand}`;
}

export default function NewCenterRegistration() {
  const [submitted, setSubmitted] = useState<Submitted | null>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    setSubmitted({
      referenceNo: makeReferenceNo(),
      centerName: String(data.get("centerName") ?? "").trim(),
      centerHeadName: String(data.get("centerHeadName") ?? "").trim(),
      mobile: String(data.get("mobile") ?? "").trim(),
    });
  }

  if (submitted) {
    return (
      <div className="rounded-2xl bg-white p-7 ring-1 ring-brand-cream sm:p-10">
        <div className="flex flex-col items-center text-center">
          <span className="grid h-14 w-14 place-items-center rounded-full bg-emerald-50 text-3xl text-emerald-600 ring-1 ring-emerald-200">
            ✓
          </span>
          <h3 className="mt-4 text-2xl font-extrabold text-ink">Registration Submitted</h3>
          <p className="mt-1 text-[15px] text-muted">
            Our team will review your details and get in touch on your mobile number.
          </p>
        </div>

        <dl className="mt-8 divide-y divide-brand-cream">
          {[
            ["Reference No", submitted.referenceNo],
            ["Center Name", submitted.centerName || "—"],
            ["Center Head Name", submitted.centerHeadName || "—"],
            ["Mobile No", submitted.mobile || "—"],
          ].map(([label, value]) => (
            <div key={label} className="flex items-center justify-between gap-4 py-3">
              <dt className="text-sm font-semibold text-muted">{label}</dt>
              <dd className="text-right text-[15px] font-bold text-ink">{value}</dd>
            </div>
          ))}
        </dl>

        <button
          type="button"
          onClick={() => setSubmitted(null)}
          className="mt-8 inline-flex items-center justify-center rounded-xl px-7 py-3 font-semibold text-brand-1 ring-1 ring-brand-cream transition hover:bg-brand-light"
        >
          Register Another
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-white p-7 ring-1 ring-brand-cream sm:p-10">
      <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="centerName" className={labelClass}>
            Center Name *
          </label>
          <input id="centerName" name="centerName" type="text" required className={inputClass} />
        </div>
        <div>
          <label htmlFor="centerHeadName" className={labelClass}>
            Center Head Name *
          </label>
          <input
            id="centerHeadName"
            name="centerHeadName"
            type="text"
            required
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="dob" className={labelClass}>
            Date of Birth *
          </label>
          <input id="dob" name="dob" type="date" required className={inputClass} />
        </div>
        <div>
          <label htmlFor="mobile" className={labelClass}>
            Mobile No *
          </label>
          <input
            id="mobile"
            name="mobile"
            type="tel"
            inputMode="numeric"
            required
            placeholder="10-digit mobile number"
            className={inputClass}
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="address" className={labelClass}>
            Address *
          </label>
          <textarea
            id="address"
            name="address"
            rows={2}
            required
            className={`${inputClass} resize-y`}
          />
        </div>

        <div>
          <label htmlFor="country" className={labelClass}>
            Country *
          </label>
          <input
            id="country"
            name="country"
            type="text"
            required
            defaultValue="India"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="state" className={labelClass}>
            State *
          </label>
          <input id="state" name="state" type="text" required className={inputClass} />
        </div>
        <div>
          <label htmlFor="district" className={labelClass}>
            District *
          </label>
          <input id="district" name="district" type="text" required className={inputClass} />
        </div>
        <div>
          <label htmlFor="pincode" className={labelClass}>
            Pincode *
          </label>
          <input
            id="pincode"
            name="pincode"
            type="text"
            inputMode="numeric"
            required
            placeholder="6-digit pincode"
            className={inputClass}
          />
        </div>

        <div className="sm:col-span-2">
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl brand-gradient px-7 py-3.5 font-semibold text-white shadow-md transition hover:opacity-95 sm:w-auto"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
