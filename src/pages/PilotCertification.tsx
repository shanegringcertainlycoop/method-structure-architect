import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Square } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import AssessmentModal from "@/components/AssessmentModal";
import SiteNav from "@/components/SiteNav";

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
          Level 3 · Module D
        </p>
      </FadeIn>
      <FadeIn delay={200}>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-tight mb-4" style={{ color: "#1A1A1A" }}>
          120-Day Pilot Certification™
        </h1>
        <div className="w-full h-px mb-8" style={{ backgroundColor: "#D4D0C8" }} />
      </FadeIn>
      <FadeIn delay={400}>
        <div className="space-y-3 text-base sm:text-lg leading-relaxed mb-10 max-w-2xl mx-auto" style={{ color: "#444" }}>
          <p className="font-medium" style={{ color: "#1A1A1A" }}>
            Launch a public, first-party credential — deliberately, credibly, and without overbuilding.
          </p>
          <div className="space-y-1 pt-2">
            <p>Not a concept.</p>
            <p>Not a slide deck.</p>
            <p className="font-medium" style={{ color: "#1A1A1A" }}>A live pilot with real participants.</p>
          </div>
        </div>
      </FadeIn>
      <FadeIn delay={600}>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={onRequest}
            className="btn-accent-gradient text-accent-foreground rounded-sm px-8 py-5 text-base tracking-wide font-medium h-auto"
          >
            Request Pilot Advisory
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

