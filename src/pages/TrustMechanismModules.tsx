import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import AssessmentModal from "@/components/AssessmentModal";
import certainlyLogo from "@/assets/certainly-logo.png";
import ProgramsDropdown from "@/components/ProgramsDropdown";

/* ─── SHARED HELPERS ─── */
const Divider = () => <div className="w-full h-px bg-border" />;
const SectionMarker = ({ numeral }: { numeral: string }) => (
  <span className="font-serif text-accent text-sm tracking-widest">{numeral}</span>
);

const lightBg = { backgroundColor: "#F5F4F1", color: "#1A1A1A" };
const lightMuted = "text-[#666]";
const lightBorder = "border-[#D4D0C8]";

/* ─── NAV ─── */
const Nav = ({ onBuildPath }: { onBuildPath: () => void }) => (
  <nav className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center border-b border-border bg-background/80 backdrop-blur-sm">
    <div className="flex items-center gap-8">
      <Link to="/"><img src={certainlyLogo} alt="Certainly" className="h-8" /></Link>
      <ProgramsDropdown />
      <Link to="/blog" className="text-xs text-muted-foreground hover:text-foreground transition-colors tracking-wide">Musings</Link>
    </div>
    <Button
      onClick={onBuildPath}
      size="sm"
      className="btn-accent-gradient text-accent-foreground rounded-sm text-xs tracking-wide"
    >
      Discuss Your Build Path
    </Button>
  </nav>
);

/* ─── MODULE 1 — HERO ─── */
const HeroModule = ({ onBuildPath }: { onBuildPath: () => void }) => (
  <section
    className="min-h-[80vh] flex items-center justify-center px-6 pt-24 pb-16 relative"
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
        <p className="text-xs tracking-[0.3em] uppercase mb-8" style={{ color: "hsl(43 47% 44%)" }}>
          Level 3
        </p>
      </FadeIn>
      <FadeIn delay={200}>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-tight mb-6" style={{ color: "#1A1A1A" }}>
          Trust Mechanism Modules™
        </h1>
        <div className="w-full h-px mb-8" style={{ backgroundColor: "#D4D0C8" }} />
      </FadeIn>
      <FadeIn delay={400}>
        <div className="space-y-4 text-base sm:text-lg leading-relaxed mb-12 text-left max-w-2xl mx-auto" style={{ color: "#444" }}>
          <p className="font-medium" style={{ color: "#1A1A1A" }}>
            Install the structural components that make trust durable.
          </p>
          <p>
            Once Strategy Sprint determines the right mechanism, Level 3 builds it — modularly, precisely, and without excess.
          </p>
        </div>
      </FadeIn>
      <FadeIn delay={600}>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={onBuildPath}
            className="btn-accent-gradient text-accent-foreground rounded-sm px-8 py-5 text-base tracking-wide font-medium h-auto"
          >
            Discuss Your Build Path
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-sm px-8 py-5 text-base tracking-wide font-medium h-auto"
            style={{ borderColor: "#D4D0C8", color: "#1A1A1A", backgroundColor: "transparent" }}
          >
            <Link to="/levels">
              Compare Modules <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </FadeIn>
    </div>
  </section>
);

