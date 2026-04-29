import { PageLayout } from "@/components/PageLayout";
import { usePageMeta } from "@/hooks/usePageMeta";
import { SITE } from "@/lib/site";

export default function PrivacyPage() {
  usePageMeta({
    title: `Privacy policy | ${SITE.name}`,
    description: "How PolymerPlatform processes RFQ submissions and supplier data under GDPR.",
    canonical: "/privacy",
  });

  return (
    <PageLayout
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Privacy" }]}
      title="Privacy policy"
      lede="GDPR-compliant data handling for RFQ submissions and supplier accounts. This page explains who controls your data, why, and how to exercise your rights."
    >
      <Section heading="1. Who we are">
        <p>
          PolymerPlatform operates this site and processes RFQ submissions and supplier
          accounts. Contact:{" "}
          <a href="mailto:privacy@polymerplatform.eu" className="text-secondary hover:underline">
            privacy@polymerplatform.eu
          </a>
          .
        </p>
      </Section>

      <Section heading="2. What we collect">
        <p>
          When you submit an RFQ we collect: company name, country, VAT number, polymer
          requirement, contact name, business email and phone, application context and any
          notes you add. Server logs collect IP address and user agent.
        </p>
      </Section>

      <Section heading="3. Why we process it">
        <p>
          Legal basis: your explicit consent at RFQ submission, plus our legitimate
          interest in operating a polymer marketplace. We use the data only to match you
          with verified suppliers for the requirement you submitted.
        </p>
      </Section>

      <Section heading="4. Lead routing: controller-to-controller">
        <p>
          When we route your RFQ to a supplier, that supplier becomes a separate data
          controller for any further communication. Each supplier signs Standard
          Contractual Clauses for non-EU lead transfers.
        </p>
      </Section>

      <Section heading="5. Retention">
        <p>
          RFQ data is retained for 24 months from submission. You can request earlier
          deletion at any time.
        </p>
      </Section>

      <Section heading="6. Your rights">
        <p>
          Access, correction, deletion, restriction, portability, and objection. Email{" "}
          <a href="mailto:privacy@polymerplatform.eu" className="text-secondary hover:underline">
            privacy@polymerplatform.eu
          </a>
          . You can also lodge a complaint with your national data protection authority.
        </p>
      </Section>

      <Section heading="7. Cookies and analytics">
        <p>
          We use Plausible Analytics, which is cookieless and stores no personal data. We
          do not run advertising or third-party retargeting pixels.
        </p>
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
