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
    commonQuestions: [
      {
        q: "What plastic is used under a car bonnet?",
        a: "Engine-bay components are typically glass-filled polyamide (PA66 or PA6) for the most thermally demanding parts (intake manifolds, valve covers), and glass-filled or talc-filled polypropylene (PP) for less demanding parts (fan shrouds, battery housings, fluid reservoirs). All grades are formulated to meet ISO 16750 thermal cycling and chemical resistance requirements.",
      },
      {
        q: "Why are some engine parts plastic now?",
        a: "Plastic engine components weigh 30–50% less than the aluminium or steel parts they replace, which improves fuel economy and CO₂ emissions. Glass-filled PA66 intake manifolds, for example, save about 1.5 kg per vehicle versus aluminium. Plastic also enables more complex internal geometry (like integrated coolant channels) that would require multi-piece metal assemblies.",
      },
      {
        q: "Can plastic engine covers handle high temperatures?",
        a: "Engine-bay polymers are formulated to specific continuous-service temperatures: glass-filled PA66 handles 150–180 °C continuously; PP-based grades top out around 130 °C. Components placed near the exhaust manifold or turbocharger require higher-grade polymers (PPS, PEEK) or stay in metal. Manufacturers map under-hood thermal zones during platform development to assign the right material to each part.",
      },
      {
        q: "What plastic is used for EV battery housings?",
        a: "EV battery module housings increasingly use flame-retardant polypropylene (FR-PP) — a halogen-free formulation that meets UL94 V-0 and provides high voltage tracking resistance for bus-bar proximity. Glass-filled PA is also used for some structural components. The shift from aluminium to plastic battery housings can save 30–40% on weight at module level, an important factor in EV range.",
      },
    ],
  },
  {
    slug: "medical-devices-rigid",
    name: "Rigid Medical Devices",
    category: "Medical",
    shortDescription:
      "Syringes, IV components, diagnostic housings. Clear PP, COC and PC dominant; gamma- and EtO-stable grades required.",
    recommendedPolymers: ["polypropylene", "polystyrene"],
    regulations: ["MDR 2017/745", "ISO 10993", "USP Class VI"],
    commonQuestions: [
      {
        q: "What plastic is used in medical devices?",
        a: "Polypropylene (PP), polystyrene (PS) and polycarbonate (PC) dominate rigid medical applications. PP is the workhorse for syringes, IV components and pharmaceutical containers because it is gamma-sterilisable and chemically inert. PS handles lab consumables and diagnostic instrument internals. PC and cyclic olefin polymers (COP/COC) cover applications where high optical clarity matters, like blood collection tubes.",
      },
      {
        q: "Is medical plastic safe for the body?",
        a: "Medical-grade plastics are tested under ISO 10993 (biocompatibility) and USP Class VI (extractables and leachables). Approved grades show no cytotoxicity, no irritation, no sensitisation and no mutagenicity in standardised testing. Under EU MDR 2017/745, every medical device sold in Europe must document the safety of its materials in a technical file reviewed by a notified body.",
      },
      {
        q: "Why are syringes made of plastic?",
        a: "Disposable plastic syringes (typically polypropylene) are sterile, single-use, transparent enough to confirm dose, and dramatically cheaper than glass alternatives. PP withstands gamma sterilisation at 25 kGy without degradation and meets ISO 10993 biocompatibility. Glass syringes still exist for specific drug compatibility scenarios, but PP dominates volume use globally.",
      },
      {
        q: "What plastic is used for IV bags and components?",
        a: "Flexible IV bags are typically plasticised PVC, with DEHP-free formulations now standard under MDR. Rigid IV components (drip chambers, spikes, connectors) are usually PP or ABS. Newer non-PVC IV bag systems use polyolefin laminates (PE/PP blends) or thermoplastic elastomers (TPE) — a market driven by hospital sustainability programmes and concerns about PVC's end-of-life impact.",
      },
    ],
  },
  {
    slug: "medical-flexible-tubing",
    name: "Medical Flexible Tubing",
    category: "Medical",
    shortDescription:
      "Infusion sets, blood bags, peristaltic tubing. DEHP-free PVC compounds and TPE alternatives (SEBS, COPE) growing.",
    recommendedPolymers: ["pvc-flexible"],
    regulations: ["MDR 2017/745", "ISO 10993", "REACH SVHC list"],
    commonQuestions: [
      {
        q: "What plastic is used for IV tubing?",
        a: "The dominant material is plasticised PVC, formulated with non-DEHP plasticisers (DINCH, TOTM, citrate-based) to meet current MDR and REACH requirements. PVC tubing is clear (allowing visual air-bubble detection), flexible, kink-resistant, and economical for single-use medical devices. Thermoplastic elastomers (SEBS, COPE) are growing as PVC-free alternatives for hospitals with sustainability mandates.",
      },
      {
        q: "Why is PVC used in medical applications?",
        a: "PVC's specific advantages — flexibility tuned by plasticiser choice, optical clarity, sterilisation compatibility (gamma and EtO), low cost, and decades of clinical track record — are difficult to match in a single alternative material. Many medical procedures (haemodialysis, blood collection, IV infusion) were developed around PVC's properties; switching requires re-validation of the entire device.",
      },
      {
        q: "Is medical PVC safe — what about DEHP?",
        a: "Medical PVC is safe when formulated to current standards. DEHP, the historical plasticiser, has been progressively replaced under MDR Article 10 and EU Regulation 2022/112 with alternatives like DINCH, TOTM and DEHT. DEHP-free PVC tubing has been the European standard for new infusion sets and blood bags for several years. The remaining DEHP-containing devices are being phased out through device-master-record updates.",
      },
      {
        q: "What's the alternative to PVC tubing in hospitals?",
        a: "Polyolefin tubing (PE-based) and thermoplastic elastomers (SEBS, polyurethane) are the main PVC alternatives. They eliminate plasticiser concerns entirely but are typically more expensive and have different handling characteristics (stiffness, kink resistance). Hospital procurement decisions usually balance per-procedure cost, sustainability targets and clinical familiarity. Most European hospitals run mixed PVC/non-PVC fleets.",
      },
    ],
  },
  {
    slug: "agricultural-film",
    name: "Agricultural Film",
    category: "Agriculture",
    shortDescription:
      "Greenhouse, mulch, silage films. UV-stabilised LDPE/LLDPE blends. Biodegradable mulch films grow under EU CAP incentives.",
    recommendedPolymers: ["polyethylene-ld", "polyethylene-lld"],
    regulations: ["EN 13655 (mulch)", "EN 13207 (silage)"],
    commonQuestions: [
      {
        q: "What plastic is used for greenhouses?",
        a: "Greenhouse cladding film is multi-layer LDPE/LLDPE coextruded film, typically 150–200 μm thick, with UV stabilisers and IR-blocking additives. The films last 3–5 seasons depending on UV exposure intensity (Mediterranean vs Northern European climates). EVA-modified layers improve thermicity (heat retention) and an anti-drip coating manages condensation that would otherwise drip on crops.",
      },
      {
        q: "Why is mulch film black?",
        a: "Black mulch film blocks sunlight and prevents weed germination — that's the primary agronomic function. The carbon black pigment (typically 2% loading in LLDPE) also provides UV stability so the film survives a single growing season under direct sun. Coloured mulch films (silver, white-on-black, IR-reflective green) target specific crop and pest applications, but plain black remains the workhorse.",
      },
      {
        q: "Is silage wrap recyclable?",
        a: "Yes. Silage stretch-wrap film (LLDPE) is collected by farmer cooperatives and recyclers across Europe — programmes like APE Europe, ERDE in Germany, and ADIVALOR in France handle several hundred thousand tonnes annually. The recycled output goes into garbage bags, agricultural irrigation pipe, and other non-food-contact applications. Clean, dry collection is the main quality determinant.",
      },
      {
        q: "What's biodegradable mulch film made of?",
        a: "Biodegradable mulch films are typically PBAT/PLA blends or PHA-based polymers, formulated to break down into CO₂, water and biomass under the EN 17033 in-soil disintegration standard. Major suppliers include Novamont (Mater-Bi), BASF (Ecoflex/Ecovio) and TotalEnergies. These films cost 2–4× conventional LLDPE mulch, but eliminate film-removal labour and reduce field plastic accumulation — an EU CAP incentive driver.",
      },
    ],
  },
  {
    slug: "construction-cable-sheathing",
    name: "Cable Sheathing",
    category: "Construction",
    shortDescription:
      "Low-voltage and instrumentation cables. HFFR PE compounds replacing PVC in tunnel/CPR-classified projects.",
    recommendedPolymers: ["pvc-flexible", "polyethylene-md"],
    regulations: ["CPR EN 50575", "IEC 60332"],
    commonQuestions: [
      {
        q: "What plastic is used for electrical cable insulation?",
        a: "Plasticised PVC is the dominant material for low-voltage building cable insulation and sheathing in Europe. Cross-linked polyethylene (XLPE) handles medium and high-voltage power cables. Halogen-free flame retardant (HFFR) compounds based on MDPE/EVA replace PVC in public buildings, tunnels and CPR Cca-classified projects. Each application has specific test standards under CPR EN 50575 and IEC 60332.",
      },
      {
        q: "PVC vs polyethylene cable — which is better?",
        a: "It depends on the application and regulatory context. PVC offers excellent fire retardancy, mechanical robustness and cost — strengths in residential building wiring. Polyethylene-based HFFR compounds win in tunnels, schools, hospitals and metro systems because they emit very low smoke and no acidic fumes when burned, which improves evacuation safety. EU CPR enforcement is shifting share toward HFFR.",
      },
      {
        q: "What is HFFR cable?",
        a: "HFFR stands for Halogen-Free Flame Retardant. The cable insulation and sheath compound is based on MDPE or EVA filled with mineral flame retardants (typically aluminium trihydrate or magnesium hydroxide) instead of halogenated additives. When burned, HFFR cable releases minimal smoke and no corrosive HCl gas — critical for life safety in tunnels, public buildings, and any enclosed evacuation space.",
      },
      {
        q: "What plastic is used for fibre optic ducts?",
        a: "Fibre-optic microduct (4–16 mm OD) and spine duct are extruded from HDPE with a low-friction inner liner that allows optical fibre to be blown in by compressed air. Larger telecoms ducts are HDPE or PVC. The European FTTH (fibre-to-the-home) build-out has driven significant HDPE microduct demand — most providers (BT, Deutsche Telekom, KPN) are mid-build on multi-year programmes.",
      },
    ],
  },
  {
    slug: "consumer-goods-houseware",
    name: "Consumer Goods & Houseware",
    category: "Consumer",
    shortDescription:
      "Storage boxes, furniture, kitchenware. Cost-driven applications dominated by PP and HDPE.",
    recommendedPolymers: ["polypropylene", "polyethylene-hd"],
    regulations: ["EN 71 (toys)", "Food contact for kitchenware"],
    commonQuestions: [
      {
        q: "What plastic is used for storage boxes?",
        a: "Most household and commercial storage boxes are made from polypropylene (PP) impact copolymer for indoor and cold-storage units, or HDPE for budget outdoor/garden boxes. PP gives better drop impact at sub-zero temperatures and accepts pigments and prints well; HDPE is cheaper and is typically pigmented with carbon-black masterbatch for UV protection in outdoor use.",
      },
      {
        q: "Is plastic kitchenware safe for food?",
        a: "Yes — modern plastic kitchenware sold in Europe must comply with EU 10/2011 food-contact regulations, with a Declaration of Compliance specifying the grade and any migration test results. Polypropylene is the dominant material for reusable food storage (it's microwave-safe and dishwasher-resistant); HDPE handles opaque containers and cutting boards. BPA-containing polycarbonate kitchenware has been largely replaced by PP and Tritan copolyester.",
      },
      {
        q: "Why does plastic furniture get brittle outdoors?",
        a: "Untreated polyolefins (PP, HDPE) degrade under UV exposure — the molecular chains break, causing colour fading and embrittlement. Modern outdoor plastic furniture is formulated with HALS (Hindered Amine Light Stabilisers) and UV absorbers that extend the service life to 5+ years even under Mediterranean sun. Carbon-black-pigmented HDPE has the longest UV life because the pigment itself blocks UV penetration.",
      },
      {
        q: "Can I microwave plastic Tupperware?",
        a: "Polypropylene (PP) containers labelled microwave-safe are designed to handle 130–140 °C briefly without deformation. The Tupperware-style food storage boxes sold in Europe are mostly PP. HDPE containers are not microwave-safe — they begin softening above 110 °C. Always check the symbol on the base of the container; the microwave-safe icon is the operative indicator, not the brand.",
      },
    ],
  },
  {
    slug: "electronic-housings",
    name: "Electronic Housings",
    category: "Electronics",
    shortDescription:
      "IT, white goods and consumer electronics enclosures. UL94 V-0 flame-retarded ABS, PC/ABS and PC for high-end.",
    recommendedPolymers: ["acrylonitrile-butadiene-styrene"],
    regulations: ["UL94", "RoHS 2011/65/EU", "WEEE"],
    commonQuestions: [
      {
        q: "What plastic is used for TV and computer housings?",
        a: "Flame-retarded ABS (acrylonitrile-butadiene-styrene) and PC/ABS blends dominate consumer electronics housings. They combine UL94 V-0 flame retardance, dimensional stability for thin-walled mouldings, and the surface finish needed for visible product surfaces. Premium displays and laptops sometimes use polycarbonate (PC) for higher impact resistance and slimmer wall thicknesses.",
      },
      {
        q: "Why does plastic in electronics turn yellow?",
        a: "Yellowing is caused by UV exposure and thermal ageing of brominated flame retardants used in older ABS and HIPS housings. The bromine compounds slowly oxidise and form chromophores. Modern halogen-free flame-retardant systems (phosphorus-based, intumescent) are more colour-stable. RoHS-compliant electronics from the past 5–10 years yellow significantly less than 1990s and 2000s equivalents.",
      },
      {
        q: "Are plastic appliance housings recyclable?",
        a: "Technically yes, and the EU WEEE directive obligates producers to fund collection and recycling. In practice, large-appliance plastic recovery is hampered by mixed-material assemblies and brominated flame retardants in older units. Newer designs avoid problematic flame retardants and use single-material housings where possible to simplify end-of-life recycling. Some manufacturers (Bosch, Electrolux) use 25%+ recycled-content ABS in new products.",
      },
      {
        q: "What is flame-retardant plastic and why is it used?",
        a: "Flame-retardant plastic contains additives that slow ignition and reduce flame spread under fire conditions — the standard reference is the UL94 test (ratings HB, V-2, V-1, V-0, with V-0 being best). Mains-powered electronic housings, IT equipment, and white goods all require V-0 rating to limit fire risk from internal electrical faults. Halogen-free FR systems are now preferred over older brominated flame retardants for environmental and health reasons.",
      },
    ],
  },
  {
    slug: "personal-care-packaging",
    name: "Personal Care Packaging",
    category: "Packaging",
    shortDescription:
      "Shampoo, detergent, cosmetics bottles and tubes. HDPE blow molded; PET for clear bottles; PCR content increasingly mandated by brand owners.",
    recommendedPolymers: ["polyethylene-hd", "polyethylene-terephthalate"],
    regulations: ["PPWR", "REACH"],
    commonQuestions: [
      {
        q: "What plastic are shampoo bottles made of?",
        a: "Most shampoo, conditioner and shower-gel bottles are extrusion blow-moulded HDPE (high-density polyethylene). HDPE handles surfactants, fragrances and silicones without permeation, gives the right squeeze rigidity for pump or flip-cap dispensing, and is recyclable. Major personal care brands (L'Oréal, Unilever, P&G) target 30–50% post-consumer recycled (PCR) HDPE content as part of PPWR-aligned sustainability commitments.",
      },
      {
        q: "Are cosmetic packaging plastics recyclable?",
        a: "HDPE bottles and PP jars are recyclable through standard kerbside or deposit-and-return systems where infrastructure exists. Smaller cosmetics packaging (under 50 mL) often falls below sortation thresholds at recycling MRFs and ends up in residual waste. Multi-material packaging (pumps, sprayers with metal springs, aluminium-coated tubes) is the hardest to recycle — design-for-recycling improvements are accelerating ahead of PPWR's 2030 thresholds.",
      },
      {
        q: "What plastic is used for cosmetics jars?",
        a: "Mass-market cosmetics jars (face cream, body lotion) are typically polypropylene (PP) or HDPE injection-moulded. Premium luxury cosmetics often use PMMA (acrylic) for its high-end appearance and weight, sometimes paired with glass for the super-premium tier. PP gives better dimensional control for threaded lid fits and is preferred where the jar must seal against fragrance loss.",
      },
      {
        q: "What is PCR plastic in personal care packaging?",
        a: "PCR stands for Post-Consumer Recycled — plastic recovered from household waste streams (typically through kerbside collection or deposit-return) and re-pelletised for new packaging. PCR-HDPE for shampoo bottles is the most established stream; PCR-PET for clear cosmetics bottles is also growing. EU PPWR mandates rising PCR content in plastic packaging from 2030, making PCR sourcing a strategic priority for personal-care brands.",
      },
    ],
  },
];

export const applicationBySlug = (slug: string) =>
  applications.find((a) => a.slug === slug);
