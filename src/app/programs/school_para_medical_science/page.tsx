import ProgramTemplate, { type ProgramData } from "@/components/ProgramTemplate";

const data: ProgramData = {
  slug: "school_para_medical_science",
  eyebrow: "Healthcare Excellence",
  title: "School of Para-Medical Science",
  description:
    "Training compassionate healthcare professionals through comprehensive medical education, clinical practice, and advanced healthcare technology.",
  features: [
    {
      icon: "🏥",
      title: "Healthcare Excellence",
      text: "Develop expertise in patient care, medical procedures, and healthcare management.",
    },
    {
      icon: "🩺",
      title: "Clinical Training",
      text: "Gain hands-on experience in clinical settings with modern medical equipment.",
    },
    {
      icon: "🔬",
      title: "Medical Technology",
      text: "Master diagnostic techniques, laboratory procedures, and medical imaging.",
    },
    {
      icon: "🚑",
      title: "Emergency Care",
      text: "Learn emergency medical services, trauma care, and critical patient management.",
    },
  ],
  tabs: [
    {
      label: "Bachelor's Program",
      courses: [
        { name: "Bachelor in Respiratory Care Technology", duration: "6 Semesters", eligibility: "12th (PCB/M)" },
        { name: "Bachelor of Physiotherapy", duration: "6 Semesters", eligibility: "12th (PCB/M)" },
        { name: "BSc Ultrasound", duration: "6 Semesters", eligibility: "12th (PCB/M)" },
        { name: "BSc in Medical Laboratory Technology", duration: "6 Semesters", eligibility: "12th (PCB/M)" },
        { name: "BSc in Respiratory Care Technology", duration: "6 Semesters", eligibility: "12th (PCB/M)" },
      ],
    },
    { label: "Master's Program", courses: [] },
    { label: "Diploma Program", courses: [] },
    { label: "Certificate Program", courses: [] },
    { label: "PG Diploma Program", courses: [] },
  ],
  intro: {
    heading: "Paramedical Sciences Programmes - An Introduction",
    text: "Paramedical sciences encompass a wide range of healthcare professions that support medical practitioners in diagnosing, treating, and managing patients. These fields include nursing, medical laboratory technology, radiology, and more. Paramedical professionals play a crucial role in delivering quality healthcare services and ensuring patient safety.",
  },
  about: {
    heading: "About School of Paramedical Sciences",
    text: "The School of Paramedical Sciences offers a comprehensive range of undergraduate, postgraduate, diploma, and certificate programs designed to equip students with the skills needed to excel in the healthcare industry. With a focus on practical learning, research-driven education, and industry collaboration, the school aims to produce highly skilled paramedical professionals ready to contribute to healthcare.",
  },
  objective: {
    heading: "Objective",
    lead: "The programmes under the School of Paramedical Sciences are designed to enable students to:",
    points: [
      "Provide a strong foundation in paramedical sciences and practices",
      "Develop skills in patient care, diagnostics, and treatment",
      "Enhance understanding of healthcare systems and protocols",
      "Foster research and analytical skills in the field of paramedical sciences",
      "Prepare students for successful careers in various sectors of healthcare",
    ],
  },
};

export default function Page() {
  return <ProgramTemplate data={data} />;
}
