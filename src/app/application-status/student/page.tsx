import ApplicationStatusForm from "@/components/ApplicationStatusForm";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Track Student Application | Sengol International University",
  description:
    "Check your student application status using your application number and registered email, and pay your pending fee if any.",
};

export default function StudentApplicationStatusPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-brand-light py-12 px-4">
      <div className="w-full max-w-[1100px]">
        <Reveal>
          <div className="rounded-2xl bg-white p-7 shadow-[0_10px_30px_rgba(49,37,24,0.08)] ring-1 ring-brand-cream sm:p-10">
            <ApplicationStatusForm
              kind="student"
              eyebrow="🎓 Student Status Check"
              title="Find Your Student Application"
            />
          </div>
        </Reveal>
      </div>
    </main>
  );
}
