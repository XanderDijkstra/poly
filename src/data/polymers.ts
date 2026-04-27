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
