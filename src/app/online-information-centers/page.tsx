import PageBanner from "@/components/PageBanner";
import Reveal from "@/components/Reveal";
import OnlineCenterOptions from "@/components/OnlineCenterOptions";

export const metadata = {
  title: "Admission Partners | Sengol International University",
  description:
    "Sengol International University offers CCA / DCA / PGDCA through Admission Partners. Choose an existing center or register a new computer institute.",
};

export default function OnlineInformationCentersPage() {
  return (
    <main>
      <PageBanner
        breadcrumb="Admission Partners"
        eyebrow="Admission Partners"
        icon="🏢"
        title="Admission Partners"
        subtitle="Sengol International University offers CCA / DCA / PGDCA through Admission Partners."
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
