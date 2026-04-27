import { Link } from "react-router-dom";
import { SITE } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-surface mt-16">
      <div className="container max-w-7xl mx-auto py-10 grid grid-cols-2 md:grid-cols-5 gap-8 text-sm">
        <div className="col-span-2 md:col-span-1">
          <div className="font-heading font-semibold text-primary">{SITE.name}</div>
          <p className="mt-2 text-muted-foreground max-w-xs">
            Independent European polymer sourcing. One RFQ, multiple verified suppliers.
          </p>
        </div>
        <FooterCol
          heading="Sourcing"
          links={[
            { label: "Get Quotes", href: "/get-quotes" },
            { label: "Polymers", href: "/polymers" },
            { label: "Grades", href: "/grades" },
            { label: "Applications", href: "/applications" },
            { label: "Suppliers", href: "/suppliers" },
          ]}
        />
        <FooterCol
          heading="Resources"
          links={[
            { label: "Learn", href: "/learn" },
            { label: "Insights", href: "/insights" },
          ]}
        />
        <FooterCol
          heading="Company"
          links={[
            { label: "About", href: "/about" },
            { label: "For Suppliers", href: "/for-suppliers" },
            { label: "Contact", href: "/contact" },
          ]}
        />
        <FooterCol
          heading="Legal"
          links={[
            { label: "Privacy", href: "/privacy" },
            { label: "Terms", href: "/terms" },
          ]}
        />
      </div>
      <div className="border-t border-border">
        <div className="container max-w-7xl mx-auto py-4 text-xs text-muted-foreground flex flex-wrap justify-between gap-2">
          <span>© {year} {SITE.name}. Independent polymer marketplace.</span>
          <span>GDPR compliant · VAT-verified suppliers</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  heading,
  links,
}: {
  heading: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <div className="font-medium text-foreground mb-3">{heading}</div>
      <ul className="space-y-2">
        {links.map((l) => (
          <li key={l.href}>
            <Link to={l.href} className="text-muted-foreground hover:text-foreground">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
