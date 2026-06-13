"use client";

import { useState } from "react";

const inputClass =
  "w-full rounded-xl bg-white px-4 py-3 text-[15px] text-ink ring-1 ring-brand-cream transition placeholder:text-muted/70 focus:outline-none focus:ring-2 focus:ring-brand-1";
const labelClass = "mb-1.5 block text-sm font-semibold text-ink";

type Initiated = {
  paymentUrl: string;
  params: Record<string, string>;
};

export default function PaymentForm() {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    const data = new FormData(e.currentTarget);
    const payload = {
      firstname: data.get("firstname"),
      email: data.get("email"),
      phone: data.get("phone"),
      amount: data.get("amount"),
      productinfo: data.get("productinfo"),
    };

    try {
      const res = await fetch("/api/payu/initiate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = (await res.json()) as Initiated & { error?: string };

      if (!res.ok) {
        setError(json.error ?? "Could not start payment. Please try again.");
        setSubmitting(false);
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
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 grid gap-5 sm:grid-cols-2">
      <div>
        <label htmlFor="firstname" className={labelClass}>
          Full Name *
        </label>
        <input
          id="firstname"
          name="firstname"
          type="text"
          required
          placeholder="Your full name"
          className={inputClass}
        />
      </div>
      <div>
        <label htmlFor="email" className={labelClass}>
          Email Address *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          className={inputClass}
        />
      </div>
      <div>
        <label htmlFor="phone" className={labelClass}>
          Phone Number *
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          placeholder="+91 00000 00000"
          className={inputClass}
        />
      </div>
      <div>
        <label htmlFor="amount" className={labelClass}>
          Amount (₹) *
        </label>
        <input
          id="amount"
          name="amount"
          type="number"
          min="1"
          step="0.01"
          required
          placeholder="e.g. 5000"
          className={inputClass}
        />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="productinfo" className={labelClass}>
          Payment For *
        </label>
        <select
          id="productinfo"
          name="productinfo"
          required
          defaultValue="Admission Fee"
          className={inputClass}
        >
          <option value="Admission Fee">Admission Fee</option>
          <option value="Tuition Fee">Tuition Fee</option>
          <option value="Examination Fee">Examination Fee</option>
          <option value="Hostel Fee">Hostel Fee</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {error && (
        <div className="sm:col-span-2 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700 ring-1 ring-red-200">
          {error}
        </div>
      )}

      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-7 py-3.5 font-semibold text-white shadow-md transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
        >
          {submitting ? "Redirecting to PayU…" : "💳 Proceed to Pay"}
        </button>
        <p className="mt-3 text-xs text-muted">
          You will be securely redirected to PayU to complete your payment.
        </p>
      </div>
    </form>
  );
}
