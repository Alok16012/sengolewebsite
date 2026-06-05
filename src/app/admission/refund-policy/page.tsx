import PageBanner from "@/components/PageBanner";
import SectionLayout from "@/components/SectionLayout";
import Reveal from "@/components/Reveal";
import { admissionMenu } from "@/data/content";
import { ContentEyebrow, SectionTitle, FeatureGrid, CTABand } from "@/components/content-blocks";

const refundSlabs = [
  { period: "15 days or more before the last date of admission", refund: "100% (less ₹1,000 processing charge)" },
  { period: "Less than 15 days before the last date of admission", refund: "90% of the fee paid" },
  { period: "15 days or less after the last date of admission", refund: "80% of the fee paid" },
  { period: "30 days or less after the last date of admission", refund: "50% of the fee paid" },
  { period: "More than 30 days after the last date of admission", refund: "No refund" },
];

const nonRefundable = [
  "Application and registration fees",
  "Admission processing charges",
  "Examination and re-evaluation fees",
  "Hostel caution deposit (adjusted against dues, if any)",
];

const procedure = [
  "Submit a written refund request to the Admissions Office along with the original fee receipt.",
  "Attach supporting documents and a copy of the withdrawal/cancellation letter.",
  "The request is verified and forwarded to the Accounts Department for processing.",
  "Approved refunds are credited to the original payment source within 30 working days.",
];

export default function RefundPolicyPage() {
  return (
    <main>
      <PageBanner
        breadcrumb="Admission"
        eyebrow="Admission"
        icon="💰"
        title="Refund Policy"
        subtitle="Transparent and fair fee-refund guidelines for admitted students."
      />
      <SectionLayout
        menuTitle="Admission"
        menuIcon="📝"
        items={admissionMenu}
        activeHref="/admission/refund-policy"
      >
        <Reveal>
          <ContentEyebrow>💰 Policy Overview</ContentEyebrow>
          <SectionTitle>Fee Refund Policy</SectionTitle>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink/80">
            <p>
              Sengol International University follows the refund norms prescribed by the UGC to
              ensure fairness and transparency for students who choose to withdraw from a program
              after admission. Refunds are calculated based on the date of cancellation relative to
              the last date of admission.
            </p>
            <p>
              Students are encouraged to read this policy carefully before remitting fees. All refund
              requests are processed in accordance with the slabs detailed below.
            </p>
          </div>
        </Reveal>

        <div className="mt-10">
          <FeatureGrid
            cols={3}
            features={[
              { icon: "📜", title: "UGC Compliant", text: "Our refund structure adheres to the latest University Grants Commission guidelines on fee refunds." },
              { icon: "⚖️", title: "Fair & Transparent", text: "Refund amounts are calculated objectively based on the date of withdrawal." },
              { icon: "⏱️", title: "Timely Processing", text: "Approved refunds are credited to the original payment source within 30 working days." },
            ]}
          />
        </div>

        <div className="mt-12">
          <Reveal>
            <h3 className="mb-6 text-2xl font-extrabold text-ink">Refund Schedule</h3>
          </Reveal>
          <div className="overflow-hidden rounded-2xl ring-1 ring-brand-cream">
            <table className="w-full text-left text-sm">
              <thead className="brand-gradient text-white">
                <tr>
                  <th className="px-4 py-3 font-semibold">Time of Cancellation</th>
                  <th className="px-4 py-3 font-semibold">Refund Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-cream bg-white">
                {refundSlabs.map((slab) => (
                  <tr key={slab.period} className="transition hover:bg-brand-light/40">
                    <td className="px-4 py-3 text-ink/80">{slab.period}</td>
                    <td className="px-4 py-3 font-semibold text-ink">{slab.refund}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-12">
          <Reveal>
            <h3 className="mb-6 text-2xl font-extrabold text-ink">Refund Procedure</h3>
          </Reveal>
          <FeatureGrid
            features={procedure.map((text, i) => ({
              icon: `${i + 1}️⃣`,
              title: `Step ${i + 1}`,
              text,
            }))}
          />
        </div>

        <div className="mt-8 rounded-2xl bg-brand-cream/60 p-6 ring-1 ring-brand-cream">
          <h4 className="text-lg font-bold text-ink">Non-Refundable Charges</h4>
          <ul className="mt-4 space-y-2">
            {nonRefundable.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[15px] leading-relaxed text-ink/80">
                <span className="text-brand-1">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <CTABand
          title="Have Questions About Refunds?"
          text="For any clarification regarding the refund policy or to initiate a refund request, please reach out to our Admissions Office. Refunds are processed strictly as per UGC norms."
          primary={{ label: "Contact Admissions", href: "/contact" }}
          secondary={{ label: "Admission Procedure", href: "/admission/admission-procedure" }}
        />
      </SectionLayout>
    </main>
  );
}
