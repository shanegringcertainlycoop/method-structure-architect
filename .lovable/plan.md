
# Brand Language Revision -- Institutional Redesign

## Overview

Applying the full brand document to reshape the site from a "premium consulting" feel into something that reads like a structural charter. The changes touch color tokens, typography weight, copy, layout structure, and imagery treatment.

## 1. Color System Update

Current palette is close but needs adjustment per the brand spec:

| Token | Current | New | Hex |
|-------|---------|-----|-----|
| background | 0 0% 4% | 0 0% 4% | #0B0B0B (keep) |
| surface | 0 0% 9% | 0 0% 8% | #141414 (Carbon) |
| card | 0 0% 10% | 0 0% 11% | #1C1C1C (Charcoal) |
| foreground | 0 0% 91% | 40 6% 96% | #F4F4F4 (Warm White) |
| muted-foreground | 0 0% 42% | 30 2% 66% | #A8A8A8 (Stone Grey) |
| accent | 27 34% 36% | 43 47% 54% | #C8A54B (Muted Marble Gold) |
| highlight | 48 90% 55% | 43 47% 54% | #C8A54B (same as accent -- unify gold) |

Rules enforced: no gradients, no glows, no heavy shadows, matte finish only.

## 2. Copy Rewrite (Index.tsx)

Every piece of copy revised to match the declarative, minimal, structural tone. Short sentences. No fluff. No rhetorical drama.

**Hero:**
- Tagline: "Authority must be structured to endure."
- Sub: "Certainly is an architectural firm for intellectual property. We formalize expertise into institutional systems."
- CTA: "Request an Assessment" / "View the Architecture"

**Section I -- The Structural Risk:**
- Reframed from "Transfer Problem" to "Structural Risk"
- Bullets become: "Founder dependence. Informal process. Inconsistent delivery. Undefined standards."
- Quote: "If your results depend on you, your authority is fragile."
- Accordion: "Symptoms of Structural Risk" listing IP dilution, revenue fragility, inability to transfer

**Section II -- The Architecture:**
- Steps relabeled: Capture / Organize / Package (kept)
- Copy tightened: "Extract the logic." / "Define the standards." / "Express the system."
- Expanded copy rewritten to be declarative, not descriptive

**Section III -- The Artifact:**
- Retitled from "The Output Is an Asset" to "The Artifact"
- List items: Codified principles, Defined constructs, Structured curriculum, Credential pathways, Governance framework, Licensing model
- Tagline: "Not documentation. Architecture."

**Section IV -- Engagement:**
- Two cards: "Assessment" and "Architecture"
- Assessment: "A structured review of method maturity and transferability."
- Architecture: "A focused engagement to design the transferable system."
- Footer note: "Scope is determined after assessment."

**Section V -- Application:**
- Retitled from "Selected Applications" to "Selected Applications" (kept, matches section model)
- Case study copy tightened to structural language

**FAQ:**
- Copy adjusted for declarative tone (remove any soft/warm phrasing)

**Closing:**
- Quote: "What is not structured cannot endure."
- Single CTA button

## 3. Section Structure

Following the brand section model: Thesis, Structural Risk, Architecture, Artifact, Application, Engagement. The current page already follows this roughly -- reorder slightly so Engagement comes after Application.

## 4. Imagery Treatment

- Roman bust stays at 20% opacity, cropped, side-positioned (already implemented)
- Ensure grayscale + luminosity blend mode (already done)
- No dramatic lighting, no gold-plated effects

## 5. Layout Refinements

- Remove the large ghosted "C." typographic element in closing (too decorative)
- Ensure consistent grid alignment across all sections
- Whitespace is intentional, not empty -- tighten where sections feel loose
- Module cards: matte borders, no shadow, no hover glow effects. Hover changes border opacity only.

## 6. Modal Update

- Submit button uses muted gold accent instead of default primary
- Copy stays institutional: "Request an Assessment" title, "A structured review of method maturity and transferability." description

## Files to Modify

1. **src/index.css** -- Update CSS variables to match revised color system
2. **src/pages/Index.tsx** -- Full copy rewrite, section reordering, layout refinements
3. **tailwind.config.ts** -- Unify highlight/accent colors

## Technical Notes

- CSS variable changes in `src/index.css`: update `--foreground`, `--surface`, `--card`, `--muted-foreground`, `--accent`, `--highlight` to new HSL values
- In `tailwind.config.ts`: point `highlight.DEFAULT` to `hsl(var(--accent))` to unify the gold
- In `src/pages/Index.tsx`: rewrite all string literals, remove the ghosted "C." element, reorder Engagement after Proof, update hover classes from `hover:border-accent/40` to `hover:border-accent/30` for subtlety
- Modal submit button class updated to use `bg-accent text-background`
