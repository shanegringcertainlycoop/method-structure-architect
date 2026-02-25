import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import FadeIn from "@/components/FadeIn";
import certainlyLogo from "@/assets/certainly-logo.png";

const transformations = [
  { before: "Framework in conversation.", after: "Framework in documented blueprint." },
  { before: "Variable explanations.", after: "Canonical language system." },
  { before: "Person-dependent trust.", after: "System-bound trust." },
  { before: "Improvised marketing.", after: "Structured, claim-safe marketing." },
  { before: "Premature scale.", after: "Engineered scale with standards and QA." },
  { before: "Disconnected technology.", after: "Method-aligned technology." },
  { before: "Variable quality.", after: "Observable, auditable quality." },
];

const TransformationSection = () => {
  const [value, setValue] = useState([0]);
  const pct = value[0];

  return (
    <section className="px-6 py-32 max-w-5xl mx-auto">
      <FadeIn>
        <div className="border border-border rounded-lg bg-card p-10 md:p-16">
          <span className="font-serif text-accent text-sm tracking-widest">I</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal mt-4 mb-4 text-foreground">
            Your Method Works.<br />Now Make It Transferable.
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
            We design the structure that lets your expertise scale through certification, technology, or institutional governance — without dilution.
          </p>

          {/* Slider with logo */}
          <div className="mb-12">
            <div className="flex items-center gap-4">
              <span className="text-[10px] text-muted-foreground tracking-[0.2em] uppercase shrink-0">Before</span>
              <div className="relative flex-1">
                <Slider
                  value={value}
                  onValueChange={setValue}
                  max={100}
                  step={1}
                  className="w-full [&_[role=slider]]:bg-accent [&_[role=slider]]:border-accent [&_span[data-orientation=horizontal]>span]:bg-accent"
                />
              </div>
              <span className="text-[10px] text-muted-foreground tracking-[0.2em] uppercase shrink-0">After</span>
            </div>
          </div>

          {/* Transformation rows */}
          <div>
            {transformations.map((row, i) => (
              <FadeIn key={i} delay={80 * i}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-8 py-5 border-b border-border">
                  {/* Before text — always visible */}
                  <div className="flex items-start gap-3">
                    <span className="text-accent font-serif text-lg leading-none mt-0.5 shrink-0">—</span>
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed">{row.before}</p>
                  </div>
                  {/* After text — revealed by slider */}
                  <div
                    className="flex items-start gap-3 transition-opacity duration-150"
                    style={{ opacity: pct / 100 }}
                  >
                    <span className="text-accent font-serif text-lg leading-none mt-0.5 shrink-0">→</span>
                    <p className="text-base md:text-lg text-foreground leading-relaxed font-medium">{row.after}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Closing */}
          <div className="mt-12">
            <p className="text-lg text-foreground mb-2">Your expertise doesn't lack demand.</p>
            <p className="text-xl text-foreground font-serif italic">It lacks structure.</p>
          </div>
        </div>
      </FadeIn>
    </section>
  );
};

export default TransformationSection;
