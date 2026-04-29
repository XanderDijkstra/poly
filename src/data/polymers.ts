export interface Polymer {
  slug: string;
  name: string;
  abbreviation: string;
  family: string;
  shortDescription: string;
  applications: string[];
  density: string;
  mfiRange?: string;
  meltingPoint?: string;
  formula?: string;
  producers: string[];
  recyclable: boolean;
  /** Optional rich-content sections rendered on the detail page. */
  marketContext?: string[];
  pricingDrivers?: string[];
  regulatoryContext?: string[];
}

export const polymers: Polymer[] = [
  {
    slug: "polypropylene",
    name: "Polypropylene",
    abbreviation: "PP",
    family: "Polyolefin",
    shortDescription:
      "Versatile commodity polyolefin. Highest European production volume after PE. Homopolymer, random and impact copolymer grades cover injection, extrusion, fiber, film.",
    applications: ["Food packaging", "Automotive interior", "Fiber spinning", "BOPP film"],
    density: "0.895–0.920 g/cm³",
    mfiRange: "0.3–100 g/10 min",
    meltingPoint: "160–170 °C",
    formula: "(C₃H₆)ₙ",
    producers: ["Borealis", "LyondellBasell", "ExxonMobil", "INEOS", "SABIC", "TotalEnergies"],
    recyclable: true,
    marketContext: [
      "Polypropylene is Europe's second-largest commodity polymer by volume, with installed capacity around 10 million tonnes per year across roughly 25 production lines. Demand splits roughly 30% rigid packaging, 25% automotive, 20% fiber and nonwovens, with the balance in film, consumer goods, and pipe.",
      "Supply runs broadly balanced with demand in normal years. Net imports from the Middle East (Borouge, SABIC ME) and the United States fill the gap during cracker turnarounds, typically Q2 and Q4. The procurement landscape is dominated by direct contracts for high-volume buyers (1,000+ t/year) and a deep distributor network for smaller volumes — Resinex, Ravago Distribution, Albis, and Vinmar Polymers Europe between them carry stock in every major European port and inland hub.",
    ],
    pricingDrivers: [
      "PP pricing in Europe follows the monthly Propylene Contract Price (PCP) settled between major producers and customers. The PCP itself tracks naphtha-cracker feedstock economics on a 4–8 week lag from Brent crude. Producer margins (PCP-to-PP delta) typically run €250–500/t and have compressed since 2022 as new Chinese capacity floods Asian markets and forces European producers to cut operating rates.",
      "Spot trades 5–20% above or below contract depending on near-term tightness. Watch the ICIS PP weekly assessment for homopolymer, random copolymer, and impact copolymer separately — they decouple during demand shocks. Imports from US Gulf and Saudi-based producers landed in Antwerp typically need a 4–8 week lead time plus customs clearance.",
    ],
    regulatoryContext: [
      "Food-contact PP must comply with EU 10/2011, the EU framework for plastics in food contact materials. The regulation governs monomer residuals, additive overall migration limits, and specific migration limits for individual substances. Producers issue a Declaration of Compliance per grade. Recycled PP for food contact additionally requires an EFSA-evaluated process under EU 2022/1616.",
      "The Packaging and Packaging Waste Regulation (PPWR), entering force progressively from 2026, mandates 10% recycled content in contact-sensitive plastic packaging by 2030 and 25% in non-contact. PP is well-positioned for compliance via mechanical recycling for non-food applications, but food-contact rPP currently relies on chemical recycling routes still scaling commercially.",
    ],
  },
  {
    slug: "polyethylene-hd",
    name: "High-Density Polyethylene",
    abbreviation: "HDPE",
    family: "Polyolefin",
    shortDescription:
      "Linear polyethylene with density above 0.941 g/cm³. Used for blow-molded bottles, pressure pipes, and rigid containers.",
    applications: ["Blow-molded bottles", "Pressure pipe", "Crates and pails", "Geomembrane"],
    density: "0.941–0.965 g/cm³",
    mfiRange: "0.05–25 g/10 min",
    meltingPoint: "125–135 °C",
    formula: "(C₂H₄)ₙ",
    producers: ["Borealis", "LyondellBasell", "INEOS", "SABIC", "Dow"],
    recyclable: true,
    marketContext: [
      "European HDPE capacity stands at roughly 5 million tonnes per year, concentrated in Northwestern Europe and around the Mediterranean. End-use demand splits across pressure pipe (PE100, ~30%), blow-molded packaging (~30%), film and sheet (~20%), and rigid containers, geomembrane, and engineering applications.",
      "Pipe-grade HDPE — particularly bimodal PE100 — is the highest-margin segment and trades at a €100–200/t premium over blow molding grade. Certification to EN 12201 (water) and EN 1555 (gas) with documented Long-Term Hydrostatic Strength is non-negotiable for utility-grade procurement.",
      "European production has lost share to Middle Eastern (Borouge, SABIC) and US Gulf (Dow, ExxonMobil, Formosa) suppliers since 2020. Net imports now cover roughly 15% of demand, concentrated in Antwerp, Rotterdam, and Hamburg. Domestic producers run cracker shutdowns more frequently to manage margins.",
    ],
    pricingDrivers: [
      "HDPE pricing follows the monthly Ethylene Contract Price (ECP) plus a polymer margin. The ECP tracks naphtha or US ethane depending on producer feedstock. Margins (ECP-to-HDPE delta) compressed sharply from €350/t in 2021 to under €200/t through 2024 as global capacity additions outpaced demand growth.",
      "Watch the ICIS HDPE weekly assessment for blow molding, film, and pipe separately — pipe trades a structural premium and decouples during pipe-project tendering cycles. Spot from US imports lands €80–150/t below European contract during arbitrage windows.",
    ],
    regulatoryContext: [
      "PE100 pipe carries dual certification: EN 12201 for potable water and EN 1555 for gas distribution. Both standards mandate continuous compliance with LTHS testing under ISO 9080. Producers maintain Material Quality Control certificates per batch, and pipe extruders qualify the resin for their specific equipment and processing window.",
      "Food-contact HDPE complies with EU 10/2011 for bottles, caps, and crates. PPWR pressure on bottle-grade rHDPE is intense — milk and juice carton replacements, household cleaning, and cosmetics packaging brand owners are voluntarily moving to 25–50% rHDPE ahead of 2030 mandates. Pipe applications remain virgin-only due to long-term performance liability.",
    ],
  },
  {
    slug: "polyethylene-ld",
    name: "Low-Density Polyethylene",
    abbreviation: "LDPE",
    family: "Polyolefin",
    shortDescription:
      "Branched polyethylene polymerised under high pressure. Excellent clarity and softness for blown films and extrusion coating.",
    applications: ["Shrink film", "Carrier bags", "Extrusion coating", "Squeeze bottles"],
    density: "0.910–0.940 g/cm³",
    mfiRange: "0.2–25 g/10 min",
    meltingPoint: "105–115 °C",
    formula: "(C₂H₄)ₙ",
    producers: ["LyondellBasell", "ExxonMobil", "SABIC", "Dow", "Versalis"],
    recyclable: true,
  },
  {
    slug: "polyethylene-lld",
    name: "Linear Low-Density Polyethylene",
    abbreviation: "LLDPE",
    family: "Polyolefin",
    shortDescription:
      "Copolymer of ethylene with butene, hexene or octene. Higher tensile and tear strength than LDPE; dominant in stretch and food film.",
    applications: ["Stretch film", "Food packaging film", "Liners", "Agricultural film"],
    density: "0.915–0.935 g/cm³",
    mfiRange: "0.5–50 g/10 min",
    meltingPoint: "120–130 °C",
    formula: "(C₂H₄)ₙ + comonomer",
    producers: ["ExxonMobil", "Dow", "SABIC", "Borealis"],
    recyclable: true,
  },
  {
    slug: "polyethylene-md",
    name: "Medium-Density Polyethylene",
    abbreviation: "MDPE",
    family: "Polyolefin",
    shortDescription:
      "Stiffer and more pressure-resistant than LDPE. Common in gas distribution pipe and industrial film.",
    applications: ["Gas pipe", "Cable jacketing", "Heavy-duty film", "Containers"],
    density: "0.926–0.940 g/cm³",
    mfiRange: "0.2–10 g/10 min",
    meltingPoint: "120–130 °C",
    formula: "(C₂H₄)ₙ",
    producers: ["Borealis", "INEOS", "SABIC"],
    recyclable: true,
  },
  {
    slug: "pvc-rigid",
    name: "Rigid PVC",
    abbreviation: "PVC-U",
    family: "Vinyl",
    shortDescription:
      "Unplasticised polyvinyl chloride. Used in window profiles, pressure pipe, and rigid sheet. Suspension grades dominate Europe.",
    applications: ["Window profiles", "Pressure pipe", "Rigid sheet", "Cable conduits"],
    density: "1.38–1.44 g/cm³",
    meltingPoint: "Decomposes >180 °C",
    formula: "(C₂H₃Cl)ₙ",
    producers: ["INOVYN", "Vestolit", "Vynova", "SCG", "Kem One"],
    recyclable: true,
  },
  {
    slug: "pvc-flexible",
    name: "Flexible PVC",
    abbreviation: "PVC-P",
    family: "Vinyl",
    shortDescription:
      "Plasticised PVC compounds. Cable sheathing, flooring, hoses and medical tubing. Compound formulation matters as much as the resin.",
    applications: ["Cable insulation", "Flooring", "Medical tubing", "Hoses"],
    density: "1.20–1.55 g/cm³",
    meltingPoint: "Decomposes >180 °C",
    formula: "(C₂H₃Cl)ₙ + plasticiser",
    producers: ["INOVYN", "Vynova", "Benvic", "Mexichem", "SCG"],
    recyclable: true,
  },
  {
    slug: "polyethylene-terephthalate",
    name: "Polyethylene Terephthalate",
    abbreviation: "PET",
    family: "Polyester",
    shortDescription:
      "Saturated polyester. Bottle-grade, fiber and thermoforming sheet. rPET adoption mandated by PPWR for beverage packaging.",
    applications: ["Beverage bottles", "Fiber and yarn", "Thermoformed trays", "Strapping"],
    density: "1.33–1.41 g/cm³",
    meltingPoint: "245–260 °C",
    formula: "(C₁₀H₈O₄)ₙ",
    producers: ["Indorama", "Equipolymers", "NEOGroup", "Reliance Europe"],
    recyclable: true,
    marketContext: [
      "European PET capacity sits around 3.5 million tonnes per year, dominated by Indorama (Workington, Rotterdam, Wloclawek), Equipolymers (Schkopau), Neo Group (Klaipeda), and Reliance Europe. Bottle-grade PET takes ~70% of demand — water, carbonated soft drinks, juice, and increasingly milk and dairy.",
      "Europe runs structurally short of bottle-grade PET; net imports fill the gap from India, the Middle East, and Indonesia. Anti-dumping duties on certain origins are reviewed periodically by the European Commission and shift the trade balance in 2–3 year cycles.",
      "rPET — recycled PET, food-contact grade — is the fastest-growing segment in Europe. Demand outstrips supply on a structural basis: PPWR mandates 25% rPET in beverage bottles by 2025 and 30% by 2030, but European bottle-to-bottle recycling capacity is still scaling. rPET trades at a 30–50% premium over virgin during tight collection periods, occasionally inverting the market.",
    ],
    pricingDrivers: [
      "PET resin price tracks two upstream contracts: Purified Terephthalic Acid (PTA, ~70% of cost) and Mono-Ethylene Glycol (MEG, ~30%). PTA itself tracks paraxylene (oil-derived) on a 1–2 month lag; MEG tracks naphtha or US shale gas. Both contracts settle monthly in Europe via ICIS, Argus, and Platts assessments.",
      "rPET pricing is driven by collection economics — Deposit Return Scheme rollouts in Germany, Romania, Slovakia, and Ireland have tightened bottle-flake supply and pushed rPET above virgin. Watch the ICIS rPET weekly index alongside virgin contract for the spread.",
    ],
    regulatoryContext: [
      "Food-contact PET is governed by EU 10/2011 plus EFSA opinions on individual catalyst systems (typically antimony-based, with germanium and titanium alternatives growing). Each rPET decontamination process requires individual EFSA approval under EU 2022/1616 — there are roughly 50 approved processes as of 2024.",
      "The Single-Use Plastics Directive Article 6 mandates that beverage bottle caps remain attached, in force July 2024. PPWR sets the recycled content schedule and introduces a Design for Recycling requirement that disqualifies most opaque, multi-layer, or sleeved PET formats from 2030.",
    ],
  },
  {
    slug: "polystyrene",
    name: "General-Purpose Polystyrene",
    abbreviation: "GPPS",
    family: "Styrenic",
    shortDescription:
      "Crystal-clear amorphous styrenic. Brittle but optically excellent. Disposable cutlery, cosmetics packaging, optical applications.",
    applications: ["Cosmetics packaging", "Disposable cutlery", "Optical lenses", "CD cases"],
    density: "1.04–1.06 g/cm³",
    meltingPoint: "Tg 100 °C",
    formula: "(C₈H₈)ₙ",
    producers: ["INEOS Styrolution", "Versalis", "Trinseo", "Synthos"],
    recyclable: true,
  },
  {
    slug: "polystyrene-impact",
    name: "High-Impact Polystyrene",
    abbreviation: "HIPS",
    family: "Styrenic",
    shortDescription:
      "Polystyrene toughened with polybutadiene rubber. Sheet thermoforming, appliance liners, dairy packaging.",
    applications: ["Refrigerator liners", "Yogurt cups", "Toys", "Office products"],
    density: "1.03–1.06 g/cm³",
    meltingPoint: "Tg 95 °C",
    formula: "(C₈H₈)ₙ + butadiene",
    producers: ["INEOS Styrolution", "Versalis", "Trinseo", "Synthos"],
    recyclable: true,
  },
  {
    slug: "acrylonitrile-butadiene-styrene",
    name: "ABS",
    abbreviation: "ABS",
    family: "Styrenic",
    shortDescription:
      "Terpolymer combining acrylonitrile rigidity, butadiene toughness and styrene processability. Automotive trim, electronics housings, appliances.",
    applications: ["Electronic housings", "Automotive interior", "Toys", "Pipe fittings"],
    density: "1.03–1.07 g/cm³",
    meltingPoint: "Tg 105 °C",
    formula: "Terpolymer",
    producers: ["INEOS Styrolution", "Trinseo", "LG Chem", "ELIX Polymers"],
    recyclable: true,
  },
  {
    slug: "recycled-polyolefins",
    name: "Recycled Polyolefins",
    abbreviation: "rPE / rPP",
    family: "Recycled",
    shortDescription:
      "Mechanically recycled HDPE, LDPE and PP from post-consumer and post-industrial sources. PCR, PIR and food-grade decontaminated streams.",
    applications: ["Bottles (HDPE)", "Films (LDPE)", "Crates and pallets", "Pipe non-pressure"],
    density: "Varies by stream",
    producers: ["Borealis (Borcycle)", "LyondellBasell (CirculenRecover)", "SABIC", "Veolia", "Plastic Energy"],
    recyclable: true,
  },
];

export const polymerBySlug = (slug: string) => polymers.find((p) => p.slug === slug);
