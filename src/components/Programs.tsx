import Image from "next/image";
import Reveal from "./Reveal";
import { programs } from "@/data/content";

export default function Programs() {
  return (
    <section id="programs" className="bg-gradient-to-b from-white to-brand-light/40 py-16 sm:py-20">
      <div className="mx-auto max-w-[1400px] px-4">
        <div className="mb-12 text-center">
          <span className="eyebrow mb-4">🎯 Academic Excellence</span>
          <h2 className="mt-3 text-4xl font-bold brand-gradient-text sm:text-[45px]">
            Programs We Offer
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-muted">
            Discover world-class education across diverse fields of study designed to prepare you
            for tomorrow&apos;s challenges.
          </p>
        </div>

        <div className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3 xl:grid-cols-4">
          {programs.map((p, i) => (
            <Reveal key={p.title} delay={(i % 4) * 90} className="w-[78%] shrink-0 snap-start sm:w-auto">
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-[0_10px_30px_rgba(49,37,24,0.08)] ring-1 ring-brand-cream transition hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(49,37,24,0.16)]">
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={p.img}
                    alt={p.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute right-3 top-3 grid h-12 w-12 place-items-center rounded-full bg-white/90 shadow">
                    <Image
                      src="/assets/logo.f9c66d3b.png"
                      alt=""
                      width={36}
                      height={36}
                      className="h-9 w-9 object-contain"
                    />
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="mb-4 min-h-[3rem] text-lg font-bold leading-snug text-ink">
                    {p.title}
                  </h3>
                  <div className="mb-4 flex items-center justify-between text-sm">
                    <span className="inline-flex items-center gap-1.5 text-muted">
                      <span className="h-2.5 w-2.5 rounded-full bg-brand-1" /> Available
                    </span>
                    <span className="text-muted">2026-27</span>
                  </div>
                  <a
                    href="#"
                    className="brand-gradient mt-auto inline-flex items-center justify-center gap-2 rounded-[10px] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                  >
                    Explore Program <span>→</span>
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
