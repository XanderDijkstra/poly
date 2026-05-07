import { PageLayout } from "@/components/PageLayout";
import { JsonLd } from "@/components/JsonLd";
import { usePageMeta } from "@/hooks/usePageMeta";
import { SITE } from "@/lib/site";

export default function AboutPage() {
  usePageMeta({
    title: `About ${SITE.name}: independent polymer marketplace`,
    description:
      "Independent of any single trader. Built for procurement teams. How Polymer Platform works, our editorial standards, and supplier criteria.",
    canonical: "/about",
  });

  return (
    <PageLayout
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      eyebrow="About"
      title="Built for procurement teams. Independent of suppliers."
      lede="Polymer Platform is a neutral marketplace, not a trading house. Buyers post one RFQ and verified suppliers compete on price and service."
    >
      <section>
        <h2 className="font-heading text-xl md:text-2xl font-semibold tracking-tight text-primary mb-3">
          How it works
        </h2>
        <ol className="space-y-3 text-sm text-foreground">
          <li>
            <span className="font-mono text-secondary mr-2">1.</span>
            Buyers submit an RFQ with polymer type, grade, tonnage, delivery region and
            application.
          </li>
          <li>
            <span className="font-mono text-secondary mr-2">2.</span>
            Lead scoring assigns Tier 1, 2 or 3 based on tonnage, frequency, VAT validation
            and email domain.
          </li>
          <li>
            <span className="font-mono text-secondary mr-2">3.</span>
            Matched suppliers are notified and contact the buyer directly. We do not insert
            ourselves into the commercial relationship.
          </li>
        </ol>
      </section>

      <section>
        <h2 className="font-heading text-xl md:text-2xl font-semibold tracking-tight text-primary mb-3">
          Editorial standards
        </h2>
        <p className="text-sm text-foreground">
          Our editorial pages (polymer types, grades, applications, learn, insights) are
          written and maintained independently. Producers (Borealis, LyondellBasell,
          ExxonMobil, INEOS, SABIC etc) are named for technical context. Suppliers are not
          named or ranked in editorial pages, regardless of their lead-buying status.
          Suppliers pay only for matched leads, never for placement.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-xl md:text-2xl font-semibold tracking-tight text-primary mb-3">
          Supplier criteria
        </h2>
        <ul className="space-y-2 text-sm text-foreground">
          <li>· VAT-verified company in the EU, UK, EFTA, Turkey or MEAF region</li>
          <li>· Minimum two trade references confirming polymer trading or distribution</li>
          <li>· Signed Standard Contractual Clauses for non-EU lead transfers</li>
          <li>· No requirement to commit to monthly volume or annual fees</li>
        </ul>
      </section>

      <section>
        <h2 className="font-heading text-xl md:text-2xl font-semibold tracking-tight text-primary mb-3">
          Independence statement
        </h2>
        <p className="text-sm text-foreground">
          Polymer Platform does not own polymer inventory, does not take title in trades, and
          does not accept paid placement in editorial content. The only revenue source is
          per-lead supplier subscriptions. If that ever changes, we will state so on this
          page.
        </p>
      </section>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: `About ${SITE.name}`,
          url: `${SITE.baseUrl}/about`,
        }}
      />
    </PageLayout>
  );
}
