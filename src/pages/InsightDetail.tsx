import { useParams } from "react-router-dom";
import { PageLayout } from "@/components/PageLayout";
import { JsonLd } from "@/components/JsonLd";
import { RelatedPages } from "@/components/RelatedPages";
import { RFQCta } from "@/components/RFQCta";
import { usePageMeta } from "@/hooks/usePageMeta";
import { insightBySlug, insights, type InsightSection } from "@/data/insights";
import { SITE } from "@/lib/site";
import NotFoundPage from "./NotFoundPage";

function SectionBlock({ section }: { section: InsightSection }) {
  return (
    <section className="space-y-4">
      <h2 className="font-heading text-xl md:text-2xl font-semibold tracking-tight text-primary">
        {section.heading}
      </h2>
      {section.paragraphs?.map((p, idx) => (
        <p key={idx} className="text-foreground leading-relaxed">
          {p}
        </p>
      ))}
      {section.bullets && (
        <ul className="space-y-2 text-foreground">
          {section.bullets.map((b, idx) => (
            <li key={idx} className="pl-4 border-l-2 border-secondary/40">
              {b}
            </li>
          ))}
        </ul>
      )}
      {section.table && (
        <div className="overflow-x-auto rounded-md border border-border">
          <table className="w-full text-sm">
            <thead className="bg-surface text-left">
              <tr>
                {section.table.headers.map((h) => (
                  <th
                    key={h}
                    className="px-4 py-2 font-medium text-primary border-b border-border"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {section.table.rows.map((row, idx) => (
                <tr key={idx} className="border-b border-border last:border-0">
                  {row.map((cell, ci) => (
                    <td
                      key={ci}
                      className="px-4 py-2 text-foreground font-mono text-xs md:text-sm"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          {section.table.caption && (
            <div className="px-4 py-2 text-xs text-muted-foreground bg-surface border-t border-border">
              {section.table.caption}
            </div>
          )}
        </div>
      )}
      {section.callout && (
        <div className="rounded-md border border-secondary/30 bg-secondary/5 p-4">
          {section.callout.label && (
            <div className="text-xs uppercase tracking-wider text-secondary font-medium mb-1">
              {section.callout.label}
            </div>
          )}
          <p className="text-foreground text-sm">{section.callout.text}</p>
        </div>
      )}
    </section>
  );
}

export default function InsightDetail() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? insightBySlug(slug) : undefined;

  usePageMeta({
    title: post ? `${post.title} | ${SITE.name}` : `Insight not found | ${SITE.name}`,
    description: post?.excerpt,
    canonical: post ? `/insights/${post.slug}` : undefined,
  });

  if (!post) return <NotFoundPage />;

  const related = insights.filter((p) => p.slug !== post.slug).slice(0, 3);
  const hasContent = post.sections && post.sections.length > 0;

  return (
    <PageLayout
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Insights", href: "/insights" },
        { label: post.title },
      ]}
      eyebrow={post.topics[0]}
      title={post.title}
      lede={post.excerpt}
    >
      <div className="text-xs text-muted-foreground font-mono flex flex-wrap gap-3">
        <span>
          Published{" "}
          {new Date(post.publishedAt).toLocaleDateString("en-GB", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </span>
        <span>·</span>
        <span>By {post.author}</span>
        <span>·</span>
        <span>{post.readMinutes} min read</span>
      </div>

      {post.keyTakeaways && post.keyTakeaways.length > 0 && (
        <div className="rounded-md border border-border bg-surface p-5">
          <h2 className="font-heading text-base font-semibold text-primary mb-3">
            Key takeaways
          </h2>
          <ul className="space-y-2 text-sm text-foreground">
            {post.keyTakeaways.map((t, idx) => (
              <li key={idx} className="flex gap-2">
                <span className="text-secondary font-mono">·</span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {hasContent ? (
        <div className="space-y-8">
          {post.sections!.map((s, idx) => (
            <SectionBlock key={idx} section={s} />
          ))}
        </div>
      ) : (
        <div className="rounded-md border border-border bg-surface p-5 text-sm text-muted-foreground">
          Full article content forthcoming. The launch insights are written by
          industry editors and reviewed by independent technical contributors
          before publication.
        </div>
      )}

      <RFQCta variant="card" />

      <RelatedPages
        heading="Related insights"
        items={related.map((r) => ({
          title: r.title,
          href: `/insights/${r.slug}`,
          archetype: r.topics[0],
          description: r.excerpt,
        }))}
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: post.title,
          datePublished: post.publishedAt,
          dateModified: post.updatedAt ?? post.publishedAt,
          author: { "@type": "Organization", name: post.author },
          publisher: {
            "@type": "Organization",
            name: SITE.name,
            url: SITE.baseUrl,
          },
          description: post.excerpt,
          mainEntityOfPage: `${SITE.baseUrl}/insights/${post.slug}`,
        }}
      />
    </PageLayout>
  );
}
