import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const programs = [
  { label: "Level 1 — Method Capture™", to: "/method-capture" },
  { label: "Level 2 — Strategy Sprint™", to: "/strategy-sprint" },
  { label: "Level 3 — Trust Mechanism Modules™", to: "/trust-mechanism-modules" },
  { label: "Level 4 — Fractional Credential Operations™", to: "/fractional-credential-operations" },
];

const ProgramsDropdown = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors tracking-wide"
      >
        How We Work
        <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>

      <div
        className={`absolute top-full left-0 mt-3 w-72 rounded-md border border-border/60 shadow-xl z-[100] py-2 transition-all duration-200 origin-top ${
          open
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
        style={{ backgroundColor: "#141414" }}
      >
        <p className="px-4 pt-1 pb-2.5 text-[10px] tracking-[0.2em] uppercase text-muted-foreground/60 border-b border-border/40 mb-1">
          Engagement Levels
        </p>
        {programs.map((p, i) => (
          <Link
            key={p.to}
            to={p.to}
            onClick={() => setOpen(false)}
            className="group flex items-center gap-3 px-4 py-3 text-sm text-foreground/70 hover:text-foreground hover:bg-white/[0.04] transition-colors"
          >
            <span
              className="w-1 h-1 rounded-full shrink-0 transition-colors"
              style={{ backgroundColor: i === 0 ? "hsl(43 47% 54%)" : "rgba(255,255,255,0.2)" }}
            />
            <span className="group-hover:translate-x-0.5 transition-transform duration-150">
              {p.label}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProgramsDropdown;
