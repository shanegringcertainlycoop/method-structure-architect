
# Complete Copy Overhaul -- New Site Architecture

## Overview

Full replacement of all section copy and structure. The site shifts from "Institutional Architecture for IP" to "Method Architecture & Advisory" with a new section flow and the introduction of the Method Lifecycle as the visual anchor.

## Files to Modify

1. **src/pages/Index.tsx** -- Full rewrite of all sections
2. **src/components/AssessmentModal.tsx** -- Update title/description to "Method Audit"

---

## Section-by-Section Changes

### Nav
- CTA: "Request a Method Audit"

### Hero
- Overline: "Method Architecture & Advisory"
- Headline: three lines -- "Reveal Your Method. / Build the Structure. / Steward the System."
- Subhead: new paragraph about partnering with founders/institutions
- Primary CTA: "Request a Method Audit"
- Secondary CTA: "See the Method Lifecycle(TM)" (scrolls to lifecycle section)
- Microline: "Selective long-term advisory engagements."

### Section I -- The Problem (replaces Structural Risk)
- Remove SectionMarker numeral, use "I" marker
- Headline: "Most Methods Stall Before They Scale."
- Short line: "You already have results."
- "But:" followed by 6 risk items as staggered grid cards (same pattern):
  - "Your framework lives in conversations."
  - "You explain it differently each time."
  - "Clients depend on you, not a system."
  - "Marketing feels imprecise."
  - "Certification feels premature."
  - "Technology feels disconnected."
- Closing: "Your expertise works. It simply lacks structure."
- Authority line (italic serif): "What Is Not Structured Cannot Endure."

### Section II -- The Method Lifecycle (replaces old Architecture section)
- New visual anchor section with id="lifecycle" (for hero scroll target)
- Horizontal step indicator: Method -> Structure -> Scale -> Stewardship
- 4 collapsible phases with updated copy:
  1. **Method** -- "Your proprietary approach..." / bullets: "The way you think", "The way you deliver results" / closing: "Often powerful. Rarely documented."
  2. **Structure** -- "We extract and formalize it." / bullets: "Named constructs", "Defined principles", "Clear language", "Documented IP", "Standards and sequencing" / closing: "Structure transforms intuition into clarity."
  3. **Scale** -- "Once structured, your method can support:" / bullets: "Certification programs", "Licensing models", "Curriculum and programming", "Marketing precision", "Technology platforms" / closing: "Scale without structure creates noise. Scale with structure creates authority."
  4. **Stewardship** -- "This is where most firms fail." / intro: "A method is not static. It must evolve with discipline." / bullets: "Maintain coherence", "Protect standards", "Guide expansion", "Align certification and tech decisions", "Prevent drift" / closing: "This is long-term advisory. Not a one-time project."

### Section III -- What We Actually Do (updated copy)
- Headline: "We Serve as Structural Partner."
- Two negation lines: "We do not sell templates." / "We do not sell content production."
- "We work alongside you to:" with 4 bullet items
- Closing: "Engagement begins with consulting. It often becomes advisory."
- Keep the AspectRatio image placeholder

### Section IV -- The Outcome (replaces What Emerges)
- Headline: "The Outcome"
- 7-item checklist (updated items):
  - "A defined intellectual framework"
  - "Structured curriculum architecture"
  - "Clear models and language"
  - "Assessment and standards (if applicable)"
  - "Certification or licensing blueprint"
  - "A documented IP foundation"
  - "A long-term structural roadmap"
- Closing lines: "Your expertise becomes independent of your presence. Performance becomes system. System becomes asset."

### Section V -- Who This Is For (replaces Applications)
- Headline: "For Leaders Already Producing Results."
- "This is for:" followed by 5 cards:
  - "Founder-led consulting firms"
  - "Standards organizations"
  - "Advisory practices with proprietary frameworks"
  - "Performance methodologies ready to scale"
  - "Institutional leaders stewarding intellectual capital"
- Closing: "Not for early-stage creators. You must already have proof. We provide discipline."

### Section VI -- Engagement Model (replaces old Engagement)
- Headline: "How We Work"
- 3 RevealCards (instead of 2):
  - Phase I -- Method Audit: "A structured review of your existing framework and scale ambitions."
  - Phase II -- Architecture Engagement: "Focused work to extract, formalize, and document your system."
  - Phase III -- Advisory Partnership: "Ongoing architectural oversight as your method expands into certification, marketing, and technology."
- Closing: "Most engagements evolve into long-term advisory relationships."

### Remove: Proof of Structure section and FAQ section
These are dropped from the new copy. The page becomes tighter.

### Final Section (Closing)
- Headline: "What Is Not Structured Cannot Endure."
- Subhead: "Authority requires discipline." (was "architecture")
- CTA: "Request a Method Audit"
- Footer tagline updated to match new language

### AssessmentModal
- Title: "Request a Method Audit"
- Description: "A structured review of your existing framework and scale ambitions."

---

## Page Layout Order (new)

Nav, Hero, The Problem, Method Lifecycle, What We Do, The Outcome, Who This Is For, Engagement, Closing

## Technical Notes

- Proof of Structure and FAQ sections removed entirely
- Lifecycle section uses `id="lifecycle"` instead of `id="architecture"` for scroll target
- Step indicator labels change: Extraction/Formalization/Codification/Institutionalization become Method/Structure/Scale/Stewardship
- Section V uses a single-column list of 5 items instead of 2x2 grid (these are audience descriptors, not case studies)
- Engagement section changes from 2 RevealCards to 3 (adding Advisory Partnership phase)
- All "Structural Audit" CTAs become "Method Audit"
