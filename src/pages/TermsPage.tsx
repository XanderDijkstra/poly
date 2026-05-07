import { PageLayout } from "@/components/PageLayout";
import { usePageMeta } from "@/hooks/usePageMeta";
import { SITE } from "@/lib/site";

export default function TermsPage() {
  usePageMeta({
    title: `Terms of service | ${SITE.name}`,
    description: "Terms governing use of Polymer Platform by buyers and suppliers.",
    canonical: "/terms",
  });

  return (
    <PageLayout
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Terms" }]}
      title="Terms of service"
      lede="The legal framework for using Polymer Platform. By submitting an RFQ or registering as a supplier you accept these terms."
    >
      <Section heading="1. Service">
        <p>
          Polymer Platform connects polymer buyers with verified suppliers. We do not take
          title to polymer inventory, and we are not party to the resulting commercial
          contract between buyer and supplier.
        </p>
      </Section>

      <Section heading="2. Buyers">
        <p>
          The RFQ form is free for buyers. By submitting, you confirm the requirement is
          genuine and that you have authority to receive supplier responses on behalf of
          your organisation.
        </p>
      </Section>

      <Section heading="3. Suppliers">
        <p>
          Suppliers receive matched leads on a per-lead pricing basis. Lead pricing is
          published on the For Suppliers page and can be revised on 30 days' notice.
          Suppliers must hold valid VAT registration in their operating jurisdiction.
        </p>
      </Section>

      <Section heading="4. Editorial neutrality">
        <p>
          Editorial content (polymers, grades, applications, learn, insights) is independent.
          Suppliers cannot pay for placement and are not named in editorial pages. Producers
          (e.g. Borealis, LyondellBasell) are referenced for technical context only.
        </p>
      </Section>

      <Section heading="5. Liability">
        <p>
          Polymer Platform makes no warranty as to the suitability of any supplier for a
          given requirement. Buyers and suppliers are responsible for their own due
          diligence, including any product compliance and contract terms between them.
        </p>
      </Section>

      <Section heading="6. Governing law">
        <p>These terms are governed by the laws of the Netherlands. Disputes are subject to the courts of Amsterdam.</p>
      </Section>
    </PageLayout>
  );
}

function Section({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="font-heading text-xl font-semibold text-primary mb-2">{heading}</h2>
      <div className="text-sm text-foreground space-y-3">{children}</div>
    </section>
  );
}
