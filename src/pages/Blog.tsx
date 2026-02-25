import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/FadeIn";
import { blogPosts } from "@/data/blogPosts";
import AssessmentModal from "@/components/AssessmentModal";
import SiteNav from "@/components/SiteNav";
import certainlyLogo from "@/assets/certainly-logo.png";

const Divider = () => <div className="w-full h-px bg-border" />;

const Blog = () => {
  const [assessmentOpen, setAssessmentOpen] = useState(false);

  return (
    <div className="bg-background text-foreground min-h-screen">
      <Helmet>
        <title>Blog — Certification Design &amp; Methodology Consulting Insights | Certainly</title>
        <meta name="description" content="Practical guides on building certification programs, documenting proprietary methodologies, designing licensing frameworks, and scaling expert-led businesses." />
        <link rel="canonical" href="https://method.certainly.coop/blog" />
        <meta property="og:title" content="Blog | Certainly" />
        <meta property="og:description" content="Practical guides on certification program design, methodology documentation, and scaling expert-led businesses." />
        <meta property="og:url" content="https://method.certainly.coop/blog" />
        <meta property="og:type" content="website" />
      </Helmet>

      <SiteNav onRequestAssessment={() => setAssessmentOpen(true)} />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <p className="text-xs tracking-[0.3em] uppercase text-accent mb-10">Writing</p>
          </FadeIn>
          <FadeIn delay={200}>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal leading-tight mb-8">
              On Certification.<br />On Method.<br />On Authority.
            </h1>
          </FadeIn>
          <FadeIn delay={400}>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Practical guides for founders and institutions building certification programs, documenting proprietary methodologies, and designing the structures that let expertise scale.
            </p>
          </FadeIn>
        </div>
      </section>

      <Divider />

      {/* Post list */}
      <section className="px-6 py-20 max-w-5xl mx-auto">
        <div className="space-y-0">
          {blogPosts.map((post, i) => (
            <FadeIn key={post.slug} delay={100 * i}>
              <Link
                to={`/blog/${post.slug}`}
                className="group flex flex-col sm:flex-row sm:items-start gap-6 py-10 border-b border-border hover:bg-surface/40 transition-colors px-4 -mx-4 rounded-sm"
              >
                <div className="sm:w-32 shrink-0">
                  <p className="text-xs text-accent tracking-wide uppercase">{post.category}</p>
                  <p className="text-xs text-muted-foreground mt-1">{post.readTime}</p>
                </div>
                <div className="flex-1">
                  <h2 className="font-serif text-xl sm:text-2xl font-normal text-foreground mb-3 group-hover:text-accent transition-colors leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-base text-muted-foreground leading-relaxed mb-4 max-w-2xl">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm text-accent group-hover:gap-3 transition-all">
                    Read article <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Footer */}
      <section className="px-6 py-20 text-center border-t border-border">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <p className="font-serif text-2xl italic text-muted-foreground mb-10">
              Structure precedes scale.
            </p>
            <Button
              asChild
              className="btn-accent-gradient text-accent-foreground rounded-sm px-10 py-4 text-base tracking-wide h-auto"
            >
              <Link to="/">Request a Method Audit</Link>
            </Button>
          </FadeIn>
          <FadeIn delay={300}>
            <Divider />
            <footer className="mt-10 flex flex-col sm:flex-row items-center justify-between text-xs text-muted-foreground">
              <Link to="/"><img src={certainlyLogo} alt="Certainly" className="h-4" /></Link>
              <div className="flex items-center gap-6 mt-4 sm:mt-0">
                <Link to="/systems-of-trust" className="hover:text-foreground transition-colors">Framework</Link>
                <Link to="/glossary" className="hover:text-foreground transition-colors">Glossary</Link>
                <Link to="/blog" className="hover:text-foreground transition-colors">Blog</Link>
              </div>
            </footer>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default Blog;
