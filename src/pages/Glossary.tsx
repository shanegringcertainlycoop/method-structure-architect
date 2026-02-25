import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/FadeIn";
import AssessmentModal from "@/components/AssessmentModal";
import certainlyLogo from "@/assets/certainly-logo.png";

/* ─── SHARED HELPERS ─── */
const Divider = () => <div className="w-full h-px bg-border" />;
const SectionMarker = ({ numeral }: { numeral: string }) => (
  <span className="font-serif text-accent text-sm tracking-widest">{numeral}</span>
);

/* ─── NAV ─── */
const Nav = ({ onRequestAssessment }: { onRequestAssessment: () => void }) => (
  <nav className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center border-b border-border bg-background/80 backdrop-blur-sm">
    <div className="flex items-center gap-8">
      <Link to="/"><img src={certainlyLogo} alt="Certainly" className="h-8" /></Link>
    </div>
    <Button
      onClick={onRequestAssessment}
      size="sm"
      className="btn-accent-gradient text-accent-foreground rounded-sm text-xs tracking-wide"
    >
      Request a Method Audit
    </Button>
  </nav>
);

/* ─── TERM DATA ─── */
interface Term {
  id: string;
  title: string;
  definition: string;
  body?: string[];
  bullets?: string[];
  examples?: string[];
}

interface Category {
  numeral: string;
  title: string;
  terms: Term[];
}

