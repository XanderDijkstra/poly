import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { NAV, SITE } from "@/lib/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container max-w-7xl mx-auto flex h-14 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded bg-primary text-primary-foreground font-mono text-sm font-bold">
            P
          </span>
          <span className="font-heading text-base font-semibold tracking-tight text-primary">
            {SITE.name}
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {NAV.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/get-quotes"
            className="hidden sm:inline-flex items-center justify-center rounded-md bg-secondary px-3.5 py-2 text-sm font-medium text-secondary-foreground hover:bg-secondary/90 transition-colors"
          >
            Get Quotes
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-foreground"
          >
            <span aria-hidden className="block h-0.5 w-4 bg-current relative">
              <span className="absolute -top-1.5 left-0 h-0.5 w-4 bg-current" />
              <span className="absolute top-1.5 left-0 h-0.5 w-4 bg-current" />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="container max-w-7xl mx-auto py-3 flex flex-col gap-1">
            {NAV.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                onClick={() => setOpen(false)}
                className="px-2 py-2 text-sm font-medium text-foreground hover:bg-surface rounded"
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/get-quotes"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-md bg-secondary px-3.5 py-2 text-sm font-medium text-secondary-foreground"
            >
              Get Quotes
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
