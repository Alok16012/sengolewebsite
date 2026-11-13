import { NextRequest, NextResponse } from "next/server";

// The student portal calls the student-fee endpoints from its own login. It is
// served on this site's address (same origin, nothing needed), and also on the
// portal subdomain and its vercel.app address — those get CORS. The portal
// posts the JSON body as text/plain, so the browser sends no preflight.
const PORTAL_ORIGINS = new Set([
  "https://portal.sengolinternationaluniversity.edu.in",
  "https://sengoleit.vercel.app",
  "http://localhost:5173",
]);

export function withPortalCors(
  handler: (request: NextRequest) => Promise<NextResponse>
) {
  return async (request: NextRequest) => {
    const res = await handler(request);
    const origin = request.headers.get("origin") || "";
    if (PORTAL_ORIGINS.has(origin)) {
      res.headers.set("Access-Control-Allow-Origin", origin);
      res.headers.set("Vary", "Origin");
    }
    return res;
  };
}
