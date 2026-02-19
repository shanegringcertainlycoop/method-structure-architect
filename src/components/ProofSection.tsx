import FadeIn from "@/components/FadeIn";

/* ─── PLACEHOLDER DATA — replace with real data later ─── */

const barData = [
  { label: "Certainly", value: 92, highlight: true },
  { label: "Firm B", value: 68 },
  { label: "Firm C", value: 54 },
  { label: "Firm D", value: 47 },
  { label: "Firm E", value: 31 },
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
    body: "Individuals with industry-recognized credentials are 13% more likely to be employed than those without them.",
  },
];

/* ─── BAR CHART ─── */
const BarChart = () => (
  <div className="flex items-end gap-3 sm:gap-5 h-[320px] w-full">
    {barData.map((bar) => {
      const heightPct = `${bar.value}%`;
      return (
        <div key={bar.label} className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
          <span className="text-sm font-medium text-foreground">{bar.value}%</span>
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
);

/* ─── MAIN SECTION ─── */
const ProofSection = () => {

  return (
    <section className="px-6 py-32 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* LEFT — Bar Chart */}
        <FadeIn>
          <div className="w-full">
            <BarChart />
            <p className="text-xs text-muted-foreground mt-6 italic">
              Placeholder footnote. Replace with data source context.
            </p>
          </div>
        </FadeIn>

        {/* RIGHT — Copy */}
        <FadeIn delay={200}>
          <div>
            <span className="font-serif text-accent text-sm tracking-widest">V</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal mt-4 mb-8 text-foreground">
              Proof of Structure.
            </h2>


            {/* Text Blocks */}
            <div className="space-y-0">
              {textBlocks.map((block, i) => (
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
        </FadeIn>
      </div>
    </section>
  );
};

export default ProofSection;
