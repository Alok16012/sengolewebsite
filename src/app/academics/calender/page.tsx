import PageBanner from "@/components/PageBanner";
import SectionLayout from "@/components/SectionLayout";
import Reveal from "@/components/Reveal";
import { academicsMenu } from "@/data/content";
import { ContentEyebrow, SectionTitle, FeatureGrid, CTABand } from "@/components/content-blocks";

const calendarActivities = [
  { activity: "📝 Admission/Registration", date: "05 July – 30 Aug 2026" },
  { activity: "🎓 Orientation Classes (1st Year)", date: "22-25 August 2026" },
  { activity: "⏰ Last Date to Submit Admission Forms", date: "20 Aug 2026" },
];

const academicBreaks = [
  { activity: "❄️ Winter Break", duration: "10 days" },
  { activity: "☀️ Summer Break", duration: "10 days" },
];

const holidays = [
  { no: 1, festival: "Harela Festival", date: "16 July 2026", day: "Wednesday", count: 1 },
  { no: 2, festival: "University Foundation Day", date: "17 July 2026", day: "Thursday", count: 1 },
  { no: 3, festival: "Independence Day*", date: "15 August 2026", day: "Friday", count: 1 },
  { no: 4, festival: "Raksha Bandhan", date: "9–10 August 2026", day: "Saturday–Sunday", count: 2 },
  { no: 5, festival: "Janmashtami", date: "16 August 2026", day: "Saturday", count: 1 },
  { no: 6, festival: "Gandhi Jayanti", date: "2 October 2026", day: "Thursday", count: 1 },
  { no: 7, festival: "Ramnavmi / Dussehra", date: "1–2 October 2026", day: "Wednesday–Thursday", count: 1 },
  { no: 8, festival: "Diwali", date: "19–24 October 2026", day: "Sunday–Friday", count: 6 },
  { no: 9, festival: "Igas-Bagwal", date: "1 November 2026", day: "Saturday", count: 1 },
  { no: 10, festival: "Guru Nanak Jayanti", date: "5 November 2026", day: "Wednesday", count: 1 },
  { no: 11, festival: "Uttarakhand Day*", date: "9 November 2026", day: "Sunday", count: 1 },
  { no: 12, festival: "Christmas Day", date: "25 December 2026", day: "Thursday", count: 1 },
  { no: 13, festival: "Republic Day*", date: "26 January 2027", day: "Monday", count: 1 },
  { no: 14, festival: "Maha Shivaratri", date: "16 February 2027", day: "Monday", count: 1 },
  { no: 15, festival: "Holi (Rang)", date: "2–5 March 2027", day: "Monday–Thursday", count: 4 },
  { no: 16, festival: "Eid-ul-Fitr (Ramzan)**", date: "20 March 2027", day: "Friday", count: 1 },
  { no: 17, festival: "Ram Navami", date: "26 March 2027", day: "Thursday", count: 1 },
  { no: 18, festival: "Mahavir Jayanti", date: "31 March 2027", day: "Tuesday", count: 1 },
  { no: 19, festival: "Dr. Ambedkar Jayanti", date: "14 April 2027", day: "Tuesday", count: 1 },
];

const importantNotes = [
  "75% attendance is mandatory for exam eligibility.",
  "In case the teaching days are not being completed within the provided Academic Calendar, then Deans/HODs/Directors should arrange extra classes prior to exam schedule positively.",
  "Any additional holiday due to local circumstances to the students must be compensated with extra classes on weekends/holidays.",
  "Incomplete teaching days must be covered by extra classes.",
  "Extra holidays must be compensated with weekend classes.",
];

export default function AcademicCalendarPage() {
  return (
    <main>
      <PageBanner
        breadcrumb="Academics"
        eyebrow="Academics"
        icon="🎓"
        title="Academics"
        subtitle="Explore academic leadership, faculty excellence, and our commitment to a safe and inclusive learning environment."
      />
      <SectionLayout
        menuTitle="Academics"
        menuIcon="🎓"
        items={academicsMenu}
        activeHref="/academics/calender"
      >
        <Reveal>
          <ContentEyebrow>📅 Academic Calendar</ContentEyebrow>
          <SectionTitle>Academic Calendar (Session 2026–27)</SectionTitle>
          <p className="mt-4 text-[15px] leading-relaxed text-ink/80">
            Sengol International University&apos;s academic calendar outlines key dates, breaks, and
            holidays for the 2026–27 session to help students and faculty plan ahead.
          </p>
        </Reveal>

        <div className="mt-8">
          <h3 className="mb-4 text-xl font-bold text-ink">Academic Calendar</h3>
          <div className="overflow-hidden rounded-2xl ring-1 ring-brand-cream">
            <table className="w-full text-left text-sm">
              <thead className="brand-gradient text-white">
                <tr>
                  <th className="px-5 py-3 font-semibold">Activity</th>
                  <th className="px-5 py-3 font-semibold">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-cream bg-white">
                {calendarActivities.map((r) => (
                  <tr key={r.activity}>
                    <td className="px-5 py-3 text-ink/80">{r.activity}</td>
                    <td className="px-5 py-3 text-ink/80">{r.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="mb-4 text-xl font-bold text-ink">Academic Breaks (Session 2026–27)</h3>
          <div className="overflow-hidden rounded-2xl ring-1 ring-brand-cream">
            <table className="w-full text-left text-sm">
              <thead className="brand-gradient text-white">
                <tr>
                  <th className="px-5 py-3 font-semibold">Activity</th>
                  <th className="px-5 py-3 font-semibold">Duration</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-cream bg-white">
                {academicBreaks.map((r) => (
                  <tr key={r.activity}>
                    <td className="px-5 py-3 text-ink/80">{r.activity}</td>
                    <td className="px-5 py-3 text-ink/80">{r.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="mb-4 text-xl font-bold text-ink">Academic Holidays (Session 2026–27)</h3>
          <div className="overflow-hidden rounded-2xl ring-1 ring-brand-cream">
            <table className="w-full text-left text-sm">
              <thead className="brand-gradient text-white">
                <tr>
                  <th className="px-5 py-3 font-semibold">S. No.</th>
                  <th className="px-5 py-3 font-semibold">Festival</th>
                  <th className="px-5 py-3 font-semibold">Date</th>
                  <th className="px-5 py-3 font-semibold">Day</th>
                  <th className="px-5 py-3 font-semibold">Holidays</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-cream bg-white">
                {holidays.map((r) => (
                  <tr key={r.no}>
                    <td className="px-5 py-3 text-ink/80">{r.no}</td>
                    <td className="px-5 py-3 text-ink/80">{r.festival}</td>
                    <td className="px-5 py-3 text-ink/80">{r.date}</td>
                    <td className="px-5 py-3 text-ink/80">{r.day}</td>
                    <td className="px-5 py-3 text-ink/80">{r.count}</td>
                  </tr>
                ))}
                <tr className="bg-brand-cream/40 font-bold">
                  <td className="px-5 py-3 text-ink" colSpan={4}>
                    Total Holidays
                  </td>
                  <td className="px-5 py-3 text-ink">28 Days</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-10">
          <h3 className="mb-4 text-xl font-bold text-ink">Important Notes</h3>
          <FeatureGrid
            features={importantNotes.map((note, i) => ({
              icon: `${i + 1}`,
              title: `Note ${i + 1}`,
              text: note,
            }))}
          />
        </div>

        <CTABand
          title="Stay Updated with Academic Calendar"
          text="Keep track of important dates, holidays, and academic activities throughout the session."
          primary={{ label: "Get Latest Updates", href: "/contact" }}
        />
      </SectionLayout>
    </main>
  );
}
