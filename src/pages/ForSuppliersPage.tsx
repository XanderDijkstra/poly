import { PageLayout } from "@/components/PageLayout";
import { JsonLd } from "@/components/JsonLd";
import { usePageMeta } from "@/hooks/usePageMeta";
import { SITE } from "@/lib/site";

const PRICING = [
  {
    tier: "Tier 1",
    range: "1–100 t",
    exclusivity: "Non-exclusive",
    price: "€75",
    note: "Pushed to all subscribed suppliers in matching polymer/region pool.",
  },
  {
    tier: "Tier 2",
    range: "100–500 t",
    exclusivity: "Shared with up to 3 suppliers",
    price: "€250",
    note: "First-to-respond gets the buyer's preferred contact method.",
  },
  {
    tier: "Tier 3",
    range: "500+ t",
    exclusivity: "Exclusive 48h",
    price: "€600",
    note: "Released to Tier 2 pool after 48h if not claimed.",
  },
];

export default function ForSuppliersPage() {
  usePageMeta({
    title: `Receive qualified RFQs from European procurement teams | ${SITE.name}`,
    description:
      "Stop chasing leads at trade shows. Receive verified RFQs from procurement managers actively sourcing PP, PE, PVC, PET and recycled grades. Pay only for qualified matches.",
    canonical: "/for-suppliers",
  });

  return (
    <PageLayout
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "For Suppliers" }]}
      eyebrow="For suppliers"
      title="Get qualified RFQs from European procurement teams"
      lede="Stop chasing leads at trade shows. Receive verified RFQs from procurement managers actively sourcing PP, PE, PVC, PET and recycled grades. Pay only for qualified matches."
      wide
    >
      <section>
        <h2 className="font-heading text-xl md:text-2xl font-semibold tracking-tight text-primary mb-3">
          Pricing — pay per qualified lead
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead className="bg-surface text-left text-xs uppercase tracking-wide text-muted-foreground">
              <tr>
                <th className="px-4 py-3 font-medium">Tier</th>
                <th className="px-4 py-3 font-medium">Tonnage</th>
                <th className="px-4 py-3 font-medium">Exclusivity</th>
                <th className="px-4 py-3 font-medium">Price</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {PRICING.map((p) => (
                <tr key={p.tier}>
                  <td className="px-4 py-3 font-medium text-primary">{p.tier}</td>
                  <td className="px-4 py-3 font-mono tabular text-foreground">
                    {p.range}
                  </td>
                  <td className="px-4 py-3 text-foreground">{p.exclusivity}</td>
                  <td className="px-4 py-3 font-mono tabular text-foreground">
                    {p.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-muted-foreground">
          Launch pricing. Adjusted after the first three months of conversion data.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-xl md:text-2xl font-semibold tracking-tight text-primary mb-3">
          Lead validation
        </h2>
        <ul className="space-y-2 text-sm text-foreground">
          <li>· VAT number validated against the EU VIES database (real-time, cached 24h)</li>
          <li>· Business email domain checked — free providers (gmail, yahoo) flagged</li>
          <li>· Polymer type, tonnage band, delivery region and application captured per RFQ</li>
          <li>· Lead scored on a 0–100+ scale with transparent weights</li>
        </ul>
      </section>

      <section>
        <h2 className="font-heading text-xl md:text-2xl font-semibold tracking-tight text-primary mb-3">
          Apply to receive leads
        </h2>
        <div className="rounded-lg border border-border bg-surface p-6">
          <p className="text-sm text-foreground">
            Tell us which polymers and regions you cover. We'll come back within 5 working
            days with a brief verification call and route the next matching RFQs to you.
          </p>
          <a
            href="mailto:suppliers@polymerplatform.eu"
            className="mt-4 inline-flex items-center justify-center rounded-md bg-secondary px-4 py-2.5 text-sm font-medium text-secondary-foreground hover:bg-secondary/90"
          >
            Apply to be a supplier →
          </a>
        </div>
      </section>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "For Suppliers",
          description:
            "How polymer traders and distributors receive qualified RFQs from European procurement teams.",
          url: `${SITE.baseUrl}/for-suppliers`,
        }}
      />
    </PageLayout>
  );
}
