export interface LearnTerm {
  slug: string;
  name: string;
  category: "technical" | "regulatory" | "commercial" | "logistics";
  shortDescription: string;
  related: string[];
}

export const learnTerms: LearnTerm[] = [
  {
    slug: "melt-flow-rate-mfr",
    name: "Melt Flow Rate (MFR / MFI)",
    category: "technical",
    shortDescription:
      "Mass of polymer extruded through a standard capillary in 10 minutes under specified load and temperature. Inverse proxy for molecular weight. Higher MFR = easier flow, lower mechanical strength.",
    related: ["iso-1133-testing", "vicat-softening-point"],
  },
  {
    slug: "density-classification-pe",
    name: "Polyethylene Density Classification",
    category: "technical",
    shortDescription:
      "PE families divided by density: LDPE 0.910–0.940, LLDPE 0.915–0.935, MDPE 0.926–0.940, HDPE 0.941+. Density correlates with crystallinity, stiffness and barrier.",
    related: ["melt-flow-rate-mfr"],
  },
  {
    slug: "iso-1133-testing",
    name: "ISO 1133 (MFR Test Method)",
    category: "regulatory",
    shortDescription:
      "International standard for melt mass-flow rate (MFR) and melt volume-flow rate (MVR). Specifies temperature, load (e.g. 230 °C / 2.16 kg for PP) and equipment.",
    related: ["melt-flow-rate-mfr", "iso-178-flexural"],
  },
  {
    slug: "iso-178-flexural",
    name: "ISO 178 (Flexural Properties)",
    category: "regulatory",
    shortDescription:
      "Three-point bending test for flexural modulus and strength of plastics. Reported in MPa.",
    related: ["iso-1133-testing", "iso-180-izod-impact"],
  },
  {
    slug: "iso-180-izod-impact",
    name: "ISO 180 (Izod Impact)",
    category: "regulatory",
    shortDescription:
      "Pendulum impact test on a notched or unnotched specimen. Reported in kJ/m². Distinguishes brittle GPPS from impact-modified HIPS or ABS.",
    related: ["iso-178-flexural", "homopolymer-vs-copolymer"],
  },
  {
    slug: "vicat-softening-point",
    name: "Vicat Softening Point",
    category: "technical",
    shortDescription:
      "Temperature at which a flat-tipped needle penetrates 1 mm into a specimen under load. Useful proxy for upper service temperature.",
    related: ["iso-1133-testing"],
  },
  {
    slug: "food-contact-eu-10-2011",
    name: "EU 10/2011 Food Contact Regulation",
    category: "regulatory",
    shortDescription:
      "Plastic Materials and Articles Regulation. Lists permitted monomers and additives, sets specific migration limits (SML) and requires Declaration of Compliance (DoC) along the supply chain.",
    related: ["fda-21-cfr-177-1520", "reach-regulation-polymers"],
  },
  {
    slug: "fda-21-cfr-177-1520",
    name: "FDA 21 CFR 177.1520",
    category: "regulatory",
    shortDescription:
      "US FDA olefin polymers food-contact regulation. Common reference for PP and PE compliance even in EU-sold products targeting US-market exposure.",
    related: ["food-contact-eu-10-2011"],
  },
  {
    slug: "reach-regulation-polymers",
    name: "REACH and Polymers",
    category: "regulatory",
    shortDescription:
      "Polymers themselves are exempt from REACH registration but their monomers, additives and compounds are not. SVHC list updated twice yearly affects PVC plasticisers, flame retardants and stabilisers.",
    related: ["food-contact-eu-10-2011", "ppwr-packaging-mandate-2030"],
  },
  {
    slug: "ppwr-packaging-mandate-2030",
    name: "PPWR (EU Packaging Regulation)",
    category: "regulatory",
    shortDescription:
      "Packaging and Packaging Waste Regulation, in force from 2024. Mandates minimum recycled content (rPET 25% 2025, 30% 2030), design-for-recycling by 2030, reuse targets.",
    related: ["reach-regulation-polymers", "grs-recycled-content-certification"],
  },
  {
    slug: "homopolymer-vs-copolymer",
    name: "Homopolymer vs Copolymer",
    category: "technical",
    shortDescription:
      "Homopolymers polymerise a single monomer (e.g. PP-H = pure propylene). Copolymers add a second monomer (PP-R random, PP-B impact) for clarity, toughness or processing.",
    related: ["random-vs-block-copolymer"],
  },
  {
    slug: "random-vs-block-copolymer",
    name: "Random vs Block (Heterophasic) Copolymer",
    category: "technical",
    shortDescription:
      "Random copolymer disperses comonomer evenly along the chain (clarity, lower modulus). Block / heterophasic uses a separate rubber phase for impact (PP-B).",
    related: ["homopolymer-vs-copolymer"],
  },
  {
    slug: "bopp-vs-cpp-film",
    name: "BOPP vs CPP Film",
    category: "technical",
    shortDescription:
      "Biaxially-oriented PP (BOPP) is stretched in MD and TD for stiffness, clarity and barrier. Cast PP (CPP) is unoriented; softer, better seal initiation.",
    related: ["homopolymer-vs-copolymer"],
  },
  {
    slug: "prime-vs-near-prime-vs-off-grade",
    name: "Prime vs Near-Prime vs Off-Grade",
    category: "commercial",
    shortDescription:
      "Prime: full-spec with CoA. Near-prime: minor spec deviation, batch-tracked, 10–25% discount. Off-grade: out-of-spec, sold without CoA at 30–50% discount; quality varies widely.",
    related: ["polymer-quality-coa-certificate", "spot-market-vs-contract-pricing"],
  },
  {
    slug: "virgin-vs-recycled-polymer",
    name: "Virgin vs Recycled Polymer",
    category: "commercial",
    shortDescription:
      "Virgin: directly from monomer polymerisation. PCR (post-consumer recycled) and PIR (post-industrial recycled) recover end-of-life material; food-contact rPET via EFSA-listed processes.",
    related: ["mechanical-vs-chemical-recycling", "grs-recycled-content-certification"],
  },
  {
    slug: "mechanical-vs-chemical-recycling",
    name: "Mechanical vs Chemical Recycling",
    category: "regulatory",
    shortDescription:
      "Mechanical: shredding, washing, extrusion preserves the polymer chain. Chemical: depolymerisation back to monomer (e.g. PET glycolysis, PE pyrolysis) produces virgin-equivalent output.",
    related: ["virgin-vs-recycled-polymer", "ppwr-packaging-mandate-2030"],
  },
  {
    slug: "grs-recycled-content-certification",
    name: "GRS / RecyClass / ISCC Plus",
    category: "regulatory",
    shortDescription:
      "Voluntary certifications proving recycled or sustainable content claims. GRS for textile fiber, RecyClass for packaging, ISCC Plus for mass-balance bio/chemical recycled.",
    related: ["ppwr-packaging-mandate-2030", "virgin-vs-recycled-polymer"],
  },
  {
    slug: "incoterms-fca-fob-cif-polymer",
    name: "Incoterms for Polymer Trade",
    category: "logistics",
    shortDescription:
      "FCA = Free Carrier (seller loads, buyer pays freight). FOB = Free On Board (seller loads on vessel). CIF = seller arranges freight + insurance. DDP = seller delivers cleared at buyer.",
    related: ["lead-time-polymer-procurement"],
  },
  {
    slug: "polymer-pricing-monomer-link",
    name: "Polymer Pricing and Monomer Linkage",
    category: "commercial",
    shortDescription:
      "PE/PP track ethylene/propylene contract prices (ICIS monthly). PVC follows ethylene + chlorine. PET tracks paraxylene + MEG. Margin spread = polymer minus monomer cost.",
    related: ["oil-price-impact-on-resin"],
  },
  {
    slug: "oil-price-impact-on-resin",
    name: "Oil Price Impact on Resin Prices",
    category: "commercial",
    shortDescription:
      "Naphtha cracking dominates EU olefin supply, so Brent crude price moves filter to PE/PP within 4–8 weeks. US-imported PE follows ethane/Henry Hub gas pricing instead.",
    related: ["polymer-pricing-monomer-link"],
  },
  {
    slug: "25kg-bag-vs-big-bag-vs-octabin",
    name: "Bag, Big Bag, Octabin Packaging",
    category: "logistics",
    shortDescription:
      "25 kg PE/PP bags for small lots. 1000 kg FIBC big bags standard for full pallet load. Octabin (octagonal cardboard) ~1100 kg for converter inline feeding.",
    related: ["silo-vs-bulk-vs-bagged-delivery"],
  },
  {
    slug: "silo-vs-bulk-vs-bagged-delivery",
    name: "Silo / Bulk / Bagged Delivery",
    category: "logistics",
    shortDescription:
      "Bagged: small to medium volumes on pallets. Bulk truck: pneumatically conveyed to silo, ~25 t per load. Rail bulk: 60–90 t per car. Silo ownership shifts unloading risk to buyer.",
    related: ["25kg-bag-vs-big-bag-vs-octabin", "lead-time-polymer-procurement"],
  },
  {
    slug: "lead-time-polymer-procurement",
    name: "Lead Times in Polymer Procurement",
    category: "logistics",
    shortDescription:
      "EU producer-direct: 1–4 weeks for prime. Distributor stock: 1–3 days from local warehouse. Off-spec / spot: same week typical. Imports (US/ME): 4–8 weeks transit + clearance.",
    related: ["incoterms-fca-fob-cif-polymer"],
  },
  {
    slug: "producer-direct-vs-distributor-vs-trader",
    name: "Producer-Direct vs Distributor vs Trader",
    category: "commercial",
    shortDescription:
      "Producer-direct contracts require minimum annual tonnage. Distributors break bulk and offer credit. Traders work the spot market for prime, near-prime and off-grade lots.",
    related: ["spot-market-vs-contract-pricing", "prime-vs-near-prime-vs-off-grade"],
  },
  {
    slug: "spot-market-vs-contract-pricing",
    name: "Spot Market vs Contract Pricing",
    category: "commercial",
    shortDescription:
      "Contract: monthly negotiation tied to monomer index, typically 60–85% of EU demand. Spot: lot-by-lot, usually 5–20% above or below contract reflecting near-term tightness.",
    related: ["polymer-pricing-monomer-link", "producer-direct-vs-distributor-vs-trader"],
  },
  {
    slug: "nace-codes-plastics-industry",
    name: "NACE Codes for Plastics",
    category: "commercial",
    shortDescription:
      "NACE 20.16 Manufacture of plastics in primary forms. NACE 22.21 Manufacture of plastic plates, sheets, tubes and profiles. NACE 22.22 Plastic packaging goods. Used to identify customer industries.",
    related: [],
  },
  {
    slug: "polymer-color-masterbatch",
    name: "Color Masterbatch",
    category: "technical",
    shortDescription:
      "Concentrated pigment carried in a polymer matrix (typically PE for PE applications, PP for PP). Dosed at 1–4% to natural resin during processing.",
    related: ["polymer-additives-overview"],
  },
  {
    slug: "polymer-additives-overview",
    name: "Polymer Additives Overview",
    category: "technical",
    shortDescription:
      "Antioxidants (Irganox), UV stabilisers (HALS), nucleators, anti-blocks, slips, antistatics, flame retardants. 0.05–5% addition typical. REACH-restricted lists update twice yearly.",
    related: ["polymer-color-masterbatch", "reach-regulation-polymers"],
  },
  {
    slug: "bio-pe-vs-recycled-pe",
    name: "Bio-PE vs Recycled PE",
    category: "regulatory",
    shortDescription:
      "Bio-PE (e.g. Braskem I'm Green) is virgin polymer made from sugarcane ethanol, chemically identical to fossil PE. Recycled PE comes from end-of-life material. Different sustainability arguments.",
    related: ["virgin-vs-recycled-polymer", "mechanical-vs-chemical-recycling"],
  },
  {
    slug: "polymer-quality-coa-certificate",
    name: "Certificate of Analysis (CoA)",
    category: "commercial",
    shortDescription:
      "Per-batch document listing tested properties (MFI, density, moisture, ash, color) against grade specification. Required for prime material; absent on off-grade.",
    related: ["prime-vs-near-prime-vs-off-grade"],
  },
];

export const learnTermBySlug = (slug: string) =>
  learnTerms.find((t) => t.slug === slug);
