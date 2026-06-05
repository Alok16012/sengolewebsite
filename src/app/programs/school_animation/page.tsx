import ProgramTemplate, { type ProgramData } from "@/components/ProgramTemplate";

const data: ProgramData = {
  slug: "school_animation",
  eyebrow: "Creative Innovation",
  title: "School of Animation",
  description:
    "Bringing imagination to life through cutting-edge animation, multimedia design, and digital storytelling techniques for entertainment and media industries.",
  features: [
    {
      icon: "🎞️",
      title: "2D/3D Animation",
      text: "Master traditional and digital animation techniques using industry-standard software.",
    },
    {
      icon: "🎨",
      title: "Digital Art",
      text: "Develop artistic skills in character design, concept art, and visual storytelling.",
    },
    {
      icon: "✨",
      title: "Motion Graphics",
      text: "Create compelling motion graphics, visual effects, and multimedia presentations.",
    },
    {
      icon: "🎮",
      title: "Game Design",
      text: "Learn game development, interactive media, and virtual reality applications.",
    },
  ],
  tabs: [
    {
      label: "Animation's Program",
      courses: [
        { name: "Certificate in 2D Animation", duration: "1 Semester", eligibility: "10th Pass or Equivalent" },
        { name: "Certificate in 3D Animation", duration: "1 Semester", eligibility: "10th Pass or Equivalent" },
        { name: "Diploma in Animation and Multimedia", duration: "2 Semesters", eligibility: "10+2 or Equivalent" },
        { name: "B.Sc in Animation and Multimedia", duration: "6 Semesters", eligibility: "10+2 or Equivalent" },
        { name: "PG Diploma in Animation and Visual Effects", duration: "2 Semesters", eligibility: "Graduation in any discipline" },
      ],
    },
  ],
  intro: {
    heading: "Animation Programmes - An Introduction",
    text: "Animation is a dynamic field that combines art and technology to create moving images and visual effects. It encompasses various techniques, including 2D and 3D animation, stop-motion, and computer-generated imagery (CGI). Animation plays a crucial role in entertainment, advertising, education, and many other industries, making it a versatile and exciting field.",
  },
  about: {
    heading: "About School of Animation",
    text: "The School of Animation offers a comprehensive range of undergraduate, postgraduate, diploma, and certificate programs designed to equip students with the skills needed to excel in the animation industry. With a focus on practical learning, creative expression, and industry collaboration, the school aims to produce highly skilled animators ready to contribute to the ever-evolving world of animation.",
  },
  objective: {
    heading: "Objective",
    lead: "The programmes under the School of Animation are designed to enable students to:",
    points: [
      "Provide a strong foundation in animation principles and techniques",
      "Develop skills in character design, storyboarding, and animation production",
      "Enhance understanding of visual storytelling and cinematography",
      "Foster creativity and innovation in animation projects",
      "Prepare students for successful careers in various sectors of animation",
    ],
  },
};

export default function Page() {
  return <ProgramTemplate data={data} />;
}
