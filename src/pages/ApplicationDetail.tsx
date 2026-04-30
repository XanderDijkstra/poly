import { Link, useParams } from "react-router-dom";
import { PageLayout } from "@/components/PageLayout";
import { JsonLd } from "@/components/JsonLd";
import { FAQAccordion } from "@/components/FAQAccordion";
import { RelatedPages } from "@/components/RelatedPages";
import { RFQCta } from "@/components/RFQCta";
import { usePageMeta } from "@/hooks/usePageMeta";
import { applicationBySlug, applications } from "@/data/applications";
import { polymerBySlug } from "@/data/polymers";
import { grades } from "@/data/grades";
import { useCasesByApplication } from "@/data/useCases";
import { SITE } from "@/lib/site";
import NotFoundPage from "./NotFoundPage";

export default function ApplicationDetail() {
  const { slug } = useParams<{ slug: string }>();
  const application = slug ? applicationBySlug(slug) : undefined;

  usePageMeta({
    title: application
      ? `Polymers for ${application.name.toLowerCase()}: recommended grades | ${SITE.name}`
      : `Application not found | ${SITE.name}`,
    description: application
      ? `Polymer recommendations for ${application.name.toLowerCase()}: which materials, which grades, regulatory considerations.`
      : undefined,
    canonical: application ? `/applications/${application.slug}` : undefined,
  });

  if (!application) return <NotFoundPage />;

  const recommended = application.recommendedPolymers
    .map((slug) => polymerBySlug(slug))
    .filter(Boolean);
  const linkedGrades = grades.filter((g) => g.applicationSlug === application.slug);
  const useCases = useCasesByApplication(application.slug);
  const relatedApps = applications
    .filter((a) => a.slug !== application.slug && a.category === application.category)
    .slice(0, 3);

  const faqs = [
    {
      q: `Which polymers are most common for ${application.name.toLowerCase()}?`,
      a: `Most common materials are ${recommended.map((p) => p?.name).join(", ")}. Choice depends on regulatory requirements, mechanical performance, and cost target.`,
    },
    {
      q: "What regulations apply?",
      a: `Key regulations include ${application.regulations.join(", ")}. Suppliers must provide a Declaration of Compliance documenting that the specific grade meets the applicable standards.`,
    },
    {
      q: "What lead times can I expect?",
      a: `Distributor stock items: 1–3 days. Producer-direct prime: 1–4 weeks. Off-spec or near-prime spot lots: same week. Plan inventory accordingly.`,
    },
  ];

  return (
    <PageLayout
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Applications", href: "/applications" },
        { label: application.name },
      ]}
      eyebrow={application.category}
      title={`Polymers for ${application.name.toLowerCase()}`}
      lede={application.shortDescription}
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

      {useCases.length > 0 && (
        <section>
          <h2 className="font-heading text-xl md:text-2xl font-semibold tracking-tight text-primary mb-4">
            Sub-application use cases
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {useCases.map((u) => (
              <Link
                key={u.slug}
                to={`/applications/${application.slug}/${u.slug}`}
                className="block rounded-md border border-border bg-background p-4 hover:border-secondary transition-colors"
              >
                <div className="font-medium text-foreground">{u.name}</div>
                <div className="text-xs text-muted-foreground mt-1 line-clamp-2">
                  {u.shortDescription}
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {linkedGrades.length > 0 && (
        <section>
          <h2 className="font-heading text-xl md:text-2xl font-semibold tracking-tight text-primary mb-4">
            Specific recommended grades
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {linkedGrades.map((g) => (
              <Link
                key={g.slug}
                to={`/grades/${g.slug}`}
                className="block rounded-md border border-border bg-background p-4 hover:border-secondary transition-colors"
              >
                <div className="font-medium text-foreground">{g.name}</div>
                <div className="text-xs text-muted-foreground mt-1">
                  {g.process}
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section>
        <h2 className="font-heading text-xl md:text-2xl font-semibold tracking-tight text-primary mb-4">
          Regulatory considerations
        </h2>
        <ul className="space-y-2 text-sm">
          {application.regulations.map((r) => (
            <li
              key={r}
              className="rounded-md border border-border bg-surface px-4 py-3 font-mono text-foreground text-xs md:text-sm"
            >
              {r}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="font-heading text-xl md:text-2xl font-semibold tracking-tight text-primary mb-4">
          Frequently asked questions
        </h2>
        <FAQAccordion items={faqs} />
      </section>

      <RFQCta
        variant="card"
        application={application.slug}
        label={`Source for ${application.name.toLowerCase()}`}
      />

      {relatedApps.length > 0 && (
        <RelatedPages
          heading="Related applications"
          items={relatedApps.map((a) => ({
            title: a.name,
            href: `/applications/${a.slug}`,
            archetype: a.category,
            description: a.shortDescription,
          }))}
        />
      )}

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: `Polymers for ${application.name}`,
          description: application.shortDescription,
          url: `${SITE.baseUrl}/applications/${application.slug}`,
        }}
      />
    </PageLayout>
  );
}
