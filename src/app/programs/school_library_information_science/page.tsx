import ProgramTemplate, { type ProgramData } from "@/components/ProgramTemplate";

const data: ProgramData = {
  slug: "school_library_information_science",
  eyebrow: "Knowledge Management",
  title: "School of Library & Information Science",
  description:
    "Empowering information professionals through comprehensive training in library science, digital information management, and modern research methodologies.",
  features: [
    {
      icon: "📚",
      title: "Information Management",
      text: "Master the organization, cataloging, and management of information resources and collections.",
    },
    {
      icon: "💾",
      title: "Digital Libraries",
      text: "Learn modern digital library systems, database management, and electronic resource organization.",
    },
    {
      icon: "🔍",
      title: "Research Methods",
      text: "Develop advanced research skills and information retrieval techniques for academic excellence.",
    },
    {
      icon: "💻",
      title: "Technology Integration",
      text: "Integrate cutting-edge technology solutions in library and information science practices.",
    },
  ],
  tabs: [
    {
      label: "Bachelor's Program",
      courses: [
        { name: "B.Sc. in Library & Information Science", duration: "6 Semester", eligibility: "12th Pass" },
        { name: "B.Lib.I.Sc. (Bachelor of Library & Information Science)", duration: "2 Semester", eligibility: "Graduation" },
      ],
    },
    { label: "Master's Program", courses: [] },
    { label: "Diploma Program", courses: [] },
  ],
  intro: {
    heading: "Library and Information Science Programmes - An Introduction",
    text: "Library and Information Science (LIS) is a field that focuses on the management, organization, and dissemination of information resources. It encompasses various aspects such as cataloging, classification, information retrieval, and digital libraries. Professionals in this field play a crucial role in managing libraries and information centers, ensuring access to knowledge and information for users.",
  },
  about: {
    heading: "About School of Library and Information Science",
    text: "The School of Library and Information Science offers a range of undergraduate, postgraduate, diploma, and certificate programs designed to equip students with the skills needed to excel in the field of library and information science. With a focus on practical learning, research-driven education, and industry collaboration, the school aims to produce highly skilled professionals ready to meet the challenges of managing information resources effectively.",
  },
  objective: {
    heading: "Objective",
    lead: "The programmes under the School of Library and Information Science are designed to enable students to:",
    points: [
      "Provide a strong foundation in library and information science principles",
      "Develop skills in information organization and retrieval",
      "Enhance understanding of digital libraries and information systems",
      "Foster research and analytical skills in the field of LIS",
      "Prepare students for successful careers in library and information management",
    ],
  },
};

export default function Page() {
  return <ProgramTemplate data={data} />;
}
