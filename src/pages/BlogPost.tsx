import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/FadeIn";
import { blogPosts, BlogSection } from "@/data/blogPosts";
import AssessmentModal from "@/components/AssessmentModal";
import SiteNav from "@/components/SiteNav";
import certainlyLogo from "@/assets/certainly-logo.png";

const Divider = () => <div className="w-full h-px bg-border" />;

const renderSection = (section: BlogSection, i: number) => {
  switch (section.type) {
    case "h2":
      return (
        <FadeIn key={i}>
          <h2 className="font-serif text-2xl sm:text-3xl font-normal mt-14 mb-5 text-foreground">
            {section.content}
          </h2>
        </FadeIn>
      );
    case "h3":
      return (
        <FadeIn key={i}>
          <h3 className="font-serif text-xl font-normal mt-10 mb-4 text-foreground">
            {section.content}
          </h3>
        </FadeIn>
      );
    case "paragraph":
      return (
        <FadeIn key={i}>
          <p className="text-base sm:text-lg text-foreground/80 leading-[1.9] mb-6">
            {section.content}
          </p>
        </FadeIn>
      );
    case "bullet-list":
      return (
        <FadeIn key={i}>
          <ul className="space-y-3 mb-8 mt-2">
            {section.items.map((item, j) => (
              <li key={j} className="flex items-start gap-3 text-base text-foreground/80 leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </FadeIn>
      );
    case "numbered-list":
      return (
        <FadeIn key={i}>
          <ol className="space-y-3 mb-8 mt-2">
            {section.items.map((item, j) => (
              <li key={j} className="flex items-start gap-4 text-base text-foreground/80 leading-relaxed">
                <span className="text-accent font-serif text-sm tabular-nums shrink-0 mt-0.5">
                  {String(j + 1).padStart(2, "0")}
                </span>
                {item}
              </li>
            ))}
          </ol>
        </FadeIn>
      );
    case "callout":
      return (
        <FadeIn key={i}>
          <div className="border-l-2 border-accent pl-6 py-2 my-8">
            <p className="font-serif italic text-lg text-foreground leading-relaxed">
              {section.content}
            </p>
          </div>
        </FadeIn>
      );
    case "divider":
      return <Divider key={i} />;
    default:
      return null;
  }
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [assessmentOpen, setAssessmentOpen] = useState(false);
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return <Navigate to="/blog" replace />;

  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Glossary term cross-links by category
  const glossaryTermsByCategory: Record<string, { id: string; label: string }[]> = {
    "Certification Design": [
      { id: "certification", label: "Certification" },
      { id: "credential", label: "Credential" },
      { id: "standards", label: "Standards" },
      { id: "assessment-evaluation", label: "Assessment" },
      { id: "governance", label: "Governance" },
    ],
    "Methodology": [
      { id: "system-of-trust", label: "System of Trust" },
      { id: "certification", label: "Certification" },
      { id: "credential", label: "Credential" },
      { id: "stewardship", label: "Stewardship" },
      { id: "certification-readiness", label: "Certification Readiness" },
    ],
    "Business Strategy": [
      { id: "system-of-trust", label: "System of Trust" },
      { id: "certification-readiness", label: "Certification Readiness" },
      { id: "certification-ecosystem", label: "Certification Ecosystem" },
      { id: "stewardship", label: "Stewardship" },
      { id: "governance", label: "Governance" },
    ],
  };
  const keyTerms = glossaryTermsByCategory[post.category] ?? [];

  // Related posts: same category, excluding current, max 3
  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);

  // Derive HowTo steps from h2 headings + the first paragraph that follows each
  const isHowTo = post.slug.startsWith("how-to");
  const howToSteps = isHowTo
    ? post.sections.reduce<{ name: string; text: string }[]>((acc, section, i) => {
        if (section.type === "h2") {
          const following = post.sections.slice(i + 1);
          const next = following.find(
            (s) => s.type === "paragraph" || s.type === "numbered-list"
          );
          const text =
            next?.type === "paragraph"
              ? next.content
              : next?.type === "numbered-list"
              ? next.items.join(". ")
              : "";
          if (text) acc.push({ name: section.content, text });
        }
        return acc;
      }, [])
    : [];

  return (
    <div className="bg-background text-foreground min-h-screen">
      <Helmet>
        <title>{post.metaTitle}</title>
        <meta name="description" content={post.metaDescription} />
        <link rel="canonical" href={`https://method.certainly.coop/blog/${post.slug}`} />
        <meta property="og:title" content={post.metaTitle} />
        <meta property="og:description" content={post.metaDescription} />
        <meta property="og:url" content={`https://method.certainly.coop/blog/${post.slug}`} />
        <meta property="og:type" content="article" />
        {post.image && <meta property="og:image" content={post.image} />}
        {post.imageAlt && <meta property="og:image:alt" content={post.imageAlt} />}
        <meta property="article:published_time" content={post.publishedAt} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.metaTitle} />
        <meta name="twitter:description" content={post.metaDescription} />
        {post.image && <meta name="twitter:image" content={post.image} />}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.metaTitle,
          "description": post.metaDescription,
          "datePublished": post.publishedAt,
          "url": `https://method.certainly.coop/blog/${post.slug}`,
          ...(post.image ? { "image": post.image } : {}),
          "author": {
            "@type": "Organization",
            "name": "Certainly",
            "url": "https://method.certainly.coop"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Certainly",
            "url": "https://method.certainly.coop"
          }
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://method.certainly.coop/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://method.certainly.coop/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": `https://method.certainly.coop/blog/${post.slug}` }
          ]
        })}</script>
        {isHowTo && howToSteps.length >= 2 && (
          <script type="application/ld+json">{JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": post.title,
            "description": post.metaDescription,
            "step": howToSteps.map((step, i) => ({
              "@type": "HowToStep",
              "position": i + 1,
              "name": step.name,
              "text": step.text
            }))
          })}</script>
        )}
      </Helmet>

      <SiteNav onRequestAssessment={() => setAssessmentOpen(true)} />

      {/* Article header */}
      <section className="pt-32 pb-12 px-6">
        <div className="max-w-2xl mx-auto">
          <FadeIn>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors tracking-wide mb-12"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back to writing
            </Link>
          </FadeIn>
          <FadeIn delay={100}>
            <div className="flex items-center gap-4 mb-8">
              <span className="text-xs text-accent tracking-wide uppercase">{post.category}</span>
              <span className="text-xs text-muted-foreground">·</span>
              <span className="text-xs text-muted-foreground">{post.readTime}</span>
              <span className="text-xs text-muted-foreground">·</span>
              <span className="text-xs text-muted-foreground">{formattedDate}</span>
            </div>
          </FadeIn>
          <FadeIn delay={200}>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal leading-tight mb-8">
              {post.title}
            </h1>
          </FadeIn>
          <FadeIn delay={300}>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              {post.excerpt}
            </p>
          </FadeIn>
        </div>
      </section>

      <Divider />

      {/* Hero image */}
      {post.image && (
        <FadeIn>
          <div className="max-w-2xl mx-auto px-6 pt-10">
            <div className="relative rounded-sm overflow-hidden">
              <img
                src={post.image}
                alt={post.imageAlt || post.title}
                className="w-full aspect-[16/9] object-cover grayscale"
              />
              <div className="absolute inset-0 bg-accent/10 mix-blend-overlay" />
            </div>
          </div>
        </FadeIn>
      )}

      {/* Article body */}
      <article className="px-6 py-16 max-w-2xl mx-auto">
        {post.sections.map((section, i) => renderSection(section, i))}
      </article>

      <Divider />

      {/* Key Terms */}
      {keyTerms.length > 0 && (
        <FadeIn>
          <section className="px-6 py-10 max-w-2xl mx-auto">
            <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">Key Terms</p>
            <div className="flex flex-wrap gap-2">
              {keyTerms.map((term) => (
                <Link
                  key={term.id}
                  to={`/glossary#${term.id}`}
                  className="px-3 py-1.5 text-xs border border-border rounded-sm text-muted-foreground hover:text-accent hover:border-accent transition-colors tracking-wide"
                >
                  {term.label}
                </Link>
              ))}
            </div>
          </section>
        </FadeIn>
      )}

      {/* CTA */}
      <section className="px-6 py-24 max-w-2xl mx-auto text-center">
        <FadeIn>
          <p className="text-xs tracking-[0.25em] uppercase text-accent mb-6">Work With Certainly</p>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal mb-6 text-foreground">
            Ready to build the structure?
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-10 max-w-xl mx-auto">
            We work with founders and institutions that are already producing results and ready to design the certification, licensing, or governance structure that lets their method scale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="btn-accent-gradient text-accent-foreground rounded-sm px-10 py-4 text-base tracking-wide h-auto"
            >
              <Link to="/">Request a Method Audit</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="rounded-sm px-10 py-4 text-base tracking-wide border-border text-foreground hover:bg-foreground hover:text-background h-auto"
            >
              <Link to="/blog">Read more articles</Link>
            </Button>
          </div>
        </FadeIn>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <>
          <Divider />
          <section className="px-6 py-20 max-w-5xl mx-auto">
            <FadeIn>
              <p className="text-xs tracking-[0.25em] uppercase text-accent mb-10">Related Articles</p>
            </FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map((related, i) => (
                <FadeIn key={related.slug} delay={100 * i}>
                  <Link
                    to={`/blog/${related.slug}`}
                    className="group flex flex-col gap-4 p-6 border border-border rounded-sm hover:bg-surface/40 transition-colors h-full"
                  >
                    {related.image && (
                      <div className="relative rounded-sm overflow-hidden">
                        <img
                          src={related.image}
                          alt={related.imageAlt || related.title}
                          className="w-full aspect-[16/9] object-cover grayscale"
                        />
                        <div className="absolute inset-0 bg-accent/10 mix-blend-overlay" />
                      </div>
                    )}
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-accent tracking-wide uppercase">{related.category}</span>
                      <span className="text-xs text-muted-foreground">·</span>
                      <span className="text-xs text-muted-foreground">{related.readTime}</span>
                    </div>
                    <h3 className="font-serif text-lg font-normal text-foreground group-hover:text-accent transition-colors leading-snug">
                      {related.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1 line-clamp-3">
                      {related.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-2 text-sm text-accent group-hover:gap-3 transition-all mt-auto">
                      Read article <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </section>
        </>
      )}

      {/* Footer */}
      <div className="border-t border-border">
        <footer className="px-6 py-10 max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between text-xs text-muted-foreground">
          <Link to="/"><img src={certainlyLogo} alt="Certainly" className="h-4" /></Link>
          <div className="flex items-center gap-6 mt-4 sm:mt-0">
            <Link to="/systems-of-trust" className="hover:text-foreground transition-colors">Framework</Link>
            <Link to="/glossary" className="hover:text-foreground transition-colors">Glossary</Link>
            <Link to="/blog" className="hover:text-foreground transition-colors">Blog</Link>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default BlogPost;
