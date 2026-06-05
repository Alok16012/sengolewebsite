"use client";

import { useState } from "react";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import SectionLayout from "@/components/SectionLayout";
import Reveal from "@/components/Reveal";
import { programsMenu } from "@/data/content";
import { ContentEyebrow, FeatureGrid, type Feature } from "@/components/content-blocks";

export type Course = {
  name: string;
  duration: string;
  eligibility: string;
};

export type CourseTab = {
  label: string;
  courses: Course[];
};

export type ProgramData = {
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  features: Feature[];
  tabs: CourseTab[];
  intro: { heading: string; text: string };
  about: { heading: string; text: string };
  objective: { heading: string; lead: string; points: string[] };
};

export default function ProgramTemplate({ data }: { data: ProgramData }) {
  const [tab, setTab] = useState(0);
  const activeTab = data.tabs[tab] ?? data.tabs[0];

  return (
    <main>
      <PageBanner
        breadcrumb="Programs"
        eyebrow="Academic Programs"
        icon="📚"
        title="Programs"
        subtitle="Explore our diverse range of technical and professional programs designed for academic excellence."
      />
      <SectionLayout
        menuTitle="Programs"
        menuIcon="📚"
        items={programsMenu}
        activeHref={`/programs/${data.slug}`}
      >
        <Reveal>
          <ContentEyebrow>✨ {data.eyebrow}</ContentEyebrow>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
            <span className="brand-gradient-text">{data.title}</span>
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink/80">{data.description}</p>
        </Reveal>

        {data.features.length > 0 && (
          <div className="mt-8">
            <FeatureGrid features={data.features} />
          </div>
        )}

        {data.tabs.length > 0 && (
          <div className="mt-12">
            <h3 className="text-2xl font-extrabold text-ink">Available Programs</h3>
            <p className="mt-2 text-[15px] text-muted">
              Explore our comprehensive programs designed for the modern era.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {data.tabs.map((t, i) => (
                <button
                  key={t.label}
                  onClick={() => setTab(i)}
                  className={`rounded-full px-5 py-2.5 text-sm font-bold uppercase tracking-wide transition ${
                    i === tab
                      ? "brand-gradient text-white shadow"
                      : "bg-brand-cream text-brand-1 hover:bg-brand-1/10"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl ring-1 ring-brand-cream">
              <table className="w-full text-left text-sm">
                <thead className="brand-gradient text-white">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Sr. No.</th>
                    <th className="px-4 py-3 font-semibold">Course Name</th>
                    <th className="px-4 py-3 font-semibold">Duration</th>
                    <th className="px-4 py-3 font-semibold">Eligibility</th>
                    <th className="px-4 py-3 font-semibold">Apply</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-brand-cream bg-white">
                  {activeTab.courses.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="px-4 py-8 text-center text-muted">
                        Programs will be announced soon.
                      </td>
                    </tr>
                  ) : (
                    activeTab.courses.map((c, i) => (
                      <tr key={c.name + i} className="transition hover:bg-brand-light/40">
                        <td className="px-4 py-3 text-ink/70">{i + 1}</td>
                        <td className="px-4 py-3 font-semibold text-ink">{c.name}</td>
                        <td className="px-4 py-3 text-ink/70">{c.duration}</td>
                        <td className="px-4 py-3 text-ink/70">{c.eligibility}</td>
                        <td className="px-4 py-3">
                          <Link
                            href="/application-form"
                            className="brand-gradient inline-flex rounded-lg px-3 py-1.5 text-xs font-semibold text-white"
                          >
                            Apply Now
                          </Link>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        <div className="mt-12 space-y-8">
          <div>
            <h3 className="text-xl font-bold text-ink">{data.intro.heading}</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-ink/80">{data.intro.text}</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-ink">{data.about.heading}</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-ink/80">{data.about.text}</p>
          </div>
          <div className="rounded-2xl bg-brand-light/50 p-6 ring-1 ring-brand-cream">
            <h3 className="text-xl font-bold text-ink">{data.objective.heading}</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-ink/80">{data.objective.lead}</p>
            <ul className="mt-4 space-y-3">
              {data.objective.points.map((p, i) => (
                <li key={i} className="flex items-start gap-3 text-[15px] text-ink/80">
                  <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full brand-gradient text-[11px] text-white">
                    ✓
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionLayout>
    </main>
  );
}
