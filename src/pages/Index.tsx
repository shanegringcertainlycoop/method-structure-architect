import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Check } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import RevealCard from "@/components/RevealCard";
import AssessmentModal from "@/components/AssessmentModal";
import romanBust from "@/assets/roman-bust-hero.png";
import certainlyLogo from "@/assets/certainly-logo.png";

const Divider = () => <div className="w-full h-px bg-border" />;

const SectionMarker = ({ numeral, className = "" }: { numeral: string; className?: string }) => (
  <span className={`font-serif text-accent text-sm tracking-widest ${className}`}>{numeral}</span>
);

/* ─── NAV ─── */
const Nav = ({ onRequestAssessment }: { onRequestAssessment: () => void }) => (
  <nav className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center border-b border-border bg-background/80 backdrop-blur-sm">
    <img src={certainlyLogo} alt="Certainly" className="h-8" />
    <Button
      onClick={onRequestAssessment}
      size="sm"
      className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-sm text-xs tracking-wide"
    >
      Request a Method Audit
    </Button>
  </nav>
);

/* ─── HERO ─── */
const Hero = ({ onRequestAssessment }: { onRequestAssessment: () => void }) => (
  <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden pt-16">
    <div className="absolute inset-0 flex items-end justify-end opacity-20 pointer-events-none select-none overflow-hidden">
      <img
        src={romanBust}
        alt=""
        className="w-full h-full object-contain object-right-bottom grayscale"
        style={{ mixBlendMode: "luminosity" }}
      />
    </div>
    <div className="relative z-10 text-center flex flex-col items-center">
      <FadeIn>
        <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-12">
          Method Architecture &amp; Advisory
        </p>
      </FadeIn>
      <FadeIn delay={200}>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-tight max-w-4xl mb-8">
          Reveal Your Method.<br />
          Build the Structure.<br />
          Steward the System.
        </h1>
      </FadeIn>
      <FadeIn delay={400}>
        <p className="max-w-2xl text-muted-foreground leading-relaxed text-base sm:text-lg mb-12">
          Certainly partners with founders and institutions to extract, document, and guide the evolution of their proprietary method — so it can scale through certification, technology, and disciplined growth.
        </p>
      </FadeIn>
      <FadeIn delay={600}>
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <Button
            onClick={onRequestAssessment}
            className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-sm px-8 py-3 text-sm tracking-wide"
          >
            Request a Method Audit
          </Button>
          <Button
            variant="outline"
            className="rounded-sm px-8 py-3 text-sm tracking-wide border-border text-foreground hover:bg-foreground hover:text-background"
            onClick={() => document.getElementById("lifecycle")?.scrollIntoView({ behavior: "smooth" })}
          >
            See the Method Lifecycle™
          </Button>
        </div>
        <p className="text-xs text-muted-foreground tracking-wide italic">
          Selective long-term advisory engagements.
        </p>
      </FadeIn>
    </div>
  </section>
);

/* ─── SECTION I — THE PROBLEM ─── */
const problemItems = [
  "Your framework lives in conversations.",
  "You explain it differently each time.",
  "Clients depend on you, not a system.",
  "Marketing feels imprecise.",
  "Certification feels premature.",
  "Technology feels disconnected.",
];

const TheProblem = () => (
  <section className="px-6 py-32 max-w-5xl mx-auto">
    <FadeIn>
      <div className="border border-border rounded-sm bg-card p-8 md:p-12">
        <SectionMarker numeral="I" />
        <h2 className="font-serif text-3xl sm:text-4xl font-normal mt-4 mb-6">
          Most Methods Stall Before They Scale.
        </h2>
        <p className="text-base text-muted-foreground mb-4">You already have results.</p>
        <p className="text-base text-foreground mb-8">But:</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-10">
          {problemItems.map((item, i) => (
            <FadeIn key={item} delay={150 * i}>
              <div className="border border-border rounded-sm bg-surface px-4 py-5 text-center">
                <p className="text-sm text-muted-foreground">{item}</p>
              </div>
            </FadeIn>
          ))}
        </div>
        <p className="text-base text-foreground mb-2">Your expertise works.</p>
        <p className="text-base text-foreground mb-8">It simply lacks structure.</p>
        <p className="text-base text-foreground font-serif italic">What Is Not Structured Cannot Endure.</p>
      </div>
    </FadeIn>
  </section>
);

