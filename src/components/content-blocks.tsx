import Link from "next/link";
import Reveal from "./Reveal";

export function ContentEyebrow({ children }: { children: React.ReactNode }) {
  return <span className="eyebrow mb-4">{children}</span>;
}

export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-3 text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
      <span className="brand-gradient-text">{children}</span>
    </h2>
  );
}

export function StatRow({ stats }: { stats: { value: string; label: string }[] }) {
  return (
    <div className="my-8 grid grid-cols-3 gap-4 rounded-2xl bg-white p-6 shadow-[0_10px_30px_rgba(49,37,24,0.08)] ring-1 ring-brand-cream">
      {stats.map((s) => (
        <div key={s.label} className="text-center">
          <div className="text-3xl font-extrabold brand-gradient-text sm:text-4xl">{s.value}</div>
          <div className="mt-1 text-xs font-semibold uppercase tracking-wide text-muted sm:text-sm">
            {s.label}
          </div>
        </div>
      ))}
    </div>
  );
}

export type Feature = { icon: string; title: string; text: string };

export function FeatureGrid({ features, cols = 2 }: { features: Feature[]; cols?: 1 | 2 | 3 }) {
  const gridCols = cols === 3 ? "md:grid-cols-3" : cols === 1 ? "" : "md:grid-cols-2";
  return (
    <div className={`grid gap-5 ${gridCols}`}>
      {features.map((f, i) => (
        <Reveal key={f.title} delay={i * 80}>
          <div className="h-full rounded-2xl bg-white p-6 shadow-[0_10px_30px_rgba(49,37,24,0.06)] ring-1 ring-brand-cream transition hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(49,37,24,0.12)]">
            <span className="grid h-12 w-12 place-items-center rounded-xl brand-gradient text-2xl text-white">
              {f.icon}
            </span>
            <h3 className="mt-4 text-lg font-bold text-ink">{f.title}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-muted">{f.text}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export function Prose({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="space-y-4">
      {paragraphs.map((p, i) => (
        <p key={i} className="text-[15px] leading-relaxed text-ink/80">
          {p}
        </p>
      ))}
    </div>
  );
}

export function CTABand({
  title,
  text,
  primary,
  secondary,
}: {
  title: string;
  text: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <div className="relative mt-10 overflow-hidden rounded-3xl brand-gradient p-10 text-center text-white shadow-xl">
      <h3 className="text-2xl font-extrabold sm:text-3xl">{title}</h3>
      <p className="mx-auto mt-3 max-w-2xl text-white/85">{text}</p>
      <div className="mt-7 flex flex-wrap justify-center gap-4">
        {primary && (
          <Link
            href={primary.href}
            className="rounded-xl bg-white px-7 py-3.5 font-semibold text-brand-1 transition hover:bg-white/90"
          >
            {primary.label}
          </Link>
        )}
        {secondary && (
          <Link
            href={secondary.href}
            className="rounded-xl bg-white/15 px-7 py-3.5 font-semibold text-white ring-1 ring-white/40 transition hover:bg-white/25"
          >
            {secondary.label}
          </Link>
        )}
      </div>
    </div>
  );
}
