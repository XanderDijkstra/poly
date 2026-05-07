export interface Application {
  slug: string;
  name: string;
  category: string;
  shortDescription: string;
  recommendedPolymers: string[];
  regulations: string[];
  commonQuestions?: { q: string; a: string }[];
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
    commonQuestions: [
      {
        q: "What plastic is used for rigid food packaging in Europe?",
        a: "Polypropylene (PP), PET and high-impact polystyrene (HIPS) cover the vast majority of rigid food packaging on European supermarket shelves. PP handles tubs, lids and ovenable trays; PET (in its APET sheet form) is thermoformed into fresh produce trays and clear punnets; HIPS is used for opaque yogurt and dessert pots. All three meet EU 10/2011 food contact requirements with grade-specific Declarations of Compliance.",
      },
      {
        q: "Is plastic food packaging safe for hot food?",
        a: "Polypropylene is the standard material for plastic food packaging that contacts hot or microwaved food — it stays dimensionally stable up to 100–110 °C continuously and tolerates microwave use. PET deforms above 70 °C unless it has been crystallised (CPET), in which case it withstands oven temperatures up to 220 °C. HIPS and APET are for cold and ambient applications only.",
      },
      {
        q: "Is rigid plastic food packaging recyclable?",
        a: "PET trays and PP tubs are mechanically recyclable in well-functioning collection systems. Recyclability is highest when the format is monomaterial — multi-layer barriers, dark pigmentation and bonded labels all reduce recyclate value. Under PPWR's design-for-recycling rules from 2030, packaging that contaminates major recycling streams (notably PVC mixed into PET sortation) faces phase-out.",
      },
      {
        q: "What is the best plastic for fresh produce trays?",
        a: "APET (amorphous PET) sheet thermoformed into trays is the European market standard. It offers the optical clarity needed for visual merchandising in chilled cabinets, accepts 30–50% recycled content (rPET), and seals well to lidding films for modified atmosphere packaging. Monomaterial PP trays are growing in share where PP/PP recyclability is the priority under PPWR.",
      },
    ],
  },
  {
    slug: "food-packaging-flexible-film",
    name: "Flexible Food Packaging Film",
    category: "Packaging",
    shortDescription:
      "Mono and laminated films for snack, fresh food, dry goods. PE-only structures rising to comply with PPWR recyclability mandate.",
    recommendedPolymers: ["polyethylene-lld", "polyethylene-ld", "polypropylene"],
    regulations: ["EU 10/2011", "PPWR (2030 design-for-recycling)"],
    commonQuestions: [
      {
        q: "What plastic film is used for food packaging?",
        a: "Polyethylene (PE) and polypropylene (PP) films cover most food applications: snack bags, fresh produce wrap, stand-up pouches and frozen food packs. Biaxially-oriented PP (BOPP) — often metallised — dominates crisp and snack bags. Cast PP and PE blends handle horizontal flow-wrap for bread and produce. Multilayer PE/PE structures are replacing PET/PE laminates to comply with PPWR recyclability rules.",
      },
      {
        q: "Are plastic food bags recyclable?",
        a: "Mono-material PE bags (LDPE or LLDPE) are recyclable through soft-plastics collection schemes that exist in some European countries. Multi-layer films combining PET and PE — historically common for snack and pouch packaging — are technically harder to recycle, which is why brand owners are actively redesigning to PE-only or PP-only structures ahead of PPWR's 2030 design-for-recycling thresholds.",
      },
      {
        q: "What plastic is used for crisp packets and snack bags?",
        a: "The standard structure is metallised BOPP (biaxially-oriented polypropylene) film, sometimes laminated with a PE seal layer. The metallised layer provides oxygen and moisture barrier to keep snacks fresh; the BOPP backbone gives the stiffness needed for stand-up pouch geometry. Newer monomaterial PE structures using high-barrier coatings are emerging to meet PPWR recyclability targets.",
      },
      {
        q: "Is cling film safe for food?",
        a: "Modern cling films sold in Europe for household and commercial food contact are typically polyethylene (PE) or non-PVC alternatives. Older PVC-based cling films, which contained plasticisers like DEHA that could migrate into fatty foods, have been largely phased out of European retail. Always check the food-contact declaration on the pack — anything compliant should reference EU 10/2011.",
      },
    ],
  },
  {
    slug: "beverage-bottles",
    name: "Beverage Bottles",
    category: "Packaging",
    shortDescription:
      "Water, CSD, juice. PET dominates in Europe with rPET inclusion rising under PPWR. HDPE for dairy and small-volume dosing.",
    recommendedPolymers: ["polyethylene-terephthalate", "polyethylene-hd"],
    regulations: ["EU 10/2011", "SUPD bottle attached cap", "PPWR (25% rPET 2025, 30% 2030)"],
    commonQuestions: [
      {
        q: "What plastic are water bottles made of?",
        a: "European still and sparkling water bottles are made of PET (polyethylene terephthalate). PET is light, transparent, mechanically strong enough for thin-wall blow-moulded bottles, and recyclable through deposit-and-return schemes. From 2025, all PET beverage bottles sold in the EU must contain at least 25% recycled content, rising to 30% in 2030 under PPWR.",
      },
      {
        q: "Is PET plastic safe to drink from?",
        a: "Yes. PET is approved for direct food and beverage contact under EU 10/2011 and FDA 21 CFR 177.1630. It does not contain BPA. Acetaldehyde levels in modern bottle-grade PET are below the threshold that would affect water taste — typically under 6 μg/kg in finished bottles. PET is the most widely used plastic for beverage packaging globally.",
      },
      {
        q: "What plastic is used for milk bottles?",
        a: "Most European milk and dairy bottles are extrusion blow-moulded HDPE (high-density polyethylene), typically pigmented white with TiO₂ to protect light-sensitive vitamins. HDPE is food-contact compliant, robust through cold-chain handling, and recyclable into dairy-bottle-to-dairy-bottle closed loops in countries with deposit-and-return infrastructure.",
      },
      {
        q: "Why are some plastic bottles green or blue?",
        a: "Coloured PET (green for sparkling water, blue for some still waters) uses pigments added at the resin or master-batch stage. Coloured PET is recyclable but sorts into a separate recyclate stream that commands a lower price than clear PET. Several major brands have moved to clear PET to maximise rPET recovery and meet recycled-content targets.",
      },
    ],
  },
  {
    slug: "pipe-extrusion-pressure",
    name: "Pressure Pipe Extrusion",
    category: "Construction",
    shortDescription:
      "PE100 and MDPE for water and gas distribution. PVC-O for irrigation. ISO 4427, EN 12201, EN 1555 governing.",
    recommendedPolymers: ["polyethylene-hd", "polyethylene-md", "pvc-rigid"],
    regulations: ["EN 12201", "EN 1555", "ISO 4427"],
    commonQuestions: [
      {
        q: "What plastic is used for water pipes?",
        a: "European water distribution mains are predominantly made from PE100 (high-density polyethylene). PE100 pipes carry potable water at pressures up to 16 bar with a 50-year design life under ISO 4427 and EN 12201. PVC-U is also used for water distribution, particularly in southern Europe, while PVC-O (molecularly oriented PVC) is gaining share for large-diameter irrigation mains.",
      },
      {
        q: "Is PE pipe better than PVC for water?",
        a: "It depends on the application. PE100 is more flexible, fusion-weldable (which means leak-free joints), and tolerates ground movement and freezing without cracking — strengths in water distribution networks. PVC is stiffer, lighter and cheaper for the same pressure rating, and is preferred for indoor plumbing and certain irrigation systems. Most modern European utilities standardise on PE for new mains.",
      },
      {
        q: "How long does plastic pipe last?",
        a: "PE100 and PVC-U pressure pipes are designed for a 50-year service life when installed correctly. Real-world performance often exceeds this — plastic pipes installed in the 1970s are still operating across Europe. The main failure modes are mechanical damage during excavation, joint failures, and slow crack growth in older PE grades that pre-date the PE100 specification.",
      },
      {
        q: "Why is gas pipe yellow and water pipe blue?",
        a: "European utility pipes are colour-coded for safety and identification during excavation. Yellow PE pipe is for natural gas distribution (governed by EN 1555). Blue, or black-with-blue-stripes, PE pipe is for potable water (EN 12201). The colour comes from pigment master-batch added during extrusion. It's part of the regulatory specification — using the wrong colour disqualifies the pipe from utility approval.",
      },
    ],
  },
  {
    slug: "pipe-extrusion-non-pressure",
    name: "Non-Pressure Pipe",
    category: "Construction",
    shortDescription:
      "Sewer, drainage, cable conduit. PVC-U dominant; structured-wall PP and PE for larger diameters.",
    recommendedPolymers: ["pvc-rigid", "polypropylene", "polyethylene-hd"],
    regulations: ["EN 1401", "EN 13476"],
    commonQuestions: [
      {
        q: "What plastic is used for sewer pipes?",
        a: "Most modern sewer and gravity drainage pipes are PVC-U (unplasticised PVC), which dominates diameters up to 400 mm under EN 1401. For larger diameters and culvert applications, structured-wall PP and HDPE pipes (under EN 13476) are increasingly used because they combine the required ring stiffness with lighter weight and longer pipe lengths.",
      },
      {
        q: "Is plastic drainage pipe better than concrete?",
        a: "Plastic pipes are lighter, faster to install, and resist H₂S corrosion better than concrete in sewer applications. Concrete still wins on very large diameters (>1200 mm) and where structural load capacity matters more than chemical resistance. For most municipal drainage and stormwater applications under 1000 mm, plastic has become the European default.",
      },
      {
        q: "What plastic is used for cable conduit?",
        a: "Corrugated cable conduit and ducting is typically made from polypropylene (PP) or HDPE. The corrugated profile gives crush resistance per EN 61386 while keeping the conduit flexible for trenching. Halogen-free variants are mandated for tunnels and underground railways. The recent FTTH broadband roll-out has driven demand for HDPE microducts (small-bore conduit for blown-fibre installation).",
      },
      {
        q: "Are plastic pipes recyclable?",
        a: "Yes — PVC, PP and PE pipes are all mechanically recyclable, and the European pipe industry runs an active take-back scheme (VinylPlus and similar). Recycled pipe content is most common in non-pressure applications (drainage, conduit). Pressure pipes for potable water typically use virgin material because traceability and regulatory approval are harder to maintain with recycled feedstock.",
      },
    ],
  },
  {
    slug: "automotive-interior",
    name: "Automotive Interior",
    category: "Automotive",
    shortDescription:
      "Dashboards, door panels, A/B/C pillars. Glass- or talc-filled PP impact copolymers dominate; ABS for visible trim.",
    recommendedPolymers: ["polypropylene", "acrylonitrile-butadiene-styrene"],
    regulations: ["VDA 270 (odor)", "ISO 16750"],
    commonQuestions: [
      {
        q: "What plastic is used inside cars?",
        a: "Automotive interiors are dominated by polypropylene (PP) — most often talc-filled or glass-filled grades — for instrument panel carriers, door panels, centre consoles and pillar trims. ABS and PC/ABS blends are used for premium-finish trim where higher gloss or scratch resistance is required. Soft-touch surfaces are typically thermoplastic olefin (TPO) skins moulded over PP foam substrates.",
      },
      {
        q: "What's the difference between ABS and PP for car interiors?",
        a: "PP is cheaper, lighter and dominates volume parts (dashboards, door panels, structural trims). ABS offers better surface finish, higher gloss and superior scratch resistance — it is used where the visible surface needs a premium look or where parts are touched constantly (centre console buttons, gear-shifter surrounds). PC/ABS blends combine ABS appearance with polycarbonate's heat and impact resistance.",
      },
      {
        q: "Why does car interior plastic smell?",
        a: "New-car smell comes from volatile organic compounds (VOCs) released by adhesives, plasticisers and additives in interior plastics. Modern automotive PP and ABS grades are formulated to low-emission specifications (VDA 270 odour and VDA 278 emission tests). OEMs like VW Group and BMW maintain strict approval lists; only grades meeting their VOC limits are qualified for interior use.",
      },
      {
        q: "Are car dashboards recyclable?",
        a: "Polypropylene dashboards are technically recyclable, but recovery in practice is limited because end-of-life vehicle (ELV) dismantling streams typically don't separate plastic parts by polymer type. Talc and glass fillers further reduce recyclability into virgin-equivalent applications. Some OEMs are now specifying recycled-content PP for non-visible structural parts to demonstrate circularity progress under EU ELV regulation revisions.",
      },
    ],
  },
  {
    slug: "automotive-bumper-fascia",
    name: "Automotive Bumper Fascia",
    category: "Automotive",
    shortDescription:
      "TPO (PP/EPDM) compounds for bumpers. Thick-wall injection molding with low CLTE for paintability.",
    recommendedPolymers: ["polypropylene"],
    regulations: ["ECE R42 impact"],
    commonQuestions: [
      {
        q: "What plastic are car bumpers made of?",
        a: "Modern car bumper fascias are made from thermoplastic olefin (TPO) — a compound of polypropylene (PP) and EPDM rubber. The PP backbone provides stiffness and paintability; the EPDM rubber phase absorbs low-speed impact and prevents cracking in cold weather. Behind the visible fascia, a separate energy-absorbing structure (often expanded PP foam or a glass-filled PP beam) handles crash energy.",
      },
      {
        q: "Why do plastic bumpers crack in cold weather?",
        a: "Older non-modified PP bumpers became brittle below freezing because PP has a glass transition temperature near -10 °C. Modern automotive bumper compounds blend PP with EPDM elastomer at 10–30% loading, which keeps the part ductile down to -30 °C or lower. Sub-zero impact testing is part of standard OEM qualification for any cold-climate market.",
      },
      {
        q: "Can plastic bumpers be repaired?",
        a: "Yes. Polypropylene bumpers can be plastic-welded with PP rod, sanded, primed and painted. Repair is cost-effective for cosmetic damage and minor cracks. Structural damage to the energy-absorbing components behind the fascia usually requires replacement to maintain crash performance under ECE R42.",
      },
      {
        q: "Are car bumpers recyclable?",
        a: "Polypropylene bumpers are technically recyclable, and several European OEMs have closed-loop programmes that recover end-of-life bumpers and reformulate the PP for non-visible automotive parts. Practical recovery is limited because end-of-life vehicle dismantling typically shreds plastic with metal rather than separating polymer types. Recycled-content PP bumpers (10–25% rPP) are now appearing in new-vehicle programmes.",
      },
    ],
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
