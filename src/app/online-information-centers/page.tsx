import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Online Information Centers | Sengol International University",
  description:
    "Sengol International University offers CCA / DCA / PGDCA through Online Information Centers. Choose an existing center or register a new computer institute.",
};

const options = [
  {
    label: "Existing",
    description: "Already an Online Information Center? Track your application here.",
    href: "/application-status",
    icon: "🏢",
  },
  {
    label: "New Computer Institute",
    description: "Register your computer institute as a new Online Information Center.",
    href: "/application-form",
    icon: "🎓",
  },
];

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
            <div className="grid gap-6 sm:grid-cols-2">
              {options.map((opt) => (
                <Link
                  key={opt.label}
                  href={opt.href}
                  className="group flex flex-col rounded-2xl bg-white p-8 text-center shadow-[0_10px_30px_rgba(49,37,24,0.08)] ring-1 ring-brand-cream transition hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(49,37,24,0.12)]"
                >
                  <span className="mx-auto grid h-14 w-14 place-items-center rounded-xl brand-gradient text-2xl text-white">
                    {opt.icon}
                  </span>
                  <h3 className="mt-5 text-xl font-extrabold text-ink">{opt.label}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">{opt.description}</p>
                  <span className="mt-5 inline-flex items-center justify-center gap-1.5 text-sm font-semibold text-brand-1 transition group-hover:gap-2.5">
                    Continue <span>→</span>
                  </span>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
