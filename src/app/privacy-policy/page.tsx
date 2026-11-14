import PageBanner from "@/components/PageBanner";
import Reveal from "@/components/Reveal";
import { ContentEyebrow, SectionTitle } from "@/components/content-blocks";

export const metadata = {
  title: "Privacy Policy | Sengol International University",
  description:
    "How Sengol International University collects, uses, stores, shares and safeguards the personal information of students, applicants, staff and website visitors.",
};

type Section = {
  icon: string;
  title: string;
  intro?: string[];
  points?: string[];
  outro?: string[];
};

const sections: Section[] = [
  {
    icon: "🏛️",
    title: "1. Introduction",
    intro: [
      "Sengol International University (SIU) is committed to protecting the privacy, confidentiality, and personal information of its students, prospective students, faculty members, employees, applicants, alumni, and website visitors.",
      "This Privacy Policy explains how the University collects, uses, processes, stores, shares, and safeguards personal information obtained through its official website, online applications, academic services, administrative activities, and other digital platforms.",
      "By accessing or using the University's website and online services, users acknowledge the data practices described in this Privacy Policy.",
    ],
  },
  {
    icon: "🗂️",
    title: "2. Information We Collect",
    intro: ["Sengol International University may collect the following categories of information:"],
    points: [
      "Personal Information: Full name, date of birth, gender, residential address, email address, mobile number, and other contact details.",
      "Academic Information: Educational qualifications, academic records, examination details, certificates, and other academic information.",
      "Admission and Registration Information: Information provided during inquiries, applications, registration, enrollment, and other academic procedures.",
      "Employment Information: Information submitted by faculty members, employees, and job applicants for recruitment and administrative purposes.",
      "Website Usage Information: IP addresses, browser type, device information, pages visited, and website interaction data.",
      "Cookies and Tracking Technologies: Cookies and similar technologies may be used to improve website functionality, analyze website traffic, and enhance user experience.",
    ],
    outro: [
      "The University collects personal information for legitimate academic, administrative, institutional, and legal purposes.",
    ],
  },
  {
    icon: "⚙️",
    title: "3. How We Use Your Information",
    intro: ["Information collected by Sengol International University may be used for:"],
    points: [
      "Processing admission inquiries, applications, and registrations.",
      "Maintaining academic and administrative records.",
      "Providing educational and institutional services.",
      "Managing examinations, results, certificates, and academic documentation, where applicable.",
      "Communicating University notices, announcements, and important updates.",
      "Processing recruitment applications and employee records.",
      "Improving website functionality, security, and user experience.",
      "Maintaining institutional records and administrative efficiency.",
      "Complying with applicable government regulations, statutory requirements, and legal obligations.",
    ],
    outro: [
      "The University does not sell, rent, or trade personal information to third parties for commercial marketing purposes.",
    ],
  },
  {
    icon: "🔒",
    title: "4. Data Protection and Security",
    intro: [
      "Sengol International University is committed to maintaining appropriate security standards for protecting personal information.",
      "The University adopts reasonable administrative, technical, and organizational measures to safeguard personal data against unauthorized access, misuse, alteration, disclosure, loss, or destruction.",
      "Access to confidential information is restricted to authorized personnel and service providers who require such access for legitimate institutional purposes.",
      "Although reasonable security measures are maintained, no electronic storage system or internet-based transmission can guarantee absolute security.",
    ],
  },
  {
    icon: "🤝",
    title: "5. Sharing and Disclosure of Information",
    intro: [
      "Sengol International University respects the confidentiality of personal information.",
      "Personal information may be shared only when necessary:",
    ],
    points: [
      "With authorized University departments for academic and administrative purposes.",
      "With government authorities, statutory bodies, and regulatory agencies as required by law.",
      "With authorized service providers supporting University operations, subject to appropriate confidentiality and security safeguards.",
      "To comply with lawful requests, legal proceedings, or applicable statutory obligations.",
    ],
    outro: [
      "The University does not disclose personal information to unauthorized third parties without an appropriate legal basis.",
    ],
  },
  {
    icon: "🍪",
    title: "6. Cookies and Tracking Technologies",
    intro: [
      "The University's official website may use cookies and similar technologies to improve browsing experience, maintain website functionality, and understand visitor interactions.",
      "Users may manage, restrict, or disable cookies through their browser settings.",
      "Disabling certain cookies may affect the availability or performance of some website features.",
    ],
  },
  {
    icon: "🔗",
    title: "7. Third-Party Websites",
    intro: [
      "The University's website may contain links to external websites, educational resources, government portals, or third-party services.",
      "Sengol International University is not responsible for the privacy practices, security measures, or content of external websites.",
      "Users are encouraged to review the privacy policies of third-party websites before providing personal information.",
    ],
  },
  {
    icon: "🗄️",
    title: "8. Data Retention",
    intro: [
      "Sengol International University retains personal information only for as long as reasonably necessary to fulfill academic, administrative, institutional, and legal requirements.",
      "Certain academic and institutional records may be retained for longer periods where required by applicable laws, regulations, or record-retention obligations.",
      "When personal information is no longer required, it will be securely deleted, anonymized, or otherwise disposed of in accordance with applicable requirements.",
    ],
  },
  {
    icon: "🙋",
    title: "9. User Rights",
    intro: ["Subject to applicable laws, individuals may have the right to:"],
    points: [
      "Request access to their personal information.",
      "Request correction or updating of inaccurate or incomplete information.",
      "Withdraw consent for specific processing activities where legally applicable.",
      "Raise concerns regarding the collection, use, or protection of personal information.",
      "Request deletion of personal information where permitted by applicable law.",
    ],
    outro: [
      "Requests relating to personal information may be submitted through the University's official communication channels.",
    ],
  },
  {
    icon: "🧒",
    title: "10. Children's Privacy",
    intro: [
      "Sengol International University recognizes the importance of protecting the personal information of individuals below the age of 18.",
      "Where personal information relating to minors is collected, the University will comply with applicable legal requirements, including parental or guardian consent requirements where necessary.",
    ],
  },
  {
    icon: "⚖️",
    title: "11. Compliance with Applicable Laws",
    intro: [
      "Sengol International University is committed to handling personal information in accordance with applicable Indian laws and regulations, including:",
    ],
    points: [
      "The Information Technology Act, 2000, and applicable rules.",
      "The Digital Personal Data Protection Act, 2023, and associated rules, to the extent legally applicable.",
      "Other relevant statutory and regulatory requirements governing educational institutions.",
    ],
    outro: [
      "The University may update its data protection procedures to reflect changes in applicable laws and regulatory requirements.",
    ],
  },
  {
    icon: "📝",
    title: "12. Changes to This Privacy Policy",
    intro: [
      "Sengol International University reserves the right to amend, modify, or update this Privacy Policy to reflect changes in institutional operations, legal requirements, or website services.",
      "Any revisions will be published on the University's official website with an updated effective date.",
      "Users are encouraged to review this Privacy Policy periodically.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main>
      <PageBanner
        breadcrumb="Privacy Policy"
        eyebrow="Your Data"
        icon="🔒"
        title="Privacy Policy"
        subtitle="Established under the Sengol International University Act, 2025 (Act No. 14 of 2025), Government of Sikkim."
      />

      <section className="bg-brand-light py-16 sm:py-20">
        <div className="mx-auto max-w-[1000px] px-4">
          <Reveal>
            <ContentEyebrow>🔒 Privacy Policy</ContentEyebrow>
            <SectionTitle>Privacy Policy — Sengol International University</SectionTitle>
            <p className="mt-3 text-[15px] leading-relaxed text-muted">
              How the University collects, uses, stores, shares and safeguards personal
              information.
            </p>
          </Reveal>

          <div className="mt-10 space-y-8">
            {sections.map((section, i) => (
              <Reveal key={section.title} delay={Math.min(i, 4) * 80}>
                <div className="rounded-2xl bg-white p-7 shadow-[0_10px_30px_rgba(49,37,24,0.06)] ring-1 ring-brand-cream sm:p-9">
                  <div className="flex items-center gap-4">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl brand-gradient text-2xl text-white">
                      {section.icon}
                    </span>
                    <h3 className="text-xl font-bold text-ink sm:text-2xl">{section.title}</h3>
                  </div>
                  <div className="mt-6 space-y-3">
                    {section.intro?.map((p) => (
                      <p key={p} className="text-[15px] leading-relaxed text-ink/80">{p}</p>
                    ))}
                    {section.points && (
                      <ul className="space-y-2.5 pt-1">
                        {section.points.map((p) => {
                          const at = p.indexOf(": ");
                          const lead = at > 0 && at < 60 ? p.slice(0, at) : null;
                          return (
                            <li key={p} className="flex gap-3">
                              <span className="mt-2 h-2 w-2 shrink-0 rounded-full brand-gradient" />
                              <p className="text-[15px] leading-relaxed text-ink/80">
                                {lead ? (
                                  <>
                                    <span className="font-semibold text-ink">{lead}:</span> {p.slice(at + 2)}
                                  </>
                                ) : (
                                  p
                                )}
                              </p>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                    {section.outro?.map((p) => (
                      <p key={p} className="pt-1 text-[15px] leading-relaxed text-ink/80">{p}</p>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={160}>
            <div className="mt-10 rounded-2xl brand-gradient p-7 text-white shadow-[0_10px_30px_rgba(49,37,24,0.12)] sm:p-9">
              <h3 className="text-xl font-bold">13. Contact Information</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-white/85">
                For any questions, concerns, or requests regarding this Privacy Policy or the
                handling of personal information, please contact:
              </p>
              <div className="mt-4 space-y-1 text-[15px] leading-relaxed text-white/90">
                <p className="font-semibold text-white">The Registrar, Sengol International University</p>
                <p>Lower Pepthang, PO – Lingmoo, District – Namchi, Sikkim – 737134, India</p>
                <p>
                  Email:{" "}
                  <a href="mailto:info@sengolinternationaluniversity.edu.in" className="font-semibold text-white underline">
                    info@sengolinternationaluniversity.edu.in
                  </a>
                </p>
                <p>
                  Phone:{" "}
                  <a href="tel:+919205299887" className="font-semibold text-white underline">
                    +91 92052 99887
                  </a>
                </p>
                <p>
                  Website:{" "}
                  <a href="https://www.sengolinternationaluniversity.edu.in" className="font-semibold text-white underline">
                    www.sengolinternationaluniversity.edu.in
                  </a>
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
