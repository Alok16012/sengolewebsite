"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navItems } from "@/data/content";

const socials = [
  { label: "Facebook", path: "M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.13 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.9 3.78-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.81 8.43-4.94 8.43-9.94Z" },
  { label: "LinkedIn", path: "M6.94 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM7 8.48H3V21h4V8.48Zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68Z" },
  { label: "Instagram", path: "M12 2c2.72 0 3.06.01 4.12.06 1.07.05 1.8.22 2.43.47.66.25 1.21.59 1.77 1.15.56.56.9 1.11 1.15 1.77.25.63.42 1.36.47 2.43.05 1.06.06 1.4.06 4.12s-.01 3.06-.06 4.12c-.05 1.07-.22 1.8-.47 2.43-.25.66-.59 1.21-1.15 1.77-.56.56-1.11.9-1.77 1.15-.63.25-1.36.42-2.43.47-1.06.05-1.4.06-4.12.06s-3.06-.01-4.12-.06c-1.07-.05-1.8-.22-2.43-.47a4.9 4.9 0 0 1-1.77-1.15 4.9 4.9 0 0 1-1.15-1.77c-.25-.63-.42-1.36-.47-2.43C2.01 15.06 2 14.72 2 12s.01-3.06.06-4.12c.05-1.07.22-1.8.47-2.43.25-.66.59-1.21 1.15-1.77.56-.56 1.11-.9 1.77-1.15.63-.25 1.36-.42 2.43-.47C8.94 2.01 9.28 2 12 2Zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 8.25a3.25 3.25 0 1 1 0-6.5 3.25 3.25 0 0 1 0 6.5ZM17.5 7.3a1.17 1.17 0 1 0 0-2.34 1.17 1.17 0 0 0 0 2.34Z" },
  { label: "Twitter", path: "M22 5.92c-.74.33-1.53.55-2.36.65a4.12 4.12 0 0 0 1.8-2.27c-.8.47-1.68.81-2.62 1a4.1 4.1 0 0 0-7 3.74 11.65 11.65 0 0 1-8.46-4.29 4.1 4.1 0 0 0 1.27 5.47c-.67-.02-1.3-.2-1.85-.5v.05a4.1 4.1 0 0 0 3.29 4.02c-.6.16-1.23.18-1.85.07a4.11 4.11 0 0 0 3.83 2.85A8.23 8.23 0 0 1 2 18.41a11.62 11.62 0 0 0 6.29 1.84c7.55 0 11.68-6.25 11.68-11.67l-.01-.53A8.3 8.3 0 0 0 22 5.92Z" },
  { label: "YouTube", path: "M23 12s0-3.2-.41-4.74a2.48 2.48 0 0 0-1.74-1.75C19.31 5.1 12 5.1 12 5.1s-7.31 0-8.85.41A2.48 2.48 0 0 0 1.4 7.26C1 8.8 1 12 1 12s0 3.2.41 4.74c.23.85.89 1.52 1.74 1.75 1.54.41 8.85.41 8.85.41s7.31 0 8.85-.41a2.48 2.48 0 0 0 1.74-1.75C23 15.2 23 12 23 12ZM9.75 14.85v-5.7L15.5 12l-5.75 2.85Z" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [loginOpen, setLoginOpen] = useState(false);
  const [search, setSearch] = useState<Record<string, string>>({});

  // Dropdowns with many items get a search box
  const isSearchable = (count: number) => count > 8;
  const filterItems = (
    label: string,
    items: { label: string; href: string }[]
  ) => {
    const q = (search[label] ?? "").trim().toLowerCase();
    return q ? items.filter((d) => d.label.toLowerCase().includes(q)) : items;
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
    setOpenGroup(null);
  };

  return (
    <header className="relative z-50">
      {/* Top utility bar */}
      <div className="brand-gradient text-white text-sm">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-4 py-1.5">
          <span className="font-medium hidden sm:block">
            Welcome to Sengol International University
          </span>
          <div className="flex items-center gap-3 ml-auto text-[13px]">
            <span className="hidden md:inline-flex items-center gap-1 rounded-full bg-white/15 px-3 py-1">
              🎓 Admission Open: 2026-2027
            </span>
            <span className="hidden md:inline-flex items-center gap-1 rounded-full bg-white/15 px-3 py-1">
              📞 +91-9205299887
            </span>
            <div className="relative">
              <button
                type="button"
                onClick={() => setLoginOpen((o) => !o)}
                aria-expanded={loginOpen}
                aria-label="Login options"
                className="inline-flex items-center gap-1 rounded-full bg-white/15 px-3 py-1 transition hover:bg-white/25"
              >
                👤 Login
                <span className={`text-[10px] transition-transform ${loginOpen ? "rotate-180" : ""}`}>
                  ▾
                </span>
              </button>
              {loginOpen && (
                <>
                  <button
                    type="button"
                    aria-label="Close login menu"
                    onClick={() => setLoginOpen(false)}
                    className="fixed inset-0 z-40 cursor-default"
                  />
                  <div className="absolute right-0 top-full z-50 mt-2 w-52 overflow-hidden rounded-xl border border-brand-cream bg-white text-ink shadow-[0_18px_40px_rgba(49,37,24,0.18)]">
                    <a
                      href="https://sengoleit.vercel.app/login"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setLoginOpen(false)}
                      className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition hover:bg-brand-cream hover:text-brand-1"
                    >
                      🏛️ Centre Login
                    </a>
                    <a
                      href="https://sengoleit.vercel.app/student/login"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setLoginOpen(false)}
                      className="flex items-center gap-2 border-t border-brand-cream px-4 py-2.5 text-sm font-medium transition hover:bg-brand-cream hover:text-brand-1"
                    >
                      🎓 Student Portal
                    </a>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Brand header */}
      <div className="bg-white">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-4 py-3">
          <Link href="/" className="flex items-center gap-2 sm:gap-3">
            <Image
              src="/assets/logo.f9c66d3b.png"
              alt="Sengol International University"
              width={72}
              height={72}
              className="h-11 w-11 shrink-0 object-contain sm:h-14 sm:w-14 lg:h-16 lg:w-16"
            />
            <div className="min-w-0">
              <h1 className="brand-gradient-text text-[15px] font-extrabold leading-tight tracking-tight sm:text-xl lg:text-2xl">
                SENGOL INTERNATIONAL UNIVERSITY
              </h1>
              <p className="hidden text-xs text-muted sm:block">
                Established by Act No. 14 of 2025 Sikkim State Legislative Assembly
              </p>
            </div>
          </Link>
          <div className="hidden lg:flex flex-col items-end gap-2">
            <a
              href="mailto:info@sengolinternationaluniversity.edu.in"
              className="flex items-center gap-2 text-sm font-medium text-brand-1"
            >
              ✉️ info@sengolinternationaluniversity.edu.in
            </a>
            <div className="flex items-center gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="grid h-9 w-9 place-items-center rounded-full bg-brand-cream text-brand-3 transition hover:bg-brand-1 hover:text-white"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Sticky nav */}
      <nav
        className={`sticky top-0 z-50 border-y border-brand-cream bg-white/95 backdrop-blur transition-shadow ${
          scrolled ? "shadow-[0_8px_24px_rgba(49,37,24,0.10)]" : ""
        }`}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-4 py-2">
          {/* Desktop menu */}
          <ul className="hidden items-center gap-0.5 text-[15px] font-semibold text-ink lg:flex">
            {navItems.map((n) => (
              <li key={n.label} className="group relative">
                <Link
                  href={n.href}
                  className="flex items-center gap-1 rounded-md px-3 py-2.5 transition hover:text-brand-1"
                >
                  {n.label}
                  {n.dropdown && <span className="text-xs text-brand-1">▾</span>}
                </Link>
                {n.dropdown && (
                  <div className="invisible absolute left-0 top-full z-50 w-72 translate-y-1 rounded-xl border border-brand-cream bg-white p-2 opacity-0 shadow-[0_18px_40px_rgba(49,37,24,0.16)] transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    {isSearchable(n.dropdown.length) && (
                      <input
                        type="text"
                        value={search[n.label] ?? ""}
                        onChange={(e) =>
                          setSearch((s) => ({ ...s, [n.label]: e.target.value }))
                        }
                        placeholder={`Search ${n.label.toLowerCase()}…`}
                        className="mb-2 w-full rounded-lg border border-brand-cream bg-brand-light/40 px-3 py-2 text-sm font-medium text-ink outline-none transition focus:border-brand-1 focus:bg-white"
                      />
                    )}
                    <div className="max-h-[60vh] overflow-y-auto">
                      {filterItems(n.label, n.dropdown).map((d) => (
                        <Link
                          key={d.href + d.label}
                          href={d.href}
                          className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-ink/80 transition hover:bg-brand-cream hover:text-brand-1"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-brand-1" />
                          {d.label}
                        </Link>
                      ))}
                      {filterItems(n.label, n.dropdown).length === 0 && (
                        <div className="px-3 py-4 text-center text-sm text-muted">
                          No matches found
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile: hamburger */}
          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-brand-3 ring-1 ring-brand-cream transition hover:bg-brand-cream lg:hidden"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {menuOpen ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <>
                  <path d="M4 7h16" />
                  <path d="M4 12h16" />
                  <path d="M4 17h16" />
                </>
              )}
            </svg>
          </button>

          <div className="flex items-center gap-2">
            <Link
              href="/application-form"
              className="hidden items-center gap-2 rounded-[10px] bg-brand-3 px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90 md:inline-flex"
            >
              📥 Download
            </Link>
            <Link
              href="/application-form"
              className="brand-gradient inline-flex items-center gap-1.5 rounded-[10px] px-3.5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90 sm:gap-2 sm:px-5"
            >
              🎓 <span className="hidden sm:inline">Apply Now</span>
              <span className="sm:hidden">Apply</span> <span>→</span>
            </Link>
          </div>
        </div>

        {/* Mobile menu panel */}
        {menuOpen && (
          <div className="lg:hidden">
            {/* Backdrop */}
            <button
              type="button"
              aria-label="Close menu"
              onClick={closeMenu}
              className="fixed inset-0 top-0 z-40 bg-black/40 backdrop-blur-sm"
            />
            <div className="absolute inset-x-0 top-full z-50 flex max-h-[82vh] flex-col overflow-y-auto border-t border-brand-cream bg-white shadow-2xl">
              {/* Drawer heading */}
              <div className="flex items-center justify-between bg-brand-light/60 px-4 py-3">
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-brand-1">
                  Menu
                </span>
                <button
                  type="button"
                  onClick={closeMenu}
                  aria-label="Close menu"
                  className="text-sm font-semibold text-muted transition hover:text-brand-1"
                >
                  Close ✕
                </button>
              </div>

              <ul className="px-2 py-2 text-[15px] font-semibold text-ink">
                {navItems.map((n) => (
                  <li key={n.label} className="border-b border-brand-cream/60 last:border-0">
                    {n.dropdown ? (
                      <>
                        <div className="flex items-center">
                          <Link
                            href={n.href}
                            onClick={closeMenu}
                            className="flex-1 rounded-md px-3 py-3 transition hover:text-brand-1"
                          >
                            {n.label}
                          </Link>
                          <button
                            type="button"
                            aria-label={`Toggle ${n.label}`}
                            onClick={() =>
                              setOpenGroup((g) => (g === n.label ? null : n.label))
                            }
                            className={`grid h-9 w-9 place-items-center rounded-lg transition ${
                              openGroup === n.label
                                ? "bg-brand-1 text-white"
                                : "bg-brand-cream text-brand-1"
                            }`}
                          >
                            <span
                              className={`transition-transform ${
                                openGroup === n.label ? "rotate-180" : ""
                              }`}
                            >
                              ▾
                            </span>
                          </button>
                        </div>
                        {openGroup === n.label && (
                          <div className="mb-2 ml-3 border-l-2 border-brand-cream pl-2">
                            {isSearchable(n.dropdown.length) && (
                              <input
                                type="text"
                                value={search[n.label] ?? ""}
                                onChange={(e) =>
                                  setSearch((s) => ({ ...s, [n.label]: e.target.value }))
                                }
                                placeholder={`Search ${n.label.toLowerCase()}…`}
                                className="mb-1.5 ml-1 w-[calc(100%-0.25rem)] rounded-lg border border-brand-cream bg-brand-light/40 px-3 py-2 text-sm font-medium text-ink outline-none transition focus:border-brand-1 focus:bg-white"
                              />
                            )}
                            <div className="max-h-72 space-y-0.5 overflow-y-auto">
                              {filterItems(n.label, n.dropdown).map((d) => (
                                <Link
                                  key={d.href + d.label}
                                  href={d.href}
                                  onClick={closeMenu}
                                  className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-ink/75 transition hover:bg-brand-cream hover:text-brand-1"
                                >
                                  <span className="h-1.5 w-1.5 rounded-full bg-brand-1" />
                                  {d.label}
                                </Link>
                              ))}
                              {filterItems(n.label, n.dropdown).length === 0 && (
                                <div className="px-3 py-3 text-sm text-muted">No matches found</div>
                              )}
                            </div>
                          </div>
                        )}
                      </>
                    ) : (
                      <Link
                        href={n.href}
                        onClick={closeMenu}
                        className="block rounded-md px-3 py-3 transition hover:text-brand-1"
                      >
                        {n.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>

              {/* Login links */}
              <div className="border-t border-brand-cream px-4 py-3">
                <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-muted">
                  Login Portals
                </span>
                <div className="mt-2 grid grid-cols-2 gap-2">
                  <a
                    href="https://sengoleit.vercel.app/login"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMenu}
                    className="flex items-center justify-center gap-1.5 rounded-[10px] bg-brand-cream px-3 py-2.5 text-sm font-semibold text-brand-1 transition hover:bg-brand-1 hover:text-white"
                  >
                    🏛️ Centre
                  </a>
                  <a
                    href="https://sengoleit.vercel.app/student/login"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMenu}
                    className="flex items-center justify-center gap-1.5 rounded-[10px] bg-brand-cream px-3 py-2.5 text-sm font-semibold text-brand-1 transition hover:bg-brand-1 hover:text-white"
                  >
                    🎓 Student
                  </a>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex gap-2 px-4 pb-3">
                <Link
                  href="/application-form"
                  onClick={closeMenu}
                  className="flex-1 rounded-[10px] bg-brand-3 px-4 py-2.5 text-center text-sm font-semibold text-white"
                >
                  📥 Download
                </Link>
                <Link
                  href="/enquiry-form"
                  onClick={closeMenu}
                  className="brand-gradient flex-1 rounded-[10px] px-4 py-2.5 text-center text-sm font-semibold text-white"
                >
                  📝 Enquire
                </Link>
              </div>

              {/* Contact + socials */}
              <div className="border-t border-brand-cream bg-brand-light/40 px-4 py-3">
                <a
                  href="mailto:info@sengolinternationaluniversity.edu.in"
                  className="block truncate text-sm font-medium text-brand-1"
                >
                  ✉️ info@sengolinternationaluniversity.edu.in
                </a>
                <a href="tel:+919205299887" className="mt-1 block text-sm font-medium text-ink/70">
                  📞 +91-9205299887
                </a>
                <div className="mt-3 flex items-center gap-2">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href="#"
                      aria-label={s.label}
                      className="grid h-9 w-9 place-items-center rounded-full bg-brand-cream text-brand-3 transition hover:bg-brand-1 hover:text-white"
                    >
                      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                        <path d={s.path} />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
