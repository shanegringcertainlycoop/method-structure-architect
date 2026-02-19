import { useState } from "react";
import FadeIn from "@/components/FadeIn";

/* ─── CHART DATA PER TAB ─── */
const chartDataSets = [
  {
    bars: [
      { label: "2023", value: 67, highlight: false, displayValue: "$235B" },
      { label: "2025", value: 74, highlight: false },
      { label: "2027", value: 81, highlight: false },
      { label: "2029", value: 89, highlight: false },
      { label: "2032", value: 100, highlight: true, displayValue: "$349B" },
    ],
    footnote: 'Reference: <a href="https://www.mordorintelligence.com/industry-reports/testing-inspection-and-certification-market" target="_blank" rel="noopener noreferrer">Mordor Intelligence, TIC Market Report (2023)</a>',
  },
  {
    bars: [
      { label: "No Credential", value: 56, highlight: false, displayValue: "$672/wk" },
      { label: "With Credential", value: 100, highlight: true, displayValue: "$967/wk" },
    ],
    delta: "+$295/wk (+44%)",
    footnote: 'Reference: <a href="https://www.c2er.org/2019/07/professional-certifications-and-licenses-increase-earnings-and-reduce-unemployment-new-data-shows/" target="_blank" rel="noopener noreferrer">C2ER (Council for Community &amp; Economic Research)</a>',
  },
  {
    bars: [
      { label: "No Credential", value: 68, highlight: false, displayValue: "68%" },
      { label: "With Credential", value: 81, highlight: true, displayValue: "81%" },
    ],
    delta: "+13%",
    chartType: "gauge" as const,
    footnote: 'Reference: <a href="https://www.financialprofessionals.org/training-resources/resources/articles/Details/are-certified-professionals-more-likely-to-get-hired" target="_blank" rel="noopener noreferrer">Lumina Foundation / Gallup, 2023</a>',
  },
];

const textBlocks = [
  {
    headline: "Demand for verifiable standards is growing.",
    body: "The global Testing, Inspection & Certification (TIC) market is projected to grow from $235B in 2023 to $349B by 2032 — reflecting sustained demand for systems that define, measure, and verify performance.",
  },
  {
    headline: "Verified competence commands higher pay.",
    body: "Workers with a recognized, job-relevant credential earn an average of $295 more per week than peers without one — a 44% increase in median weekly earnings.",
  },
  {
    headline: "Verifiable standards improve employment outcomes.",
    body: "Workers with certifications are 13% more likely to be employed than those without, proving the market rewards credentials.",
  },
];

/* ─── GAUGE CHART ─── */
const GaugeChart = ({ bars, delta }: { bars: { label: string; value: number; highlight: boolean; displayValue?: string }[]; delta?: string }) => {
  const radius = 70;
  const stroke = 10;
  const circumference = 2 * Math.PI * radius;

  return (
    <div className="flex flex-col items-center h-[380px] justify-center">
      <p className="text-sm font-serif text-foreground mb-2">Employment Rate</p>
      <p className="text-xs text-muted-foreground mb-6">Percentage of workers currently employed</p>
      {delta && (
        <div className="mb-6">
          <span className="text-xs font-medium tracking-wide text-accent bg-accent/10 border border-accent/20 rounded-full px-3 py-1">
            {delta}
          </span>
        </div>
      )}
      <div className="flex items-center gap-8 sm:gap-12">
        {bars.map((bar) => {
          const offset = circumference - (bar.value / 100) * circumference;
          return (
            <div key={bar.label} className="flex flex-col items-center gap-3">
              <div className="relative">
                <svg width={radius * 2 + stroke} height={radius * 2 + stroke} className="transform -rotate-90">
                  <circle
                    cx={radius + stroke / 2}
                    cy={radius + stroke / 2}
                    r={radius}
                    fill="none"
                    stroke="hsl(var(--muted) / 0.3)"
                    strokeWidth={stroke}
                  />
                  <circle
                    cx={radius + stroke / 2}
                    cy={radius + stroke / 2}
                    r={radius}
                    fill="none"
                    stroke={bar.highlight ? "hsl(var(--accent))" : "hsl(var(--muted-foreground) / 0.5)"}
                    strokeWidth={stroke}
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    className="transition-all duration-1000 ease-out"
                  />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-2xl font-serif text-foreground rotate-0">
                  {bar.displayValue}
                </span>
              </div>
              <span className="text-xs text-muted-foreground tracking-wide">{bar.label}</span>
            </div>
          );
        })}
      </div>
      <p className="text-xs text-muted-foreground mt-6 text-center max-w-sm">
        Certified workers show consistently higher employment rates across industries.
      </p>
    </div>
  );
};

/* ─── BAR CHART ─── */
const BarChart = ({ bars, delta }: { bars: { label: string; value: number; highlight: boolean; displayValue?: string }[]; delta?: string }) => (
  <div>
    {delta && (
      <div className="flex justify-center mb-4">
        <span className="text-xs font-medium tracking-wide text-accent bg-accent/10 border border-accent/20 rounded-full px-3 py-1">
          {delta}
        </span>
      </div>
    )}
    <div className="flex items-end gap-3 sm:gap-5 h-[320px] w-full">
    {bars.map((bar) => {
      const heightPct = `${bar.value}%`;
      return (
        <div key={bar.label} className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
          {bar.displayValue && (
            <span className="text-sm font-medium text-foreground">{bar.displayValue}</span>
          )}
          <div
            className="w-full rounded-t-sm transition-all duration-700"
            style={{
              height: heightPct,
              background: bar.highlight
                ? "linear-gradient(180deg, hsl(var(--accent)) 0%, hsl(var(--accent) / 0.4) 100%)"
                : "hsl(var(--muted) / 0.4)",
              border: bar.highlight ? "none" : "1px solid hsl(var(--border))",
            }}
          />
          <span className="text-xs text-muted-foreground tracking-wide text-center mt-1">
            {bar.label}
          </span>
        </div>
      );
    })}
    </div>
  </div>
);

/* ─── MAIN SECTION ─── */
const ProofSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeChart = chartDataSets[activeIndex];

  return (
    <section className="px-6 py-32 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
        {/* LEFT — Chart */}
        <FadeIn>
          <div className="w-full">
            {'chartType' in activeChart && activeChart.chartType === "gauge"
              ? <GaugeChart bars={activeChart.bars} delta={activeChart.delta} />
              : <BarChart bars={activeChart.bars} delta={activeChart.delta} />
            }
            <p
              className="text-xs text-muted-foreground mt-6 italic [&_a]:underline [&_a]:hover:text-foreground"
              dangerouslySetInnerHTML={{ __html: activeChart.footnote }}
            />
          </div>
        </FadeIn>

        {/* RIGHT — Copy */}
        <FadeIn delay={200}>
          <div>
            <span className="font-serif text-accent text-sm tracking-widest">V</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal mt-4 mb-8 text-foreground">
              Trust &gt; Hype.
            </h2>

            {/* Text Blocks as tabs */}
            <div className="space-y-0">
              {textBlocks.map((block, i) => (
                <div key={i}>
                  {i > 0 && <div className="w-full h-px bg-border" />}
                  <div
                    className={`py-6 cursor-pointer transition-opacity ${
                      activeIndex === i ? "opacity-100" : "opacity-50 hover:opacity-75"
                    }`}
                    onClick={() => setActiveIndex(i)}
                  >
                    <h3 className="font-serif text-xl sm:text-2xl text-foreground mb-2">
                      {block.headline}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {block.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default ProofSection;
