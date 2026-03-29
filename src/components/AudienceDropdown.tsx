import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const audiences = [
  { label: "Consultants & Advisors", to: "/for/consultants" },
  { label: "Credentialing Organizations", to: "/for/credentialing-organizations" },
  { label: "Coaches & Trainers", to: "/for/coaches" },
  { label: "Organizations & Institutions", to: "/for/organizations" },
];

const AudienceDropdown = () => {
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
        Who We Serve
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
          Audiences
        </p>
        {audiences.map((a) => (
          <Link
            key={a.to}
            to={a.to}
            onClick={() => setOpen(false)}
            className="group flex items-center gap-3 px-4 py-3 text-sm text-foreground/70 hover:text-foreground hover:bg-white/[0.04] transition-colors"
          >
            <span className="w-1 h-1 rounded-full shrink-0 bg-white/20 group-hover:bg-accent transition-colors" />
            <span className="group-hover:translate-x-0.5 transition-transform duration-150">
              {a.label}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AudienceDropdown;