/* ─── MODULE 2 — WHY A PILOT ─── */
const WhyAPilot = () => (
  <section className="px-6 py-24 max-w-6xl mx-auto">
    <FadeIn>
      <SectionMarker numeral="II" />
      <h2 className="font-serif text-3xl sm:text-4xl font-normal mt-4 mb-14 text-foreground">
        Release deliberately. Validate publicly.
      </h2>
    </FadeIn>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
      {/* Left — Risk Diagram SVG */}
      <FadeIn delay={200}>
        <div className="pr-0 md:pr-12 md:border-r border-border pb-12 md:pb-0">
          <svg viewBox="0 0 360 420" className="w-full max-w-sm mx-auto" style={{ overflow: "visible" }}>
            {/* Big Launch path (left) */}
            {[
              { label: "Big Launch", y: 20 },
              { label: "High Exposure", y: 110 },
              { label: "Unproven Systems", y: 200 },
              { label: "Reputational Risk", y: 290 },
            ].map((item, i) => {
              const w = item.label.length * 8 + 32;
              const cx = 100;
              const x = cx - w / 2;
              return (
                <g key={item.label}>
                  <rect x={x} y={item.y} width={w} height="36" rx="2"
                    fill="rgba(220,80,60,0.10)" stroke="rgba(220,80,60,0.30)" strokeWidth="1" />
                  <text x={cx} y={item.y + 23} textAnchor="middle"
                    fill="hsl(5 60% 55%)" fontSize="11" fontFamily="Inter, sans-serif" letterSpacing="0.03em">
                    {item.label}
                  </text>
                  {i < 3 && (
                    <>
                      <line x1={cx} y1={item.y + 36} x2={cx} y2={item.y + 86}
                        stroke="rgba(220,80,60,0.20)" strokeWidth="1" />
                      <polygon points={`${cx - 4},${item.y + 86} ${cx},${item.y + 92} ${cx + 4},${item.y + 86}`}
                        fill="rgba(220,80,60,0.20)" />
                    </>
                  )}
                </g>
              );
            })}

            {/* vs. label */}
            <text x="180" y="195" textAnchor="middle"
              fill="rgba(255,255,255,0.35)" fontSize="13" fontFamily="Inter, sans-serif" fontWeight="600" letterSpacing="0.1em">
              vs.
            </text>

            {/* Pilot path (right) */}
            {[
              { label: "Pilot", y: 20 },
              { label: "Controlled Scope", y: 110 },
              { label: "Measured Exposure", y: 200 },
              { label: "Validated Signal", y: 290 },
            ].map((item, i) => {
              const w = item.label.length * 8 + 32;
              const cx = 260;
              const x = cx - w / 2;
              return (
                <g key={item.label}>
                  <rect x={x} y={item.y} width={w} height="36" rx="2"
                    fill="rgba(200,165,75,0.12)" stroke="rgba(200,165,75,0.35)" strokeWidth="1" />
                  <text x={cx} y={item.y + 23} textAnchor="middle"
                    fill="hsl(43 47% 54%)" fontSize="11" fontFamily="Inter, sans-serif" letterSpacing="0.03em">
                    {item.label}
                  </text>
                  {i < 3 && (
                    <>
                      <line x1={cx} y1={item.y + 36} x2={cx} y2={item.y + 86}
                        stroke="rgba(200,165,75,0.25)" strokeWidth="1" />
                      <polygon points={`${cx - 4},${item.y + 86} ${cx},${item.y + 92} ${cx + 4},${item.y + 86}`}
                        fill="rgba(200,165,75,0.25)" />
                    </>
                  )}
                </g>
              );
            })}
          </svg>
        </div>
      </FadeIn>

      {/* Right — Copy */}
      <FadeIn delay={400}>
        <div className="pl-0 md:pl-12 pt-12 md:pt-0">
          <div className="space-y-4 text-base text-foreground/80 leading-relaxed">
            <p className="text-muted-foreground">Full-scale certification launches create:</p>
            <ul className="space-y-2 ml-1">
              {["Operational drag", "Overbuilt infrastructure", "Unvalidated pricing", "Public claims without proof", "Reputational exposure"].map((item) => (
                <li key={item} className="flex items-start gap-3 text-foreground/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground pt-4">A 120-Day Pilot Certification™ creates:</p>
            <ul className="space-y-2 ml-1">
              {["Real credential holders", "Real market feedback", "Real assessment enforcement", "Real economic data"].map((item) => (
                <li key={item} className="flex items-start gap-3 text-foreground/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="font-serif italic text-muted-foreground pt-4">
              Before scaling.
            </p>
          </div>
        </div>
      </FadeIn>
    </div>
  </section>
);

/* ─── MODULE 3 — WHO THIS IS FOR ─── */
const fitItems = [
  "You have a proven method in active use",
  "You want a first-party credential you own",
  "You're ready for measured public release",
  "You control scope and claims",
  "You can commit ~5 hours/week",
  "You want evidence before scaling",
];
const notFitItems = [
  "You're still deciding whether certification belongs in your business",
  "You want internal-only certificates",
  "You cannot issue a credential publicly",
  "You lack IP control",
  "You cannot commit to weekly collaboration",
  "You want open-ended advisory without launch outcome",
];

const WhoThisIsFor = () => (
  <section className="px-6 py-24" style={lightBg}>
    <div className="max-w-5xl mx-auto">
      <FadeIn>
        <SectionMarker numeral="III" />
        <h2 className="font-serif text-3xl sm:text-4xl font-normal mt-4 mb-14" style={{ color: "#1A1A1A" }}>
          Who This Is For
        </h2>
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <FadeIn delay={100}>
          <div className={`p-8 border ${lightBorder} h-full`}>
            <h3 className="text-xs tracking-[0.2em] uppercase font-sans font-medium mb-6" style={{ color: "#1A1A1A" }}>
              You're a strong fit if:
            </h3>
            <ul className="space-y-3">
              {fitItems.map((item) => (
                <li key={item} className={`text-sm ${lightMuted} flex items-start gap-3`}>
                  <Square className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "hsl(43 47% 44%)" }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
        <FadeIn delay={200}>
          <div className={`p-8 border ${lightBorder} md:border-l-0 h-full`}>
            <h3 className="text-xs tracking-[0.2em] uppercase font-sans font-medium mb-6" style={{ color: "#1A1A1A" }}>
              This is not for you if:
            </h3>
            <ul className="space-y-3">
              {notFitItems.map((item) => (
                <li key={item} className={`text-sm ${lightMuted} flex items-start gap-3`}>
                  <Square className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "hsl(5 60% 55%)" }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </div>
      <FadeIn delay={300}>
        <p className="text-sm font-medium mt-10" style={{ color: "#1A1A1A" }}>
          This is execution with exposure.
        </p>
      </FadeIn>
    </div>
  </section>
);

/* ─── MODULE 4 — THE 120-DAY STRUCTURE ─── */
const phases = [
  {
    phase: 1,
    title: "Benchmark Audit™",
    weeks: "Weeks 1–3",
    desc: "Establish readiness and identify launch-critical risks.",
    items: ["Brand, curriculum, digital, and sales review", "Gap analysis", "Executive release-readiness brief"],
  },
  {
    phase: 2,
    title: "Certification Architecture",
    weeks: "Weeks 4–7",
    desc: "Design a structure that can withstand public scrutiny.",
    items: ["Market & competitor positioning", "Audience definition", "Certification Canvas™ (12 structural components finalized)", "Assessment logic & pass/fail criteria", "Curriculum alignment for teachability"],
  },
  {
    phase: 3,
    title: "Revenue & Signal Infrastructure",
    weeks: "Weeks 8–10",
    desc: "Define the economic and credibility model of the Founding Cohort.",
    items: ["Pilot pricing structure", "Revenue thresholds", "Credential issuance framework", "Public-facing standard document", "Verification logic (badge / registry design)"],
  },
  {
    phase: 4,
    title: "Controlled Public Release",
    weeks: "Weeks 11–16",
    desc: "Launch an intentional Founding Cohort.",
    items: ["Cohort size constraints", "Enrollment mechanics", "Assessment enforcement", "Credential issuance", "Market signal capture"],
  },
];

const TheStructure = () => (
  <section className="px-6 py-24" style={lightBg}>
    <div className="max-w-6xl mx-auto">
      <FadeIn>
        <SectionMarker numeral="IV" />
        <h2 className="font-serif text-3xl sm:text-4xl font-normal mt-4 mb-14" style={{ color: "#1A1A1A" }}>
          The 120-Day Structure
        </h2>
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {phases.map((p, i) => (
          <FadeIn key={p.phase} delay={100 * i}>
            <div className={`p-8 border ${lightBorder} h-full ${i > 0 ? "lg:border-l-0" : ""} ${i >= 2 ? "md:border-t-0 lg:border-t" : ""} ${i === 1 ? "md:border-l-0 lg:border-l-0" : ""} ${i === 3 ? "md:border-l-0" : ""}`}>
              <p className="text-xs tracking-[0.15em] uppercase font-medium mb-1" style={{ color: "hsl(43 47% 44%)" }}>
                {p.weeks}
              </p>
              <h3 className="text-xs tracking-[0.2em] uppercase font-sans font-medium mb-2" style={{ color: "#1A1A1A" }}>
                Phase {p.phase} — {p.title}
              </h3>
              <p className={`text-sm ${lightMuted} mb-4`}>{p.desc}</p>
              <ul className="space-y-1.5">
                {p.items.map((item) => (
                  <li key={item} className={`text-sm ${lightMuted} flex items-start gap-2`}>
                    <span className="text-[hsl(43_47%_44%)] mt-0.5">—</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}
      </div>
      <FadeIn delay={500}>
        <div className="mt-10 space-y-1">
          <p className="text-sm font-medium" style={{ color: "#1A1A1A" }}>This is not theoretical design.</p>
          <p className="font-serif italic text-sm" style={{ color: "#666" }}>It is public installation.</p>
        </div>
      </FadeIn>
    </div>
  </section>
);

/* ─── MODULE 5 — WHAT IS ACTUALLY BUILT ─── */
const builtCategories = [
  {
    title: "Core Strategy & Structure",
    items: ["Founding Cohort Definition Brief", "Public-Facing Certification Standard", "Assessment & Pass/Fail Framework", "Credential Holder Rights & Usage Rules", "Pilot Pricing & Success Metrics", "Credential Issuance & Verification System", "Post-Pilot Decision Memo"],
  },
  {
    title: "Brand & Market Presence",
    subtitle: "(If Needed)",
    items: ["Credential identity system", "Positioning & messaging guide", "Badge & certificate design", "Public registry framework"],
  },
  {
    title: "Launch Infrastructure",
    items: ["Enrollment or invitation page", "Waitlist assets", "Email workflows (enrollment & credentialing)", "Launch communications", "Partner outreach assets"],
  },
  {
    title: "Governance & Operations",
    items: ["Standards enforcement policies", "Appeals framework", "Renewal logic (if applicable)", "Staff training & handoff documentation"],
  },
];

const WhatIsBuilt = () => (
  <section className="px-6 py-24">
    <div className="max-w-5xl mx-auto">
      <FadeIn>
        <SectionMarker numeral="V" />
        <h2 className="font-serif text-3xl sm:text-4xl font-normal mt-4 mb-14 text-foreground">
          What Is Actually Built
        </h2>
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {builtCategories.map((cat, i) => (
          <FadeIn key={cat.title} delay={100 * i}>
            <div className={`p-8 border border-border h-full`}>
              <h3 className="text-xs tracking-[0.2em] uppercase font-sans font-medium text-foreground mb-1">
                {cat.title}
              </h3>
              {cat.subtitle && (
                <p className="text-xs text-muted-foreground mb-3">{cat.subtitle}</p>
              )}
              {!cat.subtitle && <div className="mb-3" />}
              <ul className="space-y-1.5">
                {cat.items.map((item) => (
                  <li key={item} className="text-sm text-foreground/70 flex items-start gap-2">
                    <span className="text-accent mt-0.5">—</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}
      </div>
      <FadeIn delay={500}>
        <div className="mt-10 space-y-2">
          <p className="text-sm text-foreground font-medium">The program flexes to your current state.</p>
          <p className="text-sm text-muted-foreground">We do not rebuild what is already strong.</p>
          <p className="font-serif italic text-sm text-muted-foreground">We install what is required for credibility.</p>
        </div>
      </FadeIn>
    </div>
  </section>
);

/* ─── MODULE 6 — CLIENT COMMITMENT ─── */
const commitments = [
  { key: "Time Commitment", value: "~5 hours/week" },
  { key: "Leadership Participation", value: "Required" },
  { key: "Decision Authority", value: "Required" },
  { key: "Responsiveness", value: "Weekly" },
  { key: "IP Ownership", value: "Fully retained by you" },
];

const ClientCommitment = () => (
  <section className="px-6 py-24" style={{ backgroundColor: "#111111" }}>
    <div className="max-w-3xl mx-auto text-center">
      <FadeIn>
        <SectionMarker numeral="VI" />
        <h2 className="font-serif text-3xl sm:text-4xl font-normal mt-4 mb-4 text-foreground">
          Client Commitment
        </h2>
        <p className="text-base text-muted-foreground mb-14">
          This is collaborative execution.
        </p>
      </FadeIn>
      <FadeIn delay={200}>
        <div className="space-y-6 max-w-md mx-auto">
          {commitments.map((c) => (
            <div key={c.key} className="flex justify-between items-baseline border-b border-border pb-3">
              <span className="text-xs tracking-[0.15em] uppercase text-foreground/60">{c.key}</span>
              <span className="text-sm text-foreground font-medium">{c.value}</span>
            </div>
          ))}
        </div>
      </FadeIn>
      <FadeIn delay={400}>
        <p className="font-serif italic text-muted-foreground text-sm mt-10">
          Momentum depends on decisiveness.
        </p>
      </FadeIn>
    </div>
  </section>
);

/* ─── MODULE 7 — EXECUTIVE OUTCOMES ─── */
const ExecutiveOutcomes = () => (
  <section className="px-6 py-24" style={lightBg}>
    <div className="max-w-5xl mx-auto">
      <FadeIn>
        <SectionMarker numeral="VII" />
        <h2 className="font-serif text-3xl sm:text-4xl font-normal mt-4 mb-14" style={{ color: "#1A1A1A" }}>
          Executive Outcomes
        </h2>
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <FadeIn delay={200}>
          <div>
            <p className="text-xs tracking-[0.2em] uppercase font-medium mb-5" style={{ color: "#1A1A1A" }}>
              By Day 120, you will have:
            </p>
            <ul className="space-y-3">
              {[
                "A live, public Founding Cohort",
                "Real credential holders",
                "Applied assessments in action",
                "Market pricing signal",
                "Reputational exposure tested under control",
                "Clear scale / refine / stop decision memo",
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
              Business Impact:
            </p>
            <ul className="space-y-2">
              {["Authority validated.", "Risk contained.", "Momentum unlocked."].map((item) => (
                <li key={item} className={`text-sm ${lightMuted}`}>{item}</li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

/* ─── MODULE 8 — INVESTMENT ─── */
const Investment = () => (
  <section className="px-6 py-24" style={lightBg}>
    <div className="max-w-4xl mx-auto text-center">
      <FadeIn>
        <SectionMarker numeral="VIII" />
        <h2 className="font-serif text-3xl sm:text-4xl font-normal mt-4 mb-4" style={{ color: "#1A1A1A" }}>
          Investment
        </h2>
        <p className={`text-sm ${lightMuted} mb-2`}>Fixed Engagement</p>
        <p className="text-2xl font-serif font-normal mb-1" style={{ color: "#1A1A1A" }}>Starting at $20,000</p>
        <p className={`text-sm ${lightMuted} mb-14`}>Timeline: 120 Days (Fixed)</p>
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 text-left max-w-3xl mx-auto">
        <FadeIn delay={200}>
          <div className={`p-8 border ${lightBorder} h-full`}>
            <h3 className="text-xs tracking-[0.2em] uppercase font-sans font-medium mb-4" style={{ color: "#1A1A1A" }}>
              Includes
            </h3>
            <ul className="space-y-2">
              {["Benchmark Audit™", "Strategy foundations", "Brand & verification build (as required)", "Launch execution", "Weekly advisory", "Post-pilot decision memo"].map((item) => (
                <li key={item} className={`text-sm ${lightMuted} flex items-start gap-2`}>
                  <span className="text-[hsl(43_47%_44%)] mt-0.5">—</span>{item}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
        <FadeIn delay={300}>
          <div className={`p-8 border ${lightBorder} md:border-l-0 h-full`}>
            <h3 className="text-xs tracking-[0.2em] uppercase font-sans font-medium mb-4" style={{ color: "#1A1A1A" }}>
              Not Included
            </h3>
            <ul className="space-y-2">
              {["Ongoing operations (see Level 4)", "Platform subscription fees", "Paid media spend", "Legal review"].map((item) => (
                <li key={item} className={`text-sm ${lightMuted} flex items-start gap-2`}>
                  <span className="text-[hsl(5_60%_55%)] mt-0.5">—</span>{item}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </div>
      <FadeIn delay={400}>
        <p className="font-serif italic text-sm mt-10" style={{ color: "#666" }}>
          This is a defined build window.
        </p>
      </FadeIn>
    </div>
  </section>
);

/* ─── MODULE 9 — STRATEGIC POSITIONING ─── */
const StrategicPositioning = () => (
  <section className="px-6 py-24">
    <div className="max-w-3xl mx-auto text-left">
      <FadeIn>
        <SectionMarker numeral="IX" />
        <h2 className="font-serif text-3xl sm:text-4xl font-normal mt-4 mb-10 text-foreground">
          The pilot validates. Stewardship sustains.
        </h2>
      </FadeIn>
      <FadeIn delay={200}>
        <div className="space-y-4 text-base text-foreground/80 leading-relaxed">
          <p className="text-muted-foreground">After the 120-Day Pilot, most organizations:</p>
          <ul className="space-y-2 ml-1">
            {["Scale the credential", "Refine based on pilot data", "Pivot intentionally"].map((item) => (
              <li key={item} className="flex items-start gap-3 text-foreground/80">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground pt-4">
            If you scale, Level 4 ensures the credential does not degrade.
          </p>
          <div className="pt-4 space-y-1">
            <p className="text-foreground font-medium text-sm">The pilot creates evidence.</p>
            <p className="font-serif italic text-muted-foreground text-sm">Stewardship protects it.</p>
          </div>
        </div>
      </FadeIn>
    </div>
  </section>
);

/* ─── MODULE 10 — FINAL CTA ─── */
const FinalCTA = ({ onRequest }: { onRequest: () => void }) => (
  <section className="px-6 py-28" style={{ backgroundColor: "#1A1A1A" }}>
    <div className="max-w-3xl mx-auto text-center">
      <FadeIn>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal mb-6" style={{ color: "#F4F4F4" }}>
          Install deliberately.
        </h2>
        <div className="space-y-1 mb-10">
          <p className="text-base" style={{ color: "#999" }}>Release carefully.</p>
          <p className="text-base" style={{ color: "#999" }}>Scale confidently.</p>
        </div>
      </FadeIn>
      <FadeIn delay={200}>
        <Button
          onClick={onRequest}
          className="btn-accent-gradient text-accent-foreground rounded-sm px-10 py-5 text-base tracking-wide font-medium h-auto"
        >
          Request Pilot Advisory
        </Button>
        <p className="text-xs mt-6" style={{ color: "#666" }}>
          We respond within 2 business days.
        </p>
      </FadeIn>
    </div>
  </section>
);

/* ─── PAGE ─── */
const PilotCertification = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);

  return (
    <>
      <Helmet>
        <title>120-Day Pilot Certification™ — Launch a Public Credential | Certainly</title>
        <meta name="description" content="Launch a public, first-party credential deliberately, credibly, and without overbuilding. 120-Day Pilot Certification by Certainly." />
        <link rel="canonical" href="https://method.certainly.coop/120-day-pilot" />
        <meta property="og:title" content="120-Day Pilot Certification™ — Launch a Public Credential | Certainly" />
        <meta property="og:description" content="Launch a public, first-party credential deliberately, credibly, and without overbuilding. 120-Day Pilot Certification by Certainly." />
        <meta property="og:url" content="https://method.certainly.coop/120-day-pilot" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="120-Day Pilot Certification™ — Launch a Public Credential | Certainly" />
        <meta name="twitter:description" content="Launch a public, first-party credential deliberately, credibly, and without overbuilding. 120-Day Pilot Certification by Certainly." />
      </Helmet>
      <SiteNav onRequestAssessment={openModal} />
      <main>
        <HeroModule onRequest={openModal} />
        <Divider />
        <WhyAPilot />
        <Divider />
        <WhoThisIsFor />
        <TheStructure />
        <Divider />
        <WhatIsBuilt />
        <ClientCommitment />
        <ExecutiveOutcomes />
        <Investment />
        <Divider />
        <StrategicPositioning />
        <FinalCTA onRequest={openModal} />
      </main>
      <AssessmentModal open={modalOpen} onOpenChange={setModalOpen} />
    </>
  );
};

export default PilotCertification;
