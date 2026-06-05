import Link from "next/link";

export default function NotFound() {
  return (
    <main className="bg-brand-light">
      <section className="mx-auto grid min-h-[60vh] max-w-[1400px] place-items-center px-4 py-20 text-center">
        <div>
          <p className="text-7xl font-extrabold leading-none brand-gradient-text sm:text-9xl">
            404
          </p>
          <h1 className="mt-6 text-3xl font-extrabold text-ink sm:text-4xl">
            Oops! Page Not Found
          </h1>
          <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-muted">
            The page you are looking for doesn&apos;t exist or has been moved.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex items-center gap-2 rounded-xl brand-gradient px-7 py-3.5 font-semibold text-white shadow-md transition hover:opacity-95"
          >
            🏠 Go Back Home
          </Link>
        </div>
      </section>
    </main>
  );
}
