export type BlogSection =
  | { type: "paragraph"; content: string }
  | { type: "h2"; content: string }
  | { type: "h3"; content: string }
  | { type: "bullet-list"; items: string[] }
  | { type: "numbered-list"; items: string[] }
  | { type: "callout"; content: string }
  | { type: "divider" };

export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  publishedAt: string;
  readTime: string;
  category: string;
  excerpt: string;
  sections: BlogSection[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-build-a-certification-program",
    title: "How to Build a Certification Program Around Your Methodology",
    metaTitle: "How to Build a Certification Program Around Your Methodology | Certainly",
    metaDescription: "A step-by-step guide to designing a certification program for your proprietary methodology — covering documentation, standards, assessment, governance, and launch.",
    publishedAt: "2026-02-25",
    readTime: "12 min read",
    category: "Certification Design",
    excerpt: "If you've built a methodology that produces consistent results, you've already done the hard part. The question isn't whether your work is worth certifying — it's whether you've built the structure that makes certification possible.",
    sections: [
      {
        type: "paragraph",
        content: "If you've built a methodology that produces consistent results, you've already done the hard part. The question isn't whether your work is worth certifying — it's whether you've built the structure that makes certification possible.",
      },
      {
        type: "paragraph",
        content: "This guide walks through what a real certification program requires, how to build one step by step, and where most methodologies fall short before they ever launch.",
      },
      {
        type: "h2",
        content: "What a Certification Program Actually Is",
      },
      {
        type: "paragraph",
        content: "Before building anything, it helps to be precise about what you're building. A certification is not a course. It is not a badge for completing a training. It is not a record of attendance.",
      },
      {
        type: "paragraph",
        content: "A certification is a governed permission system. It grants individuals the right to represent, apply, or teach a method under defined conditions — and it can be revoked if those conditions are violated.",
      },
      {
        type: "paragraph",
        content: "Three things distinguish a real certification from a certificate of completion:",
      },
      {
        type: "numbered-list",
        items: [
          "Assessment — competence is evaluated, not just attendance recorded",
          "Renewal — credentials expire and must be maintained",
          "Governance — someone is responsible for enforcement and standards over time",
        ],
      },
      {
        type: "callout",
        content: "If there is no governance and no renewal, you have a training program — not a certification. This distinction matters because the market has learned to tell the difference.",
      },
      {
        type: "h2",
        content: "What You Need Before You Can Certify",
      },
      {
        type: "paragraph",
        content: "Most founders try to build a certification program too early. They have a method that works — but it lives primarily in their head, delivered through judgment and intuition that hasn't been made explicit yet. Before you can certify anyone else, five things need to exist:",
      },
      {
        type: "numbered-list",
        items: [
          "A documented method — not just in your head, but in writing, with enough detail that someone else could follow it",
          "Defined competence standards — a clear answer to the question: what does 'qualified' actually mean for this method?",
          "An assessment system — a way to verify that candidates actually meet the standard",
          "A governance structure — who decides what the standard is, who enforces it, and what happens when it's violated",
          "A business model — how the credential sustains itself financially over time",
        ],
      },
      {
        type: "paragraph",
        content: "If any of these five are missing, you don't have a certification program yet — you have the beginning of one. The work is to close those gaps before you invite the market in.",
      },
      {
        type: "h2",
        content: "Step 1: Capture and Document Your Methodology",
      },
      {
        type: "paragraph",
        content: "Documentation is where most certification efforts stall. Founders understand their method intuitively — they've delivered it hundreds of times — but when asked to write it down in enough detail that another practitioner could replicate it, the gaps become visible.",
      },
      {
        type: "paragraph",
        content: "Useful methodology documentation answers three questions:",
      },
      {
        type: "bullet-list",
        items: [
          "What are the core principles that explain why this method works?",
          "What are the steps, phases, or components that define how it's delivered?",
          "What decisions does a practitioner need to make, and how should they make them?",
        ],
      },
      {
        type: "paragraph",
        content: "The goal is not to write a manual. The goal is to convert implicit judgment into explicit decision logic — so that someone else can learn it, apply it, and produce comparable outcomes.",
      },
      {
        type: "h2",
        content: "Step 2: Define What 'Qualified' Actually Means",
      },
      {
        type: "paragraph",
        content: "This is the step most programs skip — and it's the one that determines whether the credential means anything. Competence standards are the documented expectations that define what it means to be qualified to deliver your method.",
      },
      {
        type: "paragraph",
        content: "Standards should answer:",
      },
      {
        type: "bullet-list",
        items: [
          "What knowledge must a certified practitioner demonstrate?",
          "What skills or capabilities must they be able to show?",
          "What outcomes should they be able to produce?",
          "What is outside the scope of what they're permitted to do?",
        ],
      },
      {
        type: "paragraph",
        content: "Without standards, certification becomes subjective. You end up certifying people based on feel — which means the credential has no defensible meaning, and the market will eventually notice.",
      },
      {
        type: "h2",
        content: "Step 3: Design Your Assessment System",
      },
      {
        type: "paragraph",
        content: "Once you know what qualified means, you can design a system to verify it. Assessment is the mechanism that turns standards into observable, auditable decisions.",
      },
      {
        type: "paragraph",
        content: "Common assessment formats for professional certifications include:",
      },
      {
        type: "bullet-list",
        items: [
          "Knowledge exams — testing understanding of the method's principles and application",
          "Case reviews or practicum submissions — evaluating how candidates apply the method in real scenarios",
          "Supervised practice or observed delivery — direct assessment of practitioner competence",
          "Portfolio review — evaluating documented evidence of applied work over time",
        ],
      },
      {
        type: "paragraph",
        content: "The right assessment format depends on what your standards require. If your method requires judgment under uncertainty, a multiple-choice exam won't tell you whether someone is qualified. Design the assessment around the actual competence, not around what's easy to administer.",
      },
      {
        type: "h2",
        content: "Step 4: Build Governance",
      },
      {
        type: "paragraph",
        content: "Governance is the structure that allows your certification to maintain its meaning over time. It answers: who decides what the standard is, who enforces it, and what happens when someone violates it?",
      },
      {
        type: "paragraph",
        content: "At minimum, your governance structure needs to define:",
      },
      {
        type: "bullet-list",
        items: [
          "Decision rights — who has authority over standards, assessments, and exceptions",
          "Renewal requirements — what certified practitioners must do to maintain their credential",
          "Enforcement mechanisms — what constitutes a violation and what the consequences are",
          "Version control — how the standard evolves without invalidating existing credential holders",
        ],
      },
      {
        type: "callout",
        content: "Governance is not bureaucracy. It is the infrastructure that protects the value of your credential as you scale. Without it, the certification means whatever the most recent cohort was told it means — which is nothing defensible.",
      },
      {
        type: "h2",
        content: "Step 5: Pilot Before You Scale",
      },
      {
        type: "paragraph",
        content: "The single most common mistake in certification program development is skipping the pilot. Founders announce the credential, attract applicants, and discover that the assessment doesn't work, the operations aren't ready, or the standards don't hold under real-world conditions.",
      },
      {
        type: "paragraph",
        content: "A well-designed pilot serves three purposes:",
      },
      {
        type: "numbered-list",
        items: [
          "It tests whether your standards and assessment actually identify qualified practitioners",
          "It reveals operational gaps before they create reputational exposure",
          "It generates your first cohort of certified practitioners — who become proof that the credential is real",
        ],
      },
      {
        type: "paragraph",
        content: "A pilot doesn't need to be large. Ten to thirty carefully selected participants, evaluated rigorously, will tell you more than a hundred people who paid to take an unvalidated exam.",
      },
      {
        type: "h2",
        content: "How Long Does This Take?",
      },
      {
        type: "paragraph",
        content: "A realistic timeline from serious start to pilot launch is six to eighteen months, depending on the maturity of your methodology documentation and the complexity of your assessment design.",
      },
      {
        type: "bullet-list",
        items: [
          "Methodology documentation and standards definition: 4–8 weeks",
          "Assessment design and governance architecture: 6–10 weeks",
          "Pilot design, recruitment, and delivery: 8–12 weeks",
          "Review, refinement, and public launch: 4–6 weeks",
        ],
      },
      {
        type: "paragraph",
        content: "Organizations that try to compress this timeline typically do so by skipping documentation or governance — and they pay for it later when the credential's meaning is challenged or the operations break under modest scale.",
      },
      {
        type: "h2",
        content: "When You're Ready — and When You're Not",
      },
      {
        type: "paragraph",
        content: "You're ready to build a certification program when:",
      },
      {
        type: "bullet-list",
        items: [
          "Your method has produced consistent, observable results with multiple clients",
          "You can articulate why it works, not just that it works",
          "There is genuine market demand for a credential — not just your belief that there should be",
          "You have the operational capacity to govern and administer the program over time",
        ],
      },
      {
        type: "paragraph",
        content: "You're not ready when:",
      },
      {
        type: "bullet-list",
        items: [
          "The method still lives primarily in your head and hasn't been written down",
          "You're using a certification to create demand for a method that hasn't proven itself",
          "You want to launch quickly and figure out the standards later",
          "You don't have the infrastructure to renew, govern, or revoke credentials",
        ],
      },
      {
        type: "callout",
        content: "A premature certification damages more than it builds. If the credential doesn't hold up under scrutiny, the reputational cost falls on the method itself — not just the program.",
      },
      {
        type: "h2",
        content: "The Difference Between Doing This Yourself and Getting It Right",
      },
      {
        type: "paragraph",
        content: "Most founders who attempt to build certification programs on their own get stuck at documentation or governance. The methodology capture feels too close to see clearly. The standards feel obvious until you try to write them down. The governance feels premature until the first enforcement situation arrives.",
      },
      {
        type: "paragraph",
        content: "The firms that build durable certification programs — ones that hold up at scale and command genuine market recognition — treat this as an architectural problem, not a marketing project. They invest in getting the structure right before they invest in getting the word out.",
      },
      {
        type: "paragraph",
        content: "That's the work. And it's worth doing right.",
      },
    ],
  },
];