/* ─── MODULE 2 — FROM DECISION TO INSTALLATION ─── */
const DecisionToInstallation = () => (
  <section className="px-6 py-28 max-w-6xl mx-auto">
    <FadeIn>
      <SectionMarker numeral="II" />
      <h2 className="font-serif text-3xl sm:text-4xl font-normal mt-4 mb-14 text-foreground">
        Clarity determines direction.<br />
        Modules install structure.
      </h2>
    </FadeIn>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
      {/* Left — Architectural Diagram */}
      <FadeIn delay={200}>
        <div className="pr-0 md:pr-12 md:border-r border-border pb-12 md:pb-0">
          <svg viewBox="0 0 280 380" className="w-full max-w-xs mx-auto" style={{ overflow: "visible" }}>
            {["Method", "Defined Standards", "Assessment Logic", "Verification Infrastructure", "Market Signal"].map((label, i) => {
              const y = 30 + i * 80;
              const w = label.length * 8.5 + 32;
              const x = 140 - w / 2;
              return (
                <g key={label}>
                  <rect x={x} y={y} width={w} height="36" rx="2"
                    fill={i === 0 ? "rgba(200,165,75,0.15)" : "rgba(255,255,255,0.08)"}
                    stroke={i === 0 ? "rgba(200,165,75,0.4)" : "rgba(255,255,255,0.15)"}
                    strokeWidth="1" />
                  <text x="140" y={y + 23} textAnchor="middle"
                    fill={i === 0 ? "hsl(43 47% 54%)" : "hsl(40 6% 96%)"}
                    fontSize="12" fontFamily="Inter, sans-serif" letterSpacing="0.05em">
                    {label}
                  </text>
                  {i < 4 && (
                    <>
                      <line x1="140" y1={y + 36} x2="140" y2={y + 80}
                        stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                      <polygon points={`136,${y + 76} 140,${y + 82} 144,${y + 76}`}
                        fill="rgba(255,255,255,0.2)" />
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
            <p>
              Level 2 answers whether certification — or another mechanism — is right.
            </p>
            <p>
              Level 3 installs the components that allow trust to:
            </p>
            <ul className="space-y-2 ml-1">
              {["Transfer", "Be verified", "Be recognized", "Be defended"].map((item) => (
                <li key={item} className="flex items-start gap-3 text-foreground/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="font-serif italic text-muted-foreground pt-4">
              This is institutional construction.
            </p>
          </div>
        </div>
      </FadeIn>
    </div>
  </section>
);

/* ─── MODULE 3 — MODULAR ARCHITECTURE OVERVIEW ─── */
const modules = [
  {
    id: "A",
    title: "Benchmark Audit™",
    objective: "Establish structural readiness before capital deployment.",
    weEvaluate: ["Brand positioning clarity", "Curriculum maturity", "Systems & digital infrastructure", "Sales alignment", "Organizational capacity"],
    youReceive: ["Gap analysis", "Risk mapping", "Module recommendation plan"],
    timeline: "~2 weeks",
    investment: "Custom (credited toward Pilot if engaged)",
  },
  {
    id: "B",
    title: "Curriculum & Assessment Architecture™",
    objective: "Define and verify competence.",
    weBuild: ["Competence frameworks", "Observable performance criteria", "Rubrics & scoring guides", "Pass/fail thresholds", "Appeals and remediation processes", "Instructor calibration systems"],
    note: "This separates completion from qualification.",
    timeline: "4–8 weeks",
    investment: "Custom",
  },
  {
    id: "C",
    title: "Credential Signal Infrastructure™",
    objective: "Make competence legible in the market.",
    weDesign: ["Credential identity system", "Market positioning architecture", "Verification tools (registry, lookup, badge logic)", "Holder usage policies", "Employer & partner communication kits"],
    note: "Rigor without signal fails commercially.\nSignal without rigor collapses.",
    timeline: "6–10 weeks",
    investment: "Custom",
  },
  {
    id: "D",
    title: "120-Day Pilot Installation™",
    objective: "Launch a live credential under controlled conditions.",
    integrated: ["Benchmark Audit", "Strategy refinement", "Assessment architecture", "Governance modeling", "Signal infrastructure", "Founding Cohort launch"],
    youExit: ["Real credential holders", "Validated pricing", "Market response data", "A scale / refine / stop decision memo"],
    timeline: "120 days (fixed)",
    investment: "Starting at $20,000",
  },
];

const ModularArchitecture = () => (
  <section className="px-6 py-28" style={{ backgroundColor: "#111111" }}>
    <div className="max-w-6xl mx-auto">
      <FadeIn>
        <SectionMarker numeral="III" />
        <h2 className="font-serif text-3xl sm:text-4xl font-normal mt-4 mb-6 text-foreground">
          Modular Architecture Overview
        </h2>
        <p className="text-base text-muted-foreground mb-14">
          You engage only what your structure requires.
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-0">
        {modules.map((m, i) => (
          <FadeIn key={m.id} delay={150 * i}>
            <div className="border border-border p-8 h-full flex flex-col">
              <p className="text-xs tracking-[0.2em] uppercase text-accent mb-2">Module {m.id}</p>
              <h3 className="font-serif text-lg text-foreground mb-3">{m.title}</h3>
              <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{m.objective}</p>

              {m.weEvaluate && (
                <>
                  <p className="text-xs tracking-wide uppercase text-foreground/60 mb-2">We evaluate:</p>
                  <ul className="space-y-1.5 mb-4">
                    {m.weEvaluate.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-foreground/70">
                        <span className="text-accent mt-0.5">—</span>{item}
                      </li>
                    ))}
                  </ul>
                </>
              )}
              {m.youReceive && (
                <>
                  <p className="text-xs tracking-wide uppercase text-foreground/60 mb-2">You receive:</p>
                  <ul className="space-y-1.5 mb-4">
                    {m.youReceive.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-foreground/70">
                        <span className="text-accent mt-0.5">—</span>{item}
                      </li>
                    ))}
                  </ul>
                </>
              )}
              {m.weBuild && (
                <>
                  <p className="text-xs tracking-wide uppercase text-foreground/60 mb-2">We build:</p>
                  <ul className="space-y-1.5 mb-4">
                    {m.weBuild.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-foreground/70">
                        <span className="text-accent mt-0.5">—</span>{item}
                      </li>
                    ))}
                  </ul>
                </>
              )}
              {m.weDesign && (
                <>
                  <p className="text-xs tracking-wide uppercase text-foreground/60 mb-2">We design:</p>
                  <ul className="space-y-1.5 mb-4">
                    {m.weDesign.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-foreground/70">
                        <span className="text-accent mt-0.5">—</span>{item}
                      </li>
                    ))}
                  </ul>
                </>
              )}
              {m.integrated && (
                <>
                  <p className="text-xs tracking-wide uppercase text-foreground/60 mb-2">Integrated build:</p>
                  <ul className="space-y-1.5 mb-4">
                    {m.integrated.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-foreground/70">
                        <span className="text-accent mt-0.5">—</span>{item}
                      </li>
                    ))}
                  </ul>
                </>
              )}
              {m.youExit && (
                <>
                  <p className="text-xs tracking-wide uppercase text-foreground/60 mb-2">You exit with:</p>
                  <ul className="space-y-1.5 mb-4">
                    {m.youExit.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-foreground/70">
                        <span className="text-accent mt-0.5">—</span>{item}
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {m.note && (
                <p className="text-sm font-serif italic text-muted-foreground mb-4 whitespace-pre-line">{m.note}</p>
              )}

              <div className="mt-auto pt-4 border-t border-border space-y-1">
                <p className="text-xs text-muted-foreground"><span className="text-foreground/80">Timeline:</span> {m.timeline}</p>
                <p className="text-xs text-muted-foreground"><span className="text-foreground/80">Investment:</span> {m.investment}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

/* ─── MODULE 4 — DECISION PATH MATRIX ─── */
const decisionPaths = [
  { situation: '"We need objective readiness clarity."', engage: "Benchmark Audit" },
  { situation: '"Our instructors vary in quality."', engage: "Curriculum & Assessment Architecture" },
  { situation: '"The market doesn\'t understand our credential."', engage: "Credential Signal Infrastructure" },
  { situation: '"We are ready to launch publicly."', engage: "120-Day Pilot Installation" },
  { situation: '"We need multiple components."', engage: "Combine modules or Pilot" },
];

const DecisionPathMatrix = () => (
  <section className="px-6 py-28" style={lightBg}>
    <div className="max-w-5xl mx-auto">
      <FadeIn>
        <SectionMarker numeral="IV" />
        <h2 className="font-serif text-3xl sm:text-4xl font-normal mt-4 mb-14" style={{ color: "#1A1A1A" }}>
          Decision Path Matrix
        </h2>
      </FadeIn>
      <FadeIn delay={200}>
        <div className={`border ${lightBorder} overflow-hidden`}>
          <div className={`grid grid-cols-2 border-b ${lightBorder}`}>
            <div className={`p-4 border-r ${lightBorder}`}>
              <p className="text-xs tracking-[0.15em] uppercase font-medium" style={{ color: "#1A1A1A" }}>Your Situation</p>
            </div>
            <div className="p-4">
              <p className="text-xs tracking-[0.15em] uppercase font-medium" style={{ color: "#1A1A1A" }}>Engage</p>
            </div>
          </div>
          {decisionPaths.map((d, i) => (
            <div key={i} className={`grid grid-cols-2 ${i < decisionPaths.length - 1 ? `border-b ${lightBorder}` : ""}`}>
              <div className={`p-4 border-r ${lightBorder}`}>
                <p className={`text-sm ${lightMuted}`}>{d.situation}</p>
              </div>
              <div className="p-4">
                <p className="text-sm font-medium" style={{ color: "#1A1A1A" }}>{d.engage}</p>
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
      <FadeIn delay={400}>
        <p className={`text-sm ${lightMuted} mt-10 font-serif italic`}>
          Trust mechanisms should be engineered — not improvised.
        </p>
      </FadeIn>
    </div>
  </section>
);

/* ─── MODULE 5 — WHAT MAKES THIS DIFFERENT ─── */
const WhatMakesThisDifferent = () => (
  <section className="px-6 py-28">
    <div className="max-w-4xl mx-auto text-center">
      <FadeIn>
        <SectionMarker numeral="V" />
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal mt-4 mb-10 text-foreground">
          Most credentials fail after launch.
        </h2>
      </FadeIn>
      <FadeIn delay={200}>
        <p className="text-base text-muted-foreground mb-8">Not because of weak marketing.</p>
        <p className="text-base text-foreground font-medium mb-4">Because:</p>
        <ul className="space-y-2 text-left max-w-md mx-auto mb-12">
          {[
            "Governance was undefined",
            "Standards were never defensible",
            "Assessment relied on judgment",
            "Operational ownership was unclear",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-foreground/80">
              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </FadeIn>
      <FadeIn delay={400}>
        <p className="text-base text-foreground font-medium mb-4">Trust Mechanism Modules™ build:</p>
        <ul className="space-y-2 text-left max-w-md mx-auto mb-10">
          {[
            "Policy architecture",
            "Governance frameworks",
            "Operational documentation",
            "Revenue model alignment",
            "Cross-vendor coordination logic",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-foreground/80">
              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </FadeIn>
      <FadeIn delay={600}>
        <div className="space-y-1">
          <p className="text-foreground font-medium">This is not asset creation.</p>
          <p className="font-serif italic text-muted-foreground">It is institutionalization.</p>
        </div>
      </FadeIn>
    </div>
  </section>
);

/* ─── MODULE 6 — QUALIFICATION FILTER ─── */
const forYou = [
  "Your method is proven in live delivery",
  "You can define competence clearly",
  "You have decision authority",
  "You are prepared to say no (pass/fail matters)",
  "You intend to steward this long-term",
];
const notForYou = [
  "You want prestige signaling without rigor",
  "You are experimenting casually",
  "You lack operational follow-through",
  "You are avoiding standards definition",
];

const QualificationFilter = () => (
  <section className="px-6 py-28" style={lightBg}>
    <div className="max-w-5xl mx-auto">
      <FadeIn>
        <SectionMarker numeral="VI" />
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <FadeIn delay={200}>
          <div>
            <h3 className="font-serif text-2xl mb-8" style={{ color: "#1A1A1A" }}>Level 3 is appropriate if:</h3>
            <ul className="space-y-4">
              {forYou.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm" style={{ color: "#444" }}>
                  <span className={`w-4 h-4 border ${lightBorder} rounded-none shrink-0 mt-0.5 flex items-center justify-center`}>
                    <span className="w-2 h-2 bg-[#C8A54B]" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
        <FadeIn delay={400}>
          <div>
            <h3 className="font-serif text-2xl mb-8" style={{ color: "#1A1A1A" }}>Not appropriate if:</h3>
            <ul className="space-y-4">
              {notForYou.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm" style={{ color: "#444" }}>
                  <span className={`w-4 h-4 border ${lightBorder} rounded-none shrink-0 mt-0.5`} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </div>
      <FadeIn delay={600}>
        <p className={`text-sm ${lightMuted} mt-12 font-serif italic`}>
          This level requires seriousness.
        </p>
      </FadeIn>
    </div>
  </section>
);

/* ─── MODULE 7 — POSITION IN THE SYSTEM ─── */
const levels = [
  { num: 0, label: "Level 0" },
  { num: 1, label: "Level 1" },
  { num: 2, label: "Level 2" },
  { num: 3, label: "Level 3" },
  { num: 4, label: "Level 4" },
];

const PositionModule = () => (
  <section className="px-6 py-28">
    <div className="max-w-5xl mx-auto">
      <FadeIn>
        <SectionMarker numeral="VII" />
        <h2 className="font-serif text-3xl sm:text-4xl font-normal mt-4 mb-14 text-foreground">
          Position in the System
        </h2>
      </FadeIn>
      <FadeIn delay={200}>
        <div className="flex items-stretch w-full mb-10">
          {levels.map((l) => (
            <div
              key={l.num}
              className={`flex-1 py-4 text-center text-sm border border-border ${
                l.num === 3
                  ? "bg-accent text-accent-foreground font-medium"
                  : "text-muted-foreground"
              }`}
            >
              {l.label}
            </div>
          ))}
        </div>
      </FadeIn>
      <FadeIn delay={400}>
        <div className="max-w-2xl space-y-4">
          <p className="text-foreground font-medium">Level 1 preserves the method.</p>
          <p className="text-foreground font-medium">Level 2 determines the mechanism.</p>
          <p className="text-foreground font-medium">Level 3 installs the structure.</p>
          <p className="text-foreground font-medium">Level 4 operates and stewards it.</p>
          <p className="font-serif italic text-muted-foreground mt-2">
            Skipping installation produces fragile systems.
          </p>
        </div>
      </FadeIn>
    </div>
  </section>
);

/* ─── MODULE 8 — INVESTMENT POSITIONING ─── */
const InvestmentSection = () => (
  <section className="px-6 py-28">
    <div className="max-w-3xl mx-auto text-center">
      <FadeIn>
        <SectionMarker numeral="VIII" />
        <h2 className="font-serif text-3xl sm:text-4xl font-normal mt-4 mb-10 text-foreground">
          Investment Positioning
        </h2>
      </FadeIn>
      <FadeIn delay={200}>
        <div className="space-y-4 text-base text-foreground/80 leading-relaxed">
          <p>Engagements vary by scope.</p>
          <p>Most modular builds range in the mid five figures.</p>
          <p>Pilot installations begin at $20,000.</p>
          <p className="text-muted-foreground mt-6">
            Custom proposals are provided after Strategy conversation.
          </p>
        </div>
      </FadeIn>
      <FadeIn delay={400}>
        <div className="mt-14 space-y-2">
          <p className="font-serif italic text-muted-foreground">
            This is infrastructure-level investment.
          </p>
        </div>
      </FadeIn>
    </div>
  </section>
);

/* ─── MODULE 9 — FINAL CTA ─── */
const FinalCTA = ({ onBuildPath }: { onBuildPath: () => void }) => (
  <section className="px-6 py-40 text-center" style={{ backgroundColor: "#111111" }}>
    <div className="max-w-3xl mx-auto">
      <FadeIn>
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal leading-tight mb-6 text-foreground">
          Build what can endure.
        </h2>
        <p className="text-lg text-muted-foreground mb-14">
          Install structure before scale tests it.
        </p>
      </FadeIn>
      <FadeIn delay={200}>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={onBuildPath}
            className="btn-accent-gradient text-accent-foreground rounded-sm px-10 py-5 text-lg tracking-wide font-medium h-auto"
          >
            Discuss Your Build Path
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-sm px-10 py-5 text-lg tracking-wide font-medium h-auto border-border text-foreground hover:bg-surface"
          >
            <Link to="/levels">
              Explore Level 4 <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </FadeIn>
      <FadeIn delay={400}>
        <Divider />
        <footer className="mt-10 flex flex-col sm:flex-row items-center justify-between text-xs text-muted-foreground">
          <Link to="/"><img src={certainlyLogo} alt="Certainly" className="h-4" /></Link>
          <div className="flex items-center gap-6 mt-4 sm:mt-0">
            <Link to="/systems-of-trust" className="hover:text-foreground transition-colors">Framework</Link>
            <Link to="/glossary" className="hover:text-foreground transition-colors">Glossary</Link>
            <Link to="/blog" className="hover:text-foreground transition-colors">Musings</Link>
          </div>
        </footer>
      </FadeIn>
    </div>
  </section>
);

/* ─── PAGE ─── */
const TrustMechanismModules = () => {
  const [assessmentOpen, setAssessmentOpen] = useState(false);
  const openAssessment = () => setAssessmentOpen(true);

  return (
    <div className="bg-background text-foreground min-h-screen">
      <Helmet>
        <title>Trust Mechanism Modules™ — Install Durable Trust Infrastructure | Certainly</title>
        <meta name="description" content="Install the structural components that make trust durable. Modular builds for benchmark audits, assessment architecture, credential signals, and pilot installations." />
        <link rel="canonical" href="https://method.certainly.coop/trust-mechanism-modules" />
      </Helmet>

      <Nav onBuildPath={openAssessment} />
      <HeroModule onBuildPath={openAssessment} />
      <Divider />
      <div className="bg-surface noise-overlay">
        <DecisionToInstallation />
      </div>
      <Divider />
      <ModularArchitecture />
      <Divider />
      <DecisionPathMatrix />
      <Divider />
      <div className="bg-surface">
        <WhatMakesThisDifferent />
      </div>
      <Divider />
      <QualificationFilter />
      <Divider />
      <div className="bg-surface">
        <PositionModule />
      </div>
      <Divider />
      <InvestmentSection />
      <Divider />
      <FinalCTA onBuildPath={openAssessment} />
      <AssessmentModal open={assessmentOpen} onOpenChange={setAssessmentOpen} />
    </div>
  );
};

export default TrustMechanismModules;
