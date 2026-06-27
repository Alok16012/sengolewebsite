import PageBanner from "@/components/PageBanner";
import Reveal from "@/components/Reveal";
import { ContentEyebrow, SectionTitle } from "@/components/content-blocks";
import ExistingCenterPayment from "@/components/ExistingCenterPayment";

export const metadata = {
  title: "Existing Center Payment | Sengol International University",
  description:
    "Existing Online Information Centers can enter their approval code to view and pay the payable amount.",
};

export default function ExistingCenterPaymentPage() {
  return (
    <main>
      <PageBanner
        breadcrumb="Online Information Centers"
        eyebrow="Existing Center"
        icon="🏢"
        title="Pay Your Fee"
        subtitle="Enter your approval code to view your payable amount and complete the payment."
      />

      <section className="bg-brand-light py-16 sm:py-20">
        <div className="mx-auto max-w-[800px] px-4">
          <Reveal>
            <ContentEyebrow>💳 Existing Center Payment</ContentEyebrow>
            <SectionTitle>Enter Your Details</SectionTitle>
            <div className="mt-8">
              <ExistingCenterPayment />
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