/* ─── SECTION II — THE METHOD LIFECYCLE™ ─── */
const lifecyclePhases = [
  {
    num: "1",
    title: "Method",
    intro: "Your proprietary approach.",
    bullets: ["The way you think", "The way you deliver results"],
    closing: "Often powerful. Rarely documented.",
  },
  {
    num: "2",
    title: "Structure",
    intro: "We extract and formalize it.",
    bullets: ["Named constructs", "Defined principles", "Clear language", "Documented IP", "Standards and sequencing"],
    closing: "Structure transforms intuition into clarity.",
  },
  {
    num: "3",
    title: "Scale",
    intro: "Once structured, your method can support:",
    bullets: ["Certification programs", "Licensing models", "Curriculum and programming", "Marketing precision", "Technology platforms"],
    closing: "Scale without structure creates noise. Scale with structure creates authority.",
  },
  {
    num: "4",
    title: "Stewardship",
    intro: "This is where most firms fail.",
    secondIntro: "A method is not static. It must evolve with discipline.",
    bulletIntro: "Certainly remains involved to:",
    bullets: ["Maintain coherence", "Protect standards", "Guide expansion", "Align certification and tech decisions", "Prevent drift"],
    closing: "This is long-term advisory. Not a one-time project.",
  },
];

const stepLabels = ["Method", "Structure", "Scale", "Stewardship"];

