import { Link } from "react-router-dom";
import { PageLayout } from "@/components/PageLayout";
import { JsonLd } from "@/components/JsonLd";
import { RFQCta } from "@/components/RFQCta";
import { usePageMeta } from "@/hooks/usePageMeta";
import { applications } from "@/data/applications";
import { SITE } from "@/lib/site";

export default function ApplicationsOverview() {
  usePageMeta({
    title: `Polymer applications: recommended materials by use case | ${SITE.name}`,
    description:
      "15 application categories with recommended polymers, regulatory considerations, and grade options. Source polymers for your specific end use.",
    canonical: "/applications",
  });

  const grouped = applications.reduce<Record<string, typeof applications>>(
    (acc, a) => {
      acc[a.category] = acc[a.category] ?? [];
      acc[a.category].push(a);
      return acc;
    },
    {}
  );

  return (
    <PageLayout
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Applications" }]}
      eyebrow="Overview"
      title="Polymer solutions by application"
      lede="Fifteen application categories spanning packaging, automotive, construction, medical, agriculture, and consumer goods. Each covers recommended polymers, regulatory landscape, and grade-specific procurement notes."
      wide
    >
      {Object.entries(grouped).map(([category, list]) => (
        <section key={category}>
          <h2 className="font-heading text-xl md:text-2xl font-semibold tracking-tight text-primary mb-4">
            {category}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {list.map((a) => (
              <Link
                key={a.slug}
                to={`/applications/${a.slug}`}
                className="block rounded-lg border border-border bg-background p-5 hover:border-secondary transition-colors"
              >
                <h3 className="font-heading text-base font-semibold text-primary">
                  {a.name}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
                  {a.shortDescription}
                </p>
              </Link>
            ))}
          </div>
        </section>
      ))}
      <RFQCta variant="card" />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Polymer applications",
          url: `${SITE.baseUrl}/applications`,
          mainEntity: {
            "@type": "ItemList",
            itemListElement: applications.map((a, idx) => ({
              "@type": "ListItem",
              position: idx + 1,
              name: a.name,
              url: `${SITE.baseUrl}/applications/${a.slug}`,
            })),
          },
        }}
      />
    </PageLayout>
  );
}
