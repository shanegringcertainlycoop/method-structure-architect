import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Check } from "lucide-react";
import FadeIn from "@/components/FadeIn";

import AssessmentModal from "@/components/AssessmentModal";
import ProofSection from "@/components/ProofSection";
import TrustDiagnosticSection from "@/components/TrustDiagnosticSection";
import ClientHighlights from "@/components/ClientHighlights";
import TransformationSection from "@/components/TransformationSection";
// romanBust is now served from public folder
import certainlyLogo from "@/assets/certainly-logo.png";
import structuralPartner from "@/assets/structural-partner.avif";
import romanColumns from "@/assets/roman-columns.png";
import closingBg from "@/assets/closing-bg.avif";

const Divider = () => <div className="w-full h-px bg-border" />;

const SectionMarker = ({ numeral, className = "" }: {numeral: string;className?: string;}) =>
<span className={`font-serif text-accent text-sm tracking-widest ${className}`}>{numeral}</span>;


/* ─── NAV ─── */
const Nav = ({ onRequestAssessment }: {onRequestAssessment: () => void;}) =>
<nav className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center border-b border-border bg-background/80 backdrop-blur-sm">
    <img src={certainlyLogo} alt="Certainly" className="h-8" />
    <Button
    onClick={onRequestAssessment}
    size="sm"
    className="btn-accent-gradient text-accent-foreground rounded-sm text-xs tracking-wide">

      Request a Method Audit
    </Button>
  </nav>;


/* ─── HERO ─── */
const Hero = ({ onRequestAssessment }: {onRequestAssessment: () => void;}) =>
<section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden pt-16">
    <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
      <img
      src="/images/roman-bust-hero.png"
      alt=""
      className="absolute right-0 bottom-0 w-[85%] h-[110%] object-contain object-right-bottom grayscale brightness-150 opacity-25" />

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
          Certainly partners with founders and institutions to extract, document, and guide the evolution of their proprietary method — so it can scale through certification, technology, and disciplined growth.
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
          onClick={() => document.getElementById("lifecycle")?.scrollIntoView({ behavior: "smooth" })}>

            See the Method Lifecycle™
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
"Converting implicit judgment into documented decision logic",
"Formalizing language into a canonical system others can teach",
"Designing curriculum and assessment architecture that defines real competence",
"Building communication infrastructure that expresses standards publicly",
"Defining governance and enforcement mechanisms that protect quality",
"Engineering the appropriate trust mechanism — certification, licensing, or internal standards",
"Establishing stewardship structures that prevent drift as you scale"];


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
        <li key={item} className="flex items-start gap-3 text-base text-foreground/80">
              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
              {item}
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
  numeral: "I",
  title: "Diagnose",
  subtitle: "(1–2 weeks)",
  intro: "Understand how trust works in your business.",
  bulletIntro: "Support could include a:",
  bullets: ["Trust Architecture Review", "Method Audit", "Strategy Sprint"],
  closing: "Clarity saves months of misdirected build effort."
},
{
  numeral: "II",
  title: "Preserve",
  subtitle: "(4–8 weeks)",
  intro: "Capture and formalize what makes your method effective.",
  bulletIntro: "Support could include:",
  bullets: ["Method Capture", "Curriculum Architecture", "Competence Definition"],
  closing: "Your expertise becomes transferable."
},
{
  numeral: "III",
  title: "Build",
  subtitle: "(8–12 weeks or 120-day pilot)",
  intro: "Design the right trust mechanism.",
  bulletIntro: "Support could include:",
  bullets: ["Licensing Frameworks", "Assessment Systems", "Brand and Messaging", "Digital Infrastructure", "120-Day Certification Pilot Launch"],
  closing: "This is where structure enters the market."
},
{
  numeral: "IV",
  title: "Steward",
  subtitle: "(Ongoing)",
  intro: "Operational ownership of certification systems.",
  bulletIntro: "Support could include:",
  bullets: ["Governance", "Vendor coordination", "Renewal standards", "Version control", "Quality assurance"],
  closing: "Structure must be maintained."
}];

const EngagementModel = () =>
<section className="px-6 py-32 max-w-5xl mx-auto">
    <FadeIn>
      <SectionMarker numeral="VII" />
      <h2 className="font-serif text-3xl sm:text-4xl font-normal mt-4 mb-4">How We Work</h2>
      <p className="text-lg text-muted-foreground mb-16">Our engagements follow four structural movements.</p>
    </FadeIn>
    <div className="relative">
      <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide -mr-6 pr-6">
        {engagementPhases.map((phase, i) =>
      <FadeIn key={phase.numeral} delay={150 * i}>
            <div className="border border-border rounded-sm bg-card p-8 flex flex-col h-full min-w-[300px] w-[300px] snap-start">
              <p className="text-xs tracking-[0.2em] text-accent mb-3 font-sans">{phase.numeral}.</p>
              <h3 className="font-serif text-2xl mb-1 text-foreground">{phase.title}</h3>
              <p className="text-xs text-muted-foreground mb-4">{phase.subtitle}</p>
              <p className="text-base text-muted-foreground leading-relaxed mb-6">{phase.intro}</p>
              {"bulletIntro" in phase && phase.bulletIntro &&
            <p className="text-sm text-muted-foreground mb-3">{phase.bulletIntro}</p>
            }
              <ul className="space-y-3 mb-6 flex-1">
                {phase.bullets.map((b) =>
            <li key={b} className="flex items-start gap-3 text-base text-foreground/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    {b}
                  </li>
            )}
              </ul>
              <p className="text-base text-foreground font-serif italic">{phase.closing}</p>
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
          <p className="mt-4 sm:mt-0">Method architecture for disciplined growth.</p>
        </footer>
      </FadeIn>
    </div>
  </section>;


/* ─── INDEX PAGE ─── */
const Index = () => {
  const [assessmentOpen, setAssessmentOpen] = useState(false);

  return (
    <div className="bg-background text-foreground min-h-screen">
      <Nav onRequestAssessment={() => setAssessmentOpen(true)} />
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
      <Closing onRequestAssessment={() => setAssessmentOpen(true)} />
      <AssessmentModal open={assessmentOpen} onOpenChange={setAssessmentOpen} />
    </div>);

};

export default Index;