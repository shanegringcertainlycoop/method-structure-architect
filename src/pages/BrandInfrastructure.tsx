import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import AssessmentModal from "@/components/AssessmentModal";
import SiteNav from "@/components/SiteNav";
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@/components/ui/table";

/* ─── SHARED HELPERS ─── */
const Divider = () => <div className="w-full h-px bg-border" />;
const SectionMarker = ({ numeral }: { numeral: string }) => (
  <span className="font-serif text-accent text-sm tracking-widest">{numeral}</span>
);

const lightBg = { backgroundColor: "#F5F4F1", color: "#1A1A1A" };
const lightMuted = "text-[#666]";
const lightBorder = "border-[#D4D0C8]";

/* ─── MODULE 1 — HERO ─── */
const HeroModule = ({ onRequest }: { onRequest: () => void }) => (
  <section
    className="min-h-[75vh] flex items-center justify-center px-6 pt-24 pb-14 relative"
    style={{
      ...lightBg,
      backgroundImage: `
        repeating-linear-gradient(0deg, transparent, transparent 59px, rgba(0,0,0,0.03) 59px, rgba(0,0,0,0.03) 60px),
        repeating-linear-gradient(90deg, transparent, transparent 59px, rgba(0,0,0,0.03) 59px, rgba(0,0,0,0.03) 60px)
      `,
    }}
  >
    <div className="max-w-3xl mx-auto text-center">
      <FadeIn>
        <p className="text-xs tracking-[0.3em] uppercase mb-6" style={{ color: "hsl(43 47% 44%)" }}>
          Level 3 · Module C
        </p>
      </FadeIn>
      <FadeIn delay={200}>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-tight mb-4" style={{ color: "#1A1A1A" }}>
          Brand Infrastructure™
        </h1>
        <div className="w-full h-px mb-8" style={{ backgroundColor: "#D4D0C8" }} />
      </FadeIn>
      <FadeIn delay={400}>
        <div className="space-y-3 text-base sm:text-lg leading-relaxed mb-10 max-w-2xl mx-auto" style={{ color: "#444" }}>
          <p className="font-medium" style={{ color: "#1A1A1A" }}>
            Make competence legible. Make authority unmistakable.
          </p>
          <p>
            Build the identity, narrative, and verification systems that allow your credential to carry weight in the market.
          </p>
        </div>
      </FadeIn>
      <FadeIn delay={600}>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={onRequest}
            className="btn-accent-gradient text-accent-foreground rounded-sm px-8 py-5 text-base tracking-wide font-medium h-auto"
          >
            Request Brand Infrastructure Advisory
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-sm px-8 py-5 text-base tracking-wide font-medium h-auto"
            style={{ borderColor: "#D4D0C8", color: "#1A1A1A", backgroundColor: "transparent" }}
          >
            <Link to="/trust-mechanism-modules">
              Compare Level 3 Modules <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </FadeIn>
    </div>
  </section>
);

