import { Link } from "react-router-dom";
import { PageLayout } from "@/components/PageLayout";
import { usePageMeta } from "@/hooks/usePageMeta";
import { SITE } from "@/lib/site";

export default function NotFoundPage() {
  usePageMeta({
    title: `Page not found | ${SITE.name}`,
    description: "The page you requested doesn't exist on PolymerPlatform.",
    noindex: true,
  });

  return (
    <PageLayout
      title="Page not found"
      lede="The page you requested doesn't exist or has moved. Try one of the links below."
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <NotFoundLink to="/polymers" label="Polymer types" />
        <NotFoundLink to="/grades" label="Polymer grades" />
        <NotFoundLink to="/applications" label="Applications" />
        <NotFoundLink to="/suppliers" label="Suppliers by region" />
        <NotFoundLink to="/learn" label="Learn glossary" />
        <NotFoundLink to="/get-quotes" label="Submit an RFQ" />
      </div>
    </PageLayout>
  );
}

function NotFoundLink({ to, label }: { to: string; label: string }) {
  return (
    <Link
      to={to}
      className="block rounded-md border border-border bg-background px-4 py-3 text-sm font-medium text-foreground hover:border-secondary"
    >
      {label} →
    </Link>
  );
}
