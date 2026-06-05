import PageBanner from "@/components/PageBanner";
import SectionLayout from "@/components/SectionLayout";
import Reveal from "@/components/Reveal";
import { academicsMenu } from "@/data/content";
import {
  ContentEyebrow,
  SectionTitle,
  StatRow,
  FeatureGrid,
  Prose,
  CTABand,
} from "@/components/content-blocks";

const indisciplineActs = [
  "Ragging or eve teasing in any form",
  "Disruption of classroom activities or disturbance to fellow students",
  "Causing damage to university property",
  "Possession or consumption of intoxicants, drugs, or weapons",
  "Misconduct during examinations",
  "Submitting false information for admission",
  "Failure to return university property or settle financial dues",
];

const conductRules = [
  "Be respectful and polite to all staff and peers.",
  "Do not bring disrepute to the university by your words or actions, inside or outside campus.",
  "Avoid inciting or using violent, threatening, or insulting language.",
  "Maintain regularity and punctuality in all university activities.",
  "Leaving the classroom during lectures is prohibited.",
  "Observe silence in classrooms whether faculty is present or not.",
  "Group gatherings at entrances, pathways, or roads are banned.",
  "Do not misuse reasons like fees or library visits to skip class.",
  "Always carry and display your University Identity Card.",
  "Read university notices and circulars regularly.",
  "Park vehicles in designated areas only.",
  "Behave appropriately at university events.",
  "Smoking, spitting, and littering are prohibited on campus.",
  "Entry into administrative or staff rooms is not allowed without permission.",
  "Any damage to university property will be charged collectively if no individual is identified.",
  "Grievances must be submitted formally via the class teacher or Grievance Committee.",
  "No meetings/functions or circulation of notices without Principal's written permission.",
  "Media communication requires prior university approval.",
  "Participation in strikes or organizing disruptions will attract strict action.",
  "Students must take exams, tests, and assignments seriously.",
  "Improper conduct in exams or with admission documents is punishable.",
  "Silence is mandatory due to simultaneous courses on campus.",
  "Students must wear proper uniform; non-compliance may be penalized.",
  "Mobile phones are strictly banned inside the campus.",
  "Political activity of any kind is banned; violation can lead to rustication.",
];

const attendanceRules = [
  "Students should attend all classes regularly and punctually.",
  "Students must be punctual to each lecture hour. Students coming late to the class by more than five minutes will not be given attendance for that period.",
  "Although the University prescribes a minimum of 75% of attendance, the University insists on regular attendance in all classes. Students are eligible for scholarships only when they earn more than 90% of attendance.",
  "A student with less than 75% of attendance will not be eligible to write the Semester Examinations of the University.",
  "Students are not permitted to absent themselves without prior permission.",
  "An application for leave must be submitted in the prescribed form well in advance or at least a day before the leave is required.",
  "When absence without prior permission is unavoidable the leave application must be submitted on the day of return to the University after the leave period.",
  "Even with prior permission, if a student absents oneself, even for a single hour, he/she would be considered as absent for the whole session.",
  "Absence without leave for even a part of the day will be counted as absence for one day.",
  "Students without Identity Card & proper Uniform will be marked absent.",
  "If a student absents himself/herself for three consecutive days without leave his/her name will be removed from the rolls.",
  "Removal of the names from the rolls shall entail forfeiture of attendance till the date of re-admission.",
  "In case of any violation of rules and regulations, action may include a warning, reprimand, fail mark, suspension or expulsion, withholding of official documents, withdrawal of campus privileges and any other action the University deems appropriate.",
];

const libraryRules = [
  "The Library has been opened to all the Students, Faculty and Staff of the University.",
  "Readers will not be allowed to enter the library with their personal belongings.",
  "Readers are prohibited from engaging in any activity which may disturb or distract the attention of other readers and will result in severe disciplinary action.",
  "No reader shall write upon, damage or make marks on any library book. Each student will be issued two tickets. A book will be lent only in exchange of one ticket, returned when the book is returned.",
  "Date label and book pockets shall not be tampered with. Serious notice will be taken on any violation of this rule.",
  "Library tickets are not transferable. A reader who misses a ticket shall follow the stipulated process including remittance of Rs.50 as a fine to get another ticket.",
  "A reader who fails to return a book on the due date will be charged 50 paisa per day as fine. Such a reader will not be allowed to use the library till the book is returned and fine paid.",
  "At the end of each semester before receiving the hall ticket, the student should return all books. Without a clearance certificate (NO DUE) from the Librarian, the University will not permit a student to write the End Semester Examination.",
  "The Diploma and Certificate/Provisional shall be issued to students only after they return all books and remit dues outstanding against them.",
];

