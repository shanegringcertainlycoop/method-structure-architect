
## Redesign Third Chart: Employment Rate Comparison

Replace the basic bar chart for the third tab with a more visually compelling **radial/donut gauge** comparison showing 68% vs 81% employment rates.

### Data Updates
- Update the third `chartDataSets` entry with the correct values: 68% (No Credential) and 81% (With Credential)
- Add `delta: "+13%"` to the third dataset
- Update the text block body to: "Workers with certifications are 13% more likely to be employed than those without, proving the market rewards credentials."

### New Visualization: Dual Radial Gauges
Instead of two plain bars, render two side-by-side **circular progress rings** (SVG-based, no external library needed):
- Left ring: "68%" labeled "No Credential" -- muted color
- Right ring: "81%" labeled "With Credential" -- accent gradient
- The "+13%" delta badge displayed between or above the rings

### Technical Details

**`src/components/ProofSection.tsx`**:

1. Add a `chartType` field to the third dataset: `chartType: "gauge"` to differentiate it from bar charts.

2. Create a `GaugeChart` component inline:
   - Two SVG circles (background track + filled arc) side by side
   - Large percentage text centered in each ring
   - Labels below each ring
   - Smooth CSS animation on the stroke-dashoffset for a fill-in effect
   - Uses existing accent color for the highlighted ring and muted for the other

3. Update the chart rendering in `ProofSection` to conditionally render `GaugeChart` when `chartType === "gauge"`, otherwise render `BarChart`.

4. Update third `textBlocks` entry body text to: "Workers with certifications are 13% more likely to be employed than those without, proving the market rewards credentials."

5. Update third `chartDataSets` values to use 68 and 81 with displayValues "68%" and "81%".
