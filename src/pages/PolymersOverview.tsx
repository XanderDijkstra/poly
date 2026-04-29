import { Link } from "react-router-dom";
import { PageLayout } from "@/components/PageLayout";
import { JsonLd } from "@/components/JsonLd";
import { RFQCta } from "@/components/RFQCta";
import { usePageMeta } from "@/hooks/usePageMeta";
import { polymers } from "@/data/polymers";
import { grades } from "@/data/grades";
import { SITE } from "@/lib/site";

export default function PolymersOverview() {
  usePageMeta({
    title: `Polymer types: PP, PE, PVC, PET and more | ${SITE.name}`,
    description:
      "Browse 12 polymer families and 30+ grades sourced across Europe. Each page covers specs, applications and suppliers.",
    canonical: "/polymers",
  });

  return (
    <PageLayout
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Polymers" }]}
      eyebrow="Overview"
      title="Polymer types we source"
      lede="Twelve polymer families covering virtually every European industrial application, from commodity polyolefins to specialty engineering plastics and recycled grades."
      wide
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {polymers.map((p) => {
          const gradeCount = grades.filter((g) => g.polymerSlug === p.slug).length;
          return (
            <Link
              key={p.slug}
              to={`/polymers/${p.slug}`}
              className="block rounded-lg border border-border bg-background p-6 hover:border-secondary transition-colors"
            >
              <div className="flex items-baseline justify-between">
                <h2 className="font-heading text-lg font-semibold text-primary">
                  {p.name}
                </h2>
                <span className="font-mono text-xs text-muted-foreground">
                  {p.abbreviation}
                </span>
              </div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">
                {p.family}
              </div>
              <p className="mt-3 text-sm text-muted-foreground line-clamp-3">
                {p.shortDescription}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.applications.slice(0, 3).map((a) => (
                  <span
                    key={a}
                    className="inline-flex text-[11px] px-2 py-0.5 rounded-full bg-surface border border-border text-muted-foreground"
                  >
                    {a}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex items-center justify-between text-xs">
                <span className="font-mono tabular text-muted-foreground">
                  {gradeCount} grade{gradeCount === 1 ? "" : "s"}
                </span>
                <span className="text-secondary font-medium">View grades →</span>
              </div>
            </Link>
          );
        })}
      </div>
      <RFQCta variant="card" />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Polymer types",
          url: `${SITE.baseUrl}/polymers`,
          mainEntity: {
            "@type": "ItemList",
            itemListElement: polymers.map((p, idx) => ({
              "@type": "ListItem",
              position: idx + 1,
              name: p.name,
              url: `${SITE.baseUrl}/polymers/${p.slug}`,
            })),
          },
        }}
      />
    </PageLayout>
  );
}
