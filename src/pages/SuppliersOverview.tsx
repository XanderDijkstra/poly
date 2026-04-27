import { Link } from "react-router-dom";
import { PageLayout } from "@/components/PageLayout";
import { JsonLd } from "@/components/JsonLd";
import { RFQCta } from "@/components/RFQCta";
import { usePageMeta } from "@/hooks/usePageMeta";
import { regions } from "@/data/regions";
import { SITE } from "@/lib/site";

export default function SuppliersOverview() {
  usePageMeta({
    title: `Polymer suppliers across Europe | ${SITE.name}`,
    description:
      "Source PP, PE, PVC, PET and recycled grades from suppliers in 18 European and connected regions. Logistics, lead times, regional market overview.",
    canonical: "/suppliers",
  });

  return (
    <PageLayout
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Suppliers" }]}
      eyebrow="Overview"
      title="Polymer suppliers across Europe and connected markets"
      lede="Eighteen regional hubs spanning the EU, UK, Switzerland, Norway, Turkey and the wider MEAF trading axis. Each page covers logistics, ports, common buying patterns, and the producer/distributor footprint."
      wide
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {regions.map((r) => (
          <Link
            key={r.slug}
            to={`/suppliers/${r.slug}`}
            className="block rounded-lg border border-border bg-background p-5 hover:border-secondary transition-colors"
          >
            <div className="flex items-baseline justify-between">
              <h2 className="font-heading text-base font-semibold text-primary">
                {r.name}
              </h2>
              {r.countryCode && (
                <span className="font-mono text-xs text-muted-foreground">
                  {r.countryCode}
                </span>
              )}
            </div>
            <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
              {r.shortDescription}
            </p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {r.industries.slice(0, 3).map((i) => (
                <span
                  key={i}
                  className="inline-flex text-[11px] px-2 py-0.5 rounded-full bg-surface border border-border text-muted-foreground"
                >
                  {i}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
      <RFQCta variant="card" />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Polymer suppliers by region",
          url: `${SITE.baseUrl}/suppliers`,
          mainEntity: {
            "@type": "ItemList",
            itemListElement: regions.map((r, idx) => ({
              "@type": "ListItem",
              position: idx + 1,
              name: r.name,
              url: `${SITE.baseUrl}/suppliers/${r.slug}`,
            })),
          },
        }}
      />
    </PageLayout>
  );
}
