import PageBanner from "@/components/PageBanner";
import Reveal from "@/components/Reveal";
import { ContentEyebrow, SectionTitle } from "@/components/content-blocks";

const infoCards = [
  {
    icon: "📞",
    title: "Call Us",
    lines: ["+91-9205299887"],
    href: "tel:+919205299887",
  },
  {
    icon: "✉️",
    title: "Email Us",
    lines: ["info@sengolinternationaluniversity.edu.in"],
    href: "mailto:info@sengolinternationaluniversity.edu.in",
  },
  {
    icon: "📍",
    title: "Visit Us",
    lines: ["Lower Pepthang, PO - Lingmoo", "District - Namchi, Sikkim-737134"],
  },
];

const inputClass =
  "w-full rounded-xl bg-white px-4 py-3 text-[15px] text-ink ring-1 ring-brand-cream transition placeholder:text-muted/70 focus:outline-none focus:ring-2 focus:ring-brand-1";
const labelClass = "mb-1.5 block text-sm font-semibold text-ink";

export default function ContactPage() {
  return (
    <main>
      <PageBanner
        breadcrumb="Contact"
        eyebrow="Get in Touch"
        icon="📞"
        title="Contact Us"
        subtitle="Connect with Sengol International University - your gateway to academic excellence and personalized support."
      />

      <section className="bg-brand-light py-16 sm:py-20">
        <div className="mx-auto max-w-[1400px] px-4">
          <div className="grid gap-6 md:grid-cols-3">
            {infoCards.map((card, i) => (
              <Reveal key={card.title} delay={i * 80}>
                <div className="h-full rounded-2xl bg-white p-7 text-center shadow-[0_10px_30px_rgba(49,37,24,0.06)] ring-1 ring-brand-cream transition hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(49,37,24,0.12)]">
                  <span className="mx-auto grid h-14 w-14 place-items-center rounded-full brand-gradient text-2xl text-white">
                    {card.icon}
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-ink">{card.title}</h3>
                  <div className="mt-2 space-y-1 text-[15px] leading-relaxed text-muted">
                    {card.href ? (
                      <a href={card.href} className="break-words transition hover:text-brand-1">
                        {card.lines.map((l) => (
                          <span key={l} className="block">
                            {l}
                          </span>
                        ))}
                      </a>
                    ) : (
                      card.lines.map((l) => (
                        <span key={l} className="block">
                          {l}
                        </span>
                      ))
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-cream py-16 sm:py-20">
        <div className="mx-auto max-w-[1400px] px-4">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
            <Reveal>
              <div className="rounded-2xl bg-white p-7 shadow-[0_10px_30px_rgba(49,37,24,0.08)] ring-1 ring-brand-cream sm:p-9">
                <ContentEyebrow>💬 Send us a Message</ContentEyebrow>
                <SectionTitle>We&apos;d Love to Hear From You</SectionTitle>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">
                  Get in touch today! We&apos;re here to help and answer any questions you might have.
                </p>

                <form className="mt-8 grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className={labelClass}>
                      Name
                    </label>
                    <input id="name" name="name" type="text" placeholder="Your name" className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="email" className={labelClass}>
                      Email
                    </label>
                    <input id="email" name="email" type="email" placeholder="you@example.com" className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="phone" className={labelClass}>
                      Phone
                    </label>
                    <input id="phone" name="phone" type="tel" placeholder="+91 00000 00000" className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="subject" className={labelClass}>
                      Subject
                    </label>
                    <input id="subject" name="subject" type="text" placeholder="How can we help?" className={inputClass} />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="message" className={labelClass}>
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Write your message..."
                      className={inputClass}
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <button
                      type="button"
                      className="w-full rounded-xl brand-gradient px-7 py-3.5 font-semibold text-white shadow-md transition hover:opacity-95 sm:w-auto"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </Reveal>

            <div className="space-y-6">
              <Reveal delay={80}>
                <div className="rounded-2xl bg-white p-7 shadow-[0_10px_30px_rgba(49,37,24,0.06)] ring-1 ring-brand-cream">
                  <span className="grid h-12 w-12 place-items-center rounded-xl brand-gradient text-2xl text-white">
                    🕐
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-ink">Office Hours</h3>
                  <ul className="mt-3 space-y-2 text-[15px] text-muted">
                    <li className="flex justify-between gap-4">
                      <span>Mon - Fri</span>
                      <span className="font-semibold text-ink">9:00 AM - 6:00 PM</span>
                    </li>
                    <li className="flex justify-between gap-4">
                      <span>Saturday</span>
                      <span className="font-semibold text-ink">9:00 AM - 2:00 PM</span>
                    </li>
                  </ul>
                  <div className="mt-5 border-t border-brand-cream pt-4 text-[15px] text-muted">
                    <p>
                      <span className="font-semibold text-ink">WhatsApp:</span> +91 9205299887
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={160}>
                <div className="rounded-2xl brand-gradient p-7 text-white shadow-[0_10px_30px_rgba(49,37,24,0.12)]">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-white/15 text-2xl ring-1 ring-white/30">
                    🏛️
                  </span>
                  <h3 className="mt-4 text-lg font-bold">University Location</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-white/85">
                    University Main Campus
                  </p>
                  <p className="mt-1 text-[15px] leading-relaxed text-white/85">
                    Lower Pepthang, PO - Lingmoo, District - Namchi, Sikkim-737134
                  </p>
                  <p className="mt-4 text-[15px] text-white/85">
                    Find us nestled in the beautiful landscapes of Sikkim.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
