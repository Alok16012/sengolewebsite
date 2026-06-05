import ProgramTemplate, { type ProgramData } from "@/components/ProgramTemplate";

const data: ProgramData = {
  slug: "school_law",
  eyebrow: "Justice & Law",
  title: "School of Law",
  description:
    "Nurturing legal minds through comprehensive legal education, practical training, and ethical foundation for justice and social transformation.",
  features: [
    {
      icon: "⚖️",
      title: "Legal Practice",
      text: "Develop practical legal skills through moot courts, internships, and real case studies.",
    },
    {
      icon: "📜",
      title: "Constitutional Law",
      text: "Study constitutional principles, fundamental rights, and judicial interpretation.",
    },
    {
      icon: "🔍",
      title: "Legal Research",
      text: "Master legal research methodologies, case analysis, and academic writing skills.",
    },
    {
      icon: "🤝",
      title: "Professional Ethics",
      text: "Understand legal ethics, professional responsibility, and courtroom advocacy.",
    },
  ],
  tabs: [
    {
      label: "Bachelor's Program",
      courses: [
        { name: "B.Sc LLB", duration: "10 Semester", eligibility: "12th Pass" },
        { name: "BBA LLB", duration: "10 Semester", eligibility: "12th Pass" },
        { name: "BA LLB", duration: "6 Semester", eligibility: "Graduation" },
        { name: "LLB", duration: "3 Years", eligibility: "Graduation" },
      ],
    },
    { label: "Master's Program", courses: [] },
    { label: "Diploma Program", courses: [] },
  ],
  intro: {
    heading: "Law Programmes - An Introduction",
    text: "Law is a system of rules that are created and enforced through social or governmental institutions to regulate behavior. It plays a crucial role in maintaining order, protecting rights, and delivering justice in society. Legal education equips students with the knowledge and skills needed to navigate the complexities of the legal system.",
  },
  about: {
    heading: "About School of Law",
    text: "The School of Law offers a comprehensive range of undergraduate, postgraduate, diploma, and certificate programs designed to equip students with the skills needed to excel in the legal profession. With a focus on practical learning, research-driven education, and industry collaboration, the school aims to produce highly skilled legal professionals ready to contribute to the justice system.",
  },
  objective: {
    heading: "Objective",
    lead: "The programmes under the School of Law are designed to enable students to:",
    points: [
      "Provide a strong foundation in legal principles and practices",
      "Develop skills in legal research, analysis, and advocacy",
      "Enhance understanding of constitutional and human rights law",
      "Foster ethical and professional standards in legal practice",
      "Prepare students for successful careers in various sectors of law",
    ],
  },
};

export default function Page() {
  return <ProgramTemplate data={data} />;
}
