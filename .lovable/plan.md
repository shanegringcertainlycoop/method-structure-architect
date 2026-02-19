

# Replace Method Lifecycle with Trust Diagnostic Module

## What Changes

The "Method Lifecycle" section (Section II) will be removed and replaced with a new interactive "Trust Diagnostic" module -- a 10-question checklist across 5 dimensions with live scoring and dynamic result feedback.

## New Component

A new file `src/components/TrustDiagnosticSection.tsx` will be created containing:

### Header
- Eyebrow text: "Trust Diagnostic -- 5 Dimensions"
- Headline: "Do You Have a System of Trust -- or Just Reputation?"
- Subhead and reassurance note

### Interactive Checklist (5 dimensions, 2 checkboxes each)
1. Source -- Authority
2. Transfer -- Scalability
3. Signal -- Market Legibility
4. Integrity -- Structural Discipline
5. Risk -- Vulnerability Awareness

Each dimension has a bold title and two clickable checkbox rows. Checkboxes use the existing Radix Checkbox component for accessibility and keyboard navigation. The entire row (label + checkbox) is clickable.

### Live Scoring
- "Checked: X / 10" and "Unchecked: Y" counters
- A monochrome horizontal progress bar (fills based on checked count)
- A bordered result card that updates dynamically:
  - 0-2 unchecked: "Strong foundation"
  - 3-5 unchecked: "Trust is vulnerable"
  - 6-10 unchecked: "Reputation-dependent"

### Pivot Paragraph
High-contrast reframe text about architecture vs. marketing.

### CTA Row
- Primary button: "Run the Full Trust Architecture Review ($9)" (accent gradient style)
- Secondary button: "Book a 15-Minute Diagnostic Call" (outline style)
- Reassurance text below

### Default State
All boxes unchecked, showing "Reputation-dependent" result on load.

## Layout Changes in Index.tsx

- Remove the `MethodLifecycle` component definition and its `lifecyclePhases`/`stepLabels` data arrays
- Import `TrustDiagnosticSection` and render it in place of `MethodLifecycle` at the same position in the page layout (inside `bg-surface` wrapper)

## Technical Details

**New file: `src/components/TrustDiagnosticSection.tsx`**
- Uses `useState` with a `boolean[10]` array to track checkbox states
- Derives `checkedCount` and `uncheckedCount` via `.filter()`
- Result state determined by simple conditional on unchecked count
- Uses existing `Checkbox` from `@/components/ui/checkbox` (Radix-based, accessible)
- Uses existing `Button` component for CTAs
- Uses existing `Progress` component (restyled monochrome) for the bar
- Responsive: single column layout with clear dimension grouping via subtle border-bottom rules
- Styling: black/white, no gradients on the module itself, thin borders, generous whitespace
- The primary CTA opens the assessment modal (passed as prop), secondary can link externally or also open the modal

**Modified file: `src/pages/Index.tsx`**
- Remove `lifecyclePhases` array (~lines 94-127), `stepLabels` array, and `MethodLifecycle` component (~lines 129-185)
- Add import for `TrustDiagnosticSection`
- Replace `<MethodLifecycle />` with `<TrustDiagnosticSection onRequestAssessment={() => setAssessmentOpen(true)} />` at line 395
- Update section numeral references if needed (downstream sections keep their current numerals)

