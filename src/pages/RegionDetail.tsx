import { useParams } from "react-router-dom";
import { PageLayout } from "@/components/PageLayout";
import { JsonLd } from "@/components/JsonLd";
import { RelatedPages } from "@/components/RelatedPages";
import { RFQCta } from "@/components/RFQCta";
import { usePageMeta } from "@/hooks/usePageMeta";
import { regionBySlug, regions } from "@/data/regions";
import { polymers } from "@/data/polymers";
import { SITE } from "@/lib/site";
import NotFoundPage from "./NotFoundPage";

export default function RegionDetail() {
  const { slug } = useParams<{ slug: string }>();
  const region = slug ? regionBySlug(slug) : undefined;

  usePageMeta({
    title: region
      ? `Polymer suppliers in ${region.name} | ${SITE.name}`
      : `Region not found | ${SITE.name}`,
    description: region
      ? `Source PP, PE, PVC and other polymers from suppliers serving ${region.name}. Logistics, lead times, market overview.`
      : undefined,
    canonical: region ? `/suppliers/${region.slug}` : undefined,
  });

  if (!region) return <NotFoundPage />;

  const featuredPolymers = polymers.slice(0, 6);
  const neighbors = region.neighbors
    .map((n) => regionBySlug(n))
    .filter(Boolean) as typeof regions;

  return (
    <PageLayout
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Suppliers", href: "/suppliers" },
        { label: region.name },
      ]}
      eyebrow={region.countryCode ?? "Region"}
      title={`Polymer suppliers and distributors in ${region.name}`}
      lede={region.shortDescription}
      wide
    >
      <section>
        <h2 className="font-heading text-xl md:text-2xl font-semibold tracking-tight text-primary mb-4">
          Market overview
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="rounded-md border border-border bg-surface p-4">
            <div className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
              Key industries
            </div>
            <div className="flex flex-wrap gap-1.5">
              {region.industries.map((i) => (
                <span
                  key={i}
                  className="inline-flex text-xs px-2.5 py-1 rounded-full bg-background border border-border text-foreground"
                >
                  {i}
                </span>
              ))}
            </div>
          </div>
          {region.ports && region.ports.length > 0 && (
            <div className="rounded-md border border-border bg-surface p-4">
              <div className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
                Major ports
              </div>
              <div className="flex flex-wrap gap-1.5">
                {region.ports.map((p) => (
                  <span
                    key={p}
                    className="inline-flex text-xs px-2.5 py-1 rounded-full bg-background border border-border text-foreground font-mono"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <section>
        <h2 className="font-heading text-xl md:text-2xl font-semibold tracking-tight text-primary mb-4">
          Sourcing notes
        </h2>
        <div className="space-y-4 text-sm text-foreground">
          <p>
            Buyers in {region.name} typically source via local distributors with
            shorter lead times for stock items, switching to producer-direct contracts
            once annual volume justifies it.
          </p>
          <p>
            Common spot-market polymers in this region include{" "}
            {featuredPolymers
              .slice(0, 4)
              .map((p) => p.abbreviation)
              .join(", ")}
            . Tier 1 EU regions typically settle on contract pricing within a few days
            of monomer index publication.
          </p>
        </div>
      </section>

      <RFQCta
        variant="card"
        label={`Source for delivery to ${region.name}`}
      />

      <RelatedPages
        heading="Polymer types you can source here"
        items={featuredPolymers.map((p) => ({
          title: p.name,
          href: `/polymers/${p.slug}`,
          archetype: p.abbreviation,
          description: p.shortDescription,
        }))}
      />

      {neighbors.length > 0 && (
        <RelatedPages
          heading="Neighbouring regions"
          items={neighbors.map((n) => ({
            title: n.name,
            href: `/suppliers/${n.slug}`,
            archetype: n.countryCode,
            description: n.shortDescription,
          }))}
        />
      )}

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: `Polymer suppliers in ${region.name}`,
          description: region.shortDescription,
          url: `${SITE.baseUrl}/suppliers/${region.slug}`,
        }}
      />
    </PageLayout>
  );
}
