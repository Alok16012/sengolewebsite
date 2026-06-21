"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { STATUS_STORAGE_KEY, type StatusResult } from "@/lib/application-status";

const inputClass =
  "w-full rounded-xl bg-white px-4 py-3 text-[15px] text-ink ring-1 ring-brand-cream transition placeholder:text-muted/70 focus:outline-none focus:ring-2 focus:ring-brand-1";
const labelClass = "mb-1.5 block text-sm font-semibold text-ink";

export default function ApplicationStatusForm() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    const data = new FormData(e.currentTarget);
    const payload = {
      applicationNo: data.get("applicationNo"),
      email: data.get("email"),
    };

    try {
      const res = await fetch("/api/application-status", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (!res.ok) {
        setError(json.error ?? "Could not fetch your application status. Please try again.");
        setSubmitting(false);
        return;
      }
      // Stash the result and move to the dedicated result page. We pass it via
      // sessionStorage (not the URL) to keep the email and other PII out of the
      // address bar and browser history.
      try {
        sessionStorage.setItem(STATUS_STORAGE_KEY, JSON.stringify(json as StatusResult));
      } catch {
        // sessionStorage can throw in private mode; fall through to navigation.
      }
      router.push("/application-status/result");
    } catch {
      setError("Network error. Please check your connection and try again.");
      setSubmitting(false);
    }
  }

  return (
    <div className="mt-8">
      <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="applicationNo" className={labelClass}>
            Application Number *
          </label>
          <input
            id="applicationNo"
            name="applicationNo"
            type="text"
            required
            placeholder="E.g. APP-2026-7K3F9A"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Registered Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="Name@example.com"
            className={inputClass}
          />
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
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl brand-gradient px-7 py-3.5 font-semibold text-white shadow-md transition hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
          >
            {submitting ? "Checking…" : "🔍 Check Status"}
          </button>
        </div>
      </form>
    </div>
  );
}
