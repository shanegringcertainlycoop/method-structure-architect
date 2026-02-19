import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import FadeIn from "@/components/FadeIn";

const transformations = [
  { before: "Your framework lives in conversation.", after: "Your framework lives in a documented blueprint." },
  { before: "You explain it differently each time.", after: "You have a canonical language system." },
  { before: "Clients depend on you.", after: "Trust transfers to a system that outlives you." },
  { before: "Marketing feels improvised.", after: "Marketing becomes claim-safe and repeatable." },
  { before: "Scale feels premature.", after: "Scale becomes engineered with standards and QA." },
  { before: "Technology feels disconnected.", after: "Technology becomes an expression of the method." },
  { before: "Quality varies by who delivers.", after: "Quality becomes observable — and auditable." },
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

          {/* Slider */}
          <div className="mb-10">
            <Slider
              value={value}
              onValueChange={setValue}
              max={100}
              step={1}
              className="w-full [&_[role=slider]]:bg-accent [&_[role=slider]]:border-accent [&_span[data-orientation=horizontal]>span]:bg-accent"
            />
            <div className="flex justify-between text-xs text-muted-foreground mt-2 tracking-wider">
              <span>BEFORE</span>
              <span>AFTER</span>
            </div>
          </div>

          {/* Transformation rows */}
          <div>
            {transformations.map((row, i) => (
              <FadeIn key={i} delay={80 * i}>
                <div className="relative py-5 border-b border-border overflow-hidden">
                  {/* Before text (always rendered, visible where after is clipped away) */}
                  <div className="flex items-start gap-3">
                    <span className="text-accent font-serif text-lg leading-none mt-0.5 shrink-0">—</span>
                    <p className="text-base text-muted-foreground leading-relaxed">{row.before}</p>
                  </div>
                  {/* After text (clipped by slider value) */}
                  <div
                    className="absolute inset-0 flex items-start gap-3 py-5 bg-card"
                    style={{ clipPath: `inset(0 ${100 - pct}% 0 0)` }}
                  >
                    <span className="text-accent font-serif text-lg leading-none mt-0.5 shrink-0">→</span>
                    <p className="text-base text-foreground leading-relaxed font-medium">{row.after}</p>
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
