import PageBanner from "@/components/PageBanner";
import SectionLayout from "@/components/SectionLayout";
import Reveal from "@/components/Reveal";
import { admissionMenu } from "@/data/content";
import {
  ContentEyebrow,
  SectionTitle,
  FeatureGrid,
  CTABand,
} from "@/components/content-blocks";

const onlineSteps = [
  { icon: "1️⃣", title: "Online Registration", text: "Visit the official website and fill out the online registration form." },
  { icon: "2️⃣", title: "Application Submission", text: "Complete the application form with personal, academic, and program-related details. Upload required documents." },
  { icon: "3️⃣", title: "Document Verification", text: "Submitted documents are verified for eligibility and authenticity." },
  { icon: "4️⃣", title: "Entrance Exam / Merit Evaluation", text: "Depending on the program, admission is either entrance-based or merit-based." },
  { icon: "5️⃣", title: "Admission Letter", text: "Selected candidates receive an official Admission Letter via email or portal." },
  { icon: "6️⃣", title: "Fee Payment", text: "Pay the prescribed admission fee through online/offline mode." },
  { icon: "7️⃣", title: "Final Enrollment", text: "After payment confirmation, you are officially enrolled in the program." },
];

const offlineSteps = [
  "Visit the university campus or authorized admission centers.",
  "Collect the printed admission form from the Admission Office.",
  "Fill the form manually with blue/black pen.",
  "Attach photocopies of required documents.",
  "Submit the completed form at the Admission Office with the application fee (cash/DD).",
  "Collect the receipt and wait for further communication via SMS/email.",
];

const requiredDocs = [
  "Passport-size photograph",
  "10th & 12th mark sheets and certificates (for UG programs)",
  "Graduation mark sheets (for PG programs)",
  "Identity proof (Aadhaar/PAN/Passport)",
  "Transfer/Migration Certificate",
  "Category certificate (if applicable)",
  "Entrance exam scorecard (if applicable)",
];

const eligibility = [
  { level: "Undergraduate", criteria: "10+2 or equivalent with minimum 45–50% (varies by course)" },
  { level: "Postgraduate", criteria: "Graduation in relevant subject with 50–55%" },
  { level: "Diploma", criteria: "10th / 10+2 depending on course type" },
  { level: "Ph.D./M.Phil.", criteria: "Postgraduate in relevant subject with minimum 55%" },
];

