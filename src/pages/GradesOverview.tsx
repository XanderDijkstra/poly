import { Link } from "react-router-dom";
import { useState } from "react";
import { PageLayout } from "@/components/PageLayout";
import { JsonLd } from "@/components/JsonLd";
import { RFQCta } from "@/components/RFQCta";
import { usePageMeta } from "@/hooks/usePageMeta";
import { grades } from "@/data/grades";
import { polymers, polymerBySlug } from "@/data/polymers";
import { SITE } from "@/lib/site";

export default function GradesOverview() {
  const [polymerFilter, setPolymerFilter] = useState<string>("");

  usePageMeta({
    title: `Polymer grades — comparison and specifications | ${SITE.name}`,
    description: `${grades.length} polymer grades catalogued across PP, PE, PVC, PET and recycled streams. Filter by polymer family or processing type.`,
    canonical: "/grades",
  });

  const filtered = polymerFilter
    ? grades.filter((g) => g.polymerSlug === polymerFilter)
    : grades;

  return (
    <PageLayout
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Grades" }]}
      eyebrow="Overview"
      title="Polymer grades by application"
      lede={`${grades.length} grades catalogued across the major commodity polymer families. Each entry covers MFI, density, typical processing, common applications, and equivalent grades from major producers.`}
      wide
    >
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-sm text-muted-foreground">Filter:</span>
        <button
          type="button"
          onClick={() => setPolymerFilter("")}
          className={`text-xs px-3 py-1.5 rounded-full border ${
            polymerFilter === ""
              ? "bg-primary text-primary-foreground border-primary"
              : "bg-background text-foreground border-border hover:border-secondary"
          }`}
        >
          All
        </button>
        {polymers.map((p) => (
          <button
            key={p.slug}
            type="button"
            onClick={() => setPolymerFilter(p.slug)}
            className={`text-xs px-3 py-1.5 rounded-full border ${
              polymerFilter === p.slug
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-background text-foreground border-border hover:border-secondary"
            }`}
          >
            {p.abbreviation}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {filtered.map((g) => {
          const polymer = polymerBySlug(g.polymerSlug);
          return (
            <Link
              key={g.slug}
              to={`/grades/${g.slug}`}
              className="block rounded-lg border border-border bg-background p-5 hover:border-secondary transition-colors"
            >
              <div className="flex items-baseline justify-between gap-3">
                <h2 className="font-heading text-base font-semibold text-primary">
                  {g.name}
                </h2>
                {polymer && (
                  <span className="font-mono text-xs text-muted-foreground">
                    {polymer.abbreviation}
                  </span>
                )}
              </div>
              <div className="mt-1 text-xs text-muted-foreground">
                {g.process} · {g.application}
              </div>
              <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                {g.shortDescription}
              </p>
              <div className="mt-3 flex items-center gap-3 text-xs font-mono tabular text-muted-foreground">
                {g.mfi && <span>MFI {g.mfi.replace(" g/10 min", "")}</span>}
                {g.density && <span>ρ {g.density.replace(" g/cm³", "")}</span>}
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
          name: "Polymer grades",
          url: `${SITE.baseUrl}/grades`,
          mainEntity: {
            "@type": "ItemList",
            itemListElement: grades.map((g, idx) => ({
              "@type": "ListItem",
              position: idx + 1,
              name: g.name,
              url: `${SITE.baseUrl}/grades/${g.slug}`,
            })),
          },
        }}
      />
    </PageLayout>
  );
}
