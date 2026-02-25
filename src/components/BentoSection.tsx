import FadeIn from "@/components/FadeIn";

const SectionMarker = ({ numeral }: { numeral: string }) => (
  <span className="font-serif text-accent text-sm tracking-widest">{numeral}</span>
);

const truths = [
  { numeral: "I", title: "Trust is Structural.", body: "It is not personality. Not content. Not momentum.\nIt is architecture." },
  { numeral: "II", title: "Reputation Is Not a System.", body: "If quality depends on proximity to the founder, it is fragile." },
  { numeral: "III", title: "Competence Must Be Defensible.", body: "Completion is not qualification. Standards must hold under scrutiny." },
  { numeral: "IV", title: "Signals Must Be Legible.", body: "The market cannot recognize what has not been clearly defined." },
  { numeral: "V", title: "Stewardship Determines Longevity.", body: "What is not governed will drift." },
];

const TruthCard = ({ numeral, title, body }: { numeral: string; title: string; body: string }) => (
  <div className="border border-border rounded-sm bg-card p-8 h-full min-h-[220px] flex flex-col">
    <span className="text-xs tracking-[0.2em] text-accent mb-4 font-sans">Truth {numeral}</span>
    <h3 className="font-serif text-xl sm:text-2xl text-foreground mb-3">{title}</h3>
    <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">{body}</p>
  </div>
);

const BentoSection = () => (
  <section className="px-6 py-32 max-w-5xl mx-auto">
    <FadeIn>
      <SectionMarker numeral="VIII" />
      <h2 className="font-serif text-3xl sm:text-4xl font-normal mt-4 mb-4">
        Five Truths.
      </h2>
      <p className="text-lg text-muted-foreground mb-16">
        The premises that govern this work.
      </p>
    </FadeIn>

    <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
      {/* Row 1 */}
      <FadeIn className="md:col-span-7">
        <TruthCard {...truths[0]} />
      </FadeIn>
      <FadeIn className="md:col-span-5" delay={150}>
        <TruthCard {...truths[1]} />
      </FadeIn>

      {/* Row 2 */}
      <FadeIn className="md:col-span-4" delay={200}>
        <TruthCard {...truths[2]} />
      </FadeIn>
      <FadeIn className="md:col-span-4" delay={300}>
        <TruthCard {...truths[3]} />
      </FadeIn>
      <FadeIn className="md:col-span-4" delay={400}>
        <TruthCard {...truths[4]} />
      </FadeIn>
    </div>
  </section>
);

export default BentoSection;
