import Image from "next/image";
import { footerColumns } from "@/data/content";

const socialBadges = [
  { l: "F", c: "bg-[#1877f2]" },
  { l: "L", c: "bg-[#0a66c2]" },
  { l: "T", c: "bg-[#1da1f2]" },
  { l: "Y", c: "bg-[#ff0000]" },
  { l: "I", c: "bg-[#e1306c]" },
];

export default function Footer() {
  return (
    <footer id="footer" className="bg-brand-3 text-white/80">
      {/* Newsletter */}
      <div className="bg-gradient-to-b from-[#3a2a1a] to-brand-3 py-16 text-center">
        <div className="mx-auto max-w-3xl px-4">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2 text-xs font-bold uppercase tracking-widest text-white">
            🔔 Get Latest Updates
          </span>
          <h2 className="text-4xl font-bold text-white sm:text-[45px]">
            Subscribe to Our Newsletter
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/70">
            Stay updated with the latest news, exam strategies, and special offers! Join our
            newsletter today and unlock your academic potential.
          </p>
          <form className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Enter Your E-Mail"
              className="flex-1 rounded-xl bg-white px-5 py-4 text-ink outline-none ring-2 ring-transparent focus:ring-brand-1"
            />
            <button
              type="button"
              className="brand-gradient rounded-xl px-7 py-4 font-semibold text-white transition hover:opacity-90"
            >
              Subscribe →
            </button>
          </form>
          <p className="mt-3 text-sm text-white/50">No ads, No spam, Unsubscribe anytime.</p>
        </div>
      </div>

      {/* Footer columns */}
      <div className="mx-auto grid max-w-[1400px] gap-10 px-4 py-16 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3">
            <Image
              src="/assets/logo.f9c66d3b.png"
              alt="Sengol"
              width={48}
              height={48}
              className="h-12 w-12 object-contain"
            />
            <div>
              <div className="text-xl font-extrabold text-brand-1">SENGOL</div>
              <div className="text-xs text-white/60">International University</div>
            </div>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-white/60">
            Sengol International University is committed to providing quality education and
            empowering students with the necessary skills for a successful future.
          </p>
          <div className="mt-6">
            <div className="flex items-center gap-2 font-semibold text-white">
              <span className="grid h-7 w-7 place-items-center rounded-full brand-gradient text-white">
                📍
              </span>
              Campus Address
            </div>
            <p className="mt-2 text-sm text-white/60">
              Lower Pepthang, PO - Lingmoo
              <br />
              District - Namchi, Sikkim-737134
            </p>
          </div>
          <div className="mt-5 flex gap-2">
            {socialBadges.map((s, i) => (
              <a
                key={i}
                href="#"
                className={`grid h-10 w-10 place-items-center rounded-full ${s.c} font-bold text-white`}
              >
                {s.l}
              </a>
            ))}
          </div>
        </div>

        {footerColumns.map((col) => (
          <div key={col.title}>
            <div className="mb-5 flex items-center gap-2 text-lg font-bold text-white">
              <span className="grid h-8 w-8 place-items-center rounded-lg brand-gradient">
                {col.icon}
              </span>
              {col.title}
            </div>
            <ul className="space-y-3">
              {col.links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="flex items-center gap-2 text-sm text-white/65 transition hover:text-brand-1"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-1" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10 py-6 text-center text-sm text-white/50">
        © 2026 <span className="text-brand-1">Sengol International University</span> - All rights
        reserved.
      </div>
    </footer>
  );
}
