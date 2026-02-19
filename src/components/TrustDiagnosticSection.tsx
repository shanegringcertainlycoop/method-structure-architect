import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import FadeIn from "@/components/FadeIn";

const dimensions = [
  {
    title: "1. Source — Authority",
    items: [
      "I can clearly explain why our method works, not just that it works.",
      "Our authority does not depend primarily on the founder's personal story.",
    ],
  },
  {
    title: "2. Transfer — Scalability",
    items: [
      "Another professional could deliver our method and produce comparable outcomes.",
      "Competence is observable and assessable — not subjective.",
    ],
  },
  {
    title: "3. Signal — Market Legibility",
    items: [
      "Buyers can quickly understand what our designation or method represents.",
      "Employers/partners can distinguish our approach from generic alternatives.",
    ],
  },
  {
    title: "4. Integrity — Structural Discipline",
    items: [
      "We have defined standards that do not bend under revenue pressure.",
      "There are clear decision rights around quality and governance.",
    ],
  },
  {
    title: "5. Risk — Vulnerability Awareness",
    items: [
      "If demand doubled tomorrow, we know exactly what would break first.",
      "We understand our reputational and operational exposure.",
    ],
  },
];

const resultStates = {
  strong: {
    title: "Strong foundation",
    body: "You likely have a functioning trust system. Your next step is to formalize and protect what already works — especially governance and signaling as you scale.",
  },
  vulnerable: {
    title: "Trust is vulnerable",
    body: "Trust may be degrading quietly as delivery expands. You'll benefit from clarifying where trust originates and tightening the transfer + signal pathways before you scale further.",
  },
  dependent: {
    title: "Reputation-dependent",
    body: "Your growth currently relies on founder-dependent credibility. Scaling will likely dilute quality or meaning unless you design explicit transfer, integrity, and verification mechanisms.",
  },
};

interface TrustDiagnosticSectionProps {
  onRequestAssessment: () => void;
}

const TrustDiagnosticSection = ({ onRequestAssessment }: TrustDiagnosticSectionProps) => {
  const [checked, setChecked] = useState<boolean[]>(new Array(10).fill(false));

  const checkedCount = checked.filter(Boolean).length;
  const uncheckedCount = 10 - checkedCount;

  const result =
    uncheckedCount <= 2
      ? resultStates.strong
      : uncheckedCount <= 5
        ? resultStates.vulnerable
        : resultStates.dependent;

  const toggle = (index: number) => {
    setChecked((prev) => {
      const next = [...prev];
      next[index] = !next[index];
      return next;
    });
  };

  let itemIndex = 0;

  return (
    <section className="px-6 py-32 max-w-4xl mx-auto">
      {/* Header */}
      <FadeIn>
        <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-4">
          Trust Diagnostic — 5 Dimensions
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl font-normal mb-6 text-foreground">
          Do You Have a System of Trust — or Just Reputation?
        </h2>
        <p className="text-lg text-muted-foreground mb-2 max-w-2xl">
          Answer 10 questions. If more than 3 make you uncomfortable, your trust is fragile.
        </p>
        <p className="text-sm text-muted-foreground mb-16 max-w-2xl">
          This is a quick self-check. You'll get a more complete diagnostic in the Trust Architecture™ Review.
        </p>
      </FadeIn>

      {/* Checklist */}
      <div className="space-y-0">
        {dimensions.map((dim) => {
          const dimItems = dim.items.map((label) => {
            const idx = itemIndex++;
            return { label, idx };
          });

          return (
            <FadeIn key={dim.title}>
              <div className="border-b border-border py-8 first:pt-0">
                <h3 className="text-base font-semibold text-foreground mb-5 tracking-wide">
                  {dim.title}
                </h3>
                <div className="space-y-4">
                  {dimItems.map(({ label, idx }) => (
                    <label
                      key={idx}
                      className="flex items-start gap-4 cursor-pointer group"
                      htmlFor={`trust-q-${idx}`}
                    >
                      <Checkbox
                        id={`trust-q-${idx}`}
                        checked={checked[idx]}
                        onCheckedChange={() => toggle(idx)}
                        className="mt-0.5 h-5 w-5 rounded-none border-foreground/40 data-[state=checked]:bg-foreground data-[state=checked]:border-foreground data-[state=checked]:text-background"
                      />
                      <span className="text-base text-foreground/80 leading-relaxed select-none">
                        {label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </FadeIn>
          );
        })}
      </div>

      {/* Scoring */}
      <FadeIn>
        <div className="mt-16 space-y-6">
          <div className="flex items-center gap-8 text-sm font-medium text-foreground">
            <span>Checked: {checkedCount} / 10</span>
            <span className="text-muted-foreground">Unchecked: {uncheckedCount}</span>
          </div>

          <Progress
            value={checkedCount * 10}
            className="h-2 rounded-none bg-border"
          />

          {/* Result card */}
          <div className="border border-foreground/20 bg-background p-8">
            <h4 className="text-lg font-semibold text-foreground mb-2">{result.title}</h4>
            <p className="text-base text-muted-foreground leading-relaxed">{result.body}</p>
          </div>
        </div>
      </FadeIn>

      {/* Pivot paragraph */}
      <FadeIn>
        <p className="text-lg text-foreground leading-relaxed mt-16 mb-16 max-w-2xl font-serif italic">
          "Most founders try to solve this with marketing. But if the structure underneath is weak, more visibility accelerates decay. You don't need more exposure. You need architecture."
        </p>
      </FadeIn>

      {/* CTAs */}
      <FadeIn>
        <div className="flex flex-col sm:flex-row gap-4 mb-4">
          <Button
            onClick={onRequestAssessment}
            className="btn-accent-gradient text-accent-foreground rounded-sm px-10 py-4 text-base tracking-wide h-auto"
          >
            Run the Full Trust Architecture™ Review ($9)
          </Button>
          <Button
            variant="outline"
            className="rounded-sm px-10 py-4 text-base tracking-wide border-border text-foreground hover:bg-foreground hover:text-background h-auto"
            onClick={onRequestAssessment}
          >
            Book a 15-Minute Diagnostic Call
          </Button>
        </div>
        <p className="text-xs text-muted-foreground tracking-wide">
          We respond within 2 business days.
        </p>
      </FadeIn>
    </section>
  );
};

export default TrustDiagnosticSection;
