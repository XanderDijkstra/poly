import { Link } from "react-router-dom";
import { PageLayout } from "@/components/PageLayout";
import { JsonLd } from "@/components/JsonLd";
import { usePageMeta } from "@/hooks/usePageMeta";
import { insights } from "@/data/insights";
import { SITE } from "@/lib/site";

export default function InsightsOverview() {
  usePageMeta({
    title: `Polymer market insights | ${SITE.name}`,
    description:
      "Quarterly market commentary, supply-chain analysis, and regulatory deep-dives for European polymer procurement teams.",
    canonical: "/insights",
  });

  return (
    <PageLayout
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Insights" }]}
      eyebrow="Insights"
      title="Polymer market insights"
      lede="Quarterly market reports, supply-chain analysis, and regulatory deep-dives. Written for procurement teams that already read ICIS, focused on the working takeaway rather than the hot take."
      wide
    >
      <div className="space-y-3">
        {insights.map((post) => (
          <Link
            key={post.slug}
            to={`/insights/${post.slug}`}
            className="block rounded-lg border border-border bg-background p-6 hover:border-secondary transition-colors"
          >
            <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground font-mono">
              <span>
                {new Date(post.publishedAt).toLocaleDateString("en-GB", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </span>
              <span>·</span>
              <span>{post.readMinutes} min read</span>
              {post.topics.map((t) => (
                <span
                  key={t}
                  className="inline-flex text-[11px] px-2 py-0.5 rounded-full bg-surface border border-border text-muted-foreground font-sans"
                >
                  {t}
                </span>
              ))}
            </div>
            <h2 className="mt-2 font-heading text-xl font-semibold text-primary">
              {post.title}
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">{post.excerpt}</p>
          </Link>
        ))}
      </div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Polymer market insights",
          url: `${SITE.baseUrl}/insights`,
        }}
      />
    </PageLayout>
  );
}
