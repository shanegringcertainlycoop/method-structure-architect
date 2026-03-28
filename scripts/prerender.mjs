/**
 * Static-site prerender script.
 *
 * After `vite build` (client) and `vite build --ssr` (server), this script
 * imports the SSR bundle, renders every known route to HTML, and writes the
 * result into dist/ so each page is a standalone, crawler-friendly HTML file.
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { JSDOM } from "jsdom";

// ── 0. Set up a DOM environment so React and browser-dependent libs work ────
const dom = new JSDOM("<!doctype html><html><body></body></html>", {
  url: "https://method-lab.ai",
});
globalThis.window = dom.window;
globalThis.document = dom.window.document;
globalThis.HTMLElement = dom.window.HTMLElement;
globalThis.localStorage = dom.window.localStorage;
globalThis.sessionStorage = dom.window.sessionStorage;
if (!globalThis.navigator) {
  Object.defineProperty(globalThis, "navigator", {
    value: dom.window.navigator,
    writable: true,
  });
}
globalThis.matchMedia =
  globalThis.matchMedia ||
  (() => ({ matches: false, addListener: () => {}, removeListener: () => {}, addEventListener: () => {}, removeEventListener: () => {} }));
globalThis.requestAnimationFrame = globalThis.requestAnimationFrame || ((cb) => setTimeout(cb, 0));
globalThis.cancelAnimationFrame = globalThis.cancelAnimationFrame || clearTimeout;
globalThis.ResizeObserver = globalThis.ResizeObserver || class { observe() {} unobserve() {} disconnect() {} };
globalThis.IntersectionObserver = globalThis.IntersectionObserver || class { observe() {} unobserve() {} disconnect() {} };

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, "../dist");
const serverDir = path.resolve(distDir, "server");

// ── 1. Import the SSR bundle ────────────────────────────────────────────────
const { render } = await import(path.resolve(serverDir, "entry-server.js"));

// ── 2. Read the client-built index.html as the HTML shell ───────────────────
const template = fs.readFileSync(path.resolve(distDir, "index.html"), "utf-8");

// ── 3. Every route that should become its own static HTML page ──────────────
const staticRoutes = [
  "/",
  "/systems-of-trust",
  "/method-capture",
  "/glossary",
  "/blog",
  "/strategy-sprint",
  "/trust-mechanism-modules",
  "/fractional-credential-operations",
  "/trust-architecture-review",
  "/trust-review-workbook",
  "/benchmark-audit",
  "/curriculum-assessment-design",
  "/brand-infrastructure",
  "/120-day-pilot",
  "/case-studies",
];

const blogSlugs = [
  "certification-vs-licensing",
  "how-to-build-a-certification-program",
  "certificate-vs-certification",
  "how-to-document-a-proprietary-methodology",
  "how-to-scale-a-consulting-firm",
  "what-is-a-standards-organization",
  "why-certification-programs-fail",
  "business-case-for-methodology-documentation",
  "how-to-design-a-certification-assessment",
  "how-to-write-competence-standards",
  "what-is-a-competence-framework",
  "how-to-price-a-certification-program",
  "what-is-accreditation",
  "how-to-protect-intellectual-property-consulting",
  "how-to-build-a-body-of-knowledge",
  "knowledge-transfer-why-it-fails",
  "how-to-run-a-certification-pilot",
  "certification-program-governance",
  "first-second-third-party-verification",
  "how-to-set-up-a-certification-body",
  "what-is-iso-17024",
  "how-to-turn-training-into-certification",
  "how-to-certify-practitioners-in-your-method",
  "certification-program-design-for-coaches",
  "what-makes-a-certification-credible",
  "how-to-write-a-certification-exam",
  "train-the-trainer-program-design",
  "what-is-a-professional-designation",
  "how-to-scale-a-certification-program",
  "how-to-license-your-framework-to-other-practitioners",
  "how-to-build-a-micro-credential-program",
  "how-to-add-ceus-to-your-certification-program",
  "how-to-issue-digital-badges-for-your-certification",
  "certification-maintenance-and-recertification",
  "how-to-choose-a-certification-exam-platform",
  "what-is-a-job-task-analysis",
  "how-to-get-employers-to-recognize-your-certification",
  "how-to-set-a-passing-score-for-your-certification-exam",
  "how-to-market-a-certification-program",
  "your-method-is-your-moat",
];

const caseStudySlugs = ["well-ap", "iwbi-digital-standard", "advance", "drvn"];

const trustDimensionSlugs = [
  "source",
  "transfer",
  "signal",
  "integrity",
  "risk",
];

const routes = [
  ...staticRoutes,
  ...blogSlugs.map((s) => `/blog/${s}`),
  ...caseStudySlugs.map((s) => `/case-studies/${s}`),
  ...trustDimensionSlugs.map((s) => `/systems-of-trust/${s}`),
];

// ── 4. Render each route and write the HTML ─────────────────────────────────
let rendered = 0;

for (const route of routes) {
  try {
    const { html, helmet } = render(route);

    let page = template.replace(
      '<div id="root"></div>',
      `<div id="root">${html}</div>`
    );

    // Replace default head tags with Helmet-generated page-specific ones
    if (helmet) {
      const helmetTitle = helmet.title?.toString();
      if (helmetTitle) {
        // Replace the default <title> with the page-specific one
        page = page.replace(/<title>[^<]*<\/title>/, helmetTitle);
      }

      const helmetMeta = helmet.meta?.toString();
      if (helmetMeta) {
        // Replace default description and OG/twitter meta tags
        page = page.replace(/<meta name="description"[^>]*>/, "");
        page = page.replace(/<meta property="og:title"[^>]*>/, "");
        page = page.replace(/<meta property="og:description"[^>]*>/, "");
        page = page.replace(/<meta property="og:url"[^>]*>/, "");
        page = page.replace(/<meta property="og:type"[^>]*>/, "");
        page = page.replace(/<meta name="twitter:title"[^>]*>/, "");
        page = page.replace(/<meta name="twitter:description"[^>]*>/, "");
        page = page.replace("</head>", `    ${helmetMeta}\n  </head>`);
      }

      const helmetLink = helmet.link?.toString();
      if (helmetLink) {
        // Replace default canonical
        page = page.replace(/<link rel="canonical"[^>]*>/, "");
        page = page.replace("</head>", `    ${helmetLink}\n  </head>`);
      }

      const helmetScript = helmet.script?.toString();
      if (helmetScript) {
        page = page.replace("</head>", `    ${helmetScript}\n  </head>`);
      }
    }

    // Determine output file path: "/" → dist/index.html, "/blog" → dist/blog/index.html
    const outPath =
      route === "/"
        ? path.resolve(distDir, "index.html")
        : path.resolve(distDir, route.slice(1), "index.html");

    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, page);
    rendered++;
  } catch (err) {
    console.error(`[prerender] FAILED ${route}:`, err.message);
  }
}

console.log(`[prerender] Rendered ${rendered}/${routes.length} pages into dist/`);

// ── 5. Clean up the server bundle (not needed at runtime) ───────────────────
fs.rmSync(serverDir, { recursive: true, force: true });
console.log("[prerender] Cleaned up server bundle.");

// Exit explicitly — jsdom keeps the event loop alive otherwise.
process.exit(0);
