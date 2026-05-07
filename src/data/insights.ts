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
    keyTakeaways: [
      "PPWR replaces the 1994 Packaging Directive with a directly-binding regulation — no national transposition delay. Headline obligations apply from 2025–2040.",
      "PET beverage bottles must contain ≥25% recycled content from 2025 and ≥30% from 2030. Other plastic packaging follows in 2030 at 10–35% depending on polymer and contact use.",
      "From 2030, all packaging must be 'designed for recycling' against five performance grades — failure pushes a SKU into the prohibition track from 2035.",
      "Reuse targets begin in 2030 for transport packaging, large-format beverage and certain take-away contexts; 10–40% reuse by 2040 depending on category.",
      "The biggest procurement risk is rPET supply availability — physical food-grade rPET is structurally short of demand under the 30% 2030 threshold.",
    ],
    sections: [
      {
        heading: "What PPWR is — and what changes vs the old Directive",
        paragraphs: [
          "PPWR (Regulation EU 2025/40) replaces the 1994 Packaging and Packaging Waste Directive with a directly-applicable regulation. The legal mechanism matters: under the previous Directive, member states had two years to transpose obligations into national law, creating fragmentation and enforcement variance. PPWR applies uniformly across all 27 member states from its effective dates, with no transposition window.",
          "The regulation covers all packaging placed on the EU market, regardless of where it was produced. Importers are responsible for compliance of imported packaged goods — a procurement consideration for buyers sourcing finished packaged products from outside the EU.",
          "Three pillars dominate the regulation operationally: recycled-content thresholds (which raise demand for recyclate); design-for-recycling rules (which constrain material choices and structures); and reuse and refill targets (which create new packaging system requirements). A fourth pillar — bans on unnecessary packaging types — affects specific SKUs (single-serving condiments, miniature toiletries) but is narrower in scope.",
        ],
      },
      {
        heading: "Recycled content thresholds",
        paragraphs: [
          "PET beverage bottles must contain a minimum of 25% recycled plastic from 2025 (already in force) and 30% from 2030. This threshold applies as a brand-level average, calculated across the SKU portfolio for a calendar year, which gives flexibility but does not relax the absolute volume of rPET required.",
          "Other plastic packaging is brought into the recycled-content scope in 2030. Contact-sensitive packaging (food, cosmetics, pharmaceutical primary packaging) faces 10% minimum from 2030 rising to 25% from 2040. Non-contact plastic packaging faces 35% from 2030 rising to 65% from 2040. Different polymers face the same percentage thresholds, but the supply situations vary materially.",
          "Mass-balance accounting under ISCC Plus is permitted for the recycled-content claim, but the mass-balance share allocation rules are restrictive: only physical post-consumer feedstock counts, and chemical recycling outputs must trace to genuine waste-derived feed (not refinery off-gas or virgin reroutes). This limits how much the chemical recycling industry can effectively contribute to compliance in the near term.",
        ],
        table: {
          headers: ["Packaging type", "From 2025", "From 2030", "From 2040"],
          rows: [
            ["PET beverage bottles", "25%", "30%", "—"],
            ["Contact-sensitive plastic", "—", "10%", "25%"],
            ["Single-use plastic beverage bottles (non-PET)", "—", "30%", "65%"],
            ["All other plastic packaging", "—", "35%", "65%"],
          ],
          caption: "Minimum recycled content by packaging category. Article 7, PPWR.",
        },
      },
      {
        heading: "Design-for-recycling: the five-grade scoring",
        paragraphs: [
          "From 2030, all packaging placed on the EU market must be 'designed for recycling' under harmonised criteria. The Commission is finalising delegated acts that will assign each packaging format to a Grade A through E based on recyclability performance — sortability, removability of contaminants, polymer compatibility with recycling streams, and yield through the recycling process.",
          "Grade D and E packaging will be progressively prohibited from 2035, beginning with categories where viable design-for-recycling alternatives exist. Grade C packaging faces market disadvantage via EPR fee modulation: producers pay higher contributions per tonne for lower-grade packaging, with the modulation factor applied at the national EPR scheme level.",
          "For procurement, the practical effect is that material and structural choices need to be re-evaluated against design-for-recycling criteria. PVC is the highest-risk polymer in flexible packaging — it is incompatible with PE and PP recycling streams and contaminates recyclate. Multilayer aluminium-PET-PE laminates face similar scrutiny in flexible food packaging. Even within the PE family, ethylene-vinyl-alcohol (EVOH) barrier layers above 5% loading drop a structure to Grade C or below.",
        ],
        callout: {
          label: "Specification implication",
          text: "Procurement should ask suppliers for written design-for-recycling self-assessments referencing the harmonised criteria. By 2027 these will be required to be embedded in the EPR registration process — converters not delivering them will be unable to place packaging on the market.",
        },
      },
      {
        heading: "Reuse and refill targets",
        paragraphs: [
          "Reuse targets are the most operationally disruptive part of PPWR for sectors not already running reusable systems. Transport packaging (pallets, crates, bulk containers) faces a 40% reuse target by 2030 rising to 70% by 2040 in B2B contexts. Beverage take-away (HoReCa) faces 10% reuse by 2030 and 40% by 2040.",
          "Large-format soft drinks and water (>1.5L) face a reuse target of 10% in 2030 and 25% by 2040, with member-state derogation possible where infrastructure does not support the target. The derogation mechanism is contested — France and Germany have signalled they will not seek derogations, while several Eastern member states are likely to.",
          "Reusable systems require step-change infrastructure: returnable container logistics, deposit-and-return scheme expansion (DRS), washing and sanitisation capacity, and packaging design for repeated mechanical loading. The polymer specification implications are significant: HDPE and PP grades for reusable bottles need fatigue resistance for 25+ wash cycles, and dimensional stability through hot-water sanitisation.",
        ],
      },
      {
        heading: "Impact by polymer",
        bullets: [
          "PET — 25% rPET pulled into beverage bottles since 2025; the 2030 step to 30% will tighten food-grade rPET supply further. Expect the rPET premium over virgin PET to widen from current levels (€200–350/t) toward €400–500/t in 2028–2030.",
          "PP — Contact-sensitive PP (food packaging, cosmetics) faces 10% rPCR from 2030. Food-grade rPP at scale is technically harder than rPET — physical recycling streams contain more contamination diversity. Mass-balance ISCC Plus PP is the most likely route to compliance for major brands.",
          "PE — Flexible film: monomaterial PE structures (PE/PE) replace PET/PE laminates to enable recyclability. Brand-owners (Unilever, Nestlé, P&G) have been driving this shift since 2022; PPWR formalises the deadline. Rigid PE for detergent and personal-care bottles benefits — strong rHDPE supply chain already exists.",
          "PVC — Flexible PVC in food packaging is effectively excluded by design-for-recycling rules. Cling-film PVC is being replaced by PE alternatives, food-tray flexibles by PE/EVOH/PE structures (where EVOH content is constrained).",
          "PS / EPS — High-impact polystyrene for yogurt pots faces design-for-recycling pressure where recycling streams cannot handle PS content. Some member states (Germany, France) have proactive moves to remove PS from food packaging entirely.",
        ],
      },
      {
        heading: "Operational checklist for procurement",
        bullets: [
          "Map every plastic-packaging SKU your business places on the EU market against PPWR scope. Identify which polymer, which contact category, and the volume in tonnes per year.",
          "For PET-bottle SKUs: confirm current rPET inclusion percentage and forward supply contract for 30% rPET availability through 2030.",
          "Request design-for-recycling self-assessment from each converter for each SKU. The Commission delegated acts publish the formal grading methodology in 2026; converters should be benchmarking ahead.",
          "Identify SKUs at risk of moving to Grade D/E under expected criteria. Build re-engineering programmes for 2027–2029 implementation; bans begin 2035 but EPR fee modulation hits earlier.",
          "For reuse-impacted categories (large-format beverage, HoReCa, B2B transport): scenario-plan reusable-system economics including container float, return logistics, and washing capacity.",
          "Track member-state implementation: while PPWR is directly applicable, EPR fee schedules and reuse infrastructure investment are nationally driven.",
        ],
      },
      {
        heading: "Common pitfalls and misconceptions",
        paragraphs: [
          "Mass-balance ISCC Plus claims do not automatically count toward PPWR thresholds. The regulation's recycled-content definition is tighter than ISCC Plus's broader feedstock allocation rules — only post-consumer waste-derived material counts. Buyers relying on bulk mass-balance certificates without scrutinising the feedstock origin risk non-compliance.",
          "Brand-owners using portfolio averaging for PET rPET inclusion still need to ensure each importing member state's enforcement authority can verify the claim. National enforcement regimes vary in their tolerance for portfolio averaging vs SKU-level verification — Germany and France lean toward SKU-level scrutiny.",
          "The reuse targets apply per Member State rather than EU-wide. A brand with 80% reuse in Germany and 0% reuse in Greece is not compliant in Greece even though the EU average exceeds the threshold. This creates inconsistent commercial economics across the single market.",
        ],
      },
      {
        heading: "Phased timeline 2025–2040",
        table: {
          headers: ["Year", "Obligation"],
          rows: [
            ["2025", "PET beverage bottle 25% rPET threshold takes effect."],
            ["2026", "Commission publishes delegated acts on design-for-recycling grading methodology."],
            ["2027", "Producer EPR registration includes design-for-recycling self-assessment."],
            ["2030", "30% rPET in PET bottles. 10% rPCR in contact-sensitive plastics. Reuse targets begin (transport, HoReCa, large-format beverage)."],
            ["2035", "Phase-out begins for Grade D/E packaging in categories with viable alternatives."],
            ["2040", "Step-up to 25% rPCR contact-sensitive, 65% rPCR non-contact. Higher reuse targets (40–70%)."],
          ],
        },
      },
    ],
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
    keyTakeaways: [
      "Food-grade rPET supply is structurally short of demand at the current 25% PPWR threshold; the 2030 step to 30% will tighten further.",
      "The rPET premium over virgin PET held at €200–350/t through Q1 2026 — a 25–35% uplift on virgin price.",
      "Physical rPE and rPP supply is roughly 800 kt/y combined in 2026; ISCC Plus mass-balance volumes add roughly 400 kt/y on top.",
      "Chemical recycling (depolymerisation, pyrolysis) capacity is ramping but won't deliver meaningful PCR volumes at scale before 2028.",
      "Procurement teams should lock multi-year rPET contracts now and build at least one mass-balance ISCC Plus relationship for rPE/rPP.",
    ],
    sections: [
      {
        heading: "State of play in early 2026",
        paragraphs: [
          "The 25% recycled-content requirement for PET beverage bottles took effect in 2025 and has reshaped European recyclate markets in the year since. Demand for food-grade rPET pulled approximately 1.2–1.5 Mt of physical rPCR into beverage bottles, depleting the available bale supply for other applications. Sheet-grade and fibre-grade rPET buyers (textile fibre, strapping, sheet thermoforming) have been priced out or downgraded toward lower-grade flake.",
          "rPE and rPP physical supply chains are less mature. Combined European physical PCR-PE and PCR-PP supply ran around 800 kt/y in 2026, against PPWR-implied 2030 demand of 3–4 Mt depending on how converters apportion mass-balance vs physical sourcing. Mechanical recycling capacity is being added — Veolia, Suez, Indaver, Plastipak and others have announced new lines — but lead times from announcement to operating capacity run 24–36 months.",
          "Chemical recycling (depolymerisation for PET, pyrolysis for polyolefins) has progressed from pilot to pre-commercial scale but remains a fraction of physical capacity. Eastman's Kingsport depolymerisation plant, Loop Industries' Indorama partnership, and SABIC's TRUCIRCLE pyrolysis programme are all running but combined chemical recycling output is below 200 kt/y in 2026.",
        ],
      },
      {
        heading: "rPET — the tightest market",
        paragraphs: [
          "Food-grade rPET premium over virgin PET held at €200–350/t through Q1 2026, equivalent to a 25–35% uplift on virgin contract pricing. The premium is structurally supported: physical food-grade rPET requires bottle-to-bottle recycling streams (deposit-and-return scheme bales, super-clean PET flake processing), and the supply chain capacity is finite.",
          "The deposit-and-return scheme (DRS) ecosystem is the backbone. Germany's longstanding system delivers exceptional bale quality; Sweden, the Netherlands, Romania and Slovakia have functional schemes; France, Spain, Italy and the UK are at various stages of rolling out DRS. Each scheme expansion releases new high-quality bale supply, but the lead time from DRS announcement to operating supply is 24–36 months.",
          "Sheet and APET buyers (food trays, blister packaging) face the greatest squeeze. Where a few years ago APET sheet routinely contained 30–50% rPET, in 2026 that share is harder to maintain because beverage-bottle buyers can outbid for the limited food-grade flake. Some APET converters have shifted toward ocean-bound or post-industrial PCR streams to maintain claim percentages.",
        ],
        callout: {
          label: "rPET sourcing reality",
          text: "Spot food-grade rPET pellet ranges €1,400–1,700/t depending on quality tier in early 2026 — virgin bottle-grade PET is around €1,150–1,300/t. The premium is large enough that sourcing strategy now warrants the same attention given to virgin contract negotiations.",
        },
      },
      {
        heading: "rPE and rPP: supply ramp behind demand",
        paragraphs: [
          "Physical rPCR-HDPE supply benefits from the well-established curbside collection of HDPE bottles (milk, detergent, personal care). PCR-HDPE pellet for non-food applications runs €100–200/t below virgin HDPE blow grade — the only PCR market where the recyclate trades at discount rather than premium. Food-grade PCR-HDPE (where regulatory permission has been granted under EU 2022/1616) carries a €100–250/t premium over virgin.",
          "Physical rPCR-LDPE and rLLDPE supply is more difficult. Flexible film waste streams (commercial film, agricultural film, household soft plastics) require sortation infrastructure that is underdeveloped in much of Europe. PCR-LDPE quality is more variable, and fitness for high-clarity film applications is limited. The bulk of PCR-LDPE goes into garbage bags, construction film, and similar lower-spec applications.",
          "Physical PCR-PP supply is the least mature of the major polyolefins. PP packaging waste streams are heterogeneous (yogurt pots, ready-meal trays, caps, films) and sortation accuracy at recycling MRFs varies. PCR-PP pellet quality is highly variable; food-grade PCR-PP at scale is not yet commercially available, though pilot lines (Trinseo, Borealis, SABIC) are progressing through regulatory approval.",
        ],
        table: {
          headers: ["Polymer", "2026 physical PCR (kt/y)", "Premium / discount vs virgin"],
          rows: [
            ["rPET food-grade", "1,500–1,700", "+€200–350/t (premium)"],
            ["rHDPE non-food", "350–400", "-€100–200/t (discount)"],
            ["rHDPE food-grade", "60–90", "+€100–250/t (premium)"],
            ["rLDPE / rLLDPE", "200–280", "-€50–150/t (discount)"],
            ["rPP non-food", "180–230", "-€100–150/t (discount)"],
            ["rPP food-grade", "<10", "+€400–600/t (premium)"],
          ],
          caption: "Indicative European physical PCR supply and pricing, early 2026.",
        },
      },
      {
        heading: "Mass balance vs physical: what counts",
        paragraphs: [
          "ISCC Plus mass-balance certification underpins the chemical recycling pathway and is a meaningful supplement to physical PCR supply. The principle: chemically-recycled feedstock (e.g. pyrolysis oil from waste plastic) is fed into a steam cracker alongside fossil naphtha; the certified recycled share is allocated to specific output products under audited rules.",
          "PPWR's recycled-content definition accepts mass-balance allocation but with restrictions: only post-consumer waste-derived feed counts (not refinery off-gas or virgin reroutes); the chain of custody must be verifiable; and the brand-owner can claim only the certified allocated volume, not the full output of a mass-balance line.",
          "In practice, mass-balance ISCC Plus PCR-PP at scale is more accessible than physical rPP for procurement teams. Major producers (LyondellBasell Circulen, SABIC TRUCIRCLE, Borealis Bornewables, INEOS Recycl-IN) all offer mass-balance grades qualified for food contact. Pricing typically runs €300–500/t over equivalent virgin grades, depending on the brand and contracted volume.",
        ],
      },
      {
        heading: "Pricing dynamics in 2026",
        bullets: [
          "rPET food-grade: spot €1,400–1,700/t. Q1 2026 saw a brief easing on warmer weather and higher beverage demand, then re-tightened in March. Premium to virgin held at €200–350/t.",
          "rHDPE food-grade: spot €1,050–1,200/t against virgin HDPE blow at €950–1,050/t. Premium narrower than rPET due to smaller market and easier qualification.",
          "rPP mass-balance ISCC Plus: contract pricing €1,400–1,650/t depending on grade and certified share. Spot availability limited — most volume tied to multi-year contracts with major brand owners.",
          "rLDPE physical pellet: €600–850/t depending on quality, against virgin LDPE film at €1,200–1,300/t. Discounted because non-food applications dominate demand.",
        ],
      },
      {
        heading: "Sourcing strategy",
        paragraphs: [
          "For PET-heavy procurement portfolios, multi-year rPET contracts are now operationally essential. Spot reliance worked when the rPET market was a niche; under PPWR, food-grade flake is allocated through long-term commitments and quality contracts. Indorama Ventures, Plastipak, Veolia and Suez are the main contracted-rPET counterparties for major brand owners.",
          "For PE and PP, a hybrid strategy works best in 2026: physical rPCR for non-food applications (where supply is adequate and cheap); mass-balance ISCC Plus for food-contact applications (where physical food-grade volume is structurally short). Building the mass-balance contract relationship now is important — major producers are prioritising customers who committed early.",
          "Quality verification matters more than ever. PCR pellets vary in fitness-for-use; bag MFI, contamination level, and odour quality should be tested on each new lot rather than relying on supplier specifications alone. Application-validation cycles for new PCR sources can take 6–12 months for food-contact applications.",
        ],
      },
      {
        heading: "2030 outlook",
        paragraphs: [
          "By 2030, physical PCR capacity additions (announced 2024–2026) come online: roughly 2 Mt/y of new mechanical recycling capacity across PE, PP and PET. Chemical recycling adds another 0.5–1 Mt/y depending on which announced projects achieve commercial operation. Total PCR supply could reach 5–6 Mt/y against PPWR-implied demand of 6–8 Mt/y depending on portfolio mix.",
          "The rPET premium is unlikely to compress materially before 2028. The 2030 PPWR step to 30% rPET will further tighten food-grade supply just as new DRS schemes come online — a balance that depends on member-state implementation pace. Rolling 24-month forward contracts for food-grade rPET should be considered the new procurement standard.",
          "Mass-balance ISCC Plus volumes for PE and PP will become more available, with prices converging toward virgin-plus-€200-300/t as competition intensifies. The major risk is regulatory: any tightening of mass-balance allocation rules at EU level could compress effective certified output.",
        ],
      },
    ],
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
