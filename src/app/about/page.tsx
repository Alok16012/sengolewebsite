import PageBanner from "@/components/PageBanner";
import SectionLayout from "@/components/SectionLayout";
import Reveal from "@/components/Reveal";
import { aboutMenu } from "@/data/content";
import { ContentEyebrow, SectionTitle, FeatureGrid, CTABand } from "@/components/content-blocks";

export default function AboutPage() {
  return (
    <main>
      <PageBanner
        breadcrumb="About"
        eyebrow="About Us"
        icon="🎓"
        title="About Sengol"
        subtitle="Learn about our vision, leadership, and commitment to academic excellence and inclusive education."
      />
      <SectionLayout menuTitle="About" menuIcon="📚" items={aboutMenu} activeHref="/about">
        <Reveal>
          <ContentEyebrow>🏛️ Our University</ContentEyebrow>
          <SectionTitle>About Sengol International University</SectionTitle>
          <p className="mt-6 text-[15px] leading-relaxed text-ink/80">
            Sengol International University is a State Private University Established by Act No. 14 of
            2025 Sikkim State Legislative Assembly &amp; approved by UGC under section 2 (F) of the
            UGC Act 1956 in 2025.
          </p>
        </Reveal>

        <div className="mt-8">
          <FeatureGrid
            features={[
              {
                icon: "🏔️",
                title: "Himalayan Excellence",
                text: "Located in the picturesque state of Sikkim, is a premier institution committed to providing world-class education, fostering innovation, and nurturing global leaders. Established with the vision of promoting academic excellence and holistic development, Sengol International University offers a vibrant and inclusive learning environment where students thrive both intellectually and personally.",
              },
              {
                icon: "🎓",
                title: "Academic Diversity",
                text: "Situated amidst the serene Himalayas, our campus offers not only a scenic setting but also a peaceful atmosphere conducive to learning and research. The university blends traditional values with modern education, offering a wide spectrum of programs at undergraduate, postgraduate, and doctoral levels across diverse disciplines including Science & Technology, Commerce & Management, Humanities, Social Sciences, Law, Education, Pharmacy, Agriculture, Allied Health Sciences, and more.",
              },
              {
                icon: "💡",
                title: "Innovation & Values",
                text: "At Sengol International University, we believe in empowering students with knowledge, skills, and ethical values. Our highly qualified faculty members, modern infrastructure, cutting-edge research facilities, and industry-integrated curriculum ensure that our students are prepared to meet the challenges of a rapidly evolving global landscape.",
              },
              {
                icon: "🌍",
                title: "Global Perspective",
                text: "The university emphasizes innovation, sustainability, and research-driven education. Through national and international collaborations, we strive to provide our students with broader academic exposure and global opportunities.",
              },
              {
                icon: "🎯",
                title: "Future Leaders",
                text: "Sengol International University remains dedicated to shaping responsible citizens and visionary professionals who will contribute meaningfully to society. With a focus on academic excellence, social responsibility, and global perspective, Sengol International University is on its path to becoming a center of educational distinction in India and beyond.",
              },
            ]}
          />
        </div>

        <CTABand
          title="Join Our Academic Community"
          text="Experience world-class education in the heart of the Himalayas. Shape your future with us."
          primary={{ label: "Explore Programs", href: "/programs/school_engineering_technology" }}
          secondary={{ label: "Contact Admissions", href: "/contact" }}
        />
      </SectionLayout>
    </main>
  );
}
