import PageBanner from "@/components/PageBanner";
import ApplicationStatusForm from "@/components/ApplicationStatusForm";
import Reveal from "@/components/Reveal";
import { ContentEyebrow, SectionTitle } from "@/components/content-blocks";

export const metadata = {
  title: "Track Student Application | Sengol International University",
  description:
    "Check your student application status using your application number and registered email, and pay your pending fee if any.",
};

export default function StudentApplicationStatusPage() {
  return (
    <main>
      <PageBanner
        breadcrumb="Admission"
        eyebrow="Track Your Application"
        icon="🎓"
        title="Student Application Status"
        subtitle="Check your student application status with your application number, and clear any pending payment instantly."
      />

      <section className="bg-brand-light py-16 sm:py-20">
        <div className="mx-auto max-w-[640px] px-4">
          <Reveal>
            <div className="rounded-2xl bg-white p-7 shadow-[0_10px_30px_rgba(49,37,24,0.08)] ring-1 ring-brand-cream sm:p-10">
              <ContentEyebrow>🎓 Student Status Check</ContentEyebrow>
              <SectionTitle>Find Your Student Application</SectionTitle>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">
                Enter your student application number and registered email to view
                your current status and pay any pending fee.
              </p>
              <ApplicationStatusForm kind="student" />
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
