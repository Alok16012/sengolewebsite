import type { StatusResult } from "@/lib/application-status";

const approvalLabels: Record<string, { label: string; tone: string }> = {
  pending: { label: "Under Review", tone: "bg-amber-50 text-amber-700 ring-amber-200" },
  hold: { label: "On Hold", tone: "bg-orange-50 text-orange-700 ring-orange-200" },
  doc_verified: { label: "Documents Verified", tone: "bg-sky-50 text-sky-700 ring-sky-200" },
  account_hold: { label: "Payment Under Review", tone: "bg-orange-50 text-orange-700 ring-orange-200" },
  approved: { label: "Approved", tone: "bg-emerald-50 text-emerald-700 ring-emerald-200" },
  rejected: { label: "Rejected", tone: "bg-red-50 text-red-700 ring-red-200" },
};

const paymentLabels: Record<string, { label: string; tone: string }> = {
  unpaid: { label: "Unpaid", tone: "bg-red-50 text-red-700 ring-red-200" },
  offline_review: { label: "Payment Under Review", tone: "bg-amber-50 text-amber-700 ring-amber-200" },
  link_sent: { label: "Payment Link Sent", tone: "bg-sky-50 text-sky-700 ring-sky-200" },
  paid: { label: "Paid", tone: "bg-emerald-50 text-emerald-700 ring-emerald-200" },
};

// Order of the approval journey, used to render a simple step tracker.
const journey = ["pending", "doc_verified", "account_hold", "approved"];
const journeyLabels: Record<string, string> = {
  pending: "Submitted",
  doc_verified: "Documents Verified",
  account_hold: "Payment Stage",
  approved: "Approved",
};

function Badge({ map, value }: { map: Record<string, { label: string; tone: string }>; value: string | null }) {
  const key = (value ?? "").toLowerCase();
  const item = map[key] ?? { label: value ?? "—", tone: "bg-gray-50 text-gray-600 ring-gray-200" };
  return (
    <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ring-1 ${item.tone}`}>
      {item.label}
    </span>
  );
}

// Presentational status card — renders a fetched result. Used inline, right
// below the form, on the same page.
export default function ApplicationStatusCard({ result }: { result: StatusResult }) {
  const rejected = (result.approvalStatus ?? "").toLowerCase() === "rejected";
  const currentStep = journey.indexOf((result.approvalStatus ?? "").toLowerCase());
  const effectiveStep =
    (result.approvalStatus ?? "").toLowerCase() === "hold" ? 0 : currentStep;

  return (
    <div className="mt-8 rounded-2xl bg-white p-6 ring-1 ring-brand-cream sm:p-8">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-muted">
            Application Number
          </p>
          <p className="text-lg font-extrabold text-ink">{result.applicationNo || "—"}</p>
          <p className="mt-1 text-[15px] text-ink/80">{result.centerName || "—"}</p>
        </div>
      </div>

      {/* Status badges */}
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl bg-brand-light p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted">Application Status</p>
          <div className="mt-2">
            <Badge map={approvalLabels} value={result.approvalStatus} />
          </div>
        </div>
        <div className="rounded-xl bg-brand-light p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted">Payment Status</p>
          <div className="mt-2">
            <Badge map={paymentLabels} value={result.paymentStatus} />
          </div>
        </div>
      </div>

      {/* Step tracker */}
      {!rejected && (
        <div className="mt-7">
          <div className="flex items-center">
            {journey.map((step, i) => {
              const done = effectiveStep >= i;
              return (
                <div key={step} className="flex flex-1 items-center last:flex-none">
                  <div className="flex flex-col items-center">
                    <span
                      className={`grid h-8 w-8 place-items-center rounded-full text-xs font-bold ring-1 ${
                        done
                          ? "brand-gradient text-white ring-transparent"
                          : "bg-white text-muted ring-brand-cream"
                      }`}
                    >
                      {done ? "✓" : i + 1}
                    </span>
                    <span className="mt-1.5 w-20 text-center text-[11px] font-medium text-muted">
                      {journeyLabels[step]}
                    </span>
                  </div>
                  {i < journey.length - 1 && (
                    <span
                      className={`mx-1 h-0.5 flex-1 ${
                        effectiveStep > i ? "bg-brand-1" : "bg-brand-cream"
                      }`}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Fee + payment — hidden once the payment is complete */}
      {!result.isPaid && (
        <div className="mt-7 border-t border-brand-cream pt-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-muted">Fee Amount</p>
              <p className="text-lg font-extrabold text-ink">
                {result.feeAmount != null ? `₹${Number(result.feeAmount).toLocaleString("en-IN")}` : "—"}
              </p>
            </div>

            {result.paymentLinkUrl ? (
              <a
                href={result.paymentLinkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-7 py-3.5 font-semibold text-white shadow-md transition hover:bg-emerald-700"
              >
                💳 Pay Now
              </a>
            ) : (
              <div className="max-w-xs rounded-xl bg-amber-50 px-4 py-3 text-xs font-medium text-amber-800 ring-1 ring-amber-200">
                Your payment link has not been generated yet. It will appear here once the
                accounts team issues it.
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
