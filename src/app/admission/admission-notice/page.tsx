import PageBanner from "@/components/PageBanner";
import SectionLayout from "@/components/SectionLayout";
import Reveal from "@/components/Reveal";
import { admissionMenu } from "@/data/content";
import { ContentEyebrow, SectionTitle, FeatureGrid, CTABand } from "@/components/content-blocks";

export default function AdmissionNoticePage() {
  return (
    <main>
      <PageBanner
        breadcrumb="Admission"
        eyebrow="Admission"
        icon="📢"
        title="Admission Notice"
        subtitle="Stay updated with the latest announcements, important dates, and application guidelines for all programs."
      />
      <SectionLayout
        menuTitle="Admission"
        menuIcon="📝"
        items={admissionMenu}
        activeHref="/admission/admission-notice"
      >
        <Reveal>
          <ContentEyebrow>📢 Under Development</ContentEyebrow>
          <SectionTitle>Coming Soon...</SectionTitle>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink/80">
            <p>
              This page will provide comprehensive information about the latest admission notices,
              important dates, eligibility criteria, and application guidelines for all programs.
              Stay tuned! We are working hard to bring you the most updated information.
            </p>
          </div>
        </Reveal>

        <div className="mt-10">
          <FeatureGrid
            features={[
              { icon: "🗞️", title: "Latest Admission Notices", text: "Stay updated with the most recent admission announcements and important dates." },
              { icon: "📅", title: "Important Dates & Deadlines", text: "Never miss crucial admission deadlines with our comprehensive timeline." },
              { icon: "✅", title: "Eligibility Criteria", text: "Detailed eligibility requirements for all programs and courses." },
              { icon: "📝", title: "Application Guidelines", text: "Step-by-step guidance for completing your admission application." },
            ]}
          />
        </div>

        <div className="mt-12">
          <Reveal>
            <h3 className="mb-6 text-2xl font-extrabold text-ink">Why Stay Connected</h3>
          </Reveal>
          <FeatureGrid
            cols={3}
            features={[
              { icon: "🔔", title: "Regular Updates", text: "Latest information delivered as soon as notices are published." },
              { icon: "⚡", title: "Quick Access", text: "Easy navigation to all the admission resources you need." },
              { icon: "📚", title: "Comprehensive", text: "Complete details covering every stage of the admission journey." },
            ]}
          />
        </div>

        <CTABand
          title="Get Notified When It's Ready"
          text="Be the first to know when admission notices are published. Explore our other admission resources in the meantime."
          primary={{ label: "Admission Procedure", href: "/admission/admission-procedure" }}
          secondary={{ label: "Back to Home", href: "/" }}
        />
      </SectionLayout>
    </main>
  );
}
