export interface UseCase {
  slug: string;
  applicationSlug: string;
  name: string;
  shortDescription: string;
  recommendedPolymers: string[];
  keyRequirements: string[];
  procurementNotes: string;
}

export const useCases: UseCase[] = [
  {
    slug: "storage-boxes",
    applicationSlug: "consumer-goods-houseware",
    name: "Storage boxes and crates",
    shortDescription:
      "Stackable lidded boxes for household and light-industrial storage. PP and HDPE dominate; UV stabilisation matters for garden and outdoor SKUs.",
    recommendedPolymers: ["polypropylene", "polyethylene-hd"],
    keyRequirements: [
      "Drop impact at sub-zero temperatures (cold-storage and outdoor SKUs)",
      "Lid-clip retention through 1,000+ open/close cycles",
      "Stackability under static load (60–80 kg per stack)",
      "Pigmentation and label/print compatibility for retail SKUs",
    ],
    procurementNotes:
      "PP impact copolymer (MFI 8–25) is the workhorse for cold-storage and indoor units. HDPE blow-grade is often used for budget outdoor and garden boxes — typically with carbon-black masterbatch for UV protection. The European market is led by converters like Curver, Keter, and SmartStore who source via long-term direct contracts with Borealis, LyondellBasell, and SABIC. Spot buyers running smaller volumes go through Resinex or Albis for distributor stock.",
  },
  {
    slug: "kitchenware",
    applicationSlug: "consumer-goods-houseware",
    name: "Kitchenware and food storage",
    shortDescription:
      "Reusable food containers, mixing bowls, measuring jugs, and chopping boards. Food contact compliance and dishwasher resistance are non-negotiable.",
    recommendedPolymers: ["polypropylene", "polyethylene-hd"],
    keyRequirements: [
      "EU 10/2011 food-contact compliance with grade-specific Declaration of Compliance",
      "Dishwasher cycle resistance to 90 °C with no warpage",
      "Microwave compatibility for PP grades; opaque only for HDPE",
      "Optical clarity for clear food storage (clarified random copolymer PP)",
    ],
    procurementNotes:
      "Clarified random copolymer PP — typically nucleated with Milliken Millad NX8000 or equivalent — dominates clear food storage. Specific grades like Borealis BH345MO or LyondellBasell Hostalen ACP are widely qualified at major converters. HDPE blow grade covers opaque containers and lids. Microwave-safe claims need PP exclusively (HDPE deforms at 130 °C). Major retail brands (Tupperware, IKEA 365+, Sistema) work direct with producers; private-label OEMs source through compounders.",
  },
  {
    slug: "garden-furniture",
    applicationSlug: "consumer-goods-houseware",
    name: "Garden furniture and outdoor goods",
    shortDescription:
      "Chairs, tables, planters, and outdoor storage. UV stability and weight-to-strength balance are the critical specs.",
    recommendedPolymers: ["polypropylene", "polyethylene-hd"],
    keyRequirements: [
      "5+ year UV stability via HALS additive packages",
      "Color fastness in saturated pigments (anthracite, terracotta, white)",
      "Mass-injection cycle time under 60 seconds for chair-back parts",
      "Stiffness at minimum wall thickness — talc or glass-filled grades common",
    ],
    procurementNotes:
      "UV-stabilised PP impact copolymer with HALS additives is the dominant chemistry. Talc-filled grades (10–20% loading) increase stiffness for chair backs and table tops without adding cycle-time penalty. Curver and Keter are the largest European converters and source via 3–5 year contracts with the major producers. Spot or near-prime PP at €100–200/t below contract is common for non-load-bearing parts (planters, decorative).",
  },
];

export const useCasesByApplication = (slug: string) =>
  useCases.filter((u) => u.applicationSlug === slug);

export const useCaseBySlug = (applicationSlug: string, slug: string) =>
  useCases.find(
    (u) => u.applicationSlug === applicationSlug && u.slug === slug
  );
