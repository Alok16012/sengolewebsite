import PageBanner from "@/components/PageBanner";
import SectionLayout from "@/components/SectionLayout";
import Reveal from "@/components/Reveal";
import { researchMenu } from "@/data/content";
import { ContentEyebrow, CTABand } from "@/components/content-blocks";

const keyFacts = [
  { icon: "🗓️", label: "Session", value: "June 2026" },
  { icon: "💳", label: "Application Fee", value: "₹5,000" },
  { icon: "⏳", label: "Duration", value: "3 – 6 Years" },
  { icon: "⏰", label: "Last Date", value: "31 May 2026" },
];

const subjects = [
  { name: "Art", icon: "🎨" },
  { name: "Literature", icon: "📖" },
  { name: "Humanities", icon: "🏛️" },
  { name: "Commerce", icon: "📊" },
  { name: "Computer Science", icon: "💻" },
  { name: "Science", icon: "🔬" },
  { name: "Management", icon: "📈" },
  { name: "Law", icon: "⚖️" },
];

const applicationSteps = [
  {
    title: "Download the Application Form",
    text: "Apply in the prescribed application form available for download on the university website.",
  },
  {
    title: "Pay the Application Fee",
    text: "Pay ₹5,000 online via Credit Card / Debit Card / Net Banking, or by cash at the Accounts Section, Administrative Block.",
  },
  {
    title: "Attach Documents",
    text: "Attach the duly filled form, the payment receipt, and all testimonials. Incomplete applications in any manner will be rejected.",
  },
  {
    title: "Submit Before the Deadline",
    text: "Submit physically to the Office of the Dean – Research, or email a scanned copy. No application will be accepted after the due date.",
  },
];

const importantDates = [
  { activity: "Date of Starting of Application Form", date: "10 May 2026" },
  { activity: "Last Date to Submit Application Form", date: "31 May 2026" },
  { activity: "Tentative Date for Entrance Examination", date: "2nd week of June 2026" },
  { activity: "Mode of Examination", date: "Offline / Online" },
];

