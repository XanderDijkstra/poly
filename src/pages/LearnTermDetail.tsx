import { useParams } from "react-router-dom";
import { PageLayout } from "@/components/PageLayout";
import { JsonLd } from "@/components/JsonLd";
import { RelatedPages } from "@/components/RelatedPages";
import { usePageMeta } from "@/hooks/usePageMeta";
import { learnTermBySlug, learnTerms } from "@/data/learnTerms";
import { SITE } from "@/lib/site";
import NotFoundPage from "./NotFoundPage";

export default function LearnTermDetail() {
  const { slug } = useParams<{ slug: string }>();
  const term = slug ? learnTermBySlug(slug) : undefined;

  usePageMeta({
    title: term
      ? `${term.name} — what it means for polymer procurement | ${SITE.name}`
      : `Term not found | ${SITE.name}`,
    description: term?.shortDescription,
    canonical: term ? `/learn/${term.slug}` : undefined,
  });

  if (!term) return <NotFoundPage />;

  const related = term.related
    .map((s) => learnTerms.find((t) => t.slug === s))
    .filter(Boolean) as typeof learnTerms;

  return (
    <PageLayout
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Learn", href: "/learn" },
        { label: term.name },
      ]}
      eyebrow={term.category}
      title={term.name}
      lede={term.shortDescription}
    >
      <div className="prose prose-sm max-w-none text-foreground">
        <h2 className="font-heading text-xl font-semibold text-primary mt-0 mb-3">
          Why it matters for procurement
        </h2>
        <p className="text-base text-foreground">
          Understanding {term.name.toLowerCase()} matters whenever you need to translate
          a producer's technical data sheet into a procurement specification. Misreading the
          term can result in pricing the wrong material or accepting a non-compliant lot.
        </p>
        <p className="text-base text-foreground mt-4">
          When you submit an RFQ, naming the relevant standard or property explicitly
          (rather than relying on a generic equivalent) reduces re-quote cycles and
          accelerates routing to the supplier with the matching grade in stock.
        </p>
      </div>

      {related.length > 0 && (
        <RelatedPages
          heading="Related terms"
          items={related.map((r) => ({
            title: r.name,
            href: `/learn/${r.slug}`,
            archetype: r.category,
            description: r.shortDescription,
          }))}
        />
      )}

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "DefinedTerm",
          name: term.name,
          description: term.shortDescription,
          inDefinedTermSet: {
            "@type": "DefinedTermSet",
            name: `${SITE.name} polymer glossary`,
            url: `${SITE.baseUrl}/learn`,
          },
          url: `${SITE.baseUrl}/learn/${term.slug}`,
        }}
      />
    </PageLayout>
  );
}
