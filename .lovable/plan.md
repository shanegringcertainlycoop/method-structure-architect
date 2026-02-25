

# Update Bento Section with Five Truths

## Content
Replace the current 3 placeholder cards with 5 "Truth" cards containing the provided content.

## Layout
Redesign the grid to accommodate 5 cards in a visually interesting bento arrangement:

```text
Row 1:  [ Truth I  (7 cols) ] [ Truth II  (5 cols) ]
Row 2:  [ Truth III (4 cols)] [ Truth IV  (4 cols) ] [ Truth V (4 cols) ]
```

- Top row: asymmetric pair (matching current pattern)
- Bottom row: three equal-width cards

## Section Header
Update to match the tone:
- Numeral: VIII
- Headline: "Five Truths."
- Subline: remove or replace with something minimal like "The premises that govern this work."

## Card Design
Each card:
- Roman numeral label (small, accent color, tracked)
- Title (serif, declarative)
- Body text (muted, relaxed leading)
- Remove placeholder illustration blocks (content is text-only)
- Keep border, bg-card, padding, min-height styling

## File Changed
- `src/components/BentoSection.tsx` -- replace content and adjust grid

