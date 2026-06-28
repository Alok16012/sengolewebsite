"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Option = {
  value: string;
  label: string;
  description: string;
  href: string;
  icon: string;
  note?: string;
};

const options: Option[] = [
  {
    value: "existing",
    label: "Pay Admission Partner Fee",
    description: "Already an Admission Partner? Pay your fee here.",
    href: "/online-information-centers/existing",
    icon: "🏢",
    note: "Approval Code which shall be provided by Dy. Director to that center after verification of the center infrastructure on spot or through video call.",
  },
  {
    value: "new",
    label: "New Computer Institute",
    description: "Register your computer institute as a new Admission Partner.",
    href: "/online-information-centers/new",
    icon: "🎓",
  },
];

export default function OnlineCenterOptions() {
  const router = useRouter();
  const [selected, setSelected] = useState<string | null>(null);

  const selectedOption = options.find((o) => o.value === selected) ?? null;

  return (
    <div>
      <div className="grid gap-6 sm:grid-cols-2">
        {options.map((opt) => {
          const active = selected === opt.value;
          return (
            <button
              key={opt.value}
              type="button"
              onClick={() => setSelected(opt.value)}
              aria-pressed={active}
              className={`relative flex flex-col rounded-2xl bg-white p-8 text-center shadow-[0_10px_30px_rgba(49,37,24,0.08)] ring-1 transition hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(49,37,24,0.12)] ${
                active ? "ring-2 ring-brand-1" : "ring-brand-cream"
              }`}
            >
              {/* Tick indicator */}
              <span
                className={`absolute right-4 top-4 grid h-7 w-7 place-items-center rounded-full text-sm font-bold ring-1 transition ${
                  active
                    ? "brand-gradient text-white ring-transparent"
                    : "bg-white text-transparent ring-brand-cream"
                }`}
              >
                ✓
              </span>

              <span className="mx-auto grid h-14 w-14 place-items-center rounded-xl brand-gradient text-2xl text-white">
                {opt.icon}
              </span>
              <h3 className="mt-5 text-xl font-extrabold text-ink">{opt.label}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">{opt.description}</p>
              {opt.note && (
                <p className="mt-4 rounded-lg bg-brand-light px-3 py-2 text-xs leading-relaxed text-muted">
                  <span className="font-semibold text-ink">Note:</span> {opt.note}
                </p>
              )}
            </button>
          );
        })}
      </div>

      <div className="mt-8 text-center">
        <button
          type="button"
          disabled={!selectedOption}
          onClick={() => selectedOption && router.push(selectedOption.href)}
          className="inline-flex items-center justify-center gap-2 rounded-xl brand-gradient px-8 py-3.5 font-semibold text-white shadow-md transition hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Continue <span>→</span>
        </button>
      </div>
    </div>
  );
}
