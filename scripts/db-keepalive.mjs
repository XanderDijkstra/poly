#!/usr/bin/env node
// Touches the Neon DB during build to keep compute warm.
// Runs as part of `npm run build`, so every Vercel deploy resets the
// idle clock. Safe to run anywhere — exits 0 on any failure so a
// transient DB outage never breaks the build.

import { neon } from "@neondatabase/serverless";

const url = process.env.DATABASE_URL;
if (!url) {
  console.log("[db-keepalive] DATABASE_URL not set, skipping");
  process.exit(0);
}

try {
  const sql = neon(url);
  const rows = await sql`SELECT 1 AS ok, now() AS ts`;
  console.log(`[db-keepalive] DB OK at ${rows[0]?.ts}`);
} catch (err) {
  console.warn(
    "[db-keepalive] ping failed (not fatal):",
    err instanceof Error ? err.message : err
  );
}
