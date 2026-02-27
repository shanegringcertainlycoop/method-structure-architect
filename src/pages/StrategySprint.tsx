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
const HeroModule = ({ onStrategyCall }: { onStrategyCall: () => void }) => (
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
          Level 2
        </p>
      </FadeIn>
      <FadeIn delay={200}>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-tight mb-6" style={{ color: "#1A1A1A" }}>
          Strategy Sprint™
        </h1>
        <div className="w-full h-px mb-8" style={{ backgroundColor: "#D4D0C8" }} />
      </FadeIn>
      <FadeIn delay={400}>
        <div className="space-y-4 text-base sm:text-lg leading-relaxed mb-12 text-left max-w-2xl mx-auto" style={{ color: "#444" }}>
          <p className="font-medium" style={{ color: "#1A1A1A" }}>
            Determine the right trust mechanism for your business — before you build the wrong one.
          </p>
          <p>
            Most expert-led organizations assume they need certification.
            What they actually need is structural clarity.
          </p>
          <p className="font-medium" style={{ color: "#1A1A1A" }}>
            Strategy Sprint is the formal decision gate.
          </p>
        </div>
      </FadeIn>
      <FadeIn delay={600}>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={onStrategyCall}
            className="btn-accent-gradient text-accent-foreground rounded-sm px-8 py-5 text-base tracking-wide font-medium h-auto"
          >
            Book a Strategy Call
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

/* ─── MODULE 2 — THE FALSE ASSUMPTION ─── */
const FalseAssumption = () => (
  <section className="px-6 py-28 max-w-6xl mx-auto">
    <FadeIn>
      <SectionMarker numeral="II" />
      <h2 className="font-serif text-3xl sm:text-4xl font-normal mt-4 mb-14 text-foreground">
        Certification is powerful. It is not automatic.
      </h2>
    </FadeIn>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
      {/* Left — Decision Tree */}
      <FadeIn delay={200}>
        <div className="pr-0 md:pr-12 md:border-r border-border pb-12 md:pb-0">
          <svg viewBox="0 0 320 340" className="w-full max-w-xs mx-auto" style={{ overflow: "visible" }}>
            {/* Scale node */}
            <rect x="110" y="10" width="100" height="36" rx="2" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
            <text x="160" y="33" textAnchor="middle" fill="hsl(40 6% 96%)" fontSize="13" fontFamily="Inter, sans-serif" letterSpacing="0.05em">Scale</text>

            {/* Arrow down */}
            <line x1="160" y1="46" x2="160" y2="80" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
            <polygon points="155,78 160,86 165,78" fill="rgba(255,255,255,0.25)" />

            {/* Certification? node */}
            <rect x="85" y="86" width="150" height="36" rx="2" fill="rgba(200,165,75,0.15)" stroke="rgba(200,165,75,0.4)" strokeWidth="1" />
            <text x="160" y="109" textAnchor="middle" fill="hsl(43 47% 54%)" fontSize="13" fontFamily="Inter, sans-serif" letterSpacing="0.05em">Certification?</text>

            {/* Arrow down */}
            <line x1="160" y1="122" x2="160" y2="156" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
            <polygon points="155,154 160,162 165,154" fill="rgba(255,255,255,0.15)" />

            {/* "Other possible mechanisms" label */}
            <text x="160" y="180" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="10" fontFamily="Inter, sans-serif" letterSpacing="0.08em">OTHER POSSIBLE MECHANISMS</text>

            {/* Mechanism items */}
            {["Licensing", "Internal Standards", "Partnership Frameworks", "Operator Training Systems"].map((item, i) => (
              <g key={item}>
                <rect x="60" y={200 + i * 32} width="200" height="26" rx="2" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />
                <text x="160" y={217 + i * 32} textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="11" fontFamily="Inter, sans-serif">{item}</text>
              </g>
            ))}
          </svg>
        </div>
      </FadeIn>

      {/* Right — Copy */}
      <FadeIn delay={400}>
        <div className="pl-0 md:pl-12 pt-12 md:pt-0">
          <div className="space-y-4 text-base text-foreground/80 leading-relaxed">
            <p>
              Certification is one mechanism for protecting trust as you scale.
            </p>
            <p>
              But not every method should become a credential.
              Not every audience needs verification.
              Not every founder wants to operate a credentialing body.
            </p>
            <p className="text-muted-foreground">When organizations skip the decision stage, they build infrastructure that:</p>
            <ul className="space-y-2 ml-1">
              {[
                "Overcomplicates delivery",
                "Misaligns with market expectations",
                "Consumes operational capacity",
                "Fails to signal clearly",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-foreground/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="font-serif italic text-muted-foreground pt-4">
              Strategy Sprint exists to prevent that mistake.
            </p>
          </div>
        </div>
      </FadeIn>
    </div>
  </section>
);

/* ─── MODULE 3 — WHAT STRATEGY SPRINT EXAMINES ─── */
const dimensions = [
  { title: "Method Clarity", desc: "Is what you teach truly codified and transferable?" },
  { title: "Market Positioning", desc: "Does your audience understand what competence means in your domain?" },
  { title: "Standards Readiness", desc: "Can you define and defend pass/fail criteria?" },
  { title: "Operational Capacity", desc: "Do you have infrastructure to steward credentials responsibly?" },
  { title: "Economic Viability", desc: "Does a certification model align with your revenue strategy and time horizon?" },
];

const ExaminesSection = () => (
  <section className="px-6 py-28" style={{ backgroundColor: "#111111" }}>
    <div className="max-w-6xl mx-auto">
      <FadeIn>
        <SectionMarker numeral="III" />
        <h2 className="font-serif text-3xl sm:text-4xl font-normal mt-4 mb-6 text-foreground">
          We assess your current state across five structural dimensions.
        </h2>
      </FadeIn>
      <FadeIn delay={200}>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-0 mt-14">
          {dimensions.map((d, i) => (
            <div
              key={d.title}
              className={`py-8 md:px-6 ${i < dimensions.length - 1 ? "md:border-r border-border" : ""}`}
            >
              <p className="text-xs tracking-[0.15em] uppercase text-accent mb-3">0{i + 1}</p>
              <h3 className="font-serif text-lg text-foreground mb-3">{d.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
            </div>
          ))}
        </div>
      </FadeIn>
      <FadeIn delay={400}>
        <div className="mt-14 max-w-2xl">
          <p className="text-foreground font-medium">This is not a brainstorming exercise.</p>
          <p className="font-serif italic text-muted-foreground mt-2">It is a structured evaluation.</p>
        </div>
      </FadeIn>
    </div>
  </section>
);

/* ─── MODULE 4 — THE 2–3 WEEK PROCESS ─── */
const weeks = [
  {
    label: "Week 1",
    title: "Discovery & Audit",
    items: ["Founder interviews", "Document review", "Market signal analysis", "Delivery observation (if needed)"],
  },
  {
    label: "Week 2",
    title: "Structural Analysis",
    items: ["Five-dimension scoring", "Risk mapping", "Mechanism modeling"],
  },
  {
    label: "Week 3",
    title: "Decision Framework",
    items: ["Strategic recommendation", "Investment roadmap", "Stakeholder brief"],
  },
];

const ProcessTimeline = () => (
  <section className="px-6 py-28" style={lightBg}>
    <div className="max-w-5xl mx-auto">
      <FadeIn>
        <SectionMarker numeral="IV" />
        <h2 className="font-serif text-3xl sm:text-4xl font-normal mt-4 mb-14" style={{ color: "#1A1A1A" }}>
          Timeline: 2–3 Weeks
        </h2>
      </FadeIn>

      {/* Timeline bar */}
      <FadeIn delay={200}>
        <div className="flex w-full mb-12">
          {weeks.map((w, i) => (
            <div
              key={w.label}
              className={`flex-1 py-3 text-center text-sm border ${lightBorder} ${i === 0 ? "bg-[#C8A54B]/10" : ""}`}
              style={{ color: "#1A1A1A" }}
            >
              <span className="font-medium">{w.label}</span>
            </div>
          ))}
        </div>
      </FadeIn>

      {/* Week details */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {weeks.map((w, i) => (
          <FadeIn key={w.label} delay={300 + i * 100}>
            <div>
              <h3 className="font-serif text-xl mb-4" style={{ color: "#1A1A1A" }}>{w.title}</h3>
              <ul className="space-y-2">
                {w.items.map((item) => (
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

      <FadeIn delay={700}>
        <div className="mt-14 space-y-1">
          <p className="text-sm font-medium" style={{ color: "#1A1A1A" }}>Your time commitment: 3–6 hours total.</p>
          <p className={`text-sm font-serif italic ${lightMuted}`}>This is focused, disciplined work.</p>
        </div>
      </FadeIn>
    </div>
  </section>
);

/* ─── MODULE 5 — WHAT YOU RECEIVE ─── */
const deliverables = [
  {
    title: "Certification Readiness Assessment",
    desc: "Clear evaluation across all five dimensions.",
  },
  {
    title: "Strategic Decision Framework",
    desc: "Is certification right? If so, what type? For whom? At what level of authority?",
  },
  {
    title: "Investment Roadmap",
    desc: "Sequenced next steps with dependencies and timelines.",
  },
  {
    title: "Executive Summary Brief",
    desc: "Board-ready memo for internal alignment.",
  },
];

const DeliverablesSection = () => (
  <section className="px-6 py-28" style={lightBg}>
    <div className="max-w-5xl mx-auto">
      <FadeIn>
        <SectionMarker numeral="V" />
        <h2 className="font-serif text-3xl sm:text-4xl font-normal mt-4 mb-14" style={{ color: "#1A1A1A" }}>
          What You Receive
        </h2>
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {deliverables.map((d, i) => (
          <FadeIn key={d.title} delay={100 * i}>
            <div className={`p-8 border ${lightBorder} h-full`}>
              <h3 className="text-xs tracking-[0.2em] uppercase font-sans font-medium mb-4" style={{ color: "#1A1A1A" }}>
                {d.title}
              </h3>
              <p className={`text-sm ${lightMuted} leading-relaxed`}>{d.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
      <FadeIn delay={500}>
        <p className={`text-sm ${lightMuted} mt-10 font-serif italic`}>
          You leave with clarity — not momentum toward something premature.
        </p>
      </FadeIn>
    </div>
  </section>
);

/* ─── MODULE 6 — THREE POSSIBLE OUTCOMES ─── */
const outcomes = [
  {
    label: "Outcome A",
    title: "Proceed",
    desc: "Certification is structurally aligned. You have clarity on scope, audience, standards, and governance.",
  },
  {
    label: "Outcome B",
    title: "Strengthen First",
    desc: "Direction is correct. Foundations need reinforcement (often Method Capture).",
  },
  {
    label: "Outcome C",
    title: "Pivot",
    desc: "Certification is not the right mechanism. A different structure better protects trust.",
  },
];

const OutcomesSection = () => (
  <section className="px-6 py-28">
    <div className="max-w-5xl mx-auto">
      <FadeIn>
        <SectionMarker numeral="VI" />
        <h2 className="font-serif text-3xl sm:text-4xl font-normal mt-4 mb-14 text-foreground">
          Three Possible Outcomes
        </h2>
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
        {outcomes.map((o, i) => (
          <FadeIn key={o.title} delay={200 * i}>
            <div className={`p-8 border border-border h-full ${i < outcomes.length - 1 ? "md:border-r-0" : ""}`}>
              <p className="text-xs tracking-[0.2em] uppercase text-accent mb-2">{o.label}</p>
              <h3 className="font-serif text-2xl text-foreground mb-4">{o.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{o.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
      <FadeIn delay={700}>
        <div className="mt-14 max-w-2xl">
          <p className="text-foreground font-medium">All three are successful outcomes.</p>
          <p className="font-serif italic text-muted-foreground mt-2">Clarity prevents misallocation of years.</p>
        </div>
      </FadeIn>
    </div>
  </section>
);

/* ─── MODULE 7 — WHO THIS IS FOR ─── */
const forYou = [
  "Founders with an active method",
  "Organizations considering certification",
  "Teams debating whether to build",
  "Leadership groups needing alignment",
  "Programs with growing instructor networks",
];
const notForYou = [
  "Early conceptual ideas",
  "Programs without delivery history",
  "Teams seeking marketing polish",
  "Organizations unwilling to say no to certification",
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
            <h3 className="font-serif text-2xl mb-8" style={{ color: "#1A1A1A" }}>Strategy Sprint is designed for:</h3>
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

/* ─── MODULE 8 — WHERE THIS FITS ─── */
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
                l.num === 2
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
          <p className="text-foreground font-medium">Level 3 builds.</p>
          <p className="font-serif italic text-muted-foreground mt-2">
            Skipping Level 2 is how organizations build credentials they later regret.
          </p>
        </div>
      </FadeIn>
    </div>
  </section>
);

/* ─── MODULE 9 — INVESTMENT & POSITIONING ─── */
const InvestmentSection = () => (
  <section className="px-6 py-28">
    <div className="max-w-3xl mx-auto text-center">
      <FadeIn>
        <SectionMarker numeral="IX" />
        <h2 className="font-serif text-3xl sm:text-4xl font-normal mt-4 mb-10 text-foreground">
          Investment & Positioning
        </h2>
      </FadeIn>
      <FadeIn delay={200}>
        <div className="space-y-4 text-base text-foreground/80 leading-relaxed">
          <p className="text-foreground font-medium">2–3 week engagement</p>
          <p className="text-muted-foreground">Pricing available upon request.</p>
          <p className="text-muted-foreground mt-6">
            If you proceed into a 90-Day Pilot, this investment is credited.
          </p>
        </div>
      </FadeIn>
      <FadeIn delay={400}>
        <div className="mt-14 space-y-2">
          <p className="text-foreground font-medium">This is a decision gate.</p>
          <p className="text-muted-foreground">Not a workshop.</p>
          <p className="text-muted-foreground">Not a brainstorming session.</p>
          <p className="text-muted-foreground">Not a pitch toward certification.</p>
        </div>
      </FadeIn>
    </div>
  </section>
);

/* ─── MODULE 10 — FINAL CTA ─── */
const FinalCTA = ({ onStrategyCall }: { onStrategyCall: () => void }) => (
  <section className="px-6 py-40 text-center" style={{ backgroundColor: "#111111" }}>
    <div className="max-w-3xl mx-auto">
      <FadeIn>
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal leading-tight mb-6 text-foreground">
          Decide deliberately.
        </h2>
        <p className="text-lg text-muted-foreground mb-14">
          Build nothing until you know what should endure.
        </p>
      </FadeIn>
      <FadeIn delay={200}>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={onStrategyCall}
            className="btn-accent-gradient text-accent-foreground rounded-sm px-10 py-5 text-lg tracking-wide font-medium h-auto"
          >
            Schedule Strategy Sprint Conversation
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-sm px-10 py-5 text-lg tracking-wide font-medium h-auto border-border text-foreground hover:bg-surface"
          >
            <Link to="/levels">
              Explore Level 3 <ArrowRight className="w-4 h-4 ml-2" />
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
const StrategySprint = () => {
  const [assessmentOpen, setAssessmentOpen] = useState(false);
  const openAssessment = () => setAssessmentOpen(true);

  return (
    <div className="bg-background text-foreground min-h-screen">
      <Helmet>
        <title>Strategy Sprint™ — Certification Readiness Assessment | Certainly</title>
        <meta name="description" content="Determine the right trust mechanism for your business before you build the wrong one. A 2–3 week structured evaluation across five dimensions." />
        <link rel="canonical" href="https://method.certainly.coop/strategy-sprint" />
        <meta property="og:title" content="Strategy Sprint™ — Certification Readiness Assessment | Certainly" />
        <meta property="og:description" content="Determine the right trust mechanism for your business before you build the wrong one. A 2–3 week structured evaluation across five dimensions." />
        <meta property="og:url" content="https://method.certainly.coop/strategy-sprint" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Strategy Sprint™ — Certification Readiness Assessment | Certainly" />
        <meta name="twitter:description" content="Determine the right trust mechanism for your business before you build the wrong one. A 2–3 week structured evaluation across five dimensions." />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Strategy Sprint™",
          "description": "Determine the right trust mechanism for your business before you build the wrong one. A 2–3 week structured evaluation across five dimensions.",
          "url": "https://method.certainly.coop/strategy-sprint",
          "serviceType": "Certification Strategy Consulting",
          "provider": { "@type": "ProfessionalService", "name": "Certainly", "url": "https://method.certainly.coop" },
          "areaServed": "Worldwide"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "What is a Strategy Sprint?", "acceptedAnswer": { "@type": "Answer", "text": "A 2–3 week structured evaluation that determines the right trust mechanism for your business — before you commit resources to building the wrong one." } },
            { "@type": "Question", "name": "Who is the Strategy Sprint for?", "acceptedAnswer": { "@type": "Answer", "text": "Expert-led founders and institutions producing results who are ready to formalize their structure but haven't yet determined whether they need certification, licensing, or a different approach." } },
            { "@type": "Question", "name": "What do we get at the end?", "acceptedAnswer": { "@type": "Answer", "text": "A formal recommendation document across five dimensions, with a clear rationale and defined next steps." } },
            { "@type": "Question", "name": "Do we need an existing certification program to participate?", "acceptedAnswer": { "@type": "Answer", "text": "No. The Sprint is designed for organizations that haven't built yet and want to make the right structural decision before investing." } },
            { "@type": "Question", "name": "What happens after the Strategy Sprint?", "acceptedAnswer": { "@type": "Answer", "text": "If the recommendation is to build, you move to Trust Mechanism Modules or a full architecture engagement. You'll know exactly what to prioritize and why." } }
          ]
        })}</script>
      </Helmet>

      <SiteNav onRequestAssessment={openAssessment} />
      <HeroModule onStrategyCall={openAssessment} />
      <Divider />
      <div className="bg-surface noise-overlay">
        <FalseAssumption />
      </div>
      <Divider />
      <ExaminesSection />
      <Divider />
      <ProcessTimeline />
      <Divider />
      <DeliverablesSection />
      <Divider />
      <div className="bg-surface">
        <OutcomesSection />
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
      <FinalCTA onStrategyCall={openAssessment} />
      <Divider />
      {/* FAQ Section */}
      <section className="px-6 py-20 max-w-4xl mx-auto">
        <FadeIn>
          <p className="text-xs tracking-[0.25em] uppercase text-accent mb-10">Frequently Asked Questions</p>
          <div className="divide-y divide-border">
            {[
              { q: "What is a Strategy Sprint?", a: "A 2–3 week structured evaluation that determines the right trust mechanism for your business — before you commit resources to building the wrong one." },
              { q: "Who is the Strategy Sprint for?", a: "Expert-led founders and institutions producing results who are ready to formalize their structure but haven't yet determined whether they need certification, licensing, or a different approach." },
              { q: "What do we get at the end?", a: "A formal recommendation document across five dimensions, with a clear rationale and defined next steps." },
              { q: "Do we need an existing certification program to participate?", a: "No. The Sprint is designed for organizations that haven't built yet and want to make the right structural decision before investing." },
              { q: "What happens after the Strategy Sprint?", a: "If the recommendation is to build, you move to Trust Mechanism Modules or a full architecture engagement. You'll know exactly what to prioritize and why." },
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

export default StrategySprint;
