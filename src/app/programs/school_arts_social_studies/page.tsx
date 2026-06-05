import ProgramTemplate, { type ProgramData } from "@/components/ProgramTemplate";

const data: ProgramData = {
  slug: "school_arts_social_studies",
  eyebrow: "Cultural Heritage",
  title: "School of Arts and Social Studies",
  description:
    "Fostering creativity, critical thinking, and cultural understanding through comprehensive programs in arts, humanities, and social sciences.",
  features: [
    {
      icon: "🎭",
      title: "Creative Arts",
      text: "Explore various forms of artistic expression including visual arts, literature, and performing arts.",
    },
    {
      icon: "📜",
      title: "Historical Studies",
      text: "Understand historical contexts, cultural heritage, and their impact on contemporary society.",
    },
    {
      icon: "🌍",
      title: "Social Sciences",
      text: "Study human behavior, social structures, and societal dynamics through interdisciplinary approaches.",
    },
    {
      icon: "🏺",
      title: "Cultural Studies",
      text: "Examine diverse cultures, traditions, and their influence on global perspectives.",
    },
  ],
  tabs: [
    {
      label: "Bachelor's Program",
      courses: [
        { name: "Bachelor of Arts in English", duration: "6 Semester", eligibility: "12th Pass" },
        { name: "Bachelor of Social Work (BSW)", duration: "6 Semester", eligibility: "12th Pass" },
        { name: "Bachelor of Arts in Economics", duration: "6 Semester", eligibility: "12th Pass" },
        { name: "Bachelor of Arts in Sociology", duration: "6 Semester", eligibility: "12th Pass" },
        { name: "Bachelor of Arts in Hindi", duration: "6 Semester", eligibility: "12th Pass" },
      ],
    },
    { label: "Master's Program", courses: [] },
    { label: "Diploma Program", courses: [] },
  ],
  intro: {
    heading: "Arts and Social Studies Programmes - An Introduction",
    text: "Arts and social studies encompass a wide range of disciplines that explore human culture, society, and behavior. These fields include subjects such as literature, history, sociology, psychology, and political science. They provide valuable insights into the complexities of human interactions and the cultural contexts in which they occur.",
  },
  about: {
    heading: "About School of Arts and Social Studies",
    text: "The School of Arts and Social Studies offers a diverse range of undergraduate, postgraduate, diploma, and certificate programs designed to equip students with the skills needed to excel in various fields related to arts and social sciences. With a focus on critical thinking, research-driven education, and interdisciplinary approaches, the school aims to produce well-rounded professionals ready to contribute to society.",
  },
  objective: {
    heading: "Objective",
    lead: "The programmes under the School of Arts and Social Studies are designed to enable students to:",
    points: [
      "Provide a strong foundation in arts and social studies principles",
      "Develop critical thinking and analytical skills",
      "Enhance understanding of cultural and social dynamics",
      "Foster research and communication skills",
      "Prepare students for successful careers in various sectors of arts and social sciences",
    ],
  },
};

export default function Page() {
  return <ProgramTemplate data={data} />;
}
