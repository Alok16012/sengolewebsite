import type { NextConfig } from "next";

// The portal (the ERP) lives at portal.sengolinternationaluniversity.edu.in.
// It is served under this site's own address too — /student/login and /login
// (admin, centre, super centre and staff) open it here, with
// www.sengolinternationaluniversity.edu.in in the address bar.
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
      { source: "/admin-login", destination: "/login", permanent: false },
      { source: "/admin", destination: "/login", permanent: false },
    ];
  },
  async rewrites() {
    return {
      beforeFiles: [],
      afterFiles: [],
      fallback: [
        { source: "/student/:path*", destination: `${PORTAL}/student/:path*` },
        { source: "/login", destination: `${PORTAL}/login` },
        { source: "/register", destination: `${PORTAL}/register` },
        { source: "/dashboard", destination: `${PORTAL}/dashboard` },
        { source: "/admin/:path*", destination: `${PORTAL}/admin/:path*` },
        { source: "/center/:path*", destination: `${PORTAL}/center/:path*` },
        { source: "/super-center/:path*", destination: `${PORTAL}/super-center/:path*` },
        { source: "/apply/:path*", destination: `${PORTAL}/apply/:path*` },
        { source: "/assets/:path*", destination: `${PORTAL}/assets/:path*` },
      ],
    };
  },
};

export default nextConfig;
