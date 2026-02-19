
# Keep "Before" Visible, Reveal "After" on Scrub

Currently, the "after" text overlays and hides the "before" text as you scrub. The update will change the layout so the "before" text always remains visible, and the "after" text appears alongside it only as the slider is scrubbed.

## Layout Change

Each transformation row will become a two-column layout:
- **Left column**: The "before" text, always visible in muted styling with the em-dash glyph. This never changes.
- **Right column**: The "after" text with the arrow glyph, revealed progressively via opacity/clip controlled by the slider. At 0%, the right column is invisible. As you scrub toward 100%, it fades/reveals in.

On mobile, the columns will stack vertically (before on top, after below) with the same reveal behavior on the after text.

## Technical Details

**File:** `src/components/TransformationSection.tsx`

- Change each row from a single overlapping container to a flex/grid two-column layout.
- Left column: always visible "before" text with `text-muted-foreground` and the `--` glyph.
- Right column: "after" text with `text-foreground` and the arrow glyph, styled with `opacity` tied to the slider percentage (0 at slider 0, 1 at slider 100), plus a subtle `clipPath` or `transform` reveal from the left.
- Remove the `absolute inset-0 bg-card` overlay approach since we no longer want to cover the before text.
- The slider, logo, and BEFORE/AFTER labels remain unchanged.
