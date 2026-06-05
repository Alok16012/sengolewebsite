import PageBanner from "@/components/PageBanner";
import SectionLayout from "@/components/SectionLayout";
import Reveal from "@/components/Reveal";
import { admissionMenu } from "@/data/content";
import { ContentEyebrow, SectionTitle, FeatureGrid, CTABand } from "@/components/content-blocks";

const eligibility = [
  "The student must be currently enrolled or have studied in a UGC/AICTE/BCI/PCI/NMC-recognized university or institution.",
  "The courses and credits completed must be equivalent or relevant to the curriculum offered by SIU.",
  "Minimum CGPA or percentage criteria may apply as per university norms.",
];

const scenarios = [
  "Inter-university migration",
  "Change of course/discipline",
  "Gap in studies due to personal or medical reasons",
  "Institution closure or non-recognition",
];

const documents = [
  "Original Transcripts/Mark Sheets",
  "Syllabus or Course Description from previous institution",
  "Transfer Certificate / Migration Certificate",
  "Any additional academic records as requested",
];

const conditions = [
  "Maximum 50% of total course credits may be transferred (subject to program rules).",
  "No credit shall be transferred for internships, project work, or thesis, unless approved by the department.",
  "Final approval is at the sole discretion of SIU's Academic Council.",
];

export default function CreditTransferPage() {
  return (
    <main>
      <PageBanner
        breadcrumb="Admission"
        eyebrow="Admission"
        icon="🔄"
        title="Credit Transfer Policy"
        subtitle="Seamless academic mobility and flexibility for eligible students."
      />
      <SectionLayout
        menuTitle="Admission"
        menuIcon="📝"
        items={admissionMenu}
        activeHref="/admission/credit-transfer"
      >
        <Reveal>
          <ContentEyebrow>🔄 Policy Overview</ContentEyebrow>
          <SectionTitle>Seamless Academic Mobility</SectionTitle>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink/80">
            <p>
              Sengol International University (SIU) supports student mobility and academic
              flexibility through its Credit Transfer Policy, allowing eligible students to continue
              their education without repetition of previously completed coursework.
            </p>
            <p>
              The policy provides opportunities for students to transfer from other recognized
              institutions and integrate into SIU programs without academic loss.
            </p>
          </div>
        </Reveal>

        <div className="mt-10">
          <FeatureGrid
            cols={3}
            features={[
              { icon: "🚶", title: "Student Mobility", text: "Supports seamless academic mobility and flexibility for eligible students across recognized institutions." },
              { icon: "🔗", title: "Academic Integration", text: "Ensures smooth integration into SIU programs while maintaining academic standards and quality." },
              { icon: "🛡️", title: "Quality Assurance", text: "Maintains strict quality standards while providing flexibility for academic progression." },
            ]}
          />
        </div>

        <div className="mt-12">
          <Reveal>
            <h3 className="mb-6 text-2xl font-extrabold text-ink">Eligibility for Credit Transfer</h3>
          </Reveal>
          <ul className="space-y-3">
            {eligibility.map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-xl bg-white p-4 ring-1 ring-brand-cream">
                <span className="text-brand-1">✔️</span>
                <span className="text-[15px] leading-relaxed text-ink/80">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12">
          <Reveal>
            <h3 className="mb-6 text-2xl font-extrabold text-ink">Acceptable Scenarios</h3>
          </Reveal>
          <ul className="grid gap-3 sm:grid-cols-2">
            {scenarios.map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-xl bg-white p-4 ring-1 ring-brand-cream">
                <span className="text-brand-1">📌</span>
                <span className="text-[15px] leading-relaxed text-ink/80">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12">
          <Reveal>
            <h3 className="mb-6 text-2xl font-extrabold text-ink">Process for Credit Transfer</h3>
          </Reveal>
          <FeatureGrid
            features={[
              { icon: "1️⃣", title: "Application Submission", text: "Apply for credit transfer during the admission process with all required documents." },
              { icon: "2️⃣", title: "Transcript Review", text: "Submit academic transcripts, course outlines/syllabus for review by the Credit Transfer Committee." },
              { icon: "3️⃣", title: "Evaluation & Mapping", text: "SIU faculty maps completed credits to equivalent subjects in the current curriculum." },
              { icon: "4️⃣", title: "Approval & Admission", text: "Upon approval, the student is admitted into the appropriate semester/year." },
            ]}
          />
        </div>

        <div className="mt-12">
          <Reveal>
            <h3 className="mb-6 text-2xl font-extrabold text-ink">Documents Required</h3>
          </Reveal>
          <ul className="grid gap-3 sm:grid-cols-2">
            {documents.map((doc) => (
              <li key={doc} className="flex items-start gap-3 rounded-xl bg-white p-4 ring-1 ring-brand-cream">
                <span className="text-brand-1">📄</span>
                <span className="text-[15px] leading-relaxed text-ink/80">{doc}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 rounded-2xl bg-brand-cream/60 p-6 ring-1 ring-brand-cream">
          <h4 className="text-lg font-bold text-ink">Conditions</h4>
          <ul className="mt-4 space-y-2">
            {conditions.map((c) => (
              <li key={c} className="flex items-start gap-3 text-[15px] leading-relaxed text-ink/80">
                <span className="text-brand-1">•</span>
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>

        <CTABand
          title="Ready to Transfer Your Credits?"
          text="Continue your academic journey with seamless credit transfer at Sengol International University. Credit transfer decisions are made on a case-by-case basis."
          primary={{ label: "Apply for Credit Transfer", href: "/application-form" }}
          secondary={{ label: "Contact Academic Office", href: "/contact" }}
        />
      </SectionLayout>
    </main>
  );
}
