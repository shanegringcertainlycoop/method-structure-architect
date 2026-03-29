import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/FadeIn";
import { caseStudies } from "@/data/caseStudies";
import AssessmentModal from "@/components/AssessmentModal";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const Divider = () => <div className="w-full h-px bg-border" />;

const CaseStudies = () => {
  const [assessmentOpen, setAssessmentOpen] = useState(false);

  return (
    <div className="bg-background text-foreground min-h-screen">
      <Helmet>
        <title>Case Studies -- Systems of Trust in Action | Method Lab by Certainly</title>
        <meta
          name="description"
          content="See how Certainly has helped organizations build Systems of Trust -- from global credential programs to national equity initiatives. Real results, real infrastructure."
        />
        <link rel="canonical" href="https://method-lab.ai/case-studies/" />
        <meta property="og:title" content="Case Studies | Method Lab by Certainly" />
        <meta
          property="og:description"
          content="See how Certainly has helped organizations build Systems of Trust -- from global credential programs to national equity initiatives."
        />
        <meta property="og:url" content="https://method-lab.ai/case-studies/" />
        <meta property="og:type" content="website" />
      </Helmet>

      <SiteNav onRequestAssessment={() => setAssessmentOpen(true)} />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <p className="text-xs tracking-[0.3em] uppercase text-accent mb-10">
              Case Studies
            </p>
          </FadeIn>
          <FadeIn delay={200}>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal leading-tight mb-8">
              Systems of Trust.<br />In Action.
            </h1>
          </FadeIn>
          <FadeIn delay={400}>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              From global credential programs to national equity initiatives -- these are the systems we've helped build. Each one turns expertise into infrastructure that compounds authority, reach, and trust.
            </p>
          </FadeIn>
        </div>
      </section>

      <Divider />

      {/* Case study cards */}
      <section className="px-6 py-20 max-w-5xl mx-auto">
        <div className="space-y-0">
          {caseStudies.map((cs, i) => (
            <FadeIn key={cs.slug} delay={100 * i}>
              <Link
                to={`/case-studies/${cs.slug}`}
                className="group flex flex-col gap-6 py-10 border-b border-border hover:bg-surface/40 transition-colors px-4 -mx-4 rounded-sm"
              >
                {/* Stats row */}
                {cs.heroStats && (
                  <div className="flex flex-wrap gap-x-8 gap-y-2">
                    {cs.heroStats.map((stat) => (
                      <div key={stat.label} className="flex items-baseline gap-2">
                        <span className="font-serif text-xl text-accent">{stat.value}</span>
                        <span className="text-xs text-muted-foreground tracking-wide uppercase">
                          {stat.label}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                <div>
                  <h2 className="font-serif text-xl sm:text-2xl font-normal text-foreground mb-3 group-hover:text-accent transition-colors leading-snug">
                    {cs.title}
                  </h2>
                  <p className="text-base text-muted-foreground leading-relaxed mb-4 max-w-3xl">
                    {cs.subtitle}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm text-accent group-hover:gap-3 transition-all">
                    Read case study <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Footer */}
      <section className="px-6 py-20 text-center border-t border-border">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <p className="font-serif text-2xl italic text-muted-foreground mb-10">
              Structure precedes scale.
            </p>
            <Button
              onClick={() => setAssessmentOpen(true)}
              className="btn-accent-gradient text-accent-foreground rounded-sm px-10 py-4 text-base tracking-wide h-auto"
            >
              Request a Method Audit
            </Button>
          </FadeIn>
          <SiteFooter />
        </div>
      </section>

      <AssessmentModal open={assessmentOpen} onOpenChange={setAssessmentOpen} />
    </div>
  );
};

export default CaseStudies;
