import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import FadeIn from "@/components/FadeIn";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import AssessmentModal from "@/components/AssessmentModal";
import { getAudiencePage } from "@/data/audiencePages";

const SectionMarker = ({ numeral }: { numeral: string }) => (
  <span className="font-serif text-accent text-sm tracking-widest">{numeral}</span>
);

const AudiencePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [assessmentOpen, setAssessmentOpen] = useState(false);

  const page = getAudiencePage(slug || "");
  if (!page) return <Navigate to="/" replace />;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: page.metaTitle,
        description: page.metaDescription,
        url: `https://method-lab.ai/for/${page.slug}/`,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://method-lab.ai/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: page.label,
            item: `https://method-lab.ai/for/${page.slug}/`,
          },
        ],
      },
    ],
  };

  return (
    <div className="bg-background text-foreground min-h-screen">
      <Helmet>
        <title>{page.metaTitle}</title>
        <meta name="description" content={page.metaDescription} />
        <link rel="canonical" href={`https://method-lab.ai/for/${page.slug}/`} />
        <meta property="og:title" content={page.metaTitle} />
        <meta property="og:description" content={page.metaDescription} />
        <meta property="og:url" content={`https://method-lab.ai/for/${page.slug}/`} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <SiteNav onRequestAssessment={() => setAssessmentOpen(true)} />
      <AssessmentModal open={assessmentOpen} onOpenChange={setAssessmentOpen} />

      {/* ─── I. HERO ─── */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <p className="text-xs tracking-[0.3em] text-accent mb-4">
              {page.heroLabel}
            </p>
          </FadeIn>
          <FadeIn delay={100}>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal leading-tight mb-6">
              {page.h1}
            </h1>
          </FadeIn>
          <FadeIn delay={200}>
            <div className="w-full h-px bg-border mb-8" />
            <p className="text-lg text-foreground/80 leading-relaxed mb-10">
              {page.heroSubtitle}
            </p>
            <Button
              onClick={() => setAssessmentOpen(true)}
              className="btn-accent-gradient text-accent-foreground rounded-sm px-10 py-4 text-base tracking-wide font-medium h-auto"
            >
              {page.ctaButtonText}
            </Button>
          </FadeIn>
        </div>
      </section>

      {/* ─── II. PAIN POINTS ─── */}
      <section className="px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <SectionMarker numeral="II" />
            <h2 className="font-serif text-3xl sm:text-4xl font-normal mt-4 mb-10">
              The Challenge
            </h2>
          </FadeIn>
          <div className="space-y-0">
            {page.painPoints.map((point, i) => (
              <FadeIn key={i} delay={80 * i}>
                <div className="flex items-start gap-4 py-6 border-b border-border">
                  <span className="text-accent font-serif text-lg tabular-nums shrink-0 mt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-base text-foreground font-medium mb-1">
                      {point.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── III. HOW METHOD LAB HELPS ─── */}
      <section className="px-6 py-20 bg-surface">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <SectionMarker numeral="III" />
            <h2 className="font-serif text-3xl sm:text-4xl font-normal mt-4 mb-10">
              {page.solutionHeading}
            </h2>
          </FadeIn>
          <div className="space-y-6">
            {page.solutionParagraphs.map((para, i) => (
              <FadeIn key={i} delay={100 * i}>
                <p className="text-base text-foreground/80 leading-relaxed">{para}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── IV. SYSTEMS OF TRUST CONNECTIONS ─── */}
      <section className="px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <SectionMarker numeral="IV" />
            <h2 className="font-serif text-3xl sm:text-4xl font-normal mt-4 mb-4">
              Relevant Trust Dimensions
            </h2>
            <p className="text-base text-muted-foreground mb-10">
              How the Systems of Trust™ framework applies to your context.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {page.trustDimensions.map((dim, i) => (
              <FadeIn key={dim.slug} delay={100 * i}>
                <Link
                  to={`/systems-of-trust/${dim.slug}/`}
                  className="block border border-border rounded-sm p-6 bg-card hover:border-accent/40 transition-colors group"
                >
                  <p className="text-xs tracking-[0.2em] text-accent mb-3">
                    {dim.title.toUpperCase()}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {dim.relevance}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-xs text-accent group-hover:gap-2.5 transition-all">
                    Explore dimension <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── V. RELEVANT ENGAGEMENT LEVELS ─── */}
      <section className="px-6 py-20 bg-surface">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <SectionMarker numeral="V" />
            <h2 className="font-serif text-3xl sm:text-4xl font-normal mt-4 mb-4">
              How We Work Together
            </h2>
            <p className="text-base text-muted-foreground mb-10">
              Engagement levels matched to your stage and goals.
            </p>
          </FadeIn>
          <div className="space-y-0">
            {page.engagementLevels.map((level, i) => (
              <FadeIn key={i} delay={80 * i}>
                <Link
                  to={level.to}
                  className="flex items-start gap-4 py-6 border-b border-border group"
                >
                  <span className="text-accent font-serif text-sm tabular-nums shrink-0 mt-1">
                    {level.level}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-base text-foreground font-medium mb-1 group-hover:text-accent transition-colors">
                      {level.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {level.description}
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors shrink-0 mt-1" />
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── VI. CASE STUDY REFERENCE ─── */}
      <section className="px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <SectionMarker numeral="VI" />
            <h2 className="font-serif text-3xl sm:text-4xl font-normal mt-4 mb-10">
              In Practice
            </h2>
          </FadeIn>
          <FadeIn delay={100}>
            <Link
              to={`/case-studies/${page.caseStudy.slug}/`}
              className="block border border-border rounded-sm p-8 bg-card hover:border-accent/40 transition-colors group"
            >
              <p className="text-xs tracking-[0.2em] text-muted-foreground mb-4">
                CASE STUDY
              </p>
              <h3 className="font-serif text-xl sm:text-2xl text-foreground mb-3 group-hover:text-accent transition-colors">
                {page.caseStudy.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                {page.caseStudy.teaser}
              </p>
              <div className="flex flex-wrap gap-8 mb-4">
                {page.caseStudy.stats.map((stat, i) => (
                  <div key={i}>
                    <p className="text-accent font-serif text-2xl">{stat.value}</p>
                    <p className="text-xs text-muted-foreground tracking-wide">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs text-accent group-hover:gap-2.5 transition-all">
                Read case study <ArrowRight className="w-3 h-3" />
              </span>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ─── VII. FAQ ─── */}
      <section className="px-6 py-20 bg-surface">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <SectionMarker numeral="VII" />
            <h2 className="font-serif text-3xl sm:text-4xl font-normal mt-4 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-base text-muted-foreground mb-10">
              Common questions from {page.label.toLowerCase()}.
            </p>
          </FadeIn>
          <FadeIn delay={200}>
            <Accordion type="single" collapsible className="w-full">
              {page.faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border-border">
                  <AccordionTrigger className="text-left font-serif text-base sm:text-lg text-foreground hover:no-underline py-6">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground leading-relaxed pb-6">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeIn>
        </div>
      </section>

      {/* ─── VIII. FINAL CTA ─── */}
      <section className="px-6 py-28 text-center">
        <div className="max-w-2xl mx-auto">
          <FadeIn>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal mb-6">
              {page.ctaHeading}
            </h2>
            <p className="text-base text-muted-foreground mb-10">
              {page.ctaBody}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => setAssessmentOpen(true)}
                className="btn-accent-gradient text-accent-foreground rounded-sm px-10 py-4 text-base tracking-wide font-medium h-auto"
              >
                {page.ctaButtonText}
              </Button>
              <Link to="/case-studies">
                <Button
                  variant="outline"
                  className="rounded-sm px-10 py-4 text-base tracking-wide font-medium h-auto border-border"
                >
                  View Case Studies
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

export default AudiencePage;
