import PageBanner from "@/components/PageBanner";
import Reveal from "@/components/Reveal";
import { ContentEyebrow, SectionTitle } from "@/components/content-blocks";
import StudentFeePayment from "@/components/StudentFeePayment";

export const metadata = {
  title: "Student Fee Payment | Sengol International University",
  description:
    "Students can pay their re-registration fee and clear the fee that releases their admit card.",
};

export default function StudentFeePage() {
  return (
    <main>
      <PageBanner
        breadcrumb="Students"
        eyebrow="Fee Payment"
        icon="🎓"
        title="Re-Registration & Admit Card Fee"
        subtitle="Enter your application number and registered mobile number to see exactly what is due and pay it online."
      />

      <section className="bg-brand-light py-16 sm:py-20">
        <div className="mx-auto max-w-[860px] px-4">
          <Reveal>
            <ContentEyebrow>💳 Student Fee Payment</ContentEyebrow>
            <SectionTitle>Check &amp; Pay Your Fee</SectionTitle>
            <div className="mt-8">
              <StudentFeePayment />
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
