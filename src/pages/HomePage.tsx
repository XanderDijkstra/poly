import { Link } from "react-router-dom";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { JsonLd } from "@/components/JsonLd";
import { RFQCta } from "@/components/RFQCta";
import { usePageMeta } from "@/hooks/usePageMeta";
import { polymers } from "@/data/polymers";
import { applications } from "@/data/applications";
import { insights } from "@/data/insights";
import { grades } from "@/data/grades";
import { regions } from "@/data/regions";
import { SITE } from "@/lib/site";

const homepageApplications = [
  "food-packaging-rigid",
  "automotive-interior",
  "pipe-extrusion-pressure",
  "medical-devices-rigid",
  "agricultural-film",
  "consumer-goods-houseware",
];

export default function HomePage() {
  usePageMeta({
    title: `Find polymer suppliers in Europe. Submit one RFQ | ${SITE.name}`,
    description:
      "Connect with verified European polymer traders. Get quotes for PP, PE, PVC, PET and recycled grades. Free for buyers.",
    canonical: "/",
  });

  const featuredApps = homepageApplications
    .map((slug) => applications.find((a) => a.slug === slug))
    .filter(Boolean) as typeof applications;
  const recentInsights = insights.slice(0, 3);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="container max-w-7xl mx-auto pt-12 pb-16 md:pt-20 md:pb-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted-foreground mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-success" />
              Independent European polymer marketplace
            </div>
            <h1 className="font-heading text-4xl md:text-6xl font-bold tracking-tight text-primary">
              Find the right polymer supplier. Submit one RFQ, get multiple quotes.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground border-l-4 border-secondary pl-4">
              For procurement teams sourcing 1–500 tonnes of PP, PE, PVC, PET or
              recycled grades. We connect you to verified European traders and
              distributors. Free for buyers.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <RFQCta label="Get Quotes" />
              <Link
                to="/polymers"
                className="text-sm font-medium text-secondary hover:underline"
              >
                Browse polymer types →
              </Link>
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-surface">
          <div className="container max-w-7xl mx-auto py-10 md:py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <Step
              n="1"
              title="Submit your requirement"
              body="One form: polymer type, quantity, delivery region, application. VAT-validated for legitimate buyers."
            />
            <Step
              n="2"
              title="Verified suppliers respond"
              body="Matched to traders and distributors with the right grade, region and tonnage range, typically within 48 hours."
            />
            <Step
              n="3"
              title="Compare and order direct"
              body="You contract directly with the supplier. We don't take a cut from your order. Free for buyers."
            />
          </div>
        </section>

        <section className="container max-w-7xl mx-auto py-16 md:py-20">
          <div className="flex items-end justify-between mb-8">
            <div>
              <div className="text-xs uppercase tracking-wider text-secondary font-medium mb-2">
                Polymer types
              </div>
              <h2 className="font-heading text-2xl md:text-4xl font-bold tracking-tight text-primary">
                Twelve polymer families covered
              </h2>
            </div>
            <Link
              to="/polymers"
              className="hidden md:inline text-sm font-medium text-secondary hover:underline"
            >
              View all →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            {polymers.map((p) => {
              const gradeCount = grades.filter((g) => g.polymerSlug === p.slug).length;
              return (
                <Link
                  key={p.slug}
                  to={`/polymers/${p.slug}`}
                  className="block rounded-lg border border-border bg-background p-5 hover:border-secondary transition-colors"
                >
                  <div className="flex items-baseline justify-between">
                    <h3 className="font-heading text-base font-semibold text-primary">
                      {p.name}
                    </h3>
                    <span className="font-mono text-xs text-muted-foreground">
                      {p.abbreviation}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
                    {p.shortDescription}
                  </p>
                  <div className="mt-3 text-xs text-muted-foreground font-mono tabular">
                    {gradeCount} grade{gradeCount === 1 ? "" : "s"} catalogued
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        <section className="bg-surface border-y border-border">
          <div className="container max-w-7xl mx-auto py-16 md:py-20">
            <div className="text-xs uppercase tracking-wider text-secondary font-medium mb-2">
              Applications
            </div>
            <h2 className="font-heading text-2xl md:text-4xl font-bold tracking-tight text-primary mb-8">
              Sourcing for your end use
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {featuredApps.map((a) => (
                <Link
                  key={a.slug}
                  to={`/applications/${a.slug}`}
                  className="block rounded-lg border border-border bg-background p-5 hover:border-secondary transition-colors"
                >
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                    {a.category}
                  </div>
                  <h3 className="font-heading text-base font-semibold text-primary">
                    {a.name}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="container max-w-7xl mx-auto py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Stat
              value={`${grades.length}+`}
              label="polymer grades catalogued"
            />
            <Stat
              value={`${regions.length}`}
              label="European and connected regions"
            />
            <Stat value="48h" label="typical response time on RFQs" />
          </div>
        </section>

        <section className="bg-primary text-primary-foreground">
          <div className="container max-w-7xl mx-auto py-16 md:py-20">
            <h2 className="font-heading text-2xl md:text-4xl font-bold tracking-tight">
              Why teams use {SITE.name}
            </h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
              <Reason
                title="One RFQ, multiple suppliers"
                body="Stop pinging five distributors separately. Submit once, suppliers come to you with quotes."
              />
              <Reason
                title="Verified suppliers only"
                body="VAT-validated companies, references checked. We screen for legitimate buyers and sellers."
              />
              <Reason
                title="No fees for buyers"
                body="Free for procurement teams. Suppliers pay only for qualified leads, never for editorial placement."
              />
            </div>
          </div>
        </section>

        <section className="container max-w-7xl mx-auto py-16 md:py-20">
          <div className="flex items-end justify-between mb-8">
            <div>
              <div className="text-xs uppercase tracking-wider text-secondary font-medium mb-2">
                Insights
              </div>
              <h2 className="font-heading text-2xl md:text-4xl font-bold tracking-tight text-primary">
                Recent market commentary
              </h2>
            </div>
            <Link
              to="/insights"
              className="hidden md:inline text-sm font-medium text-secondary hover:underline"
            >
              All insights →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {recentInsights.map((post) => (
              <Link
                key={post.slug}
                to={`/insights/${post.slug}`}
                className="block rounded-lg border border-border bg-background p-6 hover:border-secondary transition-colors"
              >
                <div className="text-xs text-muted-foreground font-mono">
                  {new Date(post.publishedAt).toLocaleDateString("en-GB", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                  · {post.readMinutes} min read
                </div>
                <h3 className="mt-2 font-heading text-lg font-semibold text-primary">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
                  {post.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </section>

        <RFQCta variant="bar" />
      </main>
      <SiteFooter />
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: SITE.name,
            url: SITE.baseUrl,
            description: SITE.description,
          },
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: SITE.name,
            url: SITE.baseUrl,
            potentialAction: {
              "@type": "SearchAction",
              target: `${SITE.baseUrl}/learn?q={search_term_string}`,
              "query-input": "required name=search_term_string",
            },
          },
        ]}
      />
    </div>
  );
}

function Step({ n, title, body }: { n: string; title: string; body: string }) {
  return (
    <div>
      <div className="font-mono text-xs text-secondary mb-2">{n}.</div>
      <h3 className="font-heading text-base font-semibold text-primary">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{body}</p>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-mono tabular text-3xl md:text-4xl font-semibold text-primary">
        {value}
      </div>
      <div className="text-sm text-muted-foreground mt-1">{label}</div>
    </div>
  );
}

function Reason({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <h3 className="font-heading text-base font-semibold text-accent">{title}</h3>
      <p className="mt-2 text-sm text-primary-foreground/80">{body}</p>
    </div>
  );
}
