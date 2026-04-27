import { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { Breadcrumbs, BreadcrumbItem } from "./Breadcrumbs";

interface PageLayoutProps {
  breadcrumbs?: BreadcrumbItem[];
  title: string;
  lede?: string;
  eyebrow?: string;
  children: ReactNode;
  wide?: boolean;
}

export function PageLayout({
  breadcrumbs,
  title,
  lede,
  eyebrow,
  children,
  wide,
}: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="container max-w-7xl mx-auto py-6 md:py-10">
          {breadcrumbs && breadcrumbs.length > 0 && (
            <Breadcrumbs items={breadcrumbs} />
          )}
          <header className="mt-3">
            {eyebrow && (
              <div className="text-xs uppercase tracking-wider text-secondary font-medium mb-2">
                {eyebrow}
              </div>
            )}
            <h1 className="font-heading text-3xl md:text-5xl font-bold tracking-tight text-primary max-w-4xl">
              {title}
            </h1>
            {lede && (
              <p className="text-base md:text-lg text-muted-foreground mt-4 border-l-4 border-secondary pl-4 max-w-3xl">
                {lede}
              </p>
            )}
          </header>
          <div
            className={`mt-8 md:mt-12 ${
              wide ? "max-w-7xl" : "max-w-3xl"
            } space-y-8 md:space-y-12`}
          >
            {children}
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
