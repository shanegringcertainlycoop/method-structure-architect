import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import certainlyLogo from "@/assets/certainly-logo.png";
import ProgramsDropdown from "@/components/ProgramsDropdown";

const SiteNav = ({ onRequestAssessment }: { onRequestAssessment: () => void }) => (
  <nav className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center border-b border-border bg-background/80 backdrop-blur-sm">
    <div className="flex items-center gap-8">
      <Link to="/">
        <img src={certainlyLogo} alt="Certainly" className="h-8" />
      </Link>
    </div>
    <div className="flex items-center gap-6">
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
  </nav>
);

export default SiteNav;
