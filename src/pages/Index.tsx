import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Check } from "lucide-react";
import FadeIn from "@/components/FadeIn";

import AssessmentModal from "@/components/AssessmentModal";
import ProofSection from "@/components/ProofSection";
import ClientHighlights from "@/components/ClientHighlights";
// romanBust is now served from public folder
import certainlyLogo from "@/assets/certainly-logo.png";
import structuralPartner from "@/assets/structural-partner.avif";
import romanColumns from "@/assets/roman-columns.png";
import closingBg from "@/assets/closing-bg.avif";

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
      className="btn-accent-gradient text-accent-foreground rounded-sm text-xs tracking-wide"
    >
      Request a Method Audit
    </Button>
  </nav>
);

/* ─── HERO ─── */
const Hero = ({ onRequestAssessment }: { onRequestAssessment: () => void }) => (
  <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden pt-16">
    <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
      <img
        src="/images/roman-bust-hero.png"
        alt=""
        className="absolute right-0 bottom-0 w-[85%] h-[110%] object-contain object-right-bottom grayscale brightness-150 opacity-25"
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
        <p className="max-w-2xl text-muted-foreground leading-[1.9] text-lg sm:text-xl mb-14">
          Certainly partners with founders and institutions to extract, document, and guide the evolution of their proprietary method — so it can scale through certification, technology, and disciplined growth.
        </p>
      </FadeIn>
      <FadeIn delay={600}>
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <Button
            onClick={onRequestAssessment}
            className="btn-accent-gradient text-accent-foreground rounded-sm px-10 py-4 text-base tracking-wide h-auto"
          >
            Request a Method Audit
          </Button>
          <Button
            variant="outline"
            className="rounded-sm px-10 py-4 text-base tracking-wide border-border text-foreground hover:bg-foreground hover:text-background h-auto"
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
      <div className="border border-border rounded-lg bg-card p-10 md:p-16">
        <SectionMarker numeral="I" />
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal mt-4 mb-8 text-foreground">
          Most Methods Stall Before They Scale.
        </h2>
        <p className="text-lg text-muted-foreground mb-2">You already have results.</p>
        <p className="text-lg text-foreground mb-10 font-medium">But:</p>
        <div className="columns-1 sm:columns-2 gap-x-12 mb-12">
          {problemItems.map((item, i) => (
            <FadeIn key={item} delay={100 * i}>
              <div className="flex items-start gap-4 py-4 border-b border-border break-inside-avoid">
                <span className="text-accent font-serif text-lg leading-none mt-0.5">—</span>
                <p className="text-base text-foreground leading-relaxed">{item}</p>
              </div>
            </FadeIn>
          ))}
        </div>
        <p className="text-lg text-foreground mb-2">Your expertise works.</p>
        <p className="text-lg text-foreground mb-10">It simply lacks structure.</p>
        <p className="text-xl text-foreground font-serif italic">What Is Not Structured Cannot Endure.</p>
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

    {/* Step indicator — large, high-contrast */}
    <FadeIn delay={100}>
      <div className="flex items-center justify-center gap-0 mb-20">
        {stepLabels.map((label, i) => (
          <div key={label} className="flex items-center">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full border-2 border-accent flex items-center justify-center">
                <span className="text-base text-accent font-serif font-semibold">{i + 1}</span>
              </div>
              <span className="text-xs text-foreground mt-3 tracking-wider font-medium">{label}</span>
            </div>
            {i < stepLabels.length - 1 && (
              <div className="w-12 sm:w-20 h-px bg-accent/40 mx-3 -mt-5" />
            )}
          </div>
        ))}
      </div>
    </FadeIn>

    <div className="space-y-5">
      {lifecyclePhases.map((phase, i) => (
        <FadeIn key={phase.num} delay={150 * i}>
          <Collapsible>
            <div className="border border-border rounded-sm bg-card p-7 md:p-10">
              <CollapsibleTrigger className="w-full text-left cursor-pointer group">
                <div className="flex items-baseline gap-4">
                  <span className="text-accent text-lg tracking-widest font-sans font-semibold">{phase.num}.</span>
                  <h3 className="font-serif text-2xl text-foreground">{phase.title}</h3>
                </div>
                <p className="text-base text-muted-foreground mt-3 ml-10">{phase.intro}</p>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="ml-10 mt-6 pt-6 border-t border-border">
                  {"secondIntro" in phase && phase.secondIntro && (
                    <p className="text-base text-muted-foreground mb-4">{phase.secondIntro}</p>
                  )}
                  {"bulletIntro" in phase && phase.bulletIntro && (
                    <p className="text-base text-muted-foreground mb-3">{phase.bulletIntro}</p>
                  )}
                  <ul className="space-y-3 mb-6">
                    {phase.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-base text-foreground/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <p className="text-base text-foreground font-serif italic">{phase.closing}</p>
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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <FadeIn>
        <SectionMarker numeral="III" />
        <h2 className="font-serif text-3xl sm:text-4xl font-normal mt-4 mb-6">
          We Serve as Structural Partner.
        </h2>
        <p className="text-base text-muted-foreground mb-2">We do not sell templates.</p>
        <p className="text-base text-muted-foreground mb-8">We do not sell content production.</p>
        <p className="text-base text-foreground mb-4">We work alongside you to:</p>
        <ul className="space-y-3 mb-8">
          {["Reveal your method", "Document it clearly", "Design its architecture", "Guide its expansion"].map((item) => (
            <li key={item} className="flex items-start gap-3 text-base text-foreground/80">
              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <p className="text-foreground font-serif italic text-lg">Engagement begins with consulting. It often becomes advisory.</p>
      </FadeIn>
      <FadeIn delay={300}>
        <div className="w-full overflow-hidden rounded-sm">
          <img
            src={romanColumns}
            alt="Roman columns"
            className="w-full h-full object-contain grayscale opacity-20"
            style={{ mixBlendMode: "luminosity" }}
          />
        </div>
      </FadeIn>
    </div>
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
      <div className="border border-border rounded-sm bg-card p-10 md:p-16">
        <SectionMarker numeral="IV" />
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal mt-4 mb-6">The Outcome</h2>
        <p className="text-lg text-muted-foreground mb-12">You leave with:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {outcomeItems.map((item, i) => (
            <FadeIn key={item} delay={100 * i}>
              <div className="flex items-start gap-4 text-base text-foreground py-3">
                <Check className="w-5 h-5 text-accent mt-0.5 shrink-0" strokeWidth={2.5} />
                {item}
              </div>
            </FadeIn>
          ))}
        </div>
        <p className="text-lg text-foreground mb-2">Your expertise becomes independent of your presence.</p>
        <p className="text-lg text-foreground mb-2">Performance becomes system.</p>
        <p className="text-xl text-foreground font-serif italic">System becomes asset.</p>
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
      <SectionMarker numeral="VI" />
      <h2 className="font-serif text-3xl sm:text-4xl font-normal mt-4 mb-6">
        For Leaders Already Producing Results.
      </h2>
      <p className="text-lg text-foreground mb-8">This is for:</p>
    </FadeIn>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-0 mb-12">
      {audienceItems.map((item, i) => (
        <FadeIn key={item} delay={100 * i}>
          <div className="flex items-center gap-4 py-5 border-b border-border">
            <span className="text-accent font-serif text-sm tabular-nums">{String(i + 1).padStart(2, "0")}</span>
            <p className="text-base text-foreground">{item}</p>
          </div>
        </FadeIn>
      ))}
    </div>
    <FadeIn delay={800}>
      <p className="text-base text-muted-foreground mb-2">Not for early-stage creators.</p>
      <p className="text-lg text-foreground mb-2">You must already have proof.</p>
      <p className="text-lg text-foreground font-serif italic">We provide discipline.</p>
    </FadeIn>
  </section>
);

/* ─── SECTION VI — ENGAGEMENT MODEL ─── */
const engagementPhases = [
  {
    numeral: "I",
    title: "Diagnose",
    intro: "Understand how trust works in your business today.",
    bullets: ["Trust Architecture Review", "Method Audit", "Strategy Sprint", "Certification Readiness Assessment"],
    closing: "Clarity on what should — or should not — be built.",
  },
  {
    numeral: "II",
    title: "Preserve",
    intro: "Capture and formalize what makes your method work.",
    bullets: ["Method Capture™", "Framework codification", "Curriculum architecture", "Competence definition"],
    closing: "Your expertise becomes transferable.",
  },
  {
    numeral: "III",
    title: "Build",
    intro: "Design the right trust mechanism.",
    bullets: ["Licensing frameworks", "Curriculum & assessment systems", "Credential brand infrastructure", "120-Day Certificaiton Pilot Launch"],
    closing: "Trust transfers beyond the founder.",
  },
  {
    numeral: "IV",
    title: "Steward",
    intro: "Own and protect the system as it grows.",
    bullets: ["Fractional Credential Operations™", "Governance", "Operational oversight", "Portfolio strategy"],
    closing: "Quality does not erode under scale.",
  },
];

const EngagementModel = () => (
  <section className="px-6 py-32 max-w-5xl mx-auto">
    <FadeIn>
      <SectionMarker numeral="VII" />
      <h2 className="font-serif text-3xl sm:text-4xl font-normal mt-4 mb-4">How We Work</h2>
      <p className="text-lg text-muted-foreground mb-16">Our engagements follow four structural movements.</p>
    </FadeIn>
    <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
      {engagementPhases.map((phase, i) => (
        <FadeIn key={phase.numeral} delay={150 * i}>
          <div className="border border-border rounded-sm bg-card p-8 flex flex-col min-w-[300px] w-[300px] snap-start">
            <p className="text-xs tracking-[0.2em] text-accent mb-3 font-sans">{phase.numeral}.</p>
            <h3 className="font-serif text-2xl mb-4 text-foreground">{phase.title}</h3>
            <p className="text-base text-muted-foreground leading-relaxed mb-6">{phase.intro}</p>
            <ul className="space-y-3 mb-6 flex-1">
              {phase.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-base text-foreground/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
            <p className="text-base text-foreground font-serif italic">{phase.closing}</p>
          </div>
        </FadeIn>
      ))}
    </div>
  </section>
);

/* ─── CLOSING ─── */
const Closing = ({ onRequestAssessment }: { onRequestAssessment: () => void }) => (
  <section className="relative px-6 py-40 text-center overflow-hidden">
    <div className="absolute inset-0">
      <img src={closingBg} alt="" className="w-full h-full object-cover grayscale opacity-20" />
      <div className="absolute inset-0 bg-background/70" />
    </div>
    <div className="relative z-10 max-w-3xl mx-auto">
      <FadeIn>
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal leading-tight mb-8 text-foreground">
          What Is Not Structured Cannot Endure.
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
          <img src={certainlyLogo} alt="Certainly" className="h-4" />
          <p className="mt-4 sm:mt-0">Method architecture for disciplined growth.</p>
        </footer>
      </FadeIn>
    </div>
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
      <div className="bg-surface noise-overlay">
        <TheProblem />
      </div>
      <Divider />
      <WhatWeDo />
      <Divider />
      <div className="bg-surface">
        <MethodLifecycle />
      </div>
      <Divider />
      <TheOutcome />
      <Divider />
      <ProofSection />
      <Divider />
      <ClientHighlights />
      <Divider />
      <div className="bg-surface">
        <WhoThisIsFor />
      </div>
      <Divider />
      <EngagementModel />
      <Closing onRequestAssessment={() => setAssessmentOpen(true)} />
      <AssessmentModal open={assessmentOpen} onOpenChange={setAssessmentOpen} />
    </div>
  );
};

export default Index;
