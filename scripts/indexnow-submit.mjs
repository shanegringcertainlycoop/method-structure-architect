/**
 * IndexNow URL Submission Script
 * Run after deploying new or updated content:
 *   node scripts/indexnow-submit.mjs
 *
 * Submits all blog post URLs + core pages to IndexNow via GET requests.
 * IndexNow distributes to Bing, Yandex, and other participating engines.
 */

const HOST = "method.certainly.coop";
const KEY = "de537b2c69054fce9e368994b13a3f90";

// Core pages
const STATIC_URLS = [
  `https://${HOST}/`,
  `https://${HOST}/blog`,
  `https://${HOST}/services/strategy-sprint`,
  `https://${HOST}/services/trust-architecture-review`,
  `https://${HOST}/services/trust-building-artifacts`,
  `https://${HOST}/services/fractional-credential-operations`,
  `https://${HOST}/services/method-capture`,
  `https://${HOST}/services/benchmark-audit`,
  `https://${HOST}/services/curriculum-assessment-design`,
  `https://${HOST}/services/brand-infrastructure`,
  `https://${HOST}/services/pilot-certification`,
  `https://${HOST}/glossary`,
];

// Blog post slugs — keep in sync with src/data/blogPosts.ts
const BLOG_SLUGS = [
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

const BLOG_URLS = BLOG_SLUGS.map((slug) => `https://${HOST}/blog/${slug}`);
const ALL_URLS = [...STATIC_URLS, ...BLOG_URLS];

// Small delay between requests to avoid rate limiting
const delay = (ms) => new Promise((r) => setTimeout(r, ms));

async function submit() {
  console.log(`Submitting ${ALL_URLS.length} URLs to IndexNow…\n`);

  let ok = 0;
  let failed = 0;

  for (const url of ALL_URLS) {
    const endpoint = `https://api.indexnow.org/indexnow?url=${encodeURIComponent(url)}&key=${KEY}`;
    const res = await fetch(endpoint);

    if (res.status === 200 || res.status === 202) {
      console.log(`  ✓ ${res.status}  ${url}`);
      ok++;
    } else {
      const text = await res.text().catch(() => "");
      console.error(`  ✗ ${res.status}  ${url}  ${text}`);
      failed++;
    }

    await delay(100); // 100ms between requests
  }

  console.log(`\n${ok} submitted, ${failed} failed.`);
  if (failed > 0) process.exit(1);
}

submit().catch((err) => {
  console.error("Submission failed:", err);
  process.exit(1);
});
