import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Copy, Check, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/FadeIn";
import AssessmentModal from "@/components/AssessmentModal";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { promptCategories } from "@/data/promptKit";

const Divider = () => <div className="w-full h-px bg-border" />;
const SectionMarker = ({ numeral }: { numeral: string }) => (
  <span className="font-serif text-accent text-sm tracking-widest">{numeral}</span>
);

/* ─── COPY BUTTON ─── */
const CopyButton = ({ text }: { text: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="flex items-center gap-1.5 text-xs tracking-wide uppercase text-muted-foreground hover:text-accent transition-colors"
    >
      {copied ? (
        <>
          <Check className="w-3.5 h-3.5" /> Copied
        </>
      ) : (
        <>
          <Copy className="w-3.5 h-3.5" /> Copy Prompt
        </>
      )}
    </button>
  );
};

/* ─── PROMPT CARD ─── */
const PromptCard = ({
  title,
  description,
  prompt,
  bestWith,
}: {
  title: string;
  description: string;
  prompt: string;
  bestWith?: string;
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="border border-border rounded-sm bg-card p-6 space-y-4">
      <div className="space-y-2">
        <h3 className="font-serif text-xl font-normal text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </div>

      {expanded ? (
        <div className="space-y-3">
          <pre className="whitespace-pre-wrap text-sm text-foreground/90 bg-background border border-border rounded-sm p-4 leading-relaxed font-sans">
            {prompt}
          </pre>
          <div className="flex items-center justify-between">
            <CopyButton text={prompt} />
            {bestWith && (
              <span className="text-xs text-muted-foreground">
                Best with: {bestWith}
              </span>
            )}
          </div>
          <button
            onClick={() => setExpanded(false)}
            className="text-xs tracking-wide uppercase text-muted-foreground hover:text-accent transition-colors"
          >
            Collapse
          </button>
        </div>
      ) : (
        <button
          onClick={() => setExpanded(true)}
          className="flex items-center gap-1.5 text-xs tracking-wide uppercase text-accent hover:text-accent/80 transition-colors"
        >
          View Prompt <ArrowRight className="w-3.5 h-3.5" />
        </button>
      )}
    </div>
  );
};

