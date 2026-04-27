import { Link } from "react-router-dom";
import { JsonLd } from "./JsonLd";
import { SITE } from "@/lib/site";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const itemListElement = items.map((item, idx) => ({
    "@type": "ListItem",
    position: idx + 1,
    name: item.label,
    item: item.href ? `${SITE.baseUrl}${item.href}` : undefined,
  }));

  return (
    <>
      <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground">
        <ol className="flex flex-wrap items-center gap-1.5">
          {items.map((item, idx) => (
            <li key={idx} className="flex items-center gap-1.5">
              {item.href ? (
                <Link to={item.href} className="hover:text-foreground">
                  {item.label}
                </Link>
              ) : (
                <span className="text-foreground">{item.label}</span>
              )}
              {idx < items.length - 1 && <span aria-hidden>/</span>}
            </li>
          ))}
        </ol>
      </nav>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement,
        }}
      />
    </>
  );
}
