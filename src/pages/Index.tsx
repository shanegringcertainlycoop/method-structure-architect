import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
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
    <img src={certainlyLogo} alt="Certainly" className="h-4" />
    <Button
      onClick={onRequestAssessment}
      size="sm"
      className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-sm text-xs tracking-wide"
    >
      Request a Structural Audit
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
          Institutional Architecture for Intellectual Property
        </p>
      </FadeIn>
      <FadeIn delay={200}>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-tight max-w-4xl mb-8">
          Design the Architecture of Authority.
        </h1>
      </FadeIn>
      <FadeIn delay={400}>
        <p className="max-w-2xl text-muted-foreground leading-relaxed text-base sm:text-lg mb-12">
          If your results depend on you, your authority is fragile.<br />
          Certainly formalizes expertise into transferable systems, credentials, and institutional frameworks.
        </p>
      </FadeIn>
      <FadeIn delay={600}>
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <Button
            onClick={onRequestAssessment}
            className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-sm px-8 py-3 text-sm tracking-wide"
          >
            Request a Structural Audit
          </Button>
          <Button
            variant="outline"
            className="rounded-sm px-8 py-3 text-sm tracking-wide border-border text-foreground hover:bg-foreground hover:text-background"
            onClick={() => document.getElementById("architecture")?.scrollIntoView({ behavior: "smooth" })}
          >
            View the Architecture
          </Button>
        </div>
        <p className="text-xs text-muted-foreground tracking-wide italic">
          Private engagements for founders, standards bodies, and institutional leaders.
        </p>
      </FadeIn>
    </div>
  </section>
);

/* ─── MODULE I — STRUCTURAL RISK ─── */
const riskItems = [
  "Founder dependence",
  "Inconsistent delivery",
  "IP dilution",
  "Revenue fragility",
  "Inability to credential",
  "Inability to scale",
];

const StructuralRisk = () => (
  <section className="px-6 py-32 max-w-5xl mx-auto">
    <FadeIn>
      <div className="border border-border rounded-sm bg-card p-8 md:p-12">
        <SectionMarker numeral="I" />
        <h2 className="font-serif text-3xl sm:text-4xl font-normal mt-4 mb-6">
          Unstructured Expertise Cannot Endure.
        </h2>
        <p className="text-base text-muted-foreground mb-10">
          Most expertise lives in conversation. It lacks structure.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-10">
          {riskItems.map((item, i) => (
            <FadeIn key={item} delay={150 * i}>
              <div className="border border-border rounded-sm bg-surface px-4 py-5 text-center">
                <p className="text-sm text-muted-foreground">{item}</p>
              </div>
            </FadeIn>
          ))}
        </div>
        <p className="text-base text-foreground font-serif italic">And systems are what endure.</p>
      </div>
    </FadeIn>
  </section>
);

