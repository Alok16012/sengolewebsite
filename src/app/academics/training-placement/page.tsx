import PageBanner from "@/components/PageBanner";
import SectionLayout from "@/components/SectionLayout";
import Reveal from "@/components/Reveal";
import { academicsMenu } from "@/data/content";
import {
  ContentEyebrow,
  SectionTitle,
  StatRow,
  FeatureGrid,
  Prose,
  CTABand,
} from "@/components/content-blocks";

const services = [
  "Campus recruitment drives with leading national and multinational companies.",
  "Pre-placement training including aptitude, group discussion, and personal interview preparation.",
  "Soft-skills and personality development workshops throughout the academic year.",
  "Industry internships and live projects for hands-on professional exposure.",
  "Career counselling and guidance tailored to each student's strengths and aspirations.",
  "Resume building, mock interviews, and one-on-one mentoring sessions.",
  "Alumni network connect for referrals, mentorship, and industry insights.",
  "Entrepreneurship support and incubation guidance for aspiring founders.",
];

const objectives = [
  "Bridge the gap between academic learning and industry expectations.",
  "Equip students with the technical and interpersonal skills demanded by employers.",
  "Build long-term relationships with recruiters across diverse sectors.",
  "Ensure every eligible student receives meaningful placement opportunities.",
];

export default function TrainingPlacementPage() {
  return (
    <main>
      <PageBanner
        breadcrumb="Academics"
        eyebrow="Academics"
        icon="🎓"
        title="Academics"
        subtitle="Explore academic leadership, faculty excellence, and our commitment to a safe and inclusive learning environment."
      />
      <SectionLayout
        menuTitle="Academics"
        menuIcon="🎓"
        items={academicsMenu}
        activeHref="/academics/training-placement"
      >
        <Reveal>
          <ContentEyebrow>💼 Career Development</ContentEyebrow>
          <SectionTitle>Training &amp; Placement</SectionTitle>
          <StatRow
            stats={[
              { value: "100+", label: "Recruiting Partners" },
              { value: "90%", label: "Placement Rate" },
              { value: "₹12 LPA", label: "Highest Package" },
            ]}
          />
          <Prose
            paragraphs={[
              "The Training and Placement Cell at Sengol International University is dedicated to nurturing students into industry-ready professionals. Acting as a bridge between academia and industry, the cell works year-round to provide students with the skills, exposure, and opportunities needed to launch successful careers.",
              "Through structured training programs, industry interactions, and a robust recruitment network, we ensure that every student is well-prepared to meet the evolving demands of the global workforce.",
            ]}
          />
        </Reveal>

        <div className="mt-10">
          <h3 className="mb-4 text-xl font-bold text-ink">Our Objectives</h3>
          <FeatureGrid
            cols={2}
            features={objectives.map((text, i) => ({
              icon: `${i + 1}`,
              title: `Objective ${i + 1}`,
              text,
            }))}
          />
        </div>

        <div className="mt-10">
          <h3 className="mb-4 text-xl font-bold text-ink">Services We Offer</h3>
          <FeatureGrid
            features={services.map((text) => ({
              icon: "✅",
              title: text.split(" ").slice(0, 3).join(" "),
              text,
            }))}
          />
        </div>

        <div className="mt-10">
          <h3 className="mb-4 text-xl font-bold text-ink">Placement Process</h3>
          <FeatureGrid
            features={[
              {
                icon: "1️⃣",
                title: "Registration",
                text: "Eligible students register with the Training & Placement Cell at the start of the placement season.",
              },
              {
                icon: "2️⃣",
                title: "Skill Training",
                text: "Students undergo aptitude, technical, and soft-skill training to prepare for recruitment.",
              },
              {
                icon: "3️⃣",
                title: "Company Drives",
                text: "Recruiters conduct on-campus and virtual drives including tests and interviews.",
              },
              {
                icon: "4️⃣",
                title: "Offer & Onboarding",
                text: "Selected students receive offer letters and guidance for a smooth transition into employment.",
              },
            ]}
          />
        </div>

        <CTABand
          title="Launch Your Career With Us"
          text="Our Training and Placement Cell is committed to helping you achieve your professional goals. Connect with us to learn about upcoming recruitment drives and training programs."
          primary={{ label: "Contact Placement Cell", href: "/contact" }}
          secondary={{ label: "Explore Programs", href: "/programs/school_engineering_technology" }}
        />
      </SectionLayout>
    </main>
  );
}
