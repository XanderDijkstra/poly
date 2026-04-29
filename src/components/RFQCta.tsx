import { Link } from "react-router-dom";

interface RFQCtaProps {
  variant?: "inline" | "card" | "sticky" | "bar";
  polymer?: string;
  application?: string;
  grade?: string;
  label?: string;
}

export function RFQCta({
  variant = "inline",
  polymer,
  application,
  grade,
  label,
}: RFQCtaProps) {
  const params = new URLSearchParams();
  if (polymer) params.set("polymer", polymer);
  if (application) params.set("application", application);
  if (grade) params.set("grade", grade);
  const href = `/get-quotes${params.toString() ? `?${params.toString()}` : ""}`;
  const text = label ?? "Get Quotes";

  if (variant === "card") {
    return (
      <div className="rounded-lg border border-border bg-surface p-6 md:p-8">
        <h3 className="font-heading text-xl font-semibold tracking-tight text-primary">
          Need quotes from European suppliers?
        </h3>
        <p className="mt-2 text-sm text-muted-foreground max-w-xl">
          Submit one RFQ. Verified traders respond within 48 hours. Free for buyers.
        </p>
        <Link
          to={href}
          className="mt-4 inline-flex items-center justify-center rounded-md bg-secondary px-4 py-2.5 text-sm font-medium text-secondary-foreground hover:bg-secondary/90"
        >
          {text} →
        </Link>
      </div>
    );
  }

  if (variant === "bar") {
    return (
      <div className="border-y border-border bg-primary text-primary-foreground">
        <div className="container max-w-7xl mx-auto py-6 md:py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="font-heading text-lg md:text-xl font-semibold tracking-tight">
              Ready to source polymers?
            </div>
            <div className="text-sm text-primary-foreground/80 mt-1">
              Submit one RFQ. Get quotes from multiple verified suppliers within 48h.
            </div>
          </div>
          <Link
            to={href}
            className="inline-flex items-center justify-center rounded-md bg-accent px-4 py-2.5 text-sm font-medium text-accent-foreground hover:bg-accent/90"
          >
            Submit an RFQ →
          </Link>
        </div>
      </div>
    );
  }

  return (
    <Link
      to={href}
      className="inline-flex items-center justify-center rounded-md bg-secondary px-4 py-2.5 text-sm font-medium text-secondary-foreground hover:bg-secondary/90"
    >
      {text} →
    </Link>
  );
}
