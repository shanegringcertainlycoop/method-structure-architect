
## Redesign: Structural Discipline Performs (Proof Section)

Replace the current placeholder two-column layout with a new data-driven module featuring vertical tabs on the left and a large chart + thesis on the right.

### Layout

- **Left column**: Three vertically stacked tab buttons, styled as a slim sidebar with bottom-border separators
- **Right column**: The active tab's content -- bold serif headline (thesis), a two-bar horizontal chart, a 2-3 sentence summary, and a linked citation

### Data (3 Tabs)

**Tab 1 -- Strategic Success**
- Thesis: "Structure Increases Strategic Success"
- Chart: 77% (High governance, gold) vs 54% (Low governance, charcoal)
- Citation: PMI Pulse of the Profession, 2020

**Tab 2 -- Capital Waste**
- Thesis: "Lack of Structure Destroys Capital"
- Chart: 9-10% waste (High governance, gold) vs 30%+ waste (Low governance, charcoal)
- Citation: PMI Pulse of the Profession, 2018

**Tab 3 -- Training Profitability**
- Thesis: "Formalized Training Improves Profitability"
- Chart: Two stacked bars -- +24% higher profit margins, 218% higher income per employee
- Citation: ATD State of the Industry

### Technical Details

**File: `src/components/ProofSection.tsx`** (full rewrite)

1. Replace all placeholder data with a `proofTabs` array containing the three tabs, each with: `tabLabel`, `thesis`, `bars` (array of `{label, value, highlight, displayValue}`), `summary`, `citationText`, `citationUrl`
2. Left column: Vertical tab list using `flex-col` with bottom borders, active state indicated by accent left-border and white text
3. Right column: 
   - Section numeral and "Structural Discipline Performs." heading above the chart area
   - Bold serif thesis headline for the active tab
   - Horizontal bar chart (bars rendered as `width` percentage with gold gradient for highlighted bars, charcoal for others)
   - Summary paragraph in muted text
   - Citation as an external link in accent color
4. On mobile: tabs stack horizontally above content (single column layout)
5. Uses existing `FadeIn` component for scroll animation
6. Bar chart uses CSS-based horizontal bars (no recharts dependency needed) for simplicity and consistency with the minimal aesthetic
