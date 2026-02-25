import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import AssessmentModal from "@/components/AssessmentModal";
import certainlyLogo from "@/assets/certainly-logo.png";

/* ─── SHARED HELPERS ─── */
const Divider = () => <div className="w-full h-px bg-border" />;
const SectionMarker = ({ numeral }: { numeral: string }) => (
  <span className="font-serif text-accent text-sm tracking-widest">{numeral}</span>
);

/* Light section style overrides */
const lightBg = { backgroundColor: "#F5F4F1", color: "#1A1A1A" };
const lightMuted = "text-[#666]";
const lightBorder = "border-[#D4D0C8]";

/* ─── NAV ─── */
const Nav = ({ onClarityCall }: { onClarityCall: () => void }) => (
  <nav className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center border-b border-border bg-background/80 backdrop-blur-sm">
    <div className="flex items-center gap-8">
      <Link to="/"><img src={certainlyLogo} alt="Certainly" className="h-8" /></Link>
    </div>
    <Button
      onClick={onClarityCall}
      size="sm"
      className="btn-accent-gradient text-accent-foreground rounded-sm text-xs tracking-wide"
    >
      Book a Clarity Call
    </Button>
  </nav>
);

/* ─── MODULE 1 — HERO ─── */
const HeroModule = ({ onClarityCall }: { onClarityCall: () => void }) => (
  <section
    className="min-h-[85vh] flex items-center justify-center px-6 pt-24 pb-20 relative"
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
        <p className="text-xs tracking-[0.3em] uppercase mb-10" style={{ color: "hsl(43 47% 44%)" }}>
          Level 1
        </p>
      </FadeIn>
      <FadeIn delay={200}>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-tight mb-8" style={{ color: "#1A1A1A" }}>
          Method Capture™
        </h1>
        <div className="w-full h-px mb-10" style={{ backgroundColor: "#D4D0C8" }} />
      </FadeIn>
      <FadeIn delay={400}>
        <div className="space-y-4 text-base sm:text-lg leading-relaxed mb-14 text-left max-w-2xl mx-auto" style={{ color: "#444" }}>
          <p className="font-medium" style={{ color: "#1A1A1A" }}>
            Preserve what makes your method work before scale distorts it.
          </p>
          <p>
            If your method lives in judgment, lived experience, and live delivery — not documentation — scale introduces drift.
          </p>
          <p>
            Method Capture extracts the invisible structure of your work while you're actively delivering it. You don't pause revenue. You don't disappear into curriculum writing. You keep teaching. We capture the architecture.
          </p>
        </div>
      </FadeIn>
      <FadeIn delay={600}>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={onClarityCall}
            className="btn-accent-gradient text-accent-foreground rounded-sm px-8 py-5 text-base tracking-wide font-medium h-auto"
          >
            Book a Clarity Call
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-sm px-8 py-5 text-base tracking-wide font-medium h-auto"
            style={{ borderColor: "#D4D0C8", color: "#1A1A1A", backgroundColor: "transparent" }}
          >
            <Link to="/levels">
              Compare All Levels <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </FadeIn>
    </div>
  </section>
);

