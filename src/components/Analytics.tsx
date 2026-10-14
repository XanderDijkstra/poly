import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

/*
 * Google Analytics 4 behind prior consent (GDPR / ePrivacy). Nothing is loaded
 * from Google until the visitor clicks "Accept". The choice is kept in
 * localStorage; <CookieSettingsButton> on /privacy clears it so the banner
 * shows again.
 */
const GA_ID = "G-QFQLY3K7FN";
const KEY = "pp-cookie-consent";
const REOPEN = "pp-cookie-settings";

type Choice = "granted" | "denied" | null;

declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

function loadGa() {
  if (document.getElementById("ga4-src")) return;
  const s = document.createElement("script");
  s.id = "ga4-src";
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  // gtag.js expects the raw arguments object, not an array.
  function gtag(..._args: unknown[]) {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", GA_ID);
}

export function Analytics() {
  const [choice, setChoice] = useState<Choice | "unknown">("unknown");

  useEffect(() => {
    const read = () => setChoice((localStorage.getItem(KEY) as Choice) ?? null);
    read();
    window.addEventListener(REOPEN, read);
    return () => window.removeEventListener(REOPEN, read);
  }, []);

  useEffect(() => {
    if (choice === "granted") loadGa();
  }, [choice]);

  const decide = (value: "granted" | "denied") => {
    const revoking = value === "denied" && /(^|;\s*)_ga/.test(document.cookie);
    localStorage.setItem(KEY, value);
    if (revoking) {
      // Stop the running tag first (it rewrites _ga_* on activity), then drop the cookies and reload.
      (window as unknown as Record<string, boolean>)[`ga-disable-${GA_ID}`] = true;
      document.cookie
        .split(";")
        .map((c) => c.split("=")[0].trim())
        .filter((n) => n.startsWith("_ga"))
        .forEach((n) => {
          document.cookie = `${n}=; Max-Age=0; path=/; domain=.${location.hostname.replace(/^www\./, "")}`;
          document.cookie = `${n}=; Max-Age=0; path=/`;
        });
      location.reload();
      return;
    }
    setChoice(value);
  };

  if (choice !== null) return null;

  return (
    <div
      role="region"
      aria-label="Cookie consent"
      className="fixed inset-x-4 bottom-4 z-50 mx-auto flex max-w-2xl flex-wrap items-center gap-3 rounded-lg border border-border bg-background p-4 text-sm text-foreground shadow-lg md:gap-5"
    >
      <p className="m-0 flex-[1_1_280px]">
        We use Google Analytics to understand how this site is used — only if you allow it.{" "}
        <Link to="/privacy" className="text-secondary hover:underline">
          Learn more
        </Link>
      </p>
      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => decide("denied")}
          className="inline-flex items-center justify-center rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-surface"
        >
          Decline
        </button>
        <button
          type="button"
          onClick={() => decide("granted")}
          className="inline-flex items-center justify-center rounded-md bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground hover:bg-secondary/90"
        >
          Accept
        </button>
      </div>
    </div>
  );
}

export function CookieSettingsButton() {
  return (
    <button
      type="button"
      onClick={() => {
        localStorage.removeItem(KEY);
        window.dispatchEvent(new Event(REOPEN));
      }}
      className="inline-flex items-center justify-center rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-surface"
    >
      Change cookie settings
    </button>
  );
}
