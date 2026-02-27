import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/FadeIn";
import AssessmentModal from "@/components/AssessmentModal";
import SiteNav from "@/components/SiteNav";
import certainlyLogo from "@/assets/certainly-logo.png";

const Divider = () => <div className="w-full h-px bg-border" />;
const SectionMarker = ({ numeral }: { numeral: string }) => (
  <span className="font-serif text-accent text-sm tracking-widest">{numeral}</span>
);

const dimensions = [
  { title: "Where trust comes from", description: "Founder reputation, outcomes, method, or brand? Identify the actual source — not the assumed one." },
  { title: "How trust transfers", description: "What happens when others deliver your work? Does quality hold, or does it depend on you?" },
  { title: "How trust is signaled", description: "What does the market actually see and recognize? Credentials, results, associations, or nothing at all?" },
  { title: "What breaks under pressure", description: "Where does quality slip first? Hiring, onboarding, delivery, or communication?" },
  { title: "Where risk scales", description: "What gets more fragile as you grow? The answer determines what you should build next." },
];

const deliverables = [
  "A 12–15 page fillable PDF with diagnostic questions",
  "Scoring framework with interpretation guide",
  "Recommended path forward based on your results",
  "Mini-guide on trust mechanisms beyond certification",
];

const TrustArchitectureReview = () => {
  const [assessmentOpen, setAssessmentOpen] = useState(false);

  return (
    <div className="bg-background text-foreground min-h-screen">
      <Helmet>
        <title>Trust Architecture Review — $9 Diagnostic Workbook | Certainly</title>
        <meta name="description" content="Understand how trust actually works in your business before you invest in certification or scaling. A self-guided diagnostic workbook covering five dimensions of trust." />
        <link rel="canonical" href="https://method.certainly.coop/trust-architecture-review" />
        <meta property="og:title" content="Trust Architecture Review — $9 Diagnostic Workbook | Certainly" />
        <meta property="og:description" content="Understand how trust actually works in your business before you invest in certification or scaling. A self-guided diagnostic workbook covering five dimensions of trust." />
        <meta property="og:url" content="https://method.certainly.coop/trust-architecture-review" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Trust Architecture Review — $9 Diagnostic Workbook | Certainly" />
        <meta name="twitter:description" content="Understand how trust actually works in your business before you invest in certification or scaling. A self-guided diagnostic workbook covering five dimensions of trust." />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Trust Architecture Review",
          "description": "A self-guided diagnostic workbook covering five dimensions of trust — before you invest in certification or scaling.",
          "url": "https://method.certainly.coop/trust-architecture-review",
          "serviceType": "Certification Readiness Diagnostic",
          "offers": { "@type": "Offer", "price": "9", "priceCurrency": "USD" },
          "provider": { "@type": "ProfessionalService", "name": "Certainly", "url": "https://method.certainly.coop" },
          "areaServed": "Worldwide"
        })}</script>
      </Helmet>

      <SiteNav onRequestAssessment={() => setAssessmentOpen(true)} />

      {/* Hero */}
      <section className="min-h-[70vh] flex items-center justify-center px-6 pt-24 pb-20">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <p className="text-[10px] tracking-[0.25em] uppercase text-accent/70 mb-3 font-sans">Level 0</p>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal leading-tight mb-6">
              Trust Architecture™ Review
            </h1>
            <p className="text-base text-muted-foreground tracking-wide mb-8">
              $9 Workbook &nbsp;·&nbsp; Self-guided &nbsp;·&nbsp; 30–45 minutes
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-12">
              Before you invest in certification, partnerships, or scaling delivery — understand how trust actually works in your business.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
              <Button
                onClick={() => setAssessmentOpen(true)}
                className="btn-accent-gradient text-accent-foreground rounded-sm px-10 py-4 text-base tracking-wide h-auto"
              >
                Get the PDF Workbook — $9
              </Button>
              <Link
                to="/trust-review-workbook"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide underline underline-offset-4"
              >
                Try the free digital version →
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <Divider />

      {/* Five Dimensions */}
      <section className="bg-surface px-6 py-32">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <SectionMarker numeral="I" />
            <h2 className="font-serif text-3xl sm:text-4xl font-normal mt-4 mb-4">Five Dimensions of Trust.</h2>
            <p className="text-base text-muted-foreground mb-16">
              This workbook walks you through each one.
            </p>
          </FadeIn>
          <div className="space-y-0">
            {dimensions.map((dim, i) => (
              <FadeIn key={dim.title} delay={100 * i}>
                <div className="flex items-start gap-6 py-8 border-b border-border">
                  <span className="text-accent font-serif text-sm tabular-nums mt-1 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-lg text-foreground font-serif mb-2">{dim.title}</h3>
                    <p className="text-base text-muted-foreground leading-relaxed">{dim.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* What You Get */}
      <section className="px-6 py-32">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <SectionMarker numeral="II" />
            <h2 className="font-serif text-3xl sm:text-4xl font-normal mt-4 mb-12">What You Get.</h2>
          </FadeIn>
          <ul className="space-y-4 mb-16">
            {deliverables.map((item, i) => (
              <FadeIn key={item} delay={100 * i}>
                <li className="flex items-start gap-3 text-base text-foreground/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                  {item}
                </li>
              </FadeIn>
            ))}
          </ul>
        </div>
      </section>

      <Divider />

      {/* Realization */}
      <section className="bg-surface px-6 py-32">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Most founders discover their real scaling challenge isn't growth — it's how trust behaves as they grow.
            </p>
            <p className="font-serif italic text-3xl sm:text-4xl text-foreground">
              That realization changes what you build next.
            </p>
          </FadeIn>
        </div>
      </section>

      <Divider />

      {/* Closing CTA */}
      <section className="px-6 py-32 text-center">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal mb-6">Start with structure.</h2>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
              <Button
                onClick={() => setAssessmentOpen(true)}
                className="btn-accent-gradient text-accent-foreground rounded-sm px-12 py-5 text-lg tracking-wide font-medium h-auto"
              >
                Get the PDF Workbook — $9
              </Button>
              <Link
                to="/trust-review-workbook"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide underline underline-offset-4"
              >
                Try the free digital version →
              </Link>
            </div>
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
      </section>

      <AssessmentModal open={assessmentOpen} onOpenChange={setAssessmentOpen} />
    </div>
  );
};

export default TrustArchitectureReview;
