import Image from "next/image";
import Reveal from "./Reveal";

const stats = [
  { value: "10K+", label: "Students" },
  { value: "50+", label: "Programs" },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-[1300px] px-4">
        {/* Stats strip */}
        <div className="mb-12 flex flex-wrap justify-center gap-10">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-4xl font-extrabold brand-gradient-text">{s.value}</div>
              <div className="text-sm font-medium text-muted">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl shadow-xl">
                <Image
                  src="/aboutUsImg.png"
                  alt="About Sengol International University"
                  width={640}
                  height={680}
                  className="h-[560px] w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 left-6 rounded-2xl bg-brand-3 px-6 py-4 text-white shadow-lg">
                <div className="text-2xl font-extrabold">50+</div>
                <div className="text-xs uppercase tracking-wide text-white/80">Programs</div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div>
              <span className="eyebrow mb-4">📚 Nurturing Talent with Excellence</span>
              <h2 className="mb-5 text-4xl font-bold leading-tight brand-gradient-text sm:text-[45px]">
                About Sengol International University
              </h2>
              <p className="mb-4 text-[15px] leading-relaxed text-muted">
                Sengol International University is committed to delivering quality education that
                blends tradition with modernity, shaping professionals ready to meet the challenges
                of a dynamic world.
              </p>
              <p className="mb-8 text-[15px] leading-relaxed text-muted">
                We foster academic excellence, holistic development, and social responsibility
                through innovative learning, expert faculty, and a student-centric environment.
              </p>

              <div className="mb-8 grid grid-cols-2 gap-3 sm:gap-5">
                <div className="rounded-2xl border border-brand-cream bg-brand-light/40 p-4 sm:p-5">
                  <div className="mb-3 grid h-10 w-10 place-items-center rounded-xl brand-gradient text-white sm:h-11 sm:w-11">
                    👥
                  </div>
                  <h3 className="mb-1.5 font-bold text-ink">Our Mission</h3>
                  <p className="text-sm leading-relaxed text-muted">
                    Educate, Empower, Excel - Creating future leaders through innovative education
                    and holistic development.
                  </p>
                </div>
                <div className="rounded-2xl border border-brand-cream bg-brand-light/40 p-4 sm:p-5">
                  <div className="mb-3 grid h-10 w-10 place-items-center rounded-xl brand-gradient text-white sm:h-11 sm:w-11">
                    🎯
                  </div>
                  <h3 className="mb-1.5 font-bold text-ink">Our Vision</h3>
                  <p className="text-sm leading-relaxed text-muted">
                    Building a Better Future Through Education - Inspiring minds to create positive
                    global impact.
                  </p>
                </div>
              </div>

              <a
                href="#"
                className="brand-gradient inline-flex items-center gap-3 rounded-xl px-7 py-3.5 font-semibold text-white shadow-lg transition hover:opacity-90"
              >
                🎓 Learn More About Us <span>→</span>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
