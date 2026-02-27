import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Check, ArrowRight } from "lucide-react";
import FadeIn from "@/components/FadeIn";

import AssessmentModal from "@/components/AssessmentModal";
import ProofSection from "@/components/ProofSection";
import TrustDiagnosticSection from "@/components/TrustDiagnosticSection";
import ClientHighlights from "@/components/ClientHighlights";
import TransformationSection from "@/components/TransformationSection";
import FAQSection from "@/components/FAQSection";
import BentoSection from "@/components/BentoSection";
// romanBust is now served from public folder
import certainlyLogo from "@/assets/certainly-logo.png";
import SiteNav from "@/components/SiteNav";
import structuralPartner from "@/assets/structural-partner.avif";
import romanColumns from "@/assets/roman-columns.png";
import closingBg from "@/assets/closing-bg.avif";

const Divider = () => <div className="w-full h-px bg-border" />;

const SectionMarker = ({ numeral, className = "" }: {numeral: string;className?: string;}) =>
<span className={`font-serif text-accent text-sm tracking-widest ${className}`}>{numeral}</span>;




/* ─── HERO ─── */
const Hero = ({ onRequestAssessment }: {onRequestAssessment: () => void;}) =>
<section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden pt-16">
    <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
      <img
      src="/images/roman-bust-hero.jpg"
      alt=""
      className="absolute inset-0 w-full h-full object-cover object-[55%_35%] opacity-40 scale-105 blur-[1px] grayscale" />
      <div className="absolute inset-0 bg-background/30" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
    </div>
    <div className="relative z-10 text-center flex flex-col items-center">
      <FadeIn>
        <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-12">
          Method Architecture & Certification Advisory
        </p>
      </FadeIn>
      <FadeIn delay={200}>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-tight max-w-4xl mb-8">
          Capture Your Method.<br />
          Build the Structure.<br />
          Make It Transferable.
        </h1>
      </FadeIn>
      <FadeIn delay={400}>
        <p className="max-w-2xl text-muted-foreground leading-[1.9] text-lg sm:text-xl mb-14">
          Certainly designs certification programs, licensing frameworks, and governance systems for founders and institutions ready to scale their proprietary methodology — without losing what makes it work.
        </p>
      </FadeIn>
      <FadeIn delay={600}>
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <Button
          onClick={onRequestAssessment}
          className="btn-accent-gradient text-accent-foreground rounded-sm px-10 py-4 text-base tracking-wide h-auto">

            Request a Method Audit
          </Button>
          <Button
          variant="outline"
          className="rounded-sm px-10 py-4 text-base tracking-wide border-border text-foreground hover:bg-foreground hover:text-background h-auto"
          onClick={() => window.location.href = "/systems-of-trust"}>

            See Systems of Trust™
          </Button>
        </div>
        <p className="text-xs text-muted-foreground tracking-wide italic">
          Selective long-term advisory engagements.
        </p>
      </FadeIn>
    </div>
  </section>;


/* ─── SECTION I — TRANSFORMATION (moved to TransformationSection.tsx) ─── */





/* ─── SECTION III — WHAT WE ACTUALLY DO ─── */
const engagementItems = [
{ text: "Converting implicit judgment into documented decision logic", note: "methodology documentation and knowledge transfer" },
{ text: "Formalizing language into a canonical system others can deliver", note: "curriculum architecture and competence definition" },
{ text: "Designing curriculum and assessment architecture that defines real competence", note: "certification program design" },
{ text: "Building communication infrastructure that expresses standards publicly", note: "credentialing and professional designation development" },
{ text: "Defining governance and enforcement mechanisms that protect quality", note: "standards organization consulting" },
{ text: "Engineering the appropriate trust mechanism — certification, licensing, or internal standards", note: "licensing framework design" },
{ text: "Establishing stewardship structures that prevent drift as you scale", note: "quality assurance and governance for certification programs" },
];


const WhatWeDo = () =>
<section className="relative px-6 py-32 overflow-hidden">
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
      <img
      src={romanColumns}
      alt=""
      className="w-full h-full object-cover grayscale opacity-10"
      style={{ mixBlendMode: "luminosity" }} />
    </div>
    <div className="relative z-10 max-w-5xl mx-auto">
      <FadeIn>
        <SectionMarker numeral="III" />
        <h2 className="font-serif text-3xl sm:text-4xl font-normal mt-4 mb-6">
          We Help You Institutionalize Authority.
        </h2>
        <p className="text-base text-muted-foreground mb-2">Not through templates.</p>
        <p className="text-base text-muted-foreground mb-8">Not through generic deliverables.</p>
        <p className="text-lg text-foreground mb-2">Through architecture.</p>
        <p className="text-base text-muted-foreground mb-8">The structure that makes your expertise transferable — and durable.</p>
        <p className="text-base text-foreground mb-4">Engagement could involve:</p>
        <ul className="space-y-3 mb-8">
          {engagementItems.map((item) =>
        <li key={item.text} className="flex items-start gap-3 text-base text-foreground/80">
              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
              <span>{item.text} <span className="text-muted-foreground italic text-sm">({item.note})</span></span>
            </li>
        )}
        </ul>
        <p className="text-base text-muted-foreground mb-2">Most expert businesses scale delivery.</p>
        <p className="text-base text-foreground mb-2">Very few scale authority.</p>
        <p className="text-foreground font-serif italic text-4xl sm:text-5xl mt-12">This is design for authority.</p>
      </FadeIn>
    </div>
  </section>;




