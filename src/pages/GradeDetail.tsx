import { Link, useParams } from "react-router-dom";
import { PageLayout } from "@/components/PageLayout";
import { JsonLd } from "@/components/JsonLd";
import { TechSpecsTable } from "@/components/TechSpecsTable";
import { RelatedPages } from "@/components/RelatedPages";
import { RFQCta } from "@/components/RFQCta";
import { usePageMeta } from "@/hooks/usePageMeta";
import { gradeBySlug, grades, gradesByPolymer } from "@/data/grades";
import { polymerBySlug } from "@/data/polymers";
import { applicationBySlug } from "@/data/applications";
import { SITE } from "@/lib/site";
import NotFoundPage from "./NotFoundPage";

export default function GradeDetail() {
  const { slug } = useParams<{ slug: string }>();
  const grade = slug ? gradeBySlug(slug) : undefined;

  usePageMeta({
    title: grade
      ? `${grade.name} — properties and suppliers | ${SITE.name}`
      : `Grade not found | ${SITE.name}`,
    description: grade
      ? `${grade.name} specifications, equivalent grades, and procurement notes. Get quotes from European suppliers.`
      : undefined,
    canonical: grade ? `/grades/${grade.slug}` : undefined,
  });

  if (!grade) return <NotFoundPage />;

  const polymer = polymerBySlug(grade.polymerSlug);
  const application = grade.applicationSlug
    ? applicationBySlug(grade.applicationSlug)
    : undefined;
  const related = grades
    .filter((g) => g.polymerSlug === grade.polymerSlug && g.slug !== grade.slug)
    .slice(0, 4);

  const specs = [
    { property: "Polymer family", value: polymer?.name ?? grade.polymerSlug },
    { property: "MFI", value: grade.mfi ?? "—", standard: "ISO 1133" },
    { property: "Density", value: grade.density ?? polymer?.density ?? "—" },
    { property: "Process", value: grade.process },
    { property: "Typical application", value: grade.application },
  ];

  return (
    <PageLayout
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Grades", href: "/grades" },
        { label: grade.name },
      ]}
      eyebrow={polymer ? `${polymer.name} · ${polymer.abbreviation}` : undefined}
      title={`${grade.name} — Specifications and suppliers`}
      lede={grade.shortDescription}
      wide
    >
      <section>
        <h2 className="font-heading text-xl md:text-2xl font-semibold tracking-tight text-primary mb-4">
          Quick specs
        </h2>
        <TechSpecsTable rows={specs} />
      </section>

      {grade.equivalents && grade.equivalents.length > 0 && (
        <section>
          <h2 className="font-heading text-xl md:text-2xl font-semibold tracking-tight text-primary mb-4">
            Equivalent producer grades
          </h2>
          <ul className="space-y-2 text-sm">
            {grade.equivalents.map((eq) => (
              <li
                key={eq}
                className="rounded-md border border-border bg-surface px-4 py-3 font-mono text-foreground"
              >
                {eq}
              </li>
            ))}
          </ul>
          <p className="mt-3 text-xs text-muted-foreground">
            Equivalents listed for technical context only — they are starting points
            for specification, not endorsements. Always validate with the producer's
            own technical data sheet.
          </p>
        </section>
      )}

      <section>
        <h2 className="font-heading text-xl md:text-2xl font-semibold tracking-tight text-primary mb-4">
          Procurement considerations
        </h2>
        <div className="space-y-4 text-sm text-foreground">
          <p>
            <strong className="text-primary">Lead time:</strong> 1–3 days from local
            distributor stock; 1–4 weeks producer-direct; 4–8 weeks for imports.
          </p>
          <p>
            <strong className="text-primary">Minimum order:</strong> 25 kg single-bag
            samples available from most distributors. Spot lots typically 1–25 t. Producer-direct usually requires 5+ t per order.
          </p>
          {grade.packaging && grade.packaging.length > 0 && (
            <p>
              <strong className="text-primary">Packaging options:</strong>{" "}
              {grade.packaging.join(", ")}.
            </p>
          )}
        </div>
      </section>

      <RFQCta
        variant="card"
        polymer={grade.polymerSlug}
        grade={grade.slug}
        application={grade.applicationSlug}
        label={`Source ${grade.name}`}
      />

      <RelatedPages
        heading="Related items"
        items={[
          ...(polymer
            ? [
                {
                  title: polymer.name,
                  href: `/polymers/${polymer.slug}`,
                  archetype: "Polymer family",
                  description: polymer.shortDescription,
                },
              ]
            : []),
          ...(application
            ? [
                {
                  title: application.name,
                  href: `/applications/${application.slug}`,
                  archetype: "Application",
                  description: application.shortDescription,
                },
              ]
            : []),
          ...related.map((g) => ({
            title: g.name,
            href: `/grades/${g.slug}`,
            archetype: "Grade",
            description: g.shortDescription,
          })),
        ]}
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Product",
          name: grade.name,
          description: grade.shortDescription,
          category: polymer?.name,
          additionalProperty: [
            grade.mfi && {
              "@type": "PropertyValue",
              name: "MFI",
              value: grade.mfi,
            },
            grade.density && {
              "@type": "PropertyValue",
              name: "Density",
              value: grade.density,
            },
            {
              "@type": "PropertyValue",
              name: "Process",
              value: grade.process,
            },
          ].filter(Boolean),
          url: `${SITE.baseUrl}/grades/${grade.slug}`,
        }}
      />
      <Link to="/grades" className="text-xs text-muted-foreground hover:text-foreground inline-block">
        ← All grades ({gradesByPolymer(grade.polymerSlug).length} for {polymer?.abbreviation})
      </Link>
    </PageLayout>
  );
}
