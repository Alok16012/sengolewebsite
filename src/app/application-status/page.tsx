import ApplicationStatusForm from "@/components/ApplicationStatusForm";
import Reveal from "@/components/Reveal";
import { ContentEyebrow, SectionTitle } from "@/components/content-blocks";

export const metadata = {
  title: "Track Application | Sengol International University",
  description:
    "Check your center application status using your application number and registered email, and pay your pending fee if any.",
};

export default function ApplicationStatusPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-brand-light py-12 px-4">
      <div className="w-full max-w-[640px]">
        <Reveal>
          <div className="rounded-2xl bg-white p-7 shadow-[0_10px_30px_rgba(49,37,24,0.08)] ring-1 ring-brand-cream sm:p-10">
            <ContentEyebrow>🏢 Center Status Check</ContentEyebrow>
            <SectionTitle>Find Your Center Application</SectionTitle>
            <ApplicationStatusForm kind="center" />
          </div>
        </Reveal>
      </div>
    </main>
  );
}
