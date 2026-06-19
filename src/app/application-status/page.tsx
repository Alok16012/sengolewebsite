import PageBanner from "@/components/PageBanner";
import ApplicationStatusForm from "@/components/ApplicationStatusForm";
import Reveal from "@/components/Reveal";
import { ContentEyebrow, SectionTitle } from "@/components/content-blocks";

export const metadata = {
  title: "Track Application | Sengol International University",
  description:
    "Check your center application status using your application number and registered email, and pay your pending fee if any.",
};

const steps = [
  "Enter the application number you received when you submitted your center application.",
  "Enter the email address registered with the application to verify it's you.",
  "See your live approval status — and if any fee is pending, pay it right here.",
];

export default function ApplicationStatusPage() {
  return (
    <main>
      <PageBanner
        breadcrumb="Admission"
        eyebrow="Track Your Application"
        icon="🔍"
        title="Application Status"
        subtitle="Check your center application status with your application number, and clear any pending payment instantly."
      />

      <section className="bg-brand-light py-16 sm:py-20">
        <div className="mx-auto max-w-[1400px] px-4">
          <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
            <Reveal>
              <div className="rounded-2xl bg-white p-7 shadow-[0_10px_30px_rgba(49,37,24,0.08)] ring-1 ring-brand-cream sm:p-10">
                <ContentEyebrow>🔍 Status Check</ContentEyebrow>
                <SectionTitle>Find Your Application</SectionTitle>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">
                  Enter your application number and registered email to view your
                  current status and pay any pending fee.
                </p>
                <ApplicationStatusForm />
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="h-full rounded-2xl brand-gradient p-8 text-white shadow-[0_10px_30px_rgba(49,37,24,0.12)] sm:p-10">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-white/15 text-2xl ring-1 ring-white/30">
                  📄
                </span>
                <h3 className="mt-5 text-2xl font-extrabold">How it works</h3>
                <ul className="mt-6 space-y-5">
                  {steps.map((item, i) => (
                    <li key={item} className="flex gap-4">
                      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white/20 text-sm font-bold ring-1 ring-white/30">
                        {i + 1}
                      </span>
                      <span className="text-[15px] leading-relaxed text-white/90">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-8 text-sm text-white/70">
                  Lost your application number? Contact{" "}
                  <a
                    href="mailto:info@sengolinternationaluniversity.edu.in"
                    className="font-semibold text-white underline"
                  >
                    our admissions team
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
