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
    keyTakeaways: [
      "Cape of Good Hope routing adds 14–18 days transit and roughly $1,400–2,200 per FEU to Middle East and Asia → North Europe lanes.",
      "Roughly 28% of European polymer imports historically transited Suez; Saudi and Indian PE/PP have been most affected.",
      "Mediterranean ports (Genoa, Barcelona, Piraeus) lost relative share; Antwerp and Rotterdam are absorbing more of the rerouted volume.",
      "Spot prices for Asian-origin LDPE and PP into Europe rose €60–100/t through Q4 2025; arbitrage windows are now intermittent rather than persistent.",
      "Buyers should plan 3–4 week safety stocks for Asian-origin specs and qualify a European secondary source where possible.",
    ],
    sections: [
      {
        heading: "Quantifying the disruption",
        paragraphs: [
          "Houthi attacks on commercial shipping in the Red Sea, which intensified through 2024 and continued into 2026, have pushed major container lines (Maersk, MSC, CMA CGM, Hapag-Lloyd) to route Asia–Europe services around the Cape of Good Hope. The detour adds approximately 3,500 nautical miles versus the Suez routing, translating to 14–18 additional days of transit on standard 22-knot Asia–North Europe services.",
          "Container freight rates spiked in Q1 2024 and have remained structurally elevated. As of early 2026, North Europe-bound FEU rates from Shanghai sit roughly 60–90% above pre-disruption baselines, with Middle East to North Europe up by 40–70%. Bunker surcharges, war-risk premiums, and re-positioning costs all contribute. Freight remains the single largest cost change to the landed price of imported polymer.",
          "Insurance and security overlays add further friction. War-risk insurance for any vessel transiting the Bab el-Mandeb has remained elevated even as some carriers have selectively returned, with quotes ranging 0.7–1.0% of hull value compared to 0.05% pre-2023.",
        ],
        callout: {
          label: "What changed",
          text: "Pre-2023, Asia → North Europe via Suez took 30–32 days door-to-door. Today, Cape routing pushes that to 46–50 days. For polymer buyers running just-in-time inventory, that meant three weeks of stockouts in early 2024 and a permanent shift toward larger safety stocks since.",
        },
      },
      {
        heading: "Polymer flows: who depends on Suez",
        paragraphs: [
          "Approximately 28% of European polymer imports historically transited the Suez Canal. The most exposed origins are Saudi Arabia (SABIC, Petro Rabigh — primarily PE and PP), the UAE (Borouge — PE and PP), India (Reliance, GAIL — PE, PP, PVC), and Southeast Asia (Indonesia, Malaysia, Thailand — PP and PE). South Korean and Chinese origins are also affected, though northern routings via the Northern Sea Route or trans-Pacific via Panama are not viable substitutes for the bulk volumes involved.",
          "Of these flows, Saudi and Indian PE and PP have shown the largest landed-price impact. Saudi LDPE arbitrage to Europe — open for most of 2020–2023 — has been intermittent since 2024, with arbitrage windows lasting 3–6 weeks rather than the previous semi-permanent state. Indian PVC, historically a marginal source, has effectively withdrawn from European markets except for opportunistic spot deals.",
          "European producers (Borealis, LyondellBasell, INEOS, SABIC's European assets) have benefited from the import friction. Contract negotiation positions strengthened in Q1–Q2 2024 and have remained more favourable to producers than in the 2018–2019 import-glut years.",
        ],
      },
      {
        heading: "Port rebalancing: north vs south",
        paragraphs: [
          "Mediterranean entry ports have lost share relative to North European ports. Genoa, Barcelona, and Piraeus historically captured polymer flows from Asia and the Middle East destined for Italian, Spanish, and Eastern European converters. With the Cape routing, the geographic disadvantage of stopping in the Med disappears — vessels routing around Africa cross the equator before reaching the Med, and the marginal time saving versus continuing to Antwerp or Rotterdam is small.",
          "Antwerp and Rotterdam are absorbing more of the total. Antwerp's polymer-handling tonnage rose roughly 6% YoY in 2024 and held those gains through 2025. Rotterdam's share has been more stable but its absolute volumes remain higher than pre-disruption. The shift has tightened container terminal capacity at both ports during peak periods, with reefer and special-handling slots particularly stretched.",
          "Hamburg has not benefited proportionally. Its hinterland skews toward Baltic, Polish, and Czech demand which is structurally weaker than Iberian or Italian markets, and the inland rail/barge connections from Rotterdam and Antwerp to those geographies are more competitive than from Hamburg.",
        ],
        table: {
          headers: ["Origin", "Pre-2023 transit (days)", "Cape routing (days)", "Lane delta"],
          rows: [
            ["Yanbu (KSA) → Antwerp", "16–18", "30–34", "+14–16"],
            ["Mumbai (IND) → Rotterdam", "22–24", "36–40", "+14–16"],
            ["Singapore → Antwerp", "28–30", "44–48", "+16–18"],
            ["Shanghai → Rotterdam", "30–32", "46–50", "+16–18"],
            ["Houston (USA) → Antwerp", "13–15", "13–15", "0 (unaffected)"],
          ],
          caption: "Indicative door-to-door transit. Actual times vary with port congestion and service routing.",
        },
      },
      {
        heading: "Spot prices and arbitrage windows",
        paragraphs: [
          "Asian-origin LDPE and PP spot offers landed in Europe rose €60–100/t through Q4 2025 versus the pre-disruption baseline, narrowing the arbitrage to European producer pricing. The arbitrage now opens episodically — typically when European spot tightens around turnaround season or when freight rates ease temporarily — rather than running continuously as it did in 2020–2023.",
          "PVC arbitrage has effectively closed. The freight cost increase plus DG Trade scrutiny of US imports (anti-dumping investigation) has left European PVC buyers with limited alternative sources beyond regional production. Pipe-grade and profile-grade PVC compounders are seeing the most direct impact.",
          "Specialty grades (mLLDPE, EVA, controlled-rheology PP) where European producer offerings are limited remain harder to source. Buyers of these specs report longer qualification times for European secondary sources and have absorbed the freight cost increase rather than switching origin.",
        ],
      },
      {
        heading: "Buyer playbook",
        bullets: [
          "Carry 3–4 week safety stocks on any Asian or Middle East-origin specification — single-week buffers no longer accommodate the routing variability.",
          "Qualify a European secondary source where commercially viable. The qualification cost (test moulding, application validation) is paid back inside two reorder cycles if it eliminates one stockout.",
          "On contract negotiations, request landed-Antwerp or landed-Rotterdam pricing rather than FOB origin. This shifts the freight risk to the supplier and aligns commercial terms with actual delivered cost.",
          "For PVC specifically, expect tighter European supply if anti-dumping duties on US imports take effect later in 2026. Consider locking in 2H volumes earlier than usual.",
          "Build relationships with multiple distributors (Resinex, Albis, Univar) for spot top-up — single-distributor reliance amplifies stockout risk under current logistics conditions.",
        ],
      },
      {
        heading: "Outlook: when does it normalise?",
        paragraphs: [
          "A return to Suez routing requires a sustained de-escalation of attacks combined with multiple major carriers committing to resume the route. Both conditions are necessary — partial resumption would not restore the freight rate baseline because vessel capacity must be repositioned and insurance markets must adjust. Industry consensus places any meaningful return at 6–12 months after a credible ceasefire, which itself remains uncertain.",
          "Even under a return-to-Suez scenario, freight rates are unlikely to return to pre-2023 levels. Carrier consolidation, post-pandemic capacity discipline, and structurally higher bunker fuel costs all point to a permanently elevated baseline. Polymer buyers should plan for landed costs to remain €40–80/t above 2019–2022 norms even after Suez fully reopens.",
        ],
      },
    ],
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
