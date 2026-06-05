import PageBanner from "@/components/PageBanner";
import Reveal from "@/components/Reveal";
import { ContentEyebrow, SectionTitle } from "@/components/content-blocks";

const inputClass =
  "w-full rounded-xl bg-white px-4 py-3 text-[15px] text-ink ring-1 ring-brand-cream transition placeholder:text-muted/70 focus:outline-none focus:ring-2 focus:ring-brand-1";
const labelClass = "mb-1.5 block text-sm font-semibold text-ink";

const programTypes = [
  "Bachelors",
  "Bachelors (Lateral)",
  "Certificate",
  "Diploma",
  "Doctorate",
  "Integrated",
  "Masters",
  "PG Diploma",
  "Polytechnic",
  "Polytechnic (Lateral)",
  "Vocational",
];

const departments = [
  "School of Engineering & Technology",
  "School of Computer Science & IT",
  "School of Commerce & Management Studies",
  "School of Arts & Social Studies",
  "School of Science",
  "School of Education & Physical Education",
  "School of Law",
  "School of Pharmacy",
  "School of Para-Medical Science",
  "School of Hotel Management",
  "School of Architecture & Planning",
  "School of Journalism & Mass Media Communication",
  "School of Animation",
  "School of Fire & Safety",
  "School of Library & Information Science",
  "School of Vocational Studies",
  "School of Philosophy & Research",
];

export default function ApplicationFormPage() {
  return (
    <main>
      <PageBanner
        breadcrumb="Admission"
        eyebrow="Apply Now"
        icon="📝"
        title="Application Form"
        subtitle="Begin your academic journey with Sengol International University. Fill out the form below to apply for your desired program."
      />

      <section className="bg-brand-light py-16 sm:py-20">
        <div className="mx-auto max-w-[1400px] px-4">
          <Reveal>
            <div className="mx-auto max-w-4xl rounded-2xl bg-white p-7 shadow-[0_10px_30px_rgba(49,37,24,0.08)] ring-1 ring-brand-cream sm:p-10">
              <ContentEyebrow>🎓 Student Application Form</ContentEyebrow>
              <SectionTitle>Start Your Application</SectionTitle>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">
                Get more information &mdash; contact us at +91-9205299887 or
                admission@sengolinternationaluniversity.edu.in
              </p>

              <form className="mt-8 space-y-8">
                <div>
                  <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-brand-1">
                    Personal Information
                  </h3>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="fullName" className={labelClass}>
                        Full Name *
                      </label>
                      <input id="fullName" name="fullName" type="text" placeholder="Your full name" className={inputClass} />
                    </div>
                    <div>
                      <label htmlFor="fatherName" className={labelClass}>
                        Father&apos;s Name *
                      </label>
                      <input id="fatherName" name="fatherName" type="text" placeholder="Father's name" className={inputClass} />
                    </div>
                    <div>
                      <label htmlFor="email" className={labelClass}>
                        Email ID *
                      </label>
                      <input id="email" name="email" type="email" placeholder="you@example.com" className={inputClass} />
                    </div>
                    <div>
                      <label htmlFor="mobile" className={labelClass}>
                        Mobile Number *
                      </label>
                      <input id="mobile" name="mobile" type="tel" placeholder="+91 00000 00000" className={inputClass} />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-brand-1">
                    Academic Information
                  </h3>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="programType" className={labelClass}>
                        Program Type *
                      </label>
                      <select id="programType" name="programType" defaultValue="" className={inputClass}>
                        <option value="" disabled>
                          Select Program Type
                        </option>
                        {programTypes.map((p) => (
                          <option key={p} value={p}>
                            {p}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="department" className={labelClass}>
                        Department *
                      </label>
                      <select id="department" name="department" defaultValue="" className={inputClass}>
                        <option value="" disabled>
                          Select Department
                        </option>
                        {departments.map((d) => (
                          <option key={d} value={d}>
                            {d}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="course" className={labelClass}>
                        Course Name *
                      </label>
                      <input id="course" name="course" type="text" placeholder="Select Course" className={inputClass} />
                    </div>
                    <div>
                      <label htmlFor="specialization" className={labelClass}>
                        Specialization *
                      </label>
                      <input id="specialization" name="specialization" type="text" placeholder="Select Specialization" className={inputClass} />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-brand-1">
                    Location Information
                  </h3>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="state" className={labelClass}>
                        State *
                      </label>
                      <input id="state" name="state" type="text" placeholder="Select State" className={inputClass} />
                    </div>
                    <div>
                      <label htmlFor="district" className={labelClass}>
                        District *
                      </label>
                      <input id="district" name="district" type="text" placeholder="Select District" className={inputClass} />
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  className="w-full rounded-xl brand-gradient px-7 py-3.5 font-semibold text-white shadow-md transition hover:opacity-95 sm:w-auto"
                >
                  Submit Application
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
