import { Link, useParams } from "react-router-dom";
import { PageLayout } from "@/components/PageLayout";
import { JsonLd } from "@/components/JsonLd";
import { RelatedPages } from "@/components/RelatedPages";
import { RFQCta } from "@/components/RFQCta";
import { usePageMeta } from "@/hooks/usePageMeta";
import { useCaseBySlug, useCasesByApplication } from "@/data/useCases";
import { applicationBySlug } from "@/data/applications";
import { polymerBySlug } from "@/data/polymers";
import { SITE } from "@/lib/site";
import NotFoundPage from "./NotFoundPage";

export default function UseCaseDetail() {
  const { slug, useCase: useCaseSlug } = useParams<{
    slug: string;
    useCase: string;
  }>();
  const application = slug ? applicationBySlug(slug) : undefined;
  const useCase =
    slug && useCaseSlug ? useCaseBySlug(slug, useCaseSlug) : undefined;

  usePageMeta({
    title: useCase
      ? `${useCase.name}: polymer sourcing guide | ${SITE.name}`
      : `Use case not found | ${SITE.name}`,
    description: useCase
      ? `Polymer sourcing for ${useCase.name.toLowerCase()}: recommended grades, key requirements, and procurement notes.`
      : undefined,
    canonical:
      application && useCase
        ? `/applications/${application.slug}/${useCase.slug}`
        : undefined,
  });

  if (!application || !useCase) return <NotFoundPage />;

  const recommended = useCase.recommendedPolymers
    .map((s) => polymerBySlug(s))
    .filter(Boolean);
  const siblings = useCasesByApplication(application.slug).filter(
    (u) => u.slug !== useCase.slug
  );

  return (
    <PageLayout
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Applications", href: "/applications" },
        { label: application.name, href: `/applications/${application.slug}` },
        { label: useCase.name },
      ]}
      eyebrow={`${application.category} · ${application.name}`}
      title={`Polymer sourcing for ${useCase.name.toLowerCase()}`}
      lede={useCase.shortDescription}
      wide
    >
      <section>
        <h2 className="font-heading text-xl md:text-2xl font-semibold tracking-tight text-primary mb-4">
          Recommended polymers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {recommended.map((p) =>
            p ? (
              <Link
                key={p.slug}
                to={`/polymers/${p.slug}`}
                className="block rounded-md border border-border bg-background p-4 hover:border-secondary transition-colors"
              >
                <div className="flex items-baseline justify-between">
                  <div className="font-medium text-foreground">{p.name}</div>
                  <span className="font-mono text-xs text-muted-foreground">
                    {p.abbreviation}
                  </span>
                </div>
                <div className="text-xs text-muted-foreground mt-1 line-clamp-2">
                  {p.shortDescription}
                </div>
              </Link>
            ) : null
          )}
        </div>
      </section>

      <section>
        <h2 className="font-heading text-xl md:text-2xl font-semibold tracking-tight text-primary mb-4">
          Key requirements
        </h2>
        <ul className="space-y-2 text-sm">
          {useCase.keyRequirements.map((r) => (
            <li
              key={r}
              className="rounded-md border border-border bg-surface px-4 py-3 text-foreground"
            >
              {r}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="font-heading text-xl md:text-2xl font-semibold tracking-tight text-primary mb-4">
          Procurement notes
        </h2>
        <p className="text-sm md:text-base text-foreground leading-relaxed">
          {useCase.procurementNotes}
        </p>
      </section>

      <RFQCta
        variant="card"
        application={application.slug}
        label={`Source for ${useCase.name.toLowerCase()}`}
      />

      {siblings.length > 0 && (
        <RelatedPages
          heading={`Other ${application.name.toLowerCase()} use cases`}
          items={siblings.map((u) => ({
            title: u.name,
            href: `/applications/${application.slug}/${u.slug}`,
            archetype: application.category,
            description: u.shortDescription,
          }))}
        />
      )}

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: useCase.name,
          description: useCase.shortDescription,
          url: `${SITE.baseUrl}/applications/${application.slug}/${useCase.slug}`,
          isPartOf: {
            "@type": "WebPage",
            name: application.name,
            url: `${SITE.baseUrl}/applications/${application.slug}`,
          },
        }}
      />
    </PageLayout>
  );
}
