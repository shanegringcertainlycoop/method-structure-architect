
# Section I Transformation: Before/After Reveal

Replace the current "Most Methods Stall Before They Scale" section with a new interactive before-and-after transformation component. The section will use a horizontal slider (scrub) that reveals the "after" state from the "before" state, reinforcing the brand's structural narrative.

## New Section Content

**Headline:** Your Method Works. Now Make It Transferable.

**Subheadline:** We design the structure that lets your expertise scale through certification, technology, or institutional governance -- without dilution.

**7 transformation rows**, each with a before (left) and after (right) state:

| Before | After |
|--------|-------|
| Your framework lives in conversation. | Your framework lives in a documented blueprint. |
| You explain it differently each time. | You have a canonical language system. |
| Clients depend on you. | Trust transfers to a system that outlives you. |
| Marketing feels improvised. | Marketing becomes claim-safe and repeatable. |
| Scale feels premature. | Scale becomes engineered with standards and QA. |
| Technology feels disconnected. | Technology becomes an expression of the method. |
| Quality varies by who delivers. | Quality becomes observable -- and auditable. |

**Closing lines:**
- Your expertise doesn't lack demand.
- It lacks structure.

## Interaction Design

A single horizontal slider controls the reveal for the entire section:

- At 0% (left): all rows show the "before" text in muted-foreground, representing the current unstructured state.
- As the user drags the slider right, a vertical "reveal line" (accent-colored) sweeps across each row, transitioning text from "before" to "after."
- Each row is a two-column layout. The slider controls a CSS `clip-path` or `width` overlay so the "after" column is progressively revealed over the "before" column.
- At 100% (right): all rows show the "after" text in full foreground with a subtle accent highlight.

The slider itself sits below the headline area and above the transformation rows, styled minimally with the accent gold color.

## Technical Approach

### New Component: `TransformationSection.tsx`

- Contains the transformation data array, slider state, and rendering logic.
- Uses the existing Radix `Slider` component for the scrub control.
- Each row renders both "before" and "after" text in a relative container. The "after" text is clipped using an inline `clipPath: inset(0 ${100 - sliderValue}% 0 0)` style, layered on top of the "before" text.
- The slider value (0-100) drives the clip percentage for all rows simultaneously.
- Wrapped in the existing `FadeIn` component for scroll-triggered entry animation.

### Modifications to `Index.tsx`

- Remove the `problemItems` array and `TheProblem` component.
- Import and render `TransformationSection` in its place within the page layout.
- Keep the same wrapper (`bg-surface noise-overlay` div) and surrounding `Divider` components.

### Styling

- The slider track uses `bg-border` with an accent-colored range fill, consistent with the site's gold palette.
- "Before" text uses `text-muted-foreground` styling.
- "After" text uses `text-foreground` with a subtle left border accent or highlight.
- Each row separated by `border-b border-border` for the editorial list feel already established in the site.
- An arrow glyph or em-dash between before/after text within each row to indicate transformation direction.
- Section numeral marker "I" retained at the top.

### Mobile Behavior

- On smaller screens, the slider remains full-width.
- Rows stack naturally since they use a single-column clip reveal (the before/after occupy the same space, not side-by-side columns).