const glossaryData: Category[] = [
  {
    numeral: "I",
    title: "Core Concepts",
    terms: [
      {
        id: "system-of-trust",
        title: "System of Trust",
        definition: "A system of trust is a structured set of programs, standards, and governance that allows a proven method to be taught, licensed, and applied consistently by others.",
        body: [
          "Rather than relying on the ongoing presence of the founder, it establishes shared rules, clear expectations, and durable infrastructure that protect quality as the work spreads.",
          "In practice, a system of trust shows up through clear learning pathways and artifacts — such as courses, train-the-trainer programs, certifications, accreditations, verification processes, and ongoing governance — that make competence legible, credibility transferable, and trust sustainable over time."
        ],
      },
      {
        id: "certification",
        title: "Certification",
        definition: "A certification is a governed system that grants permission to represent, apply, or teach a method under defined conditions.",
        body: [
          "Unlike training or education, certification is not about access to information. It is about trust, standards, and accountability over time. A real certification includes evaluation, renewal, and enforcement — and can be revoked if standards are violated.",
          "If there is no governance or renewal, it is not a certification."
        ],
      },
      {
        id: "certificate",
        title: "Certificate",
        definition: "A certificate is a record of participation or completion.",
        body: [
          "Certificates acknowledge that someone attended a course or completed a learning experience. They do not grant authority, permission, or professional standing, and they typically do not expire or require renewal.",
          "Certificates are common in education. Certifications are common in professions."
        ],
      },
      {
        id: "credential",
        title: "Credential",
        definition: "A credential is the public-facing signal issued by a certification system.",
        body: [
          "This may take the form of a title, designation, badge, or post-nominal letters. The credential represents earned trust and communicates that the holder has met specific standards at a point in time.",
          "Credentials only have meaning if the system behind them is credible."
        ],
      },
      {
        id: "standards",
        title: "Standards",
        definition: "Standards are the documented expectations that define what it means to be qualified.",
        body: [
          "Standards make trust explicit. Without standards, certification becomes subjective or symbolic."
        ],
        bullets: [
          "Required knowledge or skills",
          "Acceptable performance or outcomes",
          "Boundaries of practice"
        ],
      },
    ],
  },
  {
    numeral: "II",
    title: "Operational Components",
    terms: [
      {
        id: "assessment-evaluation",
        title: "Assessment / Evaluation",
        definition: "Assessment is the process used to verify readiness to earn or maintain a credential.",
        body: [
          "This may include exams, demonstrations, case reviews, audits, or supervised practice. Attendance alone is not assessment.",
          "Assessment protects the integrity of the credential by ensuring standards are actually met."
        ],
      },
      {
        id: "governance",
        title: "Governance",
        definition: "Governance is the structure responsible for maintaining certification integrity over time.",
        body: [
          "Governance is what allows certification to scale without collapsing trust."
        ],
        bullets: [
          "Update standards as the field evolves",
          "Resolve edge cases and disputes",
          "Enforce rules and codes of conduct",
          "Decide when credentials are issued, renewed, or revoked"
        ],
      },
      {
        id: "issuance",
        title: "Issuance",
        definition: "Issuance is the formal act of granting a credential once standards and assessment requirements are met.",
        body: [
          "Issuance is not a reward or a participation trophy. It is a permission event that carries reputational weight for both the holder and the issuing body."
        ],
      },
      {
        id: "renewal",
        title: "Renewal",
        definition: "Renewal is the requirement to periodically reaffirm certification status.",
        body: [
          "Renewal ensures that credential holders remain aligned with current standards, practices, and knowledge. It prevents credentials from becoming outdated or purely symbolic.",
          "Most credible certifications require renewal annually or every few years."
        ],
      },
      {
        id: "continuing-education",
        title: "Continuing Education (CE)",
        definition: "Continuing Education refers to ongoing learning requirements tied to renewal.",
        body: [
          "CE is not optional enrichment — it is part of maintaining trust."
        ],
        bullets: [
          "Stay current as the field evolves",
          "Maintain competency",
          "Remain aligned with updated standards"
        ],
      },
      {
        id: "revocation",
        title: "Revocation",
        definition: "Revocation is the removal of a credential when standards are violated or no longer met.",
        body: [
          "The ability to revoke is essential. Without it, a certification system cannot protect its credibility.",
          "Revocation is rare in healthy systems — but its presence matters."
        ],
      },
    ],
  },
  {
    numeral: "III",
    title: "Certification Models",
    terms: [
      {
        id: "first-party-certification",
        title: "First-Party Certification",
        definition: "A first-party certification is issued and governed by the creator or organization that owns the underlying method.",
        body: [
          "Trust is anchored in the authority of the IP holder.",
          "Most certifications begin as first-party systems."
        ],
        examples: [
          "Google Ads Certifications (Google)",
          "HubSpot Academy Certifications (HubSpot)",
          "CrossFit Level 1 Trainer (CrossFit HQ)"
        ],
      },
      {
        id: "second-party-certification",
        title: "Second-Party Certification",
        definition: "A second-party certification is governed jointly by partners, institutions, or an industry consortium.",
        body: [
          "Trust comes from peer alignment rather than a single authority. Governance is shared, which increases credibility but adds complexity.",
          "Second-party models often evolve from mature first-party systems."
        ],
        examples: [
          "Project Management Professional (PMP®) via PMI chapters",
          "CompTIA certifications",
          "Many trade and professional association credentials"
        ],
      },
      {
        id: "third-party-certification",
        title: "Third-Party Certification",
        definition: "A third-party certification is evaluated and issued by an independent organization that does not own the underlying method.",
        body: [
          "This model emphasizes neutrality and external validation. It is common in regulation-adjacent or procurement-driven environments.",
          "Third-party certification requires maturity, resources, and stable standards."
        ],
        examples: [
          "LEED certification (projects evaluated by GBCI)",
          "ISO 9001 / ISO 14001",
          "SOC 2 audits",
          "Fair Trade certification"
        ],
      },
      {
        id: "pilot-certification",
        title: "Pilot Certification",
        definition: "A pilot certification is a limited, first issuance used to test standards, assessment, operations, and market response before scaling.",
        body: [
          "Pilots reduce reputational and operational risk by allowing refinement before public expansion.",
          "Well-run certifications almost always pilot first."
        ],
      },
    ],
  },
  {
    numeral: "IV",
    title: "Ecosystem & Strategy",
    terms: [
      {
        id: "certification-ecosystem",
        title: "Certification Ecosystem",
        definition: "The certification ecosystem is the full system that supports a credential, including:",
        bullets: [
          "Standards and documentation",
          "Governance and policies",
          "Assessment and renewal processes",
          "Operations and support",
          "Brand signaling and public trust cues",
          "Technology for tracking and issuance"
        ],
      },
      {
        id: "stewardship",
        title: "Stewardship",
        definition: "Stewardship is the ongoing responsibility of maintaining, evolving, and protecting a certification system after launch.",
        body: [
          "Certification is not a one-time project. Stewardship ensures the system remains credible, current, and aligned with its purpose over time."
        ],
      },
      {
        id: "certification-readiness",
        title: "Certification Readiness",
        definition: "Certification readiness is a measure of whether a method, organization, or program is prepared to support certification responsibly.",
        body: [
          "Readiness should be assessed before any public announcement."
        ],
        bullets: [
          "Clarity of the method",
          "Explicitness of standards",
          "Governance capacity",
          "Operational maturity",
          "Reputational risk"
        ],
      },
    ],
  },
];

