import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import AssessmentModal from "@/components/AssessmentModal";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

/* ─── SHARED HELPERS ─── */
const Divider = () => <div className="w-full h-px bg-border" />;
const SectionMarker = ({ numeral }: { numeral: string }) => (
  <span className="font-serif text-accent text-sm tracking-widest">{numeral}</span>
);

/* ─── STAT CARD ─── */
interface Stat {
  value: string;
  label: string;
  source: string;
}

const StatCard = ({ stat, delay = 0 }: { stat: Stat; delay?: number }) => (
  <FadeIn delay={delay}>
    <div className="border border-border rounded-sm bg-card p-6">
      <p className="font-serif text-2xl sm:text-3xl text-accent mb-2">{stat.value}</p>
      <p className="text-sm text-foreground/80 leading-relaxed mb-2">{stat.label}</p>
      <p className="text-xs text-muted-foreground italic">{stat.source}</p>
    </div>
  </FadeIn>
);

/* ─── DATA ─── */
const knowledgeCrisisStats: Stat[] = [
  { value: "4.1M", label: "Americans turning 65 every year through 2027", source: "US Census Bureau" },
  { value: "$31.5B", label: "Lost annually by Fortune 500 companies from knowledge-sharing failures", source: "IDC" },
  { value: "92%", label: "Of organizations don't consistently capture retiree knowledge", source: "APQC, 2024" },
  { value: "50–200%", label: "Of salary to replace a departing employee", source: "PeopleKeep, 2024" },
];

const aiStats: Stat[] = [
  { value: "80–90%", label: "Of enterprise data is unstructured", source: "Gartner" },
  { value: "63% → 1.7%", label: "Hallucination rate drop with structured Knowledge Graph RAG", source: "ScienceDirect, 2025" },
  { value: "+35%", label: "Complex reasoning accuracy with structured knowledge", source: "Latenode, 2024" },
  { value: "42%", label: "Of institutional knowledge lives solely with individuals", source: "Panopto, 2018" },
];

const founderStats: Stat[] = [
  { value: "20–40%", label: "Valuation discount for key-person dependent firms", source: "SE Advisory, 2024" },
  { value: "$200K–$400K", label: "Revenue ceiling for solo consultants", source: "Consulting Success" },
  { value: "0.5x–4.3x", label: "Revenue multiples for consulting firms at exit", source: "Peak Business Valuation, 2025" },
  { value: "$48.9B → $79.2B", label: "Certification market growth by 2033", source: "Global Growth Insights" },
];

const trustStats: Stat[] = [
  { value: "70%", label: "Say AI makes it harder to trust online content", source: "Deloitte, 2024" },
  { value: "81%", label: "Don't trust companies to use AI responsibly", source: "MarTech, 2024" },
  { value: "67%", label: "Would switch to a company with verified AI practices", source: "MarTech, 2024" },
  { value: "300%", label: "ROI from certification programs", source: "BenchPrep, 2024" },
];

/* ─── MODULE 1 — HERO ─── */
const HeroModule = () => (
  <section className="min-h-[80vh] flex items-center justify-center px-6 pt-24 pb-20">
    <div className="text-center max-w-3xl mx-auto">
      <FadeIn>
        <p className="text-xs tracking-[0.3em] uppercase text-accent mb-10">Why This Matters</p>
      </FadeIn>
      <FadeIn delay={200}>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-tight mb-14">
          The Business Case for Structured Methodology
        </h1>
      </FadeIn>
      <FadeIn delay={400}>
        <div className="space-y-2 text-base sm:text-lg text-muted-foreground leading-relaxed mb-12">
          <p>AI cannot scale what is not captured.</p>
          <p>Markets cannot value what is not structured.</p>
          <p>Institutions cannot preserve what is not documented.</p>
        </div>
      </FadeIn>
      <FadeIn delay={600}>
        <p className="text-lg sm:text-xl text-foreground font-serif italic">
          This is the business case for structured methodology.
        </p>
      </FadeIn>
    </div>
  </section>
);

