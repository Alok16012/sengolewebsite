import Reveal from "./Reveal";
import { universityNews, noticeBoard } from "@/data/content";

function PanelHeader({ icon, title, accent }: { icon: string; title: string; accent: string }) {
  return (
    <div className="flex items-center justify-between border-b border-brand-cream px-5 py-4">
      <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-ink">
        <span className="grid h-8 w-8 place-items-center rounded-lg brand-gradient text-white">
          {icon}
        </span>
        {title} <span className="text-brand-1">{accent}</span>
      </div>
      <a
        href="#"
        className="rounded-md bg-brand-cream px-3 py-1.5 text-xs font-semibold text-brand-1 transition hover:bg-brand-1 hover:text-white"
      >
        VIEW ALL
      </a>
    </div>
  );
}

export default function LatestUpdates() {
  return (
    <section className="bg-gradient-to-b from-brand-light/40 to-white py-16 sm:py-24">
      <div className="mx-auto max-w-[1400px] px-4">
        <div className="mb-12 text-center">
          <span className="eyebrow mb-4">📢 Stay Updated</span>
          <h2 className="mt-3 text-4xl font-bold brand-gradient-text sm:text-[45px]">
            Latest Updates
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-muted">
            Stay informed with the latest news, notices, and events from Sengol International
            University
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* University News */}
          <Reveal>
            <div className="h-full rounded-2xl bg-white shadow-[0_10px_30px_rgba(49,37,24,0.08)] ring-1 ring-brand-cream">
              <PanelHeader icon="📣" title="University" accent="NEWS" />
              <ul className="max-h-[360px] space-y-3 overflow-hidden p-5">
                {universityNews.map((n, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="grid h-11 w-12 shrink-0 place-items-center rounded-lg brand-gradient text-center text-[11px] font-bold leading-tight text-white">
                      {n.day}
                      <br />
                      {n.mon}
                    </span>
                    <span className="text-sm text-ink">{n.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Notice Board */}
          <Reveal delay={120}>
            <div className="h-full rounded-2xl bg-white shadow-[0_10px_30px_rgba(49,37,24,0.08)] ring-1 ring-brand-cream">
              <PanelHeader icon="📋" title="Notice" accent="BOARD" />
              <ul className="space-y-3 p-5">
                {noticeBoard.map((t, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-md brand-gradient text-white">
                      −
                    </span>
                    <span className="text-sm text-ink">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Events */}
          <Reveal delay={240}>
            <div className="h-full rounded-2xl bg-white shadow-[0_10px_30px_rgba(49,37,24,0.08)] ring-1 ring-brand-cream">
              <PanelHeader icon="🗓️" title="Events" accent="" />
              <div className="p-5">
                <div className="relative overflow-hidden rounded-xl brand-gradient p-6 text-white">
                  <span className="absolute right-4 top-4 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold">
                    Featured Event
                  </span>
                  <h3 className="mt-6 text-xl font-extrabold uppercase">National Refreshment Day</h3>
                  <p className="mt-2 text-sm text-white/80">College of Physiotherapy, AIMSP</p>
                </div>
                <div className="mt-4">
                  <h4 className="font-bold text-ink">NATIONAL REFRESHMENT DAY</h4>
                  <p className="mt-1 flex items-center gap-2 text-sm text-muted">
                    <span className="grid h-6 w-6 place-items-center rounded-md brand-gradient text-white">
                      📅
                    </span>
                    27 Jul 2021
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
