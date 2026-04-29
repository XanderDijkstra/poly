import type { VercelRequest, VercelResponse } from "@vercel/node";
import { neon } from "@neondatabase/serverless";

const FREE_EMAIL_DOMAINS = [
  "gmail.com", "yahoo.com", "yahoo.co.uk", "outlook.com", "hotmail.com",
  "live.com", "icloud.com", "aol.com", "gmx.com", "gmx.de", "mail.ru",
];

const QUANTITY_SCORE: Record<string, number> = {
  "1–25 t": 10,
  "25–100 t": 25,
  "100–500 t": 50,
  "500–1,000 t": 75,
  "1,000+ t": 100,
};

const FREQUENCY_SCORE: Record<string, number> = {
  "One-off / spot": 0,
  "Monthly": 20,
  "Quarterly": 10,
  "Annual contract": 30,
};

function computeLeadScore(data: Record<string, unknown>, freeDomain: boolean): number {
  let score = 0;
  score += QUANTITY_SCORE[data.quantity as string] ?? 0;
  score += FREQUENCY_SCORE[data.frequency as string] ?? 0;
  if (!freeDomain) score += 20;
  if (data.vat) score += 20;
  if (data.phone) score += 10;
  return Math.max(0, score);
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const data = req.body as Record<string, unknown>;

  const required = [
    "contactName", "email", "company", "country", "vat",
    "polymer", "application", "quantity", "frequency", "delivery",
  ];
  for (const field of required) {
    if (!data[field]) {
      return res.status(400).json({ error: `Missing field: ${field}` });
    }
  }

  const email = (data.email as string).toLowerCase();
  const domain = email.split("@")[1] ?? "";
  const freeDomainFlag = FREE_EMAIL_DOMAINS.includes(domain);
  const leadScore = computeLeadScore(data, freeDomainFlag);

  if (!process.env.DATABASE_URL) {
    console.error("DATABASE_URL is not set");
    return res.status(500).json({ error: "Database not configured" });
  }

  try {
    const sql = neon(process.env.DATABASE_URL);

    await sql`
      INSERT INTO rfqs (
        contact_name, email, phone, company, country, vat,
        polymer, grade, application,
        quantity, frequency, delivery, required_by,
        existing_supplier, target_price_eur_t, notes,
        free_domain_flag, lead_score
      ) VALUES (
        ${data.contactName as string},
        ${email},
        ${(data.phone as string) || null},
        ${data.company as string},
        ${data.country as string},
        ${data.vat as string},
        ${data.polymer as string},
        ${(data.grade as string) || null},
        ${data.application as string},
        ${data.quantity as string},
        ${data.frequency as string},
        ${data.delivery as string},
        ${(data.requiredBy as string) || null},
        ${(data.existingSupplier as string) || null},
        ${data.targetPrice ? parseInt(data.targetPrice as string, 10) : null},
        ${(data.notes as string) || null},
        ${freeDomainFlag},
        ${leadScore}
      )
    `;

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("RFQ insert failed:", err);
    return res.status(500).json({ error: "Failed to save RFQ" });
  }
}
