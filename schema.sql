-- Run once against your Neon database to create the RFQ table.
-- DATABASE_URL is injected automatically by the Vercel-Neon integration.

CREATE TABLE IF NOT EXISTS rfqs (
  id                  SERIAL       PRIMARY KEY,
  submitted_at        TIMESTAMPTZ  NOT NULL DEFAULT now(),

  -- Contact
  contact_name        TEXT         NOT NULL,
  email               TEXT         NOT NULL,
  phone               TEXT,

  -- Company
  company             TEXT         NOT NULL,
  country             TEXT         NOT NULL,
  vat                 TEXT         NOT NULL,

  -- Requirement
  polymer             TEXT         NOT NULL,
  grade               TEXT,
  application         TEXT         NOT NULL,

  -- Logistics
  quantity            TEXT         NOT NULL,
  frequency           TEXT         NOT NULL,
  delivery            TEXT         NOT NULL,
  required_by         DATE,

  -- Extras
  existing_supplier   TEXT,
  target_price_eur_t  INTEGER,
  notes               TEXT,

  -- Scoring
  free_domain_flag    BOOLEAN      NOT NULL DEFAULT false,
  lead_score          INTEGER      NOT NULL DEFAULT 0,

  -- Pipeline (used by /admin via api/admin/rfqs.ts)
  status              TEXT         NOT NULL DEFAULT 'new',
  internal_notes      TEXT
);

-- If the table already exists without the pipeline columns:
-- ALTER TABLE rfqs ADD COLUMN IF NOT EXISTS status TEXT NOT NULL DEFAULT 'new';
-- ALTER TABLE rfqs ADD COLUMN IF NOT EXISTS internal_notes TEXT;

CREATE INDEX IF NOT EXISTS rfqs_submitted_at_idx ON rfqs (submitted_at DESC);
CREATE INDEX IF NOT EXISTS rfqs_polymer_idx      ON rfqs (polymer);
CREATE INDEX IF NOT EXISTS rfqs_lead_score_idx   ON rfqs (lead_score DESC);
