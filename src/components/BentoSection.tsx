import FadeIn from "@/components/FadeIn";

const SectionMarker = ({ numeral }: { numeral: string }) => (
  <span className="font-serif text-accent text-sm tracking-widest">{numeral}</span>
);

const truths = [
  { numeral: "I", title: "What is not structured cannot endure." },
  { numeral: "II", title: "Authority requires discipline." },
  { numeral: "III", title: "Trust must be engineered, not assumed." },
  { numeral: "IV", title: "Scale amplifies weakness before it multiplies strength." },
  { numeral: "V", title: "Clarity precedes credibility." },
  { numeral: "VI", title: "Reputation is borrowed; systems are owned." },
  { numeral: "VII", title: "Standards create freedom." },
  { numeral: "VIII", title: "What cannot be verified will eventually be doubted." },
  { numeral: "IX", title: "Quality without governance degrades." },
  { numeral: "X", title: "If it cannot transfer, it cannot scale." },
];

const TruthCard = ({ numeral, title }: { numeral: string; title: string }) => (
  <div className="border border-border rounded-sm bg-card p-6 h-full min-h-[100px] flex flex-col justify-center">
    <span className="text-xs tracking-[0.2em] text-accent mb-2 font-sans">{numeral}</span>
    <h3 className="font-serif text-lg sm:text-xl text-foreground">{title}</h3>
  </div>
);

const BentoSection = () => (
  <section className="px-6 py-32 max-w-5xl mx-auto">
    <FadeIn>
      <SectionMarker numeral="VIII" />
      <h2 className="font-serif text-3xl sm:text-4xl font-normal mt-4 mb-4">
        Ten Truths.
      </h2>
      <p className="text-lg text-muted-foreground mb-16">
        The premises that govern this work.
      </p>
    </FadeIn>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {truths.map((truth, i) => (
        <FadeIn key={truth.numeral} delay={i * 80}>
          <TruthCard {...truth} />
        </FadeIn>
      ))}
    </div>
  </section>
);

export default BentoSection;
