
# Update "How We Work" Section

## Copy Updates

Replace all four engagement phase cards with the new copy provided, including timeline annotations in titles and restructured bullet points with a "Support could include:" lead-in for the first card.

## Layout Fix: Equal-Height Cards and All 4 Visible

Switch from a horizontal scroll layout (`overflow-x-auto` with fixed 300px cards) to a responsive CSS grid (`grid-cols-1 md:grid-cols-2 lg:grid-cols-4`) so all four cards are visible at once on desktop. Cards will use `h-full` and flex-column layout to ensure equal heights regardless of content length.

## Technical Details

**File:** `src/pages/Index.tsx`

1. Update `engagementPhases` data array (lines 279-307):
   - Card 1: "Diagnose" with "(1-2 weeks)" subtitle, new intro, "Support could include a:" lead-in, 3 bullets, new closing
   - Card 2: "Preserve" with "(4-8 weeks)" subtitle, updated bullets (no trademark symbol), new closing
   - Card 3: "Build" with "(8-12 weeks or 120-day pilot)" subtitle, 5 bullets including "120-Day Certification Pilot Launch", new closing
   - Card 4: "Steward" with "(Ongoing)" subtitle, 5 bullets, new closing

2. Add a `subtitle` field to each phase object for the timeline.

3. Change the card container (line 317) from `flex gap-6 overflow-x-auto` to `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6` so all cards display in a row and the 4th card is always visible.

4. Remove `min-w-[300px] w-[300px] snap-start` from individual cards; replace with `h-full` to let grid handle sizing and ensure equal heights.

5. Render `phase.subtitle` below the title as a small muted-foreground text element, and render `phase.bulletIntro` (if present) above the bullet list.
