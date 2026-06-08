import type { VercelRequest, VercelResponse } from "@vercel/node";
import { neon } from "@neondatabase/serverless";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const secret = process.env.CRON_SECRET;
  if (secret) {
    const auth = req.headers.authorization;
    if (auth !== `Bearer ${secret}`) {
      return res.status(401).json({ ok: false, error: "unauthorized" });
    }
  }

  const url = process.env.DATABASE_URL;
  if (!url) return res.status(500).json({ ok: false, error: "no DATABASE_URL" });

  try {
    const sql = neon(url);
    const rows = await sql`SELECT 1 AS ok, now() AS ts`;
    return res.status(200).json({ ok: true, ts: rows[0]?.ts });
  } catch (err) {
    return res.status(500).json({
      ok: false,
      error: err instanceof Error ? err.message : String(err),
    });
  }
}
