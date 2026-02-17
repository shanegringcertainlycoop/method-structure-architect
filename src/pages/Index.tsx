import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Check } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import AssessmentModal from "@/components/AssessmentModal";
import romanBust from "@/assets/roman-bust.png";

const Divider = () => <div className="w-full h-px bg-border" />;

const SectionMarker = ({ numeral, className = "" }: { numeral: string; className?: string }) => (
  <span className={`font-serif text-accent text-sm tracking-widest ${className}`}>{numeral}</span>
);

/* ─── NAV ─── */
const Nav = ({ onRequestAssessment }: { onRequestAssessment: () => void }) => (
  <nav className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center border-b border-border bg-background/80 backdrop-blur-sm">
    <span className="font-serif text-accent tracking-[0.3em] text-sm">CERTAINLY</span>
    <Button
      onClick={onRequestAssessment}
      size="sm"
      className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-sm text-xs tracking-wide"
    >
      Request Assessment
    </Button>
  </nav>
);

/* ─── HERO ─── */
const Hero = ({ onRequestAssessment }: { onRequestAssessment: () => void }) => (
  <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden pt-16">
    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[45%] max-w-lg opacity-20 pointer-events-none select-none">
      <img
        src={romanBust}
        alt=""
        className="w-full h-auto object-contain grayscale"
        style={{ mixBlendMode: "luminosity" }}
      />
    </div>

    <div className="relative z-10 text-center flex flex-col items-center">
      <FadeIn>
        <p className="font-serif text-accent tracking-[0.3em] text-sm mb-12">CERTAINLY</p>
      </FadeIn>
      <FadeIn delay={200}>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-tight max-w-4xl mb-8">
          Authority must be structured to endure.
        </h1>
      </FadeIn>
      <FadeIn delay={400}>
        <p className="max-w-2xl text-muted-foreground leading-relaxed text-base sm:text-lg mb-12">
          Certainly is an architectural firm for intellectual property.<br />
          We formalize expertise into institutional systems.
        </p>
      </FadeIn>
      <FadeIn delay={600}>
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <Button
            onClick={onRequestAssessment}
            className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-sm px-8 py-3 text-sm tracking-wide"
          >
            Request an Assessment
          </Button>
          <Button
            variant="outline"
            className="rounded-sm px-8 py-3 text-sm tracking-wide border-border text-foreground hover:bg-foreground hover:text-background"
            onClick={() => document.getElementById("architecture")?.scrollIntoView({ behavior: "smooth" })}
          >
            View the Architecture
          </Button>
        </div>
      </FadeIn>
      <FadeIn delay={800}>
        <Divider />
        <p className="text-xs text-muted-foreground tracking-wide mt-6">
          Method Architecture. Authority Design. Systems of Trust Infrastructure.
        </p>
      </FadeIn>
    </div>
  </section>
);

/* ─── SECTION I — STRUCTURAL RISK ─── */
const StructuralRisk = () => (
  <section className="px-6 py-32 max-w-5xl mx-auto">
    <FadeIn>
      <div className="border border-border rounded-sm bg-card p-8 md:p-12">
        <SectionMarker numeral="I" />
        <h2 className="font-serif text-3xl sm:text-4xl font-normal mt-4 mb-10">Structural Risk</h2>
        <ul className="space-y-4 text-base text-muted-foreground mb-12">
          <li className="flex items-start gap-3"><span className="w-1 h-1 rounded-full bg-accent mt-2.5 shrink-0" />Founder dependence</li>
          <li className="flex items-start gap-3"><span className="w-1 h-1 rounded-full bg-accent mt-2.5 shrink-0" />Informal process</li>
          <li className="flex items-start gap-3"><span className="w-1 h-1 rounded-full bg-accent mt-2.5 shrink-0" />Inconsistent delivery</li>
          <li className="flex items-start gap-3"><span className="w-1 h-1 rounded-full bg-accent mt-2.5 shrink-0" />Undefined standards</li>
        </ul>
        <blockquote className="font-serif text-2xl sm:text-3xl italic leading-snug mb-12">
          "If your results depend on you, your authority is fragile."
        </blockquote>
        <Accordion type="single" collapsible>
          <AccordionItem value="symptoms" className="border-border">
            <AccordionTrigger className="text-sm tracking-wide text-muted-foreground hover:no-underline">
              Symptoms of Structural Risk
            </AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>IP dilution across delivery channels</li>
                <li>Revenue fragility tied to founder availability</li>
                <li>Inability to transfer method without interpretation loss</li>
                <li>Quality variance across practitioners</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </FadeIn>
  </section>
);

