#!/usr/bin/env node
// Postbuild prerenderer.
//
// For every known route, writes dist/<route>/index.html with route-specific
// <title>, meta description, canonical, og:* and robots tags, plus real
// crawlable body content injected into the #root div. React replaces #root
// on load, so browsers behave exactly as before — but crawlers that don't
// execute JS (social previews, GPTBot, ClaudeBot) and Google's first-pass
// crawl now see unique, correct HTML per URL instead of the homepage shell.
//
// Every valid route gets a static file, which lets vercel.json drop the SPA
// catch-all rewrite: unknown URLs now return a real 404 (dist/404.html)
// instead of a soft-404 200.
//
// Titles/descriptions intentionally mirror the usePageMeta() calls in
// src/pages/* — keep them in sync when page meta changes.

import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import esbuild from "esbuild";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const DIST = path.join(ROOT, "dist");
const SITE_URL = "https://polymerplatform.eu";
const SITE_NAME = "Polymer Platform";

const esc = (s) =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

// Transpile the pure-TS data modules with esbuild and import them, so the
// prerenderer reads the exact same data as the app (no regex parsing).
async function loadData() {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "poly-prerender-"));
  const mods = {};
  const files = ["polymers", "grades", "applications", "useCases", "regions", "learnTerms", "insights"];
  for (const f of files) {
    const src = fs.readFileSync(path.join(ROOT, "src", "data", `${f}.ts`), "utf8");
    const { code } = await esbuild.transform(src, { loader: "ts", format: "esm" });
    const out = path.join(tmp, `${f}.mjs`);
    fs.writeFileSync(out, code);
    mods[f] = await import(pathToFileURL(out).href);
  }
  return mods;
}

function renderPage(template, route) {
  const url = SITE_URL + route.path;
  let html = template;
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(route.title)}</title>`);
  html = html.replace(
    /<meta\s+name="description"[\s\S]*?\/>/,
    `<meta name="description" content="${esc(route.description)}" />`
  );
  const extra = [
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:title" content="${esc(route.title)}" />`,
    `<meta property="og:description" content="${esc(route.description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta name="robots" content="${route.noindex ? "noindex, nofollow" : "index, follow"}" />`,
  ].join("\n    ");
  html = html.replace("</head>", `  ${extra}\n  </head>`);
  if (route.bodyHtml) {
    html = html.replace(/<div id="root"><\/div>/, `<div id="root">${route.bodyHtml}</div>`);
  }
  return html;
}

