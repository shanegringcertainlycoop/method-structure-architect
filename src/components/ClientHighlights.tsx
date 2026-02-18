import { useState } from "react";
import FadeIn from "@/components/FadeIn";

interface CaseStudy {
  id: string;
  client: string;
  headline: string;
  body: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: "study-1",
    client: "Client One",
    headline: "From Founder Intuition to Certified Framework",
    body: "A performance methodology practiced for 15 years was extracted, structured, and formalized into a licensable system — enabling certification across three markets within 18 months.",
  },
  {
    id: "study-2",
    client: "Client Two",
    headline: "Scaling Advisory Without Losing Precision",
    body: "An institutional advisory practice documented its proprietary assessment model, creating clear standards that allowed trained associates to deliver with the same rigor as the founding partner.",
  },
  {
    id: "study-3",
    client: "Client Three",
    headline: "Method Architecture for Technology Alignment",
    body: "A standards organization restructured its curriculum architecture, aligning its intellectual framework with a new technology platform — without compromising methodological integrity.",
  },
];

const ClientHighlights = () => {
  const [active, setActive] = useState(0);
  const study = caseStudies[active];

  return (
    <section className="px-6 py-32 max-w-5xl mx-auto">
      <FadeIn>
        <span className="font-serif text-accent text-sm tracking-widest">VI</span>
        <h2 className="font-serif text-3xl sm:text-4xl font-normal mt-4 mb-16">
          Client Highlights.
        </h2>
      </FadeIn>

      {/* Tabs */}
      <FadeIn delay={100}>
        <div className="flex gap-0 mb-12 border-b border-border">
          {caseStudies.map((s, i) => (
            <button
              key={s.id}
              onClick={() => setActive(i)}
              className={`px-6 py-3 text-sm tracking-wide transition-colors relative ${
                active === i
                  ? "text-accent"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <span className="font-medium">{s.client}</span>
              {active === i && (
                <span className="absolute bottom-0 left-0 right-0 h-px bg-accent" />
              )}
            </button>
          ))}
        </div>
      </FadeIn>

      {/* Active study */}
      <FadeIn key={study.id}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image slot */}
          <div className="w-full aspect-[4/3] rounded-lg bg-card border border-border flex items-center justify-center overflow-hidden">
            <span className="text-muted-foreground text-sm tracking-wide">Image Placeholder</span>
          </div>

          {/* Copy */}
          <div>
            <h3 className="font-serif text-2xl mb-4 text-foreground">{study.headline}</h3>
            <p className="text-base text-muted-foreground leading-relaxed mb-6">{study.body}</p>
            <p className="text-xs tracking-widest text-accent uppercase">{study.client}</p>
          </div>
        </div>
      </FadeIn>
    </section>
  );
};

export default ClientHighlights;
