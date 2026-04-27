import { FormEvent, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { PageLayout } from "@/components/PageLayout";
import { JsonLd } from "@/components/JsonLd";
import { usePageMeta } from "@/hooks/usePageMeta";
import { polymers } from "@/data/polymers";
import { applications } from "@/data/applications";
import { regions } from "@/data/regions";
import { SITE } from "@/lib/site";

const QUANTITY_BANDS = [
  "1–25 t",
  "25–100 t",
  "100–500 t",
  "500–1,000 t",
  "1,000+ t",
];

const FREQUENCY_OPTIONS = [
  "One-off / spot",
  "Monthly",
  "Quarterly",
  "Annual contract",
];

const FREE_EMAIL_DOMAINS = [
  "gmail.com",
  "yahoo.com",
  "yahoo.co.uk",
  "outlook.com",
  "hotmail.com",
  "live.com",
  "icloud.com",
  "aol.com",
  "gmx.com",
  "gmx.de",
  "mail.ru",
];

export default function GetQuotesPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const polymerParam = searchParams.get("polymer") ?? "";
  const applicationParam = searchParams.get("application") ?? "";

  const [polymer, setPolymer] = useState(polymerParam);
  const [application, setApplication] = useState(applicationParam);

  useEffect(() => {
    if (polymerParam) setPolymer(polymerParam);
    if (applicationParam) setApplication(applicationParam);
  }, [polymerParam, applicationParam]);

  usePageMeta({
    title: `Request polymer quotes — RFQ form | ${SITE.name}`,
    description:
      "Submit one RFQ, get quotes from multiple verified suppliers within 48 hours. Free for procurement teams.",
    canonical: "/get-quotes",
  });

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const fd = new FormData(e.currentTarget);
    const email = String(fd.get("email") ?? "").trim();
    const domain = email.split("@")[1]?.toLowerCase() ?? "";

    if (!domain) {
      setError("Enter a valid business email address.");
      setSubmitting(false);
      return;
    }

    const freeDomain = FREE_EMAIL_DOMAINS.includes(domain);

    const payload = {
      company: fd.get("company"),
      country: fd.get("country"),
      vat: fd.get("vat"),
      polymer: fd.get("polymer"),
      grade: fd.get("grade"),
      quantity: fd.get("quantity"),
      frequency: fd.get("frequency"),
      delivery: fd.get("delivery"),
      requiredBy: fd.get("requiredBy"),
      application: fd.get("application"),
      existingSupplier: fd.get("existingSupplier"),
      targetPrice: fd.get("targetPrice"),
      contactName: fd.get("contactName"),
      email,
      phone: fd.get("phone"),
      notes: fd.get("notes"),
      consent: fd.get("consent") === "on",
      submittedAt: new Date().toISOString(),
      freeDomainFlag: freeDomain,
    };

    if (!payload.consent) {
      setError("Please confirm consent to be contacted by verified suppliers.");
      setSubmitting(false);
      return;
    }

    if (typeof window !== "undefined") {
      try {
        const queue = JSON.parse(
          window.localStorage.getItem("rfq_queue") ?? "[]"
        );
        queue.push(payload);
        window.localStorage.setItem("rfq_queue", JSON.stringify(queue));
      } catch {
        /* localStorage unavailable - non-fatal for the demo */
      }
    }

    navigate("/get-quotes/sent", { state: { polymer: payload.polymer } });
  }

  return (
    <PageLayout
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Get Quotes" },
      ]}
      eyebrow="Conversion engine"
      title="Request quotes from European polymer suppliers"
      lede="Submit your requirement once. Verified traders respond within 48 hours. Free for buyers — suppliers pay only for qualified matches."
    >
      <form
        onSubmit={handleSubmit}
        className="rounded-lg border border-border bg-background p-6 md:p-8 space-y-6"
        noValidate
      >
        <Field label="Company name" required>
          <input
            name="company"
            type="text"
            required
            className="input"
            placeholder="e.g. Acme Packaging GmbH"
          />
        </Field>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Field label="Country" required>
            <select name="country" required className="input">
              <option value="">Select country</option>
              {regions
                .filter((r) => r.countryCode)
                .map((r) => (
                  <option key={r.slug} value={r.countryCode}>
                    {r.name}
                  </option>
                ))}
            </select>
          </Field>
          <Field label="VAT number" required hint="Auto-filters tire-kickers.">
            <input
              name="vat"
              type="text"
              required
              className="input font-mono"
              placeholder="e.g. DE123456789"
            />
          </Field>
        </div>

        <Field label="Polymer type" required>
          <select
            name="polymer"
            required
            value={polymer}
            onChange={(e) => setPolymer(e.target.value)}
            className="input"
          >
            <option value="">Select polymer</option>
            {polymers.map((p) => (
              <option key={p.slug} value={p.slug}>
                {p.name} ({p.abbreviation})
              </option>
            ))}
          </select>
        </Field>

        <Field
          label="Specific grade or technical specs"
          hint="Optional — helps suppliers route to the right grade."
        >
          <textarea
            name="grade"
            rows={3}
            className="input"
            placeholder="e.g. PP homopolymer, MFI 12, food-contact certified, Borealis HF136MO equivalent"
          />
        </Field>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Field label="Quantity" required>
            <select name="quantity" required className="input">
              <option value="">Select tonnage band</option>
              {QUANTITY_BANDS.map((q) => (
                <option key={q} value={q}>
                  {q}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Frequency" required>
            <select name="frequency" required className="input">
              <option value="">Select frequency</option>
              {FREQUENCY_OPTIONS.map((f) => (
                <option key={f} value={f}>
                  {f}
                </option>
              ))}
            </select>
          </Field>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Field label="Delivery region" required>
            <select name="delivery" required className="input">
              <option value="">Select delivery country</option>
              {regions.map((r) => (
                <option key={r.slug} value={r.slug}>
                  {r.name}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Required by date">
            <input name="requiredBy" type="date" className="input" />
          </Field>
        </div>

        <Field label="Application" required>
          <select
            name="application"
            required
            value={application}
            onChange={(e) => setApplication(e.target.value)}
            className="input"
          >
            <option value="">Select application</option>
            {applications.map((a) => (
              <option key={a.slug} value={a.slug}>
                {a.name}
              </option>
            ))}
          </select>
        </Field>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Field label="Existing supplier" hint="Optional — useful market intel.">
            <input
              name="existingSupplier"
              type="text"
              className="input"
              placeholder="e.g. Resinex"
            />
          </Field>
          <Field
            label="Current target price (EUR/t)"
            hint="Optional — signals seriousness."
          >
            <input
              name="targetPrice"
              type="number"
              min="0"
              step="1"
              className="input font-mono"
              placeholder="e.g. 1250"
            />
          </Field>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Field label="Contact name" required>
            <input name="contactName" type="text" required className="input" />
          </Field>
          <Field
            label="Business email"
            required
            hint="Free providers (gmail, yahoo) flagged for manual review."
          >
            <input
              name="email"
              type="email"
              required
              className="input"
              placeholder="you@company.com"
            />
          </Field>
        </div>

        <Field label="Phone" hint="Required for orders 100+ t.">
          <input
            name="phone"
            type="tel"
            className="input font-mono"
            placeholder="+49 ..."
          />
        </Field>

        <Field label="Additional notes">
          <textarea
            name="notes"
            rows={4}
            className="input"
            placeholder="Anything else suppliers should know about this requirement"
          />
        </Field>

        <label className="flex items-start gap-3 text-sm">
          <input
            name="consent"
            type="checkbox"
            required
            className="mt-1 h-4 w-4 rounded border-border text-secondary focus:ring-secondary"
          />
          <span className="text-muted-foreground">
            I agree to be contacted by verified suppliers about this requirement.{" "}
            <a href="/privacy" className="text-secondary hover:underline">
              View Privacy Policy
            </a>
            .
          </span>
        </label>

        {error && (
          <div className="rounded-md bg-error/10 border border-error/30 px-4 py-3 text-sm text-error">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={submitting}
          className="w-full md:w-auto inline-flex items-center justify-center rounded-md bg-secondary px-6 py-3 text-base font-medium text-secondary-foreground hover:bg-secondary/90 disabled:opacity-60"
        >
          {submitting ? "Submitting…" : "Submit RFQ — get quotes within 48h"}
        </button>

        <p className="text-xs text-muted-foreground border-t border-border pt-4">
          Free for buyers · GDPR compliant · No spam — suppliers contact you only
          about this requirement.
        </p>
      </form>

      <style>{`
        .input {
          display: block;
          width: 100%;
          border: 1px solid #E2E8F0;
          background: #FFFFFF;
          color: #0F172A;
          border-radius: 0.375rem;
          padding: 0.625rem 0.75rem;
          font-size: 0.875rem;
          line-height: 1.4;
          transition: border-color 0.15s ease, box-shadow 0.15s ease;
        }
        .input:focus {
          outline: none;
          border-color: #2563EB;
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);
        }
        textarea.input {
          resize: vertical;
        }
      `}</style>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Request Polymer Quotes",
          description:
            "Submit a single RFQ to receive quotes from multiple verified European polymer suppliers within 48 hours.",
          url: `${SITE.baseUrl}/get-quotes`,
        }}
      />
    </PageLayout>
  );
}

function Field({
  label,
  required,
  hint,
  children,
}: {
  label: string;
  required?: boolean;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-foreground mb-1.5">
        {label}
        {required && <span className="text-error"> *</span>}
      </span>
      {children}
      {hint && <span className="block text-xs text-muted-foreground mt-1.5">{hint}</span>}
    </label>
  );
}
