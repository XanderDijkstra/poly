import { Link } from "react-router-dom";

interface RelatedItem {
  title: string;
  href: string;
  archetype?: string;
  description?: string;
}

export function RelatedPages({
  items,
  heading = "Related",
}: {
  items: RelatedItem[];
  heading?: string;
}) {
  if (items.length === 0) return null;
  return (
    <section className="mt-12 md:mt-16">
      <h2 className="font-heading text-xl md:text-2xl font-semibold tracking-tight text-primary mb-4">
        {heading}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {items.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            className="block rounded-md border border-border bg-background p-4 hover:border-secondary transition-colors"
          >
            {item.archetype && (
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1">
                {item.archetype}
              </div>
            )}
            <div className="text-sm font-medium text-foreground">{item.title}</div>
            {item.description && (
              <div className="text-xs text-muted-foreground mt-1 line-clamp-2">
                {item.description}
              </div>
            )}
          </Link>
        ))}
      </div>
    </section>
  );
}
