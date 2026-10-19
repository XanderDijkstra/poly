// Server entry used only at build time by scripts/prerender-routes.mjs to
// render each route's real React tree to static HTML.
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "./App";
import { PageMeta, PageMetaCollector } from "@/hooks/usePageMeta";

export function render(url: string): { html: string; meta?: PageMeta } {
  const collector: { meta?: PageMeta } = {};
  const html = renderToString(
    <PageMetaCollector.Provider value={collector}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </PageMetaCollector.Provider>
  );
  return { html, meta: collector.meta };
}
