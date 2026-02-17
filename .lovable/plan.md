
# Dark Monotone Redesign

## Direction
Shift the entire site from the current warm ivory/light palette to a dark, near-black monotone aesthetic inspired by the Logo Archive reference. The Roman bust image will be incorporated as a dramatic visual element in the hero section, adding artistic gravitas.

## Visual Changes

### Color Palette (Dark Mode)
- **Background**: Near-black (#0A0A0A)
- **Foreground/Text**: Off-white (#E8E8E8)
- **Muted text**: Medium gray (#6B6B6B)
- **Accent**: Retain Oxidized Bronze (#7A5C3E) for subtle warmth on markers and links
- **Borders**: Dark gray (#1A1A1A to #2A2A2A)
- **Cards/Sections**: Slightly lighter dark (#111111) for contrast panels

### Hero Section
- Full-viewport dark background
- The Roman bust image placed prominently (large, partially cropped, artistic placement -- offset to the right or as a background element with overlay)
- "CERTAINLY" wordmark and headline in off-white over the dark field
- Buttons: primary with off-white text on dark, outline with subtle border

### Section Layout
- Alternating between pure dark (#0A0A0A) and slightly elevated dark (#111111) panels for visual rhythm
- Thin hairline dividers in dark gray (#1A1A1A)
- Roman numeral markers in bronze accent

### Typography
- No font changes (Playfair Display + Inter stays)
- Increased contrast: headlines in bright off-white, body in muted gray

### Modal
- Dark background with subtle border, matching the new palette

## Files to Modify

1. **`src/index.css`** -- Update all CSS custom properties to dark palette values
2. **`src/pages/Index.tsx`** -- Rework Hero to include the bust image with artistic positioning; adjust section backgrounds for alternating dark panels
3. **`src/components/AssessmentModal.tsx`** -- Minor class updates for dark styling consistency
4. **Copy the bust image** -- `user-uploads://Screenshot_2026-02-17_at_3.51.19 PM.png` to `src/assets/roman-bust.png` and import in Index

## Technical Details

### CSS Variables Update (`src/index.css`)
```
--background: 0 0% 4%;        /* #0A0A0A */
--foreground: 0 0% 91%;       /* #E8E8E8 */
--card: 0 0% 7%;              /* #111111 */
--muted: 0 0% 14%;            /* #242424 */
--muted-foreground: 0 0% 42%; /* #6B6B6B */
--border: 0 0% 12%;           /* #1E1E1E */
--input: 0 0% 15%;
--accent: 27 34% 36%;         /* Keep bronze */
--primary: 0 0% 91%;          /* Off-white buttons */
--primary-foreground: 0 0% 4%;
--secondary: 0 0% 11%;
--secondary-foreground: 0 0% 91%;
```

### Hero Rework (`src/pages/Index.tsx`)
- Import the bust image
- Position it as a large visual element (e.g., `absolute` or `relative` with `mix-blend-mode: luminosity` or grayscale filter for monotone consistency)
- Headline and CTA overlaid with proper z-index

### Alternating Sections
- Even sections get `bg-card` class for the slightly lighter dark panel effect (similar to the dark card sections in the Logo Archive reference)
