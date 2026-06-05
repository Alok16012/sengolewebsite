import PageBanner from "@/components/PageBanner";
import SectionLayout from "@/components/SectionLayout";
import Reveal from "@/components/Reveal";
import { aboutMenu } from "@/data/content";
import { ContentEyebrow, SectionTitle, FeatureGrid } from "@/components/content-blocks";

export default function ChancellorMessagePage() {
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
        activeHref="/about/chancellor-message"
      >
        <Reveal>
          <ContentEyebrow>👤 Leadership Message</ContentEyebrow>
          <SectionTitle>Message from the Chancellor</SectionTitle>
        </Reveal>

        <Reveal>
          <div className="my-8 flex flex-col gap-5 rounded-2xl brand-gradient p-8 text-white shadow-xl sm:flex-row sm:items-center">
            <span className="grid h-24 w-24 shrink-0 place-items-center rounded-full bg-white/15 text-5xl">
              👨‍🎓
            </span>
            <div>
              <div className="text-2xl font-extrabold">Chancellor</div>
              <div className="text-white/80">Sengol International University, Sikkim</div>
              <p className="mt-3 italic text-white/90">
                &ldquo;Education is the cornerstone of a just and progressive society. Let&apos;s
                build it together — one student at a time.&rdquo;
              </p>
            </div>
          </div>
        </Reveal>

        <div className="space-y-4 text-[15px] leading-relaxed text-ink/80">
          <p>
            It is with immense pride and great pleasure that I welcome you to Sengol International
            University, Sikkim — a vibrant institution committed to academic excellence, innovation,
            and the holistic development of our students.
          </p>
          <p>
            At Sengol International University, we believe education is not just about the transfer
            of knowledge, but the transformation of lives. Rooted in the rich cultural heritage of
            Sikkim and driven by global standards, our university is a place where tradition meets
            modernity, where students are nurtured to become responsible leaders, critical thinkers,
            and compassionate global citizens.
          </p>
          <p>
            Our commitment is to provide a dynamic and inclusive learning environment supported by a
            distinguished faculty, cutting-edge facilities, and a curriculum designed to meet the
            evolving demands of the 21st century. We strive to nurture intellectual curiosity, social
            responsibility, and a global mindset in our students. By encouraging cross-disciplinary
            exploration, ethical reasoning, and creative problem-solving, we help students become
            resilient, adaptable, and visionary leaders of tomorrow.
          </p>
          <p>
            Sengol International University is not only an academic institution but a community of
            learners, educators, researchers, and innovators who are driven by the shared goal of
            making a positive impact on society. Our university is designed as a space for critical
            inquiry and constructive dialogue, where ideas flourish and diversity is celebrated.
            Through research, collaboration, and civic engagement, we aim to address the challenges
            facing our world and contribute to building a more equitable and sustainable future.
          </p>
          <p>
            As Chancellor, my vision is to see Sengol International University emerge as a beacon of
            knowledge and character — a place where young minds are empowered to innovate, lead, and
            contribute meaningfully to society. We are focused on building not only a university of
            excellence, but also a culture of compassion, collaboration, and continuous learning.
          </p>
          <p>
            We welcome students from across the country and around the world to join our vibrant
            community. At Sengol International University, your aspirations will be met with
            encouragement, your curiosity with opportunity, and your potential with the resources and
            support needed to achieve greatness.
          </p>
          <p>
            I warmly invite you to be a part of this journey, and I look forward to witnessing the
            remarkable futures that will be shaped within the halls of Sengol International
            University.
          </p>
          <p className="font-semibold text-ink">
            With best wishes,
            <br />
            Chancellor
            <br />
            Sengol International University, Sikkim
          </p>
        </div>

        <div className="mt-10">
          <FeatureGrid
            features={[
              {
                icon: "🎓",
                title: "Academic Excellence",
                text: "It is with immense pride and great pleasure that I welcome you to Sengol International University, Sikkim — a vibrant institution committed to academic excellence, innovation, and the holistic development of our students.",
              },
              {
                icon: "🌟",
                title: "Transformative Education",
                text: "At Sengol International University, we believe education is not just about the transfer of knowledge, but the transformation of lives. Rooted in the rich cultural heritage of Sikkim and driven by global standards, our university is a place where tradition meets modernity.",
              },
              {
                icon: "💡",
                title: "21st Century Learning",
                text: "Our commitment is to provide a dynamic and inclusive learning environment supported by a distinguished faculty, cutting-edge facilities, and a curriculum designed to meet the evolving demands of the 21st century.",
              },
              {
                icon: "🤝",
                title: "Community of Innovators",
                text: "Sengol International University is not only an academic institution but a community of learners, educators, researchers, and innovators driven by the shared goal of making a positive impact on society.",
              },
              {
                icon: "🎯",
                title: "Vision for Excellence",
                text: "As Chancellor, my vision is to see Sengol International University emerge as a beacon of knowledge and character — a place where young minds are empowered to innovate, lead, and contribute meaningfully to society.",
              },
              {
                icon: "🌍",
                title: "Global Welcome",
                text: "We welcome students from across the country and around the world to join our vibrant community. At Sengol International University, your aspirations will be met with encouragement and opportunity.",
              },
            ]}
          />
        </div>
      </SectionLayout>
    </main>
  );
}
