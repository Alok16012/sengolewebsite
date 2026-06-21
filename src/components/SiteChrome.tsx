"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Routes that should render bare — no global header/hero/footer. The Track
// Application status pages are intentionally minimal (just the form/result).
const BARE_PREFIXES = ["/application-status"];

function isBare(pathname: string | null): boolean {
  if (!pathname) return false;
  return BARE_PREFIXES.some((p) => pathname === p || pathname.startsWith(`${p}/`) || pathname.startsWith(p));
}

export function SiteHeader() {
  const pathname = usePathname();
  if (isBare(pathname)) return null;
  return <Header />;
}

export function SiteFooter() {
  const pathname = usePathname();
  if (isBare(pathname)) return null;
  return <Footer />;
}
