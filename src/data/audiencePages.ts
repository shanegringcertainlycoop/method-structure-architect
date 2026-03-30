export interface AudiencePage {
  slug: string;
  label: string;
  metaTitle: string;
  metaDescription: string;
  heroLabel: string;
  h1: string;
  heroSubtitle: string;
  painPoints: { title: string; description: string }[];
  solutionHeading: string;
  solutionParagraphs: string[];
  trustDimensions: { slug: string; title: string; relevance: string }[];
  engagementLevels: { title: string; level: string; description: string; to: string }[];
  caseStudy: {
    slug: string;
    title: string;
    teaser: string;
    stats: { value: string; label: string }[];
  };
  faqs: { q: string; a: string }[];
  ctaHeading: string;
  ctaBody: string;
  ctaButtonText: string;
}

export const audiencePages: AudiencePage[] = [
  {
    slug: "consultants",
    label: "Consultants & Advisors",
    metaTitle: "For Consultants & Advisors | Method Lab",
    metaDescription:
      "Turn your proprietary consulting methodology into a certifiable, licensable system. Method Lab helps consultants structure expertise for scale without losing quality.",
    heroLabel: "FOR CONSULTANTS & ADVISORS",
    h1: "Turn Your Methodology Into a Certifiable, Licensable System",
    heroSubtitle:
      "You've built a consulting practice on a method that works. But your expertise lives in your head — and that limits what you can charge, who you can serve, and how far you can grow.",
    painPoints: [
      {
        title: "Founder dependency",
        description:
          "Every engagement requires your personal involvement. You can't step away without quality degrading.",
      },
      {
        title: "Pricing ceiling",
        description:
          "Your rates are capped by billable hours. There's no leverage in the model — just more of your time.",
      },
      {
        title: "No defensible IP",
        description:
          "Competitors reverse-engineer your approach. Without structured, documented methodology, you have no moat.",
      },
      {
        title: "Scaling means dilution",
        description:
          "You've tried hiring associates, but they deliver a watered-down version of what you do.",
      },
    ],
    solutionHeading: "From Expert to Architect",
    solutionParagraphs: [
      "Method Lab works with consultants who have already proven their methodology in the field. We don't help you create a method — we help you structure the one you already have so it can be captured, transferred, certified, and licensed.",
      "The process begins with Method Capture — extracting the invisible architecture of your expertise: the decision frameworks, the diagnostic instincts, the judgment calls that make your approach work. We codify what you do into a system that others can learn, practice, and be assessed against.",
      "From there, we build the trust infrastructure: governance, assessment design, credential architecture, and market positioning. The result is a methodology that scales through certified practitioners — not through more of your time.",
    ],
    trustDimensions: [
      {
        slug: "source",
        title: "Source",
        relevance: "Your consulting outcomes and client results are the foundation of credibility.",
      },
      {
        slug: "transfer",
        title: "Transfer",
        relevance:
          "Codifying your method so others can deliver it with the same quality you do.",
      },
      {
        slug: "signal",
        title: "Signal",
        relevance:
          "A credential that tells the market your certified practitioners are the real thing.",
      },
    ],
    engagementLevels: [
      {
        title: "Method Capture™",
        level: "Level 1",
        description: "Extract and formalize your methodology into a structured, transferable system.",
        to: "/method-capture",
      },
      {
        title: "Systems Strategy Sprint™",
        level: "Level 2",
        description: "Design your certification architecture, governance model, and go-to-market strategy.",
        to: "/strategy-sprint",
      },
      {
        title: "Trust Building Artifacts™",
        level: "Level 3",
        description:
          "Build the curriculum, assessments, and brand infrastructure to launch your credential.",
        to: "/trust-building-artifacts",
      },
    ],
    caseStudy: {
      slug: "drvn",
      title: "How DRVN Turned a Founder-Led Method Into a Scalable System of Trust",
      teaser:
        "A performance golf methodology built on thousands of athlete outcomes — structured into a certifiable system that scales beyond the founder.",
      stats: [
        { value: "1,000+", label: "Athletes Trained" },
        { value: "12", label: "Curriculum Units" },
        { value: "86", label: "Modules Designed" },
      ],
    },
    faqs: [
      {
        q: "How long does it take to go from consulting method to certification program?",
        a: "It depends on the complexity of your method and the readiness of your documentation. A typical path from Method Capture through launch takes 4–8 months. The first phase — extracting and structuring your methodology — usually takes 4–8 weeks.",
      },
      {
        q: "Do I need to stop consulting while we build this?",
        a: "No. In fact, active client work is an asset during Method Capture. We use your live engagements to extract the invisible architecture of your approach — the judgment calls and decision frameworks that traditional documentation misses.",
      },
      {
        q: "What if my method isn't fully documented yet?",
        a: "That's exactly where Method Capture starts. Most expert consultants have never formalized what they do — the method lives in their head. We extract, structure, and codify it into a transferable system.",
      },
      {
        q: "Can I license my methodology instead of (or in addition to) certifying practitioners?",
        a: "Yes. Certification and licensing serve different strategic purposes. Certification verifies competence in individuals. Licensing grants the right to use your methodology under defined terms. We help you choose — or combine — the right mechanisms for your goals.",
      },
    ],
    ctaHeading: "Your method already works. Let's make it scale.",
    ctaBody:
      "Request a Method Audit to understand how your consulting methodology maps to the five dimensions of trust — and what it would take to certify it.",
    ctaButtonText: "Request a Method Audit",
  },
  {
    slug: "credentialing-organizations",
    label: "Credentialing Organizations",
    metaTitle: "For Credentialing Organizations | Method Lab",
    metaDescription:
      "Strengthen, evolve, and scale your credentialing programs. Method Lab helps standards bodies and certification organizations build durable systems of trust.",
    heroLabel: "FOR CREDENTIALING ORGANIZATIONS",
    h1: "Strengthen, Evolve, and Scale Your Credentialing Programs",
    heroSubtitle:
      "You've built a credential that matters. But maintaining rigor while scaling globally — across jurisdictions, cultures, and market pressures — requires architectural discipline most organizations learn the hard way.",
    painPoints: [
      {
        title: "Standards drift",
        description:
          "Your credential means something different than it did three years ago. Commercial pressure has slowly eroded rigor.",
      },
      {
        title: "Governance gaps",
        description:
          "Decision rights are unclear. Changes to the standard happen ad hoc rather than through documented authority.",
      },
      {
        title: "Assessment misalignment",
        description:
          "Your exams test knowledge recall, not applied competence. Credentialed professionals can pass the test but struggle in practice.",
      },
      {
        title: "Renewal theater",
        description:
          "Continuing education requirements exist on paper but don't meaningfully maintain practitioner competence over time.",
      },
    ],
    solutionHeading: "From Credential to System of Trust",
    solutionParagraphs: [
      "Method Lab partners with credentialing organizations that have already built something real — and need to make it structurally sound for the next decade of growth. We don't build credentials from scratch. We strengthen the ones that already exist.",
      "Our work begins with a Trust Architecture Review — a diagnostic that maps your credential across all five dimensions of trust: Source, Transfer, Signal, Integrity, and Risk. This reveals where your system is strong, where it's vulnerable, and where growth will create pressure you haven't anticipated.",
      "From there, we engage at the level that matches your need: governance redesign, assessment architecture, curriculum modernization, or full fractional credential operations. Every engagement is designed to make your credentialing system more defensible, not just more scalable.",
    ],
    trustDimensions: [
      {
        slug: "integrity",
        title: "Integrity",
        relevance:
          "Governance structures that prevent standards drift under commercial pressure.",
      },
      {
        slug: "risk",
        title: "Risk",
        relevance:
          "Mapping where your credentialing system is vulnerable as it scales globally.",
      },
      {
        slug: "transfer",
        title: "Transfer",
        relevance:
          "Ensuring your curriculum develops competence, not just knowledge recall.",
      },
    ],
    engagementLevels: [
      {
        title: "Trust Architecture™ Review",
        level: "Level 0",
        description:
          "Diagnostic assessment of your credential across all five trust dimensions.",
        to: "/trust-architecture-review",
      },
      {
        title: "Systems Strategy Sprint™",
        level: "Level 2",
        description:
          "Redesign governance, assessment architecture, or market positioning.",
        to: "/strategy-sprint",
      },
      {
        title: "Fractional Credential Operations™",
        level: "Level 4",
        description:
          "Ongoing strategic and operational support for your credentialing programs.",
        to: "/fractional-credential-operations",
      },
    ],
    caseStudy: {
      slug: "well-ap",
      title: "How a Credential Became a Global Movement",
      teaser:
        "The WELL AP credential transformed IWBI from a standard-setting body into a global workforce development engine — creating 20,000+ credentialed professionals across 120 countries.",
      stats: [
        { value: "20K+", label: "WELL APs Worldwide" },
        { value: "120+", label: "Countries" },
        { value: "$50M+", label: "Revenue Generated" },
      ],
    },
    faqs: [
      {
        q: "We already have a credentialing program. How is this different from what we've built?",
        a: "We don't replace what you've built — we strengthen it. Most credentialing organizations have strong Source (the knowledge base) but gaps in Transfer (assessment design), Integrity (governance), or Risk (structural vulnerability). We diagnose and address those gaps specifically.",
      },
      {
        q: "Can you help us redesign our assessment without disrupting current credential holders?",
        a: "Yes. We design transition strategies that maintain the validity of existing credentials while raising the bar for new ones. This is a governance and communication challenge as much as a technical one — and it's core to what we do.",
      },
      {
        q: "What's the difference between Method Lab and a traditional credentialing consultant?",
        a: "Traditional consultants focus on compliance and process. We focus on trust architecture — the structural design that makes a credential defensible, durable, and valuable. We ask different questions: not just 'does this meet standards?' but 'will this earn trust at scale?'",
      },
      {
        q: "How do you work with our existing governance board?",
        a: "We work within your existing governance structure. Our role is to provide the architectural thinking and operational discipline that strengthens decision-making — not to replace the people making decisions.",
      },
    ],
    ctaHeading: "Your credential already has authority. Let's make it structural.",
    ctaBody:
      "Request a Trust Architecture Review to understand how your credentialing program maps across all five dimensions — and where to focus next.",
    ctaButtonText: "Request a Trust Architecture Review",
  },
  {
    slug: "coaches",
    label: "Coaches & Trainers",
    metaTitle: "For Coaches & Trainers | Method Lab",
    metaDescription:
      "Scale your performance method beyond yourself. Method Lab helps coaches, trainers, and educators structure their methodology into certifiable, transferable systems.",
    heroLabel: "FOR COACHES & TRAINERS",
    h1: "Scale Your Performance Method Beyond Yourself",
    heroSubtitle:
      "You've developed a method that produces results. Your clients see the difference. But right now, your method can't exist without you — and that's the ceiling on everything: revenue, reach, and legacy.",
    painPoints: [
      {
        title: "You are the bottleneck",
        description:
          "Every session, every assessment, every quality check requires your direct involvement. Growth means more hours, not more impact.",
      },
      {
        title: "Imitators without understanding",
        description:
          "Others copy your techniques but miss the underlying principles. Your method gets diluted in the market without your involvement.",
      },
      {
        title: "No succession path",
        description:
          "If you step away, the method stops. There's no system for training others to deliver with your level of quality.",
      },
      {
        title: "Revenue tied to presence",
        description:
          "You can't earn from your method unless you're personally delivering. There's no leverage, no licensing, no scale.",
      },
    ],
    solutionHeading: "From Practitioner to Method Architect",
    solutionParagraphs: [
      "Method Lab works with coaches and trainers who have already proven their approach through results — documented outcomes, client transformations, measurable performance improvements. We don't help you invent a method. We help you structure the one you've already validated.",
      "Method Capture extracts what makes your approach unique: the sequencing decisions, the assessment instincts, the adaptation frameworks that produce results. We turn implicit expertise into explicit architecture — a system that can be taught, assessed, and certified.",
      "The result is a certification program that creates practitioners who can deliver your method with fidelity. Not clones of you — but competent professionals who understand the principles well enough to apply them in context. Your method scales through quality, not dilution.",
    ],
    trustDimensions: [
      {
        slug: "source",
        title: "Source",
        relevance:
          "Your demonstrated outcomes and practitioner results establish the credibility foundation.",
      },
      {
        slug: "transfer",
        title: "Transfer",
        relevance:
          "Designing curriculum that develops judgment and competence, not just technique knowledge.",
      },
      {
        slug: "risk",
        title: "Risk",
        relevance:
          "Ensuring your method's reputation is protected as others deliver it in your name.",
      },
    ],
    engagementLevels: [
      {
        title: "Method Capture™",
        level: "Level 1",
        description:
          "Extract your coaching methodology into a structured, teachable system.",
        to: "/method-capture",
      },
      {
        title: "Systems Strategy Sprint™",
        level: "Level 2",
        description:
          "Design the certification program, assessment criteria, and practitioner pathway.",
        to: "/strategy-sprint",
      },
      {
        title: "Trust Building Artifacts™",
        level: "Level 3",
        description:
          "Build curriculum, assessments, and brand infrastructure for your certification.",
        to: "/trust-building-artifacts",
      },
    ],
    caseStudy: {
      slug: "drvn",
      title: "How DRVN Turned a Founder-Led Method Into a Scalable System of Trust",
      teaser:
        "A performance golf methodology with thousands of documented athlete outcomes — structured into a 12-unit curriculum with 86 modules and a certifiable practitioner pathway.",
      stats: [
        { value: "1,000+", label: "Athletes Trained" },
        { value: "12", label: "Curriculum Units" },
        { value: "86", label: "Modules Designed" },
      ],
    },
    faqs: [
      {
        q: "I'm a solo coach. Is this too early for me?",
        a: "Not if you have documented results. Method Lab works with coaches who have already proven their approach — even if it's not yet formalized. The question isn't how big your business is. It's whether your method produces repeatable results that others could learn to deliver.",
      },
      {
        q: "How is this different from creating an online course?",
        a: "An online course transfers information. A certification system transfers competence — and verifies it. The difference is assessment, governance, and quality control. Certified practitioners can actually do the work, not just recall the content.",
      },
      {
        q: "Will certified practitioners compete with me?",
        a: "They'll expand your market, not cannibalize it. As the method architect and certifying authority, you occupy a different position than practitioners. You set the standard, govern quality, and earn from every certification — a fundamentally different business model than competing on delivery.",
      },
      {
        q: "What if my method is more intuitive than systematic?",
        a: "That's exactly the challenge Method Capture is designed to solve. Most expert practitioners can't articulate why their approach works — they just do it. We use structured extraction techniques to surface the invisible frameworks behind your intuition.",
      },
    ],
    ctaHeading: "Your method produces results. Let's make them transferable.",
    ctaBody:
      "Request a Method Audit to understand how your coaching methodology can be structured for certification — and what the path looks like.",
    ctaButtonText: "Request a Method Audit",
  },
  {
    slug: "organizations",
    label: "Organizations & Institutions",
    metaTitle: "For Organizations & Institutions | Method Lab",
    metaDescription:
      "Certify and scale your organization's proprietary methods. Method Lab helps institutional leaders build durable systems of trust around internal methodologies.",
    heroLabel: "FOR ORGANIZATIONS & INSTITUTIONS",
    h1: "Certify and Scale Your Organization's Proprietary Methods",
    heroSubtitle:
      "Your organization has developed proprietary methodologies that drive results. But those methods are locked inside institutional knowledge — vulnerable to turnover, inconsistent in delivery, and impossible to scale beyond your walls.",
    painPoints: [
      {
        title: "Institutional knowledge loss",
        description:
          "When senior leaders leave, critical methodology walks out the door. There's no system for preserving what your organization actually knows.",
      },
      {
        title: "Inconsistent delivery",
        description:
          "Different teams deliver your methodology differently. There's no standard for what 'good' looks like — just tribal knowledge and best guesses.",
      },
      {
        title: "No external leverage",
        description:
          "Your methodology could be a revenue stream — through licensing, certification, or partnership — but it's not structured for external use.",
      },
      {
        title: "Quality at scale",
        description:
          "As you grow, methodology quality degrades. New hires learn from other new hires, and the original standard becomes a distant memory.",
      },
    ],
    solutionHeading: "From Internal Knowledge to Institutional Standard",
    solutionParagraphs: [
      "Method Lab works with organizations that have developed proprietary methodologies through years of practice — and need to preserve, standardize, and potentially externalize that intellectual capital. We treat internal methodology with the same architectural rigor as external credentialing.",
      "Our process maps your methodology across the five dimensions of trust: Where does authority originate? How is knowledge transferred to new team members? What signals competence internally and externally? What governance prevents drift? Where is the system vulnerable?",
      "The outcome depends on your goals: internal certification programs for workforce development, external credentialing for market expansion, or licensing frameworks for partner ecosystems. In every case, the foundation is the same — a structurally sound methodology that can withstand growth, turnover, and market pressure.",
    ],
    trustDimensions: [
      {
        slug: "transfer",
        title: "Transfer",
        relevance:
          "Structuring internal methodology so new team members develop competence, not just awareness.",
      },
      {
        slug: "integrity",
        title: "Integrity",
        relevance:
          "Governance that prevents methodology drift across teams, regions, and leadership changes.",
      },
      {
        slug: "signal",
        title: "Signal",
        relevance:
          "Internal designations and external credentials that communicate verified competence.",
      },
    ],
    engagementLevels: [
      {
        title: "Trust Architecture™ Review",
        level: "Level 0",
        description:
          "Diagnostic assessment of your organization's methodology across all five trust dimensions.",
        to: "/trust-architecture-review",
      },
      {
        title: "Method Capture™",
        level: "Level 1",
        description:
          "Extract and formalize your organization's proprietary methodology.",
        to: "/method-capture",
      },
      {
        title: "Fractional Credential Operations™",
        level: "Level 4",
        description:
          "Ongoing strategic support for your internal or external credentialing programs.",
        to: "/fractional-credential-operations",
      },
    ],
    caseStudy: {
      slug: "advance",
      title: "How USGBC Turned a Social Equity Vision Into a National System of Trust",
      teaser:
        "A national organization needed to turn an internal equity framework into a scalable, community-led credentialing system — with 424+ trained facilitators.",
      stats: [
        { value: "424+", label: "Facilitators Trained" },
        { value: "100+", label: "Communities Reached" },
        { value: "National", label: "Scale" },
      ],
    },
    faqs: [
      {
        q: "Can you work with our internal teams, or do you need to lead the process?",
        a: "We're designed to work alongside your teams. Our role is to provide the architectural discipline and credential design expertise — your subject matter experts remain central to the methodology itself. We structure what they know.",
      },
      {
        q: "We want to certify external partners in our methodology. Is that realistic?",
        a: "Yes — if your methodology is structured for it. External certification requires a higher bar of documentation, assessment design, and governance than internal training. That's exactly what we build. The WELL AP credential is an example of this done at global scale.",
      },
      {
        q: "How do you handle proprietary or sensitive methodology?",
        a: "We work under NDA as standard practice. Our process is designed to structure and protect intellectual property — not expose it. The governance frameworks we build include IP protection as a core design consideration.",
      },
      {
        q: "What's the ROI of formalizing internal methodology?",
        a: "Direct ROI comes from reduced onboarding time, lower knowledge-loss risk, and consistent delivery quality. If you externalize through certification or licensing, the revenue potential is substantial — our credentialing clients have generated tens of millions in credential-related revenue.",
      },
    ],
    ctaHeading: "Your methodology is an asset. Let's treat it like one.",
    ctaBody:
      "Request a Trust Architecture Review to understand how your organization's methodology maps across the five dimensions of trust — and what formalization would look like.",
    ctaButtonText: "Request a Trust Architecture Review",
  },
];

export const getAudiencePage = (slug: string): AudiencePage | undefined =>
  audiencePages.find((a) => a.slug === slug);
