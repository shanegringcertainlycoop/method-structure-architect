import FadeIn from "@/components/FadeIn";

const SectionMarker = ({ numeral }: { numeral: string }) => (
  <span className="font-serif text-accent text-sm tracking-widest">{numeral}</span>
);

const BentoSection = () => (
  <section className="px-6 py-32 max-w-5xl mx-auto">
    <FadeIn>
      <SectionMarker numeral="VIII" />
      <h2 className="font-serif text-3xl sm:text-4xl font-normal mt-4 mb-4">
        Everything Connects.
      </h2>
      <p className="text-lg text-muted-foreground mb-16">
        Method, structure, and credibility — one system that works the way you do.
      </p>
    </FadeIn>

    {/* Bento Grid */}
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
      {/* Card 1 — larger left */}
      <FadeIn className="md:col-span-7">
        <div className="border border-border rounded-sm bg-card p-8 h-full min-h-[280px] flex flex-col justify-between">
          <div>
            <h3 className="font-serif text-xl sm:text-2xl text-foreground mb-3">
              Capture Your Method
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
              Extract the implicit logic that drives your results. Document decision frameworks, language systems, and competence markers.
            </p>
          </div>
          {/* Placeholder illustration area */}
          <div className="mt-8 w-full h-32 rounded-sm bg-muted/20 border border-border/50 flex items-center justify-center">
            <span className="text-xs text-muted-foreground/40 tracking-widest uppercase">Illustration</span>
          </div>
        </div>
      </FadeIn>

      {/* Card 2 — smaller right */}
      <FadeIn className="md:col-span-5" delay={150}>
        <div className="border border-border rounded-sm bg-card p-8 h-full min-h-[280px] flex flex-col justify-between">
          <div>
            <h3 className="font-serif text-xl sm:text-2xl text-foreground mb-3">
              Build the Structure
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Design governance, assessment architecture, and credentialing systems that scale without losing fidelity.
            </p>
          </div>
          {/* Placeholder illustration area */}
          <div className="mt-8 w-full h-32 rounded-sm bg-muted/20 border border-border/50 flex items-center justify-center">
            <span className="text-xs text-muted-foreground/40 tracking-widest uppercase">Illustration</span>
          </div>
        </div>
      </FadeIn>

      {/* Card 3 — full width bottom */}
      <FadeIn className="md:col-span-12" delay={300}>
        <div className="border border-border rounded-sm bg-card p-8 min-h-[220px] flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="max-w-lg">
            <h3 className="font-serif text-xl sm:text-2xl text-foreground mb-3">
              Make It Transferable
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Launch certification pilots, steward ongoing quality, and let your expertise operate independently of your presence.
            </p>
          </div>
          {/* Placeholder illustration area */}
          <div className="w-full md:w-72 h-32 rounded-sm bg-muted/20 border border-border/50 flex items-center justify-center shrink-0">
            <span className="text-xs text-muted-foreground/40 tracking-widest uppercase">Illustration</span>
          </div>
        </div>
      </FadeIn>
    </div>
  </section>
);

export default BentoSection;
