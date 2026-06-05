import Reveal from "./Reveal";

const columns = [
  {
    icon: "📝",
    title: "Examination",
    items: ["Datesheets", "Downloads"],
  },
  {
    icon: "📢",
    title: "Advertisement",
    items: [
      "Online applications are invited for Career for various/Faculty & Formative Sciences",
      "Applications invited for Recruitment to Pharmacy Department",
    ],
  },
  {
    icon: "👥",
    title: "Student Corner",
    items: ["Document Verification Fee", "Admit Card", "e-ID Particulars", "Reports"],
  },
];

export default function InfoColumns() {
  return (
    <section className="bg-gradient-to-b from-white to-brand-light/40 py-16">
      <div className="mx-auto grid max-w-[1400px] gap-6 px-4 lg:grid-cols-3">
        {columns.map((c, i) => (
          <Reveal key={c.title} delay={i * 110}>
            <div className="flex h-full flex-col rounded-2xl bg-white shadow-[0_10px_30px_rgba(49,37,24,0.08)] ring-1 ring-brand-cream">
              <div className="flex items-center gap-2 border-b border-brand-cream px-6 py-4 text-sm font-bold uppercase tracking-wide text-ink">
                <span className="grid h-8 w-8 place-items-center rounded-lg brand-gradient text-white">
                  {c.icon}
                </span>
                {c.title}
              </div>
              <ul className="flex-1 space-y-3 p-6">
                {c.items.map((it, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-ink">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-1" />
                    {it}
                  </li>
                ))}
              </ul>
              <div className="p-6 pt-0">
                <a
                  href="#"
                  className="brand-gradient flex items-center justify-center rounded-[10px] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                >
                  VIEW ALL
                </a>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
