import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ArrowRight, ChevronDown } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import AssessmentModal from "@/components/AssessmentModal";
import SiteNav from "@/components/SiteNav";
import certainlyLogo from "@/assets/certainly-logo.png";

/* ─── SHARED HELPERS ─── */
const Divider = () => <div className="w-full h-px bg-border" />;
const SectionMarker = ({ numeral }: { numeral: string }) => (
  <span className="font-serif text-accent text-sm tracking-widest">{numeral}</span>
);

/* Nav is now shared via SiteNav */

/* ─── MODULE 1 — HERO ─── */
const HeroModule = () => (
  <section className="min-h-[80vh] flex items-center justify-center px-6 pt-24 pb-20">
    <div className="text-center max-w-3xl mx-auto">
      <FadeIn>
        <p className="text-xs tracking-[0.3em] uppercase text-accent mb-10">Systems of Trust™</p>
      </FadeIn>
      <FadeIn delay={200}>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-tight mb-14">
          A Framework for Designing Durable Authority
        </h1>
      </FadeIn>
      <FadeIn delay={400}>
        <div className="space-y-2 text-base sm:text-lg text-muted-foreground leading-relaxed mb-12">
          <p>A hiring manager relies on a designation.</p>
          <p>A client relies on a methodology.</p>
          <p>A regulator relies on a standard.</p>
          <p>A board relies on governance.</p>
        </div>
      </FadeIn>
      <FadeIn delay={600}>
        <p className="text-lg sm:text-xl text-foreground font-serif italic">
          Trust in professional contexts follows structure.
        </p>
      </FadeIn>
    </div>
  </section>
);

/* ─── MODULE 2 — CORE DEFINITION ─── */
const definitionBullets = [
  "Where authority is grounded",
  "How credibility moves between parties",
  "How competence becomes visible",
  "What preserves standards",
  "Where vulnerability concentrates",
];

