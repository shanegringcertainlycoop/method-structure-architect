

# Enhanced Visual Design -- Adding Depth and Tonal Layers

## What Changes

Drawing from the Logo Archive reference, the current design lacks visual weight and tonal variety. The reference uses distinct module backgrounds, accent-colored CTAs (yellow/gold), card-like content blocks with visible borders, and a much stronger sense of visual hierarchy through background tonal shifts.

## Design Enhancements

### 1. Richer Color Tokens (src/index.css)
- Add a new `--surface` tone at ~9% lightness (#171717) for an intermediate layer between background and card
- Bump `--card` slightly to ~10% (#1A1A1A) for more visible contrast against background
- Add a `--highlight` warm yellow-gold (`48 90% 55%`) inspired by the reference's yellow CTA buttons -- used sparingly for primary CTAs
- Increase `--border` to ~15% for more visible module edges

### 2. Stronger Module Structure (src/pages/Index.tsx)
- Wrap each section in visible bordered containers with padding and rounded corners, creating distinct "cards" rather than just background color swaps
- Architecture (Capture/Organize/Package) columns get individual card treatments with border and subtle background
- Proof/case study items get card-style containers instead of just bottom borders
- Engagement section cards get bordered containers with hover states

### 3. Hero Section Polish
- Add a subtle top navigation bar with the CERTAINLY wordmark left-aligned
- Increase bust image opacity slightly (from 0.2 to 0.3) for more presence
- Primary CTA button uses the new highlight/gold color for visual pop

### 4. Section Spacing and Rhythm
- Larger vertical padding on sections (py-32 instead of py-24)
- Section headers get a top rule/line for stronger separation
- Closing section gets a large, ghosted typographic element for drama

### 5. FAQ and Accordion Styling
- Give accordion items a subtle card background on hover
- Add left accent border on expanded items

## Files to Modify

1. **src/index.css** -- Add new CSS custom properties (surface, highlight), adjust card/border values
2. **src/pages/Index.tsx** -- Rework all section components with card containers, bordered modules, accent CTAs, nav bar, and improved spacing
3. **tailwind.config.ts** -- Register the new `surface` and `highlight` color tokens

## Technical Details

### New CSS Variables
```
--surface: 0 0% 9%;           /* #171717 - intermediate layer */
--card: 0 0% 10%;             /* #1A1A1A - more visible cards */
--border: 0 0% 15%;           /* #262626 - visible module edges */
--highlight: 48 90% 55%;      /* Gold/yellow for CTAs */
--highlight-foreground: 0 0% 4%;
```

### Tailwind Config Additions
```
surface: "hsl(var(--surface))",
highlight: {
  DEFAULT: "hsl(var(--highlight))",
  foreground: "hsl(var(--highlight-foreground))",
}
```

### Module Card Pattern (used across sections)
Each content module wrapped in:
```
<div className="border border-border rounded-sm bg-card p-8 md:p-12">
```

### Architecture Columns
Each step gets its own card:
```
<div className="border border-border rounded-sm bg-surface p-6 hover:border-accent/40 transition-colors">
```

### Primary CTA Update
```
<Button className="bg-highlight text-highlight-foreground hover:bg-highlight/90 rounded-sm px-8 py-3">
```

### Nav Bar Addition
Simple sticky bar at top:
```
<nav className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center border-b border-border bg-background/80 backdrop-blur-sm">
  <span className="font-serif text-accent tracking-[0.3em] text-sm">CERTAINLY</span>
</nav>
```

