import type { VercelRequest, VercelResponse } from "@vercel/node";
import { neon } from "@neondatabase/serverless";

const STATUSES = ["new", "contacted", "qualified", "won", "lost", "archived"];

function authorized(req: VercelRequest): boolean {
  const expected = process.env.ADMIN_PASSWORD;
  if (!expected) return false;
  const header = req.headers.authorization ?? "";
  return header === `Bearer ${expected}`;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (!authorized(req)) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  if (!process.env.DATABASE_URL) {
    return res.status(500).json({ error: "Database not configured" });
  }

  const sql = neon(process.env.DATABASE_URL);

  if (req.method === "GET") {
    try {
      const rows = await sql`
        SELECT id, submitted_at, contact_name, email, phone, company, country, vat,
               polymer, grade, application, quantity, frequency, delivery, required_by,
               existing_supplier, target_price_eur_t, notes,
               free_domain_flag, lead_score, status, internal_notes
        FROM rfqs
        ORDER BY submitted_at DESC
      `;
      return res.status(200).json({ rfqs: rows });
    } catch (err) {
      console.error("Admin list failed:", err);
      return res.status(500).json({ error: "Query failed" });
    }
  }

  if (req.method === "PATCH") {
    const body = req.body as {
      id?: number;
      status?: string;
      internal_notes?: string;
    };
    if (!body.id) return res.status(400).json({ error: "Missing id" });
    if (body.status && !STATUSES.includes(body.status)) {
      return res.status(400).json({ error: "Invalid status" });
    }

    try {
      await sql`
        UPDATE rfqs
        SET status = COALESCE(${body.status ?? null}, status),
            internal_notes = COALESCE(${body.internal_notes ?? null}, internal_notes)
        WHERE id = ${body.id}
      `;
      return res.status(200).json({ ok: true });
    } catch (err) {
      console.error("Admin update failed:", err);
      return res.status(500).json({ error: "Update failed" });
    }
  }

  return res.status(405).json({ error: "Method not allowed" });
}
