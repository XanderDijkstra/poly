export interface Region {
  slug: string;
  name: string;
  countryCode?: string;
  shortDescription: string;
  ports?: string[];
  industries: string[];
  neighbors: string[];
}

export const regions: Region[] = [
  {
    slug: "germany",
    name: "Germany",
    countryCode: "DE",
    shortDescription:
      "Largest European polymer consumer. Dominant automotive, packaging and chemical processing industries. ARA logistics hub via Rhine-Ruhr.",
    ports: ["Hamburg", "Bremerhaven", "Duisburg (Rhine)"],
    industries: ["Automotive", "Packaging", "Chemical processing", "Construction"],
    neighbors: ["netherlands", "belgium", "france", "austria", "poland", "czech-republic"],
  },
  {
    slug: "netherlands",
    name: "Netherlands",
    countryCode: "NL",
    shortDescription:
      "European polymer logistics hub. Rotterdam handles a majority of EU resin imports. Strong recycling and bio-polymer cluster.",
    ports: ["Rotterdam", "Antwerp (NL traffic)"],
    industries: ["Logistics", "Packaging", "Recycling", "Agriculture"],
    neighbors: ["germany", "belgium"],
  },
  {
    slug: "belgium",
    name: "Belgium",
    countryCode: "BE",
    shortDescription:
      "Petrochemical heart of Europe. Antwerp cluster hosts major polymer producers and converters. Cross-border to NL and DE for distribution.",
    ports: ["Antwerp", "Zeebrugge", "Ghent"],
    industries: ["Petrochemicals", "Packaging", "Distribution"],
    neighbors: ["netherlands", "france", "germany"],
  },
  {
    slug: "france",
    name: "France",
    countryCode: "FR",
    shortDescription:
      "Diverse polymer market with strong cosmetics, automotive and food packaging. Le Havre and Marseille handle import flows.",
    ports: ["Le Havre", "Marseille-Fos", "Dunkerque"],
    industries: ["Cosmetics", "Automotive", "Food packaging", "Aerospace"],
    neighbors: ["belgium", "germany", "italy", "spain"],
  },
  {
    slug: "italy",
    name: "Italy",
    countryCode: "IT",
    shortDescription:
      "Concentrated converter base in Lombardy and Veneto. Strong fashion, food and design-driven packaging segments.",
    ports: ["Genoa", "Trieste", "Livorno"],
    industries: ["Food packaging", "Fashion", "Automotive components", "Houseware"],
    neighbors: ["france", "austria", "switzerland"],
  },
  {
    slug: "spain",
    name: "Spain",
    countryCode: "ES",
    shortDescription:
      "Iberian hub for agricultural film, construction and automotive components. Tarragona petrochemical cluster active.",
    ports: ["Barcelona", "Valencia", "Algeciras"],
    industries: ["Agricultural film", "Automotive", "Construction"],
    neighbors: ["france"],
  },
  {
    slug: "poland",
    name: "Poland",
    countryCode: "PL",
    shortDescription:
      "Fastest-growing polymer converter in Central Europe. Strong appliance, construction and automotive supply chain.",
    ports: ["Gdańsk", "Gdynia"],
    industries: ["Appliances", "Construction", "Automotive Tier-2/3"],
    neighbors: ["germany", "czech-republic"],
  },
  {
    slug: "czech-republic",
    name: "Czech Republic",
    countryCode: "CZ",
    shortDescription:
      "Automotive Tier-1 supplier base. Tight integration with German OEMs.",
    industries: ["Automotive", "Electronics"],
    neighbors: ["germany", "austria", "poland"],
  },
  {
    slug: "austria",
    name: "Austria",
    countryCode: "AT",
    shortDescription:
      "Borealis headquartered. Strong injection molding base and engineering plastics processing.",
    industries: ["Engineering plastics", "Automotive", "Construction"],
    neighbors: ["germany", "italy", "czech-republic", "switzerland"],
  },
  {
    slug: "switzerland",
    name: "Switzerland",
    countryCode: "CH",
    shortDescription:
      "Non-EU but EFTA. High-value medical and precision engineering converters. Imports dominate.",
    industries: ["Medical devices", "Watches & precision", "Pharma packaging"],
    neighbors: ["germany", "france", "italy", "austria"],
  },
  {
    slug: "united-kingdom",
    name: "United Kingdom",
    countryCode: "GB",
    shortDescription:
      "Post-Brexit customs apply. Strong food packaging and construction; reshored converter base growing for short-cycle products.",
    ports: ["Felixstowe", "Southampton", "Tilbury"],
    industries: ["Food packaging", "Construction", "Pharma"],
    neighbors: ["ireland"],
  },
  {
    slug: "ireland",
    name: "Ireland",
    countryCode: "IE",
    shortDescription:
      "Pharma and medical device hub. Imports dominate, mostly via Rotterdam transhipment.",
    ports: ["Dublin", "Cork"],
    industries: ["Pharma", "Medical devices", "Food packaging"],
    neighbors: ["united-kingdom"],
  },
  {
    slug: "denmark",
    name: "Denmark",
    countryCode: "DK",
    shortDescription:
      "Nordic gateway. Strong wind energy composites and food packaging segments.",
    industries: ["Wind energy", "Food packaging", "Pharma"],
    neighbors: ["germany", "sweden", "norway"],
  },
  {
    slug: "sweden",
    name: "Sweden",
    countryCode: "SE",
    shortDescription:
      "Engineering, pulp & paper, and automotive (Volvo) ecosystem. Sustainability-led procurement.",
    industries: ["Automotive", "Pulp & paper", "Mining"],
    neighbors: ["norway", "finland", "denmark"],
  },
  {
    slug: "norway",
    name: "Norway",
    countryCode: "NO",
    shortDescription:
      "Non-EU EEA. Aquaculture (fish farming) plastics and offshore oil & gas applications. Imports via Oslo and Stavanger.",
    industries: ["Aquaculture", "Oil & gas", "Construction"],
    neighbors: ["sweden", "denmark", "finland"],
  },
  {
    slug: "finland",
    name: "Finland",
    countryCode: "FI",
    shortDescription:
      "Forest industry packaging. Bio-polymer and fiber-replacement R&D strong (UPM, Stora Enso).",
    industries: ["Forest products", "Packaging", "Bio-polymers"],
    neighbors: ["sweden", "norway"],
  },
  {
    slug: "turkey",
    name: "Turkey",
    countryCode: "TR",
    shortDescription:
      "Largest non-EU polymer importer in the region. Major converter base for film, pipe and household goods exporting to EU.",
    ports: ["Istanbul", "Mersin", "Aliağa"],
    industries: ["Film converting", "Pipe extrusion", "Household goods", "Automotive"],
    neighbors: [],
  },
  {
    slug: "middle-east-meaf",
    name: "Middle East & Africa (MEAF)",
    shortDescription:
      "UAE, Saudi Arabia, Kuwait, Egypt, Kenya. Net polymer exporters (SABIC, ADNOC, Equate) but also significant local converter demand.",
    ports: ["Jebel Ali", "Jeddah", "Mombasa", "Alexandria"],
    industries: ["Packaging", "Construction", "Pipe", "Trading hub (Jebel Ali)"],
    neighbors: ["turkey"],
  },
];

export const regionBySlug = (slug: string) => regions.find((r) => r.slug === slug);
