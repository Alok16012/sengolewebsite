import Hero from "@/components/Hero";
import About from "@/components/About";
import Programs from "@/components/Programs";
import LatestUpdates from "@/components/LatestUpdates";
import Scholarships from "@/components/Scholarships";
import AlumniTestimonials from "@/components/AlumniTestimonials";
import StudentFeedback from "@/components/StudentFeedback";
import AlumniBanner from "@/components/AlumniBanner";
import InfoColumns from "@/components/InfoColumns";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Programs />
      <LatestUpdates />
      <Scholarships />
      <AlumniTestimonials />
      <StudentFeedback />
      <AlumniBanner />
      <InfoColumns />
    </main>
  );
}
