export interface InsightTable {
  headers: string[];
  rows: string[][];
  caption?: string;
}

export interface InsightCallout {
  label?: string;
  text: string;
}

export interface InsightSection {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  table?: InsightTable;
  callout?: InsightCallout;
}

export interface Insight {
  slug: string;
  title: string;
  publishedAt: string;
  updatedAt?: string;
  author: string;
  excerpt: string;
  topics: string[];
  readMinutes: number;
  keyTakeaways?: string[];
  sections?: InsightSection[];
}

export const insights: Insight[] = [
  {
    slug: "european-polymer-market-q1-2026",
    title: "European Polymer Market Q1 2026",
    publishedAt: "2026-04-15",
    author: "PolymerPlatform editorial",
    excerpt:
      "PE and PP contracts settled flat to slightly down in Q1 against a softening monomer cost base. Demand recovery from the 2024–2025 destocking cycle remains uneven across Germany, Italy and Iberia.",
    topics: ["Market commentary", "Pricing"],
    readMinutes: 8,
    keyTakeaways: [
      "PE contracts settled flat to -€10/t against softening ethylene; LDPE film grade was the weakest sub-segment of the family.",
      "PP was the worst-performing major polymer at -€20/t cumulative, reflecting weak automotive and consumer goods demand.",
      "PVC suspension grades dropped €30–50/t on continued construction stagnation in DACH and France.",
      "rPET tightness drove a €200–350/t premium over virgin as the PPWR 25% threshold absorbed supply.",
      "Iberia held a €30–50/t regional premium on infrastructure spending; Eastern Europe was weakest on deferred CapEx.",
    ],
    sections: [
      {
        heading: "Polyethylene: cost relief, demand caution",
        paragraphs: [
          "Q1 ethylene contract prices softened modestly through the quarter — €1,170/t in January, €1,165/t in February, €1,150/t in March — providing some cost relief that filtered through to PE pricing. The producer margin compression visible since mid-2024 continued, with European cracker operators running at the lower end of their historical profitability ranges.",
          "LDPE film grade was the weakest of the polyethylene family. After a flat January settlement and a transient €10/t increase in February, March came in at -€15/t, leaving the quarter slightly negative on aggregate. Demand from agricultural and industrial film converters was soft, and the brief reopening of Middle East import arbitrage in early January capped any upward attempts before Cape-routing closed the window again.",
          "LLDPE held flat across the quarter, with metallocene grades continuing to command a €60–90/t premium over Ziegler-Natta. Demand from stretch film and silage applications was steady through the spring agricultural cycle. HDPE blow grade was the strongest sub-segment at +€5/t cumulative, supported by dairy and water bottle pull. HDPE pipe weakened by €25/t as infrastructure project deferrals across Central and Eastern Europe pulled volumes back.",
        ],
        callout: {
          label: "Buyer takeaway",
          text: "PE buyers running short coverage entering Q1 were better positioned than those who locked in late-Q4 2025 at the peak. Q2 contract negotiations should reflect the softening monomer trend; metallocene LLDPE remains the only segment with no near-term price relief.",
        },
      },
      {
        heading: "Polypropylene: cost-push outpaces demand-pull",
        paragraphs: [
          "Propylene contracts settled at €1,130/t in January, drifting to €1,110/t by March. PP homopolymer fell €20/t cumulative across Q1, the weakest performance among the major polymers despite the cost base softening only marginally. The mismatch reflects genuinely weak end-demand rather than supply pressure.",
          "PP impact copolymer for automotive applications was more resilient at -€10/t, but volumes were lower as European OEMs continued to manage the BEV-platform transition. PP random copolymer for clarified packaging held within €5/t of December levels — clear food container demand provided a floor.",
          "Spot PP off-spec material was widely available at €100–150/t below contract through the quarter, with buyers absorbing volumes for non-critical applications (planters, dunnage, garden furniture). The Asian PP import arbitrage was closed for most of Q1 due to freight costs and Cape-routing, but began to reopen in late March as freight rates eased.",
        ],
      },
      {
        heading: "PVC: construction headwind continues",
        paragraphs: [
          "Suspension PVC was the weakest major polymer in absolute price terms, with December-to-March changes ranging from -€30/t (Northern Europe) to -€50/t (Southern Europe). The ECVM contract softened on weak EDC demand and continued residential construction stagnation in Germany, France, and the Benelux.",
          "Pipe-grade PVC outperformed profile and sheet, holding flat across the quarter — water and gas distribution projects continue at municipal pace. Profile and window-frame grades fell hardest, mirroring -8% YoY residential construction starts. Cable-grade PVC was stable, supported by telecoms infrastructure and EV charging cable demand.",
          "Import pressure was limited compared to PE and PP. PVC is less commodity-like in trade terms, with most European supply sourced regionally. The DG Trade anti-dumping investigation into US PVC imports continues; preliminary findings are expected in Q3 2026 and could tighten supply if duties are imposed.",
        ],
      },
      {
        heading: "PET: rPET tightness, virgin softness",
        paragraphs: [
          "Bottle-grade virgin PET ended Q1 down €10/t against December, with paraxylene and MEG cost movements largely neutral. The bigger story remains the divergence between virgin and recycled PET pricing — rPET commanded a €200–350/t premium over virgin through the quarter, depending on quality tier and geography.",
          "The PPWR 25% recycled-content threshold for beverage bottles, which took effect in 2025, has absorbed roughly 1.2–1.5 Mt of rPET demand annually. Beverage majors (Coca-Cola HBC, Suntory, Danone) ran 30–50% rPET in Q1 portfolios, ahead of the regulatory floor. Mass-balance ISCC Plus volumes are growing but remain a fraction of what physical rPET supply can provide.",
          "Sheet-grade APET was the weaker segment, dropping €15/t on competition from CPET (for ovenable trays) and PP (for fresh produce trays). Bottle-attached cap requirements under SUPD are now fully implemented across major SKUs and added no pricing pressure in Q1.",
        ],
        table: {
          headers: ["Polymer", "Q1 2026 Δ vs Dec 2025", "Direction", "Driver"],
          rows: [
            ["LDPE film", "-€15/t", "↓", "Weak ag/industrial film, ME arbitrage"],
            ["HDPE blow", "+€5/t", "↑", "Dairy and water bottle demand"],
            ["PP homopolymer", "-€20/t", "↓", "Automotive and consumer goods weak"],
            ["PVC suspension", "-€30 to -€50/t", "↓↓", "Construction stagnation"],
            ["PET virgin bottle", "-€10/t", "↓", "rPET absorbing demand share"],
            ["rPET food-grade", "+€20/t", "↑", "PPWR 25% threshold pull"],
          ],
          caption: "Indicative European contract movements, Q1 2026.",
        },
      },
      {
        heading: "Regional patterns",
        paragraphs: [
          "The aggregate European picture masks meaningful regional dispersion. Germany held flat to slightly soft, with manufacturing PMI in contraction territory and overall polymer demand running -3% YoY. The country's outsized exposure to automotive and industrial machinery sectors is dragging the average.",
          "Italy was softer than the average. Packaging volumes held but white goods and automotive components weighed; regional discounts of €10–20/t to Northern European reference prices were common across PP and ABS. Iberia, by contrast, was the firmest regional market, with Spain holding €30–50/t premiums on infrastructure-driven PE and PVC pipe demand.",
          "France saw PVC as the weakest spot, with packaging stable and automotive contract volumes holding (but down YoY). Benelux tracked the continental average without significant deviations. Eastern Europe — Poland, Czechia, Hungary — was the weakest demand picture, with deferred infrastructure CapEx and consumer goods softness pulling on PE pipe, PVC, and PP volumes.",
        ],
      },
      {
        heading: "What to watch in Q2 2026",
        bullets: [
          "Ethylene and propylene: refinery turnaround season in May–June could tighten monomer supply and push back on the softening trend.",
          "Red Sea: any meaningful de-escalation reopens Asian and ME polymer arbitrage to Europe, pressuring contract prices further.",
          "ECB rate path: residential construction recovery — and therefore PVC profile demand — hinges on the rate-cut trajectory.",
          "US trade: DG Trade preliminary findings on US PVC anti-dumping expected in Q3; possible knock-on action on PE imports.",
          "Automotive: Q2 BEV-platform launches will set H2 demand trajectory for PP impact copolymer and ABS.",
        ],
      },
    ],
  },
  {
    slug: "red-sea-shipping-impact-resin-supply-2026",
    title: "Red Sea Shipping Disruption: Impact on European Resin Supply",
    publishedAt: "2026-03-20",
    author: "PolymerPlatform editorial",
    excerpt:
      "Cape-routing has added 14–18 days to Middle East and Asian polymer arrivals. We map how the disruption rebalances supply share between Antwerp, Rotterdam and Mediterranean entry points.",
    topics: ["Supply chain", "Logistics"],
    readMinutes: 10,
  },
  {
    slug: "ppwr-packaging-mandate-what-buyers-need-to-know",
    title: "PPWR: What Procurement Teams Need to Know",
    publishedAt: "2026-02-28",
    author: "PolymerPlatform editorial",
    excerpt:
      "The Packaging and Packaging Waste Regulation reshapes specifications across PET, PP and flexible PE. Recycled-content thresholds, design-for-recycling, and reuse targets: the operational checklist for 2025–2030.",
    topics: ["Regulation", "Sustainability"],
    readMinutes: 12,
  },
  {
    slug: "recycled-content-mandates-eu-2026",
    title: "Recycled Content Mandates: EU 2026 State of Play",
    publishedAt: "2026-01-30",
    author: "PolymerPlatform editorial",
    excerpt:
      "rPET supply has tightened materially since the 25% beverage-bottle threshold took effect. Mass-balance ISCC Plus volumes for rPE and rPP are growing but remain a fraction of demand under PPWR.",
    topics: ["Sustainability", "Market commentary"],
    readMinutes: 9,
  },
  {
    slug: "polymer-prices-vs-oil-correlation-2020-2026",
    title: "Polymer Prices vs Oil: Six-Year Correlation",
    publishedAt: "2026-01-10",
    author: "PolymerPlatform editorial",
    excerpt:
      "We rebuilt the PE, PP, PVC and PET price series against Brent and Henry Hub from 2020 to early 2026. The correlation breaks down in two distinct regimes, and the 2024–2025 spread compression hints at a third.",
    topics: ["Market commentary", "Data"],
    readMinutes: 14,
  },
];

export const insightBySlug = (slug: string) => insights.find((i) => i.slug === slug);
