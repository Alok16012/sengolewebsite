import Link from "next/link";

export type SidebarItem = { label: string; href: string; icon?: string };

type Props = {
  menuTitle: string;
  menuIcon?: string;
  items: SidebarItem[];
  activeHref: string;
  children: React.ReactNode;
};

export default function SectionLayout({
  menuTitle,
  menuIcon = "📚",
  items,
  activeHref,
  children,
}: Props) {
  return (
    <section className="bg-gradient-to-b from-white to-brand-light/40 py-14">
      <div className="mx-auto grid max-w-[1400px] gap-8 px-4 lg:grid-cols-[300px_1fr]">
        {/* Sidebar */}
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="overflow-hidden rounded-2xl bg-white shadow-[0_10px_30px_rgba(49,37,24,0.08)] ring-1 ring-brand-cream">
            <div className="flex items-center gap-3 border-b border-brand-cream px-5 py-4">
              <span className="grid h-11 w-11 place-items-center rounded-xl brand-gradient text-xl text-white">
                {menuIcon}
              </span>
              <div>
                <div className="text-sm font-extrabold uppercase tracking-wide text-ink">
                  {menuTitle}
                </div>
                <div className="text-xs text-muted">Navigation Menu</div>
              </div>
            </div>
            <nav className="space-y-1 p-3">
              {items.map((it) => {
                const active = it.href === activeHref;
                return (
                  <Link
                    key={it.href + it.label}
                    href={it.href}
                    className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition ${
                      active
                        ? "brand-gradient text-white shadow"
                        : "text-ink/75 hover:bg-brand-cream hover:text-brand-1"
                    }`}
                  >
                    {it.icon && (
                      <span
                        className={`grid h-8 w-8 shrink-0 place-items-center rounded-lg text-base ${
                          active ? "bg-white/20" : "bg-brand-cream"
                        }`}
                      >
                        {it.icon}
                      </span>
                    )}
                    <span className="flex-1">{it.label}</span>
                    <span className={active ? "opacity-90" : "opacity-0"}>›</span>
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="mt-5 flex items-center gap-3 rounded-2xl brand-gradient p-5 text-white shadow-lg">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-white/20 text-lg font-extrabold">
              S
            </span>
            <div>
              <div className="font-bold leading-tight">Sengol University</div>
              <div className="text-xs text-white/80">{menuTitle} Portal</div>
            </div>
          </div>
        </aside>

        {/* Main content */}
        <div className="min-w-0">{children}</div>
      </div>
    </section>
  );
}
