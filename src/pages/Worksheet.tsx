import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Sparkles, ArrowRight, FileText, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/FadeIn";
import AssessmentModal from "@/components/AssessmentModal";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const Divider = () => <div className="w-full h-px bg-border" />;
const SectionMarker = ({ numeral }: { numeral: string }) => (
  <span className="font-serif text-accent text-sm tracking-widest">{numeral}</span>
);

/* ─── QUADRANT DATA ─── */
const quadrants = [
  { numeral: "I", label: "WHAT", question: "What is the outcome your method produces?" },
  { numeral: "II", label: "WHO", question: "Who is that outcome for?" },
  { numeral: "III", label: "WHY", question: "Why does that outcome matter?" },
  { numeral: "IV", label: "HOW", question: "How does your method produce that outcome?" },
];

const GOOGLE_DOC_URL =
  "https://docs.google.com/document/d/1nyXg5gqoqHsdRvT1luMFanaj47IxQooX4E9P89YeFew/copy";

/* ─── MAIN PAGE ─── */
const Worksheet = () => {
  const [assessmentOpen, setAssessmentOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>Beneath the Offer — Free Worksheet to Articulate Your Method | Method Lab</title>
        <meta
          name="description"
          content="A one-page exercise to help founders articulate the method beneath their offers. Four questions, two minutes, total clarity. Free download — no signup required."
        />
        <link rel="canonical" href="https://method-lab.ai/worksheet/" />
        <meta property="og:title" content="Beneath the Offer — Free Worksheet to Articulate Your Method" />
        <meta
          property="og:description"
          content="A one-page exercise to help founders articulate the method beneath their offers. Four questions, two minutes, total clarity."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://method-lab.ai/worksheet/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Beneath the Offer — Free Worksheet to Articulate Your Method" />
        <meta
          name="twitter:description"
          content="A one-page exercise to help founders articulate the method beneath their offers. Four questions, two minutes, total clarity."
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
              Beneath the Offer
            </h1>
            <Divider />
          </FadeIn>
          <FadeIn delay={400}>
            <div className="space-y-4 text-base sm:text-lg leading-relaxed mt-8 mb-12 max-w-2xl mx-auto text-muted-foreground">
              <p className="text-foreground font-medium">
                Many founders can't describe what sits beneath what they sell. Can you?
              </p>
              <p>
                Your offers: what you sell. Your method: the thinking underneath.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={600}>
            <p className="text-xs tracking-widest uppercase text-muted-foreground">
              1 Page &middot; 4 Questions &middot; 2 Minutes
            </p>
          </FadeIn>
        </div>
      </section>

      <Divider />

      {/* ─── THE FOUR QUESTIONS ─── */}
      <section className="px-6 py-24 max-w-5xl mx-auto">
        <FadeIn>
          <SectionMarker numeral="I" />
        </FadeIn>
        <FadeIn delay={100}>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal mt-3 mb-2">
            The Four Questions
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg mb-10">
            Answer these to reveal the method beneath your offers.
          </p>
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {quadrants.map((q, i) => (
            <FadeIn key={q.numeral} delay={150 * (i + 1)}>
              <div className="border border-border rounded-sm bg-card p-6 space-y-3 h-full">
                <div className="flex items-baseline gap-3">
                  <span className="font-serif text-accent text-sm tracking-widest">
                    {q.numeral}.
                  </span>
                  <span className="text-xs tracking-[0.2em] uppercase text-foreground font-medium">
                    {q.label}
                  </span>
                </div>
                <p className="font-serif text-lg text-foreground leading-relaxed">
                  {q.question}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <Divider />

      {/* ─── THE SPLIT ─── */}
      <section className="px-6 py-24 max-w-5xl mx-auto">
        <FadeIn>
          <SectionMarker numeral="II" />
        </FadeIn>
        <FadeIn delay={100}>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal mt-3 mb-2">
            The Split
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg mb-10">
            Every business has two sides. Most founders only see one.
          </p>
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <FadeIn delay={150}>
            <div className="border border-border rounded-sm bg-card p-8 space-y-3 h-full">
              <h3 className="font-serif text-xl font-normal text-foreground">
                Your Method <span className="text-accent">(IP)</span>
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                The thinking. Frameworks, sequences, judgments.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={300}>
            <div className="border border-border rounded-sm bg-card p-8 space-y-3 h-full">
              <h3 className="font-serif text-xl font-normal text-foreground">
                Your Offers <span className="text-muted-foreground">(Products & Services)</span>
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                The delivery. Programs, packages, retainers.
              </p>
            </div>
          </FadeIn>
        </div>
        <FadeIn delay={450}>
          <p className="text-center text-muted-foreground text-base sm:text-lg mt-10 max-w-xl mx-auto">
            Most founders can describe the right column. Can you describe the left?
          </p>
        </FadeIn>
      </section>

      <Divider />

      {/* ─── WHAT'S NEXT ─── */}
      <section className="px-6 py-24 max-w-3xl mx-auto">
        <FadeIn>
          <SectionMarker numeral="III" />
        </FadeIn>
        <FadeIn delay={100}>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal mt-3 mb-10">
            What's Next
          </h2>
        </FadeIn>
        <div className="space-y-8">
          {[
            {
              number: "01",
              body: "Read your answers aloud. Time yourself — aim for under two minutes.",
            },
            {
              number: "02",
              body: "Make a copy of the Google Doc or download the PDF.",
            },
            {
              number: "03",
              body: (
                <>
                  Request a Method Audit at{" "}
                  <button
                    onClick={() => setAssessmentOpen(true)}
                    className="text-accent hover:text-accent/80 transition-colors underline underline-offset-2"
                  >
                    method-lab.ai
                  </button>
                  .
                </>
              ),
            },
          ].map((item, i) => (
            <FadeIn key={i} delay={i * 150}>
              <div className="flex gap-4">
                <span className="font-serif text-accent text-lg flex-shrink-0 w-8">
                  {item.number}
                </span>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <Divider />

      {/* ─── DOWNLOAD CTA ─── */}
      <section className="px-6 py-24 max-w-3xl mx-auto text-center">
        <FadeIn>
          <p className="text-xs tracking-[0.3em] uppercase text-accent mb-4">
            Get the Worksheet
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal mb-4">
            Start with four questions
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            No signup. No email gate. Just the worksheet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="btn-accent-gradient text-accent-foreground rounded-sm px-8 py-5 text-base tracking-wide font-medium h-auto"
            >
              <a href={GOOGLE_DOC_URL} target="_blank" rel="noopener noreferrer">
                Copy Google Doc <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="rounded-sm px-8 py-5 text-base tracking-wide font-medium h-auto border-border text-foreground hover:bg-card"
            >
              <a href="/worksheets/Beneath_the_Offer_Worksheet.docx" download>
                Download DOCX <FileText className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </FadeIn>
      </section>

      {/* ─── CLOSING CTA ─── */}
      <Divider />
      <section className="px-6 py-32 max-w-3xl mx-auto text-center">
        <FadeIn>
          <p className="text-xs tracking-[0.3em] uppercase text-accent mb-6">What Comes Next</p>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal mb-6">
            From worksheet to architecture
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            This worksheet reveals the gap. A Method Audit maps the architecture.
          </p>
          <Button
            onClick={() => setAssessmentOpen(true)}
            className="btn-accent-gradient text-accent-foreground rounded-sm px-8 py-5 text-base tracking-wide font-medium h-auto"
          >
            Request a Method Audit <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </FadeIn>
      </section>

      <SiteFooter />

      {/* ─── STRUCTURED DATA ─── */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: "Beneath the Offer Worksheet",
            description:
              "A one-page exercise to help founders articulate the method beneath their offers. Four questions, two minutes, total clarity.",
            url: "https://method-lab.ai/worksheet/",
            provider: {
              "@type": "Organization",
              name: "Method Lab by Certainly",
              url: "https://method-lab.ai",
            },
            isAccessibleForFree: true,
            educationalUse: "Professional Development",
            audience: {
              "@type": "Audience",
              audienceType: "Founders, Consultants, Advisory Practice Leaders",
            },
          })}
        </script>
      </Helmet>
    </>
  );
};

export default Worksheet;