function SectionHead({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-6">
      <span className="text-xs font-bold uppercase tracking-[0.16em] text-brand-1">{eyebrow}</span>
      <h3 className="mt-1.5 flex items-center gap-3 text-2xl font-extrabold text-ink">
        <span className="h-7 w-1.5 rounded-full brand-gradient" />
        {title}
      </h3>
    </div>
  );
}

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
      <SectionLayout menuTitle="Research" menuIcon="🔬" items={researchMenu} activeHref="/research">
        {/* Hero intro */}
        <Reveal>
          <ContentEyebrow>🎓 Doctoral Programme</ContentEyebrow>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
            <span className="brand-gradient-text">Ph.D. Admission Notification</span>
          </h2>
          <p className="mt-2 text-lg font-semibold text-brand-1">Session — June 2026</p>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-ink/80">
            Applications are invited from eligible candidates for admission to the Ph.D. programme in
            various disciplines for the June 2026 session. Admission shall be conducted under the
            latest UGC guidelines and the Ph.D. rules and regulations of the University, subject to
            the availability of supervisors in the respective departments.
          </p>
        </Reveal>

        {/* Key facts strip */}
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {keyFacts.map((f) => (
            <div
              key={f.label}
              className="rounded-2xl border border-brand-cream bg-white p-4 shadow-[0_8px_24px_rgba(49,37,24,0.05)]"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-cream text-xl">
                {f.icon}
              </span>
              <div className="mt-3 text-[11px] font-bold uppercase tracking-wide text-muted">
                {f.label}
              </div>
              <div className="text-lg font-extrabold text-ink">{f.value}</div>
            </div>
          ))}
        </div>

        {/* Subjects */}
        <section className="mt-14">
          <SectionHead eyebrow="Disciplines" title="Subjects Offered" />
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {subjects.map((s) => (
              <div
                key={s.name}
                className="group flex items-center gap-3 rounded-xl border border-brand-cream bg-white px-4 py-3 transition hover:-translate-y-0.5 hover:border-brand-1/30 hover:shadow-[0_10px_24px_rgba(49,37,24,0.08)]"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-brand-cream text-lg transition group-hover:brand-gradient">
                  {s.icon}
                </span>
                <span className="text-sm font-semibold text-ink">{s.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Eligibility */}
        <section className="mt-14">
          <SectionHead eyebrow="Who Can Apply" title="Eligibility Criteria" />
          <div className="flex flex-col gap-5 rounded-2xl border border-brand-cream bg-brand-light/40 p-6 sm:flex-row sm:items-center">
            <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl brand-gradient text-2xl text-white">
              🎓
            </span>
            <div>
              <p className="text-[15px] leading-relaxed text-ink/85">
                A Postgraduate degree with a minimum of{" "}
                <span className="font-bold text-ink">55% marks</span> in the relevant subject from a
                recognized university.
              </p>
              <span className="mt-3 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-brand-1 ring-1 ring-brand-cream">
                ✔ 5% relaxation for SC / ST / OBC / Minority candidates
              </span>
            </div>
          </div>
        </section>

        {/* Selection procedure */}
        <section className="mt-14">
          <SectionHead eyebrow="How You Are Assessed" title="Selection Procedure" />
          <div className="grid gap-5 sm:grid-cols-2">
            {[
              { pct: 70, label: "Written Entrance Test", desc: "Weightage given to your performance in the written entrance examination." },
              { pct: 30, label: "Viva-Voce", desc: "Weightage given to your performance in the personal interview." },
            ].map((c) => (
              <div key={c.label} className="rounded-2xl border border-brand-cream bg-white p-6">
                <div className="flex items-baseline justify-between">
                  <h4 className="text-lg font-bold text-ink">{c.label}</h4>
                  <span className="text-3xl font-extrabold brand-gradient-text">{c.pct}%</span>
                </div>
                <div className="mt-3 h-2.5 w-full overflow-hidden rounded-full bg-brand-cream">
                  <div className="h-full rounded-full brand-gradient" style={{ width: `${c.pct}%` }} />
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">{c.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-5 flex gap-4 rounded-2xl border-l-4 border-brand-1 bg-brand-cream/40 p-5">
            <span className="text-2xl">💡</span>
            <div>
              <h4 className="font-bold text-ink">Exemption from Entrance Test</h4>
              <p className="mt-1 text-[15px] leading-relaxed text-ink/80">
                Candidates who possess a regular M.Phil. degree or have qualified NET / SET are
                exempted from the written entrance test and will be directly called for the
                interview.
              </p>
            </div>
          </div>
        </section>

        {/* How to apply — timeline */}
        <section className="mt-14">
          <SectionHead eyebrow="Process" title="How to Apply" />
          <ol className="relative space-y-6 border-l-2 border-brand-cream pl-8">
            {applicationSteps.map((step, i) => (
              <li key={step.title} className="relative">
                <span className="absolute -left-[2.85rem] grid h-9 w-9 place-items-center rounded-full brand-gradient text-sm font-bold text-white ring-4 ring-white">
                  {i + 1}
                </span>
                <h4 className="font-bold text-ink">{step.title}</h4>
                <p className="mt-1 text-[15px] leading-relaxed text-ink/80">{step.text}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Where to submit */}
        <section className="mt-14">
          <SectionHead eyebrow="Submission" title="Where to Submit" />
          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl brand-gradient p-6 text-white shadow-xl">
              <span className="text-2xl">🏛️</span>
              <h4 className="mt-3 text-lg font-extrabold">Submit in Person</h4>
              <p className="mt-2 text-sm leading-relaxed text-white/90">
                Office of the Dean – Research
                <br />
                Sengol International University, Lower Pepthang,
                <br />
                PO – Lingmoo, District – Namchi, Sikkim-737134
              </p>
            </div>
            <div className="rounded-2xl border border-brand-cream bg-white p-6">
              <span className="text-2xl">✉️</span>
              <h4 className="mt-3 text-lg font-extrabold text-ink">Submit by Email</h4>
              <p className="mt-2 text-sm leading-relaxed text-ink/80">
                Send a scanned copy of the duly filled application form, payment receipt, and all
                documents to:
              </p>
              <a
                href="mailto:research@sengolinternationaluniversity.edu.in"
                className="mt-3 inline-block break-all font-semibold text-brand-1 underline decoration-brand-1/30 underline-offset-4 hover:decoration-brand-1"
              >
                research@sengolinternationaluniversity.edu.in
              </a>
            </div>
          </div>
          <p className="mt-4 flex items-start gap-2 text-sm italic text-muted">
            <span>⚠️</span>
            The University is not responsible for postal delays. Incomplete applications or those
            submitted after the deadline will not be accepted.
          </p>
        </section>

        {/* Important dates */}
        <section className="mt-14">
          <SectionHead eyebrow="Schedule" title="Important Dates" />
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
                    <td className="whitespace-nowrap px-5 py-3 font-semibold text-ink">{r.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <CTABand
          title="Begin Your Doctoral Journey"
          text="Take the next step in your academic career with a Ph.D. at Sengol International University. Download the application form and apply before 31 May 2026."
          primary={{ label: "Download Application Form", href: "/application-form" }}
          secondary={{ label: "Contact Dean – Research", href: "/contact" }}
        />
      </SectionLayout>
    </main>
  );
}
