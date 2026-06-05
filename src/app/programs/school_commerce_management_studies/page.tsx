import ProgramTemplate, { type ProgramData } from "@/components/ProgramTemplate";

const data: ProgramData = {
  slug: "school_commerce_management_studies",
  eyebrow: "Business Excellence",
  title: "School of Commerce and Management Studies",
  description:
    "Empowering future business leaders through comprehensive commerce and management education, fostering entrepreneurship, and developing strategic thinking skills.",
  features: [
    {
      icon: "📊",
      title: "Business Analytics",
      text: "Master data-driven decision making and business intelligence for modern enterprises.",
    },
    {
      icon: "👔",
      title: "Leadership Skills",
      text: "Develop essential management and leadership capabilities for corporate success.",
    },
    {
      icon: "🌐",
      title: "Global Perspective",
      text: "Understand international business practices and global market dynamics.",
    },
    {
      icon: "🤝",
      title: "Industry Connect",
      text: "Strong industry partnerships providing internships and placement opportunities.",
    },
  ],
  tabs: [
    {
      label: "Bachelor's Program",
      courses: [
        { name: "Bachelor in Commerce", duration: "6 Semester", eligibility: "12th Pass" },
        { name: "Bachelor of Business Administration (HR)", duration: "6 Semester", eligibility: "12th Pass" },
        { name: "B.Com Hons (Accounting and Finance Financial Markets)", duration: "6 Semester", eligibility: "12th Pass" },
        { name: "B.Com Hons (Accounting and Finance Financial Market)", duration: "6 Semester", eligibility: "12th Pass" },
        { name: "B.Com in Finance Management", duration: "6 Semester", eligibility: "12th Pass" },
      ],
    },
    { label: "Master's Program", courses: [] },
    { label: "Diploma Program", courses: [] },
    { label: "Certificate Program", courses: [] },
  ],
  intro: {
    heading: "Commerce and Management Programmes - An Introduction",
    text: "Commerce and management are two closely related fields that focus on the study of business, trade, and organizational practices. Commerce primarily deals with the exchange of goods and services, while management involves the planning, organizing, leading, and controlling of resources to achieve organizational goals. Both disciplines are essential for the functioning of businesses and economies.",
  },
  about: {
    heading: "About School of Commerce and Management",
    text: "The School of Commerce and Management offers a comprehensive range of undergraduate, postgraduate, and doctoral programs in commerce and management. The school is dedicated to providing quality education that equips students with the necessary skills and knowledge to excel in the business world. With a focus on practical learning, industry exposure, and research-driven education, the school aims to develop future leaders in commerce and management.",
  },
  objective: {
    heading: "Objective",
    lead: "The programmes under the School of Commerce and Management are designed to enable students to:",
    points: [
      "Provide a strong foundation in commerce and management principles",
      "Develop analytical and critical thinking skills",
      "Enhance communication and interpersonal skills",
      "Foster ethical and responsible business practices",
      "Prepare students for successful careers in various sectors of commerce and management",
    ],
  },
};

export default function Page() {
  return <ProgramTemplate data={data} />;
}
