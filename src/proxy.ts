import { NextResponse } from "next/server";

// While the site is being reworked, every deployed request answers with this
// notice — no page, form or API route is reachable. `next dev` is left alone
// so the real pages can still be worked on locally.
const maintenanceHtml = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="robots" content="noindex" />
<title>Under Maintenance | Sengol International University</title>
<link rel="icon" href="/assets/logo.f9c66d3b.png" />
<style>
  body {
    margin: 0;
    min-height: 100vh;
    display: grid;
    place-items: center;
    padding: 24px;
    background: #2a1a10;
    color: #fff;
    font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
    text-align: center;
  }
  img { width: 80px; height: 80px; object-fit: contain; }
  .brand {
    margin-top: 18px;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: .16em;
    text-transform: uppercase;
    color: #f3d8bf;
  }
  h1 { margin: 14px 0 0; font-size: 30px; line-height: 1.2; }
  p { margin: 14px 0 0; font-size: 17px; color: rgba(255, 255, 255, .8); }
</style>
</head>
<body>
  <main>
    <img src="/assets/logo.f9c66d3b.png" alt="Sengol International University" />
    <div class="brand">Sengol International University</div>
    <h1>Website is under maintenance</h1>
    <p>We&rsquo;ll be back soon.</p>
  </main>
</body>
</html>`;

export function proxy() {
  if (process.env.NODE_ENV === "development") {
    return NextResponse.next();
  }

  return new NextResponse(maintenanceHtml, {
    status: 503,
    headers: {
      "content-type": "text/html; charset=utf-8",
      // Never let the CDN hold on to this, in either direction.
      "cache-control": "no-store, must-revalidate",
      "retry-after": "3600",
    },
  });
}

export const config = {
  // Everything except the bundles and the logo the notice itself needs.
  matcher: ["/((?!_next/static|_next/image|assets/|favicon.ico).*)"],
};
