export interface Application {
  slug: string;
  name: string;
  category: string;
  shortDescription: string;
  recommendedPolymers: string[];
  regulations: string[];
}

export const applications: Application[] = [
  {
    slug: "food-packaging-rigid",
    name: "Rigid Food Packaging",
    category: "Packaging",
    shortDescription:
      "Trays, tubs, pots and closures in direct food contact. PP, PET and PS dominate; clarified PP and APET for visual presentation.",
    recommendedPolymers: ["polypropylene", "polyethylene-terephthalate", "polystyrene"],
    regulations: ["EU 10/2011", "FDA 21 CFR 177", "EFSA opinion list"],
  },
  {
    slug: "food-packaging-flexible-film",
    name: "Flexible Food Packaging Film",
    category: "Packaging",
    shortDescription:
      "Mono and laminated films for snack, fresh food, dry goods. PE-only structures rising to comply with PPWR recyclability mandate.",
    recommendedPolymers: ["polyethylene-lld", "polyethylene-ld", "polypropylene"],
    regulations: ["EU 10/2011", "PPWR (2030 design-for-recycling)"],
  },
  {
    slug: "beverage-bottles",
    name: "Beverage Bottles",
    category: "Packaging",
    shortDescription:
      "Water, CSD, juice. PET dominates in Europe with rPET inclusion rising under PPWR. HDPE for dairy and small-volume dosing.",
    recommendedPolymers: ["polyethylene-terephthalate", "polyethylene-hd"],
    regulations: ["EU 10/2011", "SUPD bottle attached cap", "PPWR (25% rPET 2025, 30% 2030)"],
  },
  {
    slug: "pipe-extrusion-pressure",
    name: "Pressure Pipe Extrusion",
    category: "Construction",
    shortDescription:
      "PE100 and MDPE for water and gas distribution. PVC-O for irrigation. ISO 4427, EN 12201, EN 1555 governing.",
    recommendedPolymers: ["polyethylene-hd", "polyethylene-md", "pvc-rigid"],
    regulations: ["EN 12201", "EN 1555", "ISO 4427"],
  },
  {
    slug: "pipe-extrusion-non-pressure",
    name: "Non-Pressure Pipe",
    category: "Construction",
    shortDescription:
      "Sewer, drainage, cable conduit. PVC-U dominant; structured-wall PP and PE for larger diameters.",
    recommendedPolymers: ["pvc-rigid", "polypropylene", "polyethylene-hd"],
    regulations: ["EN 1401", "EN 13476"],
  },
  {
    slug: "automotive-interior",
    name: "Automotive Interior",
    category: "Automotive",
    shortDescription:
      "Dashboards, door panels, A/B/C pillars. Glass- or talc-filled PP impact copolymers dominate; ABS for visible trim.",
    recommendedPolymers: ["polypropylene", "acrylonitrile-butadiene-styrene"],
    regulations: ["VDA 270 (odor)", "ISO 16750"],
  },
  {
    slug: "automotive-bumper-fascia",
    name: "Automotive Bumper Fascia",
    category: "Automotive",
    shortDescription:
      "TPO (PP/EPDM) compounds for bumpers. Thick-wall injection molding with low CLTE for paintability.",
    recommendedPolymers: ["polypropylene"],
    regulations: ["ECE R42 impact"],
  },
  {
    slug: "automotive-under-hood",
    name: "Automotive Under-Hood",
    category: "Automotive",
    shortDescription:
      "Air-intake manifolds, cooling ducts, battery housings. Glass-filled PA66, PA6, and increasingly PP for cost-down.",
    recommendedPolymers: ["polypropylene"],
    regulations: ["ISO 16750 thermal"],
  },
  {
    slug: "medical-devices-rigid",
    name: "Rigid Medical Devices",
    category: "Medical",
    shortDescription:
      "Syringes, IV components, diagnostic housings. Clear PP, COC and PC dominant; gamma- and EtO-stable grades required.",
    recommendedPolymers: ["polypropylene", "polystyrene"],
    regulations: ["MDR 2017/745", "ISO 10993", "USP Class VI"],
  },
  {
    slug: "medical-flexible-tubing",
    name: "Medical Flexible Tubing",
    category: "Medical",
    shortDescription:
      "Infusion sets, blood bags, peristaltic tubing. DEHP-free PVC compounds and TPE alternatives (SEBS, COPE) growing.",
    recommendedPolymers: ["pvc-flexible"],
    regulations: ["MDR 2017/745", "ISO 10993", "REACH SVHC list"],
  },
  {
    slug: "agricultural-film",
    name: "Agricultural Film",
    category: "Agriculture",
    shortDescription:
      "Greenhouse, mulch, silage films. UV-stabilised LDPE/LLDPE blends. Biodegradable mulch films grow under EU CAP incentives.",
    recommendedPolymers: ["polyethylene-ld", "polyethylene-lld"],
    regulations: ["EN 13655 (mulch)", "EN 13207 (silage)"],
  },
  {
    slug: "construction-cable-sheathing",
    name: "Cable Sheathing",
    category: "Construction",
    shortDescription:
      "Low-voltage and instrumentation cables. HFFR PE compounds replacing PVC in tunnel/CPR-classified projects.",
    recommendedPolymers: ["pvc-flexible", "polyethylene-md"],
    regulations: ["CPR EN 50575", "IEC 60332"],
  },
  {
    slug: "consumer-goods-houseware",
    name: "Consumer Goods & Houseware",
    category: "Consumer",
    shortDescription:
      "Storage boxes, furniture, kitchenware. Cost-driven applications dominated by PP and HDPE.",
    recommendedPolymers: ["polypropylene", "polyethylene-hd"],
    regulations: ["EN 71 (toys)", "Food contact for kitchenware"],
  },
  {
    slug: "electronic-housings",
    name: "Electronic Housings",
    category: "Electronics",
    shortDescription:
      "IT, white goods and consumer electronics enclosures. UL94 V-0 flame-retarded ABS, PC/ABS and PC for high-end.",
    recommendedPolymers: ["acrylonitrile-butadiene-styrene"],
    regulations: ["UL94", "RoHS 2011/65/EU", "WEEE"],
  },
  {
    slug: "personal-care-packaging",
    name: "Personal Care Packaging",
    category: "Packaging",
    shortDescription:
      "Shampoo, detergent, cosmetics bottles and tubes. HDPE blow molded; PET for clear bottles; PCR content increasingly mandated by brand owners.",
    recommendedPolymers: ["polyethylene-hd", "polyethylene-terephthalate"],
    regulations: ["PPWR", "REACH"],
  },
];

export const applicationBySlug = (slug: string) =>
  applications.find((a) => a.slug === slug);
