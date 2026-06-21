import PageBanner from "@/components/PageBanner";
import ApplicationStatusResult from "@/components/ApplicationStatusResult";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Application Status | Sengol International University",
  description:
    "View your center application status, approval journey, and pay any pending fee.",
};

export default function ApplicationStatusResultPage() {
  return (
    <main>
      <PageBanner
        breadcrumb="Admission"
        eyebrow="Track Your Application"
        icon="📄"
        title="Your Application Status"
        subtitle="Here's the latest on your center application, including your approval journey and any pending payment."
      />

      <section className="bg-brand-light py-16 sm:py-20">
        <div className="mx-auto max-w-[900px] px-4">
          <Reveal>
            <ApplicationStatusResult />
          </Reveal>
        </div>
      </section>
    </main>
  );
}