/* ─── SECTION V — WHO THIS IS FOR ─── */
const audienceItems = [
"Founder-led consulting firms",
"Standards organizations",
"Advisory practices with proprietary frameworks",
"Performance methodologies ready to scale",
"Institutional leaders stewarding intellectual capital"];


const WhoThisIsFor = () =>
<section className="px-6 py-32 max-w-5xl mx-auto">
    <FadeIn>
      <SectionMarker numeral="VI" />
      <h2 className="font-serif text-3xl sm:text-4xl font-normal mt-4 mb-6">
        For Leaders Already Producing Results.
      </h2>
      <p className="text-lg text-foreground mb-8">This is for:</p>
    </FadeIn>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-0 mb-12">
      {audienceItems.map((item, i) =>
    <FadeIn key={item} delay={100 * i}>
          <div className="flex items-center gap-4 py-5 border-b border-border">
            <span className="text-accent font-serif text-sm tabular-nums">{String(i + 1).padStart(2, "0")}</span>
            <p className="text-base text-foreground">{item}</p>
          </div>
        </FadeIn>
    )}
    </div>
    <FadeIn delay={800}>
      <p className="text-base text-muted-foreground mb-2">Not for early-stage creators.</p>
      <p className="text-lg text-foreground mb-2">You must already have proof.</p>
      <p className="text-lg text-foreground font-serif italic">We provide discipline.</p>
    </FadeIn>
  </section>;


/* ─── SECTION VI — ENGAGEMENT MODEL ─── */
const engagementPhases = [
{
  numeral: "0",
  title: "Trust Architecture™ Review",
  level: "Level 0",
  subtitle: "$9 Workbook · Self-guided · 30–45 min",
  intro: "Before you invest in certification or scaling delivery — understand how trust actually works in your business.",
  bullets: ["Five-dimension trust diagnostic", "Scoring & interpretation", "Recommended path forward", "Mini-guide on trust mechanisms"],
  closing: "That realization changes what you build next.",
  to: "/trust-architecture-review",
},
{
  numeral: "I",
  title: "Method Capture™",
  level: "Level 1",
  subtitle: "(4–8 weeks)",
  intro: "Preserve and formalize the method that makes your business defensible.",
  bullets: ["Deep method extraction", "Curriculum architecture", "Competence definition", "Transferability framework"],
  closing: "Your expertise becomes structured and portable.",
  to: "/method-capture",
},
{
  numeral: "II",
  title: "Strategy Sprint™",
  level: "Level 2",
  subtitle: "(2–3 weeks)",
  intro: "Determine the right trust mechanism — before you build the wrong one.",
  bullets: ["Five-dimension structural audit", "Mechanism recommendation", "Investment roadmap", "Executive decision brief"],
  closing: "Clarity prevents years of misallocation.",
  to: "/strategy-sprint",
},
{
  numeral: "III",
  title: "Trust Mechanism Modules™",
  level: "Level 3",
  subtitle: "(8–12 weeks or 120-day pilot)",
  intro: "Install the structural components that make trust durable.",
  bullets: ["Benchmark Audit", "Curriculum & Assessment Architecture", "Credential Signal Infrastructure", "120-Day Pilot Installation"],
  closing: "This is institutional construction.",
  to: "/trust-mechanism-modules",
},
{
  numeral: "IV",
  title: "Fractional Credential Operations™",
  level: "Level 4",
  subtitle: "(Ongoing)",
  intro: "Steward the credential as a durable business unit — not a side project.",
  bullets: ["Operational health monitoring", "Governance & renewal stewardship", "Vendor coordination", "Revenue tracking", "Policy maintenance"],
  closing: "Durable systems require stewardship.",
  to: "/fractional-credential-operations",
}];

