import Image from "next/image";
import Reveal from "./Reveal";

export default function AlumniBanner() {
  return (
    <section className="bg-white pb-16 sm:pb-20">
      <div className="mx-auto max-w-[1400px] px-4">
        <Reveal>
          <div className="grid overflow-hidden rounded-3xl shadow-[0_20px_50px_rgba(49,37,24,0.15)] md:grid-cols-2">
            <div className="relative min-h-[300px]">
              <Image
                src="/images/courses/library.jpg"
                alt="Alumni graduation"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 brand-gradient opacity-40" />
            </div>
            <div className="relative brand-gradient p-10 text-white">
              <span className="absolute right-8 top-6 text-7xl leading-none text-white/15">”</span>
              <h3 className="text-2xl font-extrabold">Alumni Testimonial</h3>
              <p className="mt-2 flex items-center gap-2 text-white/80">
                <span>🎓</span> Jane Smith (M.Sc.)
              </p>
              <p className="mt-5 text-lg leading-relaxed text-white/95">
                Thanks to the unparalleled mentorship and excellent from the Computer Science
                teachers at Sengol International University. I was able to land my dream job as a
                certified ethical hacker in Cybersecurity.
              </p>
              <div className="mt-8 flex items-center justify-between">
                <div className="flex gap-2">
                  {[0, 1, 2, 3].map((i) => (
                    <span
                      key={i}
                      className={`h-2.5 w-2.5 rounded-full ${i === 0 ? "bg-white" : "bg-white/40"}`}
                    />
                  ))}
                </div>
                <a href="#" className="inline-flex items-center gap-2 font-semibold text-white">
                  View All &gt; <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