/* ─── MODULE 2 — THE DRIFT PROBLEM ─── */
const DriftProblem = () => (
  <section className="px-6 py-28 max-w-6xl mx-auto">
    <FadeIn>
      <SectionMarker numeral="II" />
      <h2 className="font-serif text-3xl sm:text-4xl font-normal mt-4 mb-14 text-foreground">
        The Drift Problem
      </h2>
    </FadeIn>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
      {/* Left — Line Diagram */}
      <FadeIn delay={200}>
        <div className="pr-0 md:pr-12 md:border-r border-border pb-12 md:pb-0">
          <div className="space-y-0 font-sans text-sm">
            {[
              { label: "Founder", note: null },
              { label: "Instructor A", note: "mostly aligned" },
              { label: "Instructor B", note: "improvised" },
              { label: "Client Outcomes", note: "variance" },
            ].map((item, i) => (
              <div
                key={item.label}
                className="animate-fade-in"
                style={{
                  animationDelay: `${400 + i * 350}ms`,
                  animationFillMode: "both",
                  animationDuration: "0.6s",
                  filter: `blur(${i * 0.4}px)`,
                  opacity: 1 - i * 0.08,
                }}
              >
                <div className="flex items-center gap-3 py-3">
                  <div
                    className="w-2 h-2 rounded-full shrink-0"
                    style={{
                      backgroundColor: `hsl(43 47% ${54 - i * 6}%)`,
                    }}
                  />
                  <span className="text-foreground">{item.label}</span>
                  {item.note && (
                    <span className="text-muted-foreground text-xs italic">({item.note})</span>
                  )}
                </div>
                {i < 3 && (
                  <div
                    className="ml-[3px] w-px h-6"
                    style={{ backgroundColor: `rgba(255,255,255,${0.12 - i * 0.02})` }}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="mt-8 pt-4 border-t border-border">
            <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground">
              Trust variance increases.
            </p>
          </div>
        </div>
      </FadeIn>

      {/* Right — Copy */}
      <FadeIn delay={400}>
        <div className="pl-0 md:pl-12 pt-12 md:pt-0">
          <div className="space-y-4 text-base text-foreground/80 leading-relaxed">
            <p className="text-foreground font-medium">
              When delivery moves beyond you, quality begins to drift.
            </p>
            <p>The first instructor does fine.</p>
            <p>The second improvises.</p>
            <p>The third teaches the slides but misses the judgment.</p>
            <p className="text-muted-foreground">Soon:</p>
            <ul className="space-y-2 ml-1">
              {[
                "Outcomes vary by instructor",
                "Clients feel inconsistency",
                "You remain the quality control layer",
                "Your calendar stays the bottleneck",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-foreground/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="font-medium text-foreground pt-4">
              This isn't a growth problem.<br />
              It's a transfer problem.
            </p>
            <p className="font-serif italic text-muted-foreground pt-2">
              If what makes your method work isn't structured, it cannot endure.
            </p>
          </div>
        </div>
      </FadeIn>
    </div>
  </section>
);

/* ─── MODULE 3 — WHAT WE ACTUALLY CAPTURE ─── */
const layers = [
  "Framework",
  "Decision Logic",
  "Canonical Language",
  "Boundary Conditions",
  "Competence Signals",
];

const captureItems = [
  "Your framework and named distinctions",
  "The decision logic behind your calls",
  "Where you override the script",
  "The boundary conditions where your method breaks",
  "The signals that tell you someone is ready",
];

const CaptureSection = () => (
  <section className="px-6 py-28" style={{ backgroundColor: "#111111" }}>
    <div className="max-w-6xl mx-auto">
      <FadeIn>
        <SectionMarker numeral="III" />
        <h2 className="font-serif text-3xl sm:text-4xl font-normal mt-4 mb-14 text-foreground">
          We don't create theory. We reveal structure.
        </h2>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left — Text */}
        <FadeIn delay={200}>
          <div>
            <p className="text-base text-muted-foreground mb-6">
              Method Capture embeds inside one live program cycle and extracts:
            </p>
            <ul className="space-y-3 mb-10">
              {captureItems.map((item) => (
                <li key={item} className="flex items-start gap-3 text-base text-foreground/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-foreground font-medium">You continue delivering.</p>
            <p className="font-serif italic text-muted-foreground mt-2">We preserve the architecture.</p>
          </div>
        </FadeIn>

        {/* Right — Isometric Layer Diagram */}
        <FadeIn delay={400}>
          <svg viewBox="0 0 520 380" className="w-full" style={{ overflow: "visible" }}>
            <defs>
              <linearGradient id="goldGradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="rgba(200,165,75,0.7)" />
                <stop offset="50%" stopColor="rgba(220,190,120,0.5)" />
                <stop offset="100%" stopColor="rgba(180,150,80,0.4)" />
              </linearGradient>
            </defs>
            {layers.map((layer, i) => {
              const baseY = 300 - i * 55;
              const opacity = 0.10 + i * 0.05;
              const isTop = i === layers.length - 1;
              const cx = 260;
              const hw = 130;
              const hh = 36;

              return (
                <g key={layer}>
                  <polygon
                    points={`${cx},${baseY - hh} ${cx + hw},${baseY} ${cx},${baseY + hh} ${cx - hw},${baseY}`}
                    fill={isTop ? "url(#goldGradient)" : `rgba(255,255,255,${opacity})`}
                    stroke={isTop ? "rgba(200,165,75,0.5)" : "rgba(255,255,255,0.12)"}
                    strokeWidth="1"
                  />
                  <polygon
                    points={`${cx - hw},${baseY} ${cx},${baseY + hh} ${cx},${baseY + hh + 8} ${cx - hw},${baseY + 8}`}
                    fill={isTop ? "rgba(160,130,50,0.6)" : `rgba(255,255,255,${opacity * 0.4})`}
                    stroke={isTop ? "rgba(200,165,75,0.3)" : "rgba(255,255,255,0.06)"}
                    strokeWidth="0.5"
                  />
                  <polygon
                    points={`${cx},${baseY + hh} ${cx + hw},${baseY} ${cx + hw},${baseY + 8} ${cx},${baseY + hh + 8}`}
                    fill={isTop ? "rgba(180,145,55,0.5)" : `rgba(255,255,255,${opacity * 0.3})`}
                    stroke={isTop ? "rgba(200,165,75,0.3)" : "rgba(255,255,255,0.06)"}
                    strokeWidth="0.5"
                  />
                  {[[cx, baseY - hh], [cx + hw, baseY], [cx, baseY + hh], [cx - hw, baseY]].map(([dotX, dotY], j) => (
                    <circle key={j} cx={dotX} cy={dotY} r="2"
                      fill={isTop ? "rgba(200,165,75,0.7)" : "rgba(255,255,255,0.2)"} />
                  ))}
                  {i % 2 === 0 ? (
                    <>
                      <line x1={cx + hw} y1={baseY} x2={cx + hw + 20} y2={baseY}
                        stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
                      <rect x={cx + hw + 20} y={baseY - 11} width={layer.length * 7.2 + 16} height="22" rx="2"
                        fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                      <text x={cx + hw + 28} y={baseY + 4} fill="hsl(40 6% 96%)" fontSize="10"
                        fontFamily="Inter, sans-serif" letterSpacing="0.05em">{layer}</text>
                    </>
                  ) : (
                    <>
                      <line x1={cx - hw} y1={baseY} x2={cx - hw - 20} y2={baseY}
                        stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
                      <rect x={cx - hw - 20 - layer.length * 7.2 - 16} y={baseY - 11}
                        width={layer.length * 7.2 + 16} height="22" rx="2"
                        fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                      <text x={cx - hw - 20 - layer.length * 7.2 - 8} y={baseY + 4} fill="hsl(40 6% 96%)"
                        fontSize="10" fontFamily="Inter, sans-serif" letterSpacing="0.05em">{layer}</text>
                    </>
                  )}
                </g>
              );
            })}
          </svg>
        </FadeIn>
      </div>
    </div>
  </section>
);

/* ─── MODULE 4 — DELIVERABLES GRID ─── */
const deliverables = [
  {
    title: "Method Documentation",
    items: ["Core framework", "Named distinctions", "Decision trees", "Boundary conditions", "Canonical language"],
  },
  {
    title: "Curriculum Architecture",
    items: ["Session-by-session outline", "Learning objectives", "Teaching sequence logic", "Instructor facilitation notes"],
  },
  {
    title: "Training Assets",
    items: ["Workbooks derived from real delivery", "Exercises refined from live friction", "Templates and structured tools"],
  },
  {
    title: "Media & Evidence Archive",
    items: ["Organized transcripts", "Session recordings", "Planning call summaries", "Searchable repository"],
  },
  {
    title: "Competence Signals",
    items: ["Observable readiness behaviors", "Common failure patterns", "Early assessment criteria", "Instructor calibration notes"],
  },
];

const DeliverablesGrid = () => (
  <section className="px-6 py-28" style={lightBg}>
    <div className="max-w-5xl mx-auto">
      <FadeIn>
        <SectionMarker numeral="IV" />
        <h2 className="font-serif text-3xl sm:text-4xl font-normal mt-4 mb-4" style={{ color: "#1A1A1A" }}>
          What You Receive
        </h2>
        <p className={`text-base ${lightMuted} mb-14`}>Over one full program cycle:</p>
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {deliverables.map((d, i) => (
          <FadeIn key={d.title} delay={100 * i}>
            <div className={`p-8 border ${lightBorder} ${i < deliverables.length - 1 ? "" : ""}`}>
              <h3 className="text-xs tracking-[0.2em] uppercase font-sans font-medium mb-4" style={{ color: "#1A1A1A" }}>
                {d.title}
              </h3>
              <ul className="space-y-2">
                {d.items.map((item) => (
                  <li key={item} className={`flex items-start gap-2 text-sm ${lightMuted}`}>
                    <span className="text-[#C8A54B] mt-0.5">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}
      </div>
      <FadeIn delay={600}>
        <p className={`text-sm ${lightMuted} mt-10 font-serif italic`}>
          Everything remains valuable whether or not you pursue certification later.
        </p>
      </FadeIn>
    </div>
  </section>
);

/* ─── MODULE 5 — STRATEGIC FRAMING ─── */
const pillars = [
  { title: "Origin", desc: "Where trust comes from." },
  { title: "Transfer", desc: "How trust moves from you to others." },
  { title: "Signal", desc: "How the market recognizes competence." },
];

const StrategicFraming = () => (
  <section className="px-6 py-28">
    <div className="max-w-5xl mx-auto text-center">
      <FadeIn>
        <SectionMarker numeral="V" />
        <h2 className="font-serif text-3xl sm:text-4xl font-normal mt-4 mb-4 text-foreground">
          Trust does not scale automatically.
        </h2>
        <p className="text-base text-muted-foreground mb-16 max-w-2xl mx-auto">
          When delivery expands beyond the founder, trust must stabilize somewhere.
        </p>
      </FadeIn>
      <FadeIn delay={200}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className={`py-10 px-8 ${i < pillars.length - 1 ? "md:border-r border-border" : ""}`}
            >
              <h3 className="font-serif text-2xl text-foreground mb-3">{p.title}</h3>
              <p className="text-sm text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
      </FadeIn>
      <FadeIn delay={400}>
        <p className="font-serif italic text-muted-foreground mt-12">
          Method Capture stabilizes transfer — before higher mechanisms are built.
        </p>
      </FadeIn>
    </div>
  </section>
);

/* ─── MODULE 6 — TWO PATHS ─── */
const TwoPaths = ({ onClarityCall }: { onClarityCall: () => void }) => (
  <section className="px-6 py-28">
    <div className="max-w-5xl mx-auto">
      <FadeIn>
        <SectionMarker numeral="VI" />
        <h2 className="font-serif text-3xl sm:text-4xl font-normal mt-4 mb-14 text-foreground">
          Two Paths
        </h2>
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
        {/* Path A */}
        <FadeIn delay={200}>
          <div className="border border-border p-10 bg-surface">
            <p className="text-xs tracking-[0.2em] uppercase text-accent mb-2">Path A</p>
            <h3 className="font-serif text-2xl text-foreground mb-2">Method Capture Service</h3>
            <p className="text-sm text-muted-foreground mb-6 font-serif italic">
              Done-With-You. Embedded. Institutional.
            </p>
            <p className="text-sm text-foreground/80 mb-6 leading-relaxed">
              We embed inside your live program and do the structural work.
            </p>
            <p className="text-xs text-muted-foreground mb-3 tracking-wide uppercase">Best for:</p>
            <ul className="space-y-2 mb-8">
              {["Multi-instructor delivery", "Complex immersions", "Limited internal bandwidth", "Meaningful revenue programs"].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-foreground/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="space-y-2 text-sm text-muted-foreground mb-8">
              <p><span className="text-foreground">Your Time:</span> 1–3 hours/week</p>
              <p><span className="text-foreground">Investment:</span> Custom proposal</p>
            </div>
            <Button
              onClick={onClarityCall}
              className="btn-accent-gradient text-accent-foreground rounded-sm px-6 py-3 text-sm tracking-wide h-auto w-full"
            >
              Request a Proposal <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </FadeIn>

        {/* Path B */}
        <FadeIn delay={400}>
          <div className="border border-border p-10">
            <p className="text-xs tracking-[0.2em] uppercase text-accent mb-2">Path B</p>
            <h3 className="font-serif text-2xl text-foreground mb-2">Method Capture Course</h3>
            <p className="text-sm text-muted-foreground mb-6 font-serif italic">
              Self-Guided. Structured. Controlled.
            </p>
            <p className="text-sm text-foreground/80 mb-6 leading-relaxed">
              Learn the capture framework and document your own method.
            </p>
            <p className="text-xs text-muted-foreground mb-3 tracking-wide uppercase">Best for:</p>
            <ul className="space-y-2 mb-8">
              {["Smaller teams", "Early-stage programs", "Founders who prefer hands-on control"].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-foreground/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-sm text-muted-foreground mb-8 font-serif italic">Join the waitlist.</p>
            <Button
              variant="outline"
              className="rounded-sm px-6 py-3 text-sm tracking-wide h-auto w-full border-border text-foreground hover:bg-surface"
            >
              Join the Waitlist <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

/* ─── MODULE 7 — QUALIFICATION FILTER ─── */
const forYou = [
  "You personally created the method",
  "You are already delivering live",
  "Others are beginning to teach",
  "Quality variance concerns you",
  "Your calendar is the bottleneck",
];
const notForYou = [
  "Your method is still conceptual",
  "You've never delivered it live",
  "You already have complete documentation",
  "You primarily need marketing polish",
];

const QualificationFilter = () => (
  <section className="px-6 py-28" style={lightBg}>
    <div className="max-w-5xl mx-auto">
      <FadeIn>
        <SectionMarker numeral="VII" />
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <FadeIn delay={200}>
          <div>
            <h3 className="font-serif text-2xl mb-8" style={{ color: "#1A1A1A" }}>This is for you if:</h3>
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
            <h3 className="font-serif text-2xl mb-8" style={{ color: "#1A1A1A" }}>This is not for you if:</h3>
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
        <p className={`text-sm ${lightMuted} mt-12`}>
          If your method is already stable and documented,{" "}
          <Link to="/levels" className="underline" style={{ color: "#C8A54B" }}>
            start at Level 2 instead
          </Link>.
        </p>
      </FadeIn>
    </div>
  </section>
);

/* ─── MODULE 8 — POSITION IN THE SYSTEM ─── */
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
        <SectionMarker numeral="VIII" />
        <h2 className="font-serif text-3xl sm:text-4xl font-normal mt-4 mb-14 text-foreground">
          Where This Fits
        </h2>
      </FadeIn>
      <FadeIn delay={200}>
        <div className="flex items-stretch w-full mb-10">
          {levels.map((l) => (
            <div
              key={l.num}
              className={`flex-1 py-4 text-center text-sm border border-border ${
                l.num === 1
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
        <div className="max-w-2xl">
          <p className="text-foreground font-medium mb-4">Level 1 stabilizes the foundation.</p>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            Without it, higher-level trust mechanisms sit on unstable ground.
          </p>
          <p className="text-muted-foreground text-sm leading-relaxed">
            You can build a credential without Method Capture.
          </p>
          <p className="font-serif italic text-foreground mt-2">
            You cannot build a durable one.
          </p>
        </div>
      </FadeIn>
    </div>
  </section>
);

/* ─── MODULE 9 — FINAL CTA ─── */
const FinalCTA = ({ onClarityCall }: { onClarityCall: () => void }) => (
  <section className="px-6 py-40 text-center" style={{ backgroundColor: "#111111" }}>
    <div className="max-w-3xl mx-auto">
      <FadeIn>
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal leading-tight mb-6 text-foreground">
          Structure what makes your method work.
        </h2>
        <p className="text-lg text-muted-foreground mb-14">
          Preserve it before scale distorts it.
        </p>
      </FadeIn>
      <FadeIn delay={200}>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={onClarityCall}
            className="btn-accent-gradient text-accent-foreground rounded-sm px-10 py-5 text-lg tracking-wide font-medium h-auto"
          >
            Book a 15-Minute Clarity Call
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-sm px-10 py-5 text-lg tracking-wide font-medium h-auto border-border text-foreground hover:bg-surface"
          >
            <Link to="/levels">
              Explore Level 2 <ArrowRight className="w-4 h-4 ml-2" />
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
            <span>Method architecture for disciplined growth.</span>
          </div>
        </footer>
      </FadeIn>
    </div>
  </section>
);

/* ─── PAGE ─── */
const MethodCapture = () => {
  const [assessmentOpen, setAssessmentOpen] = useState(false);
  const openAssessment = () => setAssessmentOpen(true);

  return (
    <div className="bg-background text-foreground min-h-screen">
      <Nav onClarityCall={openAssessment} />
      <HeroModule onClarityCall={openAssessment} />
      <Divider />
      <div className="bg-surface noise-overlay">
        <DriftProblem />
      </div>
      <Divider />
      <CaptureSection />
      <Divider />
      <DeliverablesGrid />
      <Divider />
      <div className="bg-surface">
        <StrategicFraming />
      </div>
      <Divider />
      <TwoPaths onClarityCall={openAssessment} />
      <Divider />
      <QualificationFilter />
      <Divider />
      <div className="bg-surface">
        <PositionModule />
      </div>
      <Divider />
      <FinalCTA onClarityCall={openAssessment} />
      <AssessmentModal open={assessmentOpen} onOpenChange={setAssessmentOpen} />
    </div>
  );
};

export default MethodCapture;
