import type { NextConfig } from "next";

// The student portal (the ERP) lives at portal.sengolinternationaluniversity.edu.in.
// It is served under this site's own address too — /student/login opens it here,
// with www.sengolinternationaluniversity.edu.in in the address bar.
//
// Fallback rewrites only apply when this site has no page or file at the path,
// so nothing of the website is shadowed. /assets/* carries the portal's
// scripts and images (this site's own /assets files are found first).
const PORTAL = "https://portal.sengolinternationaluniversity.edu.in";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/student-login", destination: "/student/login", permanent: false },
      { source: "/student", destination: "/student/login", permanent: false },
    ];
  },
  async rewrites() {
    return {
      beforeFiles: [],
      afterFiles: [],
      fallback: [
        { source: "/student/:path*", destination: `${PORTAL}/student/:path*` },
        { source: "/assets/:path*", destination: `${PORTAL}/assets/:path*` },
      ],
    };
  },
};

export default nextConfig;