/* ─── MODULE 2 — THE KNOWLEDGE CRISIS ─── */
const KnowledgeCrisis = () => (
  <section className="px-6 py-28 max-w-6xl mx-auto">
    <FadeIn>
      <SectionMarker numeral="I" />
      <h2 className="font-serif text-3xl sm:text-4xl font-normal mt-4 mb-12">
        The Knowledge Crisis
      </h2>
    </FadeIn>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
      <div className="space-y-6">
        <FadeIn delay={200}>
          <p className="text-lg text-foreground leading-[1.9]">
            Every year, millions of experienced professionals leave the workforce — and take their methodology with them. The processes they refined over decades, the decision frameworks that made their work distinctive, the institutional knowledge that kept organizations running — none of it was ever written down.
          </p>
        </FadeIn>
        <FadeIn delay={300}>
          <p className="text-lg text-foreground leading-[1.9]">
            This isn't a hypothetical problem. It is a documented, measurable crisis that costs Fortune 500 companies billions annually. And it's accelerating: the largest generation in workplace history is retiring, and most organizations have no systematic way to capture what they know.
          </p>
        </FadeIn>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {knowledgeCrisisStats.map((stat, i) => (
          <StatCard key={stat.value} stat={stat} delay={200 + i * 100} />
        ))}
      </div>
    </div>
  </section>
);

