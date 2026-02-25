

# Add "Musings" Nav Link to Blog

## Change
Add a "Musings" navigation link pointing to `/blog` in the site header across all pages that have a Nav component.

## Technical Details

Based on the last diff, a "Writings" link was recently added to the nav on Index, Blog, and BlogPost pages. This change will rename that link from "Writings" to "Musings" on all three pages.

### Files to modify:
1. **`src/pages/Index.tsx`** -- Change "Writings" to "Musings" in the Nav component
2. **`src/pages/Blog.tsx`** -- Change "Writings" to "Musings" in the Nav component
3. **`src/pages/BlogPost.tsx`** -- Change "Writings" to "Musings" in the Nav component

Each change is a single text replacement: `Writings` to `Musings`.
