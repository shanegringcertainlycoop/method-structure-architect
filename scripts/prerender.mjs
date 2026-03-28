/**
 * Static-site prerender script.
 *
 * After `vite build` (client) and `vite build --ssr` (server), this script
 * imports the SSR bundle, renders every known route to HTML, and writes the
 * result into dist/ so each page is a standalone, crawler-friendly HTML file.
 *
 * Routes are derived from the data files (blogPosts, caseStudies,
 * trustDimensions) — no hardcoded slug lists to keep in sync.
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
  (() => ({
    matches: false,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
  }));
globalThis.requestAnimationFrame =
  globalThis.requestAnimationFrame || ((cb) => setTimeout(cb, 0));
globalThis.cancelAnimationFrame =
  globalThis.cancelAnimationFrame || clearTimeout;
globalThis.ResizeObserver =
  globalThis.ResizeObserver ||
  class {
    observe() {}
    unobserve() {}
    disconnect() {}
  };
globalThis.IntersectionObserver =
  globalThis.IntersectionObserver ||
  class {
    observe() {}
    unobserve() {}
    disconnect() {}
  };

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, "../dist");
const serverDir = path.resolve(distDir, "server");

// ── 1. Import the SSR bundle ────────────────────────────────────────────────
const { render, prerenderRoutes } = await import(
  path.resolve(serverDir, "entry-server.js")
);

// ── 2. Read the client-built index.html as the HTML shell ───────────────────
const template = fs.readFileSync(path.resolve(distDir, "index.html"), "utf-8");

// ── 3. Render each route and write the HTML ─────────────────────────────────
let rendered = 0;

for (const route of prerenderRoutes) {
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
        page = page.replace(/<title>[^<]*<\/title>/, helmetTitle);
      }

      const helmetMeta = helmet.meta?.toString();
      if (helmetMeta) {
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
        page = page.replace(/<link rel="canonical"[^>]*>/, "");
        page = page.replace("</head>", `    ${helmetLink}\n  </head>`);
      }

      const helmetScript = helmet.script?.toString();
      if (helmetScript) {
        page = page.replace("</head>", `    ${helmetScript}\n  </head>`);
      }
    }

    // "/" → dist/index.html, "/blog/foo" → dist/blog/foo/index.html
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

console.log(
  `[prerender] Rendered ${rendered}/${prerenderRoutes.length} pages into dist/`
);

// ── 4. Clean up the server bundle (not needed at runtime) ───────────────────
fs.rmSync(serverDir, { recursive: true, force: true });
console.log("[prerender] Cleaned up server bundle.");

// Exit explicitly — jsdom keeps the event loop alive otherwise.
process.exit(0);