export default function AdmissionProcedurePage() {
  return (
    <main>
      <PageBanner
        breadcrumb="Admission"
        eyebrow="Admission"
        icon="📋"
        title="Admission Procedure"
        subtitle="Discover a simple, transparent, and student-friendly admission process designed to help you join your desired program with ease and clarity."
      />
      <SectionLayout
        menuTitle="Admission"
        menuIcon="📝"
        items={admissionMenu}
        activeHref="/admission/admission-procedure"
      >
        <Reveal>
          <ContentEyebrow>📋 Overview</ContentEyebrow>
          <SectionTitle>A Transparent, Merit-Based Process</SectionTitle>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink/80">
            <p>
              Sengol International University (SIU) offers a streamlined and transparent admission
              process to ensure that prospective students can conveniently apply and gain admission
              to their preferred programs. The university is committed to selecting and enrolling
              students who exhibit academic excellence, personal integrity, and a strong desire for
              holistic development.
            </p>
            <p>
              Our admission procedure is thoughtfully designed to be student-friendly, guiding
              applicants step-by-step from initial inquiry to final enrollment, while maintaining
              fairness, transparency, and merit-based selection at its core.
            </p>
          </div>
        </Reveal>

        <div className="mt-12">
          <Reveal>
            <h3 className="mb-6 text-2xl font-extrabold text-ink">
              📩 Step-by-Step Online Admission Process
            </h3>
          </Reveal>
          <FeatureGrid features={onlineSteps} />
        </div>

        <div className="mt-12">
          <Reveal>
            <h3 className="mb-6 text-2xl font-extrabold text-ink">
              📝 Step-by-Step Offline Admission Process
            </h3>
          </Reveal>
          <ol className="space-y-3">
            {offlineSteps.map((step, i) => (
              <li key={i} className="flex items-start gap-4 rounded-xl bg-white p-4 ring-1 ring-brand-cream">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg brand-gradient text-sm font-bold text-white">
                  {i + 1}
                </span>
                <span className="text-[15px] leading-relaxed text-ink/80">{step}</span>
              </li>
            ))}
          </ol>
          <div className="mt-5 rounded-xl bg-brand-cream/60 p-4 text-[15px] font-semibold text-ink ring-1 ring-brand-cream">
            🛑 Important: Always keep a photocopy of your filled form and payment receipt.
          </div>
        </div>

        <div className="mt-12">
          <Reveal>
            <h3 className="mb-6 text-2xl font-extrabold text-ink">📄 Required Documents</h3>
          </Reveal>
          <ul className="grid gap-3 sm:grid-cols-2">
            {requiredDocs.map((doc) => (
              <li key={doc} className="flex items-start gap-3 rounded-xl bg-white p-4 ring-1 ring-brand-cream">
                <span className="text-brand-1">✔️</span>
                <span className="text-[15px] leading-relaxed text-ink/80">{doc}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12">
          <Reveal>
            <h3 className="mb-6 text-2xl font-extrabold text-ink">✅ Eligibility Criteria</h3>
          </Reveal>
          <div className="overflow-hidden rounded-2xl ring-1 ring-brand-cream">
            <table className="w-full text-left text-[15px]">
              <thead className="brand-gradient text-white">
                <tr>
                  <th className="px-5 py-4 font-bold">Program Level</th>
                  <th className="px-5 py-4 font-bold">Eligibility Criteria</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-cream bg-white">
                {eligibility.map((row) => (
                  <tr key={row.level}>
                    <td className="px-5 py-4 font-semibold text-ink">{row.level}</td>
                    <td className="px-5 py-4 text-ink/80">{row.criteria}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-12">
          <Reveal>
            <h3 className="mb-6 text-2xl font-extrabold text-ink">💳 Payment Procedure</h3>
            <p className="mb-6 text-[15px] leading-relaxed text-ink/80">
              Sengol International University (SIU) offers both online and offline modes of fee
              payment to ensure convenience and accessibility for all students.
            </p>
          </Reveal>
          <FeatureGrid
            features={[
              { icon: "🌐", title: "Online Payment Methods", text: "Net Banking, Credit/Debit Card, UPI (Google Pay, PhonePe, Paytm, etc.), and Online Wallets. Log in to the student portal, navigate to the Fee Payment section, choose your mode, complete the transaction, and download the fee receipt." },
              { icon: "🏦", title: "Offline Payment Options", text: "Demand Draft (DD) in favor of Sengol International University, payable at Sikkim; cash payment at the admission/finance office; or Bank Transfer (NEFT/RTGS) to the official university account." },
            ]}
          />
          <div className="mt-5 rounded-xl bg-brand-cream/60 p-4 text-[15px] text-ink/80 ring-1 ring-brand-cream">
            All payments must be made before the specified deadline to confirm admission or semester
            enrollment. Ensure to collect the payment receipt or acknowledgment slip after payment.
          </div>
        </div>

        <div className="mt-12">
          <Reveal>
            <h3 className="mb-6 text-2xl font-extrabold text-ink">🎓 Admission Modes &amp; Scholarships</h3>
          </Reveal>
          <FeatureGrid
            features={[
              { icon: "🥇", title: "Merit-Based Admission", text: "Admission granted on the basis of academic performance and merit in qualifying examinations." },
              { icon: "🧮", title: "Entrance Exam-Based Admission", text: "Admission based on performance in the prescribed entrance examination for relevant programs." },
              { icon: "🎯", title: "Direct &amp; Lateral Entry", text: "Direct admission under management quota (if applicable) and Lateral Entry for eligible diploma holders or transfer students." },
              { icon: "🏅", title: "Scholarships", text: "SIU offers merit-based, need-based, and category-specific scholarships. Students can apply during the admission process with relevant documents." },
            ]}
          />
        </div>

        <CTABand
          title="Ready to Begin Your Application?"
          text="Follow our simple and transparent admission process to secure your place at Sengol International University."
          primary={{ label: "Start Application", href: "/application-form" }}
          secondary={{ label: "Download Brochure", href: "/contact" }}
        />
      </SectionLayout>
    </main>
  );
}
