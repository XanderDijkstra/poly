import { PageLayout } from "@/components/PageLayout";
import { usePageMeta } from "@/hooks/usePageMeta";
import { SITE } from "@/lib/site";

export default function ContactPage() {
  usePageMeta({
    title: `Contact ${SITE.name}`,
    description: "Get in touch with the Polymer Platform team. Buyers, suppliers, press.",
    canonical: "/contact",
  });

  return (
    <PageLayout
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      title="Contact"
      lede="Direct lines for buyers, suppliers and press. We aim to reply within one working day."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ContactCard
          heading="Buyers: RFQ support"
          email="rfq@polymerplatform.eu"
          body="Already submitted an RFQ? Email us if a supplier hasn't responded within 48 hours."
        />
        <ContactCard
          heading="Suppliers: apply for leads"
          email="suppliers@polymerplatform.eu"
          body="Polymer traders and distributors looking to receive qualified RFQs."
        />
        <ContactCard
          heading="Press & insights"
          email="press@polymerplatform.eu"
          body="Trade press requests for data or commentary on European polymer markets."
        />
        <ContactCard
          heading="General"
          email="hello@polymerplatform.eu"
          body="Anything else."
        />
      </div>
    </PageLayout>
  );
}

function ContactCard({
  heading,
  email,
  body,
}: {
  heading: string;
  email: string;
  body: string;
}) {
  return (
    <div className="rounded-lg border border-border bg-background p-5">
      <h2 className="font-heading text-base font-semibold text-primary">{heading}</h2>
      <p className="mt-2 text-sm text-muted-foreground">{body}</p>
      <a
        href={`mailto:${email}`}
        className="mt-3 inline-flex font-mono text-sm text-secondary hover:underline"
      >
        {email}
      </a>
    </div>
  );
}
