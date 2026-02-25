

# Level 4 — Fractional Credential Operations Page

## Overview
Create `src/pages/FractionalCredentialOperations.tsx` following the exact template established by TrustMechanismModules and StrategySprint. Add route and update the Programs dropdown.

## File Changes

### 1. Create `src/pages/FractionalCredentialOperations.tsx`
9 modules matching existing page patterns (same imports, Nav, FadeIn, AssessmentModal, SectionMarker, Divider, lightBg/lightMuted/lightBorder helpers):

| Module | Background | Key Elements |
|--------|-----------|-------------|
| 1 Hero | Off-white grid | "Level 4" marker, "Fractional Credential Operations" headline, subhead about stewardship not side project, two CTAs |
| 2 Quiet Failure Pattern | Dark bg-surface noise-overlay | Split: left SVG timeline (Launch > 6 Months > 12 Months > Drift with sub-items), right editorial copy about quiet degradation |
| 3 What Fractional Ops Means | Dark #111111 | Centered layout with list of 8 operational areas, "You retain strategic authority / We steward operational integrity" |
| 4 Three Engagement Levels | Off-white lightBg | Three vertical cards (Steward $4k, Builder $6.5k, Architect $10k+) with focus items and "best for" lines |
| 5 What Changes Over Time | Dark bg-surface | Horizontal 3-stage timeline (60 Days, 90 Days, 12 Months) with bullet items under each |
| 6 Who This Is For | Off-white lightBg | Two-column checklist (filled/empty squares) matching existing pattern |
| 7 Position in the System | Dark bg-surface | Horizontal level bar highlighting Level 4, structural role descriptions |
| 8 Investment Framing | Dark | Centered copy about what fractional ops replaces, starting at $4k/month |
| 9 Final CTA | Dark #111111 | "Durable systems require stewardship." headline, single primary CTA, footer |

- Nav CTA button: "Schedule an Operations Conversation"
- Primary CTAs open AssessmentModal
- Secondary CTA in hero: "Compare All Levels" linking to `/levels`

### 2. Modify `src/App.tsx`
Add route: `<Route path="/fractional-credential-operations" element={<FractionalCredentialOperations />} />`

### 3. Update `src/components/ProgramsDropdown.tsx`
Add Level 4 item: `{ label: "Level 4 — Fractional Credential Operations™", to: "/fractional-credential-operations" }`

### 4. Update Level 3 Final CTA
In `src/pages/TrustMechanismModules.tsx`, change the "Explore Level 4" secondary CTA link from `/levels` to `/fractional-credential-operations`.

