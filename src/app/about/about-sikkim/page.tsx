import PageBanner from "@/components/PageBanner";
import SectionLayout from "@/components/SectionLayout";
import Reveal from "@/components/Reveal";
import { aboutMenu } from "@/data/content";
import {
  ContentEyebrow,
  SectionTitle,
  StatRow,
  FeatureGrid,
  Prose,
  CTABand,
} from "@/components/content-blocks";

export default function AboutSikkimPage() {
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
        activeHref="/about/about-sikkim"
      >
        <Reveal>
          <ContentEyebrow>🏔️ OUR LOCATION</ContentEyebrow>
          <SectionTitle>About Sikkim</SectionTitle>
          <p className="mt-3 text-lg font-semibold text-ink">
            The Land of Mystical Beauty
          </p>
          <p className="mt-1 text-[15px] leading-relaxed text-ink/80">
            Where tradition meets progress in the heart of the Himalayas.
          </p>
          <StatRow
            stats={[
              { value: "100%", label: "Organic State" },
              { value: "98%", label: "Literacy Rate" },
              { value: "1st", label: "Cleanest State" },
            ]}
          />
        </Reveal>

        <div className="mt-8">
          <FeatureGrid
            features={[
              {
                icon: "🏔️",
                title: "Himalayan Paradise",
                text: "Nestled in the lap of the Eastern Himalayas, Sikkim is a jewel of northeastern India, renowned for its stunning natural beauty, cultural richness, and environmental consciousness. Sharing borders with Bhutan, Tibet, and Nepal, this serene state is India's least populous yet one of its most progressive and peaceful.",
              },
              {
                icon: "🤝",
                title: "Cultural Harmony",
                text: "Sikkim boasts a unique blend of traditions, where diverse communities — including the Lepchas, Bhutias, and Nepalis — live in harmony. Its capital, Gangtok, is a picturesque hill town known for its clean environment, welcoming people, and growing educational and technological hubs.",
              },
              {
                icon: "🌱",
                title: "Organic Excellence",
                text: "As India's first fully organic state, Sikkim is a model of sustainable development. Its breathtaking landscapes — from snow-capped mountains and alpine meadows to hot springs and monasteries — make it a haven for nature lovers and spiritual seekers alike.",
              },
              {
                icon: "🎓",
                title: "Educational Hub",
                text: "Sikkim also holds strategic importance and plays a vital role in India's cultural and ecological diversity. With a high literacy rate and an increasing focus on quality education, it is rapidly becoming a preferred destination for students from across India and abroad.",
              },
            ]}
          />
        </div>

        <div className="mt-10">
          <Reveal>
            <ContentEyebrow>🎓 OUR CONNECTION</ContentEyebrow>
            <SectionTitle>Our University&apos;s Connection to Sikkim</SectionTitle>
          </Reveal>
          <div className="mt-4">
            <Prose
              paragraphs={[
                "At the heart of this progressive and peaceful region, Sengol International University aspires to carry forward Sikkim's legacy of harmony, sustainability, and intellectual growth.",
              ]}
            />
          </div>
        </div>

        <CTABand
          title="Study in the Heart of the Himalayas"
          text="Experience world-class education in one of India's most beautiful and progressive states."
          primary={{ label: "Explore Campus", href: "/about" }}
          secondary={{ label: "Visit Sikkim", href: "/contact" }}
        />
      </SectionLayout>
    </main>
  );
}
