

# Build Module D — 120-Day Pilot Certification Page

## Overview
Create a new page at `/120-day-pilot` for **Module D — 120-Day Pilot Certification**. This follows the same architectural pattern as the other Level 3 module pages (shared helpers, imports, light/dark alternation) but has 10 modules and unique structural differences: a 4-phase timeline, dual checklist grids (fit / not fit), a fixed pricing section, and a client commitment module.

## New File

### `src/pages/PilotCertification.tsx`

| Module | Section | Visual Treatment |
|--------|---------|-----------------|
| 1 | Hero | Light bg with grid lines, "120-Day Pilot Certification" headline, Level 3 - Module D marker, multiline subhead (Not a concept / Not a slide deck / A live pilot), two CTAs |
| 2 | Why a Pilot | Dark bg, split layout -- left: SVG showing "Big Launch" risk path vs "Pilot" validated path, right: editorial copy with two bullet lists (what launches create vs what pilot creates) |
| 3 | Who This Is For | Light bg, two-column grid -- left: "You're a strong fit if" with checkbox-style list (6 items), right: "This is not for you if" with checkbox list (6 items). Closing line below. |
| 4 | The 120-Day Structure | Light bg, 4-phase horizontal timeline with week markers (Phase 1: Weeks 1-3, Phase 2: Weeks 4-7, Phase 3: Weeks 8-10, Phase 4: Weeks 11-16). Each phase has title, subtitle, and bullet list. Closing statement below. |
| 5 | What Is Actually Built | Dark bg, 4-category spec-sheet grid (Core Strategy: 7 items, Brand & Market Presence: 4 items, Launch Infrastructure: 5 items, Governance & Operations: 4 items). Closing copy below. |
| 6 | Client Commitment | Dark bg (#111), centered strong typography, 5 key-value pairs (Time, Leadership, Decision Authority, Responsiveness, IP Ownership). Closing line. |
| 7 | Executive Outcomes | Light bg, checklist grid (6 items) + business impact block |
| 8 | Investment | Light bg, centered institutional tone. Fixed engagement starting at $20,000, 120 days. Two lists: Includes (6 items) and Not Included (4 items). Closing line. |
| 9 | Strategic Positioning | Dark bg, centered headline, editorial copy about pilot-to-stewardship path |
| 10 | Final CTA | Charcoal bg, strong centered type, single CTA |

All CTAs labeled "Request Pilot Advisory" trigger the `AssessmentModal`.

## Route Update

### `src/App.tsx`
- Add import: `import PilotCertification from "./pages/PilotCertification";`
- Add route: `<Route path="/120-day-pilot" element={<PilotCertification />} />`

## Technical Details

- **Module 2 SVG**: Two vertical paths side-by-side. Left path: "Big Launch" -> "High Exposure" -> "Unproven Systems" -> "Reputational Risk" (red-tinted). Right path: "Pilot" -> "Controlled Scope" -> "Measured Exposure" -> "Validated Signal" (green/gold-tinted). A "vs." label between paths. Same inline SVG approach as other module pages.
- **Module 3**: Two-column grid with bordered cells on light bg. Left column uses unchecked square icons for positive fit items, right column for negative fit items. Different accent colors to distinguish.
- **Module 4**: Four-column grid (`grid-cols-1 md:grid-cols-2 lg:grid-cols-4`) with week markers at top of each phase card. Each card has phase number, title, week range, description, and bullet list.
- **Module 5**: Four deliverable categories in a `grid-cols-1 md:grid-cols-2` grid with bordered cells. Each category has a title and bullet list of items.
- **Module 6**: Centered layout on dark bg with key-value pairs displayed as a definition list or structured grid.
- **Module 8**: Centered section with price callout, two side-by-side lists (Includes / Not Included) in a 2-column grid.
- Reuses all shared patterns: `SiteNav`, `FadeIn`, `SectionMarker`, `Divider`, `AssessmentModal`, `lightBg`, `lightMuted`, `lightBorder`, `btn-accent-gradient`.

