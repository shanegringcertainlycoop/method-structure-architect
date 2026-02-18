import { useState } from "react";
import FadeIn from "@/components/FadeIn";

const proofTabs = [
  {
    tabLabel: "Strategic Success",
    thesis: "Structure Increases Strategic Success",
    bars: [
      { label: "High governance organizations", value: 77, highlight: true, displayValue: "77%" },
      { label: "Low governance organizations", value: 54, highlight: false, displayValue: "54%" },
    ],
    chartTitle: "Project Success Rate by Governance Maturity",
    summary:
      "Organizations that formalize how work is defined, measured, and governed complete strategic initiatives more reliably. High-maturity governance correlates with materially higher success rates and significantly lower execution waste. Discipline is not bureaucracy — it is execution leverage.",
    citationText: "Project Management Institute (PMI), Pulse of the Profession®, 2020.",
    citationUrl: "https://www.pmi.org/learning/thought-leadership/pulse",
  },
  {
    tabLabel: "Capital Waste",
    thesis: "Lack of Structure Destroys Capital",
    bars: [
      { label: "High governance (avg. waste)", value: 10, highlight: true, displayValue: "9–10%" },
      { label: "Low governance (avg. waste)", value: 30, highlight: false, displayValue: "30%+" },
    ],
    chartTitle: "Revenue Waste from Poor Governance",
    summary:
      "Low-governance organizations report dramatically higher capital loss due to failed or poorly executed initiatives. Waste compounds invisibly when standards are unclear, ownership is diffuse, and processes are inconsistent. Governance protects capital.",
    citationText: "Project Management Institute (PMI), Pulse of the Profession®, 2018.",
    citationUrl:
      "https://www.pmi.org/-/media/pmi/documents/public/pdf/learning/thought-leadership/pulse/pulse-of-the-profession-2018.pdf",
  },
  {
    tabLabel: "Training Profitability",
    thesis: "Formalized Training Improves Profitability",
    bars: [
      { label: "Higher profit margins", value: 24, highlight: true, displayValue: "+24%" },
      { label: "Higher income per employee", value: 100, highlight: true, displayValue: "218%" },
    ],
    chartTitle: "Profit Impact of Structured Training",
    summary:
      "Organizations that invest in formalized training and documented learning systems materially outperform those relying on informal or ad hoc instruction. Structured knowledge transfer increases consistency, performance, and financial returns.",
    citationText: "Association for Talent Development (ATD), State of the Industry report.",
    citationUrl: "https://www.td.org/research-reports/state-of-the-industry",
  },
];

const ProofSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tab = proofTabs[activeTab];

  return (
    <section className="px-6 py-32 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-0 lg:gap-12 items-start">
        {/* LEFT — Content */}
        <FadeIn key={activeTab} delay={100}>
          <div>
            <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-foreground mb-2">
              {tab.thesis}
            </h3>
            <p className="text-xs text-muted-foreground tracking-wide uppercase mb-8">
              {tab.chartTitle}
            </p>

            {/* Horizontal Bar Chart */}
            <div className="space-y-5 mb-10">
              {tab.bars.map((bar) => (
                <div key={bar.label}>
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="text-sm text-muted-foreground">{bar.label}</span>
                    <span className="text-sm font-medium text-foreground">{bar.displayValue}</span>
                  </div>
                  <div className="w-full h-3 rounded-sm bg-muted/30">
                    <div
                      className="h-full rounded-sm transition-all duration-700"
                      style={{
                        width: `${bar.value}%`,
                        background: bar.highlight
                          ? "linear-gradient(90deg, hsl(var(--accent)) 0%, hsl(var(--accent) / 0.5) 100%)"
                          : "hsl(var(--muted-foreground) / 0.3)",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed mb-6">{tab.summary}</p>

            <a
              href={tab.citationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-accent hover:underline"
            >
              {tab.citationText}
            </a>
          </div>
        </FadeIn>

        {/* RIGHT — Vertical Tabs (horizontal on mobile) */}
        <FadeIn>
          <div className="flex flex-col">
            <span className="font-serif text-accent text-xs tracking-widest mb-6 hidden lg:block">V</span>
            <div className="flex lg:flex-col gap-0 mt-8 lg:mt-0">
              {proofTabs.map((t, i) => (
                <button
                  key={t.tabLabel}
                  onClick={() => setActiveTab(i)}
                  className={`text-left text-base tracking-wide px-4 py-5 transition-colors border-b lg:border-b-0 lg:border-r-[3px] flex-1 lg:flex-none ${
                    activeTab === i
                      ? "border-accent text-foreground font-medium"
                      : "border-border text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {t.tabLabel}
                </button>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default ProofSection;
