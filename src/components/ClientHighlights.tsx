import { useState } from "react";
import FadeIn from "@/components/FadeIn";

interface CaseStudy {
  id: string;
  label: string;
  headline: string;
  body: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: "drvn",
    label: "DRVN",
    headline: "From Founder-Led App to Governed Professional Ecosystem",
    body: "A high-performing training methodology serving hundreds of thousands of app users risked dilution beyond the founder. We engineered a certified operating system — governance, assessment, and business infrastructure — launching with 70+ professional waitlist and formalizing a 12-unit curriculum within the first year. The result: a scalable professional network built on structure, not personality.",
  },
  {
    id: "well-ap",
    label: "WELL AP",
    headline: "From Building Standard to Global Workforce Engine",
    body: "A 400-page health standard had surging demand but no delivery infrastructure. We helped architected the credential system — assessment, renewal, governance, and global distribution — enabling 20,000+ credentialed professionals across 120+ countries and generating recurring renewal revenue with 200–300 credential sales per month at scale. The standard became a labor market.",
  },
  {
    id: "iwbi",
    label: "International WELL Building Institute",
    headline: "From Static PDF to Global Certification Operating System",
    body: "A 1,000+ page building standard constrained by manual workflows was transformed into a governed digital platform. The infrastructure now supports 26,000+ projects, 131 countries, 300,000+ users, and $5.1B+ square feet certified — replacing fragmented review processes with a scalable certification OS.",
  },
  {
    id: "usgbc",
    label: "USGBC ADVANCE",
    headline: "From Social Equity Vision to National Delivery Infrastructure",
    body: "An aspirational equity initiative reliant on staff-led workshops became a governed national program. We built a 100+ asset toolkit, trained 424+ community leaders, engaged 2,000+ residents, and supported 8.5M+ square feet of real-world building impact — transforming vision into repeatable infrastructure.",
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
        <div className="flex flex-wrap gap-0 mb-12 border-b border-border">
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
              <span className="font-medium">{s.label}</span>
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
            <p className="text-xs tracking-widest text-accent uppercase">{study.label}</p>
          </div>
        </div>
      </FadeIn>
    </section>
  );
};

export default ClientHighlights;
