import ProgramTemplate, { type ProgramData } from "@/components/ProgramTemplate";

const data: ProgramData = {
  slug: "school_hotel_management",
  eyebrow: "Hospitality Excellence",
  title: "School of Hotel Management",
  description:
    "Creating hospitality leaders through comprehensive training in hotel operations, culinary arts, and tourism management with global industry standards.",
  features: [
    {
      icon: "🏨",
      title: "Hospitality Excellence",
      text: "Master the art of hospitality management with hands-on training in luxury hotel operations.",
    },
    {
      icon: "🍳",
      title: "Culinary Arts",
      text: "Learn culinary skills, food service management, and restaurant operations from industry experts.",
    },
    {
      icon: "✈️",
      title: "Global Tourism",
      text: "Understand international tourism trends, travel management, and destination marketing.",
    },
    {
      icon: "⭐",
      title: "Service Excellence",
      text: "Develop exceptional customer service skills and quality management practices.",
    },
  ],
  tabs: [
    {
      label: "Bachelor's Program",
      courses: [
        { name: "BHM (Bachelor of Hotel Management)", duration: "8 Semester", eligibility: "10+2 (any stream)" },
        { name: "B.Sc. in Hospitality & Hotel Administration", duration: "6 Semester", eligibility: "10+2 (any stream)" },
        { name: "BA in Hotel Management", duration: "6 Semester", eligibility: "10+2 (any stream)" },
      ],
    },
    { label: "Master's Program", courses: [] },
    { label: "Diploma Program", courses: [] },
    { label: "Certificate Program", courses: [] },
  ],
  intro: {
    heading: "Hotel Management Programmes - An Introduction",
    text: "Hotel management is a dynamic field that involves the operation and management of hotels, restaurants, and other hospitality establishments. It encompasses various aspects such as food and beverage service, front office management, housekeeping, and event planning. The industry is known for its fast-paced environment and the need for excellent customer service skills.",
  },
  about: {
    heading: "About School of Hotel Management",
    text: "The School of Hotel Management offers a range of undergraduate, postgraduate, diploma, and certificate programs designed to equip students with the skills needed to excel in the hospitality industry. With a focus on practical learning, industry exposure, and research-driven education, the school aims to produce highly skilled professionals ready to meet the demands of the global hospitality sector.",
  },
  objective: {
    heading: "Objective",
    lead: "The programmes under the School of Hotel Management are designed to enable students to:",
    points: [
      "Provide a strong foundation in hotel management principles",
      "Develop skills in food and beverage service, front office management, and housekeeping",
      "Enhance customer service and communication skills",
      "Foster an understanding of hospitality operations and management",
      "Prepare students for successful careers in the hospitality industry",
    ],
  },
};

export default function Page() {
  return <ProgramTemplate data={data} />;
}