/* ─── MODULE II — WHAT WE ACTUALLY DO ─── */
const WhatWeDo = () => (
  <section className="px-6 py-32 max-w-5xl mx-auto">
    <FadeIn>
      <SectionMarker numeral="II" />
      <h2 className="font-serif text-3xl sm:text-4xl font-normal mt-4 mb-6">
        We Do Not "Package" Methods.<br />We Architect Them.
      </h2>
      <p className="text-base text-muted-foreground max-w-3xl mb-4">
        Certainly operates as an architectural firm for intellectual property.
      </p>
      <p className="text-foreground font-serif italic mb-12">The outcome is not documentation. It is infrastructure.</p>
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

/* ─── MODULE III — THE ARCHITECTURE ─── */
const phases = [
  {
    num: "I",
    title: "Extraction",
    intro: "We identify the underlying logic of your results.",
    bullets: ["Core principles", "Decision rules", "Implicit frameworks"],
    closing: "Most expertise is intuitive. We make it explicit.",
  },
  {
    num: "II",
    title: "Formalization",
    intro: "We define the system.",
    bullets: ["Named constructs", "Defined sequences", "Shared language"],
    closing: "If it cannot be named, it cannot be taught.",
  },
  {
    num: "III",
    title: "Codification",
    intro: "We build transfer mechanisms.",
    bullets: ["Curriculum architecture", "Credential pathways", "Governance frameworks"],
    closing: "This is where authority becomes replicable.",
  },
  {
    num: "IV",
    title: "Institutionalization",
    intro: "We design the structure that allows the system to endure.",
    bullets: ["Revenue architecture", "Certification lifecycle", "Standards governance"],
    closing: "This is where a method becomes an asset.",
  },
];

const ArchitectureSection = () => (
  <section id="architecture" className="px-6 py-32 max-w-5xl mx-auto">
    <FadeIn>
      <SectionMarker numeral="III" />
      <h2 className="font-serif text-3xl sm:text-4xl font-normal mt-4 mb-12">The Architecture Process</h2>
    </FadeIn>

    {/* Step indicator */}
    <FadeIn delay={100}>
      <div className="flex items-center justify-center gap-0 mb-16">
        {phases.map((phase, i) => (
          <div key={phase.num} className="flex items-center">
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full border border-accent/40 flex items-center justify-center">
                <span className="text-xs text-accent font-serif">{phase.num}</span>
              </div>
              <span className="text-[10px] text-muted-foreground mt-2 tracking-wider">{phase.title}</span>
            </div>
            {i < phases.length - 1 && (
              <div className="w-10 sm:w-16 h-px bg-border mx-2 -mt-5" />
            )}
          </div>
        ))}
      </div>
    </FadeIn>

    <div className="space-y-4">
      {phases.map((phase, i) => (
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

/* ─── MODULE IV — WHAT EMERGES ─── */
const emergesItems = [
  "A defined intellectual framework",
  "Structured curriculum",
  "Measurable standards",
  "Transferable credential pathway",
  "Governance model",
  "Licensing or distribution strategy",
  "Revenue infrastructure",
];

const WhatEmerges = () => (
  <section className="px-6 py-32 max-w-5xl mx-auto">
    <FadeIn>
      <div className="border border-border rounded-sm bg-card p-8 md:p-12">
        <SectionMarker numeral="IV" />
        <h2 className="font-serif text-3xl sm:text-4xl font-normal mt-4 mb-4">What Emerges Is an Asset.</h2>
        <p className="text-base text-muted-foreground mb-10">It is a defensible system.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
          {emergesItems.map((item, i) => (
            <FadeIn key={item} delay={100 * i}>
              <div className="flex items-start gap-3 text-sm text-foreground py-2">
                <Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                {item}
              </div>
            </FadeIn>
          ))}
        </div>
        <p className="text-base text-foreground font-serif italic">It functions as a system.</p>
      </div>
    </FadeIn>
  </section>
);

/* ─── MODULE V — APPLICATIONS ─── */
const Applications = () => (
  <section className="px-6 py-32 max-w-5xl mx-auto">
    <FadeIn>
      <SectionMarker numeral="V" />
      <h2 className="font-serif text-3xl sm:text-4xl font-normal mt-4 mb-16">Selected Applications</h2>
    </FadeIn>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {[
        { name: "Founder-Led Consulting Firm", summary: "From personalized delivery to structured certification and licensing." },
        { name: "Standards Organization", summary: "From informal accreditation to formalized credential architecture." },
        { name: "Performance Method", summary: "From results-based reputation to measurable system and assessment model." },
        { name: "Advisory Practice", summary: "From proprietary insight to transferable institutional framework." },
      ].map((c, i) => (
        <FadeIn key={c.name} delay={200 * i}>
          <div className="border border-border rounded-sm bg-card p-6 h-full">
            <p className="text-xs tracking-[0.2em] text-accent mb-3 font-sans uppercase">{c.name}</p>
            <p className="text-sm text-muted-foreground leading-relaxed">{c.summary}</p>
          </div>
        </FadeIn>
      ))}
    </div>
    <FadeIn delay={800}>
      <p className="text-xs text-muted-foreground tracking-wide mt-12 italic">
        The structure differs. The architecture remains consistent.
      </p>
    </FadeIn>
  </section>
);

/* ─── MODULE VI — PROOF OF STRUCTURE ─── */
const ProofOfStructure = () => (
  <section className="px-6 py-32 max-w-5xl mx-auto">
    <FadeIn>
      <h2 className="font-serif text-3xl sm:text-4xl font-normal mb-6">Architecture Is Visible.</h2>
      <p className="text-base text-muted-foreground mb-16">
        Below are examples of structural artifacts produced through our process.
      </p>
    </FadeIn>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {[
        "Method blueprint diagram",
        "Credential pathway map",
        "Governance flow model",
        "Curriculum architecture chart",
        "Revenue model structure",
        "Licensing hierarchy",
      ].map((label, i) => (
        <FadeIn key={label} delay={100 * i}>
          <div className="border border-border rounded-sm bg-surface p-6 flex items-center justify-center min-h-[160px] hover:border-accent/30 transition-colors cursor-pointer">
            <p className="text-xs tracking-[0.15em] text-muted-foreground text-center uppercase">{label}</p>
          </div>
        </FadeIn>
      ))}
    </div>
  </section>
);

/* ─── MODULE VII — ENGAGEMENT ─── */
const Engagement = ({ onRequestAssessment }: { onRequestAssessment: () => void }) => (
  <section className="px-6 py-32 max-w-5xl mx-auto">
    <FadeIn>
      <SectionMarker numeral="VI" />
      <h2 className="font-serif text-3xl sm:text-4xl font-normal mt-4 mb-16">Engagement</h2>
    </FadeIn>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <FadeIn delay={200}>
        <RevealCard
          step="STEP 1"
          title="Structural Audit"
          description="A focused review of your current method, documentation, and delivery model."
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
            {["Structural gap analysis", "Risk identification", "Codification readiness assessment", "Architecture roadmap"].map((item) => (
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
          step="STEP 2"
          title="Architecture Intensive"
          description="A structured design engagement to formalize and build your system."
          cta={
            <Button
              variant="outline"
              onClick={(e) => { e.stopPropagation(); onRequestAssessment(); }}
              className="rounded-sm px-6 text-sm tracking-wide border-border text-foreground hover:bg-foreground hover:text-background"
            >
              Discuss Architecture
            </Button>
          }
        >
          <ul className="space-y-2 mb-4">
            {["Framework extraction", "System definition", "Credential architecture", "Transfer design", "Institutional model"].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                <span className="w-1 h-1 rounded-full bg-accent mt-2 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </RevealCard>
      </FadeIn>
    </div>
    <FadeIn delay={500}>
      <p className="text-xs text-muted-foreground tracking-wide mt-12 italic">Private engagements only.</p>
    </FadeIn>
  </section>
);

/* ─── MODULE VIII — FAQ ─── */
const FAQ = () => (
  <section className="px-6 py-32 max-w-5xl mx-auto">
    <FadeIn>
      <Divider />
      <h2 className="font-serif text-3xl sm:text-4xl font-normal mt-16 mb-10">Common Questions</h2>
    </FadeIn>
    <FadeIn delay={200}>
      <div className="border border-border rounded-sm bg-card">
        <Accordion type="single" collapsible>
          {[
            { q: "Do we need existing documentation?", a: "No. Most expertise begins informal. We extract from lived execution." },
            { q: "What if our method is evolving?", a: "Architecture does not freeze evolution. It defines structure for it." },
            { q: "Who owns the IP?", a: "You retain ownership. We design the system." },
            { q: "Is this for early-stage founders?", a: "No. This is for leaders whose work already produces results." },
          ].map((item, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border-border px-6 md:px-8">
              <AccordionTrigger className="text-sm text-foreground hover:no-underline tracking-wide font-sans font-normal">
                {item.q}
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.a}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </FadeIn>
  </section>
);

/* ─── MODULE IX — CLOSING ─── */
const Closing = ({ onRequestAssessment }: { onRequestAssessment: () => void }) => (
  <section className="px-6 py-32 text-center max-w-3xl mx-auto">
    <FadeIn>
      <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal leading-tight mb-6">
        What Is Not Structured Cannot Endure.
      </h2>
      <p className="text-base text-muted-foreground mb-12">Authority requires architecture.</p>
      <Button
        onClick={onRequestAssessment}
        className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-sm px-8 py-3 text-sm tracking-wide"
      >
        Request a Structural Audit
      </Button>
    </FadeIn>
    <FadeIn delay={400}>
      <Divider />
      <footer className="mt-10 flex flex-col sm:flex-row items-center justify-between text-xs text-muted-foreground">
        <img src={certainlyLogo} alt="Certainly" className="h-4" />
        <p className="mt-4 sm:mt-0">Architecture for authority.</p>
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
        <StructuralRisk />
      </div>
      <Divider />
      <WhatWeDo />
      <Divider />
      <div className="bg-surface">
        <ArchitectureSection />
      </div>
      <Divider />
      <WhatEmerges />
      <Divider />
      <div className="bg-surface">
        <Applications />
      </div>
      <Divider />
      <ProofOfStructure />
      <Divider />
      <Engagement onRequestAssessment={() => setAssessmentOpen(true)} />
      <FAQ />
      <Closing onRequestAssessment={() => setAssessmentOpen(true)} />
      <AssessmentModal open={assessmentOpen} onOpenChange={setAssessmentOpen} />
    </div>
  );
};

export default Index;
