import Reveal from "./Reveal";
import { scholarships } from "@/data/content";

export default function Scholarships() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-[1300px] px-4 text-center">
        <span className="eyebrow mb-4">💰 Financial Support</span>
        <h2 className="mt-3 text-4xl font-bold brand-gradient-text sm:text-[45px]">
          Scholarships and Financial Aid
        </h2>
        <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-muted">
          At Sengol International University, we are committed to supporting bright and talented
          students through a range of scholarships and financial aid programs. Every year, the
          college offers substantial financial assistance to deserving undergraduate and
          postgraduate students to help them achieve their academic goals.
        </p>

        <div className="no-scrollbar mt-12 -mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-2 text-left md:mx-0 md:grid md:grid-cols-3 md:gap-7 md:overflow-visible md:px-0 md:pb-0">
          {scholarships.map((s, i) => (
            <Reveal key={s.title} delay={i * 110} className="w-[80%] shrink-0 snap-start md:w-auto">
              <div className="h-full rounded-2xl border border-brand-cream bg-brand-light/30 p-8 text-center shadow-[0_10px_30px_rgba(49,37,24,0.06)] transition hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(49,37,24,0.12)]">
                <div className="mx-auto mb-5 grid h-16 w-16 place-items-center rounded-2xl brand-gradient text-3xl">
                  {s.icon}
                </div>
                <h3 className="mb-3 text-xl font-bold text-ink">{s.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="#"
            className="brand-gradient inline-flex items-center gap-3 rounded-xl px-8 py-4 font-semibold text-white shadow-lg transition hover:opacity-90"
          >
            🎓 Know More <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
