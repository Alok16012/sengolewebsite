import PageBanner from "@/components/PageBanner";
import SectionLayout from "@/components/SectionLayout";
import Reveal from "@/components/Reveal";
import { academicsMenu } from "@/data/content";
import { ContentEyebrow, SectionTitle, FeatureGrid, Prose, CTABand } from "@/components/content-blocks";

const constitutesRagging = [
  "Verbal or physical abuse, bullying, or harassment.",
  "Forcing a student to perform actions that cause embarrassment or psychological harm.",
  "Any act that affects the mental or physical health and self-confidence of a fellow student.",
  "Preventing a student from attending classes or participating in activities through intimidation.",
];

const prohibitedActivities = [
  "Teasing, name-calling, or insulting a student.",
  "Forcing juniors to perform objectionable or humiliating tasks.",
  "Creating a hostile academic, residential, or social environment.",
];

const consequences = [
  "Immediate suspension from the university.",
  "Cancellation of admission.",
  "FIR/lawsuit under IPC sections related to criminal intimidation and harassment.",
  "Debarring from examinations, scholarships, or campus placements.",
  "Expulsion from the university.",
];

export default function AntiRaggingPage() {
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
        activeHref="/academics/anti-ragging"
      >
        <Reveal>
          <ContentEyebrow>🛡️ Zero Tolerance Policy</ContentEyebrow>
          <SectionTitle>Anti-Ragging Policy Statement</SectionTitle>
        </Reveal>

        <div className="mt-6">
          <h3 className="mb-3 text-xl font-bold text-ink">Introduction</h3>
          <Prose
            paragraphs={[
              "Sengol International University is committed to ensuring a safe, secure, and nurturing environment for all students. In compliance with the guidelines of the Hon'ble Supreme Court of India and the University Grants Commission (UGC), the university adopts a Zero Tolerance Policy against Ragging in any form.",
            ]}
          />
        </div>

        <div className="mt-10">
          <h3 className="mb-4 text-xl font-bold text-ink">What Constitutes Ragging?</h3>
          <p className="mb-4 text-[15px] leading-relaxed text-ink/80">
            As per the UGC regulations, ragging includes—but is not limited to—the following:
          </p>
          <FeatureGrid
            features={constitutesRagging.map((text, i) => ({
              icon: `${i + 1}`,
              title: `Form ${i + 1}`,
              text,
            }))}
          />
        </div>

        <div className="mt-10">
          <h3 className="mb-4 text-xl font-bold text-ink">Prohibited Activities Include</h3>
          <FeatureGrid
            features={prohibitedActivities.map((text, i) => ({
              icon: "🚫",
              title: `Prohibited ${i + 1}`,
              text,
            }))}
          />
        </div>

        <div className="mt-10">
          <h3 className="mb-4 text-xl font-bold text-ink">Legal and Disciplinary Consequences</h3>
          <p className="mb-4 text-[15px] font-semibold leading-relaxed text-ink">
            ⚠️ Engaging in ragging is a criminal offense. The following penalties may apply:
          </p>
          <FeatureGrid
            features={consequences.map((text, i) => ({
              icon: `${i + 1}`,
              title: `Penalty ${i + 1}`,
              text,
            }))}
          />
        </div>

        <div className="mt-10">
          <h3 className="mb-4 text-xl font-bold text-ink">Support Structure</h3>
          <FeatureGrid
            features={[
              {
                icon: "👥",
                title: "Anti-Ragging Committee",
                text: "Oversees policy implementation and conducts inquiry into complaints.",
              },
              {
                icon: "🔍",
                title: "Anti-Ragging Squad",
                text: "Conducts surprise checks, monitors vulnerable locations, and acts proactively.",
              },
              {
                icon: "🧭",
                title: "Nodal Officer",
                text: "Coordinates with external bodies and handles grievance redressal.",
              },
            ]}
            cols={3}
          />
        </div>

        <div className="mt-10">
          <h3 className="mb-3 text-xl font-bold text-ink">Complaint Mechanisms</h3>
          <Prose
            paragraphs={[
              "Students can report anonymously through the Online Grievance Portal or by email.",
              "A dedicated Anti-Ragging Helpline is operational 24/7.",
              "All complaints will be treated confidentially, and strict action will be taken.",
            ]}
          />
        </div>

        <CTABand
          title="Need Help? Report Immediately!"
          text="Your safety is our priority. Don't hesitate to reach out if you experience or witness any form of ragging. 24/7 Helpline: 1800-XXX-XXXX · antiragging@sengol.edu"
          primary={{ label: "Report Now", href: "/contact" }}
        />
      </SectionLayout>
    </main>
  );
}
