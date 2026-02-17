
# Reduce Wordiness -- Add Visual Space, Interaction, and Progressive Reveals

## Problem
The page reads like a long essay. Every module dumps all its content at once with dense paragraphs and bullet lists. There is no breathing room, no imagery beyond the hero bust, and no interactivity beyond the Architecture collapsibles and FAQ accordion.

## Strategy
Cut body copy significantly. Replace explanation with visual weight, whitespace, and interaction. Keep the same module structure but make each one feel like a designed moment rather than a text block.

---

## Changes by Module

### Hero (no major changes)
Already clean. Keep as-is.

### Module I -- Structural Risk
- **Cut** the explanatory paragraph ("It adapts. It shifts..."). Replace with a single line: "It lacks structure."
- **Convert** the 6-item bullet list into a **staggered reveal grid** (3x2) where each risk item fades in sequentially on scroll, styled as minimal cards with just the label
- **Remove** the closing paragraph. Keep only the italic closing line.

### Module II -- What We Actually Do
- **Cut** the second paragraph entirely (the long "We extract..." sentence)
- Keep only: headline, one-line description, italic closing
- **Add a full-width image placeholder** (aspect-ratio 21:9 container with a subtle border) below the text for future imagery

### Module III -- Architecture Process
- Already interactive (collapsibles) -- good
- **Cut bullet lists from 5 items to 3** per phase for tighter reading
- **Add a horizontal step indicator** above the collapsibles showing I-II-III-IV as connected dots so the user sees the full journey at a glance

### Module IV -- What Emerges
- **Convert** the 7-item checklist into a **two-column grid** of compact items instead of a vertical list
- **Cut** the intro lines ("The result...is not a course. It is a defensible system.") to just the second sentence
- **Remove** the "You leave with:" lead-in -- let the grid speak for itself

### Module V -- Applications
- Keep as-is (already compact cards)

### Module VI -- Proof of Structure
- **Increase card height** to `min-h-[160px]` to create more visual presence
- **Add a subtle hover effect** (border-accent/30 transition) so they feel interactive
- These are placeholder spaces for future diagrams -- make them feel intentional

### Module VII -- Engagement
- **Cut** the "You receive:" / "Scope includes:" labels and bullet lists
- Replace with a **hover-to-reveal** pattern: card shows title + one-line description by default, bullet details appear on hover/click
- This halves the visible text while keeping all info accessible

### Module VIII -- FAQ
- Already interactive (accordion) -- keep as-is

### Module IX -- Closing
- Keep as-is (already minimal)

---

## New Component: StaggerGrid
A reusable component for the Structural Risk items that reveals children one-by-one as the section scrolls into view, using the existing FadeIn with incremental delays.

## New Component: RevealCard
A card that shows a title by default and reveals bullet content on hover (desktop) or tap (mobile). Used in the Engagement section.

---

## Files to Modify
1. **src/pages/Index.tsx** -- All module copy cuts, new grid layouts, hover reveals
2. **src/components/RevealCard.tsx** -- New component for hover-to-reveal engagement cards
3. No new dependencies needed -- uses existing Tailwind transitions and FadeIn

## Technical Notes
- StaggerGrid is just a wrapper using FadeIn with mapped delays (no new component needed, just restructured JSX)
- RevealCard uses a simple `group` + `group-hover:opacity-100` Tailwind pattern for desktop, with a click-to-toggle state for mobile
- Proof of Structure cards get `hover:border-accent/30 transition-colors` added
- Architecture bullet lists trimmed from 5 to 3 items each
- Image placeholder in "What We Do" uses AspectRatio component (already installed) with a dashed border