const MethodLifecycle = () => (
  <section id="lifecycle" className="px-6 py-32 max-w-5xl mx-auto">
    <FadeIn>
      <SectionMarker numeral="II" />
      <h2 className="font-serif text-3xl sm:text-4xl font-normal mt-4 mb-12">The Method Lifecycle™</h2>
    </FadeIn>

    {/* Step indicator */}
    <FadeIn delay={100}>
      <div className="flex items-center justify-center gap-0 mb-16">
        {stepLabels.map((label, i) => (
          <div key={label} className="flex items-center">
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full border border-accent/40 flex items-center justify-center">
                <span className="text-xs text-accent font-serif">{i + 1}</span>
              </div>
              <span className="text-[10px] text-muted-foreground mt-2 tracking-wider">{label}</span>
            </div>
            {i < stepLabels.length - 1 && (
              <div className="w-10 sm:w-16 h-px bg-border mx-2 -mt-5" />
            )}
          </div>
        ))}
      </div>
    </FadeIn>

    <div className="space-y-4">
      {lifecyclePhases.map((phase, i) => (
        <FadeIn key={phase.num} delay={150 * i}>
          <Collapsible>
            <div className="border border-border rounded-sm bg-surface p-6 md:p-8">
              <CollapsibleTrigger className="w-full text-left cursor-pointer group">
                <div className="flex items-baseline gap-4">
                  <span className="text-accent text-sm tracking-widest font-sans">{phase.num}.</span>
                  <h3 className="font-serif text-xl">{phase.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground mt-2 ml-8">{phase.intro}</p>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="ml-8 mt-4 pt-4 border-t border-border">
                  {"secondIntro" in phase && phase.secondIntro && (
                    <p className="text-sm text-muted-foreground mb-4">{phase.secondIntro}</p>
                  )}
                  {"bulletIntro" in phase && phase.bulletIntro && (
                    <p className="text-sm text-muted-foreground mb-2">{phase.bulletIntro}</p>
                  )}
                  <ul className="space-y-2 mb-4">
                    {phase.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <span className="w-1 h-1 rounded-full bg-accent mt-2 shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-foreground font-serif italic">{phase.closing}</p>
                </div>
              </CollapsibleContent>
            </div>
          </Collapsible>
        </FadeIn>
      ))}
    </div>
  </section>
);

/* ─── SECTION III — WHAT WE ACTUALLY DO ─── */
const WhatWeDo = () => (
  <section className="px-6 py-32 max-w-5xl mx-auto">
    <FadeIn>
      <SectionMarker numeral="III" />
      <h2 className="font-serif text-3xl sm:text-4xl font-normal mt-4 mb-6">
        We Serve as Structural Partner.
      </h2>
      <p className="text-base text-muted-foreground mb-2">We do not sell templates.</p>
      <p className="text-base text-muted-foreground mb-8">We do not sell content production.</p>
      <p className="text-base text-foreground mb-4">We work alongside you to:</p>
      <ul className="space-y-2 mb-8">
        {["Reveal your method", "Document it clearly", "Design its architecture", "Guide its expansion"].map((item) => (
          <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
            <span className="w-1 h-1 rounded-full bg-accent mt-2 shrink-0" />
            {item}
          </li>
        ))}
      </ul>
      <p className="text-foreground font-serif italic mb-12">Engagement begins with consulting. It often becomes advisory.</p>
    </FadeIn>
    <FadeIn delay={300}>
      <div className="w-full border border-dashed border-border rounded-sm overflow-hidden">
        <AspectRatio ratio={21 / 9}>
          <div className="w-full h-full bg-surface flex items-center justify-center">
            <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground/40">Visual artifact</p>
          </div>
        </AspectRatio>
      </div>
    </FadeIn>
  </section>
);

/* ─── SECTION IV — THE OUTCOME ─── */
const outcomeItems = [
  "A defined intellectual framework",
  "Structured curriculum architecture",
  "Clear models and language",
  "Assessment and standards (if applicable)",
  "Certification or licensing blueprint",
  "A documented IP foundation",
  "A long-term structural roadmap",
];

const TheOutcome = () => (
  <section className="px-6 py-32 max-w-5xl mx-auto">
    <FadeIn>
      <div className="border border-border rounded-sm bg-card p-8 md:p-12">
        <SectionMarker numeral="IV" />
        <h2 className="font-serif text-3xl sm:text-4xl font-normal mt-4 mb-4">The Outcome</h2>
        <p className="text-base text-muted-foreground mb-10">You leave with:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
          {outcomeItems.map((item, i) => (
            <FadeIn key={item} delay={100 * i}>
              <div className="flex items-start gap-3 text-sm text-foreground py-2">
                <Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                {item}
              </div>
            </FadeIn>
          ))}
        </div>
        <p className="text-base text-foreground mb-2">Your expertise becomes independent of your presence.</p>
        <p className="text-base text-foreground mb-2">Performance becomes system.</p>
        <p className="text-base text-foreground font-serif italic">System becomes asset.</p>
      </div>
    </FadeIn>
  </section>
);

/* ─── SECTION V — WHO THIS IS FOR ─── */
const audienceItems = [
  "Founder-led consulting firms",
  "Standards organizations",
  "Advisory practices with proprietary frameworks",
  "Performance methodologies ready to scale",
  "Institutional leaders stewarding intellectual capital",
];

const WhoThisIsFor = () => (
  <section className="px-6 py-32 max-w-5xl mx-auto">
    <FadeIn>
      <SectionMarker numeral="V" />
      <h2 className="font-serif text-3xl sm:text-4xl font-normal mt-4 mb-6">
        For Leaders Already Producing Results.
      </h2>
      <p className="text-base text-foreground mb-8">This is for:</p>
    </FadeIn>
    <div className="space-y-3 mb-12">
      {audienceItems.map((item, i) => (
        <FadeIn key={item} delay={150 * i}>
          <div className="border border-border rounded-sm bg-card p-5">
            <p className="text-sm text-foreground">{item}</p>
          </div>
        </FadeIn>
      ))}
    </div>
    <FadeIn delay={800}>
      <p className="text-base text-muted-foreground mb-2">Not for early-stage creators.</p>
      <p className="text-base text-foreground mb-2">You must already have proof.</p>
      <p className="text-base text-foreground font-serif italic">We provide discipline.</p>
    </FadeIn>
  </section>
);

/* ─── SECTION VI — ENGAGEMENT MODEL ─── */
const EngagementModel = ({ onRequestAssessment }: { onRequestAssessment: () => void }) => (
  <section className="px-6 py-32 max-w-5xl mx-auto">
    <FadeIn>
      <SectionMarker numeral="VI" />
      <h2 className="font-serif text-3xl sm:text-4xl font-normal mt-4 mb-16">How We Work</h2>
    </FadeIn>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <FadeIn delay={200}>
        <RevealCard
          step="PHASE I"
          title="Method Audit"
          description="A structured review of your existing framework and scale ambitions."
          cta={
            <Button
              onClick={(e) => { e.stopPropagation(); onRequestAssessment(); }}
              className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-sm px-6 text-sm tracking-wide"
            >
              Request Audit
            </Button>
          }
        >
          <ul className="space-y-2 mb-4">
            {["Framework review", "Scale readiness assessment", "Structural gap analysis", "Architecture roadmap"].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                <span className="w-1 h-1 rounded-full bg-accent mt-2 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </RevealCard>
      </FadeIn>
      <FadeIn delay={400}>
        <RevealCard
          step="PHASE II"
          title="Architecture Engagement"
          description="Focused work to extract, formalize, and document your system."
          cta={
            <Button
              variant="outline"
              onClick={(e) => { e.stopPropagation(); onRequestAssessment(); }}
              className="rounded-sm px-6 text-sm tracking-wide border-border text-foreground hover:bg-foreground hover:text-background"
            >
              Discuss Engagement
            </Button>
          }
        >
          <ul className="space-y-2 mb-4">
            {["Method extraction", "System formalization", "IP documentation", "Standards design"].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                <span className="w-1 h-1 rounded-full bg-accent mt-2 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </RevealCard>
      </FadeIn>
      <FadeIn delay={600}>
        <RevealCard
          step="PHASE III"
          title="Advisory Partnership"
          description="Ongoing architectural oversight as your method expands into certification, marketing, and technology."
          cta={
            <Button
              variant="outline"
              onClick={(e) => { e.stopPropagation(); onRequestAssessment(); }}
              className="rounded-sm px-6 text-sm tracking-wide border-border text-foreground hover:bg-foreground hover:text-background"
            >
              Inquire
            </Button>
          }
        >
          <ul className="space-y-2 mb-4">
            {["Coherence maintenance", "Standards protection", "Expansion guidance", "Technology alignment"].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                <span className="w-1 h-1 rounded-full bg-accent mt-2 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </RevealCard>
      </FadeIn>
    </div>
    <FadeIn delay={700}>
      <p className="text-xs text-muted-foreground tracking-wide mt-12 italic">
        Most engagements evolve into long-term advisory relationships.
      </p>
    </FadeIn>
  </section>
);

/* ─── CLOSING ─── */
const Closing = ({ onRequestAssessment }: { onRequestAssessment: () => void }) => (
  <section className="px-6 py-32 text-center max-w-3xl mx-auto">
    <FadeIn>
      <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal leading-tight mb-6">
        What Is Not Structured Cannot Endure.
      </h2>
      <p className="text-base text-muted-foreground mb-12">Authority requires discipline.</p>
      <Button
        onClick={onRequestAssessment}
        className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-sm px-8 py-3 text-sm tracking-wide"
      >
        Request a Method Audit
      </Button>
    </FadeIn>
    <FadeIn delay={400}>
      <Divider />
      <footer className="mt-10 flex flex-col sm:flex-row items-center justify-between text-xs text-muted-foreground">
        <img src={certainlyLogo} alt="Certainly" className="h-4" />
        <p className="mt-4 sm:mt-0">Method architecture for disciplined growth.</p>
      </footer>
    </FadeIn>
  </section>
);

/* ─── INDEX PAGE ─── */
const Index = () => {
  const [assessmentOpen, setAssessmentOpen] = useState(false);

  return (
    <div className="bg-background text-foreground min-h-screen">
      <Nav onRequestAssessment={() => setAssessmentOpen(true)} />
      <Hero onRequestAssessment={() => setAssessmentOpen(true)} />
      <Divider />
      <div className="bg-surface">
        <TheProblem />
      </div>
      <Divider />
      <div className="bg-surface">
        <MethodLifecycle />
      </div>
      <Divider />
      <WhatWeDo />
      <Divider />
      <TheOutcome />
      <Divider />
      <div className="bg-surface">
        <WhoThisIsFor />
      </div>
      <Divider />
      <EngagementModel onRequestAssessment={() => setAssessmentOpen(true)} />
      <Closing onRequestAssessment={() => setAssessmentOpen(true)} />
      <AssessmentModal open={assessmentOpen} onOpenChange={setAssessmentOpen} />
    </div>
  );
};

export default Index;
