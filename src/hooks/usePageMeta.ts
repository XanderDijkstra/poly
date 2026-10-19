import { createContext, useContext, useEffect } from "react";
import { SITE } from "@/lib/site";

export interface PageMeta {
  title: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  noindex?: boolean;
}

function setMeta(name: string, content: string) {
  let el = document.querySelector(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setProperty(property: string, content: string) {
  let el = document.querySelector(`meta[property="${property}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("property", property);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLink(rel: string, href: string) {
  let el = document.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

// Build-time prerendering (src/entry-server.tsx) provides a collector so the
// page's meta can be written into the static <head>. In the browser there is
// no provider and the effect below updates the live document as before.
export const PageMetaCollector = createContext<{ meta?: PageMeta } | null>(null);

export function usePageMeta(meta: PageMeta) {
  const collector = useContext(PageMetaCollector);
  if (collector) collector.meta = meta;
  useEffect(() => {
    document.title = meta.title;
    if (meta.description) setMeta("description", meta.description);
    const canonical = meta.canonical
      ? meta.canonical.startsWith("http")
        ? meta.canonical
        : `${SITE.baseUrl}${meta.canonical}`
      : `${SITE.baseUrl}${window.location.pathname}`;
    setLink("canonical", canonical);
    setProperty("og:title", meta.title);
    if (meta.description) setProperty("og:description", meta.description);
    setProperty("og:url", canonical);
    setProperty("og:type", "website");
    setProperty("og:site_name", SITE.name);
    if (meta.ogImage) setProperty("og:image", meta.ogImage);
    setMeta("twitter:card", "summary_large_image");
    setMeta(
      "robots",
      meta.noindex ? "noindex, nofollow" : "index, follow"
    );
  }, [meta.title, meta.description, meta.canonical, meta.ogImage, meta.noindex]);
}
