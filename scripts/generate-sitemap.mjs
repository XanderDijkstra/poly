#!/usr/bin/env node
// Generates public/sitemap.xml at prebuild time.
// Reads from src/data/*.ts via a lightweight regex parse so the script
// has zero runtime dependencies (no ts-node, no esbuild).

import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join, resolve } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = resolve(__dirname, "..");
const DATA_DIR = join(ROOT, "src", "data");
const PUBLIC_DIR = join(ROOT, "public");
const SITE_FILE = join(ROOT, "src", "lib", "site.ts");

function readSlugs(filename) {
  const path = join(DATA_DIR, filename);
  if (!existsSync(path)) return [];
  const src = readFileSync(path, "utf8");
  const re = /slug:\s*"([a-z0-9-]+)"/g;
  const slugs = [];
  let match;
  while ((match = re.exec(src)) !== null) slugs.push(match[1]);
  return slugs;
}

// Use cases: each entry needs (applicationSlug, slug) for /applications/:slug/:useCase URLs.
function readUseCases() {
  const path = join(DATA_DIR, "useCases.ts");
  if (!existsSync(path)) return [];
  const src = readFileSync(path, "utf8");
  const re = /slug:\s*"([a-z0-9-]+)",\s*applicationSlug:\s*"([a-z0-9-]+)"/g;
  const out = [];
  let match;
  while ((match = re.exec(src)) !== null) {
    out.push({ slug: match[1], applicationSlug: match[2] });
  }
  return out;
}

function readBaseUrl() {
  if (!existsSync(SITE_FILE)) return "https://polymerplatform.eu";
  const src = readFileSync(SITE_FILE, "utf8");
  const m = src.match(/baseUrl:\s*"([^"]+)"/);
  return m ? m[1] : "https://polymerplatform.eu";
}

const baseUrl = readBaseUrl().replace(/\/$/, "");

const polymers = readSlugs("polymers.ts");
const grades = readSlugs("grades.ts");
const applications = readSlugs("applications.ts");
const regions = readSlugs("regions.ts");
const learnTerms = readSlugs("learnTerms.ts");
const insights = readSlugs("insights.ts");
const useCases = readUseCases();

const today = new Date().toISOString().slice(0, 10);

const STATIC_URLS = [
  { path: "/", priority: 1.0 },
  { path: "/get-quotes", priority: 0.9 },
  { path: "/polymers", priority: 0.9 },
  { path: "/grades", priority: 0.9 },
  { path: "/applications", priority: 0.9 },
  { path: "/suppliers", priority: 0.9 },
  { path: "/learn", priority: 0.9 },
  { path: "/insights", priority: 0.9 },
  { path: "/about", priority: 0.6 },
  { path: "/for-suppliers", priority: 0.7 },
  { path: "/contact", priority: 0.5 },
  { path: "/privacy", priority: 0.3 },
  { path: "/terms", priority: 0.3 },
];

const dynamicUrls = [
  ...polymers.map((s) => ({ path: `/polymers/${s}`, priority: 0.8 })),
  ...grades.map((s) => ({ path: `/grades/${s}`, priority: 0.8 })),
  ...applications.map((s) => ({ path: `/applications/${s}`, priority: 0.8 })),
  ...useCases.map((u) => ({
    path: `/applications/${u.applicationSlug}/${u.slug}`,
    priority: 0.7,
  })),
  ...regions.map((s) => ({ path: `/suppliers/${s}`, priority: 0.8 })),
  ...learnTerms.map((s) => ({ path: `/learn/${s}`, priority: 0.6 })),
  ...insights.map((s) => ({ path: `/insights/${s}`, priority: 0.7 })),
];

const all = [...STATIC_URLS, ...dynamicUrls];

const xml =
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  all
    .map(
      (u) =>
        `  <url>\n` +
        `    <loc>${baseUrl}${u.path}</loc>\n` +
        `    <lastmod>${today}</lastmod>\n` +
        `    <priority>${u.priority.toFixed(1)}</priority>\n` +
        `  </url>`
    )
    .join("\n") +
  `\n</urlset>\n`;

if (!existsSync(PUBLIC_DIR)) mkdirSync(PUBLIC_DIR, { recursive: true });
writeFileSync(join(PUBLIC_DIR, "sitemap.xml"), xml);

console.log(
  `[sitemap] wrote public/sitemap.xml: ${all.length} URLs.\n` +
    `  ${polymers.length} polymers · ${grades.length} grades · ${applications.length} applications · ` +
    `${useCases.length} use cases · ${regions.length} regions · ${learnTerms.length} learn · ${insights.length} insights`
);