const EngagementModel = () =>
<section className="px-6 py-32 max-w-5xl mx-auto">
    <FadeIn>
      <SectionMarker numeral="VII" />
      <h2 className="font-serif text-3xl sm:text-4xl font-normal mt-4 mb-4">How We Work</h2>
      <p className="text-lg text-muted-foreground mb-16">Five structured levels. Engage only what your stage requires.</p>
    </FadeIn>
    <div className="relative">
      <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide -mr-6 pr-6">
        {engagementPhases.map((phase, i) =>
      <FadeIn key={phase.numeral} delay={150 * i}>
            <div className="border border-border rounded-sm bg-card p-8 flex flex-col h-full min-w-[300px] w-[300px] snap-start">
              <p className="text-[10px] tracking-[0.25em] uppercase text-accent/70 mb-1 font-sans">{phase.level}</p>
              
              <h3 className="font-serif text-2xl mb-1 text-foreground">{phase.title}</h3>
              <p className="text-xs text-muted-foreground mb-4">{phase.subtitle}</p>
              <p className="text-base text-muted-foreground leading-relaxed mb-6">{phase.intro}</p>
              <ul className="space-y-3 mb-6 flex-1">
                {phase.bullets.map((b) =>
            <li key={b} className="flex items-start gap-3 text-base text-foreground/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    {b}
                  </li>
            )}
              </ul>
              <p className="text-base text-foreground font-serif italic mb-5">{phase.closing}</p>
              <Button asChild variant="outline" size="sm" className="rounded-sm border-border text-foreground hover:bg-surface w-full">
                <Link to={phase.to}>
                  Explore {phase.level} <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </Link>
              </Button>
            </div>
          </FadeIn>
      )}
      </div>
      {/* Scroll hint */}
      <div className="flex items-center gap-2 mt-6 text-xs text-muted-foreground tracking-wide">
        <span>Scroll</span>
        <span className="w-8 h-px bg-muted-foreground/40" />
        <span>→</span>
      </div>
    </div>
  </section>;


/* ─── CLOSING ─── */
const Closing = ({ onRequestAssessment }: {onRequestAssessment: () => void;}) =>
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
        className="btn-accent-gradient text-accent-foreground rounded-sm px-12 py-5 text-lg tracking-wide font-medium h-auto">

          Request a Method Audit
        </Button>
      </FadeIn>
      <FadeIn delay={400}>
        <Divider />
        <footer className="mt-10 flex flex-col sm:flex-row items-center justify-between text-xs text-muted-foreground">
          <img src={certainlyLogo} alt="Certainly" className="h-4" />
          <div className="flex items-center gap-6 mt-4 sm:mt-0">
            <Link to="/systems-of-trust" className="hover:text-foreground transition-colors">Framework</Link>
            <Link to="/glossary" className="hover:text-foreground transition-colors">Glossary</Link>
            <Link to="/blog" className="hover:text-foreground transition-colors">Blog</Link>
            <span>Method architecture for disciplined growth.</span>
          </div>
        </footer>
      </FadeIn>
    </div>
  </section>;


/* ─── INDEX PAGE ─── */
const Index = () => {
  const [assessmentOpen, setAssessmentOpen] = useState(false);

  return (
    <div className="bg-background text-foreground min-h-screen">
      <Helmet>
        <title>Certification Program Design &amp; Methodology Consulting | Certainly</title>
        <meta name="description" content="Certainly helps founders and institutions design certification programs, licensing frameworks, and governance systems that make proprietary expertise scalable and transferable." />
        <link rel="canonical" href="https://method.certainly.coop/" />
        <meta property="og:title" content="Turn Your Expertise Into a Scalable Certification Program | Certainly" />
        <meta property="og:description" content="We help founder-led firms and standards organizations document, structure, and certify their proprietary methods — so they scale without dilution." />
        <meta property="og:url" content="https://method.certainly.coop/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Turn Your Expertise Into a Scalable Certification Program | Certainly" />
        <meta name="twitter:description" content="We help founder-led firms and standards organizations document, structure, and certify their proprietary methods — so they scale without dilution." />
      </Helmet>
      <SiteNav onRequestAssessment={() => setAssessmentOpen(true)} />
      <Hero onRequestAssessment={() => setAssessmentOpen(true)} />
      <Divider />
      <div className="bg-surface noise-overlay">
        <TransformationSection />
      </div>
      <Divider />
      <WhatWeDo />
      <Divider />
      <div className="bg-surface">
        <TrustDiagnosticSection onRequestAssessment={() => setAssessmentOpen(true)} />
      </div>
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
      <Divider />
      <BentoSection />
      <Divider />
      <FAQSection />
      <Closing onRequestAssessment={() => setAssessmentOpen(true)} />
      <AssessmentModal open={assessmentOpen} onOpenChange={setAssessmentOpen} />
    </div>);

};

export default Index;