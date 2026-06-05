import PageBanner from "@/components/PageBanner";
import SectionLayout from "@/components/SectionLayout";
import Reveal from "@/components/Reveal";
import { aboutMenu } from "@/data/content";
import {
  ContentEyebrow,
  SectionTitle,
  FeatureGrid,
  Prose,
  CTABand,
} from "@/components/content-blocks";

export default function MissionVisionPage() {
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
        activeHref="/about/mission-vision"
      >
        <Reveal>
          <ContentEyebrow>🎯 OUR DIRECTION</ContentEyebrow>
          <SectionTitle>Vision &amp; Mission</SectionTitle>
          <p className="mt-3 text-[15px] leading-relaxed text-ink/80">
            At Sengol International University, our vision and mission shape our path to academic
            and societal excellence.
          </p>
        </Reveal>

        <div className="mt-8">
          <Reveal>
            <ContentEyebrow>👁️ OUR VISION</ContentEyebrow>
          </Reveal>
          <div className="mt-4">
            <Prose
              paragraphs={[
                "To emerge as a globally recognized center of academic excellence, innovation, and ethical leadership that nurtures knowledge, fosters creativity, and inspires students to become responsible global citizens committed to shaping a sustainable and inclusive future.",
              ]}
            />
          </div>
        </div>

        <div className="mt-10">
          <Reveal>
            <ContentEyebrow>🎯 OUR MISSION</ContentEyebrow>
          </Reveal>
          <div className="mt-6">
            <FeatureGrid
              features={[
                {
                  icon: "🎓",
                  title: "Transformative Learning",
                  text: "To provide a transformative educational experience that blends academic rigor with practical knowledge and life skills.",
                },
                {
                  icon: "💡",
                  title: "Innovation & Research",
                  text: "To foster a culture of innovation, inquiry, and research that addresses real-world challenges.",
                },
                {
                  icon: "🤝",
                  title: "Inclusivity & Ethics",
                  text: "To uphold the values of inclusivity, diversity, ethics, and social responsibility in all aspects of institutional life.",
                },
                {
                  icon: "🌍",
                  title: "Strategic Collaborations",
                  text: "To build strategic collaborations with industry, academia, and global institutions for enriching academic and research opportunities.",
                },
                {
                  icon: "🌟",
                  title: "Empowered Leaders",
                  text: "To empower students to lead with integrity, vision, and a sense of service to society.",
                },
              ]}
            />
          </div>
        </div>

        <CTABand
          title="Ready to Be Part of Our Vision?"
          text="Join us in creating a future where education transforms lives and builds a better world."
          primary={{ label: "Apply Now", href: "/admission/application-form" }}
          secondary={{ label: "Learn More", href: "/about" }}
        />
      </SectionLayout>
    </main>
  );
}
