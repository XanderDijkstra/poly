import { Link, useParams } from "react-router-dom";
import { PageLayout } from "@/components/PageLayout";
import { JsonLd } from "@/components/JsonLd";
import { TechSpecsTable } from "@/components/TechSpecsTable";
import { FAQAccordion } from "@/components/FAQAccordion";
import { RelatedPages } from "@/components/RelatedPages";
import { RFQCta } from "@/components/RFQCta";
import { usePageMeta } from "@/hooks/usePageMeta";
import { polymerBySlug, polymers } from "@/data/polymers";
import { gradesByPolymer } from "@/data/grades";
import { applications } from "@/data/applications";
import { SITE } from "@/lib/site";
import NotFoundPage from "./NotFoundPage";

export default function PolymerDetail() {
  const { slug } = useParams<{ slug: string }>();
  const polymer = slug ? polymerBySlug(slug) : undefined;

  usePageMeta({
    title: polymer
      ? `${polymer.name} suppliers in Europe: grades and specs | ${SITE.name}`
      : `Polymer not found | ${SITE.name}`,
    description: polymer
      ? `Source ${polymer.name} from verified European suppliers. ${
          gradesByPolymer(polymer.slug).length
        } grades catalogued. Submit an RFQ for quotes within 48h.`
      : undefined,
    canonical: polymer ? `/polymers/${polymer.slug}` : undefined,
  });

  if (!polymer) return <NotFoundPage />;

  const polymerGrades = gradesByPolymer(polymer.slug);
  const linkedApplications = polymer.applications
    .map((a) =>
      applications.find(
        (app) =>
          app.name.toLowerCase().includes(a.toLowerCase()) ||
          a.toLowerCase().includes(app.name.toLowerCase().split(" ")[0])
      )
    )
    .filter(Boolean) as typeof applications;

  const relatedPolymers = polymers
    .filter((p) => p.slug !== polymer.slug && p.family === polymer.family)
    .slice(0, 3);

  const specs = [
    { property: "Density", value: polymer.density },
    { property: "MFI range", value: polymer.mfiRange ?? "" },
    { property: "Melting point", value: polymer.meltingPoint ?? "" },
    { property: "Formula", value: polymer.formula ?? "" },
    { property: "Recyclable", value: polymer.recyclable ? "Yes" : "No" },
  ];

  const faqs = [
    {
      q: `Is ${polymer.name} food-contact safe?`,
      a: polymer.recyclable
        ? `${polymer.name} grades certified to EU 10/2011 and FDA 21 CFR 177 are widely used in food packaging. Always verify the producer's Declaration of Compliance (DoC) for the specific grade and end use.`
        : `Refer to the producer's Declaration of Compliance for food-contact suitability under EU 10/2011.`,
    },
    {
      q: `How does ${polymer.abbreviation} pricing track upstream?`,
      a: `Prices follow monomer contracts (typically published monthly by ICIS). Naphtha-cracked European supply moves with Brent crude on a 4–8 week lag. US imports are gas-linked and follow Henry Hub.`,
    },
    {
      q: `What lead times should I expect?`,
      a: `Producer-direct prime: 1–4 weeks. Distributor stock: 1–3 days. Spot / off-grade: same week. Imports from US or Middle East: 4–8 weeks transit plus customs clearance.`,
    },
    {
      q: `What MFI range works for typical applications?`,
      a: `Higher MFI flows easier (thin wall, fast cycle) but is mechanically weaker. Injection molding typically uses MFI 8–45 ${polymer.abbreviation}, blow molding 0.3–8, fiber 25+. The right choice depends on the part geometry and process.`,
    },
    {
      q: `Where is ${polymer.name} produced in Europe?`,
      a: `Major producers include ${polymer.producers
        .slice(0, 4)
        .join(", ")}. Antwerp, Rotterdam and Tarragona are the largest petrochemical clusters serving the EU.`,
    },
  ];

  return (
    <PageLayout
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Polymers", href: "/polymers" },
        { label: polymer.name },
      ]}
      eyebrow={`${polymer.family} · ${polymer.abbreviation}`}
      title={`${polymer.name}: grades, applications, and European suppliers`}
      lede={polymer.shortDescription}
      wide
    >
      <section>
        <h2 className="font-heading text-xl md:text-2xl font-semibold tracking-tight text-primary mb-4">
          Technical overview
        </h2>
        <TechSpecsTable rows={specs} />
      </section>

      {polymerGrades.length > 0 && (
        <section>
          <h2 className="font-heading text-xl md:text-2xl font-semibold tracking-tight text-primary mb-4">
            Major grades
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {polymerGrades.map((g) => (
              <Link
                key={g.slug}
                to={`/grades/${g.slug}`}
                className="block rounded-md border border-border bg-background p-4 hover:border-secondary transition-colors"
              >
                <div className="flex items-baseline justify-between gap-3">
                  <div className="font-medium text-foreground">{g.name}</div>
                  {g.mfi && (
                    <span className="font-mono text-xs text-muted-foreground tabular">
                      {g.mfi}
                    </span>
                  )}
                </div>
                <div className="mt-1 text-xs text-muted-foreground">
                  {g.process} · {g.application}
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {linkedApplications.length > 0 && (
        <section>
          <h2 className="font-heading text-xl md:text-2xl font-semibold tracking-tight text-primary mb-4">
            Common applications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {linkedApplications.map((a) => (
              <Link
                key={a.slug}
                to={`/applications/${a.slug}`}
                className="block rounded-md border border-border bg-background p-4 hover:border-secondary transition-colors"
              >
                <div className="font-medium text-foreground">{a.name}</div>
                <div className="text-xs text-muted-foreground mt-1">
                  {a.category}
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section>
        <h2 className="font-heading text-xl md:text-2xl font-semibold tracking-tight text-primary mb-4">
          Major European producers
        </h2>
        <div className="rounded-lg border border-border bg-surface p-5">
          <div className="flex flex-wrap gap-2">
            {polymer.producers.map((producer) => (
              <span
                key={producer}
                className="inline-flex text-sm px-3 py-1 rounded-full border border-border bg-background text-foreground"
              >
                {producer}
              </span>
            ))}
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            Producers listed for technical context. PolymerPlatform is independent and
            does not accept payment for editorial placement.
          </p>
        </div>
      </section>

      <section>
        <h2 className="font-heading text-xl md:text-2xl font-semibold tracking-tight text-primary mb-4">
          Sourcing options
        </h2>
        <div className="space-y-4 text-sm text-foreground">
          <p>
            <strong className="text-primary">Producer-direct contracts</strong> are typically reserved for high-tonnage buyers (1,000+ t/year minimum) negotiating monthly against monomer indices.
          </p>
          <p>
            <strong className="text-primary">Distributors</strong> (e.g. Resinex, Ravago Distribution, Vinmar Polymers Europe) break bulk, hold local stock, and offer credit. Lead times 1–3 days for stock items.
          </p>
          <p>
            <strong className="text-primary">Traders</strong> work the spot market for prime, near-prime and off-grade lots, typically 5–20% above or below contract reflecting near-term tightness. PolymerPlatform routes RFQs to verified traders and distributors with the right grade and region match.
          </p>
        </div>
      </section>

      <section>
        <h2 className="font-heading text-xl md:text-2xl font-semibold tracking-tight text-primary mb-4">
          Frequently asked questions
        </h2>
        <FAQAccordion items={faqs} />
      </section>

      <RFQCta
        variant="card"
        polymer={polymer.slug}
        label={`Need quotes for ${polymer.name}?`}
      />

      {relatedPolymers.length > 0 && (
        <RelatedPages
          heading="Related polymers"
          items={relatedPolymers.map((p) => ({
            title: p.name,
            href: `/polymers/${p.slug}`,
            archetype: p.family,
            description: p.shortDescription,
          }))}
        />
      )}

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: `${polymer.name} sourcing`,
          serviceType: "Polymer procurement",
          areaServed: "Europe",
          provider: { "@type": "Organization", name: SITE.name, url: SITE.baseUrl },
          url: `${SITE.baseUrl}/polymers/${polymer.slug}`,
          description: polymer.shortDescription,
        }}
      />
    </PageLayout>
  );
}
