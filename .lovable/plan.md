

# Build Module C — Brand Infrastructure Page

## Overview
Create a new page at `/brand-infrastructure` for **Module C — Brand Infrastructure™**. This follows the identical architectural pattern as `BenchmarkAudit.tsx` and `CurriculumAssessmentDesign.tsx` -- same shared helpers, imports, light/dark alternation -- with 11 modules and content focused on signaling, verification, and market legibility.

## New File

### `src/pages/BrandInfrastructure.tsx`

| Module | Section | Visual Treatment |
|--------|---------|-----------------|
| 1 | Hero | Light bg with grid lines, "Brand Infrastructure" headline, Level 3 - Module C marker, two CTAs |
| 2 | The Signal Failure Problem | Dark bg, split layout -- left: SVG showing strong standards funneling into market confusion, right: editorial copy with breakdown bullets |
| 3 | What This Module Addresses | Dark bg (#111), structured grid showing three failure types (Legibility, Authority, Verification) |
| 4 | What's Included | Light bg, 2-column grid with bordered cells for 6 areas (Naming & Positioning, Public Narrative, Visual Identity, Credential Holder Policies, Digital Ecosystem, Sales & Partnership) |
| 5 | Deliverables | Light bg, spec-sheet 2-column bordered grid, 6 deliverable items |
| 6 | How This Works | Dark bg, 3-phase timeline (6-10 weeks), role breakdown below |
| 7 | What Makes This Different | Dark bg, centered text, check-mark list |
| 8 | Executive Outcomes | Light bg, checklist grid + business impact |
| 9 | Common Combinations | Light bg, styled table with 4 rows mapping situations to recommended paths |
| 10 | Investment Positioning | Dark bg, centered institutional copy with scope factors |
| 11 | Final CTA | Charcoal bg, strong centered type, single CTA |

All CTAs labeled "Request Brand Infrastructure Advisory" trigger the `AssessmentModal`.

## Route Update

### `src/App.tsx`
- Add import: `import BrandInfrastructure from "./pages/BrandInfrastructure";`
- Add route: `<Route path="/brand-infrastructure" element={<BrandInfrastructure />} />`

## Technical Details

- **Module 2 SVG**: An inline SVG showing three stacked boxes ("Strong Standards", "Rigorous Assessment", "Real Competence") with a downward arrow leading to "Market Confusion" and the quote "Just another certificate." -- same inline SVG approach as BenchmarkAudit's risk-stack.
- **Module 3**: Three failure-type blocks (Legibility, Authority, Verification) displayed in a `grid-cols-1 md:grid-cols-3` layout with thin vertical dividers on dark background.
- **Module 4**: Six content blocks in `grid-cols-1 md:grid-cols-2` with bordered cells. Each block has a title, description, and bullet list of 4-6 items.
- **Module 6**: Three-phase timeline (Positioning & Naming / Identity & Verification Design / Sales & Partner Enablement) in a 3-column grid with role breakdown below.
- **Module 9**: HTML table using `Table` components with Situation and Recommended Path columns, 4 rows.
- Reuses all shared patterns: `SiteNav`, `FadeIn`, `SectionMarker`, `Divider`, `AssessmentModal`, `lightBg`, `lightMuted`, `lightBorder`, `btn-accent-gradient`.