/* ─── TERM COMPONENT ─── */
const TermBlock = ({ term }: { term: Term }) => (
  <div id={term.id} className="py-8 border-b border-border last:border-b-0 scroll-mt-24">
    <FadeIn>
      <h3 className="font-serif text-2xl mb-4">{term.title}</h3>
      <p className="text-base text-foreground font-medium leading-relaxed mb-4">{term.definition}</p>
      {term.body?.map((p, i) => (
        <p key={i} className="text-base text-muted-foreground leading-relaxed mb-3">{p}</p>
      ))}
      {term.bullets && (
        <ul className="space-y-2 mt-4 mb-4">
          {term.bullets.map((b) => (
            <li key={b} className="flex items-start gap-3 text-base text-foreground/80">
              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
              {b}
            </li>
          ))}
        </ul>
      )}
      {term.examples && (
        <div className="mt-4 pl-4 border-l-2 border-border">
          {term.examples.map((ex) => (
            <p key={ex} className="text-sm text-muted-foreground leading-relaxed mb-1">{ex}</p>
          ))}
        </div>
      )}
    </FadeIn>
  </div>
);

/* ─── CATEGORY SECTION ─── */
const CategorySection = ({ category, surface }: { category: Category; surface: boolean }) => (
  <section className={surface ? "bg-surface" : ""}>
    <div className="px-6 py-24 max-w-3xl mx-auto">
      <FadeIn>
        <SectionMarker numeral={category.numeral} />
        <h2 className="font-serif text-3xl sm:text-4xl font-normal mt-4 mb-12">{category.title}</h2>
      </FadeIn>
      {category.terms.map((term) => (
        <TermBlock key={term.id} term={term} />
      ))}
    </div>
  </section>
);

/* ─── PAGE ─── */
const Glossary = () => {
  const [assessmentOpen, setAssessmentOpen] = useState(false);

  return (
    <div className="bg-background text-foreground min-h-screen">
      <Helmet>
        <title>Certification &amp; Credentialing Glossary | Certainly</title>
        <meta name="description" content="Definitions for the language of certification, credentialing, and trust architecture — including certification, credential, governance, assessment, stewardship, and more." />
        <link rel="canonical" href="https://method.certainly.coop/glossary" />
        <meta property="og:title" content="Certification &amp; Credentialing Glossary | Certainly" />
        <meta property="og:description" content="Clear definitions for the language of certification program design, credentialing, and trust architecture." />
        <meta property="og:url" content="https://method.certainly.coop/glossary" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Certification &amp; Credentialing Glossary | Certainly" />
        <meta name="twitter:description" content="Clear definitions for the language of certification program design, credentialing, and trust architecture." />
      </Helmet>
      <Nav onRequestAssessment={() => setAssessmentOpen(true)} />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <p className="text-xs tracking-[0.3em] uppercase text-accent mb-10">Reference</p>
          </FadeIn>
          <FadeIn delay={200}>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal leading-tight mb-8">Glossary</h1>
          </FadeIn>
          <FadeIn delay={400}>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Definitions for the language of certification, credentialing, and trust architecture.
            </p>
          </FadeIn>
        </div>
      </section>

      <Divider />

      {/* Category Sections */}
      {glossaryData.map((cat, i) => (
        <div key={cat.numeral}>
          <CategorySection category={cat} surface={i % 2 === 0} />
          {i < glossaryData.length - 1 && <Divider />}
        </div>
      ))}

      <Divider />

      {/* Close */}
      <section className="px-6 py-32 text-center">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <p className="font-serif text-2xl sm:text-3xl italic text-foreground mb-14">
              Language shapes structure. Structure shapes trust.
            </p>
            <Button
              onClick={() => setAssessmentOpen(true)}
              className="btn-accent-gradient text-accent-foreground rounded-sm px-12 py-5 text-lg tracking-wide font-medium h-auto"
            >
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
                <span>Method architecture for disciplined growth.</span>
              </div>
            </footer>
          </FadeIn>
        </div>
      </section>

      <AssessmentModal open={assessmentOpen} onOpenChange={setAssessmentOpen} />
    </div>
  );
};

export default Glossary;