function writeRoute(template, route) {
  const html = renderPage(template, route);
  const segments = route.path.replace(/^\//, "").replace(/\/$/, "");
  const targetDir = segments ? path.join(DIST, segments) : DIST;
  fs.mkdirSync(targetDir, { recursive: true });
  fs.writeFileSync(path.join(targetDir, "index.html"), html);
}

// ---------- Body content helpers ----------

const p = (text) => `<p>${esc(text)}</p>`;
const h = (level, text) => `<h${level}>${esc(text)}</h${level}>`;
const ul = (items) => `<ul>${items.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>`;
const linkList = (items) =>
  `<ul>${items.map((i) => `<li><a href="${i.href}">${esc(i.label)}</a></li>`).join("")}</ul>`;
const faqBlock = (faqs) =>
  faqs.map((f) => `${h(3, f.q)}${p(f.a)}`).join("");

// ---------- Static routes (mirror usePageMeta in src/pages/*) ----------

const STATIC_ROUTES = [
  {
    path: "/",
    title: `${SITE_NAME} — European polymer sourcing for procurement teams`,
    description:
      "Source PP, PE, PVC, PET and recycled polymers from verified European suppliers. Submit one RFQ, receive multiple quotes within 48 hours. Free for buyers.",
  },
  {
    path: "/get-quotes",
    title: `Request polymer quotes | ${SITE_NAME}`,
    description:
      "Submit one RFQ, get quotes from multiple verified suppliers within 48 hours. Free for procurement teams.",
  },
  {
    path: "/get-quotes/sent",
    title: `RFQ received | ${SITE_NAME}`,
    description: "Your RFQ has been received. Verified suppliers will respond within 48 hours.",
    noindex: true,
  },
  {
    path: "/polymers",
    title: `Polymer types and grades for European procurement | ${SITE_NAME}`,
    description:
      "12 polymer families covered: PP, PE (HDPE, LDPE, LLDPE, MDPE), PVC, PET, PS and recycled streams. Specifications, market context, applications, and verified suppliers.",
  },
  {
    path: "/grades",
    title: `Polymer grades catalogue: PP, PE, PVC, PET specs | ${SITE_NAME}`,
    description: "", // interpolated with live grade count in addDynamicRoutes
  },
  {
    path: "/applications",
    title: `Polymer applications: 15 industries, recommended grades | ${SITE_NAME}`,
    description:
      "Match the right polymer to your application: food packaging, automotive, medical, construction, agriculture and more. Recommended grades, regulations, and verified European suppliers.",
  },
  {
    path: "/suppliers",
    title: `Polymer suppliers across Europe | ${SITE_NAME}`,
    description:
      "Source PP, PE, PVC, PET and recycled grades from suppliers in 18 European and connected regions. Logistics, lead times, regional market overview.",
  },
  {
    path: "/learn",
    title: `Learn about polymer sourcing | ${SITE_NAME}`,
    description:
      "Glossary and education for polymer procurement teams. Technical, regulatory, commercial and logistics topics, clearly explained.",
  },
  {
    path: "/insights",
    title: `Polymer market insights | ${SITE_NAME}`,
    description:
      "Quarterly market commentary, supply-chain analysis, and regulatory deep-dives for European polymer procurement teams.",
  },
  {
    path: "/about",
    title: `About ${SITE_NAME}: independent polymer marketplace`,
    description:
      "Independent of any single trader. Built for procurement teams. How Polymer Platform works, our editorial standards, and supplier criteria.",
  },
  {
    path: "/for-suppliers",
    title: `Receive qualified RFQs from European procurement teams | ${SITE_NAME}`,
    description:
      "Stop chasing leads at trade shows. Receive verified RFQs from procurement managers actively sourcing PP, PE, PVC, PET and recycled grades. Pay only for qualified matches.",
  },
  {
    path: "/contact",
    title: `Contact ${SITE_NAME}`,
    description: "Get in touch with the Polymer Platform team. Buyers, suppliers, press.",
  },
  {
    path: "/privacy",
    title: `Privacy policy | ${SITE_NAME}`,
    description: "How Polymer Platform processes RFQ submissions and supplier data under GDPR.",
  },
  {
    path: "/terms",
    title: `Terms of service | ${SITE_NAME}`,
    description: "Terms governing use of Polymer Platform by buyers and suppliers.",
  },
  {
    path: "/admin",
    title: `Admin · ${SITE_NAME}`,
    description: "Internal RFQ admin.",
    noindex: true,
  },
];

// ---------- Main ----------

async function build() {
  if (!fs.existsSync(path.join(DIST, "index.html"))) {
    console.error("dist/index.html not found — run vite build first");
    process.exit(1);
  }
  // Sanitize: if dist/index.html was already prerendered (script re-run
  // without a fresh vite build), strip the previously injected tags and
  // body content so we never double-inject. The injected body contains no
  // nested <div>, so the #root reset below is safe.
  const template = fs
    .readFileSync(path.join(DIST, "index.html"), "utf8")
    .replace(/^\s*<link rel="canonical"[^>]*>\n/gm, "")
    .replace(/^\s*<meta property="og:(?:title|description|url)"[^>]*>\n/gm, "")
    .replace(/^\s*<meta name="robots"[^>]*>\n/gm, "")
    .replace(/<div id="root">[\s\S]*?<\/div>/, '<div id="root"></div>');
  const data = await loadData();

  const routes = [...STATIC_ROUTES.map((r) => ({ ...r }))];
  addDynamicRoutes(routes, data);

  const seen = new Set();
  const uniq = routes.filter((r) => (seen.has(r.path) ? false : (seen.add(r.path), true)));
  for (const route of uniq) writeRoute(template, route);

  // Real 404 page for unknown URLs (served by Vercel now that the SPA
  // catch-all rewrite is gone).
  const notFound = renderPage(template, {
    path: "/404",
    title: `Page not found | ${SITE_NAME}`,
    description: "This page does not exist.",
    noindex: true,
    bodyHtml: `${h(1, "Page not found")}${p("The page you requested does not exist.")}<p><a href="/">Back to the homepage</a></p>`,
  });
  fs.writeFileSync(path.join(DIST, "404.html"), notFound);

  const withBody = uniq.filter((r) => r.bodyHtml).length;
  const indexable = uniq.filter((r) => !r.noindex).length;
  console.log(
    `[prerender] wrote ${uniq.length} routes (${withBody} with body content, ${indexable} indexable) + 404.html`
  );
}

function addDynamicRoutes(routes, data) {
  const { polymers } = data.polymers;
  const { grades } = data.grades;
  const { applications } = data.applications;
  const { useCases } = data.useCases;
  const { regions } = data.regions;
  const { learnTerms } = data.learnTerms;
  const { insights } = data.insights;

  for (const pol of polymers) {
    const polymerGrades = grades.filter((g) => g.polymerSlug === pol.slug);
    const specs = [
      `Density: ${pol.density}`,
      pol.mfiRange ? `MFI range: ${pol.mfiRange}` : null,
      pol.meltingPoint ? `Melting point: ${pol.meltingPoint}` : null,
      pol.formula ? `Formula: ${pol.formula}` : null,
      `Recyclable: ${pol.recyclable ? "Yes" : "No"}`,
      `Major producers: ${pol.producers.join(", ")}`,
    ].filter(Boolean);
    routes.push({
      path: `/polymers/${pol.slug}`,
      title: `Buy ${pol.name} (${pol.abbreviation}) in Europe: grades, suppliers, prices | ${SITE_NAME}`,
      description: `Source ${pol.name} (${pol.abbreviation}) from verified European traders and distributors. ${polymerGrades.length} grades catalogued, plus market context and pricing drivers. Free RFQ — quotes in 48 hours.`,
      bodyHtml:
        h(1, `Buy ${pol.name} (${pol.abbreviation}) in Europe`) +
        p(pol.shortDescription) +
        ul(specs) +
        (pol.marketContext ?? []).map(p).join("") +
        (pol.pricingDrivers?.length ? h(2, "Pricing drivers") + pol.pricingDrivers.map(p).join("") : "") +
        (pol.commonQuestions?.length ? h(2, "Frequently asked questions") + faqBlock(pol.commonQuestions) : "") +
        (polymerGrades.length
          ? h(2, `${pol.abbreviation} grades`) +
            linkList(polymerGrades.map((g) => ({ href: `/grades/${g.slug}`, label: g.name })))
          : ""),
    });
  }

  for (const g of grades) {
    const pol = polymers.find((x) => x.slug === g.polymerSlug);
    const specs = [
      g.mfi ? `MFI: ${g.mfi}` : null,
      g.density ? `Density: ${g.density}` : null,
      `Process: ${g.process}`,
      `Application: ${g.application}`,
      g.equivalents?.length ? `Equivalent grades: ${g.equivalents.join(", ")}` : null,
      g.packaging?.length ? `Packaging: ${g.packaging.join(", ")}` : null,
    ].filter(Boolean);
    routes.push({
      path: `/grades/${g.slug}`,
      title: `${g.name} — specs, equivalents and European suppliers | ${SITE_NAME}`,
      description: `${g.name}: full property datasheet, processing notes, equivalent grades and verified European suppliers. Submit RFQ for quotes within 48 hours.`,
      bodyHtml:
        h(1, g.name) +
        p(g.shortDescription) +
        ul(specs) +
        (pol ? `<p><a href="/polymers/${pol.slug}">All ${esc(pol.name)} (${esc(pol.abbreviation)}) grades and suppliers</a></p>` : ""),
    });
  }

  for (const app of applications) {
    const appUseCases = useCases.filter((u) => u.applicationSlug === app.slug);
    routes.push({
      path: `/applications/${app.slug}`,
      title: `${app.name}: which plastic and polymer grade to use | ${SITE_NAME}`,
      description: `Which plastic for ${app.name.toLowerCase()}? Compare polymer options (PP, PE, PVC, PET), regulatory requirements, recommended grades, and verified European suppliers. Free RFQ — quotes in 48 hours.`,
      bodyHtml:
        h(1, `${app.name}: which plastic to use`) +
        p(app.shortDescription) +
        (app.regulations?.length ? h(2, "Key regulations") + ul(app.regulations) : "") +
        (app.commonQuestions?.length ? h(2, "Frequently asked questions") + faqBlock(app.commonQuestions) : "") +
        (appUseCases.length
          ? h(2, "Use cases") +
            linkList(appUseCases.map((u) => ({ href: `/applications/${app.slug}/${u.slug}`, label: u.name })))
          : ""),
    });

    for (const u of appUseCases) {
      routes.push({
        path: `/applications/${app.slug}/${u.slug}`,
        title: `${u.name}: polymer sourcing guide | ${SITE_NAME}`,
        description: `Polymer sourcing for ${u.name.toLowerCase()}: recommended grades, key requirements, and procurement notes.`,
        bodyHtml:
          h(1, `${u.name}: polymer sourcing guide`) +
          p(u.shortDescription) +
          (u.keyRequirements?.length ? h(2, "Key requirements") + ul(u.keyRequirements) : "") +
          (u.procurementNotes ? h(2, "Procurement notes") + p(u.procurementNotes) : "") +
          `<p><a href="/applications/${app.slug}">More on ${esc(app.name.toLowerCase())}</a></p>`,
      });
    }
  }

  for (const r of regions) {
    routes.push({
      path: `/suppliers/${r.slug}`,
      title: `Polymer suppliers in ${r.name} | ${SITE_NAME}`,
      description: `Source PP, PE, PVC and other polymers from suppliers serving ${r.name}. Logistics, lead times, market overview.`,
      bodyHtml:
        h(1, `Polymer suppliers in ${r.name}`) +
        p(r.shortDescription) +
        (r.ports?.length ? h(2, "Key ports and logistics") + ul(r.ports) : "") +
        (r.industries?.length ? h(2, "Main polymer-consuming industries") + ul(r.industries) : ""),
    });
  }

  for (const t of learnTerms) {
    routes.push({
      path: `/learn/${t.slug}`,
      title: `${t.name}: what it means for polymer procurement | ${SITE_NAME}`,
      description: t.shortDescription,
      bodyHtml: h(1, t.name) + p(t.shortDescription),
    });
  }

  for (const post of insights) {
    const sections = (post.sections ?? [])
      .map(
        (s) =>
          h(2, s.heading) +
          (s.paragraphs ?? []).map(p).join("") +
          (s.bullets?.length ? ul(s.bullets) : "") +
          (s.callout ? p(`${s.callout.label ? s.callout.label + ": " : ""}${s.callout.text}`) : "")
      )
      .join("");
    routes.push({
      path: `/insights/${post.slug}`,
      title: `${post.title} | ${SITE_NAME}`,
      description: post.excerpt,
      bodyHtml:
        h(1, post.title) +
        p(post.excerpt) +
        (post.keyTakeaways?.length ? h(2, "Key takeaways") + ul(post.keyTakeaways) : "") +
        sections,
    });
  }

  // Overview pages: crawlable link hubs into every detail page.
  const overviewLinks = {
    "/polymers": polymers.map((x) => ({ href: `/polymers/${x.slug}`, label: `${x.name} (${x.abbreviation})` })),
    "/grades": grades.map((x) => ({ href: `/grades/${x.slug}`, label: x.name })),
    "/applications": applications.map((x) => ({ href: `/applications/${x.slug}`, label: x.name })),
    "/suppliers": regions.map((x) => ({ href: `/suppliers/${x.slug}`, label: x.name })),
    "/learn": learnTerms.map((x) => ({ href: `/learn/${x.slug}`, label: x.name })),
    "/insights": insights.map((x) => ({ href: `/insights/${x.slug}`, label: x.title })),
  };
  for (const route of routes) {
    if (overviewLinks[route.path]) {
      route.bodyHtml = h(1, route.title.split("|")[0].trim()) + p(route.description) + linkList(overviewLinks[route.path]);
    }
  }

  // /grades overview description interpolates the live grade count.
  const gradesOverview = routes.find((r) => r.path === "/grades");
  if (gradesOverview) {
    gradesOverview.description = `${grades.length} polymer grades catalogued across PP, PE, PVC, PET and recycled streams. Properties, processing, equivalents, and verified European suppliers.`;
  }

  // Homepage: crawlable intro + hub links.
  const home = routes.find((r) => r.path === "/");
  if (home) {
    home.bodyHtml =
      h(1, "European polymer sourcing for procurement teams") +
      p(home.description) +
      linkList([
        { href: "/polymers", label: "Polymer types" },
        { href: "/grades", label: "Grades catalogue" },
        { href: "/applications", label: "Applications" },
        { href: "/suppliers", label: "Suppliers by region" },
        { href: "/learn", label: "Learn" },
        { href: "/insights", label: "Market insights" },
        { href: "/get-quotes", label: "Request quotes" },
      ]);
  }
}

build().catch((err) => {
  console.error("Prerender failed:", err);
  process.exit(1);
});
