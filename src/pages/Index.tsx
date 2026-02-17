import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Check } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import AssessmentModal from "@/components/AssessmentModal";

const Divider = () => <div className="w-full h-px bg-border" />;

const SectionMarker = ({ numeral, className = "" }: { numeral: string; className?: string }) => (
  <span className={`font-serif text-accent text-sm tracking-widest ${className}`}>{numeral}</span>
);

/* ─── HERO ─── */
const Hero = ({ onRequestAssessment }: { onRequestAssessment: () => void }) => (
  <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
    <FadeIn>
      <p className="font-serif text-accent tracking-[0.3em] text-sm mb-12">CERTAINLY</p>
    </FadeIn>
    <FadeIn delay={200}>
      <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-tight max-w-4xl mb-8">
        Turn Your Method Into an Asset.
      </h1>
    </FadeIn>
    <FadeIn delay={400}>
      <p className="max-w-2xl text-muted-foreground leading-relaxed text-base sm:text-lg mb-12">
        If your results depend on you, they are not yet structured.<br />
        Certainly designs the architecture that transforms expertise into transferable authority.
      </p>
    </FadeIn>
    <FadeIn delay={600}>
      <div className="flex flex-col sm:flex-row gap-4 mb-16">
        <Button onClick={onRequestAssessment} className="rounded-sm px-8 py-3 text-sm tracking-wide">
          Request an Assessment
        </Button>
        <Button
          variant="outline"
          className="rounded-sm px-8 py-3 text-sm tracking-wide border-foreground text-foreground hover:bg-foreground hover:text-primary-foreground"
          onClick={() => document.getElementById("architecture")?.scrollIntoView({ behavior: "smooth" })}
        >
          View the Framework
        </Button>
      </div>
    </FadeIn>
    <FadeIn delay={800}>
      <Divider />
      <p className="text-xs text-muted-foreground tracking-wide mt-6">
        Architecture for authority. Designed for transfer, validation, and scale.
      </p>
    </FadeIn>
  </section>
);

/* ─── SECTION I ─── */
const TransferProblem = () => (
  <section className="px-6 py-24 max-w-4xl mx-auto">
    <FadeIn>
      <SectionMarker numeral="I" />
      <h2 className="font-serif text-3xl sm:text-4xl font-normal mt-4 mb-10">The Transfer Problem</h2>
    </FadeIn>
    <FadeIn delay={200}>
      <ul className="space-y-4 text-base text-muted-foreground mb-12">
        <li className="flex items-start gap-3"><span className="w-1 h-1 rounded-full bg-accent mt-2.5 shrink-0" />Works when you deliver it</li>
        <li className="flex items-start gap-3"><span className="w-1 h-1 rounded-full bg-accent mt-2.5 shrink-0" />Breaks when others try</li>
        <li className="flex items-start gap-3"><span className="w-1 h-1 rounded-full bg-accent mt-2.5 shrink-0" />Scaling dilutes outcomes</li>
      </ul>
    </FadeIn>
    <FadeIn delay={400}>
      <blockquote className="font-serif text-2xl sm:text-3xl italic leading-snug mb-12">
        "Unstructured expertise cannot endure."
      </blockquote>
    </FadeIn>
    <FadeIn delay={500}>
      <Accordion type="single" collapsible>
        <AccordionItem value="symptoms" className="border-border">
          <AccordionTrigger className="text-sm tracking-wide text-muted-foreground hover:no-underline">
            Common Symptoms
          </AccordionTrigger>
          <AccordionContent>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>Sales depends on you</li>
              <li>Training produces inconsistent outcomes</li>
              <li>Hiring does not replicate results</li>
              <li>Quality varies across delivery</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </FadeIn>
  </section>
);

/* ─── SECTION II ─── */
const expandedCopy = [
  "We map the reasoning, sequencing, and decision-making behind your results. This is not an interview — it is a structural extraction of the logic that produces outcomes.",
  "Raw expertise is reorganized into standards, decision criteria, and structured sequences. The architecture becomes independent of personality.",
  "The organized method is expressed as a transferable, licensable, certifiable system — ready for deployment at scale.",
];

const Architecture = () => (
  <section id="architecture" className="px-6 py-24 max-w-5xl mx-auto">
    <FadeIn>
      <SectionMarker numeral="II" />
      <h2 className="font-serif text-3xl sm:text-4xl font-normal mt-4 mb-16">
        Capture → Organize → Package
      </h2>
    </FadeIn>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
      {[
        { num: "01", title: "Capture", desc: "Extract the logic beneath your results." },
        { num: "02", title: "Organize", desc: "Design standards, sequence, and decision criteria." },
        { num: "03", title: "Package", desc: "Express the system as a transferable asset." },
      ].map((col, i) => (
        <FadeIn key={col.num} delay={200 * i}>
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
        </FadeIn>
      ))}
    </div>
  </section>
);

