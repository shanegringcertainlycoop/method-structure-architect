

# Glossary Page

## Overview
Create a new `/glossary` page presenting certification and trust terminology as a structured reference document. The page groups terms into four categories matching the provided content. It follows the same institutional design system (Playfair Display headings, Inter body, black/white/gold palette, thin rules, FadeIn animations). Terms will have stable anchor IDs so they can be referenced from other pages later.

## New File
- `src/pages/Glossary.tsx` -- full glossary page with all terms

## Files to Modify
- `src/App.tsx` -- add route `/glossary`
- `src/pages/Index.tsx` -- add "Glossary" nav link
- `src/pages/SystemsOfTrust.tsx` -- add "Glossary" nav link (matching Index nav)

---

## Page Structure

### Nav
Reuse the same nav pattern from SystemsOfTrust / Index, adding a "Glossary" link alongside the existing "Framework" link. Both pages' navs will be updated to include this link.

### Hero
- Eyebrow: "Reference"
- Headline: "Glossary" (serif, large, centered)
- One-line description: "Definitions for the language of certification, credentialing, and trust architecture."
- Restrained. No CTA.

### Category Sections (4 groups)
Each category gets a section marker numeral, a category heading, and its terms listed sequentially.

**I. Core Concepts**
- System of Trust
- Certification
- Certificate
- Credential
- Standards

**II. Operational Components**
- Assessment / Evaluation
- Governance
- Issuance
- Renewal
- Continuing Education (CE)
- Revocation

**III. Certification Models**
- First-Party Certification
- Second-Party Certification
- Third-Party Certification
- Pilot Certification

**IV. Ecosystem and Strategy**
- Certification Ecosystem
- Stewardship
- Certification Readiness

### Term Layout
Each term rendered as:
- **Term title** (serif, anchor ID derived from slug, e.g. `id="certification"`)
- **Definition line** (bold/declarative first sentence)
- **Body paragraphs** (remaining explanation)
- **Bullet lists** where present in the content (accent dot pattern)
- **Examples** where provided (muted text, indented)
- Thin border-bottom divider between terms

### Close
- Single line: "Language shapes structure. Structure shapes trust."
- CTA: "Request a Method Audit" (opens AssessmentModal)
- Footer matching other pages

---

## Technical Details

### Routing
```text
App.tsx: <Route path="/glossary" element={<Glossary />} />
```

### Anchor IDs
Each term gets an `id` attribute (e.g., `id="system-of-trust"`, `id="certification"`, `id="credential"`) so other pages can link to `/glossary#certification`.

### Navigation Updates
Both Index.tsx and SystemsOfTrust.tsx nav components get a second link:
```text
Framework | Glossary
```

### Styling
- Same CSS variables, no new colors or fonts
- `bg-surface` alternation between category sections
- Thin `Divider` rules between categories
- FadeIn animations on each term block

### Responsive
- Single column layout throughout
- Comfortable reading width (max-w-3xl for term content)

