

# Level 3 — Trust Mechanism Modules Page

## Overview
Create `src/pages/TrustMechanismModules.tsx` following the exact template of MethodCapture and StrategySprint pages (same shared helpers, Nav, FadeIn, AssessmentModal, Button imports). Add route and update the Programs dropdown.

## File Changes

### 1. Create `src/pages/TrustMechanismModules.tsx`
9 modules mirroring the existing page structure:

| Module | Section | Background | Key Elements |
|--------|---------|-----------|-------------|
| 1 Hero | Off-white with grid | "Level 3" marker, "Trust Mechanism Modules" headline, compressed subhead, two CTAs |
| 2 From Decision to Installation | Dark (bg-surface noise-overlay) | Split layout: left SVG vertical flow (Method > Defined Standards > Assessment Logic > Verification Infrastructure > Market Signal), right editorial copy |
| 3 Modular Architecture Overview | Dark #111111 | Four equal columns (Module A-D) as blueprint blocks with details, timelines, investment info. Collapses to single column on mobile |
| 4 Decision Path Matrix | Off-white | Clean bordered grid table mapping situations to recommended modules |
| 5 What Makes This Different | Dark bg-surface | Centered headline "Most credentials fail after launch", lists of failure reasons and what Trust Mechanism Modules build |
| 6 Qualification Filter | Off-white | Two-column checklist with filled/empty square indicators (same pattern as other pages) |
| 7 Position in the System | Dark bg-surface | Horizontal level bar highlighting Level 3 with structural role descriptions |
| 8 Investment Positioning | Dark | Centered institutional copy about engagement scope and pricing |
| 9 Final CTA | Dark #111111 | "Build what can endure." headline, two CTAs, footer |

Nav button: "Discuss Your Build Path"
Primary CTAs open AssessmentModal.
Secondary CTAs: Hero links to `/levels`, Final CTA links to Level 4 (placeholder `/levels` for now).

### 2. Modify `src/App.tsx`
Add route: `<Route path="/trust-mechanism-modules" element={<TrustMechanismModules />} />`

### 3. Update `src/components/ProgramsDropdown.tsx`
Add Level 3 item: `{ label: "Level 3 — Trust Mechanism Modules", to: "/trust-mechanism-modules" }`

