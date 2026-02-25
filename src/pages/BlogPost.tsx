import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/FadeIn";
import { blogPosts, BlogSection } from "@/data/blogPosts";
import certainlyLogo from "@/assets/certainly-logo.png";

const Divider = () => <div className="w-full h-px bg-border" />;

const Nav = () => (
  <nav className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center border-b border-border bg-background/80 backdrop-blur-sm">
    <div className="flex items-center gap-8">
      <Link to="/"><img src={certainlyLogo} alt="Certainly" className="h-8" /></Link>
      <Link to="/blog" className="text-xs text-muted-foreground hover:text-foreground transition-colors tracking-wide"><Link to="/blog" className="text-xs text-muted-foreground hover:text-foreground transition-colors tracking-wide">Musings</Link></Link>
    </div>
    <Button
      asChild
      size="sm"
      className="btn-accent-gradient text-accent-foreground rounded-sm text-xs tracking-wide"
    >
      <Link to="/">Request a Method Audit</Link>
    </Button>
  </nav>
);

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
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return <Navigate to="/blog" replace />;

  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

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
        <meta property="article:published_time" content={post.publishedAt} />
        <meta name="twitter:title" content={post.metaTitle} />
        <meta name="twitter:description" content={post.metaDescription} />
      </Helmet>

      <Nav />

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

      {/* Article body */}
      <article className="px-6 py-16 max-w-2xl mx-auto">
        {post.sections.map((section, i) => renderSection(section, i))}
      </article>

      <Divider />

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
