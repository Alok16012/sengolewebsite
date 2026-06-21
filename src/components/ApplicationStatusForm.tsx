"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  STATUS_STORAGE_KEY,
  STATUS_RESULT_PATH,
  type ApplicationKind,
  type StatusResult,
  type StoredStatus,
} from "@/lib/application-status";

const inputClass =
  "w-full rounded-xl bg-white px-4 py-3 text-[15px] text-ink ring-1 ring-brand-cream transition placeholder:text-muted/70 focus:outline-none focus:ring-2 focus:ring-brand-1";
const labelClass = "mb-1.5 block text-sm font-semibold text-ink";

type Props = {
  // Which application type this form looks up. Defaults to "center" so the
  // existing center page keeps working without changes.
  kind?: ApplicationKind;
};

// Per-type config: which API to call, the back path for the result page, and
// the application-number placeholder.
const CONFIG: Record<ApplicationKind, { apiPath: string; backPath: string; placeholder: string }> = {
  center: {
    apiPath: "/api/application-status",
    backPath: "/application-status",
    placeholder: "E.g. APP-2026-7K3F9A",
  },
  student: {
    apiPath: "/api/application-status/student",
    backPath: "/application-status/student",
    placeholder: "E.g. STU-2026-7K3F9A",
  },
};

export default function ApplicationStatusForm({ kind = "center" }: Props) {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const config = CONFIG[kind];

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    const data = new FormData(e.currentTarget);
    const payload = {
      applicationNo: data.get("applicationNo"),
      email: data.get("email"),
    };

    // Open the result tab synchronously, as a direct response to the click, so
    // the browser's popup blocker treats it as user-initiated. The result page
    // waits (polls localStorage) until we write the data below.
    const resultWindow = window.open(STATUS_RESULT_PATH, "_blank");

    try {
      const res = await fetch(config.apiPath, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (!res.ok) {
        setError(json.error ?? "Could not fetch your application status. Please try again.");
        resultWindow?.close();
        setSubmitting(false);
        return;
      }
      // Pass the result via localStorage so the newly opened tab can read it
      // (sessionStorage is per-tab and wouldn't be visible there). We keep the
      // email and other PII out of the URL entirely.
      try {
        const stored: StoredStatus = {
          kind,
          result: json as StatusResult,
          backPath: config.backPath,
        };
        localStorage.setItem(STATUS_STORAGE_KEY, JSON.stringify(stored));
      } catch {
        // localStorage can throw in private mode; fall back to same-tab nav.
      }
      // If the popup was blocked (no window handle), navigate in this tab.
      if (!resultWindow) {
        router.push(STATUS_RESULT_PATH);
      }
      setSubmitting(false);
    } catch {
      setError("Network error. Please check your connection and try again.");
      resultWindow?.close();
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
            placeholder={config.placeholder}
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
