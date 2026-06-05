import ProgramTemplate, { type ProgramData } from "@/components/ProgramTemplate";

const data: ProgramData = {
  slug: "school_education_physical_education",
  eyebrow: "Educational Excellence",
  title: "School of Education and Physical Education",
  description:
    "Preparing dedicated educators and fitness professionals through comprehensive training in teaching methodologies, sports science, and holistic development.",
  features: [
    {
      icon: "🎓",
      title: "Teaching Excellence",
      text: "Develop advanced pedagogical skills and innovative teaching methodologies for modern education.",
    },
    {
      icon: "🏃",
      title: "Sports Science",
      text: "Study exercise physiology, biomechanics, and sports psychology for athletic performance.",
    },
    {
      icon: "💪",
      title: "Health & Wellness",
      text: "Promote physical fitness, mental health, and overall wellness in educational settings.",
    },
    {
      icon: "🏅",
      title: "Educational Leadership",
      text: "Prepare for leadership roles in educational institutions and sports organizations.",
    },
  ],
  tabs: [
    {
      label: "Bachelor's Program",
      courses: [
        { name: "Bachelor of Education (B.Ed)", duration: "4 Semesters", eligibility: "Graduation with minimum 50%" },
        { name: "Bachelor of Physical Education (B.P.Ed)", duration: "4 Semesters", eligibility: "Graduation + Sports Background" },
      ],
    },
    { label: "Master's Program", courses: [] },
    { label: "Diploma Program", courses: [] },
    { label: "Certificate Program", courses: [] },
  ],
  intro: {
    heading: "Education and Physical Education Programmes - An Introduction",
    text: "Education is the process of facilitating learning, acquiring knowledge, skills, values, and habits. It plays a crucial role in personal and societal development. Physical education, on the other hand, focuses on the development of physical fitness, motor skills, and overall well-being through physical activities and sports.",
  },
  about: {
    heading: "About School of Education and Physical Education",
    text: "The School of Education and Physical Education offers a range of undergraduate, postgraduate, diploma, and certificate programs designed to equip students with the skills needed to excel in the fields of education and physical education. With a focus on practical learning, research-driven education, and industry collaboration, the school aims to produce highly skilled professionals ready to contribute to the development of future generations.",
  },
  objective: {
    heading: "Objective",
    lead: "The programmes under the School of Education and Physical Education are designed to enable students to:",
    points: [
      "Provide a strong foundation in educational theories and practices",
      "Develop skills in teaching and pedagogy",
      "Enhance understanding of physical fitness and sports management",
      "Foster research and analytical skills in the field of education",
      "Prepare students for successful careers in education and physical education sectors",
    ],
  },
};

export default function Page() {
  return <ProgramTemplate data={data} />;
}
