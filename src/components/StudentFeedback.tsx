import Image from "next/image";
import Reveal from "./Reveal";
import { studentFeedback } from "@/data/content";

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1 text-lg">
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} className={i <= count ? "text-brand-1" : "text-brand-cream"}>
          ★
        </span>
      ))}
    </div>
  );
}

export default function StudentFeedback() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-[1300px] px-4">
        <div className="mb-12 text-center">
          <span className="eyebrow mb-4">⭐ Student Reviews</span>
          <h2 className="mt-3 text-4xl font-bold brand-gradient-text sm:text-[45px]">
            Student Feedback
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-muted">
            Our students&apos; experiences speak volumes about the quality of education and campus
            life at Sengol International University.
          </p>
        </div>

        <div className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-6 overflow-x-auto px-4 pb-2 md:mx-0 md:grid md:grid-cols-3 md:gap-7 md:overflow-visible md:px-0 md:pb-0">
          {studentFeedback.map((r, i) => (
            <Reveal key={r.name} delay={i * 110} className="w-[82%] shrink-0 snap-start md:w-auto">
              <div className="relative h-full rounded-2xl bg-white p-7 shadow-[0_10px_30px_rgba(49,37,24,0.08)] ring-1 ring-brand-cream">
                <Stars count={r.stars} />
                <p className="mt-4 text-[15px] leading-relaxed text-ink">&quot;{r.text}&quot;</p>
                <div className="mt-6 flex items-center gap-3">
                  <Image
                    src={r.img}
                    alt={r.name}
                    width={48}
                    height={48}
                    className="h-12 w-12 rounded-full object-cover ring-2 ring-brand-cream"
                  />
                  <div>
                    <div className="font-bold text-ink">{r.name}</div>
                    <span className="inline-block rounded-full bg-brand-cream px-3 py-0.5 text-xs font-medium text-brand-1">
                      {r.role}
                    </span>
                  </div>
                </div>
                <span className="absolute bottom-6 right-6 grid h-12 w-12 place-items-center rounded-full bg-brand-cream/60 text-2xl text-brand-1">
                  ”
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {[0, 1, 2, 3].map((i) => (
            <span
              key={i}
              className={`h-2.5 w-2.5 rounded-full ${i === 1 ? "bg-brand-1" : "bg-brand-cream"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