/* ─── MODULE 3 — WHAT AI ACTUALLY NEEDS ─── */
const WhatAiNeeds = () => (
  <section className="px-6 py-28 max-w-6xl mx-auto">
    <FadeIn>
      <SectionMarker numeral="II" />
      <h2 className="font-serif text-3xl sm:text-4xl font-normal mt-4 mb-12">
        What AI Actually Needs
      </h2>
    </FadeIn>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
      <div className="space-y-6">
        <FadeIn delay={200}>
          <p className="text-lg text-foreground leading-[1.9]">
            The promise of AI is delivery at scale. The reality is that AI without structured methodology hallucinates, fabricates, and drifts. Most enterprise data is unstructured — scattered across emails, documents, and the minds of individual practitioners.
          </p>
        </FadeIn>
        <FadeIn delay={300}>
          <p className="text-lg text-foreground leading-[1.9]">
            When AI is given structured knowledge — captured methodology with clear decision logic, defined stages, and documented principles — its accuracy transforms. Research shows hallucination rates can drop from 63% to under 2% with structured knowledge graph approaches.
          </p>
        </FadeIn>
        <FadeIn delay={400}>
          <p className="text-lg text-foreground leading-[1.9]">
            AI doesn't replace methodology. It requires it.
          </p>
        </FadeIn>
      </div>
      <div className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {aiStats.map((stat, i) => (
            <StatCard key={stat.value} stat={stat} delay={200 + i * 100} />
          ))}
        </div>
        {/* Hallucination comparison visual */}
        <FadeIn delay={600}>
          <div className="border border-border rounded-sm bg-card p-6">
            <p className="text-xs tracking-[0.2em] text-muted-foreground mb-4 uppercase">Hallucination Rate</p>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-foreground/70">Without structure</span>
                  <span className="text-foreground">63%</span>
                </div>
                <div className="h-3 bg-muted rounded-sm overflow-hidden">
                  <div className="h-full bg-muted-foreground/40 rounded-sm" style={{ width: "63%" }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-foreground/70">With structured KG-RAG</span>
                  <span className="text-accent font-medium">1.7%</span>
                </div>
                <div className="h-3 bg-muted rounded-sm overflow-hidden">
                  <div className="h-full rounded-sm" style={{ width: "2.7%", backgroundColor: "hsl(var(--accent))" }} />
                </div>
              </div>
            </div>
            <p className="text-xs text-muted-foreground italic mt-3">Source: ScienceDirect, 2025</p>
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

/* ─── MODULE 4 — THE FOUNDER TRAP ─── */
const FounderTrap = () => (
  <section className="px-6 py-28 max-w-6xl mx-auto">
    <FadeIn>
      <SectionMarker numeral="III" />
      <h2 className="font-serif text-3xl sm:text-4xl font-normal mt-4 mb-12">
        The Founder Trap
      </h2>
    </FadeIn>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
      <div className="space-y-6">
        <FadeIn delay={200}>
          <p className="text-lg text-foreground leading-[1.9]">
            Most methodology-driven businesses hit the same ceiling: the founder is the method. Every engagement requires their presence. Every decision routes through them. The business can't scale, can't be valued fairly, and can't survive their departure.
          </p>
        </FadeIn>
        <FadeIn delay={300}>
          <p className="text-lg text-foreground leading-[1.9]">
            Firms that depend on a single key person face significant valuation discounts — as much as 20–40% — because acquirers and investors see concentration risk. The methodology may be brilliant, but if it lives in one person's head, it's fragile.
          </p>
        </FadeIn>
        <FadeIn delay={400}>
          <p className="text-lg text-foreground leading-[1.9]">
            Meanwhile, the certification market is projected to nearly double to $79 billion by 2033, with organizations seeing 300% ROI from well-structured certification programs. The opportunity isn't just to document — it's to transform methodology into a scalable asset.
          </p>
        </FadeIn>
        <FadeIn delay={500}>
          <p className="text-sm text-muted-foreground">
            Related: <Link to="/blog/business-case-for-methodology-documentation" className="text-accent hover:text-foreground transition-colors">The Business Case for Methodology Documentation</Link>
          </p>
        </FadeIn>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {founderStats.map((stat, i) => (
          <StatCard key={stat.value} stat={stat} delay={200 + i * 100} />
        ))}
      </div>
    </div>
  </section>
);

/* ─── MODULE 5 — TRUST IN THE AGE OF AI ─── */
const TrustInAgeOfAi = () => (
  <section className="px-6 py-28 max-w-6xl mx-auto">
    <FadeIn>
      <SectionMarker numeral="IV" />
      <h2 className="font-serif text-3xl sm:text-4xl font-normal mt-4 mb-12">
        Trust in the Age of AI
      </h2>
    </FadeIn>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
      <div className="space-y-6">
        <FadeIn delay={200}>
          <p className="text-lg text-foreground leading-[1.9]">
            AI has created a crisis of trust. When anyone can generate authoritative-sounding content in seconds, how do clients, institutions, and markets distinguish real expertise from convincing fabrication?
          </p>
        </FadeIn>
        <FadeIn delay={300}>
          <p className="text-lg text-foreground leading-[1.9]">
            The majority of people no longer trust companies to use AI responsibly. But here's the critical insight: the same people would switch to a company that demonstrates verified, structured practices. Trust isn't gone — it's migrating to those who can prove their methodology is real, governed, and transparent.
          </p>
        </FadeIn>
        <FadeIn delay={400}>
          <p className="text-lg text-foreground leading-[1.9]">
            Verified methodology becomes a competitive differentiator precisely because AI has made unverified claims worthless.
          </p>
        </FadeIn>
        <FadeIn delay={500}>
          <p className="text-sm text-muted-foreground">
            Related: <Link to="/blog/your-method-is-your-moat" className="text-accent hover:text-foreground transition-colors">Your Method Is Your Moat</Link>
          </p>
        </FadeIn>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {trustStats.map((stat, i) => (
          <StatCard key={stat.value} stat={stat} delay={200 + i * 100} />
        ))}
      </div>
    </div>
  </section>
);

/* ─── MODULE 6 — THE CONVERGENCE ─── */
const Convergence = () => (
  <section className="px-6 py-28 max-w-6xl mx-auto">
    <FadeIn>
      <SectionMarker numeral="V" />
      <h2 className="font-serif text-3xl sm:text-4xl font-normal mt-4 mb-12">
        The Convergence
      </h2>
    </FadeIn>
    <FadeIn delay={200}>
      <p className="text-lg text-foreground leading-[1.9] max-w-3xl mb-16">
        These are not separate problems. They are three expressions of the same underlying failure: the absence of structure.
      </p>
    </FadeIn>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
      {[
        { title: "Knowledge Loss", description: "Expertise leaves with people because methodology was never captured in transferable form." },
        { title: "AI Needs Structure", description: "AI hallucinates and drifts because it lacks the structured knowledge that methodology provides." },
        { title: "Markets Reward Trust", description: "Trust migrates to verified practices because markets have learned that unstructured claims are unreliable." },
      ].map((item, i) => (
        <FadeIn key={item.title} delay={300 + i * 150}>
          <div className="border border-border rounded-sm bg-card p-8 h-full flex flex-col">
            <p className="text-xs tracking-[0.2em] text-accent mb-3 font-sans uppercase">{`0${i + 1}`}</p>
            <h3 className="font-serif text-xl mb-4 text-foreground">{item.title}</h3>
            <p className="text-sm text-foreground/80 leading-relaxed flex-1">{item.description}</p>
          </div>
        </FadeIn>
      ))}
    </div>
    <FadeIn delay={800}>
      <p className="text-lg sm:text-xl text-foreground font-serif italic text-center max-w-3xl mx-auto">
        Three forces, one solution: structure your methodology — or watch it dissolve.
      </p>
    </FadeIn>
  </section>
);

/* ─── MODULE 7 — WHAT STRUCTURE MAKES POSSIBLE ─── */
const outcomes = [
  { number: "01", text: "Your method can be taught by others", to: "/method-capture" },
  { number: "02", text: "AI delivers your methodology at scale", to: "/" },
  { number: "03", text: "Certification and licensing become possible", to: "/strategy-sprint" },
  { number: "04", text: "Your valuation reflects the system, not just the founder", to: "/case-studies" },
  { number: "05", text: "Knowledge survives transitions", to: "/systems-of-trust" },
];

const WhatStructureMakesPossible = () => (
  <section className="px-6 py-28 max-w-5xl mx-auto">
    <FadeIn>
      <SectionMarker numeral="VI" />
      <h2 className="font-serif text-3xl sm:text-4xl font-normal mt-4 mb-12">
        What Structure Makes Possible
      </h2>
    </FadeIn>
    <FadeIn delay={200}>
      <p className="text-lg text-foreground leading-[1.9] max-w-3xl mb-14">
        When methodology is captured, structured, and governed, it stops being fragile knowledge and becomes durable infrastructure. Here is what becomes possible:
      </p>
    </FadeIn>
    <div className="space-y-0">
      {outcomes.map((item, i) => (
        <FadeIn key={item.number} delay={300 + i * 100}>
          <Link
            to={item.to}
            className="group flex items-center gap-6 py-6 border-b border-border hover:bg-surface/50 transition-colors px-2 -mx-2 rounded-sm"
          >
            <span className="font-serif text-2xl text-accent shrink-0 w-10">{item.number}</span>
            <span className="text-lg text-foreground group-hover:text-accent transition-colors flex-1">{item.text}</span>
            <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors shrink-0" />
          </Link>
        </FadeIn>
      ))}
    </div>
  </section>
);

/* ─── MODULE 8 — CLOSE ─── */
const ClosingModule = ({ onRequestAssessment }: { onRequestAssessment: () => void }) => (
  <section className="px-6 py-40 text-center">
    <div className="max-w-3xl mx-auto">
      <FadeIn>
        <div className="space-y-2 text-lg sm:text-xl text-foreground font-serif italic mb-16">
          <p>What is not structured cannot endure.</p>
          <p>What is not captured cannot scale.</p>
          <p>What is not governed will drift.</p>
        </div>
        <Button
          onClick={onRequestAssessment}
          className="btn-accent-gradient text-accent-foreground rounded-sm px-12 py-5 text-lg tracking-wide font-medium h-auto"
        >
          Request a Method Audit
        </Button>
      </FadeIn>
      <SiteFooter />
    </div>
  </section>
);

/* ─── PAGE ─── */
const WhyThisMatters = () => {
  const [assessmentOpen, setAssessmentOpen] = useState(false);
  const openAssessment = () => setAssessmentOpen(true);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "name": "Why Structured Methodology Matters",
        "description": "The data-backed business case for structured methodology — why AI, valuation, and knowledge preservation all depend on capturing and governing your method.",
        "url": "https://method-lab.ai/why/",
        "publisher": { "@type": "Organization", "name": "Method Lab by Certainly", "url": "https://method-lab.ai" },
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://method-lab.ai/" },
          { "@type": "ListItem", "position": 2, "name": "Why This Matters", "item": "https://method-lab.ai/why/" },
        ],
      },
    ],
  };

  return (
    <div className="bg-background text-foreground min-h-screen">
      <Helmet>
        <title>Why Structured Methodology Matters | Method Lab</title>
        <meta name="description" content="The data-backed business case for structured methodology — why AI, valuation, and knowledge preservation all depend on capturing and governing your method." />
        <link rel="canonical" href="https://method-lab.ai/why/" />
        <meta property="og:title" content="Why Structured Methodology Matters | Method Lab" />
        <meta property="og:description" content="AI can't scale what isn't captured. Markets can't value what isn't structured. The research is clear — methodology needs architecture." />
        <meta property="og:url" content="https://method-lab.ai/why/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Why Structured Methodology Matters | Method Lab" />
        <meta name="twitter:description" content="AI can't scale what isn't captured. Markets can't value what isn't structured. The research is clear — methodology needs architecture." />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <SiteNav onRequestAssessment={openAssessment} />
      <HeroModule />
      <Divider />
      <div className="bg-surface noise-overlay">
        <KnowledgeCrisis />
      </div>
      <Divider />
      <WhatAiNeeds />
      <Divider />
      <div className="bg-surface">
        <FounderTrap />
      </div>
      <Divider />
      <TrustInAgeOfAi />
      <Divider />
      <div className="bg-surface">
        <Convergence />
      </div>
      <Divider />
      <WhatStructureMakesPossible />
      <Divider />
      <ClosingModule onRequestAssessment={openAssessment} />
      <AssessmentModal open={assessmentOpen} onOpenChange={setAssessmentOpen} />
    </div>
  );
};

export default WhyThisMatters;
