// Calling the admin app's database.
//
// The `coupons` and `students` tables are not readable with the anon key — that
// key ships inside public JavaScript, so anyone holding it could otherwise read
// every student record or mint approval codes. Everything this site needs is
// exposed instead as a SECURITY DEFINER function that returns exactly the
// fields one page uses. The functions live in website_public_api.sql in the
// admin app repo.
//
// Throws Error("not-configured") when the Supabase env vars are missing, so a
// route can tell that apart from a network failure.

export async function rpc<T>(fn: string, args: Record<string, unknown>): Promise<T> {
  const baseUrl = process.env.SUPABASE_URL;
  const anonKey = process.env.SUPABASE_ANON_KEY;
  if (!baseUrl || !anonKey) throw new Error("not-configured");

  const res = await fetch(`${baseUrl}/rest/v1/rpc/${fn}`, {
    method: "POST",
    headers: {
      apikey: anonKey,
      Authorization: `Bearer ${anonKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(args),
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`rpc ${fn} failed: ${res.status} ${await res.text()}`);
  }
  return (await res.json()) as T;
}
