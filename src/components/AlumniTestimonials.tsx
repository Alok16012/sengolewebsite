import Reveal from "./Reveal";

export default function AlumniTestimonials() {
  return (
    <section className="bg-gradient-to-b from-white to-brand-light/40 py-20 lg:py-28">
      <div className="mx-auto max-w-[1300px] px-4">
        <div className="mb-12 text-center">
          <span className="eyebrow mb-4">🎓 Alumni Success Stories</span>
          <h2 className="mt-3 text-4xl font-bold brand-gradient-text sm:text-[45px]">
            Alumni Testimonials
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-muted">
            Hear from our successful graduates about their transformative journey at Sengol
            International University
          </p>
        </div>

        <Reveal>
          <div className="relative grid overflow-hidden rounded-3xl bg-white shadow-[0_20px_50px_rgba(49,37,24,0.12)] lg:grid-cols-2">
            <button
              aria-label="Previous"
              className="absolute left-4 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-xl bg-white text-brand-1 shadow-md"
            >
              ‹
            </button>
            <button
              aria-label="Next"
              className="absolute right-4 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-xl bg-white text-brand-1 shadow-md"
            >
              ›
            </button>

            <div className="flex flex-col items-center justify-center gap-5 bg-brand-light/40 p-10">
              <div className="grid h-44 w-44 place-items-center rounded-full bg-brand-cream text-7xl ring-4 ring-white shadow-lg">
                👨‍🎓
              </div>
              <div className="text-2xl font-extrabold text-ink">Piyush Shukla</div>
              <span className="rounded-full bg-white px-6 py-2 text-sm font-medium text-muted shadow">
                B.Sc. IT
              </span>
            </div>

            <div className="relative brand-gradient p-10 text-white">
              <span className="absolute right-8 top-6 text-7xl leading-none text-white/20">”</span>
              <h3 className="mb-5 text-2xl font-bold">Alumni Testimonial</h3>
              <p className="text-lg leading-relaxed text-white/95">
                &quot;Thanks to the unparalleled mentorship and guidance from my Computer Science
                teachers at Sengol International University, I&apos;ve transformed from a student to a
                certified ethical hacker in cybersecurity.&quot;
              </p>
              <p className="mt-6 font-medium text-white/90">- Piyush Shukla (B.Sc. IT)</p>
              <div className="mt-8 flex gap-2">
                {[0, 1, 2, 3].map((i) => (
                  <span
                    key={i}
                    className={`h-2.5 w-2.5 rounded-full ${i === 0 ? "bg-white" : "bg-white/40"}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
