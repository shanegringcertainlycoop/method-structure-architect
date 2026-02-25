import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const programs = [
  { label: "Level 1 — Method Capture™", to: "/method-capture" },
  { label: "Level 2 — Strategy Sprint™", to: "/strategy-sprint" },
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
        className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors tracking-wide"
      >
        Programs & Services
        <ChevronDown className={`w-3 h-3 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute top-full left-0 mt-2 w-60 rounded-md border border-border bg-background shadow-lg z-50 py-1">
          {programs.map((p) => (
            <Link
              key={p.to}
              to={p.to}
              onClick={() => setOpen(false)}
              className="block px-4 py-2.5 text-sm text-foreground/80 hover:bg-surface hover:text-foreground transition-colors"
            >
              {p.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProgramsDropdown;
