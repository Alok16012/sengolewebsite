import PageBanner from "@/components/PageBanner";
import Reveal from "@/components/Reveal";
import OnlineCenterOptions from "@/components/OnlineCenterOptions";

export const metadata = {
  title: "Online Information Centers | Sengol International University",
  description:
    "Sengol International University offers CCA / DCA / PGDCA through Online Information Centers. Choose an existing center or register a new computer institute.",
};

export default function OnlineInformationCentersPage() {
  return (
    <main>
      <PageBanner
        breadcrumb="Online Information Centers"
        eyebrow="Online Information Centers"
        icon="🏢"
        title="Online Information Centers"
        subtitle="Sengol International University offers CCA / DCA / PGDCA through Online Information Centers."
      />

      <section className="bg-brand-light py-16 sm:py-20">
        <div className="mx-auto max-w-[1100px] px-4">
          <Reveal>
            <OnlineCenterOptions />
          </Reveal>
        </div>
      </section>
    </main>
  );
}
