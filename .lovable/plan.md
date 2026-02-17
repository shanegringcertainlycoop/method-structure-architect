
# Full Copy Revision -- Expanded Site Architecture

## Overview

Complete rewrite of all page copy across 10 modules, replacing the current 6-section structure. This is a copy-only change -- no color or component architecture modifications needed.

## Changes to `src/pages/Index.tsx`

### Hero Section
- Overline: "Institutional Architecture for Intellectual Property"
- Headline: "Design the Architecture of Authority."
- Subhead: two-line format with "If your results depend on you..." and "Certainly formalizes expertise..."
- Primary CTA: "Request a Structural Audit" (replaces "Request an Assessment")
- Secondary CTA: "View the Architecture" (kept)
- Microline: "Private engagements for founders, standards bodies, and institutional leaders."

### Module I -- Structural Risk (currently Section I)
- Headline: "Unstructured Expertise Cannot Endure."
- New body paragraph about expertise living in conversation
- Expanded bullet list: adds "IP dilution", "Revenue fragility", "Inability to credential", "Inability to scale"
- Closing lines: "Performance is not a system. And systems are what endure."
- Remove accordion (symptoms are now inline)

### Module II -- What We Actually Do (NEW section)
- Section marker: II
- Headline: "We Do Not 'Package' Methods. We Architect Them."
- Body about operating as architectural firm for IP
- Closing: "The outcome is not documentation. It is infrastructure."

### Module III -- The Architecture (currently Section II, heavily expanded)
- Section marker: III
- Headline: "The Architecture Process"
- Replace 3-column card grid with 4 structured phases (Extraction, Formalization, Codification, Institutionalization)
- Each phase has a sub-headline, bullet list, and closing declarative line
- Uses collapsible or inline layout for the 4 phases

### Module IV -- What Emerges (replaces current Artifact section)
- Section marker: IV
- Headline: "What Emerges Is an Asset."
- Body: "The result of this architecture is not a course. It is a defensible system."
- Expanded checklist: 7 items including "Revenue infrastructure"
- Closing: "Your expertise no longer depends on your presence. It functions as a system."

### Module V -- Applications (currently Section IV, updated copy)
- Section marker: V
- 4 cards instead of 3 (add "Advisory Practice")
- New descriptions matching provided copy
- Microline: "The structure differs. The architecture remains consistent."

### Module VI -- Proof of Structure (NEW section)
- Headline: "Architecture Is Visible."
- Intro: "Below are examples of structural artifacts produced through our process."
- Grid of 6 artifact type labels (method blueprint, credential pathway map, etc.)
- No heavy text -- let labels signal seriousness

### Module VII -- Engagement (currently Section V, expanded)
- Section marker: VI
- Two-step model: "Structural Audit" and "Architecture Intensive"
- Audit card lists deliverables (gap analysis, risk identification, readiness assessment, roadmap)
- Architecture card lists scope items
- "Private engagements only." note
- CTAs: "Request Audit" / "Discuss Architecture"

### Module VIII -- Common Questions (updated FAQ copy)
- 4 questions replacing current 5
- New copy per the provided text

### Module IX -- Final Declaration (Closing)
- Headline: "What Is Not Structured Cannot Endure."
- Closing line: "Authority requires architecture."
- CTA: "Request a Structural Audit"

### Nav Bar
- CTA text: "Request a Structural Audit"

### Page Layout Order
Nav, Hero, Structural Risk, What We Do, Architecture, What Emerges, Applications, Proof of Structure, Engagement, FAQ, Closing

## Changes to `src/components/AssessmentModal.tsx`
- Title: "Request a Structural Audit" (from "Request an Assessment")
- Description: "A focused review of your current method, documentation, and delivery model."

## Files to Modify
1. **src/pages/Index.tsx** -- Full rewrite of all section components and page layout
2. **src/components/AssessmentModal.tsx** -- Update title and description copy

## Technical Notes
- New sections (WhatWeDo, ProofOfStructure) added as components following existing pattern
- Architecture section restructured from 3-column Collapsible cards to 4-phase layout using Collapsible for each phase
- Applications grid changes from `md:grid-cols-3` to `md:grid-cols-2` for 4 cards
- All CTA text updated from "Assessment" to "Structural Audit" throughout
