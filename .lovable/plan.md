

# Build Module A — Benchmark Audit Page

## Overview
Create a dedicated deep-dive page for **Module A — Benchmark Audit** at `/benchmark-audit`. This page follows the same structural conventions as other Level pages (shared nav, FadeIn, SectionMarker, Divider, light/dark alternating sections, AssessmentModal) but with a distinct analytical feel per the content brief — slightly compressed spacing, spec-sheet styling, and a diagnostic tone.

## New File

### `src/pages/BenchmarkAudit.tsx`
A 10-module page mirroring the architecture of `MethodCapture.tsx` and `TrustMechanismModules.tsx`:

| Module | Section | Visual Treatment |
|--------|---------|-----------------|
| 1 | Hero | Light bg with faint grid lines, "Benchmark Audit" headline, subhead, two CTAs |
| 2 | The Cost of Skipping Diagnosis | Dark bg, split layout — left: SVG risk-stack diagram (downward arrows), right: editorial copy with bullet lists |
| 3 | What We Examine | Dark bg (#111), five vertical columns with thin dividers, each listing 4 diagnostic questions |
| 4 | Deliverables | Light bg, two-column bordered grid (spec-sheet style), five deliverable items |
| 5 | How It Works | Dark bg, horizontal two-week timeline, role/commitment breakdown |
| 6 | Common Paths After Audit | Light bg, four path cards in a grid, neutral tone |
| 7 | What Makes This Different | Dark bg, centered text, structured check-mark list |
| 8 | Executive Outcomes | Light bg, checklist grid + business impact list |
| 9 | Investment and Credit Policy | Dark bg, centered institutional copy |
| 10 | Final CTA | Full charcoal bg, strong centered type, single CTA button |

Design system elements reused: `SiteNav`, `FadeIn`, `SectionMarker`, `AssessmentModal`, `btn-accent-gradient`, light/dark section alternation (`lightBg`, dark `#111`), gold accent color for markers and indicators.

## Route and Navigation Updates

### `src/App.tsx`
Add route: `<Route path="/benchmark-audit" element={<BenchmarkAudit />} />`

### `src/components/ProgramsDropdown.tsx`
No changes needed — the existing "Level 3 — Trust Mechanism Modules" entry already covers the parent level. The Benchmark Audit page will be linked from within the Level 3 page and from CTAs, not as a separate dropdown entry.

## Technical Notes

- The risk-stack diagram in Module 2 will be an inline SVG with five labeled boxes connected by downward arrows, similar to the architectural diagrams in `MethodCapture.tsx` and `TrustMechanismModules.tsx`.
- The five-column layout in Module 3 will use a responsive grid (`grid-cols-1 md:grid-cols-5`) with thin vertical dividers on desktop.
- The timeline in Module 5 will use a horizontal layout with two week markers and connector lines.
- The four path cards in Module 6 will follow the same card pattern used in Module 3 of `TrustMechanismModules.tsx`.
- All CTAs labeled "Request Benchmark Audit" will trigger the `AssessmentModal`.
- Check marks in Modules 7 and 8 will use the accent gold color for consistency.