/* ─── MAIN PAGE ─── */
const PromptKit = () => {
  const [assessmentOpen, setAssessmentOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>Method Architecture Prompt Kit — Free AI Prompts for Certification Design | Method Lab</title>
        <meta
          name="description"
          content="15 free, copy-paste AI prompts to help you extract your methodology, design curriculum, build governance, and launch a certification program. From Method Lab by Certainly."
        />
        <link rel="canonical" href="https://method-lab.ai/prompt-kit/" />
        <meta property="og:title" content="Method Architecture Prompt Kit — Free AI Prompts for Certification Design" />
        <meta
          property="og:description"
          content="15 free AI prompts to turn your expertise into a structured certification program. Extract your method, design assessments, build governance, and plan your launch."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://method-lab.ai/prompt-kit/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Method Architecture Prompt Kit — Free AI Prompts for Certification Design" />
        <meta
          name="twitter:description"
          content="15 free AI prompts to turn your expertise into a structured certification program."
        />
      </Helmet>

      <AssessmentModal open={assessmentOpen} onOpenChange={setAssessmentOpen} />
      <SiteNav onRequestAssessment={() => setAssessmentOpen(true)} />

      {/* ─── HERO ─── */}
      <section className="min-h-[80vh] flex items-center justify-center px-6 pt-24 pb-16">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <div className="flex items-center justify-center gap-2 mb-8">
              <Sparkles className="w-4 h-4 text-accent" />
              <p className="text-xs tracking-[0.3em] uppercase text-accent">
                Free Resource
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={200}>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal leading-tight mb-6">
              Method Architecture<br />Prompt Kit
            </h1>
            <Divider />
          </FadeIn>
          <FadeIn delay={400}>
            <div className="space-y-4 text-base sm:text-lg leading-relaxed mt-8 mb-12 text-left max-w-2xl mx-auto text-muted-foreground">
              <p className="text-foreground font-medium">
                15 AI prompts to help you turn your expertise into a certification program.
              </p>
              <p>
                Whether you're exploring certification for the first time or
                actively building one — these prompts give you a structured
                way to think through the hard parts with AI as your thought partner.
              </p>
              <p>
                Copy any prompt, paste it into Claude or ChatGPT, fill in the
                brackets, and get working output in minutes.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={600}>
            <p className="text-xs tracking-widest uppercase text-muted-foreground">
              5 Categories &middot; 15 Prompts &middot; No signup required
            </p>
          </FadeIn>
        </div>
      </section>

      <Divider />

      {/* ─── PROMPT CATEGORIES ─── */}
      {promptCategories.map((category, catIdx) => (
        <div key={category.id}>
          <section className="px-6 py-24 max-w-5xl mx-auto">
            <FadeIn>
              <SectionMarker numeral={category.numeral} />
            </FadeIn>
            <FadeIn delay={100}>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal mt-3 mb-2">
                {category.title}
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg mb-10">
                {category.subtitle}
              </p>
            </FadeIn>
            <div className="space-y-6">
              {category.prompts.map((prompt, promptIdx) => (
                <FadeIn key={promptIdx} delay={150 * (promptIdx + 1)}>
                  <PromptCard {...prompt} />
                </FadeIn>
              ))}
            </div>
          </section>

          {/* Mid-page CTA after categories II and IV */}
          {(catIdx === 1 || catIdx === 3) && (
            <>
              <Divider />
              <section className="px-6 py-20 max-w-3xl mx-auto text-center">
                <FadeIn>
                  <p className="text-xs tracking-[0.3em] uppercase text-accent mb-4">
                    {catIdx === 1 ? "Go Deeper" : "Ready for Structure?"}
                  </p>
                  <h3 className="font-serif text-2xl sm:text-3xl font-normal mb-4">
                    {catIdx === 1
                      ? "Prompts get you thinking. Architecture gets you moving."
                      : "These prompts reveal what to build. We help you build it."}
                  </h3>
                  <p className="text-muted-foreground text-base mb-8 max-w-xl mx-auto">
                    {catIdx === 1
                      ? "If these prompts are surfacing real clarity about your method, you may be ready for a structured Trust Architecture Review — a guided diagnostic of your certification readiness."
                      : "The Method Architecture Prompt Kit is your starting point. When you're ready for a formal assessment of your method's certification potential, we'll map the full architecture together."}
                  </p>
                  <Button
                    onClick={() => setAssessmentOpen(true)}
                    className="btn-accent-gradient text-accent-foreground rounded-sm px-8 py-5 text-base tracking-wide font-medium h-auto"
                  >
                    Request a Method Audit
                  </Button>
                </FadeIn>
              </section>
              <Divider />
            </>
          )}

          {catIdx !== 1 && catIdx !== 3 && catIdx < promptCategories.length - 1 && <Divider />}
        </div>
      ))}

      {/* ─── HOW TO USE ─── */}
      <Divider />
      <section className="px-6 py-24 max-w-3xl mx-auto">
        <FadeIn>
          <p className="text-xs tracking-[0.3em] uppercase text-accent mb-4">How to Use This Kit</p>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal mb-10">
            Three ways to get the most from these prompts
          </h2>
        </FadeIn>
        <div className="space-y-8">
          {[
            {
              number: "01",
              title: "Start with Method Extraction",
              body: "If you haven't formally documented your methodology, begin with Category I. The Invisible Method Finder prompt alone can surface months' worth of clarity in a single conversation.",
            },
            {
              number: "02",
              title: "Use them in sequence — or jump to your gap",
              body: "The categories follow a natural build order: Extract → Design → Govern → Position → Scale. But if you already know your curriculum is solid and governance is the gap, skip directly to Category III.",
            },
            {
              number: "03",
              title: "Treat the output as a draft, not a deliverable",
              body: "AI gives you a structured starting point. The real value comes from stress-testing that output against your experience, your market, and your clients' actual needs. These prompts accelerate your thinking — they don't replace it.",
            },
          ].map((item, i) => (
            <FadeIn key={i} delay={i * 150}>
              <div className="flex gap-4">
                <span className="font-serif text-accent text-lg flex-shrink-0 w-8">{item.number}</span>
                <div>
                  <h3 className="font-serif text-lg font-normal mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.body}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <Divider />
      <section className="px-6 py-32 max-w-3xl mx-auto text-center">
        <FadeIn>
          <p className="text-xs tracking-[0.3em] uppercase text-accent mb-6">What Comes Next</p>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal mb-6">
            When prompts aren't enough
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            These prompts help you explore. A Method Audit gives you a formal
            architectural assessment — mapping your method's structure, identifying
            gaps, and recommending the right trust mechanism for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => setAssessmentOpen(true)}
              className="btn-accent-gradient text-accent-foreground rounded-sm px-8 py-5 text-base tracking-wide font-medium h-auto"
            >
              Request a Method Audit <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button
              asChild
              variant="outline"
              className="rounded-sm px-8 py-5 text-base tracking-wide font-medium h-auto border-border text-foreground hover:bg-card"
            >
              <a href="/trust-review-workbook">
                Try the Free Workbook
              </a>
            </Button>
          </div>
        </FadeIn>
      </section>

      <SiteFooter />

      {/* ─── STRUCTURED DATA ─── */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: "Method Architecture Prompt Kit",
            description:
              "15 free AI prompts to help consultants and founders extract their methodology, design curriculum, build governance, and launch a certification program.",
            url: "https://method-lab.ai/prompt-kit/",
            provider: {
              "@type": "Organization",
              name: "Method Lab by Certainly",
              url: "https://method-lab.ai",
            },
            isAccessibleForFree: true,
            educationalUse: "Professional Development",
            audience: {
              "@type": "Audience",
              audienceType: "Consultants, Founders, Advisory Practice Leaders",
            },
          })}
        </script>
      </Helmet>
    </>
  );
};

export default PromptKit;
