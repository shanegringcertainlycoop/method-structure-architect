import { Link } from "react-router-dom";
import FadeIn from "@/components/FadeIn";
import certainlyLogo from "@/assets/method-lab-logo.svg";

const SiteFooter = ({ delay = 400 }: { delay?: number }) => (
  <FadeIn delay={delay}>
    <div className="border-t border-border mt-20 mx-6">
      <footer className="mt-10 pb-10 flex flex-col items-center gap-6 sm:flex-row sm:justify-between text-xs text-muted-foreground max-w-7xl mx-auto">
        <Link to="/">
          <img src={certainlyLogo} alt="Method Lab by Certainly" className="h-8" />
        </Link>
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          <Link to="/systems-of-trust" className="hover:text-foreground transition-colors">Framework</Link>
          <Link to="/glossary" className="hover:text-foreground transition-colors">Glossary</Link>
          <Link to="/blog" className="hover:text-foreground transition-colors">Blog</Link>
          <Link to="/case-studies" className="hover:text-foreground transition-colors">Case Studies</Link>
          <Link to="/for/consultants" className="hover:text-foreground transition-colors">Consultants</Link>
          <Link to="/for/credentialing-organizations" className="hover:text-foreground transition-colors">Credentialing Orgs</Link>
          <Link to="/for/coaches" className="hover:text-foreground transition-colors">Coaches</Link>
          <Link to="/for/organizations" className="hover:text-foreground transition-colors">Organizations</Link>
        </nav>
        <span className="text-center">Method architecture for disciplined growth.</span>
      </footer>
    </div>
  </FadeIn>
);

export default SiteFooter;
