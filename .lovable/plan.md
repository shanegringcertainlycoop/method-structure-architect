

# Level 2 — Strategy Sprint Page

## Overview
Create `src/pages/StrategySprint.tsx` following the exact template of `MethodCapture.tsx`, with 10 modules matching the provided spec. Also fix the nested `<Link>` bug in Blog.tsx and BlogPost.tsx, and add the route.

## Bug Fix
Blog.tsx and BlogPost.tsx have a nested `<Link>` wrapping issue from the last edit (double `<Link to="/blog">` tags). Will flatten to a single `<Link>`.

## File Changes

### 1. Create `src/pages/StrategySprint.tsx`
Mirrors MethodCapture.tsx structure exactly — same shared helpers (Divider, SectionMarker, lightBg, lightMuted, lightBorder), Nav, FadeIn, AssessmentModal, Button imports.

| Module | Background | Key Visual |
|--------|-----------|------------|
| 1 Hero | Off-white `#F5F4F1` with grid lines | "Level 2" marker, "Strategy Sprint" headline, compressed spacing, divider under headline |
| 2 The False Assumption | Dark (bg-surface noise-overlay) | Split layout: left SVG decision tree ("Scale" -> "Certification?" -> alternative mechanisms), right editorial copy |
| 3 What Strategy Sprint Examines | Dark `#111111` | Five columns with vertical dividers (Method Clarity, Market Positioning, Standards Readiness, Operational Capacity, Economic Viability) — collapses to single column on mobile |
| 4 The 2-3 Week Process | Off-white | Horizontal timeline bar with 3 week segments, bullet lists beneath each |
| 5 What You Receive | Off-white | Four bordered blocks (Certification Readiness Assessment, Strategic Decision Framework, Investment Roadmap, Executive Summary Brief) in 2x2 grid |
| 6 Three Possible Outcomes | Dark (bg-surface) | Three equal cards (Proceed, Strengthen First, Pivot) in 3-column grid |
| 7 Who This Is For | Off-white | Two-column checklist with filled/empty square indicators (same pattern as MethodCapture Module 7) |
| 8 Where This Fits | Dark (bg-surface) | Same level bar component highlighting Level 2 instead of Level 1 |
| 9 Investment and Positioning | Dark | Centered institutional copy |
| 10 Final CTA | Dark `#111111` | "Decide deliberately." headline, two CTAs, footer |

Nav button label: "Book a Strategy Call"
Primary CTAs open AssessmentModal.
Secondary CTAs link to `/levels`.

### 2. Modify `src/App.tsx`
Add route: `<Route path="/strategy-sprint" element={<StrategySprint />} />`

### 3. Fix `src/pages/Blog.tsx` and `src/pages/BlogPost.tsx`
Remove the nested `<Link>` — flatten to single `<Link to="/blog">Musings</Link>`.
