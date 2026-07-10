# Polymer Platform

B2B polymer sourcing site for European procurement teams — [polymerplatform.eu](https://polymerplatform.eu). Buyers submit one RFQ and receive quotes from verified suppliers.

## Stack

- **Frontend:** Vite + React 18 + TypeScript + Tailwind, react-router SPA (all routes rewrite to `index.html`, see `vercel.json`)
- **API:** Vercel serverless functions in `api/` (`/api/rfq` intake, `/api/admin/rfqs` admin CRUD, `/api/cron/keepalive` manual DB ping)
- **Database:** Neon serverless Postgres (`@neondatabase/serverless`). Schema in `schema.sql` — run manually against Neon; there is no migration tooling.
- **Hosting:** Vercel project `poly` (team `xander-dijkstras-projects`), auto-deploys from `main`.

## Content model

All SEO content is data-driven from `src/data/`:

| File | Feeds |
|---|---|
| `polymers.ts` | `/polymers/:slug` |
| `grades.ts` | `/grades/:slug` |
| `applications.ts` + `useCases.ts` | `/applications/:slug(/:useCase)` |
| `regions.ts` | `/suppliers/:region` |
| `learnTerms.ts` | `/learn/:term` |
| `insights.ts` | `/insights/:slug` |

`scripts/generate-sitemap.mjs` regenerates `public/sitemap.xml` from these files at prebuild — add data entries and the sitemap follows automatically.

## Development

```sh
npm install
npm run dev        # local dev server
npm run typecheck  # tsc --noEmit
npm run build      # sitemap + keepalive + tsc + vite build
```

## Environment variables (Vercel)

- `DATABASE_URL` — Neon connection string (injected by the Vercel–Neon integration)
- `ADMIN_PASSWORD` — bearer token for `/api/admin/rfqs` (used by the `/admin` UI)

## Lead flow

`GetQuotesPage` → POST `/api/rfq` → validated, lead-scored (quantity, frequency, business email domain, VAT, phone) → stored in the `rfqs` table → managed at `/admin` (status pipeline: new / contacted / qualified / won / lost / archived).
