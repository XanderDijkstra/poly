export interface Insight {
  slug: string;
  title: string;
  publishedAt: string;
  updatedAt?: string;
  author: string;
  excerpt: string;
  topics: string[];
  readMinutes: number;
}

export const insights: Insight[] = [
  {
    slug: "european-polymer-market-q1-2026",
    title: "European Polymer Market — Q1 2026",
    publishedAt: "2026-04-15",
    author: "PolymerPlatform editorial",
    excerpt:
      "PE and PP contracts settled flat to slightly down in Q1 against a softening monomer cost base. Demand recovery from the 2024–2025 destocking cycle remains uneven across Germany, Italy and Iberia.",
    topics: ["Market commentary", "Pricing"],
    readMinutes: 8,
  },
  {
    slug: "red-sea-shipping-impact-resin-supply-2026",
    title: "Red Sea Shipping Disruption — Impact on European Resin Supply",
    publishedAt: "2026-03-20",
    author: "PolymerPlatform editorial",
    excerpt:
      "Cape-routing has added 14–18 days to Middle East and Asian polymer arrivals. We map how the disruption rebalances supply share between Antwerp, Rotterdam and Mediterranean entry points.",
    topics: ["Supply chain", "Logistics"],
    readMinutes: 10,
  },
  {
    slug: "ppwr-packaging-mandate-what-buyers-need-to-know",
    title: "PPWR — What Procurement Teams Need to Know",
    publishedAt: "2026-02-28",
    author: "PolymerPlatform editorial",
    excerpt:
      "The Packaging and Packaging Waste Regulation reshapes specifications across PET, PP and flexible PE. Recycled-content thresholds, design-for-recycling, and reuse targets — the operational checklist for 2025–2030.",
    topics: ["Regulation", "Sustainability"],
    readMinutes: 12,
  },
  {
    slug: "recycled-content-mandates-eu-2026",
    title: "Recycled Content Mandates — EU 2026 State of Play",
    publishedAt: "2026-01-30",
    author: "PolymerPlatform editorial",
    excerpt:
      "rPET supply has tightened materially since the 25% beverage-bottle threshold took effect. Mass-balance ISCC Plus volumes for rPE and rPP are growing but remain a fraction of demand under PPWR.",
    topics: ["Sustainability", "Market commentary"],
    readMinutes: 9,
  },
  {
    slug: "polymer-prices-vs-oil-correlation-2020-2026",
    title: "Polymer Prices vs Oil — Six-Year Correlation",
    publishedAt: "2026-01-10",
    author: "PolymerPlatform editorial",
    excerpt:
      "We rebuilt the PE, PP, PVC and PET price series against Brent and Henry Hub from 2020 to early 2026. The correlation breaks down in two distinct regimes — and the 2024–2025 spread compression hints at a third.",
    topics: ["Market commentary", "Data"],
    readMinutes: 14,
  },
];

export const insightBySlug = (slug: string) => insights.find((i) => i.slug === slug);
