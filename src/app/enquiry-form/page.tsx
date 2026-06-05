import PageBanner from "@/components/PageBanner";
import Reveal from "@/components/Reveal";
import { ContentEyebrow, SectionTitle } from "@/components/content-blocks";

const inputClass =
  "w-full rounded-xl bg-white px-4 py-3 text-[15px] text-ink ring-1 ring-brand-cream transition placeholder:text-muted/70 focus:outline-none focus:ring-2 focus:ring-brand-1";
const labelClass = "mb-1.5 block text-sm font-semibold text-ink";

const nextSteps = [
  "Our admission counselor will contact you within 24 hours.",
  "You'll receive detailed information about programs and fees.",
  "We'll schedule a personalized consultation if needed.",
];

export default function EnquiryFormPage() {
  return (
    <main>
      <PageBanner
        breadcrumb="Contact"
        eyebrow="Get Information"
        icon="📝"
        title="Enquiry Form"
        subtitle="Have questions about our programs? We're here to help you find the right path."
      />

      <section className="bg-brand-light py-16 sm:py-20">
        <div className="mx-auto max-w-[1400px] px-4">
          <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
            <Reveal>
              <div className="rounded-2xl bg-white p-7 shadow-[0_10px_30px_rgba(49,37,24,0.08)] ring-1 ring-brand-cream sm:p-10">
                <ContentEyebrow>📨 Send us your Enquiry</ContentEyebrow>
                <SectionTitle>How Can We Help?</SectionTitle>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">
                  Fill out the form below and we&apos;ll get back to you as soon as possible.
                </p>

                <form className="mt-8 grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="fullName" className={labelClass}>
                      Full Name *
                    </label>
                    <input id="fullName" name="fullName" type="text" placeholder="Your full name" className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="email" className={labelClass}>
                      Email Address *
                    </label>
                    <input id="email" name="email" type="email" placeholder="you@example.com" className={inputClass} />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="phone" className={labelClass}>
                      Phone Number *
                    </label>
                    <input id="phone" name="phone" type="tel" placeholder="+91 00000 00000" className={inputClass} />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="remarks" className={labelClass}>
                      Remarks (Optional)
                    </label>
                    <textarea
                      id="remarks"
                      name="remarks"
                      rows={5}
                      placeholder="Tell us what you'd like to know..."
                      className={inputClass}
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <button
                      type="button"
                      className="w-full rounded-xl brand-gradient px-7 py-3.5 font-semibold text-white shadow-md transition hover:opacity-95 sm:w-auto"
                    >
                      Submit Enquiry
                    </button>
                  </div>
                </form>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="h-full rounded-2xl brand-gradient p-8 text-white shadow-[0_10px_30px_rgba(49,37,24,0.12)] sm:p-10">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-white/15 text-2xl ring-1 ring-white/30">
                  ✨
                </span>
                <h3 className="mt-5 text-2xl font-extrabold">What happens next?</h3>
                <ul className="mt-6 space-y-5">
                  {nextSteps.map((step, i) => (
                    <li key={step} className="flex gap-4">
                      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white/20 text-sm font-bold ring-1 ring-white/30">
                        {i + 1}
                      </span>
                      <span className="text-[15px] leading-relaxed text-white/90">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
