import Link from "next/link";

type Props = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  breadcrumb: string;
  icon?: string;
};

export default function PageBanner({ eyebrow, title, subtitle, breadcrumb, icon = "🎓" }: Props) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#3a2a1a] via-brand-3 to-[#1a1109]">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(173,74,22,0.9) 1.5px, transparent 1.5px)",
          backgroundSize: "26px 26px",
        }}
      />
      <div className="absolute -left-16 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-brand-1/20 blur-2xl" />
      <div className="relative mx-auto max-w-[1100px] px-4 py-16 text-center text-white sm:py-20">
        <nav className="mb-6 flex items-center justify-center gap-2 text-sm text-white/60">
          <Link href="/" className="inline-flex items-center gap-1 transition hover:text-brand-1">
            <span>🏠</span> Home
          </Link>
          <span>›</span>
          <span className="text-white/90">{breadcrumb}</span>
        </nav>
        <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2 text-xs font-bold uppercase tracking-widest text-brand-1 ring-1 ring-white/15">
          {icon} {eyebrow}
        </span>
        <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl">{title}</h1>
        {subtitle && (
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/70">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
