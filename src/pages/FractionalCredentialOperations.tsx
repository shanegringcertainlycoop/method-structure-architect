import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import AssessmentModal from "@/components/AssessmentModal";
import SiteNav from "@/components/SiteNav";
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

/* Nav is now shared via SiteNav */

/* ─── MODULE 1 — HERO ─── */
const HeroModule = ({ onCTA }: { onCTA: () => void }) => (
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
          Level 4
        </p>
      </FadeIn>
      <FadeIn delay={200}>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-tight mb-6" style={{ color: "#1A1A1A" }}>
          Fractional Credential Operations™
        </h1>
        <div className="w-full h-px mb-8" style={{ backgroundColor: "#D4D0C8" }} />
      </FadeIn>
      <FadeIn delay={400}>
        <div className="space-y-4 text-base sm:text-lg leading-relaxed mb-12 text-left max-w-2xl mx-auto" style={{ color: "#444" }}>
          <p className="font-medium" style={{ color: "#1A1A1A" }}>
            Steward the credential as a durable business unit — not a side project.
          </p>
          <p>Most credentials don't fail at launch.<br />They erode slowly afterward.</p>
          <p className="font-medium" style={{ color: "#1A1A1A" }}>
            Level 4 provides accountable operational ownership.
          </p>
        </div>
      </FadeIn>
      <FadeIn delay={600}>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={onCTA}
            className="btn-accent-gradient text-accent-foreground rounded-sm px-8 py-5 text-base tracking-wide font-medium h-auto"
          >
            Schedule an Operations Conversation
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

/* ─── MODULE 2 — THE QUIET FAILURE PATTERN ─── */
const QuietFailurePattern = () => (
  <section className="px-6 py-28 max-w-6xl mx-auto">
    <FadeIn>
      <SectionMarker numeral="II" />
      <h2 className="font-serif text-3xl sm:text-4xl font-normal mt-4 mb-14 text-foreground">
        Credentials degrade quietly.
      </h2>
    </FadeIn>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
      {/* Left — Timeline Diagram */}
      <FadeIn delay={200}>
        <div className="pr-0 md:pr-12 md:border-r border-border pb-12 md:pb-0">
          <svg viewBox="0 0 280 420" className="w-full max-w-xs mx-auto" style={{ overflow: "visible" }}>
            {["Launch", "6 Months", "12 Months", "Drift"].map((label, i) => {
              const y = 20 + i * 90;
              const w = label.length * 9 + 40;
              const x = 140 - w / 2;
              const isDrift = i === 3;
              return (
                <g key={label}>
                  <rect x={x} y={y} width={w} height="36" rx="2"
                    fill={isDrift ? "rgba(200,165,75,0.15)" : "rgba(255,255,255,0.08)"}
                    stroke={isDrift ? "rgba(200,165,75,0.4)" : "rgba(255,255,255,0.15)"}
                    strokeWidth="1" />
                  <text x="140" y={y + 23} textAnchor="middle"
                    fill={isDrift ? "hsl(43 47% 54%)" : "hsl(40 6% 96%)"}
                    fontSize="12" fontFamily="Inter, sans-serif" letterSpacing="0.05em">
                    {label}
                  </text>
                  {i < 3 && (
                    <>
                      <line x1="140" y1={y + 36} x2="140" y2={y + 90}
                        stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                      <polygon points={`136,${y + 86} 140,${y + 92} 144,${y + 86}`}
                        fill="rgba(255,255,255,0.2)" />
                    </>
                  )}
                </g>
              );
            })}
            {/* Drift sub-items */}
            {["Inconsistent decisions", "Delayed renewals", "Confused standards", "Operational fatigue"].map((item, i) => (
              <text key={item} x="140" y={395 + i * 18} textAnchor="middle"
                fill="rgba(255,255,255,0.45)" fontSize="10" fontFamily="Inter, sans-serif">
                {item}
              </text>
            ))}
          </svg>
        </div>
      </FadeIn>

      {/* Right — Copy */}
      <FadeIn delay={400}>
        <div className="pl-0 md:pl-12 pt-12 md:pt-0">
          <div className="space-y-4 text-base text-foreground/80 leading-relaxed">
            <p>After launch:</p>
            <ul className="space-y-2 ml-1">
              {[
                "Intake processes evolve by accident",
                "Renewal policies become inconsistent",
                "Instructor calibration slips",
                "Governance decisions get deferred",
                "Vendors operate in silos",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-foreground/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground mt-4">Nothing collapses.</p>
            <p className="text-foreground font-medium">It just weakens.</p>
            <p className="font-serif italic text-muted-foreground pt-4">
              Level 4 exists to prevent slow erosion.
            </p>
          </div>
        </div>
      </FadeIn>
    </div>
  </section>
);

/* ─── MODULE 3 — WHAT FRACTIONAL OPERATIONS MEANS ─── */
const operationalAreas = [
  "Application intake & approval systems",
  "Assessment coordination",
  "Renewal cycles",
  "Governance cadence",
  "Digital ecosystem health",
  "Vendor alignment",
  "Policy maintenance",
  "Revenue tracking",
];

const FractionalOpsMeaning = () => (
  <section className="px-6 py-28" style={{ backgroundColor: "#111111" }}>
    <div className="max-w-4xl mx-auto text-center">
      <FadeIn>
        <SectionMarker numeral="III" />
        <h2 className="font-serif text-3xl sm:text-4xl font-normal mt-4 mb-6 text-foreground">
          One accountable operator.
        </h2>
        <p className="text-base text-muted-foreground mb-14">Not fragmented responsibility.</p>
      </FadeIn>
      <FadeIn delay={200}>
        <p className="text-base text-foreground/80 mb-8">
          Fractional Credential Operations provides structured ownership of:
        </p>
        <ul className="space-y-3 max-w-md mx-auto text-left mb-14">
          {operationalAreas.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-foreground/70">
              <span className="text-accent mt-0.5">—</span>{item}
            </li>
          ))}
        </ul>
      </FadeIn>
      <FadeIn delay={400}>
        <div className="space-y-2">
          <p className="text-foreground font-medium">You retain strategic authority.</p>
          <p className="font-serif italic text-muted-foreground">We steward operational integrity.</p>
        </div>
      </FadeIn>
    </div>
  </section>
);

/* ─── MODULE 4 — THREE ENGAGEMENT LEVELS ─── */
const engagementTiers = [
  {
    title: "Steward",
    price: "$4,000 / month",
    desc: "Oversight & continuity for established programs.",
    items: ["Operational health monitoring", "Risk identification", "Governance support", "Renewal tracking", "Vendor coordination"],
    bestFor: "Best for mature credentials needing stability.",
  },
  {
    title: "Builder",
    price: "$6,500 / month",
    desc: "Oversight plus hands-on execution.",
    prefix: "Includes everything in Steward, plus:",
    items: ["15 hours/month of systems execution", "Process documentation", "Team training", "Backlog management", "Implementation support"],
    bestFor: "Best for growing programs needing momentum.",
  },
  {
    title: "Architect",
    price: "Starting at $10,000 / month",
    desc: "Full operational and strategic ownership.",
    prefix: "Includes everything in Builder, plus:",
    items: ["Credential portfolio strategy", "Revenue model optimization", "Governance board design", "Long-term roadmap development", "Expansion modeling"],
    bestFor: "Best for organizations treating certification as a core business asset.",
  },
];

const EngagementLevels = () => (
  <section className="px-6 py-28" style={lightBg}>
    <div className="max-w-6xl mx-auto">
      <FadeIn>
        <SectionMarker numeral="IV" />
        <h2 className="font-serif text-3xl sm:text-4xl font-normal mt-4 mb-14" style={{ color: "#1A1A1A" }}>
          Three Engagement Levels
        </h2>
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
        {engagementTiers.map((t, i) => (
          <FadeIn key={t.title} delay={150 * i}>
            <div className={`p-8 border ${lightBorder} h-full flex flex-col`}>
              <h3 className="font-serif text-2xl mb-2" style={{ color: "#1A1A1A" }}>{t.title}</h3>
              <p className="text-sm font-medium mb-4" style={{ color: "hsl(43 47% 44%)" }}>{t.price}</p>
              <p className={`text-sm ${lightMuted} mb-5 leading-relaxed`}>{t.desc}</p>
              {t.prefix && <p className={`text-xs ${lightMuted} mb-3`}>{t.prefix}</p>}
              <ul className="space-y-2 mb-6">
                {t.items.map((item) => (
                  <li key={item} className={`flex items-start gap-2 text-sm ${lightMuted}`}>
                    <span className="text-[#C8A54B] mt-0.5">—</span>{item}
                  </li>
                ))}
              </ul>
              <p className={`text-xs font-serif italic ${lightMuted} mt-auto pt-4 border-t ${lightBorder}`}>
                {t.bestFor}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

/* ─── MODULE 5 — WHAT CHANGES OVER TIME ─── */
const timelineStages = [
  {
    label: "First 60 Days",
    title: "Stabilization",
    items: ["Operational risk audit", "Process mapping", "Ownership clarity", "Prioritized backlog"],
  },
  {
    label: "By 90 Days",
    title: "Operating Rhythm",
    items: ["Clear renewal cycles", "Governance cadence established", "Fewer reactive decisions", "Coordinated vendor ecosystem"],
  },
  {
    label: "By 12 Months",
    title: "Institutional Durability",
    items: ["Credential operates independent of personalities", "Policies hold under pressure", "Revenue stabilizes", "Quality remains consistent", "Strategic decisions are deliberate"],
  },
];

const ChangesOverTime = () => (
  <section className="px-6 py-28">
    <div className="max-w-5xl mx-auto">
      <FadeIn>
        <SectionMarker numeral="V" />
        <h2 className="font-serif text-3xl sm:text-4xl font-normal mt-4 mb-14 text-foreground">
          What Changes Over Time
        </h2>
      </FadeIn>

      {/* Timeline bar */}
      <FadeIn delay={200}>
        <div className="flex w-full mb-12">
          {timelineStages.map((s, i) => (
            <div
              key={s.label}
              className={`flex-1 py-3 text-center text-sm border border-border ${i === 2 ? "bg-accent text-accent-foreground font-medium" : "text-muted-foreground"}`}
            >
              {s.label}
            </div>
          ))}
        </div>
      </FadeIn>

      {/* Stage details */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {timelineStages.map((s, i) => (
          <FadeIn key={s.label} delay={300 + i * 100}>
            <div>
              <h3 className="font-serif text-xl mb-4 text-foreground">{s.title}</h3>
              <ul className="space-y-2">
                {s.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-accent mt-0.5">—</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={700}>
        <p className="font-serif italic text-muted-foreground mt-14">
          This is stewardship, not firefighting.
        </p>
      </FadeIn>
    </div>
  </section>
);

/* ─── MODULE 6 — WHO THIS IS FOR ─── */
const forYou = [
  "Have an existing credential or trust mechanism",
  "Are generating recurring revenue",
  "Need centralized ownership",
  "Want long-term durability",
  "Intend to grow responsibly",
];
const notForYou = [
  "Early-stage experiments",
  "Programs without defined standards",
  "Teams unwilling to formalize governance",
  "Founders who want to remain sole operator indefinitely",
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
            <h3 className="font-serif text-2xl mb-8" style={{ color: "#1A1A1A" }}>Level 4 is for organizations that:</h3>
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
            <h3 className="font-serif text-2xl mb-8" style={{ color: "#1A1A1A" }}>Not for:</h3>
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
                l.num === 4
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
          <p className="text-foreground font-medium">Level 3 installs structure.</p>
          <p className="text-foreground font-medium">Level 4 ensures the structure holds.</p>
          <p className="font-serif italic text-muted-foreground mt-2">
            Without stewardship, infrastructure degrades.
          </p>
        </div>
      </FadeIn>
    </div>
  </section>
);

/* ─── MODULE 8 — INVESTMENT FRAMING ─── */
const InvestmentSection = () => (
  <section className="px-6 py-28">
    <div className="max-w-3xl mx-auto text-center">
      <FadeIn>
        <SectionMarker numeral="VIII" />
        <h2 className="font-serif text-3xl sm:text-4xl font-normal mt-4 mb-10 text-foreground">
          Investment Framing
        </h2>
      </FadeIn>
      <FadeIn delay={200}>
        <div className="space-y-4 text-base text-foreground/80 leading-relaxed">
          <p>Fractional operations replaces the need for:</p>
          <ul className="space-y-2 text-left max-w-md mx-auto mt-4 mb-8">
            {[
              "Full-time executive hire",
              "Distributed operational ownership",
              "Reactive vendor coordination",
              "Inconsistent governance support",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-foreground/70">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-foreground font-medium">Engagements begin at $4,000/month.</p>
          <p className="text-muted-foreground mt-4">
            Most organizations scale through Steward → Builder → Architect over time.
          </p>
          <p className="text-muted-foreground">Custom scope defined after operations conversation.</p>
        </div>
      </FadeIn>
    </div>
  </section>
);

/* ─── MODULE 9 — FINAL CTA ─── */
const FinalCTA = ({ onCTA }: { onCTA: () => void }) => (
  <section className="px-6 py-40 text-center" style={{ backgroundColor: "#111111" }}>
    <div className="max-w-3xl mx-auto">
      <FadeIn>
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal leading-tight mb-6 text-foreground">
          Durable systems require stewardship.
        </h2>
        <p className="text-lg text-muted-foreground mb-14">
          Assign ownership before drift begins.
        </p>
      </FadeIn>
      <FadeIn delay={200}>
        <Button
          onClick={onCTA}
          className="btn-accent-gradient text-accent-foreground rounded-sm px-10 py-5 text-lg tracking-wide font-medium h-auto"
        >
          Schedule an Operations Conversation
        </Button>
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
const FractionalCredentialOperations = () => {
  const [assessmentOpen, setAssessmentOpen] = useState(false);
  const openAssessment = () => setAssessmentOpen(true);

  return (
    <div className="bg-background text-foreground min-h-screen">
      <Helmet>
        <title>Fractional Credential Operations™ — Durable Operational Stewardship | Certainly</title>
        <meta name="description" content="Steward your credential as a durable business unit. Fractional operations provides accountable ownership of intake, assessment, governance, and revenue systems." />
        <link rel="canonical" href="https://method.certainly.coop/fractional-credential-operations" />
        <meta property="og:title" content="Fractional Credential Operations™ — Durable Operational Stewardship | Certainly" />
        <meta property="og:description" content="Steward your credential as a durable business unit. Fractional operations provides accountable ownership of intake, assessment, governance, and revenue systems." />
        <meta property="og:url" content="https://method.certainly.coop/fractional-credential-operations" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Fractional Credential Operations™ — Durable Operational Stewardship | Certainly" />
        <meta name="twitter:description" content="Steward your credential as a durable business unit. Fractional operations provides accountable ownership of intake, assessment, governance, and revenue systems." />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Fractional Credential Operations™",
          "description": "Steward your credential as a durable business unit. Accountable ownership of intake, assessment, governance, and revenue systems.",
          "url": "https://method.certainly.coop/fractional-credential-operations",
          "serviceType": "Credential Operations & Stewardship",
          "provider": { "@type": "ProfessionalService", "name": "Certainly", "url": "https://method.certainly.coop" },
          "areaServed": "Worldwide"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "What is Fractional Credential Operations?", "acceptedAnswer": { "@type": "Answer", "text": "Accountable operational stewardship of your credential program — intake, assessment, governance, and revenue systems — on a fractional basis, without hiring a full-time operations team." } },
            { "@type": "Question", "name": "Who is this service designed for?", "acceptedAnswer": { "@type": "Answer", "text": "Organizations that have built or are actively building a certification program and need experienced operational leadership to run it sustainably." } },
            { "@type": "Question", "name": "What does an engagement include?", "acceptedAnswer": { "@type": "Answer", "text": "Structured accountability across your program's operational functions: intake management, assessment coordination, governance oversight, and revenue operations. Typical engagements run 6–12 months." } },
            { "@type": "Question", "name": "Do we need a fully built credential before starting?", "acceptedAnswer": { "@type": "Answer", "text": "Not necessarily. Some organizations engage fractional operations while the credential is still being built, to ensure it's operationally viable from the start." } }
          ]
        })}</script>
      </Helmet>

      <SiteNav onRequestAssessment={openAssessment} />
      <HeroModule onCTA={openAssessment} />
      <Divider />
      <div className="bg-surface noise-overlay">
        <QuietFailurePattern />
      </div>
      <Divider />
      <FractionalOpsMeaning />
      <Divider />
      <EngagementLevels />
      <Divider />
      <div className="bg-surface">
        <ChangesOverTime />
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
      <FinalCTA onCTA={openAssessment} />
      <Divider />
      {/* FAQ Section */}
      <section className="px-6 py-20 max-w-4xl mx-auto">
        <FadeIn>
          <p className="text-xs tracking-[0.25em] uppercase text-accent mb-10">Frequently Asked Questions</p>
          <div className="divide-y divide-border">
            {[
              { q: "What is Fractional Credential Operations?", a: "Accountable operational stewardship of your credential program — intake, assessment, governance, and revenue systems — on a fractional basis, without hiring a full-time operations team." },
              { q: "Who is this service designed for?", a: "Organizations that have built or are actively building a certification program and need experienced operational leadership to run it sustainably." },
              { q: "What does an engagement include?", a: "Structured accountability across your program's operational functions: intake management, assessment coordination, governance oversight, and revenue operations. Typical engagements run 6–12 months." },
              { q: "Do we need a fully built credential before starting?", a: "Not necessarily. Some organizations engage fractional operations while the credential is still being built, to ensure it's operationally viable from the start." },
            ].map((item, i) => (
              <div key={i} className="py-8">
                <h3 className="font-serif text-xl font-normal text-foreground mb-3">{item.q}</h3>
                <p className="text-base text-muted-foreground leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>
      <AssessmentModal open={assessmentOpen} onOpenChange={setAssessmentOpen} />
    </div>
  );
};

export default FractionalCredentialOperations;
