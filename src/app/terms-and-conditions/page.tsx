import PageBanner from "@/components/PageBanner";
import Reveal from "@/components/Reveal";
import { ContentEyebrow, SectionTitle } from "@/components/content-blocks";

export const metadata = {
  title: "Terms & Conditions | Sengol International University",
  description:
    "Terms & Conditions governing the use of the Online Fee Payment Portal of Sengol International University, including payment, privacy and refund policies.",
};

const sections = [
  {
    icon: "📜",
    title: "1. General Terms",
    clauses: [
      {
        no: "1.1",
        text: "These Terms & Conditions govern the use of the Online Fee Payment Portal of Sengol International University.",
      },
      {
        no: "1.2",
        text: "By accessing and using this Portal, you (“User”/ “Student”) agree to comply with these Terms & Conditions.",
      },
      {
        no: "1.3",
        text: "The institution reserves the right to update, modify, or revise these Terms & Conditions at any time without prior notice. Users are advised to review them periodically.",
      },
    ],
  },
  {
    icon: "💳",
    title: "2. Fee Payment Details",
    clauses: [
      {
        no: "2.1",
        text: "Fees can be paid online through the Portal using debit/credit cards, net banking, UPI, or any other mode available.",
      },
      {
        no: "2.2",
        text: "Payment of fees must be made within the due dates specified by the institution. Delayed payments may attract late fees as per our college rules.",
      },
      {
        no: "2.3",
        text: "The institution is not responsible for any additional charges levied by banks/payment gateways (e.g., transaction fees, service charges).",
      },
    ],
  },
  {
    icon: "🔒",
    title: "3. Privacy Policy",
    clauses: [
      {
        no: "3.1",
        text: "The institution respects your privacy and is committed to protect your personal information.",
      },
      {
        no: "3.2",
        text: "Information collected during fee payment (such as name, contact details, admission/roll number, and transaction details) will be used solely for processing payments, maintaining records, and related administrative purposes.",
      },
      {
        no: "3.3",
        text: "The institution does not share or disclose personal information to any third party, except as required by law or to facilitate secure payment processing through authorized payment gateways.",
      },
    ],
  },
  {
    icon: "💰",
    title: "4. Refund & Cancellation Policy",
    clauses: [
      {
        no: "4.1",
        text: "Fees once paid are generally non-refundable and non-transferable.",
      },
      {
        no: "4.2",
        text: "Cancellation of payments is not permitted once the transaction is successfully processed.",
      },
    ],
  },
];

export default function TermsAndConditionsPage() {
  return (
    <main>
      <PageBanner
        breadcrumb="Terms & Conditions"
        eyebrow="Online Fee Payment"
        icon="📄"
        title="Terms & Conditions"
        subtitle="Terms & Conditions governing the use of the Online Fee Payment Portal of Sengol International University."
      />

      <section className="bg-brand-light py-16 sm:py-20">
        <div className="mx-auto max-w-[1000px] px-4">
          <Reveal>
            <ContentEyebrow>📄 Online Fee Payment</ContentEyebrow>
            <SectionTitle>Terms &amp; Conditions for Online Fee Payment</SectionTitle>
            <p className="mt-3 text-[15px] leading-relaxed text-muted">
              Please read these Terms &amp; Conditions carefully before using the Online Fee
              Payment Portal. By proceeding with a payment, you agree to the terms set out below.
            </p>
          </Reveal>

          <div className="mt-10 space-y-8">
            {sections.map((section, i) => (
              <Reveal key={section.title} delay={i * 80}>
                <div className="rounded-2xl bg-white p-7 shadow-[0_10px_30px_rgba(49,37,24,0.06)] ring-1 ring-brand-cream sm:p-9">
                  <div className="flex items-center gap-4">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl brand-gradient text-2xl text-white">
                      {section.icon}
                    </span>
                    <h3 className="text-xl font-bold text-ink sm:text-2xl">{section.title}</h3>
                  </div>
                  <ul className="mt-6 space-y-4">
                    {section.clauses.map((clause) => (
                      <li key={clause.no} className="flex gap-4">
                        <span className="mt-0.5 shrink-0 rounded-full bg-brand-cream px-3 py-1 text-sm font-bold text-ink">
                          {clause.no}
                        </span>
                        <p className="text-[15px] leading-relaxed text-ink/80">{clause.text}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={160}>
            <div className="mt-10 rounded-2xl brand-gradient p-7 text-white shadow-[0_10px_30px_rgba(49,37,24,0.12)] sm:p-9">
              <h3 className="text-xl font-bold">Questions About These Terms?</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-white/85">
                For any clarification regarding online fee payment, please contact us at{" "}
                <a
                  href="mailto:info@sengolinternationaluniversity.edu.in"
                  className="font-semibold text-white underline"
                >
                  info@sengolinternationaluniversity.edu.in
                </a>{" "}
                or call{" "}
                <a href="tel:+919205299887" className="font-semibold text-white underline">
                  +91-9205299887
                </a>
                .
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
