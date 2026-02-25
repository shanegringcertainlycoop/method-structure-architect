import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
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
const HeroModule = ({ onRequestAudit }: { onRequestAudit: () => void }) => (
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
          Level 3 · Module A
        </p>
      </FadeIn>
      <FadeIn delay={200}>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-tight mb-4" style={{ color: "#1A1A1A" }}>
          Benchmark Audit™
        </h1>
        <div className="w-full h-px mb-8" style={{ backgroundColor: "#D4D0C8" }} />
      </FadeIn>
      <FadeIn delay={400}>
        <div className="space-y-3 text-base sm:text-lg leading-relaxed mb-10 max-w-2xl mx-auto" style={{ color: "#444" }}>
          <p className="font-medium" style={{ color: "#1A1A1A" }}>
            Diagnostic foundation before capital deployment.
          </p>
          <p>
            Understand where you are, what's at risk, and what must be built first — before committing resources to a credential.
          </p>
        </div>
      </FadeIn>
      <FadeIn delay={600}>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={onRequestAudit}
            className="btn-accent-gradient text-accent-foreground rounded-sm px-8 py-5 text-base tracking-wide font-medium h-auto"
          >
            Request Benchmark Audit
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

/* ─── MODULE 2 — THE COST OF SKIPPING DIAGNOSIS ─── */
const CostOfSkipping = () => (
  <section className="px-6 py-24 max-w-6xl mx-auto">
    <FadeIn>
      <SectionMarker numeral="II" />
      <h2 className="font-serif text-3xl sm:text-4xl font-normal mt-4 mb-14 text-foreground">
        Most credential failures begin before the build.
      </h2>
    </FadeIn>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
      {/* Left — Risk Stack SVG */}
      <FadeIn delay={200}>
        <div className="pr-0 md:pr-12 md:border-r border-border pb-12 md:pb-0">
          <svg viewBox="0 0 280 400" className="w-full max-w-xs mx-auto" style={{ overflow: "visible" }}>
            {["No Audit", "Build in wrong order", "Operational strain", "Market confusion", "Reputational exposure"].map((label, i) => {
              const y = 30 + i * 80;
              const w = label.length * 8 + 36;
              const x = 140 - w / 2;
              const isFirst = i === 0;
              const isLast = i === 4;
              return (
                <g key={label}>
                  <rect x={x} y={y} width={w} height="36" rx="2"
                    fill={isFirst ? "rgba(200,165,75,0.15)" : isLast ? "rgba(220,80,60,0.12)" : "rgba(255,255,255,0.06)"}
                    stroke={isFirst ? "rgba(200,165,75,0.4)" : isLast ? "rgba(220,80,60,0.35)" : "rgba(255,255,255,0.12)"}
                    strokeWidth="1" />
                  <text x="140" y={y + 23} textAnchor="middle"
                    fill={isFirst ? "hsl(43 47% 54%)" : isLast ? "hsl(5 60% 55%)" : "hsl(40 6% 80%)"}
                    fontSize="11" fontFamily="Inter, sans-serif" letterSpacing="0.04em">
                    {label}
                  </text>
                  {i < 4 && (
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
          </svg>
        </div>
      </FadeIn>

      {/* Right — Copy */}
      <FadeIn delay={400}>
        <div className="pl-0 md:pl-12 pt-12 md:pt-0">
          <div className="space-y-4 text-base text-foreground/80 leading-relaxed">
            <p className="text-muted-foreground">Organizations considering certification often lack clarity on:</p>
            <ul className="space-y-2 ml-1">
              {[
                "What is truly ready",
                "Where the largest risks sit",
                "Which investments matter now",
                "What can wait",
                "Whether current authority supports credential issuance",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-foreground/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground pt-4">Without diagnosis, you risk:</p>
            <ul className="space-y-2 ml-1">
              {[
                "Building the wrong components first",
                "Overinvesting in areas that are already strong",
                "Underestimating operational strain",
                "Launching a credential that cannot withstand scrutiny",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-foreground/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="font-serif italic text-muted-foreground pt-6">
              Benchmark Audit™ provides structured, objective assessment — not optimism.
            </p>
          </div>
        </div>
      </FadeIn>
    </div>
  </section>
);

/* ─── MODULE 3 — WHAT WE EXAMINE ─── */
const dimensions = [
  {
    title: "Brand Positioning & Credential Clarity",
    questions: [
      "Does your market understand competence in your domain?",
      "Is your authority strong enough to issue credentials?",
      "Are you differentiated from adjacent standards?",
      "Would your credential carry weight — or create confusion?",
    ],
  },
  {
    title: "Curriculum Structure & Instructional Quality",
    questions: [
      "Is your method documented and transferable?",
      "Are learning objectives clear and measurable?",
      "Can education be separated from qualification?",
      "Is delivery consistent enough for credentialing at scale?",
    ],
  },
  {
    title: "Digital Systems & Infrastructure",
    questions: [
      "Can your systems manage intake, assessment, issuance, and renewal?",
      "Do integrations support lifecycle management?",
      "Is technical debt present?",
      "Is data integrity appropriate for credential stewardship?",
    ],
  },
  {
    title: "Sales & Enrollment Operations",
    questions: [
      "Is there a defined sales process for credential products?",
      "Is the value proposition distinct from training?",
      "Is pricing supported by market logic?",
      "Do enrollment workflows protect integrity?",
    ],
  },
  {
    title: "Operational Readiness & Resource Constraints",
    questions: [
      "Is team capacity sufficient?",
      "Are roles clearly defined?",
      "What founder dependencies exist?",
      "What is your risk tolerance for reputational exposure?",
    ],
  },
];

const WhatWeExamine = () => (
  <section className="px-6 py-24" style={{ backgroundColor: "#111111" }}>
    <div className="max-w-6xl mx-auto">
      <FadeIn>
        <SectionMarker numeral="III" />
        <h2 className="font-serif text-3xl sm:text-4xl font-normal mt-4 mb-6 text-foreground">
          Five Structural Dimensions
        </h2>
        <p className="text-base text-muted-foreground mb-14">What we examine.</p>
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
        {dimensions.map((d, i) => (
          <FadeIn key={d.title} delay={100 * i}>
            <div className={`p-6 h-full ${i < dimensions.length - 1 ? "md:border-r border-border" : ""}`}>
              <p className="text-xs tracking-[0.15em] uppercase text-accent mb-1">{i + 1}.</p>
              <h3 className="font-serif text-sm text-foreground mb-5 leading-snug">{d.title}</h3>
              <ul className="space-y-3">
                {d.questions.map((q) => (
                  <li key={q} className="text-xs text-muted-foreground leading-relaxed">{q}</li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}
      </div>
      <FadeIn delay={600}>
        <div className="mt-14 text-center">
          <p className="text-foreground font-medium text-sm">This is not theoretical modeling.</p>
          <p className="font-serif italic text-muted-foreground text-sm mt-1">It is applied structural review.</p>
        </div>
      </FadeIn>
    </div>
  </section>
);

/* ─── MODULE 4 — DELIVERABLES ─── */
const auditDeliverables = [
  { title: "Comprehensive Audit Report", desc: "Assessment across all five dimensions with current state analysis." },
  { title: "Gap Analysis & Prioritized Recommendations", desc: "Clear identification of what's missing, what's at risk, and what matters most — sequenced logically." },
  { title: "Risk Assessment & Readiness Scoring", desc: "Evaluation of reputational, operational, and financial exposure prior to launch." },
  { title: "Executive Summary Brief", desc: "Board-ready memo for stakeholder alignment." },
  { title: "Module Recommendation Map", desc: "Specific guidance on which Trust Mechanism Modules™ to engage next — and in what order." },
];

const Deliverables = () => (
  <section className="px-6 py-24" style={lightBg}>
    <div className="max-w-5xl mx-auto">
      <FadeIn>
        <SectionMarker numeral="IV" />
        <h2 className="font-serif text-3xl sm:text-4xl font-normal mt-4 mb-14" style={{ color: "#1A1A1A" }}>
          What You Receive
        </h2>
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {auditDeliverables.map((d, i) => (
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

/* ─── MODULE 5 — HOW IT WORKS ─── */
const HowItWorks = () => (
  <section className="px-6 py-24">
    <div className="max-w-5xl mx-auto">
      <FadeIn>
        <SectionMarker numeral="V" />
        <h2 className="font-serif text-3xl sm:text-4xl font-normal mt-4 mb-14 text-foreground">
          How It Works
        </h2>
      </FadeIn>

      {/* Timeline */}
      <FadeIn delay={200}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 mb-16">
          <div className="border border-border p-8">
            <p className="text-xs tracking-[0.2em] uppercase text-accent mb-4">Week 1 — Discovery</p>
            <ul className="space-y-2">
              {["Document review", "Leadership interviews", "Systems review", "Market signal analysis"].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-foreground/70">
                  <span className="text-accent mt-0.5">—</span>{item}
                </li>
              ))}
            </ul>
          </div>
          <div className="border border-border border-l-0 md:border-l-0 p-8">
            <p className="text-xs tracking-[0.2em] uppercase text-accent mb-4">Week 2 — Synthesis</p>
            <ul className="space-y-2">
              {["Five-dimension scoring", "Risk mapping", "Sequencing logic", "Executive brief preparation"].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-foreground/70">
                  <span className="text-accent mt-0.5">—</span>{item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </FadeIn>

      {/* Roles */}
      <FadeIn delay={400}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          <div className="border border-border p-8">
            <p className="text-xs tracking-[0.2em] uppercase text-foreground/60 mb-3">Your Time Commitment</p>
            <p className="text-sm text-foreground/80">2–4 hours total from leadership.</p>
          </div>
          <div className="border border-border md:border-l-0 p-8">
            <p className="text-xs tracking-[0.2em] uppercase text-foreground/60 mb-3">Your Role</p>
            <ul className="space-y-1.5">
              {["Provide current materials", "Share constraints honestly", "Make stakeholders available"].map((item) => (
                <li key={item} className="text-sm text-foreground/70">{item}</li>
              ))}
            </ul>
          </div>
          <div className="border border-border md:border-l-0 p-8">
            <p className="text-xs tracking-[0.2em] uppercase text-foreground/60 mb-3">Our Role</p>
            <ul className="space-y-1.5">
              {["Conduct systematic assessment", "Synthesize structural risks", "Deliver clear decision guidance"].map((item) => (
                <li key={item} className="text-sm text-foreground/70">{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={600}>
        <p className="font-serif italic text-muted-foreground text-sm mt-10">
          This is a focused diagnostic — not open-ended advisory.
        </p>
      </FadeIn>
    </div>
  </section>
);

/* ─── MODULE 6 — COMMON PATHS AFTER AUDIT ─── */
const paths = [
  { id: "1", title: "Proceed to Pilot", route: "Audit → 90-Day Pilot Installation™", desc: "When readiness is confirmed." },
  { id: "2", title: "Strengthen Components", route: "Audit → Module B and/or C", desc: "When targeted reinforcement is required." },
  { id: "3", title: "Reinforce Foundations", route: "Audit → Level 1 (Method Capture™)", desc: "When the method itself requires stabilization." },
  { id: "4", title: "Pause or Pivot", route: "Audit → Alternative trust mechanisms", desc: "When certification is not the right path." },
];

const CommonPaths = () => (
  <section className="px-6 py-24" style={lightBg}>
    <div className="max-w-5xl mx-auto">
      <FadeIn>
        <SectionMarker numeral="VI" />
        <h2 className="font-serif text-3xl sm:text-4xl font-normal mt-4 mb-14" style={{ color: "#1A1A1A" }}>
          Common Paths After Audit
        </h2>
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-0">
        {paths.map((p, i) => (
          <FadeIn key={p.id} delay={100 * i}>
            <div className={`p-8 border ${lightBorder} h-full flex flex-col`}>
              <p className="text-xs tracking-[0.2em] uppercase mb-2" style={{ color: "hsl(43 47% 44%)" }}>Path {p.id}</p>
              <h3 className="font-serif text-lg mb-2" style={{ color: "#1A1A1A" }}>{p.title}</h3>
              <p className={`text-xs ${lightMuted} mb-3 font-mono`}>{p.route}</p>
              <p className={`text-sm ${lightMuted} leading-relaxed mt-auto`}>{p.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
      <FadeIn delay={500}>
        <div className="mt-10 text-center">
          <p className="text-sm font-medium" style={{ color: "#1A1A1A" }}>All four outcomes are considered successful.</p>
          <p className={`text-sm ${lightMuted} mt-1 font-serif italic`}>
            The objective is informed decision-making — not predetermined expansion.
          </p>
        </div>
      </FadeIn>
    </div>
  </section>
);

/* ─── MODULE 7 — WHAT MAKES THIS DIFFERENT ─── */
const WhatMakesThisDifferent = () => (
  <section className="px-6 py-24">
    <div className="max-w-3xl mx-auto text-center">
      <FadeIn>
        <SectionMarker numeral="VII" />
        <h2 className="font-serif text-3xl sm:text-4xl font-normal mt-4 mb-4 text-foreground">
          Most audits surface everything.
        </h2>
        <p className="text-base text-muted-foreground mb-10">
          Benchmark Audit™ prioritizes what matters.
        </p>
      </FadeIn>
      <FadeIn delay={200}>
        <p className="text-base text-foreground/80 mb-6">We tell you:</p>
        <ul className="space-y-3 text-left max-w-md mx-auto mb-10">
          {[
            "What must be addressed first",
            "What can wait",
            "What can be worked around",
            "What not to build",
            "What success realistically requires",
          ].map((item) => (
            <li key={item} className="flex items-center gap-3 text-sm text-foreground/80">
              <Check className="w-4 h-4 text-accent shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </FadeIn>
      <FadeIn delay={400}>
        <p className="text-foreground font-medium text-sm">This is strategic sequencing — not a checklist.</p>
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
              By the end of Benchmark Audit™, you will have:
            </p>
            <ul className="space-y-3">
              {[
                "Clear picture of readiness",
                "Prioritized action sequence",
                "Stakeholder alignment",
                "Risk mitigation strategy",
                "Evidence-based next decision",
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
              {["Reduced waste.", "Faster progress.", "Lower reputational risk.", "Higher confidence."].map((item) => (
                <li key={item} className={`text-sm ${lightMuted}`}>{item}</li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

/* ─── MODULE 9 — INVESTMENT & CREDIT POLICY ─── */
const InvestmentPolicy = () => (
  <section className="px-6 py-24">
    <div className="max-w-3xl mx-auto text-center">
      <FadeIn>
        <SectionMarker numeral="IX" />
        <h2 className="font-serif text-3xl sm:text-4xl font-normal mt-4 mb-10 text-foreground">
          Investment &amp; Credit Policy
        </h2>
      </FadeIn>
      <FadeIn delay={200}>
        <div className="space-y-6 text-base text-foreground/80 leading-relaxed">
          <p><span className="text-foreground font-medium">Investment:</span> Custom proposal.</p>
          <div className="border-t border-border pt-6">
            <p className="text-foreground font-medium mb-3">Credit Policy:</p>
            <p>Full fee credited toward 90-Day Pilot Installation™ if engaged within 90 days.</p>
            <p className="mt-2 text-muted-foreground text-sm">
              Partial credit may apply to Modules B or C depending on scope.
            </p>
          </div>
          <p className="font-serif italic text-muted-foreground pt-4">
            Even if you choose not to build, the audit strengthens operational clarity and trust strategy.
          </p>
        </div>
      </FadeIn>
    </div>
  </section>
);

/* ─── MODULE 10 — FINAL CTA ─── */
const FinalCTA = ({ onRequestAudit }: { onRequestAudit: () => void }) => (
  <section className="px-6 py-28" style={{ backgroundColor: "#1A1A1A" }}>
    <div className="max-w-3xl mx-auto text-center">
      <FadeIn>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal mb-6" style={{ color: "#F4F4F4" }}>
          Diagnose before you build.
        </h2>
        <p className="text-base mb-10" style={{ color: "#999" }}>
          Clarity reduces waste. Structure reduces risk.
        </p>
      </FadeIn>
      <FadeIn delay={200}>
        <Button
          onClick={onRequestAudit}
          className="btn-accent-gradient text-accent-foreground rounded-sm px-10 py-5 text-base tracking-wide font-medium h-auto"
        >
          Request Benchmark Audit
        </Button>
        <p className="text-xs mt-6" style={{ color: "#666" }}>
          We respond within 2 business days.
        </p>
      </FadeIn>
    </div>
  </section>
);

/* ─── PAGE ─── */
const BenchmarkAudit = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);

  return (
    <>
      <Helmet>
        <title>Benchmark Audit™ — Diagnostic Before Capital Deployment | Certainly</title>
        <meta name="description" content="Structured readiness assessment across five dimensions before committing resources to a credential. Benchmark Audit by Certainly." />
      </Helmet>
      <SiteNav onRequestAssessment={openModal} />
      <main>
        <HeroModule onRequestAudit={openModal} />
        <Divider />
        <CostOfSkipping />
        <Divider />
        <WhatWeExamine />
        <Deliverables />
        <Divider />
        <HowItWorks />
        <CommonPaths />
        <Divider />
        <WhatMakesThisDifferent />
        <ExecutiveOutcomes />
        <InvestmentPolicy />
        <FinalCTA onRequestAudit={openModal} />
      </main>
      <AssessmentModal open={modalOpen} onOpenChange={setModalOpen} />
    </>
  );
};

export default BenchmarkAudit;
