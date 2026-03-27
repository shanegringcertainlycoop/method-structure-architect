import { Link } from "react-router-dom";
import FadeIn from "@/components/FadeIn";
import certainlyLogo from "@/assets/method-lab-logo.svg";

const SiteFooter = ({ delay = 400 }: { delay?: number }) => (
  <FadeIn delay={delay}>
    <div className="border-t border-border mt-20 mx-6">
      <footer className="mt-10 pb-10 flex flex-col sm:flex-row items-center justify-between text-xs text-muted-foreground max-w-7xl mx-auto">
        <Link to="/">
          <img src={certainlyLogo} alt="Method Lab by Certainly" className="h-8" />
        </Link>
        <div className="flex items-center gap-6 mt-4 sm:mt-0">
          <Link to="/systems-of-trust" className="hover:text-foreground transition-colors">Framework</Link>
          <Link to="/glossary" className="hover:text-foreground transition-colors">Glossary</Link>
          <Link to="/blog" className="hover:text-foreground transition-colors">Blog</Link>
          <Link to="/case-studies" className="hover:text-foreground transition-colors">Case Studies</Link>
          <span>Method architecture for disciplined growth.</span>
        </div>
      </footer>
    </div>
  </FadeIn>
);

export default SiteFooter;
