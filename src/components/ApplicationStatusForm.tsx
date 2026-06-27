"use client";

import { useState } from "react";
import { type ApplicationKind, type StatusResult } from "@/lib/application-status";
import ApplicationStatusCard from "@/components/ApplicationStatusCard";
import { ContentEyebrow, SectionTitle } from "@/components/content-blocks";

const inputClass =
  "w-full rounded-xl bg-white px-4 py-3 text-[15px] text-ink ring-1 ring-brand-cream transition placeholder:text-muted/70 focus:outline-none focus:ring-2 focus:ring-brand-1";
const labelClass = "mb-1.5 block text-sm font-semibold text-ink";

type Props = {
  // Which application type this form looks up. Defaults to "center" so the
  // existing center page keeps working without changes.
  kind?: ApplicationKind;
  eyebrow: string;
  title: string;
};

// Per-type config: which API to call and the application-number placeholder.
const CONFIG: Record<ApplicationKind, { apiPath: string; placeholder: string }> = {
  center: {
    apiPath: "/api/application-status",
    placeholder: "E.g. APP-2026-7K3F9A",
  },
  student: {
    apiPath: "/api/application-status/student",
    placeholder: "E.g. STU-2026-7K3F9A",
  },
};

export default function ApplicationStatusForm({ kind = "center", eyebrow, title }: Props) {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<StatusResult | null>(null);
  const config = CONFIG[kind];

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setResult(null);
    setSubmitting(true);

    const data = new FormData(e.currentTarget);
    const payload = {
      applicationNo: data.get("applicationNo"),
    };

    try {
      const res = await fetch(config.apiPath, {
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
      setResult(json as StatusResult);
    } catch {
      setError("Network error. Please check your connection and try again.");
    }
    setSubmitting(false);
  }

  // Once a result is found, hide the form entirely and show only the card.
  if (result) {
    return (
      <div className="mt-8">
        <ApplicationStatusCard result={result} />
        <button
          type="button"
          onClick={() => setResult(null)}
          className="mt-6 text-sm font-semibold text-brand-1 transition hover:opacity-80"
        >
          ← Check another application
        </button>
      </div>
    );
  }

  return (
    <>
      <ContentEyebrow>{eyebrow}</ContentEyebrow>
      <SectionTitle>{title}</SectionTitle>
      <form onSubmit={handleSubmit} className="mt-8 grid gap-5">
        <div>
          <label htmlFor="applicationNo" className={labelClass}>
            Application Number *
          </label>
          <input
            id="applicationNo"
            name="applicationNo"
            type="text"
            required
            placeholder={config.placeholder}
            className={inputClass}
          />
        </div>

        {error && (
          <div className="rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700 ring-1 ring-red-200">
            {error}
          </div>
        )}

        <div>
          <button
            type="submit"
            disabled={submitting}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl brand-gradient px-7 py-3.5 font-semibold text-white shadow-md transition hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
          >
            {submitting ? "Checking…" : "🔍 Check Status"}
          </button>
        </div>
      </form>
    </>
  );
}
