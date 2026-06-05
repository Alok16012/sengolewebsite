import Hero from "@/components/Hero";
import About from "@/components/About";
import Programs from "@/components/Programs";
import LatestUpdates from "@/components/LatestUpdates";
import Scholarships from "@/components/Scholarships";
import StudentFeedback from "@/components/StudentFeedback";
import InfoColumns from "@/components/InfoColumns";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Programs />
      <LatestUpdates />
      <Scholarships />
      <StudentFeedback />
      <InfoColumns />
    </main>
  );
}
