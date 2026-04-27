export interface Grade {
  slug: string;
  name: string;
  polymerSlug: string;
  mfi?: string;
  density?: string;
  process: string;
  application: string;
  applicationSlug?: string;
  shortDescription: string;
  equivalents?: string[];
  packaging?: string[];
}

export const grades: Grade[] = [
  {
    slug: "pp-homopolymer-injection-molding",
    name: "PP Homopolymer — Injection Molding",
    polymerSlug: "polypropylene",
    mfi: "12 g/10 min",
    density: "0.905 g/cm³",
    process: "Injection molding",
    application: "Thin-wall packaging, closures",
    applicationSlug: "food-packaging-rigid",
    shortDescription:
      "Standard PP homopolymer for general injection molded parts. Balanced stiffness and flow. MFI 8–25 typical for closures and thin-wall containers.",
    equivalents: ["Borealis HF136MO", "LyondellBasell Moplen HP500N", "ExxonMobil PP1024"],
    packaging: ["25 kg bags", "1000 kg big bags", "Octabin", "Bulk silo"],
  },
  {
    slug: "pp-homopolymer-thin-wall-packaging",
    name: "PP Homopolymer — Thin-Wall Packaging",
    polymerSlug: "polypropylene",
    mfi: "45 g/10 min",
    process: "Injection molding",
    application: "Thin-wall pots and tubs",
    applicationSlug: "food-packaging-rigid",
    shortDescription:
      "High-flow PP homopolymer for thin-wall food containers. Excellent flow, fast cycle times. Often nucleated for clarity.",
    equivalents: ["Borealis HJ325MO", "LyondellBasell Moplen HP648T"],
  },
  {
    slug: "pp-copolymer-impact",
    name: "PP Impact Copolymer",
    polymerSlug: "polypropylene",
    mfi: "10 g/10 min",
    process: "Injection molding",
    application: "Automotive, crates, paint pails",
    applicationSlug: "automotive-interior",
    shortDescription:
      "Heterophasic PP with rubber phase for impact strength at low temperatures. Standard for automotive trim and industrial containers.",
    equivalents: ["Borealis BJ368MO", "LyondellBasell Hostacom"],
  },
  {
    slug: "pp-random-copolymer-clarified",
    name: "PP Random Copolymer Clarified",
    polymerSlug: "polypropylene",
    mfi: "20 g/10 min",
    process: "Injection molding / blow molding",
    application: "Clear food packaging, housewares",
    applicationSlug: "food-packaging-rigid",
    shortDescription:
      "Ethylene-co-PP with nucleating agent for high clarity. Drop-in replacement for some PET applications where heat resistance matters.",
    equivalents: ["Borealis RJ370MO", "LyondellBasell Moplen RP248R"],
  },
  {
    slug: "pp-fiber-spinning",
    name: "PP Fiber Spinning Grade",
    polymerSlug: "polypropylene",
    mfi: "25 g/10 min",
    process: "Melt spinning",
    application: "Nonwovens, carpets, ropes",
    shortDescription:
      "Narrow MWD PP for fiber and meltblown nonwovens. Hygiene products, geotextiles, FFP masks.",
    equivalents: ["Borealis HG475FB", "LyondellBasell Metocene"],
  },
  {
    slug: "pp-bopp-film",
    name: "PP BOPP Film Grade",
    polymerSlug: "polypropylene",
    mfi: "2.5 g/10 min",
    process: "Biaxial film extrusion",
    application: "Snack packaging, labels",
    applicationSlug: "food-packaging-flexible-film",
    shortDescription:
      "Isotactic PP optimised for biaxially-oriented film line. Excellent clarity and stiffness for snack laminates and pressure-sensitive labels.",
    equivalents: ["Borealis HC205TF", "ExxonMobil PP4612E2"],
  },
  {
    slug: "hdpe-blow-molding-bottles",
    name: "HDPE Blow Molding — Bottles",
    polymerSlug: "polyethylene-hd",
    mfi: "0.3 g/10 min (HLMI 8)",
    density: "0.952 g/cm³",
    process: "Extrusion blow molding",
    application: "Detergent and dairy bottles",
    applicationSlug: "personal-care-packaging",
    shortDescription:
      "High-molecular-weight HDPE for bottles up to 10 L. Excellent ESCR and stiffness for HDPE detergent and dairy containers.",
    equivalents: ["Borealis BS2581", "INEOS Eltex B4020", "SABIC B5803"],
  },
  {
    slug: "hdpe-extrusion-pipe",
    name: "HDPE Pipe Grade PE100",
    polymerSlug: "polyethylene-hd",
    density: "0.959 g/cm³",
    process: "Pipe extrusion",
    application: "Pressure water and gas pipe",
    applicationSlug: "pipe-extrusion-pressure",
    shortDescription:
      "PE100 bimodal HDPE for pressure pipe to ISO 4427 / EN 12201. MRS 10 MPa at 20 °C / 50 years. Black or RC variants for trenchless.",
    equivalents: ["Borealis BorSafe HE3490", "INEOS Eltex TUB121", "SABIC Vestolen A6060R"],
  },
  {
    slug: "hdpe-injection-molding",
    name: "HDPE Injection Molding",
    polymerSlug: "polyethylene-hd",
    mfi: "8 g/10 min",
    density: "0.961 g/cm³",
    process: "Injection molding",
    application: "Crates, caps, pails",
    applicationSlug: "consumer-goods-houseware",
    shortDescription:
      "Standard HDPE for crates, closures, and rigid containers. Good stiffness, ESCR and processability.",
    equivalents: ["Borealis MG9601S", "INEOS Eltex A4040P"],
  },
  {
    slug: "hdpe-film-grade",
    name: "HDPE Film Grade",
    polymerSlug: "polyethylene-hd",
    mfi: "0.05 g/10 min (HLMI 4)",
    density: "0.948 g/cm³",
    process: "Film blowing",
    application: "Carrier bags, liners",
    applicationSlug: "food-packaging-flexible-film",
    shortDescription:
      "Hexene-comonomer HDPE for high-stalk blown film. Excellent dart impact and tear for thin gauge bags and sacks.",
  },
  {
    slug: "ldpe-film-extrusion",
    name: "LDPE Film Extrusion",
    polymerSlug: "polyethylene-ld",
    mfi: "0.3 g/10 min",
    density: "0.923 g/cm³",
    process: "Blown film",
    application: "Shrink and stretch hood film",
    applicationSlug: "food-packaging-flexible-film",
    shortDescription:
      "General-purpose LDPE for shrink and lamination film. Good optical and processing window.",
  },
  {
    slug: "ldpe-injection-molding",
    name: "LDPE Injection Molding",
    polymerSlug: "polyethylene-ld",
    mfi: "20 g/10 min",
    density: "0.922 g/cm³",
    process: "Injection molding",
    application: "Lids, soft toys",
    shortDescription:
      "Soft-flex LDPE for injection molded lids and squeeze-fit closures.",
  },
  {
    slug: "lldpe-c4-film",
    name: "LLDPE C4 Film Grade",
    polymerSlug: "polyethylene-lld",
    mfi: "1.0 g/10 min",
    density: "0.918 g/cm³",
    process: "Blown film",
    application: "General-purpose film",
    shortDescription:
      "Butene-1 comonomer LLDPE. Cost-efficient blown film with good seal initiation. Heavy-duty sacks and liners.",
  },
  {
    slug: "lldpe-c6-film",
    name: "LLDPE C6 Film Grade",
    polymerSlug: "polyethylene-lld",
    mfi: "1.0 g/10 min",
    density: "0.918 g/cm³",
    process: "Blown film",
    application: "Food and lamination film",
    applicationSlug: "food-packaging-flexible-film",
    shortDescription:
      "Hexene-1 comonomer LLDPE. Higher dart and tear than C4. Lamination, food packaging and collation shrink.",
  },
  {
    slug: "lldpe-c8-stretch-film",
    name: "LLDPE C8 Stretch Film",
    polymerSlug: "polyethylene-lld",
    mfi: "3.5 g/10 min",
    density: "0.917 g/cm³",
    process: "Cast film",
    application: "Pallet stretch film",
    shortDescription:
      "Octene-1 metallocene LLDPE for cast stretch film. High puncture and cling — best in class for pallet wrap.",
  },
  {
    slug: "mdpe-pipe-grade",
    name: "MDPE Pipe Grade PE80",
    polymerSlug: "polyethylene-md",
    density: "0.940 g/cm³",
    process: "Pipe extrusion",
    application: "Gas distribution pipe",
    applicationSlug: "pipe-extrusion-pressure",
    shortDescription:
      "Yellow PE80 MDPE for gas distribution to EN 1555. MRS 8 MPa.",
  },
  {
    slug: "pvc-suspension-pipe",
    name: "PVC Suspension Pipe Grade",
    polymerSlug: "pvc-rigid",
    process: "Pipe extrusion",
    application: "Sewer and drainage pipe",
    applicationSlug: "pipe-extrusion-non-pressure",
    shortDescription:
      "K-67 / K-68 suspension PVC for rigid pipe and fittings. Compounded with stabilisers (Ca-Zn or organotin in EU).",
  },
  {
    slug: "pvc-emulsion-coatings",
    name: "PVC Emulsion (Paste) Grade",
    polymerSlug: "pvc-flexible",
    process: "Spread coating / dip molding",
    application: "Coated fabrics, gloves, flooring",
    shortDescription:
      "Emulsion-polymerised PVC for plastisol formulations. Spread-coated tarpaulin, dipped gloves, automotive underbody.",
  },
  {
    slug: "pvc-cable-compound",
    name: "PVC Cable Compound",
    polymerSlug: "pvc-flexible",
    process: "Cable extrusion",
    application: "Cable insulation and sheathing",
    applicationSlug: "construction-cable-sheathing",
    shortDescription:
      "Pre-compounded flexible PVC for low-voltage cables. Phthalate-free formulations standard in EU since REACH restriction.",
  },
  {
    slug: "pet-bottle-grade",
    name: "PET Bottle Grade",
    polymerSlug: "polyethylene-terephthalate",
    process: "Injection stretch blow molding (ISBM)",
    application: "Beverage bottles",
    applicationSlug: "beverage-bottles",
    shortDescription:
      "IV 0.78–0.82 dL/g bottle-grade PET for water and CSD. PPWR mandates ≥25% rPET in beverage bottles by 2025, 30% by 2030.",
    equivalents: ["Indorama RAMAPET N1", "Equipolymers Lighter B", "Reliance Relpet B7800"],
  },
  {
    slug: "pet-fiber-grade",
    name: "PET Fiber Grade",
    polymerSlug: "polyethylene-terephthalate",
    process: "Melt spinning",
    application: "Polyester staple fiber, filament",
    shortDescription:
      "Lower-IV PET (0.62–0.66) for textile fiber. Bottle-flake-derived rPET widely used since 2020 for sustainability claims.",
  },
  {
    slug: "pet-thermoforming",
    name: "PET Thermoforming Sheet",
    polymerSlug: "polyethylene-terephthalate",
    process: "Sheet extrusion + thermoforming",
    application: "Trays, blisters, deli containers",
    applicationSlug: "food-packaging-rigid",
    shortDescription:
      "APET sheet for clear thermoformed trays. CPET (crystalline) variant for ovenable containers up to 220 °C.",
  },
  {
    slug: "gpps-injection-molding",
    name: "GPPS Injection Molding",
    polymerSlug: "polystyrene",
    mfi: "12 g/10 min",
    process: "Injection molding",
    application: "Cosmetics, optical, disposable",
    shortDescription:
      "Crystal-clear GPPS for injection molded parts. Brittle — alloy with HIPS or use SBC for impact applications.",
  },
  {
    slug: "hips-extrusion",
    name: "HIPS Extrusion Grade",
    polymerSlug: "polystyrene-impact",
    mfi: "4 g/10 min",
    process: "Sheet extrusion + thermoforming",
    application: "Refrigerator liners, dairy",
    shortDescription:
      "High-impact polystyrene sheet for thermoforming. Refrigerator inner liners, yogurt cups, vending cups.",
  },
  {
    slug: "abs-injection-molding",
    name: "ABS Injection Molding",
    polymerSlug: "acrylonitrile-butadiene-styrene",
    mfi: "20 g/10 min",
    process: "Injection molding",
    application: "Electronics, appliances, automotive",
    applicationSlug: "electronic-housings",
    shortDescription:
      "Standard ABS for general purpose injection molding. UL94 V-0 flame-retarded variants for IT and white goods.",
  },
  {
    slug: "abs-extrusion",
    name: "ABS Extrusion Grade",
    polymerSlug: "acrylonitrile-butadiene-styrene",
    process: "Sheet extrusion + thermoforming",
    application: "Refrigerator liners, suitcases, automotive",
    shortDescription:
      "Higher-MW ABS for sheet extrusion. Co-extruded with PMMA cap layer for weather resistance.",
  },
  {
    slug: "recycled-hdpe-blow-molding",
    name: "Recycled HDPE Blow Molding",
    polymerSlug: "recycled-polyolefins",
    process: "Extrusion blow molding",
    application: "Detergent and household bottles",
    applicationSlug: "personal-care-packaging",
    shortDescription:
      "PCR HDPE from post-consumer bottle stream. Typical 30–100% inclusion in non-food packaging. Food-contact rPE limited to specific approved processes.",
  },
  {
    slug: "recycled-ldpe-film",
    name: "Recycled LDPE Film",
    polymerSlug: "recycled-polyolefins",
    process: "Blown film",
    application: "Refuse sacks, builder bags",
    shortDescription:
      "Post-consumer or post-industrial LDPE for non-food film. Typical inclusion 30–80% with virgin LLDPE.",
  },
  {
    slug: "recycled-pp-injection",
    name: "Recycled PP Injection",
    polymerSlug: "recycled-polyolefins",
    process: "Injection molding",
    application: "Crates, automotive non-visible",
    shortDescription:
      "Mechanically recycled PP from rigid packaging streams. Suitable for non-aesthetic parts and dark colours.",
  },
  {
    slug: "recycled-pet-bottle",
    name: "Recycled PET Bottle",
    polymerSlug: "polyethylene-terephthalate",
    process: "Injection stretch blow molding",
    application: "Beverage bottles",
    applicationSlug: "beverage-bottles",
    shortDescription:
      "Food-grade rPET pellets from approved decontamination processes (EFSA-listed). Mandated minimum content under PPWR.",
  },
];

export const gradeBySlug = (slug: string) => grades.find((g) => g.slug === slug);
export const gradesByPolymer = (polymerSlug: string) =>
  grades.filter((g) => g.polymerSlug === polymerSlug);