const CoreDefinition = () => (
  <section className="px-6 py-28 max-w-5xl mx-auto">
    <FadeIn>
      <SectionMarker numeral="II" />
      <h2 className="font-serif text-3xl sm:text-4xl font-normal mt-4 mb-12">
        What Is a System of Trust?
      </h2>
    </FadeIn>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
      <FadeIn delay={200}>
        <p className="text-lg text-foreground leading-[1.9]">
          A System of Trust is the architecture that makes credibility <em className="text-accent not-italic">transferable</em>, <em className="text-accent not-italic">legible</em>, <em className="text-accent not-italic">defensible</em>, and <em className="text-accent not-italic">sustainable under scale</em>.
        </p>
      </FadeIn>
      <FadeIn delay={400}>
        <div>
          <p className="text-sm text-muted-foreground mb-4 tracking-wide">It explains:</p>
          <ul className="space-y-3">
            {definitionBullets.map((item) => (
              <li key={item} className="flex items-start gap-3 text-base text-foreground/80">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </FadeIn>
    </div>
    <FadeIn delay={600}>
      <p className="text-base text-muted-foreground mt-12 font-serif italic">
        Trust behaves predictably when its structure is understood.
      </p>
    </FadeIn>
  </section>
);

/* ─── MODULE 3 — FIVE DIMENSIONS ─── */
const dimensions = [
  {
    title: "Source",
    subtitle: "Where trust originates",
    body: "Authority derives from identifiable foundations: research and theory, demonstrated outcomes, institutional backing, market validation.",
    detail: "The nature of the source determines what can be credibly claimed.",
  },
  {
    title: "Transfer",
    subtitle: "How trust moves",
    body: "Trust requires a pathway. Documentation, learning structures, assessment, and demonstrated outcomes allow credibility to move beyond the originator.",
    detail: "Strong transfer enables scale while preserving quality.",
  },
  {
    title: "Signal",
    subtitle: "How trust is recognized",
    body: "Trust must be legible to function. Language, positioning, designation systems, and verification tools allow others to interpret what competence represents.",
    detail: "Clarity in signal strengthens adoption and recognition.",
  },
  {
    title: "Integrity",
    subtitle: "What protects trust",
    body: "Growth introduces operational and economic pressures. Governance structures, decision rights, and quality controls preserve coherence as demand increases.",
    detail: "Integrity sustains meaning over time.",
  },
  {
    title: "Risk",
    subtitle: "Where trust is vulnerable",
    body: "Every trust system carries exposure. Operational limits, reputational sensitivity, governance concentration, and economic alignment determine where fragility exists.",
    detail: "Mapping risk allows intentional mitigation.",
  },
];

const FiveDimensions = () => (
  <section className="px-6 py-28 max-w-6xl mx-auto">
    <FadeIn>
      <SectionMarker numeral="III" />
      <h2 className="font-serif text-3xl sm:text-4xl font-normal mt-4 mb-4">
        The Five Structural Dimensions of Trust
      </h2>
      <p className="text-base text-muted-foreground mb-14">
        Every durable trust system operates across five dimensions.
      </p>
    </FadeIn>
    <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide -mr-6 pr-6">
      {dimensions.map((dim, i) => (
        <FadeIn key={dim.title} delay={120 * i}>
          <Collapsible>
            <div className="border border-border rounded-sm bg-card p-8 flex flex-col min-w-[260px] w-[260px] snap-start">
              <p className="text-xs tracking-[0.2em] text-accent mb-3 font-sans">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="font-serif text-2xl mb-1 text-foreground">{dim.title}</h3>
              <p className="text-xs text-muted-foreground mb-5">{dim.subtitle}</p>
              <p className="text-sm text-foreground/80 leading-relaxed mb-4 flex-1">{dim.body}</p>
              <CollapsibleContent>
                <p className="text-sm text-muted-foreground font-serif italic leading-relaxed pt-2 border-t border-border mt-2">
                  {dim.detail}
                </p>
              </CollapsibleContent>
              <CollapsibleTrigger className="flex items-center gap-1 text-xs text-accent mt-3 hover:text-accent/80 transition-colors">
                <ChevronDown className="w-3 h-3" />
                <span>More</span>
              </CollapsibleTrigger>
            </div>
          </Collapsible>
        </FadeIn>
      ))}
    </div>
    <div className="flex items-center gap-2 mt-6 text-xs text-muted-foreground tracking-wide">
      <span>Scroll</span>
      <span className="w-8 h-px bg-muted-foreground/40" />
      <span>→</span>
    </div>
  </section>
);

/* ─── MODULE 4 — SYSTEM INTERACTION DIAGRAM ─── */
const SystemDiagram = () => {
  const labels = ["Source", "Transfer", "Signal", "Integrity", "Risk"];
  const cx = 200, cy = 200, r = 140;
  const points = labels.map((_, i) => {
    const angle = (Math.PI * 2 * i) / 5 - Math.PI / 2;
    return { x: cx + r * Math.cos(angle), y: cy + r * Math.sin(angle) };
  });

  return (
    <section className="px-6 py-28 max-w-4xl mx-auto text-center">
      <FadeIn>
        <SectionMarker numeral="IV" />
        <h2 className="font-serif text-3xl sm:text-4xl font-normal mt-4 mb-4">System Interaction</h2>
        <p className="text-base text-muted-foreground mb-12">
          The five dimensions operate as a single architecture.
        </p>
      </FadeIn>
      <FadeIn delay={200}>
        <div className="flex justify-center mb-12">
          <svg viewBox="0 0 400 400" className="w-full max-w-[360px]">
            {/* Connection lines */}
            {points.map((p, i) => {
              const next = points[(i + 1) % 5];
              return (
                <line
                  key={`line-${i}`}
                  x1={p.x} y1={p.y} x2={next.x} y2={next.y}
                  stroke="hsl(43 47% 54%)"
                  strokeWidth="1"
                  strokeOpacity="0.4"
                />
              );
            })}
            {/* Cross connections */}
            {points.map((p, i) =>
              points.map((q, j) =>
                j > i + 1 && j !== (i + 4) % 5 ? (
                  <line
                    key={`cross-${i}-${j}`}
                    x1={p.x} y1={p.y} x2={q.x} y2={q.y}
                    stroke="hsl(43 47% 54%)"
                    strokeWidth="0.5"
                    strokeOpacity="0.15"
                  />
                ) : null
              )
            )}
            {/* Nodes */}
            {points.map((p, i) => (
              <g key={labels[i]}>
                <circle cx={p.x} cy={p.y} r="28" fill="hsl(0 0% 8%)" stroke="hsl(43 47% 54%)" strokeWidth="1" />
                <text
                  x={p.x} y={p.y + 1}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="hsl(40 6% 96%)"
                  fontSize="11"
                  fontFamily="Inter, sans-serif"
                  fontWeight="400"
                  letterSpacing="0.05em"
                >
                  {labels[i]}
                </text>
              </g>
            ))}
          </svg>
        </div>
      </FadeIn>
      <FadeIn delay={400}>
        <div className="space-y-2 text-sm text-muted-foreground max-w-xl mx-auto text-left">
          <p>The nature of the source shapes what can be transferred.</p>
          <p>The strength of transfer determines what claims signal can support.</p>
          <p>Signal clarity influences how integrity must be maintained.</p>
          <p>Integrity decisions affect risk concentration.</p>
        </div>
      </FadeIn>
    </section>
  );
};

/* ─── MODULE 5 — CONSEQUENCES ─── */
const consequences = [
  { dimension: "Source", consequence: "Claims collapse under scrutiny" },
  { dimension: "Transfer", consequence: "Founder dependency persists" },
  { dimension: "Signal", consequence: "Market confusion increases" },
  { dimension: "Integrity", consequence: "Standards drift" },
  { dimension: "Risk", consequence: "Fragility scales" },
];

const ConsequencesModule = () => (
  <section className="px-6 py-28 max-w-5xl mx-auto">
    <FadeIn>
      <SectionMarker numeral="V" />
      <h2 className="font-serif text-3xl sm:text-4xl font-normal mt-4 mb-12">Why It Matters</h2>
    </FadeIn>
    <div className="space-y-0">
      {consequences.map((c, i) => (
        <FadeIn key={c.dimension} delay={100 * i}>
          <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 py-5 border-b border-border">
            <span className="text-foreground text-base">
              When <span className="font-serif italic text-accent">{c.dimension}</span> is weak
            </span>
            <span className="text-muted-foreground text-sm hidden sm:inline">—</span>
            <span className="text-muted-foreground text-base">{c.consequence}</span>
          </div>
        </FadeIn>
      ))}
    </div>
  </section>
);

/* ─── MODULE 6 — APPLICATION CONTEXTS ─── */
const contexts = [
  { title: "Practitioner Methodologies", desc: "Proprietary frameworks seeking structured scale beyond the originator." },
  { title: "Professional Credentials", desc: "Designation programs defining and verifying competence in specialized domains." },
  { title: "Organizational Brands", desc: "Institutions where brand authority depends on consistent delivery standards." },
  { title: "Standards Bodies", desc: "Organizations stewarding legitimacy across distributed networks of practitioners." },
  { title: "Expert-Led Businesses", desc: "Advisory and consulting firms expanding delivery while preserving quality." },
];

const ApplicationContexts = () => (
  <section className="px-6 py-28 max-w-5xl mx-auto">
    <FadeIn>
      <SectionMarker numeral="VI" />
      <h2 className="font-serif text-3xl sm:text-4xl font-normal mt-4 mb-6">Application</h2>
      <p className="text-base text-muted-foreground mb-12">
        Systems of Trust™ is applied in contexts where professional authority must endure.
      </p>
    </FadeIn>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-0">
      {contexts.map((ctx, i) => (
        <FadeIn key={ctx.title} delay={100 * i}>
          <div className="flex items-start gap-4 py-5 border-b border-border">
            <span className="text-accent font-serif text-sm tabular-nums shrink-0">{String(i + 1).padStart(2, "0")}</span>
            <div>
              <p className="text-base text-foreground mb-1">{ctx.title}</p>
              <p className="text-sm text-muted-foreground">{ctx.desc}</p>
            </div>
          </div>
        </FadeIn>
      ))}
    </div>
  </section>
);

/* ─── MODULE 7 — TRANSLATION INTO OUR WORK ─── */
const workItems = [
  { text: "Codifying and structuring methodologies", dim: "Transfer" },
  { text: "Designing competence verification systems", dim: "Transfer + Integrity" },
  { text: "Clarifying designation signal and market legibility", dim: "Signal" },
  { text: "Establishing governance and operational discipline", dim: "Integrity" },
  { text: "Mapping structural risk before scale", dim: "Risk" },
];

const TranslationModule = () => (
  <section className="px-6 py-28 max-w-5xl mx-auto">
    <FadeIn>
      <SectionMarker numeral="VII" />
      <h2 className="font-serif text-3xl sm:text-4xl font-normal mt-4 mb-6">
        Applying Systems of Trust™
      </h2>
      <p className="text-base text-muted-foreground mb-10">
        We use this framework to design durable authority structures for expert-led organizations.
      </p>
    </FadeIn>
    <ul className="space-y-4 mb-10">
      {workItems.map((item, i) => (
        <FadeIn key={item.text} delay={80 * i}>
          <li className="flex items-start gap-3 text-base text-foreground/80">
            <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
            <span>
              {item.text} <span className="text-sm text-muted-foreground">({item.dim})</span>
            </span>
          </li>
        </FadeIn>
      ))}
    </ul>
    <FadeIn delay={600}>
      <p className="text-sm text-muted-foreground leading-relaxed">
        Certification is one mechanism within this architecture. Licensing, partnership frameworks, internal standards, and operational systems are others. The appropriate mechanism depends on the trust architecture required.
      </p>
    </FadeIn>
  </section>
);

/* ─── MODULE 8 — ENTRY POINTS ─── */
const entryPoints = [
  { label: "Understand your existing trust architecture", dest: "Trust Architecture™ Review" },
  { label: "Document and preserve your method", dest: "Method Capture™" },
  { label: "Determine the appropriate trust mechanism", dest: "Strategy Sprint™" },
  { label: "Design and pilot a credential", dest: "90-Day Pilot" },
  { label: "Install long-term operational stewardship", dest: "Fractional Credential Operations™" },
];

const EntryPoints = ({ onRequestAssessment }: { onRequestAssessment: () => void }) => (
  <section className="px-6 py-28 max-w-5xl mx-auto">
    <FadeIn>
      <SectionMarker numeral="VIII" />
      <h2 className="font-serif text-3xl sm:text-4xl font-normal mt-4 mb-12">Entry Points</h2>
    </FadeIn>
    <div className="space-y-0">
      {entryPoints.map((ep, i) => (
        <FadeIn key={ep.dest} delay={80 * i}>
          <button
            onClick={onRequestAssessment}
            className="w-full flex items-center justify-between py-5 border-b border-border text-left group hover:bg-surface/50 transition-colors px-2 -mx-2"
          >
            <div>
              <p className="text-base text-foreground mb-0.5">{ep.label}</p>
              <p className="text-sm text-accent">{ep.dest}</p>
            </div>
            <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors shrink-0" />
          </button>
        </FadeIn>
      ))}
    </div>
  </section>
);

/* ─── MODULE 9 — CLOSE ─── */
const ClosingModule = ({ onRequestAssessment }: { onRequestAssessment: () => void }) => (
  <section className="px-6 py-40 text-center">
    <div className="max-w-3xl mx-auto">
      <FadeIn>
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal leading-tight mb-8 text-foreground">
          Trust compounds when its structure is deliberate.
        </h2>
        <p className="text-lg text-muted-foreground mb-14">Authority requires discipline.</p>
        <Button
          onClick={onRequestAssessment}
          className="btn-accent-gradient text-accent-foreground rounded-sm px-12 py-5 text-lg tracking-wide font-medium h-auto"
        >
          Request a Method Audit
        </Button>
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
const SystemsOfTrust = () => {
  const [assessmentOpen, setAssessmentOpen] = useState(false);
  const openAssessment = () => setAssessmentOpen(true);

  return (
    <div className="bg-background text-foreground min-h-screen">
      <Helmet>
        <title>Systems of Trust™ — A Framework for Designing Durable Authority | Certainly</title>
        <meta name="description" content="Systems of Trust™ is Certainly's framework for evaluating and designing durable professional authority across five dimensions: Source, Transfer, Signal, Integrity, and Risk." />
        <link rel="canonical" href="https://method.certainly.coop/systems-of-trust" />
        <meta property="og:title" content="Systems of Trust™ — A Framework for Designing Durable Authority | Certainly" />
        <meta property="og:description" content="A structured framework for understanding how professional trust works — and how to design it so it scales without dilution." />
        <meta property="og:url" content="https://method.certainly.coop/systems-of-trust" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Systems of Trust™ — A Framework for Designing Durable Authority | Certainly" />
        <meta name="twitter:description" content="A structured framework for understanding how professional trust works — and how to design it so it scales without dilution." />
      </Helmet>
      <SiteNav onRequestAssessment={openAssessment} />
      <HeroModule />
      <Divider />
      <div className="bg-surface noise-overlay">
        <CoreDefinition />
      </div>
      <Divider />
      <FiveDimensions />
      <Divider />
      <div className="bg-surface">
        <SystemDiagram />
      </div>
      <Divider />
      <ConsequencesModule />
      <Divider />
      <div className="bg-surface noise-overlay">
        <ApplicationContexts />
      </div>
      <Divider />
      <TranslationModule />
      <Divider />
      <div className="bg-surface">
        <EntryPoints onRequestAssessment={openAssessment} />
      </div>
      <Divider />
      <ClosingModule onRequestAssessment={openAssessment} />
      <AssessmentModal open={assessmentOpen} onOpenChange={setAssessmentOpen} />
    </div>
  );
};

export default SystemsOfTrust;
