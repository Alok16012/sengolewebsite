import Link from "next/link";
import PageBanner from "@/components/PageBanner";

export const metadata = {
  title: "Payment Failed | Sengol International University",
};

export default async function PaymentFailurePage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const sp = await searchParams;
  const txnid = typeof sp.txnid === "string" ? sp.txnid : "";
  const reason = typeof sp.reason === "string" ? sp.reason : "";

  return (
    <main>
      <PageBanner
        breadcrumb="Payments"
        eyebrow="Payment Confirmation"
        icon="⚠️"
        title="Payment Not Completed"
        subtitle="Your payment could not be processed. No money has been deducted, or it will be refunded automatically."
      />

      <section className="bg-brand-light py-16 sm:py-20">
        <div className="mx-auto max-w-xl px-4">
          <div className="rounded-2xl bg-white p-8 text-center shadow-[0_10px_30px_rgba(49,37,24,0.08)] ring-1 ring-brand-cream sm:p-10">
            <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-red-100 text-3xl">
              ⚠️
            </span>
            <h2 className="mt-5 text-2xl font-extrabold text-ink">
              Payment Failed
            </h2>
            <p className="mt-2 text-[15px] text-muted">
              {reason === "verification_failed"
                ? "We could not verify this transaction. If money was deducted, please contact us before retrying."
                : "The transaction was cancelled or declined. You can try again."}
            </p>

            {txnid && (
              <p className="mt-5 rounded-xl bg-brand-light/60 px-5 py-3 text-sm text-ink">
                Reference: <span className="break-all font-semibold">{txnid}</span>
              </p>
            )}

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/pay-now"
                className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-7 py-3 font-semibold text-white transition hover:bg-emerald-700"
              >
                Try Again
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-brand-3 px-7 py-3 font-semibold text-white transition hover:opacity-90"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