/* ─── MODULE 2 — THE SIGNAL FAILURE PROBLEM ─── */
const SignalFailure = () => (
  <section className="px-6 py-24 max-w-6xl mx-auto">
    <FadeIn>
      <SectionMarker numeral="II" />
      <h2 className="font-serif text-3xl sm:text-4xl font-normal mt-4 mb-14 text-foreground">
        Rigor without signal fails commercially.
      </h2>
    </FadeIn>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
      {/* Left — Signal Breakdown SVG */}
      <FadeIn delay={200}>
        <div className="pr-0 md:pr-12 md:border-r border-border pb-12 md:pb-0">
          <svg viewBox="0 0 280 420" className="w-full max-w-xs mx-auto" style={{ overflow: "visible" }}>
            {[
              { label: "Strong Standards", color: "rgba(200,165,75,0.15)", stroke: "rgba(200,165,75,0.4)", text: "hsl(43 47% 54%)" },
              { label: "Rigorous Assessment", color: "rgba(200,165,75,0.10)", stroke: "rgba(200,165,75,0.3)", text: "hsl(43 47% 54%)" },
              { label: "Real Competence", color: "rgba(200,165,75,0.08)", stroke: "rgba(200,165,75,0.25)", text: "hsl(43 47% 54%)" },
            ].map((item, i) => {
              const y = 30 + i * 80;
              const w = item.label.length * 8 + 36;
              const x = 140 - w / 2;
              return (
                <g key={item.label}>
                  <rect x={x} y={y} width={w} height="36" rx="2"
                    fill={item.color} stroke={item.stroke} strokeWidth="1" />
                  <text x="140" y={y + 23} textAnchor="middle"
                    fill={item.text} fontSize="11" fontFamily="Inter, sans-serif" letterSpacing="0.04em">
                    {item.label}
                  </text>
                  {i < 2 && (
                    <>
                      <line x1="140" y1={y + 36} x2="140" y2={y + 80}
                        stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                      <polygon points={`136,${y + 76} 140,${y + 82} 144,${y + 76}`}
                        fill="rgba(255,255,255,0.15)" />
                    </>
                  )}
                </g>
              );
            })}
            {/* Arrow to confusion */}
            <line x1="140" y1={30 + 2 * 80 + 36} x2="140" y2={30 + 2 * 80 + 90}
              stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
            <polygon points={`136,${30 + 2 * 80 + 86} 140,${30 + 2 * 80 + 92} 144,${30 + 2 * 80 + 86}`}
              fill="rgba(255,255,255,0.15)" />
            {/* Market Confusion box */}
            <rect x="52" y={30 + 2 * 80 + 100} width="176" height="36" rx="2"
              fill="rgba(220,80,60,0.12)" stroke="rgba(220,80,60,0.35)" strokeWidth="1" />
            <text x="140" y={30 + 2 * 80 + 123} textAnchor="middle"
              fill="hsl(5 60% 55%)" fontSize="11" fontFamily="Inter, sans-serif" letterSpacing="0.04em">
              Market Confusion
            </text>
            {/* Quote */}
            <text x="140" y={30 + 2 * 80 + 155} textAnchor="middle"
              fill="hsl(40 6% 50%)" fontSize="10" fontFamily="Inter, sans-serif" fontStyle="italic">
              "Just another certificate."
            </text>
          </svg>
        </div>
      </FadeIn>

      {/* Right — Copy */}
      <FadeIn delay={400}>
        <div className="pl-0 md:pl-12 pt-12 md:pt-0">
          <div className="space-y-4 text-base text-foreground/80 leading-relaxed">
            <p className="text-muted-foreground">You may have:</p>
            <ul className="space-y-2 ml-1">
              {["Strong standards", "Real competence", "Defensible assessment"].map((item) => (
                <li key={item} className="flex items-start gap-3 text-foreground/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground pt-2">
              But if employers cannot interpret the credential, trust does not transfer.
            </p>
            <p className="text-muted-foreground pt-4">Common breakdowns:</p>
            <ul className="space-y-2 ml-1">
              {[
                "Employers don't understand what it represents",
                "Partners can't articulate its value",
                "The market confuses it with generic training",
                "Holders struggle to explain why it matters",
                "Counterfeit risk increases",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-foreground/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground pt-4">
              Without signaling infrastructure, your authority remains internal.
            </p>
            <p className="font-serif italic text-muted-foreground pt-4">
              Brand Infrastructure™ makes trust portable.
            </p>
          </div>
        </div>
      </FadeIn>
    </div>
  </section>
);

/* ─── MODULE 3 — WHAT THIS MODULE ADDRESSES ─── */
const failureTypes = [
  {
    title: "Legibility Failure",
    desc: "No clear meaning",
    detail: "The market cannot interpret what the credential represents or why it matters.",
  },
  {
    title: "Authority Failure",
    desc: "Insufficient weight",
    detail: "The credential lacks the visual and narrative gravitas to command respect.",
  },
  {
    title: "Verification Failure",
    desc: "No proof mechanism",
    detail: "There is no way to confirm authenticity, creating vulnerability to fraud.",
  },
];

const WhatThisAddresses = () => (
  <section className="px-6 py-24" style={{ backgroundColor: "#111111" }}>
    <div className="max-w-6xl mx-auto">
      <FadeIn>
        <SectionMarker numeral="III" />
        <h2 className="font-serif text-3xl sm:text-4xl font-normal mt-4 mb-6 text-foreground">
          Credentials Are Trust Signals
        </h2>
        <p className="text-base text-muted-foreground mb-4">
          If the market cannot read the signal, the trust does not travel.
        </p>
        <p className="text-base text-muted-foreground mb-14">
          This module addresses three failures:
        </p>
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
        {failureTypes.map((f, i) => (
          <FadeIn key={f.title} delay={100 * i}>
            <div className={`p-8 h-full ${i < failureTypes.length - 1 ? "md:border-r border-border" : ""}`}>
              <p className="text-xs tracking-[0.15em] uppercase text-accent mb-2">{f.desc}</p>
              <h3 className="font-serif text-lg text-foreground mb-4">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.detail}</p>
            </div>
          </FadeIn>
        ))}
      </div>
      <FadeIn delay={400}>
        <p className="text-foreground font-medium text-sm mt-14">
          Brand infrastructure solves all three.
        </p>
      </FadeIn>
    </div>
  </section>
);

/* ─── MODULE 4 — WHAT'S INCLUDED ─── */
const includedAreas = [
  {
    title: "Naming & Positioning Strategy",
    desc: "Define what the credential is — and what it is not.",
    items: ["Credential naming architecture", "Hierarchy and designation structure", "Competitive positioning map", "Audience-specific value propositions", "Differentiation from adjacent standards"],
  },
  {
    title: "Public Narrative & Value Articulation",
    desc: "Make the credential meaningful.",
    items: ["Origin and purpose", "What competence represents", "How it is verified", "Why it matters to employers", "Why it matters to the field"],
  },
  {
    title: "Visual Identity System",
    desc: "Signal authority visually.",
    items: ["Logo and wordmark", "Badge architecture", "Certificate system", "Color palette and typography", "Usage guidelines", "Asset templates"],
    footer: "This is authority signaling, not decoration.",
  },
  {
    title: "Credential Holder Profile & Usage Policies",
    desc: "Define who holds it — and how it is used.",
    items: ["Rights and responsibilities", "Authorized usage rules", "Representation standards", "Renewal requirements", "Revocation visibility protocols"],
  },
  {
    title: "Digital Ecosystem Architecture",
    desc: "Build verification infrastructure.",
    items: ["Credential website structure", "Registry and lookup tools", "Badge metadata configuration", "QR or verification logic", "CRM / LMS integration plan"],
    footer: "Verification is not optional.",
  },
  {
    title: "Sales & Partnership Infrastructure",
    desc: "Enable market adoption.",
    items: ["Sales scripts and positioning frameworks", "Proposal templates", "Employer explanation kits", "ROI justification tools", "Objection handling logic"],
    footer: "Authority must be communicable.",
  },
];

const WhatsIncluded = ({ onRequest }: { onRequest: () => void }) => (
  <section className="px-6 py-24" style={lightBg}>
    <div className="max-w-5xl mx-auto">
      <FadeIn>
        <SectionMarker numeral="IV" />
        <h2 className="font-serif text-3xl sm:text-4xl font-normal mt-4 mb-14" style={{ color: "#1A1A1A" }}>
          What's Included
        </h2>
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {includedAreas.map((area, i) => (
          <FadeIn key={area.title} delay={100 * i}>
            <div className={`p-8 border ${lightBorder} h-full`}>
              <h3 className="text-xs tracking-[0.2em] uppercase font-sans font-medium mb-2" style={{ color: "#1A1A1A" }}>
                {area.title}
              </h3>
              <p className={`text-sm ${lightMuted} mb-4`}>{area.desc}</p>
              <ul className="space-y-1.5">
                {area.items.map((item) => (
                  <li key={item} className={`text-sm ${lightMuted} flex items-start gap-2`}>
                    <span className="text-[hsl(43_47%_44%)] mt-0.5">—</span>{item}
                  </li>
                ))}
              </ul>
              {area.footer && (
                <p className={`text-xs ${lightMuted} italic mt-4`}>{area.footer}</p>
              )}
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

/* ─── MODULE 5 — DELIVERABLES ─── */
const deliverables = [
  { title: "Complete Brand Identity System", desc: "Logo, visual language, badge architecture, certificate design, and usage standards." },
  { title: "Positioning & Messaging Framework", desc: "Clear articulation of what the credential represents and why it matters." },
  { title: "Public-Facing Certification Standard Document", desc: "Professional document explaining qualification criteria and verification logic." },
  { title: "Verification Infrastructure Blueprint", desc: "Website structure, registry design, badge logic, and system integrations." },
  { title: "Credential Holder Policies & Usage Guide", desc: "Clear representation standards and protection rules." },
  { title: "Sales & Partnership Asset Suite", desc: "Scripts, templates, employer kits, and communication frameworks." },
];

const DeliverablesSection = () => (
  <section className="px-6 py-24" style={lightBg}>
    <div className="max-w-5xl mx-auto">
      <FadeIn>
        <SectionMarker numeral="V" />
        <h2 className="font-serif text-3xl sm:text-4xl font-normal mt-4 mb-4" style={{ color: "#1A1A1A" }}>
          What You Receive
        </h2>
        <p className={`text-sm ${lightMuted} mb-14`}>
          This is not aesthetic refresh. It is signaling architecture.
        </p>
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {deliverables.map((d, i) => (
          <FadeIn key={d.title} delay={100 * i}>
            <div className={`p-8 border ${lightBorder} h-full`}>
              <h3 className="text-xs tracking-[0.2em] uppercase font-sans font-medium mb-3" style={{ color: "#1A1A1A" }}>
                {d.title}
              </h3>
              <p className={`text-sm ${lightMuted} leading-relaxed`}>{d.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

/* ─── MODULE 6 — HOW THIS WORKS ─── */
const HowThisWorks = () => (
  <section className="px-6 py-24">
    <div className="max-w-5xl mx-auto">
      <FadeIn>
        <SectionMarker numeral="VI" />
        <h2 className="font-serif text-3xl sm:text-4xl font-normal mt-4 mb-4 text-foreground">
          How This Works
        </h2>
        <p className="text-base text-muted-foreground mb-14">Timeline: 6–10 Weeks</p>
      </FadeIn>

      {/* Timeline */}
      <FadeIn delay={200}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 mb-16">
          {[
            {
              phase: "Phase 1 — Positioning & Naming",
              items: ["Market clarity", "Differentiation", "Credential architecture"],
            },
            {
              phase: "Phase 2 — Identity & Verification Design",
              items: ["Visual system", "Badge & certificate logic", "Registry planning"],
            },
            {
              phase: "Phase 3 — Sales & Partner Enablement",
              items: ["Employer kits", "Sales frameworks", "Public documentation"],
            },
          ].map((p, i) => (
            <div key={p.phase} className={`border border-border p-8 ${i > 0 ? "md:border-l-0" : ""}`}>
              <p className="text-xs tracking-[0.2em] uppercase text-accent mb-4">{p.phase}</p>
              <ul className="space-y-2">
                {p.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-foreground/70">
                    <span className="text-accent mt-0.5">—</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </FadeIn>

      {/* Roles */}
      <FadeIn delay={400}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          <div className="border border-border p-8">
            <p className="text-xs tracking-[0.2em] uppercase text-foreground/60 mb-3">Time Investment</p>
            <p className="text-sm text-foreground/80">Typically 8–12 hours from leadership across engagement.</p>
          </div>
          <div className="border border-border md:border-l-0 p-8">
            <p className="text-xs tracking-[0.2em] uppercase text-foreground/60 mb-3">Your Role</p>
            <ul className="space-y-1.5">
              {["Clarify value proposition", "Approve identity direction", "Decide on verification visibility", "Define representation policies"].map((item) => (
                <li key={item} className="text-sm text-foreground/70">{item}</li>
              ))}
            </ul>
          </div>
          <div className="border border-border md:border-l-0 p-8">
            <p className="text-xs tracking-[0.2em] uppercase text-foreground/60 mb-3">Our Role</p>
            <ul className="space-y-1.5">
              {["Architect signaling systems", "Build verification logic", "Design visual authority", "Align systems across platforms"].map((item) => (
                <li key={item} className="text-sm text-foreground/70">{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </FadeIn>
    </div>
  </section>
);

/* ─── MODULE 7 — WHAT MAKES THIS DIFFERENT ─── */
const WhatMakesDifferent = () => (
  <section className="px-6 py-24">
    <div className="max-w-3xl mx-auto text-left">
      <FadeIn>
        <SectionMarker numeral="VII" />
        <h2 className="font-serif text-3xl sm:text-4xl font-normal mt-4 mb-4 text-foreground">
          Most branding focuses on aesthetics.
        </h2>
        <p className="text-base text-muted-foreground mb-10">
          We focus on trust architecture and verification.
        </p>
      </FadeIn>
      <FadeIn delay={200}>
        <ul className="space-y-3 max-w-md mb-10">
          {[
            "Verification-first design",
            "Market-legible positioning",
            "Authority-signaling visual system",
            "Systems-integrated infrastructure",
            "Defensible public claims",
          ].map((item) => (
            <li key={item} className="flex items-center gap-3 text-sm text-foreground/80">
              <Check className="w-4 h-4 text-accent shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </FadeIn>
      <FadeIn delay={400}>
        <p className="text-foreground font-medium text-sm">Every claim must be backed by your standards.</p>
        <p className="font-serif italic text-muted-foreground text-sm mt-2">
          This is not marketing. It is credibility infrastructure.
        </p>
      </FadeIn>
    </div>
  </section>
);

/* ─── MODULE 8 — EXECUTIVE OUTCOMES ─── */
const ExecutiveOutcomes = () => (
  <section className="px-6 py-24" style={lightBg}>
    <div className="max-w-5xl mx-auto">
      <FadeIn>
        <SectionMarker numeral="VIII" />
        <h2 className="font-serif text-3xl sm:text-4xl font-normal mt-4 mb-14" style={{ color: "#1A1A1A" }}>
          Executive Outcomes
        </h2>
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <FadeIn delay={200}>
          <div>
            <p className="text-xs tracking-[0.2em] uppercase font-medium mb-5" style={{ color: "#1A1A1A" }}>
              By the end of Brand Infrastructure™, you will have:
            </p>
            <ul className="space-y-3">
              {[
                "Market clarity — employers understand what your credential means",
                "Verifiable credentials — fraud-resistant infrastructure",
                "Professional positioning — identity aligned with rigor",
                "Portable authority — holders can confidently represent it",
                "Sales readiness — structured enrollment workflows",
                "System integration — credential lifecycle supported digitally",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm" style={{ color: "#444" }}>
                  <Check className="w-4 h-4 shrink-0" style={{ color: "hsl(43 47% 44%)" }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
        <FadeIn delay={400}>
          <div>
            <p className="text-xs tracking-[0.2em] uppercase font-medium mb-5" style={{ color: "#1A1A1A" }}>
              Business impact:
            </p>
            <ul className="space-y-2">
              {["Credential value realized.", "Adoption accelerated.", "Fraud prevented.", "Authority amplified."].map((item) => (
                <li key={item} className={`text-sm ${lightMuted}`}>{item}</li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

/* ─── MODULE 9 — COMMON COMBINATIONS ─── */
const combinations = [
  { situation: "Audit reveals positioning gap", path: "Module A → Module C" },
  { situation: "Need assessment + signal", path: "Modules B + C" },
  { situation: "Brand work before pilot", path: "Module C → Module D" },
  { situation: "Full installation", path: "90-Day Pilot" },
];

const CommonCombinations = () => (
  <section className="px-6 py-24" style={lightBg}>
    <div className="max-w-5xl mx-auto">
      <FadeIn>
        <SectionMarker numeral="IX" />
        <h2 className="font-serif text-3xl sm:text-4xl font-normal mt-4 mb-14" style={{ color: "#1A1A1A" }}>
          Common Combinations
        </h2>
      </FadeIn>
      <FadeIn delay={200}>
        <div className={`border ${lightBorder} rounded-sm overflow-hidden`}>
          <Table>
            <TableHeader>
              <TableRow className="border-b" style={{ borderColor: "#D4D0C8" }}>
                <TableHead className="text-xs tracking-[0.15em] uppercase font-medium" style={{ color: "#1A1A1A" }}>Situation</TableHead>
                <TableHead className="text-xs tracking-[0.15em] uppercase font-medium" style={{ color: "#1A1A1A" }}>Recommended Path</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {combinations.map((c) => (
                <TableRow key={c.situation} className="border-b last:border-b-0" style={{ borderColor: "#D4D0C8" }}>
                  <TableCell className={`text-sm ${lightMuted}`}>{c.situation}</TableCell>
                  <TableCell className="text-sm font-mono" style={{ color: "#1A1A1A" }}>{c.path}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </FadeIn>
    </div>
  </section>
);

/* ─── MODULE 10 — INVESTMENT POSITIONING ─── */
const InvestmentPositioning = () => (
  <section className="px-6 py-24">
    <div className="max-w-3xl mx-auto text-left">
      <FadeIn>
        <SectionMarker numeral="X" />
        <h2 className="font-serif text-3xl sm:text-4xl font-normal mt-4 mb-10 text-foreground">
          Investment Positioning
        </h2>
      </FadeIn>
      <FadeIn delay={200}>
        <div className="space-y-6 text-base text-foreground/80 leading-relaxed">
          <p><span className="text-foreground font-medium">Investment:</span> Custom proposal based on scope.</p>
          <div className="border-t border-border pt-6">
            <p className="text-foreground font-medium mb-3">Scope varies based on:</p>
            <ul className="space-y-2 ml-1">
              {["Existing brand strength", "Verification system complexity", "Digital integration requirements", "Market maturity"].map((item) => (
                <li key={item} className="flex items-start gap-3 text-foreground/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <p className="font-serif italic text-muted-foreground pt-4">
            Without signaling infrastructure, rigor does not travel. This module makes trust visible and portable.
          </p>
        </div>
      </FadeIn>
    </div>
  </section>
);

/* ─── MODULE 11 — FINAL CTA ─── */
const FinalCTA = ({ onRequest }: { onRequest: () => void }) => (
  <section className="px-6 py-28" style={{ backgroundColor: "#1A1A1A" }}>
    <div className="max-w-3xl mx-auto text-center">
      <FadeIn>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal mb-6" style={{ color: "#F4F4F4" }}>
          If the market cannot read the signal, the trust does not transfer.
        </h2>
        <p className="text-base mb-10" style={{ color: "#999" }}>
          Make authority unmistakable.
        </p>
      </FadeIn>
      <FadeIn delay={200}>
        <Button
          onClick={onRequest}
          className="btn-accent-gradient text-accent-foreground rounded-sm px-10 py-5 text-base tracking-wide font-medium h-auto"
        >
          Request Brand Infrastructure Advisory
        </Button>
        <p className="text-xs mt-6" style={{ color: "#666" }}>
          We respond within 2 business days.
        </p>
      </FadeIn>
    </div>
  </section>
);

/* ─── PAGE ─── */
const BrandInfrastructure = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);

  return (
    <>
      <Helmet>
        <title>Brand Infrastructure™ — Signaling, Verification & Market Legibility | Certainly</title>
        <meta name="description" content="Build the identity, narrative, and verification systems that allow your credential to carry weight in the market. Brand Infrastructure by Certainly." />
        <link rel="canonical" href="https://method.certainly.coop/brand-infrastructure" />
        <meta property="og:title" content="Brand Infrastructure™ — Signaling, Verification & Market Legibility | Certainly" />
        <meta property="og:description" content="Build the identity, narrative, and verification systems that allow your credential to carry weight in the market. Brand Infrastructure by Certainly." />
        <meta property="og:url" content="https://method.certainly.coop/brand-infrastructure" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Brand Infrastructure™ — Signaling, Verification & Market Legibility | Certainly" />
        <meta name="twitter:description" content="Build the identity, narrative, and verification systems that allow your credential to carry weight in the market. Brand Infrastructure by Certainly." />
      </Helmet>
      <SiteNav onRequestAssessment={openModal} />
      <main>
        <HeroModule onRequest={openModal} />
        <Divider />
        <SignalFailure />
        <Divider />
        <WhatThisAddresses />
        <WhatsIncluded onRequest={openModal} />
        <Divider />
        <DeliverablesSection />
        <HowThisWorks />
        <WhatMakesDifferent />
        <ExecutiveOutcomes />
        <CommonCombinations />
        <Divider />
        <InvestmentPositioning />
        <FinalCTA onRequest={openModal} />
      </main>
      <AssessmentModal open={modalOpen} onOpenChange={setModalOpen} />
    </>
  );
};

export default BrandInfrastructure;
