import Link from "next/link";
import PageBanner from "@/components/PageBanner";

export const metadata = {
  title: "Payment Successful | Sengol International University",
};

export default async function PaymentSuccessPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const sp = await searchParams;
  const txnid = typeof sp.txnid === "string" ? sp.txnid : "";
  const amount = typeof sp.amount === "string" ? sp.amount : "";

  return (
    <main>
      <PageBanner
        breadcrumb="Payments"
        eyebrow="Payment Confirmation"
        icon="✅"
        title="Payment Successful"
        subtitle="Thank you! Your payment has been received successfully."
      />

      <section className="bg-brand-light py-16 sm:py-20">
        <div className="mx-auto max-w-xl px-4">
          <div className="rounded-2xl bg-white p-8 text-center shadow-[0_10px_30px_rgba(49,37,24,0.08)] ring-1 ring-brand-cream sm:p-10">
            <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-emerald-100 text-3xl">
              ✅
            </span>
            <h2 className="mt-5 text-2xl font-extrabold text-ink">
              Payment Completed
            </h2>
            <p className="mt-2 text-[15px] text-muted">
              A confirmation has been recorded against your transaction.
            </p>

            <dl className="mt-7 divide-y divide-brand-cream rounded-xl bg-brand-light/60 px-5 text-left text-sm">
              {amount && (
                <div className="flex items-center justify-between py-3">
                  <dt className="font-semibold text-ink">Amount Paid</dt>
                  <dd className="text-ink">₹{amount}</dd>
                </div>
              )}
              {txnid && (
                <div className="flex items-center justify-between py-3">
                  <dt className="font-semibold text-ink">Transaction ID</dt>
                  <dd className="break-all text-ink">{txnid}</dd>
                </div>
              )}
            </dl>

            <Link
              href="/"
              className="brand-gradient mt-8 inline-flex items-center justify-center rounded-xl px-7 py-3 font-semibold text-white transition hover:opacity-95"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
