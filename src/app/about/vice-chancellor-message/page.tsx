import PageBanner from "@/components/PageBanner";
import SectionLayout from "@/components/SectionLayout";
import Reveal from "@/components/Reveal";
import { aboutMenu } from "@/data/content";
import { ContentEyebrow, SectionTitle, FeatureGrid } from "@/components/content-blocks";

export default function ViceChancellorMessagePage() {
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
        activeHref="/about/vice-chancellor-message"
      >
        <Reveal>
          <ContentEyebrow>🎓 Academic Leadership</ContentEyebrow>
          <SectionTitle>Message from the Vice Chancellor</SectionTitle>
        </Reveal>

        <Reveal>
          <div className="my-8 flex flex-col gap-5 rounded-2xl brand-gradient p-8 text-white shadow-xl sm:flex-row sm:items-center">
            <span className="grid h-24 w-24 shrink-0 place-items-center rounded-full bg-white/15 text-5xl">
              👨‍🏫
            </span>
            <div>
              <div className="text-2xl font-extrabold">Vice Chancellor</div>
              <div className="text-white/80">Sengol International University, Sikkim</div>
              <p className="mt-3 italic text-white/90">
                &ldquo;We educate not only minds, but hearts — to lead with purpose and
                passion.&rdquo;
              </p>
            </div>
          </div>
        </Reveal>

        <div className="space-y-4 text-[15px] leading-relaxed text-ink/80">
          <p>
            It gives me immense pleasure to welcome you to Sengol International University, a place
            where knowledge meets purpose, and where young minds are transformed into leaders of
            tomorrow.
          </p>
          <p>
            In today&apos;s rapidly evolving global landscape, higher education must transcend
            traditional boundaries. At Sengol International University, we are deeply committed to
            delivering a comprehensive and transformative education. Our approach is student-centric,
            innovation-driven, and ethically grounded. We seek to create an environment that fosters
            not only academic excellence but also character, creativity, and leadership.
          </p>
          <p>
            Our university offers a dynamic range of programs across various disciplines, designed to
            equip students with critical thinking skills, practical experience, and a lifelong love
            for learning. We believe in the integration of technology, research, and interdisciplinary
            approaches to ensure that our graduates are well-prepared to face the challenges of the
            modern world.
          </p>
          <p>
            Located in the peaceful and ecologically rich state of Sikkim, our campus is an oasis for
            learning and reflection. With world-class infrastructure, advanced laboratories, and smart
            classrooms, we provide a setting that supports both academic and personal development. We
            also take pride in our strong faculty, whose dedication, experience, and mentorship are
            the pillars of our academic excellence.
          </p>
          <p>
            Our mission is to cultivate global citizens who are not only competent professionals but
            also compassionate and socially responsible individuals. To that end, we emphasize
            experiential learning, social engagement, entrepreneurial spirit, and a commitment to
            sustainability and inclusiveness. International partnerships and industry collaborations
            further enrich our academic fabric, offering students and faculty the opportunity to
            engage in cutting-edge research, global internships, and cross-cultural exchange programs.
          </p>
          <p>
            As Vice Chancellor, I am honored to lead this vibrant institution into a new era of
            educational distinction. I invite all aspiring students, scholars, and collaborators to
            join us in our journey toward academic innovation, global relevance, and societal impact.
            Let us work together to build a university that not only imparts knowledge but inspires
            change.
          </p>
          <p className="font-semibold text-ink">
            With warm regards,
            <br />
            Vice Chancellor
            <br />
            Sengol International University, Sikkim
          </p>
        </div>

        <div className="mt-10">
          <FeatureGrid
            features={[
              {
                icon: "🎓",
                title: "Transformative Education",
                text: "It gives me immense pleasure to welcome you to Sengol International University, a place where knowledge meets purpose, and where young minds are transformed into leaders of tomorrow.",
              },
              {
                icon: "🌟",
                title: "Student-Centric Approach",
                text: "In today's rapidly evolving global landscape, higher education must transcend traditional boundaries. At Sengol International University, we are deeply committed to delivering a comprehensive and transformative education. Our approach is student-centric, innovation-driven, and ethically grounded.",
              },
              {
                icon: "💡",
                title: "Dynamic Programs",
                text: "Our university offers a dynamic range of programs across various disciplines, designed to equip students with critical thinking skills, practical experience, and a lifelong love for learning. We believe in the integration of technology, research, and interdisciplinary approaches.",
              },
              {
                icon: "🏔️",
                title: "Ideal Learning Environment",
                text: "Located in the peaceful and ecologically rich state of Sikkim, our campus is an oasis for learning and reflection. With world-class infrastructure, advanced laboratories, and smart classrooms, we provide a setting that supports both academic and personal development.",
              },
              {
                icon: "🤝",
                title: "Global Citizens",
                text: "Our mission is to cultivate global citizens who are not only competent professionals but also compassionate and socially responsible individuals. We emphasize experiential learning, social engagement, entrepreneurial spirit, and a commitment to sustainability.",
              },
              {
                icon: "🌍",
                title: "International Partnerships",
                text: "International partnerships and industry collaborations further enrich our academic fabric, offering students and faculty the opportunity to engage in cutting-edge research, global internships, and cross-cultural exchange programs.",
              },
            ]}
          />
        </div>
      </SectionLayout>
    </main>
  );
}
