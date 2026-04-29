import { Link } from "react-router-dom";
import { PageLayout } from "@/components/PageLayout";
import { JsonLd } from "@/components/JsonLd";
import { usePageMeta } from "@/hooks/usePageMeta";
import { learnTerms } from "@/data/learnTerms";
import { SITE } from "@/lib/site";

const CATEGORY_LABELS: Record<string, string> = {
  technical: "Technical",
  regulatory: "Regulation",
  commercial: "Commercial",
  logistics: "Logistics",
};

export default function LearnOverview() {
  usePageMeta({
    title: `Learn about polymer sourcing | ${SITE.name}`,
    description:
      "Glossary and education for polymer procurement teams. Technical, regulatory, commercial and logistics topics, clearly explained.",
    canonical: "/learn",
  });

  const grouped = learnTerms.reduce<Record<string, typeof learnTerms>>(
    (acc, t) => {
      acc[t.category] = acc[t.category] ?? [];
      acc[t.category].push(t);
      return acc;
    },
    {}
  );

  return (
    <PageLayout
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Learn" }]}
      eyebrow="Education hub"
      title="Learn about polymer sourcing"
      lede={`${learnTerms.length} terms covering polymer technology, food-contact regulation, commercial mechanics, and logistics, written for procurement teams who need the working answer fast.`}
      wide
    >
      {Object.entries(grouped).map(([cat, items]) => (
        <section key={cat}>
          <h2 className="font-heading text-xl md:text-2xl font-semibold tracking-tight text-primary mb-4">
            {CATEGORY_LABELS[cat] ?? cat}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {items.map((t) => (
              <Link
                key={t.slug}
                to={`/learn/${t.slug}`}
                className="block rounded-md border border-border bg-background p-4 hover:border-secondary transition-colors"
              >
                <h3 className="font-medium text-foreground">{t.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                  {t.shortDescription}
                </p>
              </Link>
            ))}
          </div>
        </section>
      ))}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Learn about polymer sourcing",
          url: `${SITE.baseUrl}/learn`,
        }}
      />
    </PageLayout>
  );
}
