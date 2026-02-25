

# Add Level 0 — Trust Architecture Review

## Overview
Add a new "Level 0" entry across the homepage engagement cards, the Programs dropdown, and create a dedicated page for the Trust Architecture Review workbook product.

## Changes

### 1. Create `src/pages/TrustArchitectureReview.tsx`
A simpler, product-focused page (not a full 9-module service page). Sections:

| Section | Content |
|---------|---------|
| Hero | "Level 0" marker, "Trust Architecture Review" headline, "$9 Workbook / Self-guided / 30-45 minutes" subtitle, brief intro paragraph, single CTA button |
| Five Dimensions | The five diagnostic dimensions listed with descriptions (where trust comes from, transfers, signals, breaks, scales) |
| What You Get | 12-15 page fillable PDF details, scoring, interpretation, recommended path forward, mini-guide on trust mechanisms |
| Realization | "Most founders discover..." editorial copy about the real scaling challenge |
| CTA + Footer | "Start with structure." closing, purchase/download CTA, standard footer links |

Follows the same design system (Nav, FadeIn, SectionMarker, Divider, dark/light alternating sections, AssessmentModal). The primary CTA will be a "Get the Workbook — $9" button (links to external purchase or opens modal -- will use the AssessmentModal as placeholder for now since no payment is set up).

### 2. Update `src/App.tsx`
Add route: `<Route path="/trust-architecture-review" element={<TrustArchitectureReview />} />`

### 3. Update `src/components/ProgramsDropdown.tsx`
Insert Level 0 as the first item:
```
{ label: "Level 0 — Trust Architecture™ Review", to: "/trust-architecture-review" }
```

### 4. Update `src/pages/Index.tsx`
- Add Level 0 as the first entry in the `engagementPhases` array with the workbook details
- Update subtitle from "Four structured levels" to "Five structured levels"
- The card will have a distinct feel -- "$9 Workbook" subtitle, shorter bullet list, and an "Explore Level 0" button linking to the new page

