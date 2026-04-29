import { Link, useLocation } from "react-router-dom";
import { PageLayout } from "@/components/PageLayout";
import { polymerBySlug } from "@/data/polymers";
import { usePageMeta } from "@/hooks/usePageMeta";
import { SITE } from "@/lib/site";

export default function GetQuotesSentPage() {
  const location = useLocation();
  const polymerSlug = (location.state as { polymer?: string } | null)?.polymer;
  const polymer = polymerSlug ? polymerBySlug(polymerSlug) : null;

  usePageMeta({
    title: `RFQ received | ${SITE.name}`,
    description: "Your RFQ has been received. Verified suppliers will respond within 48 hours.",
    canonical: "/get-quotes/sent",
    noindex: true,
  });

  return (
    <PageLayout
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Get Quotes", href: "/get-quotes" },
        { label: "Sent" },
      ]}
      eyebrow="RFQ received"
      title="We're matching you with suppliers now."
      lede="You'll hear back within 48 hours via email and phone. Tier-3 hot leads (500+ t exclusive) are routed first."
    >
      <div className="rounded-lg border border-success/30 bg-success/5 p-6">
        <h2 className="font-heading text-lg font-semibold text-success">
          Next steps
        </h2>
        <ul className="mt-3 space-y-2 text-sm text-foreground">
          <li>· VAT validation runs in the background (VIES API).</li>
          <li>· Lead scoring assigns Tier 1, 2 or 3 based on tonnage and frequency.</li>
          <li>· Matched suppliers are notified by email; you receive their quotes directly.</li>
        </ul>
      </div>

      {polymer && (
        <div className="rounded-lg border border-border bg-surface p-6">
          <div className="text-xs uppercase tracking-wider text-secondary font-medium mb-2">
            While you wait
          </div>
          <h3 className="font-heading text-lg font-semibold text-primary">
            Learn more about {polymer.name}
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            {polymer.shortDescription}
          </p>
          <Link
            to={`/polymers/${polymer.slug}`}
            className="mt-4 inline-flex text-sm font-medium text-secondary hover:underline"
          >
            View grades, applications and producers →
          </Link>
        </div>
      )}

      <div className="text-sm text-muted-foreground">
        Questions about your RFQ? <Link to="/contact" className="text-secondary hover:underline">Contact us</Link>.
      </div>
    </PageLayout>
  );
}