/* ─── SECTION II — THE ARCHITECTURE ─── */
const expandedCopy = [
  "We map the reasoning, sequencing, and decision-making behind your results. This is not an interview. It is a structural extraction of the logic that produces outcomes.",
  "Raw expertise is reorganized into standards, decision criteria, and structured sequences. The architecture becomes independent of personality.",
  "The organized method is expressed as a transferable, licensable, certifiable system. Ready for deployment at scale.",
];

const Architecture = () => (
  <section id="architecture" className="px-6 py-32 max-w-5xl mx-auto">
    <FadeIn>
      <SectionMarker numeral="II" />
      <h2 className="font-serif text-3xl sm:text-4xl font-normal mt-4 mb-16">
        Capture. Organize. Package.
      </h2>
    </FadeIn>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[
        { num: "01", title: "Capture", desc: "Extract the logic." },
        { num: "02", title: "Organize", desc: "Define the standards." },
        { num: "03", title: "Package", desc: "Express the system." },
      ].map((col, i) => (
        <FadeIn key={col.num} delay={200 * i}>
          <div className="border border-border rounded-sm bg-surface p-6 hover:border-accent/30 transition-colors h-full">
            <Collapsible>
              <div className="space-y-4">
                <span className="text-accent text-sm font-sans tracking-widest">{col.num}</span>
                <h3 className="font-serif text-xl">{col.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{col.desc}</p>
                <CollapsibleTrigger className="text-xs text-accent tracking-wide hover:opacity-70 transition-opacity cursor-pointer">
                  Expand
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <p className="text-sm text-muted-foreground leading-relaxed mt-2 pt-3 border-t border-border">
                    {expandedCopy[i]}
                  </p>
                </CollapsibleContent>
              </div>
            </Collapsible>
          </div>
        </FadeIn>
      ))}
    </div>
  </section>
);

