import { useState } from "react";
import FadeIn from "@/components/FadeIn";

/* ─── PLACEHOLDER DATA — replace with real data later ─── */
const tabs = ["Comparison View", "Outcomes"];

const barData = [
  { label: "Certainly", value: 92, highlight: true },
  { label: "Firm B", value: 68 },
  { label: "Firm C", value: 54 },
  { label: "Firm D", value: 47 },
  { label: "Firm E", value: 31 },
];

const tabContent = [
  [
    {
      headline: "Structured from day one.",
      body: "Placeholder description. Replace with real proof copy about methodology strength.",
    },
    {
      headline: "Built to endure.",
      body: "Placeholder description. Replace with real proof copy about system resilience.",
    },
    {
      headline: "Disciplined expansion.",
      body: "Placeholder description. Replace with real proof copy about controlled growth.",
    },
  ],
  [
    {
      headline: "Measurable outcomes.",
      body: "Placeholder description. Replace with real outcome data and proof points.",
    },
    {
      headline: "Sustained performance.",
      body: "Placeholder description. Replace with real proof copy about long-term results.",
    },
    {
      headline: "Scalable returns.",
      body: "Placeholder description. Replace with real proof copy about growth metrics.",
    },
  ],
];

/* ─── HORIZONTAL BAR CHART ─── */
const HorizontalBarChart = () => (
  <div className="flex flex-col gap-4 w-full">
    {barData.map((bar) => (
      <div key={bar.label} className="flex items-center gap-4">
        <span className="text-xs text-muted-foreground tracking-wide w-20 text-right shrink-0">
          {bar.label}
        </span>
        <div className="flex-1 flex items-center gap-3">
          <div
            className="h-8 rounded-r-sm transition-all duration-700"
            style={{
              width: `${bar.value}%`,
              background: bar.highlight
                ? "linear-gradient(90deg, hsl(var(--accent)) 0%, hsl(var(--accent) / 0.4) 100%)"
                : "hsl(var(--muted) / 0.4)",
              border: bar.highlight ? "none" : "1px solid hsl(var(--border))",
            }}
          />
          <span className="text-sm font-medium text-foreground">{bar.value}%</span>
        </div>
      </div>
    ))}
  </div>
);

/* ─── MAIN SECTION ─── */
const ProofSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="px-6 py-32 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* LEFT — Headline + Horizontal Bar Chart + Summary */}
        <FadeIn>
          <div className="w-full">
            <span className="font-serif text-accent text-sm tracking-widest">V</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal mt-4 mb-10 text-foreground">
              Structural Discipline Performs.
            </h2>
            <HorizontalBarChart />
            <p className="text-xs text-muted-foreground mt-6 italic">
              Placeholder footnote. Replace with data source context.
            </p>
          </div>
        </FadeIn>

        {/* RIGHT — Vertical Tab Navigation + Content */}
        <FadeIn delay={200}>
          <div className="flex gap-0 h-full">
            {/* Vertical Tabs */}
            <div className="flex flex-col shrink-0">
              {tabs.map((tab, i) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(i)}
                  className={`text-left px-5 py-4 text-sm tracking-wide transition-colors border-l-2 ${
                    activeTab === i
                      ? "border-l-accent text-foreground font-medium bg-card"
                      : "border-l-transparent text-muted-foreground hover:text-foreground hover:border-l-border"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="flex-1 pl-8">
              <div className="space-y-0">
                {tabContent[activeTab].map((block, i) => (
                  <div key={i}>
                    {i > 0 && <div className="w-full h-px bg-border" />}
                    <div className="py-6">
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
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default ProofSection;
