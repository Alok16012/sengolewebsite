import PageBanner from "@/components/PageBanner";
import SectionLayout from "@/components/SectionLayout";
import Reveal from "@/components/Reveal";
import { aboutMenu } from "@/data/content";
import {
  ContentEyebrow,
  SectionTitle,
  StatRow,
  FeatureGrid,
  CTABand,
} from "@/components/content-blocks";

export default function ApprovalRecognitionPage() {
  return (
    <main>
      <PageBanner
        breadcrumb="About"
        eyebrow="About Us"
        icon="🎓"
        title="About Sengol"
        subtitle="Learn about our vision, leadership, and commitment to academic excellence and inclusive education."
      />
      <SectionLayout
        menuTitle="About"
        menuIcon="📚"
        items={aboutMenu}
        activeHref="/about/approval-recognition"
      >
        <Reveal>
          <ContentEyebrow>🏆 OFFICIAL STATUS</ContentEyebrow>
          <SectionTitle>Approvals &amp; Recognitions</SectionTitle>
          <p className="mt-3 text-[15px] leading-relaxed text-ink/80">
            Sengol International University is a legally established institution with full government
            recognition and UGC approval, ensuring quality education and valid degrees.
          </p>
        </Reveal>

        <div className="mt-8">
          <FeatureGrid
            features={[
              {
                icon: "🏛️",
                title: "Government of Sikkim",
                text: "State Private University Established by Act No. 14 of 2025 — Approved.",
              },
              {
                icon: "📜",
                title: "UGC Recognition",
                text: "Approved under section 2 (F) of the UGC Act 1956 in 2025.",
              },
              {
                icon: "⚖️",
                title: "Legal Status",
                text: "Sikkim State Legislative Assembly authorized — Certified.",
              },
            ]}
          />
        </div>

        <Reveal>
          <div className="my-10 flex flex-col gap-5 rounded-2xl brand-gradient p-8 text-white shadow-xl sm:flex-row sm:items-center">
            <span className="grid h-24 w-24 shrink-0 place-items-center rounded-full bg-white/15 text-5xl">
              📄
            </span>
            <div>
              <div className="text-2xl font-extrabold">Official Gazette Notification</div>
              <div className="text-white/80">Government of Sikkim &mdash; Official Seal</div>
              <p className="mt-3 text-white/90">
                Sikkim State Government Gazette of Sengol International University — Official
                establishment document under Act No. 14 of 2025.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <ContentEyebrow>✅ FULLY AUTHORIZED</ContentEyebrow>
          <StatRow
            stats={[
              { value: "2025", label: "Year Established" },
              { value: "Act 14", label: "Legal Authorization" },
              { value: "UGC", label: "Approved" },
            ]}
          />
        </Reveal>

        <CTABand
          title="Fully Authorized & Recognized"
          text="A legally established institution with full government recognition and UGC approval, ensuring quality education and valid degrees."
          primary={{ label: "View Gazette Copy", href: "/about/approval-recognition" }}
          secondary={{ label: "Contact Registrar", href: "/contact" }}
        />
      </SectionLayout>
    </main>
  );
}