/* ─── SECTION III — THE ARTIFACT ─── */
const Artifact = () => (
  <section className="px-6 py-32 max-w-5xl mx-auto">
    <FadeIn>
      <div className="border border-border rounded-sm bg-card p-8 md:p-12">
        <SectionMarker numeral="III" />
        <h2 className="font-serif text-3xl sm:text-4xl font-normal mt-4 mb-10">The Artifact</h2>
        <ul className="space-y-4 mb-8">
          {[
            "Codified principles",
            "Defined constructs",
            "Structured curriculum",
            "Credential pathways",
            "Governance framework",
            "Licensing model",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-foreground">
              <Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <p className="text-sm italic text-muted-foreground mb-8">Not documentation. Architecture.</p>
        <Collapsible>
          <CollapsibleTrigger className="text-xs text-accent tracking-wide hover:opacity-70 transition-opacity cursor-pointer">
            View Sample Artifacts
          </CollapsibleTrigger>
          <CollapsibleContent>
            <p className="text-sm text-muted-foreground leading-relaxed mt-3 pt-3 border-t border-border">
              Method maps. Decision trees. Evaluation rubrics. Vocabulary glossaries. Packaging specifications. Each designed for transfer without interpretation loss.
            </p>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </FadeIn>
  </section>
);

/* ─── SECTION IV — APPLICATION ─── */
const Application = () => (
  <section className="px-6 py-32 max-w-5xl mx-auto">
    <FadeIn>
      <SectionMarker numeral="IV" />
      <h2 className="font-serif text-3xl sm:text-4xl font-normal mt-4 mb-16">Selected Applications</h2>
    </FadeIn>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[
        { name: "DRVN", summary: "Founder-led coaching logic formalized into certifiable professional standard. Method operates across three markets without founder involvement." },
        { name: "SEAM", summary: "Principle-based philosophy structured into scored evaluation framework and accredited pathway. Authority transferred from individual to institution." },
        { name: "VARDEN", summary: "Apprenticeship-dependent craft codified into structured methodology with licensing potential. Consistency achieved across twelve practitioners." },
      ].map((c, i) => (
        <FadeIn key={c.name} delay={200 * i}>
          <div className="border border-border rounded-sm bg-card p-6 h-full">
            <p className="text-xs tracking-[0.2em] text-accent mb-3 font-sans">{c.name}</p>
            <p className="text-sm text-muted-foreground leading-relaxed">{c.summary}</p>
          </div>
        </FadeIn>
      ))}
    </div>
  </section>
);

/* ─── SECTION V — ENGAGEMENT ─── */
const Engagement = ({ onRequestAssessment }: { onRequestAssessment: () => void }) => (
  <section className="px-6 py-32 max-w-5xl mx-auto">
    <FadeIn>
      <SectionMarker numeral="V" />
      <h2 className="font-serif text-3xl sm:text-4xl font-normal mt-4 mb-16">Engagement</h2>
    </FadeIn>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <FadeIn delay={200}>
        <div className="border border-border rounded-sm bg-surface p-8 hover:border-accent/30 transition-colors h-full">
          <h3 className="font-serif text-xl mb-4">Assessment</h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-6">
            A structured review of method maturity and transferability.
          </p>
          <Button
            onClick={onRequestAssessment}
            className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-sm px-6 text-sm tracking-wide"
          >
            Request Assessment
          </Button>
        </div>
      </FadeIn>
      <FadeIn delay={400}>
        <div className="border border-border rounded-sm bg-surface p-8 hover:border-accent/30 transition-colors h-full">
          <h3 className="font-serif text-xl mb-4">Architecture</h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-6">
            A focused engagement to design the transferable system.
          </p>
          <Button
            variant="outline"
            onClick={onRequestAssessment}
            className="rounded-sm px-6 text-sm tracking-wide border-border text-foreground hover:bg-foreground hover:text-background"
          >
            Discuss Architecture
          </Button>
        </div>
      </FadeIn>
    </div>
    <FadeIn delay={500}>
      <p className="text-xs text-muted-foreground tracking-wide mt-12 italic">
        Scope is determined after assessment.
      </p>
    </FadeIn>
  </section>
);

/* ─── FAQ ─── */
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
            { q: "Is certification the only output?", a: "No. Certification is one possible output. The architecture may result in licensing, internal standards, or structured training — determined by method and market." },
            { q: "What if the method is still evolving?", a: "Evolution does not preclude structure. We capture the current state and design architecture to accommodate iteration. Structure accelerates refinement." },
            { q: "How is specificity maintained?", a: "The architecture is derived from your specific logic. Not templates. Every structure reflects the unique reasoning and sequence behind your results." },
            { q: "Who owns the IP?", a: "You do. Entirely. Certainly designs the architecture. Ownership remains with the client." },
            { q: "How does this differ from documentation?", a: "Documentation describes. Architecture structures. The output is a system designed for transfer, validation, and scale." },
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

/* ─── CLOSING ─── */
const Closing = ({ onRequestAssessment }: { onRequestAssessment: () => void }) => (
  <section className="px-6 py-32 text-center max-w-3xl mx-auto">
    <FadeIn>
      <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal italic leading-tight mb-12">
        What is not structured cannot endure.
      </h2>
      <Button
        onClick={onRequestAssessment}
        className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-sm px-8 py-3 text-sm tracking-wide"
      >
        Request an Assessment
      </Button>
    </FadeIn>
    <FadeIn delay={400}>
      <Divider />
      <footer className="mt-10 flex flex-col sm:flex-row items-center justify-between text-xs text-muted-foreground">
        <p className="font-serif tracking-[0.2em] text-accent text-sm">CERTAINLY</p>
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
      <Architecture />
      <Divider />
      <div className="bg-surface">
        <Artifact />
      </div>
      <Divider />
      <div className="bg-surface">
        <Application />
      </div>
      <Divider />
      <Engagement onRequestAssessment={() => setAssessmentOpen(true)} />
      <FAQ />
      <Closing onRequestAssessment={() => setAssessmentOpen(true)} />
      <AssessmentModal open={assessmentOpen} onOpenChange={setAssessmentOpen} />
    </div>
  );
};

export default Index;
