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
  /** PAA-style FAQs targeting broad-search "plastic" terminology. */
  commonQuestions?: { q: string; a: string }[];
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
    commonQuestions: [
      {
        q: "What is PP plastic and what is it used for?",
        a: "PP (polypropylene) is one of the most widely used plastics in the world. It's a stiff, lightweight, semi-crystalline thermoplastic produced from propylene monomer. Common uses include reusable food containers, yogurt and butter tubs, ready-meal trays, automotive dashboards and bumpers, BOPP film for crisp packets, fibre for nonwoven fabrics, and pipes and fittings. PP combines low density (it floats on water), good chemical resistance and excellent fatigue performance — the so-called 'living hinge' on flip-top caps is possible only in PP.",
      },
      {
        q: "Is PP plastic safe for food and microwaving?",
        a: "Yes. Food-contact PP grades are approved under EU 10/2011 and FDA 21 CFR 177.1520. PP is the only commodity plastic that combines food-contact compliance with microwave use — it stays dimensionally stable up to 100–110 °C continuously and tolerates short bursts to 130 °C. Modern PP is BPA-free and does not contain phthalate plasticisers. Always check the symbol on the container — the recycling code is 5 (PP) and a microwave-safe icon on the base is the operative indicator.",
      },
      {
        q: "PP vs PE plastic — what's the difference?",
        a: "Both are polyolefins but differ in stiffness, heat resistance and clarity. PP is stiffer and harder than PE, with a higher melting point (160–170 °C vs PE's 105–135 °C) — this is why PP is used for microwave-safe containers and PE is not. PE (especially HDPE) is more impact-resistant in cold conditions and has better chemical resistance to oxidising acids. In film, BOPP gives crisp clarity for snack packaging; PE film is softer and used for stretch wrap and carrier bags.",
      },
      {
        q: "Is polypropylene recyclable?",
        a: "Yes. PP is mechanically recyclable and carries the resin identification code 5. Collection rates lag PET and HDPE because PP packaging is more diverse (yogurt pots, ready-meal trays, caps, films), making sortation harder at MRFs. Food-grade recycled PP at scale is still emerging — most rPP today goes into non-food applications like garden pots, paint trays and automotive non-visible parts. Mass-balance ISCC Plus rPP is now widely available from Borealis, LyondellBasell and SABIC for food-contact use.",
      },
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
    commonQuestions: [
      {
        q: "What is HDPE plastic and where do I find it?",
        a: "HDPE (high-density polyethylene) is a stiff, opaque polymer found in milk and juice bottles, shampoo and detergent bottles, supermarket carrier bags (the rustly thicker kind), water and gas pipes, jerry cans, and crates. It carries the resin identification code 2 and is one of the easiest plastics to recycle — almost every kerbside scheme in Europe accepts it. HDPE feels harder and more brittle than LDPE; you can recognise it by the slight 'crackle' when squeezed.",
      },
      {
        q: "Is HDPE plastic safe?",
        a: "Yes. HDPE is approved for direct food contact under EU 10/2011 and FDA 21 CFR 177.1520. It contains no BPA, no phthalates and no halogens. HDPE does not leach into stored liquids — it is the standard material for milk, water, household chemicals and personal care. Pigmented HDPE (white milk bottles, coloured shampoo bottles) uses food-grade pigments embedded during extrusion blow moulding.",
      },
      {
        q: "HDPE vs LDPE — how do they differ?",
        a: "Both are polyethylene, but the molecular structure differs. HDPE is linear (no branching), giving it higher density (>0.941 g/cm³), stiffness and tensile strength — that's why it's used for rigid bottles and pressure pipes. LDPE has heavily branched chains, lower density (0.910–0.940 g/cm³), and is softer and more flexible — used for plastic bags, squeeze bottles and shrink film. HDPE handles higher temperatures (continuous service to about 110 °C) and resists chemicals better than LDPE.",
      },
      {
        q: "Is HDPE recyclable?",
        a: "Yes — HDPE is one of the most recyclable plastics. It has well-established kerbside collection across Europe, sorts cleanly at MRFs (its density makes float-sink separation easy), and recycles into new bottles, pipes and crates. Food-grade rHDPE is approved under EU 2022/1616 and is widely used in milk and dairy bottles. Detergent and personal-care brands now target 30–50% rHDPE content in line with PPWR sustainability commitments.",
      },
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
    marketContext: [
      "European LDPE capacity sits around 3 million tonnes per year, with LyondellBasell, ExxonMobil, SABIC, Dow, and Versalis (Italy) the largest producers. Demand is dominated by film — carrier bags, shrink, agriculture, and extrusion coating make up roughly 60% of volume; the balance is extrusion coating, lamination tie-layers, and squeeze bottles.",
      "LDPE is a mature, low-growth segment. Many producers have converted ageing high-pressure tubular reactors to LLDPE swing capacity since 2015, tightening LDPE-specific supply during peak demand seasons. Procurement teams should track which European sites can swing between LDPE and LLDPE — it's the dominant signal for medium-term availability.",
    ],
    pricingDrivers: [
      "Like HDPE, LDPE follows the monthly Ethylene Contract Price (ECP) plus a polymer margin. LDPE-specific high-pressure plants are smaller and older than the swing HDPE/LLDPE units, so spreads widen sharply during tight supply. The LDPE-LLDPE spread is a key procurement signal: when LDPE trades €100+/t over LLDPE on contract, converters with formulation flexibility frequently switch.",
      "Imports from US Gulf and the Middle East landed in Antwerp or Rotterdam typically arrive 5–10% below European contract during arbitrage windows. Coating-grade and clarity-grade LDPE carry persistent premiums over commodity film grade.",
    ],
    regulatoryContext: [
      "EU 10/2011 governs food-contact LDPE film. Mulch and silage film follow EN 13655 and EN 13207 respectively. The Single-Use Plastics Directive has compressed European demand for LDPE carrier bags as Member States impose taxes and bans — a structural headwind on volume.",
      "PPWR design-for-recycling rules push converters toward mono-PE structures (LDPE/LLDPE/HDPE blends) replacing PE-PA and PE-PET laminates from 2030. This favours LDPE in seal layers and outer print layers of PPWR-compliant flexible packaging.",
    ],
    commonQuestions: [
      {
        q: "What is LDPE plastic and what is it used for?",
        a: "LDPE (low-density polyethylene) is a soft, flexible plastic produced under high pressure. You'll find it in plastic carrier bags, bread bags, six-pack rings, freezer bags, squeezable bottles, and the inner liner of milk and juice cartons. It carries the resin identification code 4. LDPE film stretches and tears easily — that softness is the property that makes it useful for cling-film-style applications. Density is in the 0.910–0.940 g/cm³ range.",
      },
      {
        q: "Is LDPE recyclable in household bins?",
        a: "Soft LDPE film recyclability varies across Europe. Some countries (UK, Germany, Netherlands) have dedicated soft-plastics collection at supermarkets and store front-of-store schemes. Most kerbside bins do NOT accept LDPE film — it tangles in MRF sorting equipment. Look for the 'recycle with carrier bags at supermarket' logo on bread bags, frozen-food bags and shrink wrap. Rigid LDPE items (squeeze bottles) can typically go in the standard rigid plastics bin.",
      },
      {
        q: "Why is LDPE used for plastic bags?",
        a: "LDPE's branched molecular structure gives it the unique combination of softness, drawability, and heat-sealability that bag manufacturing requires. The film extrudes well into thin gauges (10–30 microns), seals easily on packaging machines, and tears at controlled forces — properties harder to match in HDPE or PP. LLDPE is now blended with LDPE in modern bag manufacturing because LLDPE adds toughness while LDPE provides processability.",
      },
      {
        q: "LDPE vs LLDPE — which is better?",
        a: "Neither is universally better — they are optimised for different jobs. LDPE has better optical clarity, easier processing, and superior heat-sealability. LLDPE has higher tensile strength, better puncture resistance and improved tear resistance — the reasons stretch wrap and silage film are predominantly LLDPE. Most modern flexible packaging uses LDPE/LLDPE blends to combine the best of both. LLDPE is generally cheaper to produce because it uses gas-phase polymerisation rather than the high-pressure tubular reactors LDPE requires.",
      },
    ],
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
    marketContext: [
      "European LLDPE capacity is approximately 2.5 million tonnes per year. ExxonMobil, Dow, SABIC, and Borealis lead production, supplemented by significant imports from US Gulf gas-cracker producers (Dow, ExxonMobil, Formosa). End-use demand splits across stretch film (~40%), food packaging film (~30%), and liners, agricultural film, and rotomolding (~30%).",
      "Comonomer choice drives mechanical performance and pricing. Butene LLDPE is the commodity baseline; hexene grades dominate premium stretch and lamination; octene LLDPE — produced via metallocene catalysis — sits at the top of the food-contact and high-stretch market. Octene grades carry a structural €150–300/t premium over butene.",
    ],
    pricingDrivers: [
      "LLDPE tracks the European Ethylene Contract Price (ECP) plus a comonomer adjustment. ICIS publishes butene LLDPE and hexene/octene LLDPE separately — watch both indices, as they decouple during specialty demand surges.",
      "Spot from US Gulf imports (gas-cracked, structurally lower-cost) lands €80–120/t below European contract during arbitrage windows. The arbitrage opens episodically — when freight rates ease and Asian markets soften, US producers redirect cargoes to Antwerp and Rotterdam.",
    ],
    regulatoryContext: [
      "EU 10/2011 governs food-contact LLDPE — clarified hexene and octene grades dominate cling and barrier film. Mulch and silage film follow EN 13655 and EN 13207.",
      "PPWR's design-for-recycling rule increases LLDPE use as the structural layer in fully-PE laminate constructions targeting recyclability. The shift away from PE-PET and PE-PA multi-layer film is the biggest structural demand driver through 2030.",
    ],
    commonQuestions: [
      {
        q: "What is LLDPE plastic?",
        a: "LLDPE (linear low-density polyethylene) is a copolymer of ethylene with a small amount of butene, hexene or octene. The short side branches give it density similar to LDPE (0.915–0.935 g/cm³) but with much higher tensile strength, puncture resistance and tear resistance. It is the workhorse polymer for stretch film, food packaging film, agricultural film, and pouch structures. Most modern flexible packaging contains LLDPE either alone or blended with LDPE.",
      },
      {
        q: "What is LLDPE used for?",
        a: "Major LLDPE end-uses include pallet-stretch wrap film (the cling film around shipped pallets), silage film for agricultural bale wrapping, fresh produce flow-wrap, frozen food bags, refuse sacks, shrink film, and rotational-moulded tanks and toys. Metallocene LLDPE (mLLDPE) — produced with single-site catalysts — has the best stretch and cling performance and dominates the premium stretch-wrap segment.",
      },
      {
        q: "LLDPE vs LDPE — which film is better?",
        a: "Depends on the application. LLDPE is tougher, has better puncture and tear resistance, and stretches further before breaking — ideal for stretch wrap and silage film. LDPE has better optical clarity, easier processing on conventional film lines, and superior heat-sealability — preferred for bread bags and decorative packaging. Most film today is an LDPE/LLDPE blend to combine the strength of LLDPE with the processability of LDPE.",
      },
      {
        q: "Is LLDPE recyclable?",
        a: "Yes, LLDPE is recyclable, and it shares collection streams with LDPE under resin identification code 4. Soft-film recovery in Europe is improving with PPWR pressure but still lags rigid plastic recycling. Used silage film and pallet wrap are major contributors to soft-PE recyclate streams; specialised European programmes (APE Europe, ERDE in Germany) recover several hundred thousand tonnes per year. Recycled LLDPE is used in lower-grade applications like garbage bags and construction film.",
      },
    ],
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
    marketContext: [
      "MDPE is a niche segment within polyethylene, with European demand around 500 kt/year. The dominant application is gas distribution pipe (PE80), with smaller volumes in rotomolded tanks, heavy-duty film, and cable jacketing. Most MDPE volume comes from swing-grade plants (Borealis, INEOS, SABIC) rather than dedicated lines.",
      "Pipe-grade MDPE for gas distribution is highly specified. Buyers procure against EN 1555 with documented Long-Term Hydrostatic Strength performance under ISO 9080. Distributor stock for non-pipe MDPE is thinner than HDPE — buyers needing small volumes often substitute with low-MFI HDPE or LLDPE depending on the application.",
    ],
    pricingDrivers: [
      "MDPE tracks HDPE pricing closely, typically with a small negative or positive delta depending on grade and market conditions. Pipe-grade MDPE for gas (PE80) trades a structural premium of €100–150/t over commodity grade due to certification cost and limited dedicated supply.",
      "When HDPE bimodal capacity tightens, MDPE prices firm faster than the rest of the PE complex. ICIS publishes a dedicated MDPE pipe weekly assessment alongside HDPE.",
    ],
    regulatoryContext: [
      "EN 1555 governs polyethylene pipe systems for gas distribution; PE80 grades require continuous compliance with ISO 9080 LTHS testing. Cable jacketing applications follow IEC 60332 and the CPR EN 50575 reaction-to-fire classification framework where deployed in buildings.",
      "Recycled content in MDPE pipe remains rare due to long-term performance liability. PPWR pressure on packaging-grade MDPE (rigid containers) is moderate and primarily passed through as voluntary brand-owner targets.",
    ],
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
    marketContext: [
      "European PVC capacity totals roughly 5.5 million tonnes per year (rigid + flexible combined), led by INOVYN (INEOS), Vestolit, Vynova, Kem One, and SCG/Cires. Rigid PVC (PVC-U) takes around 70% of total volume — pipe (sewer, drainage, conduit), profiles (windows, sidings), rigid sheet, and bottle. Window profile is the single largest application across Europe.",
      "Suspension-grade PVC dominates supply for rigid applications. K-value (a measure of molecular weight) defines processability: K57–K60 for injection molding, K65–K68 for pipe and profile extrusion, K70+ for plasticized formulations. Most rigid converters specify K65 or K67 from a familiar formulation house.",
    ],
    pricingDrivers: [
      "PVC follows the European Vinyl Chloride Monomer (VCM) contract, which itself tracks ethylene plus chlorine economics. Chlorine pricing is set by chlor-alkali balance — caustic soda is the byproduct, and caustic demand swings drive chlorine availability and PVC margins by hundreds of euros per tonne.",
      "Watch ICIS PVC suspension-grade weekly. The PVC-VCM-ethylene cost stack reveals whether margin pressure sits with the chlor-alkali producer or the PVC compounder. European producers run at 75–85% utilization in normal years; sub-70% triggers force majeure declarations and price spikes.",
    ],
    regulatoryContext: [
      "REACH heavily impacts PVC formulation. Phthalate plasticizers DEHP, DBP, BBP, and DIBP are SVHC-restricted under Annex XVII; rigid PVC is mostly unplasticized but stabilizer chemistry (lead, tin, calcium-zinc) has shifted dramatically — lead stabilizers were voluntarily phased out by VinylPlus in 2015.",
      "VinylPlus 2030 commitments push recycled content adoption in profile and pipe. CPR EN 50575 governs cable conduit fire performance. Pressure pipe is certified under EN 1452 (water) and EN 1401 (sewer drainage).",
    ],
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
    marketContext: [
      "European flexible PVC volume sits at roughly 1.5 million tonnes per year. Cable sheathing is the largest single application, followed by flooring, medical tubing, automotive interior trim, and hose. PVC compound houses — Benvic, Mexichem (now Orbia), Tarkett, ALPHAGARY — sit between the resin producers and converters, formulating to specific customer requirements.",
      "Plasticizer chemistry has shifted decisively under REACH pressure. DINP and DOTP have replaced DEHP across most consumer applications; bio-based DEHA and Hexamoll DINCH (BASF) dominate medical and toy applications. Selecting a compounder with the right plasticizer system is often more important than selecting the resin producer.",
    ],
    pricingDrivers: [
      "Flexible PVC compound pricing tracks PVC-U pricing plus a plasticizer overlay. Plasticizer cost is 30–50% of compound cost — DOTP and DINP track ~€1,800–2,400/t with phthalate prices moving with C8/C9 alcohol availability and cracker C4 cuts.",
      "Compound houses publish stock indications and quote against hot/cold cycles. For volume buyers, direct compounder contracts with plasticizer pass-through clauses are standard. Watch the C8/C9 alcohol contract reports alongside PVC for the full cost stack.",
    ],
    regulatoryContext: [
      "REACH SVHC list — DEHP, DBP, BBP, DIBP all restricted in articles. EU 10/2011 governs food-contact compounds (DOTP and DINCH only; no phthalates). Cable sheathing falls under CPR EN 50575 reaction-to-fire performance and IEC 60332 flame propagation.",
      "Medical tubing follows ISO 10993 biocompatibility and EU MDR 2017/745. DEHP-free compounds are now standard for blood bags, infusion sets, and peristaltic tubing. The toy applications standard EN 71-3 limits heavy metal migration regardless of plasticizer.",
    ],
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
    marketContext: [
      "European GPPS capacity is approximately 1 million tonnes per year. INEOS Styrolution, Trinseo, Versalis, and Synthos are the major producers. End-use demand splits across rigid packaging — yogurt cups, deli trays, cosmetics bottles (~40%) — thermoformed sheet, foam (XPS, EPS for insulation), and consumer goods.",
      "The market has structurally declined since 2015 as PET took share in clear food packaging and PP gained ground in injection-molded containers. European producers have responded by closing older lines and focusing on specialty and high-clarity grades. Spot availability is generally ample outside cracker turnaround windows.",
    ],
    pricingDrivers: [
      "GPPS tracks the European Styrene Monomer Contract Price (SCP), which itself tracks benzene and ethylene economics. Benzene is sourced from refinery reformate or steam cracker pyrolysis gasoline — its price sets the floor for styrene and downstream styrenics.",
      "Margins (SCP-to-GPPS) typically run €200–350/t and have compressed since 2020 as new Asian capacity arrived and European demand fell. ICIS publishes weekly GPPS assessments for general-purpose, high-flow injection, and high-heat grades separately.",
    ],
    regulatoryContext: [
      "EU 10/2011 sets specific migration limits for residual styrene monomer (max 0.25% for food contact applications). Producers issue grade-specific Declarations of Compliance.",
      "PPWR design-for-recycling rules disadvantage GPPS in beverage cup and deli applications versus PP and PET — neither stream collects polystyrene at scale across most Member States. Toy-grade GPPS must comply with EN 71-3 heavy metal migration limits.",
    ],
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
    marketContext: [
      "European HIPS capacity is around 600 kt/year. INEOS Styrolution, Trinseo, Versalis, and Synthos produce HIPS alongside their GPPS lines, often via in-line rubber compounding. Major end uses are white-goods interiors (refrigerator liners), yogurt and dairy lids, electronics housings, packaging trays, and point-of-purchase displays.",
      "HIPS holds defensible niches against PP through its rigidity, dimensional stability, and high-quality printability. White-goods OEMs (Whirlpool, Electrolux, BSH) are sticky customers — qualification and tooling investment makes resin substitution costly.",
    ],
    pricingDrivers: [
      "HIPS is GPPS plus a butadiene-rubber compounding cost. Pricing tracks the Styrene Monomer Contract Price plus a butadiene contract premium. The HIPS-to-GPPS spread (typically €100–200/t) widens when butadiene tightens — for example during European cracker turnarounds that reduce C4 availability.",
      "Watch ICIS HIPS weekly alongside butadiene contract data. Asian HIPS imports (LG Chem, Chi Mei) episodically pressure European pricing during periods of soft regional demand.",
    ],
    regulatoryContext: [
      "EU 10/2011 governs food-contact applications (yogurt and dairy lids) with residual styrene monomer limits identical to GPPS. RoHS 2011/65/EU and the WEEE directive govern flame-retardant additive choices in electronic housings — brominated FRs (TBBPA, deca-BDE) are being phased out where halogen-free alternatives perform adequately.",
      "Toy-grade HIPS follows EN 71-3 heavy metal limits. Refrigerator liner applications must meet relevant food-contact requirements via the EU framework regulation 1935/2004.",
    ],
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
    marketContext: [
      "European ABS demand sits around 700 kt/year. INEOS Styrolution, ELIX Polymers (Spain), and Trinseo are the major European producers; Asian imports — particularly from LG Chem and Chi Mei — supply 30–40% of demand. Major end uses: automotive trim and exterior parts, electronic housings, appliance components, consumer goods, and toys.",
      "PC/ABS blends form the premium segment, used for laptop enclosures, automotive instrument panels, and high-impact electronics. The blend is alloyed at the compounder rather than the resin producer, with specific grades for paintability, flame retardancy, and chemical resistance commanding €500–1,000/t over commodity ABS.",
    ],
    pricingDrivers: [
      "ABS pricing tracks three monomers — acrylonitrile (ACN), butadiene (BD), and styrene (SM). Continuous-mass and emulsion ABS production differs in feedstock leverage. Acrylonitrile is the swing factor: propylene-based, it spikes during cracker turnarounds and ammonia plant outages.",
      "ICIS ABS weekly publishes natural and colored grades separately. Imports from Korea and Taiwan land in Antwerp and Rotterdam at typically 5–15% below European contract during arbitrage windows. The PC/ABS blend price is a layered calculation — track polycarbonate weekly alongside ABS for the full picture.",
    ],
    regulatoryContext: [
      "UL94 V-0 flame retardancy is widely required in electronics housings. RoHS 2011/65/EU restricts halogenated FRs (PBB, PBDE) — most ABS for electronics now uses phosphorus-based or PC/ABS-with-phosphate alternatives.",
      "Automotive grades meet VDA 270 odor and ISO 16750 thermal cycling. REACH SVHC tracking covers residual ACN monomer and stabilizer systems. Toy-grade ABS must comply with EN 71-3 heavy metal migration limits.",
    ],
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
    marketContext: [
      "European mechanical recycling capacity for rPE and rPP totals approximately 3 million tonnes per year and is growing at ~10% annually. The largest operators include LyondellBasell QCP (Netherlands), Borealis Borcycle, Veolia / SABIC TRUCIRCLE, and Plastic Energy (chemical recycling pyrolysis). Quality bifurcates sharply: post-consumer rPE and rPP from packaging streams trades €500–1,200/t below virgin; chemically recycled (advanced recycling) rPP for food contact often trades a premium over virgin.",
      "The collection-to-pellet flow has structural bottlenecks. Bale availability sets the floor: Germany's DSD (Dual System), France's Citeo, and Spain's Ecoembes drive the bulk of post-consumer collection. Sorting capacity (NIR-based in MRFs) is the first capacity constraint; food-contact-grade decontamination capacity is the second.",
    ],
    pricingDrivers: [
      "rPO pricing decouples from virgin contract. Bale supply (kerbside collection economics) sets the floor; converter demand (PPWR compliance) sets the ceiling. The virgin-to-rPO spread inverts during demand shocks — autumn 2022 saw rPO trade above virgin briefly as PPWR-anticipating brand owners locked in supply.",
      "ICIS publishes rPE flake (for film and bottle) and rPP pellet weekly indices separately. For chemically-recycled material, mass-balance accounting under ISCC PLUS allows premium pricing tied to a virgin-equivalent specification. Buyers committing to multi-year volume often secure volume in advance via offtake agreements directly with recyclers.",
    ],
    regulatoryContext: [
      "EU 2022/1616 governs recycled plastics in food contact applications. Only EFSA-approved decontamination processes can place rPO into food contact — coverage for rPP is significantly broader than for rPE due to chemistry and historical EFSA review patterns.",
      "PPWR mandates 10–35% recycled content depending on packaging type by 2030. Supply-chain traceability via mass-balance accounting (ISCC PLUS) is the dominant verification scheme for both mechanically and chemically recycled material. Brand owners running their own recycled-content commitments (Unilever, Nestlé, P&G) often demand third-party certification beyond the regulatory minimum.",
    ],
  },
];

export const polymerBySlug = (slug: string) => polymers.find((p) => p.slug === slug);
