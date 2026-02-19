

## Add Dollar Values and Delta to the Earnings Chart

Update the second chart ("Verified competence commands higher pay") to display specific dollar values on the bars and a delta indicator showing the difference.

### Changes to `src/components/ProofSection.tsx`

1. Add `displayValue` to the two bars in the second chart dataset:
   - "No Credential" bar: `"$672/wk"` (median weekly earnings without credential)
   - "With Credential" bar: `"$967/wk"` (median weekly earnings with credential)

2. Add a `delta` property to the second chart dataset: `"+$295/wk (+44%)"`

3. Update the `BarChart` component to accept and render an optional `delta` prop as an accent-colored badge/label positioned at the top-right of the chart area.

### Technical Details

- The delta values come from the C2ER/BLS data referenced in the footnote ($295 more per week, 44% increase)
- The `delta` prop will be optional so it only shows when provided
- Styled with the existing accent color for consistency

