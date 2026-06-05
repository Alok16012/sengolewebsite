"use client";

import Image from "next/image";
import Link from "next/link";

const stats = [
  { value: "17+", label: "Schools" },
  { value: "50+", label: "Programs" },
  { value: "1000+", label: "Students" },
];

const quickActions = [
  { icon: "🎓", title: "Admission 2026", sub: "Apply Now", href: "/application-form" },
  { icon: "📝", title: "Enquiry Now", sub: "Get in touch", href: "/enquiry-form" },
  { icon: "🏆", title: "Scholarships", sub: "Up to 100% waiver", href: "/admission/admission-procedure" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#2a1a10] text-white">
      {/* Decorative layers */}
      <div className="dot-grid pointer-events-none absolute inset-0 opacity-40" />
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-brand-1/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 right-0 h-80 w-80 rounded-full bg-brand-2/30 blur-3xl" />
      <div className="pointer-events-none absolute right-1/4 top-10 h-3 w-3 rounded-full bg-brand-1/70" />
      <div className="pointer-events-none absolute bottom-24 left-10 h-2 w-2 rounded-full bg-white/40" />

      <div className="relative mx-auto grid max-w-[1400px] items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8 lg:py-20">
        {/* Text column */}
        <div className="animate-fade-in-up text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-brand-cream ring-1 ring-white/20 backdrop-blur">
            🎓 Admissions Open · 2026-2027
          </span>

          <h1 className="font-display mt-5 text-[2.6rem] font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-[4.2rem]">
            <span className="block text-brand-cream">Discover.</span>
            <span className="block bg-gradient-to-r from-[#f0883e] via-brand-1 to-[#f0883e] bg-clip-text text-transparent">
              Learn.
            </span>
            <span className="block text-white">Lead.</span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-white/80 sm:text-base lg:mx-0">
            Turn your ambitions into reality with quality education and holistic growth at Sengol
            International University — nestled in the serene Himalayas of Sikkim.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
            <Link
              href="/application-form"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 font-semibold text-brand-1 shadow-lg shadow-black/20 transition hover:bg-white/90 sm:w-auto"
            >
              Apply Now
              <span className="transition group-hover:translate-x-1">→</span>
            </Link>
            <Link
              href="/programs/school_engineering_technology"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white/10 px-7 py-3.5 font-semibold text-white ring-1 ring-white/30 backdrop-blur transition hover:bg-white/20 sm:w-auto"
            >
              Explore Programs
            </Link>
          </div>

          {/* Stats */}
          <div className="mx-auto mt-10 grid max-w-md grid-cols-3 gap-4 lg:mx-0">
            {stats.map((s) => (
              <div key={s.label} className="text-center lg:text-left">
                <div className="font-display text-2xl font-extrabold text-brand-cream sm:text-3xl">
                  {s.value}
                </div>
                <div className="mt-1 text-[11px] font-semibold uppercase tracking-wide text-white/60 sm:text-xs">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image column */}
        <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div className="relative aspect-square">
            {/* Glowing ring backdrop */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-1 to-brand-2 blur-2xl opacity-40" />
            <div className="absolute inset-2 overflow-hidden rounded-full ring-4 ring-white/15">
              <Image
                src="/aboutUsImg.png"
                alt="Sengol International University student"
                fill
                priority
                sizes="(max-width: 1024px) 80vw, 40vw"
                className="object-cover"
              />
            </div>

            {/* Floating badge: top */}
            <div className="animate-float-soft absolute -left-2 top-6 flex items-center gap-2 rounded-2xl bg-white px-4 py-2.5 text-brand-3 shadow-xl sm:-left-6">
              <span className="grid h-9 w-9 place-items-center rounded-xl brand-gradient text-lg text-white">
                ✅
              </span>
              <span className="text-left">
                <span className="block text-[11px] font-semibold uppercase tracking-wide text-muted">
                  Approved by
                </span>
                <span className="block text-sm font-bold">UGC · State Act</span>
              </span>
            </div>

            {/* Floating badge: bottom */}
            <div className="animate-float-soft-slow absolute -right-1 bottom-8 flex items-center gap-2 rounded-2xl bg-white px-4 py-2.5 text-brand-3 shadow-xl sm:-right-4">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-cream text-lg">
                🏔️
              </span>
              <span className="text-left">
                <span className="block text-[11px] font-semibold uppercase tracking-wide text-muted">
                  Campus
                </span>
                <span className="block text-sm font-bold">Sikkim, India</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick action cards — horizontal scroll on mobile, grid on desktop */}
      <div className="relative mx-auto max-w-[1400px] pb-14">
        <div className="no-scrollbar flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:overflow-visible sm:px-6">
          {quickActions.map((c) => (
            <Link
              key={c.title}
              href={c.href}
              className="group flex w-[75%] shrink-0 snap-start items-center gap-3 rounded-2xl bg-white/[0.07] px-5 py-4 ring-1 ring-white/15 backdrop-blur transition hover:bg-white/[0.12] hover:ring-white/30 sm:w-auto"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl brand-gradient text-xl">
                {c.icon}
              </span>
              <span className="flex-1">
                <span className="block font-bold leading-tight">{c.title}</span>
                <span className="block text-sm text-white/70">{c.sub}</span>
              </span>
              <span className="text-white/60 transition group-hover:translate-x-1 group-hover:text-white">
                →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
