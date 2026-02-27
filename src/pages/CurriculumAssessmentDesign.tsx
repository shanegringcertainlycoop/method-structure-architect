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
          Level 3 · Module B
        </p>
      </FadeIn>
      <FadeIn delay={200}>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-tight mb-4" style={{ color: "#1A1A1A" }}>
          Curriculum &amp; Assessment Design™
        </h1>
        <div className="w-full h-px mb-8" style={{ backgroundColor: "#D4D0C8" }} />
      </FadeIn>
      <FadeIn delay={400}>
        <div className="space-y-3 text-base sm:text-lg leading-relaxed mb-10 max-w-2xl mx-auto" style={{ color: "#444" }}>
          <p className="font-medium" style={{ color: "#1A1A1A" }}>
            Define competence. Enforce standards. Protect the credential.
          </p>
          <p>
            Design how competence is defined, taught, and verified — so your credential means something real.
          </p>
        </div>
      </FadeIn>
      <FadeIn delay={600}>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={onRequest}
            className="btn-accent-gradient text-accent-foreground rounded-sm px-8 py-5 text-base tracking-wide font-medium h-auto"
          >
            Request Assessment Design Advisory
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

/* ─── MODULE 2 — THE CORE PROBLEM ─── */
const CoreProblem = () => (
  <section className="px-6 py-24 max-w-6xl mx-auto">
    <FadeIn>
      <SectionMarker numeral="II" />
      <h2 className="font-serif text-3xl sm:text-4xl font-normal mt-4 mb-14 text-foreground">
        Competence ≠ Completion.
      </h2>
    </FadeIn>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
      {/* Left — Comparison SVG */}
      <FadeIn delay={200}>
        <div className="pr-0 md:pr-12 md:border-r border-border pb-12 md:pb-0">
          <svg viewBox="0 0 420 220" className="w-full max-w-sm mx-auto" style={{ overflow: "visible" }}>
            {/* Completion box */}
            <rect x="10" y="10" width="140" height="150" rx="3" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
            <text x="80" y="36" textAnchor="middle" fill="hsl(40 6% 80%)" fontSize="12" fontFamily="Playfair Display, serif" fontWeight="500">Completion</text>
            <line x1="30" y1="48" x2="130" y2="48" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
            {["Attended", "Submitted assignments", "Participated"].map((t, i) => (
              <g key={t}>
                <text x="35" y={72 + i * 30} fill="hsl(43 47% 54%)" fontSize="10" fontFamily="Inter, sans-serif">✓</text>
                <text x="50" y={72 + i * 30} fill="hsl(40 6% 70%)" fontSize="10" fontFamily="Inter, sans-serif">{t}</text>
              </g>
            ))}

            {/* ≠ symbol */}
            <text x="210" y="100" textAnchor="middle" fill="hsl(5 60% 55%)" fontSize="36" fontFamily="Inter, sans-serif" fontWeight="700">≠</text>

            {/* Competence box */}
            <rect x="270" y="10" width="140" height="150" rx="3" fill="rgba(200,165,75,0.08)" stroke="rgba(200,165,75,0.3)" strokeWidth="1" />
            <text x="340" y="36" textAnchor="middle" fill="hsl(43 47% 54%)" fontSize="12" fontFamily="Playfair Display, serif" fontWeight="500">Competence</text>
            <line x1="290" y1="48" x2="390" y2="48" stroke="rgba(200,165,75,0.15)" strokeWidth="1" />
            {["Can perform", "Can decide", "Can execute independently"].map((t, i) => (
              <g key={t}>
                <text x="295" y={72 + i * 30} fill="hsl(43 47% 54%)" fontSize="10" fontFamily="Inter, sans-serif">✓</text>
                <text x="310" y={72 + i * 30} fill="hsl(40 6% 80%)" fontSize="10" fontFamily="Inter, sans-serif">{t}</text>
              </g>
            ))}
          </svg>
        </div>
      </FadeIn>

      {/* Right — Copy */}
      <FadeIn delay={400}>
        <div className="pl-0 md:pl-12 pt-12 md:pt-0">
          <div className="space-y-4 text-base text-foreground/80 leading-relaxed">
            <p className="text-muted-foreground">Most programs measure participation.</p>
            <p className="text-foreground font-medium">Credentials must verify capability.</p>
            <p className="text-muted-foreground pt-2">When pass/fail decisions rely on intuition, you risk:</p>
            <ul className="space-y-2 ml-1">
              {[
                "Inconsistent credentialing",
                "Credential inflation",
                "Reputational exposure",
                "Founder dependency",
                "Standards erosion",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-foreground/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="font-serif italic text-muted-foreground pt-6">
              Curriculum &amp; Assessment Design™ separates education from qualification — and builds defensible systems that verify real-world capability.
            </p>
          </div>
        </div>
      </FadeIn>
    </div>
  </section>
);

/* ─── MODULE 3 — WHY THIS MATTERS FOR TRUST ─── */
const WhyThisMatters = () => (
  <section className="px-6 py-24" style={{ backgroundColor: "#111111" }}>
    <div className="max-w-3xl mx-auto text-left">
      <FadeIn>
        <SectionMarker numeral="III" />
        <h2 className="font-serif text-3xl sm:text-4xl font-normal mt-4 mb-10 text-foreground">
          Assessment is how you enforce your promise.
        </h2>
      </FadeIn>
      <FadeIn delay={200}>
        <div className="space-y-6 text-base text-foreground/80 leading-relaxed">
          <p>If your credential says:</p>
          <p className="font-serif text-xl text-foreground italic">"This person can do X."</p>
          <p className="text-foreground font-medium">Your assessment must actually verify X.</p>
        </div>
      </FadeIn>
      <FadeIn delay={400}>
        <div className="mt-10">
          <p className="text-muted-foreground mb-4">Weak enforcement harms:</p>
          <ul className="space-y-2 max-w-md mx-auto text-left">
            {[
              "Your reputation",
              "Employers who rely on your standard",
              "High performers who earned it",
              "The long-term value of your credential",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-foreground/80">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </FadeIn>
      <FadeIn delay={600}>
        <div className="mt-14">
          <p className="text-foreground font-medium text-sm">Standards are not theoretical.</p>
          <p className="font-serif italic text-muted-foreground text-sm mt-1">They are operational.</p>
        </div>
      </FadeIn>
    </div>
  </section>
);

/* ─── MODULE 4 — WHAT THIS MODULE ADDRESSES ─── */
const addressAreas = [
  {
    title: "Competence Framework Development",
    lead: "Define what 'good enough' actually means.",
    prefix: "We design:",
    items: ["Performance-level definitions", "Observable behaviors indicating mastery", "Clear distinction between novice, proficient, expert", "Competence domains and sub-skills", "Threshold clarity"],
  },
  {
    title: "Qualification Criteria Design",
    lead: "Separate learning from credentialing.",
    prefix: "We define:",
    items: ["Non-negotiable standards", "Developmental criteria", "Clear issuance thresholds", "What is sufficient to pass", "Where the line is drawn"],
  },
  {
    title: "Assessment Architecture",
    lead: "Design what gets measured, when, and how.",
    prefix: "We build:",
    items: ["Knowledge checks vs. performance tasks", "Portfolio review structures", "Demonstrations and simulations", "Formative vs. summative models", "Multi-source evidence systems"],
  },
  {
    title: "Rubrics & Scoring Frameworks",
    lead: "Make judgment systematic.",
    prefix: "We design:",
    items: ["Rubrics with performance descriptors", "Scoring guides", "Calibration protocols", "Edge-case handling", "Examples of proficient vs. not-yet-proficient work"],
  },
  {
    title: "Pass/Fail Logic & Remediation",
    lead: "Defensible decisions.",
    prefix: "We define:",
    items: ["Threshold logic", "Borderline case protocols", "Appeals processes", "Remediation pathways", "Revocation criteria (when applicable)"],
  },
  {
    title: "Curriculum Alignment for Assessability",
    lead: "Make sure teaching prepares for evaluation.",
    prefix: "We identify:",
    items: ["Misalignment gaps", "Underprepared areas", "Practice opportunities that mirror assessment demands", "Teaching adjustments needed"],
  },
  {
    title: "Instructor Calibration & Transfer",
    lead: "Transfer judgment beyond the founder.",
    prefix: "We build:",
    items: ["Evaluator training frameworks", "Norming sessions", "Decision protocols", "Quality assurance loops"],
  },
];

const WhatThisAddresses = () => (
  <section className="px-6 py-24" style={lightBg}>
    <div className="max-w-5xl mx-auto">
      <FadeIn>
        <SectionMarker numeral="IV" />
        <h2 className="font-serif text-3xl sm:text-4xl font-normal mt-4 mb-14" style={{ color: "#1A1A1A" }}>
          What This Module Addresses
        </h2>
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {addressAreas.map((area, i) => (
          <FadeIn key={area.title} delay={80 * i}>
            <div className={`p-8 border ${lightBorder} h-full ${i === addressAreas.length - 1 ? "md:col-span-2" : ""}`}>
              <h3 className="text-xs tracking-[0.2em] uppercase font-sans font-medium mb-2" style={{ color: "#1A1A1A" }}>
                {area.title}
              </h3>
              <p className={`text-sm ${lightMuted} mb-3 font-serif italic`}>{area.lead}</p>
              <p className={`text-xs ${lightMuted} uppercase tracking-wider mb-2`}>{area.prefix}</p>
              <ul className="space-y-1.5">
                {area.items.map((item) => (
                  <li key={item} className={`text-sm ${lightMuted} leading-relaxed flex items-start gap-2`}>
                    <span className="text-[hsl(43_47%_44%)] mt-0.5">—</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

/* ─── MODULE 5 — DELIVERABLES ─── */
const deliverables = [
  { title: "Competence Framework Document", desc: "Clear definition of what credential holders must be able to do." },
  { title: "Assessment Architecture Blueprint", desc: "Design of what is assessed, when, how, and by whom." },
  { title: "Rubrics & Scoring Guides", desc: "Ready-to-use evaluation tools with defensible logic." },
  { title: "Pass/Fail Threshold Documentation", desc: "Clear standards with rationale." },
  { title: "Appeals & Remediation Framework", desc: "Fair, transparent enforcement protocols." },
  { title: "Curriculum Alignment Recommendations", desc: "Specific adjustments to improve assessability." },
  { title: "Evaluator Calibration Guide", desc: "Protocols to ensure consistency beyond founder judgment." },
];

const Deliverables = () => (
  <section className="px-6 py-24" style={lightBg}>
    <div className="max-w-5xl mx-auto">
      <FadeIn>
        <SectionMarker numeral="V" />
        <h2 className="font-serif text-3xl sm:text-4xl font-normal mt-4 mb-14" style={{ color: "#1A1A1A" }}>
          What You Receive
        </h2>
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {deliverables.map((d, i) => (
          <FadeIn key={d.title} delay={80 * i}>
            <div className={`p-8 border ${lightBorder} h-full ${i === deliverables.length - 1 ? "md:col-span-2" : ""}`}>
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
        <p className="text-muted-foreground text-base mb-14">Timeline: 4–8 Weeks</p>
      </FadeIn>

      {/* Timeline — 3 phases */}
      <FadeIn delay={200}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 mb-16">
          <div className="border border-border p-8">
            <p className="text-xs tracking-[0.2em] uppercase text-accent mb-4">Phase 1 — Define Competence</p>
            <ul className="space-y-2">
              {["Clarify real-world performance standards", "Identify competence domains"].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-foreground/70">
                  <span className="text-accent mt-0.5">—</span>{item}
                </li>
              ))}
            </ul>
          </div>
          <div className="border border-border md:border-l-0 p-8">
            <p className="text-xs tracking-[0.2em] uppercase text-accent mb-4">Phase 2 — Design Assessment</p>
            <ul className="space-y-2">
              {["Build architecture and scoring logic", "Draft rubrics and evaluation criteria"].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-foreground/70">
                  <span className="text-accent mt-0.5">—</span>{item}
                </li>
              ))}
            </ul>
          </div>
          <div className="border border-border md:border-l-0 p-8">
            <p className="text-xs tracking-[0.2em] uppercase text-accent mb-4">Phase 3 — Enforcement &amp; Transfer</p>
            <ul className="space-y-2">
              {["Define thresholds and remediation", "Develop calibration protocols", "Train evaluators"].map((item) => (
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
            <p className="text-xs tracking-[0.2em] uppercase text-foreground/60 mb-3">Time Investment</p>
            <p className="text-sm text-foreground/80">Typically 6–10 hours from leadership across engagement.</p>
          </div>
          <div className="border border-border md:border-l-0 p-8">
            <p className="text-xs tracking-[0.2em] uppercase text-foreground/60 mb-3">Your Role</p>
            <ul className="space-y-1.5">
              {["Clarify what 'good' looks like", "Provide examples of strong vs. weak performance", "Make decisions about thresholds", "Accept that some will not pass"].map((item) => (
                <li key={item} className="text-sm text-foreground/70">{item}</li>
              ))}
            </ul>
          </div>
          <div className="border border-border md:border-l-0 p-8">
            <p className="text-xs tracking-[0.2em] uppercase text-foreground/60 mb-3">Our Role</p>
            <ul className="space-y-1.5">
              {["Translate judgment into structure", "Build defensible systems", "Design enforceable logic", "Protect long-term credential integrity"].map((item) => (
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
const WhatMakesThisDifferent = () => (
  <section className="px-6 py-24">
    <div className="max-w-3xl mx-auto text-center">
      <FadeIn>
        <SectionMarker numeral="VII" />
        <h2 className="font-serif text-3xl sm:text-4xl font-normal mt-4 mb-4 text-foreground">
          Most assessment design prioritizes ease of grading.
        </h2>
        <p className="text-base text-muted-foreground mb-10">
          We prioritize validity and defensibility.
        </p>
      </FadeIn>
      <FadeIn delay={200}>
        <ul className="space-y-3 text-left max-w-md mx-auto mb-10">
          {[
            "Performance-based",
            "Publicly defensible",
            "Transferable beyond founder",
            "Fair across contexts",
            "Rigorous — even when exclusion is uncomfortable",
          ].map((item) => (
            <li key={item} className="flex items-center gap-3 text-sm text-foreground/80">
              <Check className="w-4 h-4 text-accent shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </FadeIn>
      <FadeIn delay={400}>
        <p className="text-foreground font-medium text-sm">This is not multiple-choice testing.</p>
        <p className="font-serif italic text-muted-foreground text-sm mt-1">This is credential enforcement architecture.</p>
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
              By the end of Curriculum &amp; Assessment Design™, you will have:
            </p>
            <ul className="space-y-3">
              {[
                "Clear competence standards",
                "Defensible evaluation logic",
                "Consistent application across evaluators",
                "Fair remediation pathways",
                "Protected credential value",
                "Distributed authority beyond founder",
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
              {["Maintained credential integrity.", "Reduced reputational exposure.", "Sustainable scaling of standards."].map((item) => (
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
  { situation: "Audit reveals assessment gap", path: "Module A → Module B" },
  { situation: "Need assessment + market signal", path: "Modules B + C" },
  { situation: "Assessment first, then launch", path: "Module B → Module D" },
  { situation: "Full integration build", path: "90-Day Pilot" },
];

const CommonCombinations = () => (
  <section className="px-6 py-24" style={lightBg}>
    <div className="max-w-4xl mx-auto">
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
                <TableRow key={c.situation} className="border-b" style={{ borderColor: "#D4D0C8" }}>
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
    <div className="max-w-3xl mx-auto text-center">
      <FadeIn>
        <SectionMarker numeral="X" />
        <h2 className="font-serif text-3xl sm:text-4xl font-normal mt-4 mb-10 text-foreground">
          Investment Positioning
        </h2>
      </FadeIn>
      <FadeIn delay={200}>
        <div className="space-y-6 text-base text-foreground/80 leading-relaxed">
          <p><span className="text-foreground font-medium">Investment:</span> Custom proposal based on assessment complexity.</p>
          <div className="border-t border-border pt-6">
            <p className="text-foreground font-medium mb-3">Scope determined by:</p>
            <ul className="space-y-2 max-w-sm mx-auto text-left">
              {[
                "Number of competence domains",
                "Assessment types required",
                "Evaluator training needs",
                "Governance requirements",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-foreground/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="pt-4 space-y-2">
            <p className="text-foreground font-medium text-sm">Without defensible assessment, brand strength cannot sustain a credential.</p>
            <p className="font-serif italic text-muted-foreground">This is the enforcement mechanism that makes trust durable.</p>
          </div>
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
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal mb-4" style={{ color: "#F4F4F4" }}>
          Enforce what you promise.
        </h2>
        <p className="text-base mb-10" style={{ color: "#999" }}>
          Define competence before you issue authority.
        </p>
      </FadeIn>
      <FadeIn delay={200}>
        <Button
          onClick={onRequest}
          className="btn-accent-gradient text-accent-foreground rounded-sm px-10 py-5 text-base tracking-wide font-medium h-auto"
        >
          Request Assessment Design Advisory
        </Button>
        <p className="text-xs mt-6" style={{ color: "#666" }}>
          We respond within 2 business days.
        </p>
      </FadeIn>
    </div>
  </section>
);

/* ─── PAGE ─── */
const CurriculumAssessmentDesign = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);

  return (
    <>
      <Helmet>
        <title>Curriculum & Assessment Design™ — Define Competence, Enforce Standards | Certainly</title>
        <meta name="description" content="Design how competence is defined, taught, and verified — so your credential means something real. Curriculum & Assessment Design by Certainly." />
        <link rel="canonical" href="https://method.certainly.coop/curriculum-assessment-design" />
        <meta property="og:title" content="Curriculum & Assessment Design™ — Define Competence, Enforce Standards | Certainly" />
        <meta property="og:description" content="Design how competence is defined, taught, and verified — so your credential means something real. Curriculum & Assessment Design by Certainly." />
        <meta property="og:url" content="https://method.certainly.coop/curriculum-assessment-design" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Curriculum & Assessment Design™ — Define Competence, Enforce Standards | Certainly" />
        <meta name="twitter:description" content="Design how competence is defined, taught, and verified — so your credential means something real. Curriculum & Assessment Design by Certainly." />
      </Helmet>
      <SiteNav onRequestAssessment={openModal} />
      <main>
        <HeroModule onRequest={openModal} />
        <Divider />
        <CoreProblem />
        <Divider />
        <WhyThisMatters />
        <WhatThisAddresses />
        <Divider />
        <Deliverables />
        <HowThisWorks />
        <Divider />
        <WhatMakesThisDifferent />
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

export default CurriculumAssessmentDesign;
