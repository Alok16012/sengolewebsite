import PageBanner from "@/components/PageBanner";
import PaymentForm from "@/components/PaymentForm";
import Reveal from "@/components/Reveal";
import { ContentEyebrow, SectionTitle } from "@/components/content-blocks";

export const metadata = {
  title: "Pay Now | Sengol International University",
  description:
    "Securely pay your admission, tuition, examination or hostel fees online via PayU.",
};

const assurances = [
  "256-bit encrypted, PCI-DSS compliant checkout powered by PayU.",
  "Pay by UPI, credit/debit card, net banking or wallet.",
  "Instant payment confirmation with a transaction reference.",
];

export default function PayNowPage() {
  return (
    <main>
      <PageBanner
        breadcrumb="Payments"
        eyebrow="Online Fee Payment"
        icon="💳"
        title="Pay Now"
        subtitle="Pay your university fees quickly and securely through our PayU payment gateway."
      />

      <section className="bg-brand-light py-16 sm:py-20">
        <div className="mx-auto max-w-[1400px] px-4">
          <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
            <Reveal>
              <div className="rounded-2xl bg-white p-7 shadow-[0_10px_30px_rgba(49,37,24,0.08)] ring-1 ring-brand-cream sm:p-10">
                <ContentEyebrow>💳 Secure Payment</ContentEyebrow>
                <SectionTitle>Enter Payment Details</SectionTitle>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">
                  Fill in your details and the amount, then continue to PayU&apos;s
                  secure gateway to finish your payment.
                </p>
                <PaymentForm />
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="h-full rounded-2xl brand-gradient p-8 text-white shadow-[0_10px_30px_rgba(49,37,24,0.12)] sm:p-10">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-white/15 text-2xl ring-1 ring-white/30">
                  🔒
                </span>
                <h3 className="mt-5 text-2xl font-extrabold">Safe &amp; Secure</h3>
                <ul className="mt-6 space-y-5">
                  {assurances.map((item) => (
                    <li key={item} className="flex gap-4">
                      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white/20 text-sm font-bold ring-1 ring-white/30">
                        ✓
                      </span>
                      <span className="text-[15px] leading-relaxed text-white/90">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="mt-8 text-sm text-white/70">
                  For payment-related help, contact{" "}
                  <a
                    href="mailto:info@sengolinternationaluniversity.edu.in"
                    className="font-semibold text-white underline"
                  >
                    our accounts team
                  </a>
                  .
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
