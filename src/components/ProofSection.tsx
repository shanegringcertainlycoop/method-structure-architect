import { useState } from "react";
import FadeIn from "@/components/FadeIn";

/* ─── CHART DATA PER TAB ─── */
const chartDataSets = [
  {
    bars: [
      { label: "2023", value: 45, highlight: false, displayValue: "$235B" },
      { label: "2025", value: 55, highlight: false },
      { label: "2027", value: 65, highlight: false },
      { label: "2029", value: 75, highlight: false },
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
    chartType: "line" as const,
    delta: "+13%",
    bars: [], // unused for line chart
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
    body: "Workers with certifications are 13% more likely to be employed than those without — suggesting the market rewards credentials.",
  },
];

/* ─── LINE CHART ─── */
const lineData = {
  labels: ["Entry", "5 yrs", "10 yrs", "15 yrs", "20 yrs"],
  withCredential: [72, 78, 83, 86, 88],
  withoutCredential: [70, 72, 71, 69, 68],
};

const LineChart = ({ delta }: { delta?: string }) => {
  const w = 420, h = 380, px = 40, py = 30;
  const plotW = w - px * 2, plotH = h - py * 2;
  const n = lineData.labels.length;

  const toPoint = (values: number[], i: number) => {
    const x = px + (i / (n - 1)) * plotW;
    const y = py + plotH - ((values[i] - 60) / 35) * plotH; // scale 60-95
    return { x, y };
  };

  const makePath = (values: number[]) =>
    values.map((_, i) => {
      const { x, y } = toPoint(values, i);
      return `${i === 0 ? "M" : "L"}${x},${y}`;
    }).join(" ");

  const credPath = makePath(lineData.withCredential);
  const noCredPath = makePath(lineData.withoutCredential);

  return (
    <div className="flex flex-col items-center h-[500px] justify-center">
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full max-w-md">
        {/* Grid lines */}
        {[65, 75, 85].map((v) => {
          const y = py + plotH - ((v - 60) / 35) * plotH;
          return (
            <g key={v}>
              <line x1={px} y1={y} x2={w - px} y2={y} stroke="hsl(var(--border))" strokeWidth="0.5" strokeDasharray="4 4" />
              <text x={px - 6} y={y + 4} textAnchor="end" className="fill-muted-foreground" fontSize="10">{v}%</text>
            </g>
          );
        })}
        {/* X-axis labels */}
        {lineData.labels.map((label, i) => {
          const { x } = toPoint(lineData.withCredential, i);
          return <text key={label} x={x} y={h - 6} textAnchor="middle" className="fill-muted-foreground" fontSize="10">{label}</text>;
        })}
        {/* Without credential line */}
        <path d={noCredPath} fill="none" stroke="hsl(var(--muted-foreground) / 0.4)" strokeWidth="2" strokeDasharray="6 4" />
        {/* With credential line */}
        <path d={credPath} fill="none" stroke="hsl(var(--accent))" strokeWidth="2.5" />
        {/* End dots + values */}
        {[
          { values: lineData.withCredential, color: "hsl(var(--accent))", label: "88%" },
          { values: lineData.withoutCredential, color: "hsl(var(--muted-foreground) / 0.5)", label: "68%" },
        ].map((line) => {
          const last = toPoint(line.values, n - 1);
          return (
            <g key={line.label}>
              <circle cx={last.x} cy={last.y} r={4} fill={line.color} />
              <text x={last.x + 10} y={last.y + 4} className="fill-foreground" fontSize="11" fontWeight="500">{line.label}</text>
            </g>
          );
        })}
      </svg>
      {/* Legend */}
      <div className="flex gap-6 mt-4 text-xs text-muted-foreground">
        <span className="flex items-center gap-2">
          <span className="w-4 h-0.5 bg-accent inline-block" /> With Credential
        </span>
        <span className="flex items-center gap-2">
          <span className="w-4 h-0.5 bg-muted-foreground/40 inline-block border-t border-dashed border-muted-foreground/40" /> No Credential
        </span>
      </div>
      {delta && (
        <div className="mt-4">
          <span className="text-xs font-medium tracking-wide text-accent bg-accent/10 border border-accent/20 rounded-full px-3 py-1">
            Gap widens to {delta}
          </span>
        </div>
      )}
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
    <div className="flex items-end gap-3 sm:gap-5 h-[400px] w-full">
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
            {'chartType' in activeChart && activeChart.chartType === "line"
              ? <LineChart delta={activeChart.delta} />
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
