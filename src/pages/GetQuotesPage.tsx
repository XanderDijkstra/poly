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

interface RFQState {
  contactName: string;
  email: string;
  phone: string;
  company: string;
  country: string;
  vat: string;
  polymer: string;
  grade: string;
  application: string;
  quantity: string;
  frequency: string;
  delivery: string;
  requiredBy: string;
  existingSupplier: string;
  targetPrice: string;
  notes: string;
  consent: boolean;
}

const INITIAL_STATE: RFQState = {
  contactName: "",
  email: "",
  phone: "",
  company: "",
  country: "",
  vat: "",
  polymer: "",
  grade: "",
  application: "",
  quantity: "",
  frequency: "",
  delivery: "",
  requiredBy: "",
  existingSupplier: "",
  targetPrice: "",
  notes: "",
  consent: false,
};

const STEPS = [
  { id: 1, label: "Your contact" },
  { id: 2, label: "Your company" },
  { id: 3, label: "What you need" },
  { id: 4, label: "Quantity & delivery" },
  { id: 5, label: "Final details" },
];

export default function GetQuotesPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [state, setState] = useState<RFQState>(INITIAL_STATE);
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const polymerParam = searchParams.get("polymer") ?? "";
  const applicationParam = searchParams.get("application") ?? "";

  useEffect(() => {
    setState((s) => ({
      ...s,
      polymer: polymerParam || s.polymer,
      application: applicationParam || s.application,
    }));
  }, [polymerParam, applicationParam]);

  usePageMeta({
    title: `Request polymer quotes | ${SITE.name}`,
    description:
      "Submit one RFQ, get quotes from multiple verified suppliers within 48 hours. Free for procurement teams.",
    canonical: "/get-quotes",
  });

  const update = <K extends keyof RFQState>(key: K, value: RFQState[K]) => {
    setState((s) => ({ ...s, [key]: value }));
    setError(null);
  };

  function validateStep(current: number): string | null {
    if (current === 1) {
      if (!state.contactName.trim()) return "Enter your name.";
      if (!state.email.trim()) return "Enter your business email.";
      if (!state.email.includes("@")) return "Enter a valid email address.";
      if (!state.phone.trim()) return "Enter your phone number.";
      return null;
    }
    if (current === 2) {
      if (!state.company.trim()) return "Enter your company name.";
      if (!state.country) return "Select your country.";
      if (!state.vat.trim()) return "Enter your VAT number.";
      return null;
    }
    if (current === 3) {
      if (!state.polymer) return "Select a polymer type.";
      if (!state.application) return "Select an application.";
      return null;
    }
    if (current === 4) {
      if (!state.quantity) return "Select a tonnage band.";
      if (!state.frequency) return "Select a frequency.";
      if (!state.delivery) return "Select a delivery region.";
      return null;
    }
    if (current === 5) {
      if (!state.consent) return "Please confirm consent to be contacted.";
      return null;
    }
    return null;
  }

  function next() {
    const message = validateStep(step);
    if (message) {
      setError(message);
      return;
    }
    setError(null);
    setStep((s) => Math.min(s + 1, STEPS.length));
  }

  function back() {
    setError(null);
    setStep((s) => Math.max(s - 1, 1));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const message = validateStep(step);
    if (message) {
      setError(message);
      return;
    }
    setSubmitting(true);

    const domain = state.email.split("@")[1]?.toLowerCase() ?? "";
    const payload = {
      ...state,
      submittedAt: new Date().toISOString(),
      freeDomainFlag: FREE_EMAIL_DOMAINS.includes(domain),
    };

    if (typeof window !== "undefined") {
      try {
        const queue = JSON.parse(
          window.localStorage.getItem("rfq_queue") ?? "[]"
        );
        queue.push(payload);
        window.localStorage.setItem("rfq_queue", JSON.stringify(queue));
      } catch {
        /* localStorage unavailable; non-fatal in the demo flow */
      }
    }

    navigate("/get-quotes/sent", { state: { polymer: state.polymer } });
  }

  const progressPct = ((step - 1) / (STEPS.length - 1)) * 100;

  return (
    <PageLayout
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Get Quotes" },
      ]}
      eyebrow={`Step ${step} of ${STEPS.length}`}
      title="Request quotes from European polymer suppliers"
      lede="Answer a few questions and verified traders respond within 48 hours. Free for buyers."
    >
      <div>
        <div className="flex items-center justify-between text-xs text-muted-foreground font-mono mb-2">
          <span>{STEPS[step - 1].label}</span>
          <span className="tabular">
            {step}/{STEPS.length}
          </span>
        </div>
        <div className="h-1.5 rounded-full bg-surface overflow-hidden">
          <div
            className="h-full bg-secondary transition-all duration-300"
            style={{ width: `${progressPct}%` }}
          />
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="rounded-lg border border-border bg-background p-6 md:p-8"
        noValidate
      >
        {step === 1 && (
          <Step heading="Tell us who you are" body="We use these details to send you quotes from verified suppliers.">
            <Field label="Full name" required>
              <input
                type="text"
                required
                className="input"
                value={state.contactName}
                onChange={(e) => update("contactName", e.target.value)}
                autoFocus
              />
            </Field>
            <Field label="Business email" required>
              <input
                type="email"
                required
                className="input"
                value={state.email}
                onChange={(e) => update("email", e.target.value)}
                placeholder="you@company.com"
              />
            </Field>
            <Field label="Phone" required>
              <input
                type="tel"
                required
                className="input font-mono"
                value={state.phone}
                onChange={(e) => update("phone", e.target.value)}
                placeholder="+49 ..."
              />
            </Field>
          </Step>
        )}

        {step === 2 && (
          <Step heading="Your company" body="Suppliers prefer to work with verified businesses, so a VAT number unlocks faster routing.">
            <Field label="Company name" required>
              <input
                type="text"
                required
                className="input"
                value={state.company}
                onChange={(e) => update("company", e.target.value)}
                placeholder="e.g. Acme Packaging GmbH"
                autoFocus
              />
            </Field>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Field label="Country" required>
                <select
                  required
                  className="input"
                  value={state.country}
                  onChange={(e) => update("country", e.target.value)}
                >
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
              <Field label="VAT number" required>
                <input
                  type="text"
                  required
                  className="input font-mono"
                  value={state.vat}
                  onChange={(e) => update("vat", e.target.value)}
                  placeholder="e.g. DE123456789"
                />
              </Field>
            </div>
          </Step>
        )}

        {step === 3 && (
          <Step heading="What polymer do you need?" body="Tell us the material and the end use. Specifics let suppliers route the exact right grade.">
            <Field label="Polymer type" required>
              <select
                required
                className="input"
                value={state.polymer}
                onChange={(e) => update("polymer", e.target.value)}
                autoFocus
              >
                <option value="">Select polymer</option>
                {polymers.map((p) => (
                  <option key={p.slug} value={p.slug}>
                    {p.name} ({p.abbreviation})
                  </option>
                ))}
              </select>
            </Field>
            <Field label="Specific grade or technical specs">
              <textarea
                rows={3}
                className="input"
                value={state.grade}
                onChange={(e) => update("grade", e.target.value)}
                placeholder="e.g. PP homopolymer, MFI 12, food-contact certified, Borealis HF136MO equivalent"
              />
            </Field>
            <Field label="Application" required>
              <select
                required
                className="input"
                value={state.application}
                onChange={(e) => update("application", e.target.value)}
              >
                <option value="">Select application</option>
                {applications.map((a) => (
                  <option key={a.slug} value={a.slug}>
                    {a.name}
                  </option>
                ))}
              </select>
            </Field>
          </Step>
        )}

        {step === 4 && (
          <Step heading="How much, how often, where" body="Tonnage and frequency drive supplier matching and pricing.">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Field label="Quantity" required>
                <select
                  required
                  className="input"
                  value={state.quantity}
                  onChange={(e) => update("quantity", e.target.value)}
                  autoFocus
                >
                  <option value="">Select tonnage band</option>
                  {QUANTITY_BANDS.map((q) => (
                    <option key={q} value={q}>
                      {q}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Frequency" required>
                <select
                  required
                  className="input"
                  value={state.frequency}
                  onChange={(e) => update("frequency", e.target.value)}
                >
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
                <select
                  required
                  className="input"
                  value={state.delivery}
                  onChange={(e) => update("delivery", e.target.value)}
                >
                  <option value="">Select delivery country</option>
                  {regions.map((r) => (
                    <option key={r.slug} value={r.slug}>
                      {r.name}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Required by date">
                <input
                  type="date"
                  className="input"
                  value={state.requiredBy}
                  onChange={(e) => update("requiredBy", e.target.value)}
                />
              </Field>
            </div>
          </Step>
        )}

        {step === 5 && (
          <Step heading="Almost done" body="A few optional details that help suppliers respond faster.">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Field label="Existing supplier (optional)">
                <input
                  type="text"
                  className="input"
                  value={state.existingSupplier}
                  onChange={(e) => update("existingSupplier", e.target.value)}
                  placeholder="e.g. Resinex"
                />
              </Field>
              <Field label="Current target price (optional, EUR/t)">
                <input
                  type="number"
                  min="0"
                  step="1"
                  className="input font-mono"
                  value={state.targetPrice}
                  onChange={(e) => update("targetPrice", e.target.value)}
                  placeholder="e.g. 1250"
                />
              </Field>
            </div>
            <Field label="Additional notes">
              <textarea
                rows={4}
                className="input"
                value={state.notes}
                onChange={(e) => update("notes", e.target.value)}
                placeholder="Anything else suppliers should know about this requirement"
              />
            </Field>
            <label className="flex items-start gap-3 text-sm">
              <input
                type="checkbox"
                required
                checked={state.consent}
                onChange={(e) => update("consent", e.target.checked)}
                className="mt-1 h-4 w-4 rounded border-border text-secondary focus:ring-secondary"
              />
              <span className="text-muted-foreground">
                I agree to be contacted by verified suppliers about this
                requirement.{" "}
                <a href="/privacy" className="text-secondary hover:underline">
                  View Privacy Policy
                </a>
                .
              </span>
            </label>
          </Step>
        )}

        {error && (
          <div className="mt-6 rounded-md bg-error/10 border border-error/30 px-4 py-3 text-sm text-error">
            {error}
          </div>
        )}

        <div className="mt-8 flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-3 border-t border-border pt-6">
          <button
            type="button"
            onClick={back}
            disabled={step === 1}
            className="text-sm font-medium text-muted-foreground hover:text-foreground disabled:opacity-30 disabled:cursor-not-allowed"
          >
            ← Back
          </button>
          {step < STEPS.length ? (
            <button
              type="button"
              onClick={next}
              className="inline-flex items-center justify-center rounded-md bg-secondary px-6 py-3 text-sm font-medium text-secondary-foreground hover:bg-secondary/90"
            >
              Continue →
            </button>
          ) : (
            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center justify-center rounded-md bg-secondary px-6 py-3 text-sm font-medium text-secondary-foreground hover:bg-secondary/90 disabled:opacity-60"
            >
              {submitting ? "Submitting…" : "Submit RFQ"}
            </button>
          )}
        </div>

        <p className="mt-6 text-xs text-muted-foreground">
          Free for buyers. GDPR compliant. Suppliers contact you only about this
          requirement.
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

function Step({
  heading,
  body,
  children,
}: {
  heading: string;
  body?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-heading text-xl md:text-2xl font-semibold tracking-tight text-primary">
          {heading}
        </h2>
        {body && (
          <p className="mt-2 text-sm text-muted-foreground">{body}</p>
        )}
      </div>
      {children}
    </div>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-foreground mb-1.5">
        {label}
        {required && <span className="text-error"> *</span>}
      </span>
      {children}
    </label>
  );
}
