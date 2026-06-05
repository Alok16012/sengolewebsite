import PageBanner from "@/components/PageBanner";
import SectionLayout from "@/components/SectionLayout";
import Reveal from "@/components/Reveal";
import { researchMenu } from "@/data/content";
import {
  ContentEyebrow,
  SectionTitle,
  StatRow,
  FeatureGrid,
  Prose,
  CTABand,
} from "@/components/content-blocks";

const subjects = [
  "Art",
  "Literature",
  "Humanities",
  "Commerce",
  "Computer Science",
  "Science",
  "Management",
  "Law",
];

const applicationSteps = [
  {
    icon: "1️⃣",
    title: "Download the Form",
    text: "Apply in the prescribed application form available for download on the university website.",
  },
  {
    icon: "2️⃣",
    title: "Pay the Application Fee",
    text: "Pay the application fee of ₹5,000 online via Credit Card / Debit Card / Net Banking, or by cash at the Accounts Section, Administrative Block.",
  },
  {
    icon: "3️⃣",
    title: "Attach Documents",
    text: "Attach the duly filled form, the payment receipt, and all testimonials. Incomplete applications in any manner will be rejected.",
  },
  {
    icon: "4️⃣",
    title: "Submit Before Deadline",
    text: "Submit physically to the Office of the Dean – Research, or email a scanned copy. No application will be accepted after the due date.",
  },
];

const importantDates = [
  { activity: "📝 Date of Starting of Application Form", date: "10th May 2026" },
  { activity: "⏰ Last Date to Submit Application Form", date: "31st May 2026" },
  { activity: "🖋️ Tentative Date for Entrance Examination", date: "2nd week of June, 2026" },
  { activity: "💻 Mode of Examination", date: "Offline / Online" },
];

export default function ResearchPage() {
  return (
    <main>
      <PageBanner
        breadcrumb="Research"
        eyebrow="Research"
        icon="🔬"
        title="Research"
        subtitle="Advance knowledge and innovation through doctoral research at Sengol International University."
      />
      <SectionLayout
        menuTitle="Research"
        menuIcon="🔬"
        items={researchMenu}
        activeHref="/research"
      >
        <Reveal>
          <ContentEyebrow>🎓 Ph.D. Admission</ContentEyebrow>
          <SectionTitle>Ph.D. Admission Notification — Session June 2026</SectionTitle>
          <Prose
            paragraphs={[
              "Applications are invited from eligible candidates for admission to the Ph.D. program in various disciplines for the June 2026 session. Admission shall be under the latest UGC guidelines and the Ph.D. rules and regulations of the University, subject to the availability of supervisors in respective departments.",
            ]}
          />
        </Reveal>

        <div className="mt-10">
          <h3 className="mb-4 text-xl font-bold text-ink">Subjects Offered</h3>
          <div className="flex flex-wrap gap-3">
            {subjects.map((s) => (
              <span
                key={s}
                className="rounded-full bg-brand-cream px-5 py-2.5 text-sm font-semibold text-brand-1 ring-1 ring-brand-1/15"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-10 rounded-2xl bg-brand-light/50 p-6 ring-1 ring-brand-cream">
          <h3 className="text-xl font-bold text-ink">Eligibility Criteria</h3>
          <p className="mt-3 text-[15px] leading-relaxed text-ink/80">
            Postgraduate degree with a minimum of 55% marks (relaxable by 5% for SC/ST/OBC/Minority
            candidates) in the relevant subject from a recognized university.
          </p>
        </div>

        <div className="mt-10">
          <h3 className="mb-4 text-xl font-bold text-ink">Selection Procedure</h3>
          <StatRow
            stats={[
              { value: "70%", label: "Written Entrance Test" },
              { value: "30%", label: "Viva-Voce" },
              { value: "3–6 yrs", label: "Program Duration" },
            ]}
          />
          <div className="rounded-2xl bg-white p-6 ring-1 ring-brand-cream">
            <h4 className="text-lg font-bold text-ink">Exemption from Entrance Test</h4>
            <p className="mt-2 text-[15px] leading-relaxed text-ink/80">
              Candidates who possess a regular M.Phil. degree or have qualified NET/SET are exempted
              from the written entrance test and will be directly called for the interview.
            </p>
          </div>
        </div>

        <div className="mt-10">
          <h3 className="mb-4 text-xl font-bold text-ink">Process of Application</h3>
          <FeatureGrid features={applicationSteps} />
        </div>

        <div className="mt-10 rounded-2xl brand-gradient p-8 text-white shadow-xl">
          <h3 className="text-xl font-extrabold">Where to Submit</h3>
          <p className="mt-3 text-[15px] leading-relaxed text-white/90">
            The duly filled application form, along with the payment receipt and all relevant
            documents, must be submitted physically to:
          </p>
          <p className="mt-3 font-semibold leading-relaxed">
            Office of the Dean – Research
            <br />
            Sengol International University, Lower Pepthang,
            <br />
            PO – Lingmoo, District – Namchi, Sikkim-737134
          </p>
          <p className="mt-4 text-[15px] text-white/90">
            <span className="font-semibold">OR</span> emailed as a scanned copy to:{" "}
            <a
              href="mailto:research@sengolinternationaluniversity.edu.in"
              className="underline decoration-white/50 underline-offset-4 hover:decoration-white"
            >
              research@sengolinternationaluniversity.edu.in
            </a>
          </p>
          <p className="mt-4 text-sm italic text-white/80">
            Note: The University is not responsible for postal delays. Incomplete applications or
            those submitted after the deadline will not be accepted.
          </p>
        </div>

        <div className="mt-10">
          <h3 className="mb-4 text-xl font-bold text-ink">Important Dates</h3>
          <div className="overflow-hidden rounded-2xl ring-1 ring-brand-cream">
            <table className="w-full text-left text-sm">
              <thead className="brand-gradient text-white">
                <tr>
                  <th className="px-5 py-3 font-semibold">Event</th>
                  <th className="px-5 py-3 font-semibold">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-cream bg-white">
                {importantDates.map((r) => (
                  <tr key={r.activity} className="transition hover:bg-brand-light/40">
                    <td className="px-5 py-3 text-ink/80">{r.activity}</td>
                    <td className="px-5 py-3 font-semibold text-ink">{r.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <CTABand
          title="Begin Your Doctoral Journey"
          text="Take the next step in your academic career with a Ph.D. at Sengol International University. Download the application form and apply before 31st May 2026."
          primary={{ label: "Download Application Form", href: "/application-form" }}
          secondary={{ label: "Contact Dean – Research", href: "/contact" }}
        />
      </SectionLayout>
    </main>
  );
}
