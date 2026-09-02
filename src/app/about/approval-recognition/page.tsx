import Image from "next/image";
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
          <div className="my-10 overflow-hidden rounded-2xl brand-gradient text-white shadow-xl">
            <div className="flex flex-col gap-7 p-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-start gap-5">
                <span className="grid h-20 w-20 shrink-0 place-items-center rounded-full bg-white/15 text-4xl">
                  📄
                </span>
                <div>
                  <div className="text-2xl font-extrabold">Official Gazette Notification</div>
                  <div className="text-white/80">Government of Sikkim &mdash; Official Seal</div>
                  <p className="mt-3 max-w-md text-white/90">
                    Sikkim State Government Gazette of Sengol International University — Official
                    establishment document under Act No. 14 of 2025.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href="/Gazette_Notification.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-brand-1 shadow-sm transition hover:bg-white/90"
                    >
                      📄 View Gazette Copy
                    </a>
                    <a
                      href="/Gazette_Notification.pdf"
                      download
                      className="inline-flex items-center gap-2 rounded-xl bg-white/15 px-6 py-3 font-semibold text-white ring-1 ring-white/40 transition hover:bg-white/25"
                    >
                      ⬇️ Download PDF
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex shrink-0 flex-col items-center gap-2 self-center rounded-2xl bg-white p-4 text-center shadow-lg">
                <Image
                  src="/gazette-qr.svg"
                  alt="Scan this QR code to view the official gazette notification"
                  width={140}
                  height={140}
                  className="h-36 w-36"
                  unoptimized
                />
                <span className="text-xs font-bold uppercase tracking-wide text-brand-3">
                  📱 Scan to view
                </span>
              </div>
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
          primary={{ label: "Contact Registrar", href: "/contact" }}
        />
      </SectionLayout>
    </main>
  );
}
