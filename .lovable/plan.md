
# New Page: SYSTEMS OF TRUST

## Overview
Create a dedicated `/systems-of-trust` page that presents the Systems of Trust framework as an institutional position paper. The page follows 9 modules as specified, reusing the existing design system (Playfair Display headings, Inter body, black/white palette, gold accent, thin rules, FadeIn animations).

## Architecture

**New files to create:**
- `src/pages/SystemsOfTrust.tsx` -- the full page with all 9 modules

**Files to modify:**
- `src/App.tsx` -- add route `/systems-of-trust`
- `src/pages/Index.tsx` -- update Nav to include a link to the new page; extract Nav into a shared component or keep inline with a link added

---

## Module Breakdown

### Module 1 -- Hero
- Eyebrow: "Systems of Trust" (trademark symbol)
- Headline: "A Framework for Designing Durable Authority" (serif, large)
- 4-line opening block (hiring manager / client / regulator / board reliance statements)
- Thesis line: "Trust in professional contexts follows structure."
- Clean, centered layout. No CTA. No selling.

### Module 2 -- Core Definition
- Two-column layout (stacks on mobile)
- Left: declarative definition block ("A System of Trust is the architecture that makes credibility transferable, legible, defensible, and sustainable under scale.")
- Right: bullet list with accent-colored dots (Where authority is grounded, How credibility moves, How competence becomes visible, What preserves standards, Where vulnerability concentrates)

### Module 3 -- The Five Dimensions (Primary Framework)
- Horizontal row of 5 pillars (matching the engagement cards pattern from Index)
- Each pillar: single-word title, subtitle, 3-4 lines of explanation
- Source | Transfer | Signal | Integrity | Risk
- Horizontal scroll on mobile with "Scroll" indicator (reusing existing pattern)
- Click-to-expand optional detail text per pillar

### Module 4 -- System Interaction (Diagram)
- SVG pentagon/ring diagram showing 5 nodes connected
- Short explanatory text: "These dimensions operate interdependently."
- Narrative chain: Source shapes Transfer, Transfer determines Signal, Signal influences Integrity, Integrity affects Risk
- Built with inline SVG for full brand control

### Module 5 -- Why It Matters (Consequences)
- 5-row grid, each row showing: "When [Dimension] is weak" followed by the consequence
- Uses the accent em-dash pattern from TransformationSection
- Adds tension without rhetorical tricks

### Module 6 -- Application Contexts
- Numbered editorial list (matching WhoThisIsFor pattern with serif-numbered prefixes)
- 5 contexts: Practitioner Methodologies, Professional Credentials, Organizational Brands, Standards Bodies, Expert-Led Businesses
- 2-3 line description each

### Module 7 -- Translation Into Our Work
- Headline: "Applying Systems of Trust"
- Short framing paragraph
- Structured list tying offers to pillars with parenthetical dimension references
- Uses accent bullet pattern

### Module 8 -- Pathways / Entry Points
- Minimal navigation list with arrow indicators
- 5 entry points linking to assessment modal or scroll targets
- Restrained -- navigation, not persuasion

### Module 9 -- Close
- Single calm statement: "Trust compounds when its structure is deliberate."
- Primary CTA button (Request a Method Audit -- opens AssessmentModal)
- Footer with logo and tagline (matching Index closing)

---

## Technical Details

### Routing
```text
App.tsx: Add <Route path="/systems-of-trust" element={<SystemsOfTrust />} />
```

### Navigation
- Add a text link in the existing Nav bar (on both pages) pointing to `/systems-of-trust`
- Nav becomes a shared component or is duplicated with minor additions
- The new page reuses the same Nav with the same "Request a Method Audit" CTA

### Shared Components
- `FadeIn` -- reused for all module animations
- `Button` -- reused for CTAs
- `AssessmentModal` -- reused for the closing CTA
- `Divider` and `SectionMarker` -- extracted or duplicated from Index

### SVG Diagram (Module 4)
- Custom inline SVG pentagon with 5 labeled nodes
- Gold accent stroke for connections, muted foreground for node borders
- Responsive sizing with viewBox

### Responsive Behavior
- Module 3 pillars: horizontal scroll on mobile (same as engagement phases)
- Module 2: two-column on desktop, stacked on mobile
- Module 5: single column on all viewports
- Module 6: two-column grid on desktop

### Styling
- All existing CSS variables, no new colors or fonts
- `bg-surface` alternation between modules (matching Index pattern)
- Thin `Divider` rules between sections
- `noise-overlay` on select surface sections
