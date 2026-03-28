import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import AppRoutes from "./AppRoutes";
import { blogPosts } from "./data/blogPosts";
import { caseStudies } from "./data/caseStudies";
import { trustDimensions } from "./data/trustDimensions";

// Force react-helmet-async into server mode so it populates the context
// object instead of mutating the real DOM head.
(HelmetProvider as unknown as { canUseDOM: boolean }).canUseDOM = false;

/** All routes that should be prerendered to static HTML. */
export const prerenderRoutes: string[] = [
  "/",
  "/systems-of-trust",
  "/method-capture",
  "/glossary",
  "/blog",
  "/strategy-sprint",
  "/trust-building-artifacts",
  "/fractional-credential-operations",
  "/trust-architecture-review",
  "/trust-review-workbook",
  "/benchmark-audit",
  "/curriculum-assessment-design",
  "/brand-infrastructure",
  "/120-day-pilot",
  "/case-studies",
  ...blogPosts.map((p) => `/blog/${p.slug}`),
  ...caseStudies.map((c) => `/case-studies/${c.slug}`),
  ...trustDimensions.map((d) => `/systems-of-trust/${d.slug}`),
];

export function render(url: string) {
  const helmetContext: { helmet?: Record<string, { toString(): string }> } = {};
  const queryClient = new QueryClient();

  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <StaticRouter location={url}>
            <AppRoutes />
          </StaticRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );

  const { helmet } = helmetContext;

  return { html, helmet };
}
