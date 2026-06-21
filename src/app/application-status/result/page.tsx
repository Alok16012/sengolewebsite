import ApplicationStatusResult from "@/components/ApplicationStatusResult";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Application Status | Sengol International University",
  description:
    "View your application status, approval journey, and pay any pending fee.",
};

export default function ApplicationStatusResultPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-brand-light py-12 px-4">
      <div className="w-full max-w-[900px]">
        <Reveal>
          <ApplicationStatusResult />
        </Reveal>
      </div>
    </main>
  );
}
