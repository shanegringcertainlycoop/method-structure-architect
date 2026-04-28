import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/FadeIn";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import AssessmentModal from "@/components/AssessmentModal";
import { getDimension, trustDimensions } from "@/data/trustDimensions";

const SectionMarker = ({ numeral }: { numeral: string }) => (
  <span className="font-serif text-accent text-sm tracking-widest">{numeral}</span>
);

const TrustDimension = () => {
  const { slug } = useParams<{ slug: string }>();
  const [assessmentOpen, setAssessmentOpen] = useState(false);

  const dim = getDimension(slug || "");
  if (!dim) return <Navigate to="/systems-of-trust" replace />;

  const currentIndex = trustDimensions.findIndex((d) => d.slug === dim.slug);
  const prev = currentIndex > 0 ? trustDimensions[currentIndex - 1] : null;
  const next = currentIndex < trustDimensions.length - 1 ? trustDimensions[currentIndex + 1] : null;

  return (
    <div className="bg-background text-foreground min-h-screen">
      <Helmet>
        <title>{dim.metaTitle}</title>
        <meta name="description" content={dim.metaDescription} />
        <link rel="canonical" href={`https://method-lab.ai/systems-of-trust/${dim.slug}/`} />
        <meta property="og:title" content={dim.metaTitle} />
        <meta property="og:description" content={dim.metaDescription} />
        <meta property="og:url" content={`https://method-lab.ai/systems-of-trust/${dim.slug}/`} />
        <meta property="og:type" content="article" />
      </Helmet>

      <SiteNav onRequestAssessment={() => setAssessmentOpen(true)} />
      <AssessmentModal open={assessmentOpen} onOpenChange={setAssessmentOpen} />

      {/* ─── HERO ─── */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <Link
              to="/systems-of-trust"
              className="inline-flex items-center gap-2 text-xs tracking-[0.2em] text-muted-foreground hover:text-accent transition-colors mb-10"
            >
              <ArrowLeft className="w-3 h-3" />
              SYSTEMS OF TRUST™
            </Link>
          </FadeIn>
          <FadeIn delay={100}>
            <p className="text-xs tracking-[0.3em] text-accent mb-4">
              DIMENSION {dim.numeral}
            </p>
          </FadeIn>
          <FadeIn delay={200}>
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-normal leading-tight mb-6">
              {dim.title}.
            </h1>
            <p className="text-lg text-muted-foreground italic font-serif mb-8">
              {dim.subtitle}
            </p>
            <div className="w-full h-px bg-border mb-8" />
          </FadeIn>
          <FadeIn delay={300}>
            <p className="text-lg text-foreground/80 leading-relaxed">
              {dim.thesis}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ─── DEFINITION ─── */}
      <section className="px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <SectionMarker numeral="I" />
            <h2 className="font-serif text-3xl sm:text-4xl font-normal mt-4 mb-10">
              Understanding {dim.title}
            </h2>
          </FadeIn>
          <div className="space-y-6">
            {dim.definition.map((para, i) => (
              <FadeIn key={i} delay={100 * i}>
                <p className="text-base text-foreground/80 leading-relaxed">{para}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DIAGNOSTIC QUESTIONS ─── */}
      <section className="px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <SectionMarker numeral="II" />
            <h2 className="font-serif text-3xl sm:text-4xl font-normal mt-4 mb-4">
              Diagnostic Questions
            </h2>
            <p className="text-base text-muted-foreground mb-10">
              Use these to assess the {dim.title.toLowerCase()} dimension in your own system.
            </p>
          </FadeIn>
          <div className="space-y-0">
            {dim.diagnosticQuestions.map((q, i) => (
              <FadeIn key={i} delay={80 * i}>
                <div className="flex items-start gap-4 py-5 border-b border-border">
                  <span className="text-accent font-serif text-sm tabular-nums shrink-0 mt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-base text-foreground/80">{q}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── STRONG VS WEAK ─── */}
      <section className="px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <SectionMarker numeral="III" />
            <h2 className="font-serif text-3xl sm:text-4xl font-normal mt-4 mb-10">
              When {dim.title} Is Strong vs. Weak
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <FadeIn delay={100}>
              <div>
                <h3 className="text-xs tracking-[0.2em] text-accent mb-6">WHEN IT'S STRONG</h3>
                <ul className="space-y-4">
                  {dim.strong.map((s, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-foreground/80 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
            <FadeIn delay={200}>
              <div>
                <h3 className="text-xs tracking-[0.2em] text-muted-foreground mb-6">WHEN IT'S WEAK</h3>
                <ul className="space-y-4">
                  {dim.weak.map((w, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/40 mt-2 shrink-0" />
                      {w}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── REAL-WORLD PATTERNS ─── */}
      <section className="px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <SectionMarker numeral="IV" />
            <h2 className="font-serif text-3xl sm:text-4xl font-normal mt-4 mb-10">
              Patterns in Practice
            </h2>
          </FadeIn>
          <div className="space-y-0">
            {dim.patterns.map((p, i) => (
              <FadeIn key={i} delay={100 * i}>
                <div className="py-6 border-b border-border">
                  <h3 className="text-base text-foreground font-medium mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SYSTEM CONNECTIONS ─── */}
      <section className="px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <SectionMarker numeral="V" />
            <h2 className="font-serif text-3xl sm:text-4xl font-normal mt-4 mb-10">
              How {dim.title} Connects
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeIn delay={100}>
              <div className="border border-border rounded-sm p-6 bg-card">
                <p className="text-xs tracking-[0.2em] text-muted-foreground mb-3">RECEIVES FROM</p>
                <Link
                  to={`/systems-of-trust/${dim.connectionFrom.slug}/`}
                  className="font-serif text-xl text-accent hover:text-accent/80 transition-colors"
                >
                  {dim.connectionFrom.dimension} →
                </Link>
                <p className="text-sm text-muted-foreground leading-relaxed mt-3">
                  {dim.connectionFrom.description}
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={200}>
              <div className="border border-border rounded-sm p-6 bg-card">
                <p className="text-xs tracking-[0.2em] text-muted-foreground mb-3">FEEDS INTO</p>
                <Link
                  to={`/systems-of-trust/${dim.connectionTo.slug}/`}
                  className="font-serif text-xl text-accent hover:text-accent/80 transition-colors"
                >
                  {dim.connectionTo.dimension} →
                </Link>
                <p className="text-sm text-muted-foreground leading-relaxed mt-3">
                  {dim.connectionTo.description}
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── DIMENSION NAV ─── */}
      <section className="px-6 py-12">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          {prev ? (
            <Link
              to={`/systems-of-trust/${prev.slug}/`}
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              {prev.title}
            </Link>
          ) : (
            <div />
          )}
          {next ? (
            <Link
              to={`/systems-of-trust/${next.slug}/`}
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
            >
              {next.title}
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          ) : (
            <Link
              to="/systems-of-trust/source"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
            >
              Back to Source
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          )}
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="px-6 py-28 text-center">
        <div className="max-w-2xl mx-auto">
          <FadeIn>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal mb-6">
              Assess your trust architecture.
            </h2>
            <p className="text-base text-muted-foreground mb-10">
              The five dimensions operate as a single system. Understanding one reveals the others.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => setAssessmentOpen(true)}
                className="btn-accent-gradient text-accent-foreground rounded-sm px-10 py-4 text-base tracking-wide font-medium h-auto"
              >
                Request a Method Audit
              </Button>
              <Link to="/systems-of-trust">
                <Button
                  variant="outline"
                  className="rounded-sm px-10 py-4 text-base tracking-wide font-medium h-auto border-border"
                >
                  See Full Framework
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default TrustDimension;
