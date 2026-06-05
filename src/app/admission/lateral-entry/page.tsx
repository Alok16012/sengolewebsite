import PageBanner from "@/components/PageBanner";
import SectionLayout from "@/components/SectionLayout";
import Reveal from "@/components/Reveal";
import { admissionMenu } from "@/data/content";
import { ContentEyebrow, SectionTitle, FeatureGrid, CTABand } from "@/components/content-blocks";

const eligibleCourses = [
  "B.Tech / B.Sc. / BCA",
  "B.Pharma / BPT",
  "Nursing & Paramedical Programs",
  "Management / Computer Applications (PG Level)",
  "Many more programs...",
];

const documents = [
  "Diploma/Equivalent Marksheets & Certificate",
  "Transfer Certificate (if applicable)",
  "Migration Certificate (if from another board/university)",
  "Passport-size Photographs",
  "Any other documents as required by the department",
];

export default function LateralEntryPage() {
  return (
    <main>
      <PageBanner
        breadcrumb="Admission"
        eyebrow="Admission"
        icon="↗️"
        title="Lateral Entry Admission"
        subtitle="Continue your educational journey with direct second-year admission opportunities at Sengol International University."
      />
      <SectionLayout
        menuTitle="Admission"
        menuIcon="📝"
        items={admissionMenu}
        activeHref="/admission/lateral-entry"
      >
        <Reveal>
          <ContentEyebrow>↗️ What is Lateral Entry?</ContentEyebrow>
          <SectionTitle>Direct Second-Year Admission</SectionTitle>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink/80">
            <p>
              Sengol International University (SIU) offers Lateral Entry admission opportunities to
              eligible students who have already completed a diploma or equivalent program and wish
              to continue their education directly into the second year of a relevant undergraduate
              or postgraduate program.
            </p>
          </div>
        </Reveal>

        <div className="mt-10">
          <Reveal>
            <h3 className="mb-6 text-2xl font-extrabold text-ink">Benefits of Lateral Entry</h3>
          </Reveal>
          <FeatureGrid
            features={[
              { icon: "⏳", title: "Time Saving", text: "Direct entry to second year saves valuable time." },
              { icon: "🎖️", title: "Credit Recognition", text: "Previous academic achievements are recognized." },
              { icon: "🚀", title: "Career Advancement", text: "Fast-track your career with higher qualifications." },
              { icon: "🏛️", title: "Quality Education", text: "Access to world-class education and facilities." },
            ]}
          />
        </div>

        <div className="mt-12">
          <Reveal>
            <h3 className="mb-6 text-2xl font-extrabold text-ink">Eligibility Criteria</h3>
          </Reveal>
          <FeatureGrid
            features={[
              { icon: "🎓", title: "Undergraduate Lateral Entry", text: "Candidates must have successfully completed a 3-year diploma (or equivalent) in the relevant discipline from a recognized board/institution." },
              { icon: "📜", title: "Postgraduate Lateral Entry", text: "Candidates must hold a relevant postgraduate diploma or equivalent qualification (where applicable)." },
            ]}
          />
        </div>

        <div className="mt-12">
          <Reveal>
            <h3 className="mb-6 text-2xl font-extrabold text-ink">
              Courses Eligible for Lateral Entry
            </h3>
            <p className="mb-6 text-[15px] leading-relaxed text-ink/80">
              Lateral Entry is available in select programs such as:
            </p>
          </Reveal>
          <ul className="grid gap-3 sm:grid-cols-2">
            {eligibleCourses.map((course) => (
              <li key={course} className="flex items-start gap-3 rounded-xl bg-white p-4 ring-1 ring-brand-cream">
                <span className="text-brand-1">📘</span>
                <span className="text-[15px] leading-relaxed text-ink/80">{course}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12">
          <Reveal>
            <h3 className="mb-6 text-2xl font-extrabold text-ink">Application Process</h3>
          </Reveal>
          <FeatureGrid
            cols={3}
            features={[
              { icon: "1️⃣", title: "Apply through Lateral Entry Form", text: "Interested candidates must apply through the Lateral Entry Admission Form (available online & offline)." },
              { icon: "2️⃣", title: "Merit-Based Selection", text: "Admission is granted based on academic merit and subject to the availability of seats." },
              { icon: "3️⃣", title: "Counselling/Interview", text: "Applicants may be required to attend counselling or interview as part of the selection process." },
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
                <span className="text-brand-1">✔️</span>
                <span className="text-[15px] leading-relaxed text-ink/80">{doc}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 rounded-2xl bg-brand-cream/60 p-6 ring-1 ring-brand-cream">
          <h4 className="text-lg font-bold text-ink">⚠️ Important Note</h4>
          <p className="mt-3 text-[15px] leading-relaxed text-ink/80">
            All admissions are subject to university rules and seat availability. The university
            reserves the right to amend eligibility or selection criteria without prior notice.
            Candidates are advised to verify all requirements before applying.
          </p>
        </div>

        <CTABand
          title="Ready to Continue Your Education?"
          text="Take advantage of our lateral entry program and fast-track your academic journey with Sengol International University."
          primary={{ label: "Apply for Lateral Entry", href: "/application-form" }}
          secondary={{ label: "Get More Information", href: "/contact" }}
        />
      </SectionLayout>
    </main>
  );
}
