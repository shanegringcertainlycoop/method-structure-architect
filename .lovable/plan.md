

# Certainly — Institutional Landing Page

## Overview
A single-page, high-authority landing page for Certainly, built with institutional gravitas. The design evokes a methodology institute or standards body — restrained, architectural, and timeless.

---

## Design System

- **Colors**: Charcoal (#1C1C1C), Warm Ivory (#F4F1EB), Stone Gray (#C8C2B8), Oxidized Bronze (#7A5C3E) accent at <10%
- **Typography**: Serif headlines (Playfair Display), sans-serif body (Inter) — large, spacious, structured
- **Layout**: 12-column grid, generous margins, thin hairline dividers, Roman numeral section markers
- **Animation**: Subtle fade-in only. No bounce, parallax, or playful motion
- **Logo**: "CERTAINLY" serif wordmark, tight tracking

---

## Page Sections

### 1. Hero
Full-screen centered opening. Large serif headline: *"Turn Your Method Into an Asset."* Two-line subhead. Two buttons: "Request an Assessment" (solid charcoal) and "View the Framework" (outlined). Micro-proof line below a thin divider.

### 2. I. The Transfer Problem
Left-aligned section with Roman numeral marker. Three bullet points on why unstructured expertise fails. Large serif pull quote. Collapsible accordion: "Common Symptoms" with four items, closed by default.

### 3. II. The Architecture
Three equal columns — Capture, Organize, Package — each with a number (01–03), title, and one-line description. Each column has an "Expand" toggle revealing deeper copy, hidden by default.

### 4. III. The Asset
Title: "The Output Is an Asset." Five-item checklist of deliverables. Small italic note: *"Not documentation. Architecture."* Optional expandable: "View Sample Artifacts."

### 5. IV. Engagement
Two-column layout — Assessment (left) and Architecture (right). Each with a short description and CTA button. Institutional note below: *"Scope is determined after assessment."*

### 6. V. Selected Applications
Three compact case blocks with client names in small caps and two-sentence transformation summaries (DRVN, SEAM, and one more). Optional "View Case Summaries" link.

### 7. Common Questions
Accordion FAQ with five questions, all closed by default.

### 8. Closing
Centered large serif statement: *"What is not structured cannot endure."* Single CTA button. Thin divider above a minimal footer.

---

## Backend (Lovable Cloud)

- **Contact/Assessment Form**: Modal form triggered by "Request an Assessment" buttons, collecting name, email, company, and a brief description
- **Database**: Supabase table to store assessment requests
- **Toast confirmation** on successful submission

---

## Technical Notes
- Google Fonts: Playfair Display (serif) + Inter (sans)
- Smooth scroll navigation between sections
- Fully responsive — mobile collapses columns to stacked layout
- No external dependencies beyond what's already installed

