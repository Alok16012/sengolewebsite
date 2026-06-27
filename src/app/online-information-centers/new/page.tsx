import PageBanner from "@/components/PageBanner";
import Reveal from "@/components/Reveal";
import { ContentEyebrow, SectionTitle } from "@/components/content-blocks";
import NewCenterRegistration from "@/components/NewCenterRegistration";

export const metadata = {
  title: "New Computer Institute Registration | Sengol International University",
  description:
    "Register your computer institute as a new Admission Partner with Sengol International University.",
};

export default function NewCenterRegistrationPage() {
  return (
    <main>
      <PageBanner
        breadcrumb="Admission Partners"
        eyebrow="New Computer Institute"
        icon="🎓"
        title="Register Your Institute"
        subtitle="Fill in your center details to register as a new Admission Partner."
      />

      <section className="bg-brand-light py-16 sm:py-20">
        <div className="mx-auto max-w-[800px] px-4">
          <Reveal>
            <ContentEyebrow>🎓 New Center Registration</ContentEyebrow>
            <SectionTitle>Center Details</SectionTitle>
            <div className="mt-8">
              <NewCenterRegistration />
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
