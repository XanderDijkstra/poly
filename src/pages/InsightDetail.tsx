import { useParams } from "react-router-dom";
import { PageLayout } from "@/components/PageLayout";
import { JsonLd } from "@/components/JsonLd";
import { RelatedPages } from "@/components/RelatedPages";
import { RFQCta } from "@/components/RFQCta";
import { usePageMeta } from "@/hooks/usePageMeta";
import { insightBySlug, insights } from "@/data/insights";
import { SITE } from "@/lib/site";
import NotFoundPage from "./NotFoundPage";

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

      <div className="prose prose-sm max-w-none text-foreground">
        <h2 className="font-heading text-xl font-semibold text-primary mt-0 mb-3">
          Summary
        </h2>
        <p>{post.excerpt}</p>
        <p className="mt-4">
          Full article content forthcoming. The launch insights are written by industry
          editors and reviewed by independent technical contributors before publication.
        </p>
      </div>

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
