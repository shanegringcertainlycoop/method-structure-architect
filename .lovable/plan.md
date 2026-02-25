

# Level 1 -- Method Capture Product Page

## Overview
Create a new product page at `/method-capture` with 9 modules matching the provided content spec. The page follows the existing editorial design system (dark background, serif headings, gold accent, FadeIn animations) with module-specific overrides for light and dark sections.

## Route
- Path: `/method-capture`
- Add route in `src/App.tsx`

## File Structure
- **`src/pages/MethodCapture.tsx`** -- single page component containing all 9 modules (same pattern as `SystemsOfTrust.tsx`)

## Module Breakdown

### Module 1 -- Hero
- Custom warm off-white background (`#F5F4F1`) with dark text (inverted from site default)
- Subtle blueprint grid at 3% opacity (CSS background pattern)
- Headline: "Level 1 -- Method Capture"
- Multi-paragraph subhead
- Two CTAs: "Book a Clarity Call" (accent gradient) and "Compare All Levels" (outline, links to future page)
- 1px divider beneath headline block

### Module 2 -- The Drift Problem (Split Panel)
- Two-column layout with vertical divider
- Left: SVG/CSS line diagram showing Founder -> Instructor A -> Instructor B -> Client Outcomes flow with "Trust variance increases" label
- Right: Editorial copy about the transfer problem
- Returns to dark background

### Module 3 -- What We Actually Capture (Dark Section)
- Matte charcoal background (`#111111`)
- Centered stacked layer diagram (5 layers: Framework, Decision Logic, Canonical Language, Boundary Conditions, Competence Signals)
- Bulleted list of what Method Capture extracts

### Module 4 -- Deliverables Grid
- Light background section (same warm off-white as hero)
- Two-column bordered grid, 5 deliverable categories
- Clean institutional formatting, no icons
- Each category has a bold title and bullet list

### Module 5 -- Strategic Framing (Minimal Pillars)
- Dark background
- Three columns separated by vertical lines: Origin, Transfer, Signal
- Framing copy about trust stabilization

### Module 6 -- Two Paths (Split Cards)
- Two symmetrical bordered cards side by side
- Service card: slightly darker background, detailed spec
- Course card: waitlist CTA
- No rounded corners

### Module 7 -- Qualification Filter
- Two-column checklist layout
- "This is for you if" and "This is not for you if" columns
- Square checkboxes (decorative, not interactive)
- Link to Level 2

### Module 8 -- Position in the System
- Horizontal level bar (Level 0 through Level 4)
- Level 1 highlighted with accent color
- Supporting copy about foundation

### Module 9 -- Final CTA (Dark Close)
- Full charcoal background
- Centered white text with strong negative space
- Primary CTA: "Book a 15-Minute Clarity Call"
- Secondary CTA: "Explore Level 2"

## Shared Components
- Reuses: `FadeIn`, `Button`, `AssessmentModal`, Nav pattern, `certainlyLogo`
- Nav and footer reused from existing page patterns
- Divider and SectionMarker helpers defined locally (same as SystemsOfTrust)

## Styling Approach
- Light sections use inline style overrides for background (`#F5F4F1`) and dark text colors, since the site CSS variables are dark-mode
- Dark sections use the default theme variables
- Blueprint grid pattern via CSS `background-image` with `repeating-linear-gradient`

## Technical Details

### Files to Create
- `src/pages/MethodCapture.tsx`

### Files to Modify
- `src/App.tsx` -- add route `<Route path="/method-capture" element={<MethodCapture />} />`

### Navigation
- The "Compare All Levels" CTA will use `react-router-dom` Link (placeholder route for now)
- "Explore Level 2" CTA will also be a placeholder link
- "Book a Clarity Call" opens the existing `AssessmentModal`

