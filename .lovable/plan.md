
## Fix Competing Titles in Proof Section

The section heading ("Structural Discipline Performs.") and each tab's thesis headline (e.g. "Structure Increases Strategic Success") are both large serif titles fighting for attention. The fix: remove the overall section heading and let the tab thesis serve as the primary title, while adjusting the tab column to feel more intentional.

### Changes

**File: `src/components/ProofSection.tsx`**

1. Remove the top-level heading block (the numeral "V" and "Structural Discipline Performs." h2) entirely -- lines 53-58
2. Promote the tab thesis (`h3`) to be the dominant heading, keeping it at `text-2xl sm:text-3xl md:text-4xl`
3. Adjust the tab buttons: make them slightly larger (`text-sm` to `text-base`), add more vertical padding (`py-5`), and give the active tab a heavier left border (`border-l-[3px]`) so the tabs feel like the navigational spine of the section rather than secondary controls
4. Add the section numeral "V" as a small label above the tab list instead, so the module still has its roman numeral marker without a competing headline
