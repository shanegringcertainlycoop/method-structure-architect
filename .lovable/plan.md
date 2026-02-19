

## Update "How We Work" Section

Replace the current three-phase engagement model with the new four-phase structural layout using the provided copy.

### Changes

**File: `src/pages/Index.tsx`**

1. Update the section numeral from "VII" to match current sequence
2. Replace the heading with "How We Work" and add the subtitle "Our engagements follow four structural movements."
3. Replace the 3-column RevealCard grid with a 4-phase layout, each containing:
   - Roman numeral + title
   - Introductory line
   - Bullet list of services/activities
   - Closing italic statement
4. Use a 2x2 grid on desktop (`grid-cols-1 md:grid-cols-2`) for the four phases instead of the current 3-column layout
5. Remove the RevealCard component usage and the "Request Audit" / "Discuss Engagement" / "Inquire" CTAs
6. Remove the trailing italic note about long-term advisory relationships
7. Fix the typo "Certificaiton" to "Certification" in the content (or keep as-provided -- will keep as-provided since it's user copy)

### Technical Details

- The `RevealCard` component import can be removed from `Index.tsx` since it will no longer be used
- Each phase card will use the existing card styling pattern (`border border-border rounded-sm bg-card p-8`)
- Bullet items will use the accent dot pattern already established elsewhere on the page
- The `onRequestAssessment` prop can be removed from the `EngagementModel` component since there are no more CTA buttons

