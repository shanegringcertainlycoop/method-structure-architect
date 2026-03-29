import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/FadeIn";
import { caseStudies } from "@/data/caseStudies";
import AssessmentModal from "@/components/AssessmentModal";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const Divider = () => <div className="w-full h-px bg-border" />;

const CaseStudy = () => {
  const { slug } = useParams<{ slug: string }>();
  const [assessmentOpen, setAssessmentOpen] = useState(false);
  const cs = caseStudies.find((c) => c.slug === slug);

  if (!cs) return <Navigate to="/case-studies" replace />;

  const currentIndex = caseStudies.findIndex((c) => c.slug === slug);
  const otherStudies = caseStudies.filter((c) => c.slug !== slug);

  return (
    <div className="bg-background text-foreground min-h-screen">
      <Helmet>
        <title>{cs.metaTitle}</title>
        <meta name="description" content={cs.metaDescription} />
        <link rel="canonical" href={`https://method-lab.ai/case-studies/${cs.slug}/`} />
        <meta property="og:title" content={cs.metaTitle} />
        <meta property="og:description" content={cs.metaDescription} />
        <meta property="og:url" content={`https://method-lab.ai/case-studies/${cs.slug}/`} />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: cs.title,
            description: cs.metaDescription,
            url: `https://method-lab.ai/case-studies/${cs.slug}/`,
            publisher: {
              "@type": "Organization",
              name: "Certainly",
            },
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://method-lab.ai/" },
              { "@type": "ListItem", position: 2, name: "Case Studies", item: "https://method-lab.ai/case-studies/" },
              { "@type": "ListItem", position: 3, name: cs.title, item: `https://method-lab.ai/case-studies/${cs.slug}/` },
            ],
          })}
        </script>
      </Helmet>

      <SiteNav onRequestAssessment={() => setAssessmentOpen(true)} />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 text-xs text-accent tracking-wide uppercase mb-10 hover:gap-3 transition-all"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Case Studies
            </Link>
          </FadeIn>
          <FadeIn delay={100}>
            <p className="text-xs tracking-[0.3em] uppercase text-accent mb-6">Case Study</p>
          </FadeIn>
          <FadeIn delay={200}>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal leading-tight mb-8">
              {cs.title}
            </h1>
          </FadeIn>
          <FadeIn delay={300}>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
              {cs.subtitle}
            </p>
          </FadeIn>

          {/* Hero stats */}
          {cs.heroStats && (
            <FadeIn delay={400}>
              <div className="flex flex-wrap gap-x-10 gap-y-4 mt-12">
                {cs.heroStats.map((stat) => (
                  <div key={stat.label}>
                    <p className="font-serif text-3xl sm:text-4xl text-accent">{stat.value}</p>
                    <p className="text-xs text-muted-foreground tracking-wide uppercase mt-1">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>
          )}

          {/* Hero image */}
          {cs.images?.hero && (
            <FadeIn delay={500}>
              <div className="mt-16 rounded-lg overflow-hidden border border-border">
                <img
                  src={cs.images.hero.src}
                  alt={cs.images.hero.alt}
                  className="w-full h-auto"
                  loading="eager"
                />
              </div>
            </FadeIn>
          )}
        </div>
      </section>

      <Divider />

      {/* The Challenge */}
      <section className="px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="font-serif text-2xl sm:text-3xl font-normal mb-8 text-foreground">
              The Challenge
            </h2>
          </FadeIn>

          {cs.challenge.context.map((para, i) => (
            <FadeIn key={i}>
              <p className="text-base sm:text-lg text-foreground/80 leading-[1.9] mb-6">{para}</p>
            </FadeIn>
          ))}

          {/* Challenge quote */}
          {cs.challengeQuote && (
            <FadeIn>
              <div className="border-l-2 border-accent pl-6 py-2 my-10">
                <p className="font-serif italic text-lg text-foreground leading-relaxed">
                  "{cs.challengeQuote.text}"
                </p>
                <p className="text-sm text-muted-foreground mt-3">
                  -- {cs.challengeQuote.author}, {cs.challengeQuote.role}
                </p>
              </div>
            </FadeIn>
          )}

          <FadeIn>
            <h3 className="font-serif text-xl font-normal mt-10 mb-6 text-foreground">
              The Specific Challenges
            </h3>
          </FadeIn>
          <FadeIn>
            <ul className="space-y-3 mb-8">
              {cs.challenge.specificChallenges.map((item, j) => (
                <li key={j} className="flex items-start gap-3 text-base text-foreground/80 leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>

          {cs.images?.challenge && (
            <FadeIn>
              <div className="mt-10 rounded-lg overflow-hidden border border-border">
                <img
                  src={cs.images.challenge.src}
                  alt={cs.images.challenge.alt}
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
            </FadeIn>
          )}
        </div>
      </section>

      <Divider />

      {/* What We Built */}
      <section className="px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="font-serif text-2xl sm:text-3xl font-normal mb-4 text-foreground">
              What We Built: A System of Trust
            </h2>
          </FadeIn>

          {cs.pillars.map((pillar, i) => (
            <div key={i} className="mt-12">
              <FadeIn>
                <h3 className="font-serif text-xl font-normal mb-3 text-foreground">
                  {pillar.title}
                </h3>
                <p className="text-base sm:text-lg text-foreground/80 leading-[1.9] mb-4">
                  {pillar.description}
                </p>
              </FadeIn>
              <FadeIn>
                <ul className="space-y-3 mb-4">
                  {pillar.bullets.map((bullet, j) => (
                    <li key={j} className="flex items-start gap-3 text-base text-foreground/80 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </FadeIn>
              <FadeIn>
                <p className="text-sm italic text-muted-foreground border-l border-border pl-4 mt-4">
                  {pillar.without}
                </p>
              </FadeIn>
            </div>
          ))}

          {cs.images?.solution && (
            <FadeIn>
              <div className="mt-14 rounded-lg overflow-hidden border border-border">
                <img
                  src={cs.images.solution.src}
                  alt={cs.images.solution.alt}
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
            </FadeIn>
          )}
        </div>
      </section>

      <Divider />

      {/* Why It Matters */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="font-serif text-2xl sm:text-3xl font-normal mb-12 text-foreground">
              Why "System of Trust" Matters
            </h2>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-10">
            {[cs.whyItMatters.forClient, cs.whyItMatters.forPractitioners, cs.whyItMatters.forIndustry].map(
              (section, i) => (
                <FadeIn key={i} delay={i * 150}>
                  <div>
                    <h3 className="font-serif text-lg font-normal mb-4 text-accent">
                      {section.title}
                    </h3>
                    <ul className="space-y-3">
                      {section.bullets.map((bullet, j) => (
                        <li key={j} className="flex items-start gap-3 text-sm text-foreground/80 leading-relaxed">
                          <span className="w-1 h-1 rounded-full bg-accent mt-2 shrink-0" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeIn>
              )
            )}
          </div>
        </div>
      </section>

      <Divider />

      {/* Results & Impact */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="font-serif text-2xl sm:text-3xl font-normal mb-12 text-foreground">
              Results & Impact
            </h2>
          </FadeIn>

          {/* Big stat cards */}
          <div className="grid sm:grid-cols-2 gap-8 mb-16">
            {cs.impactStats.map((stat, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div className="border border-border rounded-sm p-8">
                  <p className="font-serif text-4xl text-accent mb-2">{stat.value}</p>
                  <p className="text-sm font-medium text-foreground mb-3">{stat.label}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{stat.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          {cs.images?.impact && (
            <FadeIn>
              <div className="mb-16 rounded-lg overflow-hidden border border-border">
                <img
                  src={cs.images.impact.src}
                  alt={cs.images.impact.alt}
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
            </FadeIn>
          )}

          {/* What Changed */}
          <FadeIn>
            <h3 className="font-serif text-xl font-normal mb-8 text-foreground">What Changed</h3>
          </FadeIn>
          <div className="space-y-8">
            {cs.outcomes.map((outcome, i) => (
              <FadeIn key={i}>
                <div>
                  <h4 className="text-sm font-medium text-accent tracking-wide uppercase mb-3">
                    {outcome.title}
                  </h4>
                  <ul className="space-y-2">
                    {outcome.bullets.map((bullet, j) => (
                      <li key={j} className="flex items-start gap-3 text-base text-foreground/80 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* Testimonial */}
      <section className="px-6 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <p className="font-serif text-xl sm:text-2xl italic text-foreground leading-relaxed mb-6">
              "{cs.testimonial.text}"
            </p>
            <p className="text-sm text-accent font-medium">{cs.testimonial.author}</p>
            <p className="text-xs text-muted-foreground mt-1">{cs.testimonial.role}</p>
          </FadeIn>
        </div>
      </section>

      <Divider />

      {/* Gallery */}
      {cs.images?.gallery && cs.images.gallery.length > 0 && (
        <>
          <section className="px-6 py-20">
            <div className="max-w-5xl mx-auto">
              <div className={`grid gap-6 ${cs.images.gallery.length === 1 ? 'grid-cols-1 max-w-3xl mx-auto' : cs.images.gallery.length === 2 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'}`}>
                {cs.images.gallery.map((img, i) => (
                  <FadeIn key={i} delay={i * 100}>
                    <div className="rounded-lg overflow-hidden border border-border">
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="w-full h-auto"
                        loading="lazy"
                      />
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </section>
          <Divider />
        </>
      )}

      {/* The Difference - comparison table */}
      <section className="px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="font-serif text-2xl sm:text-3xl font-normal mb-10 text-foreground">
              The Difference
            </h2>
          </FadeIn>
          <FadeIn>
            <div className="border border-border rounded-sm overflow-hidden">
              <div className="grid grid-cols-2 text-xs tracking-wide uppercase text-muted-foreground border-b border-border">
                <div className="px-6 py-4 border-r border-border">Typical Program</div>
                <div className="px-6 py-4">System of Trust</div>
              </div>
              {cs.comparison.map((row, i) => (
                <div key={i} className="grid grid-cols-2 border-b border-border last:border-b-0">
                  <div className="px-6 py-4 text-sm text-muted-foreground border-r border-border">
                    {row.typical}
                  </div>
                  <div className="px-6 py-4 text-sm text-foreground">{row.system}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <Divider />

      {/* The Bigger Picture - timeline */}
      <section className="px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="font-serif text-2xl sm:text-3xl font-normal mb-10 text-foreground">
              The Bigger Picture
            </h2>
          </FadeIn>
          <div className="space-y-8">
            {cs.timeline.map((step, i) => (
              <FadeIn key={i} delay={i * 150}>
                <div className="flex items-start gap-6">
                  <div className="flex flex-col items-center">
                    <span className="w-8 h-8 rounded-full border border-accent flex items-center justify-center text-xs text-accent font-serif">
                      {i + 1}
                    </span>
                    {i < cs.timeline.length - 1 && (
                      <div className="w-px h-8 bg-border mt-2" />
                    )}
                  </div>
                  <div className="pt-1">
                    <h3 className="font-serif text-lg text-foreground mb-1">{step.stage}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <div className="border-l-2 border-accent pl-6 py-2 mt-12">
              <p className="font-serif italic text-lg text-foreground leading-relaxed">
                "{cs.biggerPictureQuote}"
              </p>
              <p className="text-sm text-muted-foreground mt-3">-- Certainly Advisory Team</p>
            </div>
          </FadeIn>
        </div>
      </section>

      <Divider />

      {/* Other Case Studies */}
      {otherStudies.length > 0 && (
        <section className="px-6 py-20">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="font-serif text-2xl sm:text-3xl font-normal mb-10 text-foreground">
                More Case Studies
              </h2>
            </FadeIn>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherStudies.slice(0, 3).map((other, i) => (
                <FadeIn key={other.slug} delay={i * 100}>
                  <Link
                    to={`/case-studies/${other.slug}`}
                    className="group block border border-border rounded-sm p-6 hover:border-accent/40 transition-colors"
                  >
                    {other.heroStats && (
                      <div className="flex gap-4 mb-4">
                        {other.heroStats.slice(0, 2).map((stat) => (
                          <div key={stat.label}>
                            <span className="font-serif text-lg text-accent">{stat.value}</span>
                            <span className="text-[10px] text-muted-foreground tracking-wide uppercase ml-1">
                              {stat.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                    <h3 className="font-serif text-base font-normal text-foreground mb-3 group-hover:text-accent transition-colors leading-snug">
                      {other.title}
                    </h3>
                    <span className="inline-flex items-center gap-2 text-xs text-accent group-hover:gap-3 transition-all">
                      Read case study <ArrowRight className="w-3 h-3" />
                    </span>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Footer */}
      <section className="px-6 py-20 text-center border-t border-border">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="font-serif text-2xl sm:text-3xl font-normal mb-4 text-foreground">
              Ready to Build Your System of Trust?
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-10 max-w-xl mx-auto">
              Advisory is Certainly's system-design engagement -- built to help founders translate expertise into a governed System of Trust, without adding headcount or diluting authority.
            </p>
            <Button
              onClick={() => setAssessmentOpen(true)}
              className="btn-accent-gradient text-accent-foreground rounded-sm px-10 py-4 text-base tracking-wide h-auto"
            >
              Book an Advisory Exploration Call
            </Button>
          </FadeIn>
          <SiteFooter />
        </div>
      </section>

      <AssessmentModal open={assessmentOpen} onOpenChange={setAssessmentOpen} />
    </div>
  );
};

export default CaseStudy;