export default function StudentConcernPage() {
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
        activeHref="/academics/student-concern"
      >
        <Reveal>
          <ContentEyebrow>👥 Student Guidelines</ContentEyebrow>
          <SectionTitle>Rules and Regulations</SectionTitle>
        </Reveal>

        <div className="mt-6">
          <h3 className="mb-3 text-xl font-bold text-ink">Student Discipline</h3>
          <Prose
            paragraphs={[
              "Students are expected to conduct themselves in a responsible manner and uphold the integrity and values of the University. Respect towards faculty, staff, and fellow students is mandatory. Any behavior that disrupts academic activities or harms the university's environment will be subject to disciplinary action.",
            ]}
          />
        </div>

        <div className="mt-10">
          <h3 className="mb-4 text-xl font-bold text-ink">
            Acts of Indiscipline Include (but are not limited to)
          </h3>
          <FeatureGrid
            features={indisciplineActs.map((text, i) => ({
              icon: "⚠️",
              title: `Act ${i + 1}`,
              text,
            }))}
          />
        </div>

        <div className="mt-10">
          <h3 className="mb-3 text-xl font-bold text-ink">Ban on Ragging</h3>
          <Prose
            paragraphs={[
              "Ragging is strictly prohibited. Any student found involved in ragging will be given an opportunity to explain. If unsatisfactory, the student will be expelled immediately.",
              "Ragging and eve teasing are criminal offenses under Government of Sikkim law — with penalties including a fine of ₹25,000 and imprisonment up to two years.",
            ]}
          />
        </div>

        <div className="mt-10">
          <h3 className="mb-4 text-xl font-bold text-ink">Disciplinary Authority</h3>
          <FeatureGrid
            features={[
              {
                icon: "1",
                title: "Principal's Powers",
                text: "All disciplinary powers rest with the Principal.",
              },
              {
                icon: "2",
                title: "Delegation",
                text: "The Principal may delegate powers to other university officers.",
              },
              {
                icon: "3",
                title: "Final Decision",
                text: "The Principal's decision is final in all disciplinary matters.",
              },
            ]}
            cols={3}
          />
        </div>

        <div className="mt-10">
          <h3 className="mb-4 text-xl font-bold text-ink">Specific Conduct Rules</h3>
          <FeatureGrid
            features={conductRules.map((text, i) => ({
              icon: `${i + 1}`,
              title: `Rule ${i + 1}`,
              text,
            }))}
          />
        </div>

        <div className="mt-10">
          <h3 className="mb-4 text-xl font-bold text-ink">Attendance Rules</h3>
          <StatRow
            stats={[
              { value: "75%", label: "Minimum Required" },
              { value: "90%", label: "For Scholarships" },
              { value: "5 min", label: "Late Grace Period" },
            ]}
          />
          <FeatureGrid
            features={attendanceRules.map((text, i) => ({
              icon: `${i + 1}`,
              title: `Attendance ${i + 1}`,
              text,
            }))}
          />
        </div>

        <div className="mt-10">
          <h3 className="mb-4 text-xl font-bold text-ink">Library Rules</h3>
          <StatRow
            stats={[
              { value: "2", label: "Library Tickets per Student" },
              { value: "₹0.50/day", label: "Late Return Fine" },
              { value: "₹50", label: "Lost Ticket Fine" },
            ]}
          />
          <FeatureGrid
            features={libraryRules.map((text, i) => ({
              icon: `${i + 1}`,
              title: `Library ${i + 1}`,
              text,
            }))}
          />
        </div>

        <CTABand
          title="Follow University Guidelines"
          text="Adherence to these rules ensures a conducive learning environment for all students. For any clarifications or grievances, please contact the Student Affairs Office or your respective department coordinators."
          primary={{ label: "Contact Student Affairs", href: "/contact" }}
        />
      </SectionLayout>
    </main>
  );
}
