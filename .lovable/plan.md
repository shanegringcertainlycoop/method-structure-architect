

# Build Module B — Curriculum & Assessment Design Page

## Overview
Create a new page at `/curriculum-assessment-design` for **Module B — Curriculum & Assessment Design**. This follows the exact same architectural pattern as `BenchmarkAudit.tsx` -- same shared helpers (Divider, SectionMarker, lightBg, lightMuted, lightBorder), same imports, same light/dark alternation -- but with 11 modules instead of 10.

## New File

### `src/pages/CurriculumAssessmentDesign.tsx`

| Module | Section | Visual Treatment |
|--------|---------|-----------------|
| 1 | Hero | Light bg with grid lines, "Curriculum & Assessment Design" headline, Level 3 - Module B marker, two CTAs |
| 2 | The Core Problem | Dark bg, split layout -- left: SVG comparing Completion vs Competence with a "does not equal" symbol, right: risk bullets and editorial copy |
| 3 | Why This Matters for Trust | Dark bg (#111), centered strong typography, minimal layout |
| 4 | What This Module Addresses | Light bg, 2-column grid with bordered cells for 7 areas (Competence Framework, Qualification Criteria, Assessment Architecture, Rubrics, Pass/Fail Logic, Curriculum Alignment, Instructor Calibration) |
| 5 | Deliverables | Light bg, spec-sheet 2-column bordered grid, 7 deliverable items |
| 6 | How This Works | Dark bg, 3-phase timeline (4-8 weeks), role breakdown below |
| 7 | What Makes This Different | Dark bg, centered text, check-mark list |
| 8 | Executive Outcomes | Light bg, checklist grid + business impact |
| 9 | Common Combinations | Light bg, styled table with 4 rows mapping situations to recommended paths |
| 10 | Investment Positioning | Dark bg, centered institutional copy with scope factors |
| 11 | Final CTA | Charcoal bg, strong centered type, single CTA |

All CTAs labeled "Request Assessment Design Advisory" trigger the `AssessmentModal`.

## Route Update

### `src/App.tsx`
Add import and route: `<Route path="/curriculum-assessment-design" element={<CurriculumAssessmentDesign />} />`

## Technical Details

- **Module 2 SVG**: Two side-by-side boxes labeled "Completion" and "Competence" with check items inside each, separated by a large "does not equal" symbol. Uses same inline SVG approach as BenchmarkAudit's risk-stack.
- **Module 4**: Seven content blocks in `grid-cols-1 md:grid-cols-2` with bordered cells. The 7th item spans full width on desktop.
- **Module 6**: Three-column timeline grid (Define Competence / Design Assessment / Enforcement & Transfer) instead of two weeks.
- **Module 9**: HTML table with `Table` components showing Situation and Recommended Path columns, 4 rows.
- Reuses all shared patterns: `SiteNav`, `FadeIn`, `SectionMarker`, `Divider`, `AssessmentModal`, `lightBg`, `lightMuted`, `lightBorder`, `btn-accent-gradient`.