/* ─── SECTION III ─── */
const Asset = () => (
  <section className="px-6 py-24 max-w-4xl mx-auto">
    <FadeIn>
      <SectionMarker numeral="III" />
      <h2 className="font-serif text-3xl sm:text-4xl font-normal mt-4 mb-10">The Output Is an Asset</h2>
    </FadeIn>
    <FadeIn delay={200}>
      <ul className="space-y-4 mb-8">
        {[
          "Method architecture (principles + sequence)",
          "Shared vocabulary",
          "Standards and evaluation criteria",
          "Structured curriculum (if required)",
          "Packaging map (certification, license, program)",
        ].map((item) => (
          <li key={item} className="flex items-start gap-3 text-sm text-foreground">
            <Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </FadeIn>
    <FadeIn delay={400}>
      <p className="text-sm italic text-muted-foreground mb-8">Not documentation. Architecture.</p>
      <Collapsible>
        <CollapsibleTrigger className="text-xs text-accent tracking-wide hover:opacity-70 transition-opacity cursor-pointer">
          View Sample Artifacts
        </CollapsibleTrigger>
        <CollapsibleContent>
          <p className="text-sm text-muted-foreground leading-relaxed mt-3 pt-3 border-t border-border">
            Sample artifacts include method maps, decision trees, evaluation rubrics, vocabulary glossaries, and packaging specifications. Each is designed for transfer without interpretation loss.
          </p>
        </CollapsibleContent>
      </Collapsible>
    </FadeIn>
  </section>
);

/* ─── SECTION IV ─── */
const Engagement = ({ onRequestAssessment }: { onRequestAssessment: () => void }) => (
  <section className="px-6 py-24 max-w-5xl mx-auto">
    <FadeIn>
      <SectionMarker numeral="IV" />
      <h2 className="font-serif text-3xl sm:text-4xl font-normal mt-4 mb-16">Engagement</h2>
    </FadeIn>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
      <FadeIn delay={200}>
        <div className="space-y-4">
          <h3 className="font-serif text-xl">Assessment</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            A structured review of method maturity and transferability.
          </p>
          <Button onClick={onRequestAssessment} className="rounded-sm px-6 text-sm tracking-wide">
            Request Assessment
          </Button>
        </div>
      </FadeIn>
      <FadeIn delay={400}>
        <div className="space-y-4">
          <h3 className="font-serif text-xl">Architecture</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            A focused engagement to design the transferable system.
          </p>
          <Button variant="outline" onClick={onRequestAssessment} className="rounded-sm px-6 text-sm tracking-wide border-foreground text-foreground hover:bg-foreground hover:text-primary-foreground">
            Discuss Architecture
          </Button>
        </div>
      </FadeIn>
    </div>
    <FadeIn delay={500}>
      <p className="text-xs text-muted-foreground tracking-wide mt-16 italic">
        Scope is determined after assessment.
      </p>
    </FadeIn>
  </section>
);

/* ─── SECTION V ─── */
const Proof = () => (
  <section className="px-6 py-24 max-w-4xl mx-auto">
    <FadeIn>
      <SectionMarker numeral="V" />
      <h2 className="font-serif text-3xl sm:text-4xl font-normal mt-4 mb-16">Selected Applications</h2>
    </FadeIn>
    <div className="space-y-10">
      {[
        { name: "DRVN", summary: "From founder-led coaching logic to certifiable professional standard. Method now operates across three markets without founder involvement." },
        { name: "SEAM", summary: "From principle-based philosophy to scored evaluation framework and accredited pathway. Authority transferred from individual to institution." },
        { name: "VARDEN", summary: "From apprenticeship-dependent craft to structured methodology with licensing potential. Consistency achieved across twelve practitioners." },
      ].map((c, i) => (
        <FadeIn key={c.name} delay={200 * i}>
          <div className="pb-8 border-b border-border last:border-b-0">
            <p className="text-xs tracking-[0.2em] text-accent mb-2 font-sans">{c.name}</p>
            <p className="text-sm text-muted-foreground leading-relaxed">{c.summary}</p>
          </div>
        </FadeIn>
      ))}
    </div>
  </section>
);

/* ─── FAQ ─── */
const FAQ = () => (
  <section className="px-6 py-24 max-w-4xl mx-auto">
    <FadeIn>
      <Divider />
      <h2 className="font-serif text-3xl sm:text-4xl font-normal mt-16 mb-10">Common Questions</h2>
    </FadeIn>
    <FadeIn delay={200}>
      <Accordion type="single" collapsible>
        {[
          { q: "Do I need a certification?", a: "Not necessarily. Certification is one possible output. The architecture may result in licensing, internal standards, or structured training — depending on the method and market." },
          { q: "What if my method is still evolving?", a: "Evolution does not preclude structure. We capture the current state and design the architecture to accommodate iteration. Structure accelerates refinement." },
          { q: "How do you avoid making it generic?", a: "The architecture is derived from your specific logic, not templates. Every structure reflects the unique reasoning and sequence behind your results." },
          { q: "Who owns the IP?", a: "You do. Entirely. Certainly designs the architecture. Ownership remains with the client." },
          { q: "How is this different from documentation?", a: "Documentation describes. Architecture structures. The output is a system designed for transfer, validation, and scale — not a reference manual." },
        ].map((item, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="border-border">
            <AccordionTrigger className="text-sm text-foreground hover:no-underline tracking-wide font-sans font-normal">
              {item.q}
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.a}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
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
      <Button onClick={onRequestAssessment} className="rounded-sm px-8 py-3 text-sm tracking-wide">
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
      <Hero onRequestAssessment={() => setAssessmentOpen(true)} />
      <Divider />
      <TransferProblem />
      <Divider />
      <Architecture />
      <Divider />
      <Asset />
      <Divider />
      <Engagement onRequestAssessment={() => setAssessmentOpen(true)} />
      <Divider />
      <Proof />
      <FAQ />
      <Closing onRequestAssessment={() => setAssessmentOpen(true)} />
      <AssessmentModal open={assessmentOpen} onOpenChange={setAssessmentOpen} />
    </div>
  );
};

export default Index;
