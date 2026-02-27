import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import certainlyLogo from "@/assets/certainly-logo.png";
import ProgramsDropdown from "@/components/ProgramsDropdown";

const mobileLinks = [
  { label: "Trust Architecture™ Review", to: "/trust-architecture-review" },
  { label: "Method Capture™", to: "/method-capture" },
  { label: "Strategy Sprint™", to: "/strategy-sprint" },
  { label: "Trust Mechanism Modules™", to: "/trust-mechanism-modules" },
  { label: "Fractional Credential Operations™", to: "/fractional-credential-operations" },
  { label: "Systems of Trust™", to: "/systems-of-trust" },
  { label: "Musings", to: "/blog" },
  { label: "Glossary", to: "/glossary" },
];

const SiteNav = ({ onRequestAssessment }: { onRequestAssessment: () => void }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center border-b border-border bg-background/80 backdrop-blur-sm">
        <Link to="/">
          <img src={certainlyLogo} alt="Certainly" className="h-8" />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          <ProgramsDropdown />
          <Link
            to="/blog"
            className="text-xs text-muted-foreground hover:text-foreground transition-colors tracking-wide"
          >
            Musings
          </Link>
          <Button
            onClick={onRequestAssessment}
            size="sm"
            className="btn-accent-gradient text-accent-foreground rounded-sm text-xs tracking-wide"
          >
            Request a Method Audit
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="md:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 bg-background/95 backdrop-blur-md transition-all duration-300 md:hidden ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{ paddingTop: "4.5rem" }}
      >
        <div className="flex flex-col px-8 py-6 space-y-1">
          <p className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground/60 mb-4">
            Engagement Levels
          </p>
          {mobileLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className="py-3 text-base text-foreground/70 hover:text-foreground border-b border-border/30 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-6">
            <Button
              onClick={() => {
                setMobileOpen(false);
                onRequestAssessment();
              }}
              className="btn-accent-gradient text-accent-foreground rounded-sm w-full py-4 text-base tracking-wide h-auto"
            >
              Request a Method Audit
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SiteNav;
