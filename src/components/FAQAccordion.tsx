import { useState } from "react";
import { JsonLd } from "./JsonLd";

interface FAQItem {
  q: string;
  a: string;
}

export function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <>
      <div className="rounded-lg border border-border divide-y divide-border bg-background">
        {items.map((item, i) => {
          const isOpen = open === i;
          return (
            <div key={i}>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-4 py-4 text-left"
                aria-expanded={isOpen}
              >
                <span className="font-medium text-foreground">{item.q}</span>
                <span className="text-muted-foreground" aria-hidden>
                  {isOpen ? "−" : "+"}
                </span>
              </button>
              {isOpen && (
                <div className="px-4 pb-4 text-sm text-muted-foreground">
                  {item.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: items.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.a,
            },
          })),
        }}
      />
    </>
  );
}
