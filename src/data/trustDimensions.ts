export interface TrustDimension {
  slug: string;
  title: string;
  numeral: string;
  subtitle: string;
  thesis: string;
  definition: string[];
  diagnosticQuestions: string[];
  strong: string[];
  weak: string[];
  patterns: { title: string; description: string }[];
  connectionTo: { dimension: string; slug: string; description: string };
  connectionFrom: { dimension: string; slug: string; description: string };
  metaTitle: string;
  metaDescription: string;
}

export const trustDimensions: TrustDimension[] = [
  {
    slug: "source",
    title: "Source",
    numeral: "01",
    subtitle: "Where trust originates",
    thesis: "Authority derives from identifiable foundations. Without a credible source, no system of trust can be built.",
    definition: [
      "Every trust system begins with a source — the origin point from which credibility flows. Source is the foundation that determines what can be credibly claimed, taught, assessed, and scaled.",
      "Source takes different forms depending on the context: original research and theory development, demonstrated outcomes over time, institutional backing and governance, or market validation through adoption. The strongest systems draw from multiple sources simultaneously.",
      "The nature of the source constrains the entire system. A methodology grounded in peer-reviewed research supports different claims than one grounded in practitioner experience. Neither is inherently superior — but the system must be designed to match.",
    ],
    diagnosticQuestions: [
      "Can you trace your method's authority to a specific, articulable foundation?",
      "Would a skeptical expert in your domain find your source credible under scrutiny?",
      "Does your source support the specific claims your market positioning makes?",
      "Is your source documented in a form that survives your personal involvement?",
      "Could a third party verify the origins of your methodology independently?",
    ],
    strong: [
      "Claims withstand scrutiny from domain experts and institutional buyers",
      "Pricing reflects earned authority rather than personality-driven marketing",
      "Credentialed professionals can articulate why the method works, not just how",
      "The system attracts serious practitioners, not just followers",
    ],
    weak: [
      "Claims collapse under scrutiny — especially from institutional or enterprise buyers",
      "Pricing depends on founder charisma rather than demonstrable value",
      "Practitioners cannot explain the theoretical basis for what they do",
      "The system attracts fans but repels serious professionals",
    ],
    patterns: [
      {
        title: "Research-backed methodology",
        description: "A building science standard grounded in peer-reviewed health research. The source supports global regulatory adoption because the evidence base is independently verifiable.",
      },
      {
        title: "Outcome-demonstrated method",
        description: "A performance coaching methodology validated through thousands of documented athlete outcomes. The source is empirical — repeatable results, not academic theory.",
      },
      {
        title: "Institutionally-endorsed framework",
        description: "A social equity program backed by a recognized standards body. The institutional endorsement provides source credibility that accelerates market adoption.",
      },
      {
        title: "Market-validated approach",
        description: "A business coaching methodology where source credibility comes from a decade of documented client results and public case studies. Market validation substitutes for academic backing.",
      },
    ],
    connectionTo: {
      dimension: "Transfer",
      slug: "transfer",
      description: "The nature of the source shapes what can be transferred. A well-documented source enables structured knowledge transfer; a poorly documented one creates founder dependency.",
    },
    connectionFrom: {
      dimension: "Risk",
      slug: "risk",
      description: "Risk exposure feeds back into source — reputational damage or governance failures can undermine the very foundation of credibility.",
    },
    metaTitle: "Source: Where Trust Originates | Systems of Trust™ | Method Lab",
    metaDescription: "Authority derives from identifiable foundations. Learn how the Source dimension of trust determines what can be credibly claimed, taught, and scaled.",
  },
  {
    slug: "transfer",
    title: "Transfer",
    numeral: "02",
    subtitle: "How trust moves",
    thesis: "Trust requires a pathway. Without structured transfer, credibility remains locked inside the originator.",
    definition: [
      "Transfer is the mechanism by which trust moves beyond its source. It encompasses documentation, curriculum design, learning structures, assessment frameworks, and all the systems that allow credibility to travel from originator to practitioner to market.",
      "This is where most expert-led businesses break down. The founder can deliver — but the method can't move. Transfer answers a fundamental question: can someone else produce results using your approach without you in the room?",
      "Strong transfer doesn't mean dumbing down. It means making the invisible visible — codifying judgment, structuring decision-making frameworks, and building assessment systems that verify competence rather than completion.",
    ],
    diagnosticQuestions: [
      "Can a trained practitioner deliver your methodology without your direct involvement?",
      "Is your method documented at the level of decision frameworks, not just procedures?",
      "Do your learning structures develop judgment, or just convey information?",
      "Can competence in your method be assessed — not just attendance?",
      "Does your transfer system preserve quality as it scales, or does fidelity degrade?",
    ],
    strong: [
      "Practitioners produce consistent results independent of the founder",
      "Curriculum develops judgment and competence, not just knowledge recall",
      "Assessment verifies real capability — completers can actually do the work",
      "The method scales without quality degradation across geographies and contexts",
    ],
    weak: [
      "Founder dependency persists — only the originator can truly deliver",
      "Training produces awareness but not competence",
      "Completion certificates signal attendance, not verified capability",
      "Quality degrades with each layer of distance from the source",
    ],
    patterns: [
      {
        title: "Curriculum architecture",
        description: "A 12-unit curriculum with 86 modules, structured to transfer not just knowledge but decision-making capability. Each unit builds competence that can be assessed, not just consumed.",
      },
      {
        title: "Assessment-verified transfer",
        description: "A professional credential where practitioners must demonstrate applied competence — not just pass a knowledge exam. Transfer is verified through performance, not recall.",
      },
      {
        title: "Train-the-trainer systems",
        description: "A community leadership program where 424+ facilitators were trained to deliver a methodology with fidelity. Transfer was designed for multi-generational scaling.",
      },
      {
        title: "AI-assisted method capture",
        description: "Using live delivery sessions to extract the invisible architecture of an expert's method — capturing the judgment frameworks that traditional documentation misses.",
      },
    ],
    connectionTo: {
      dimension: "Signal",
      slug: "signal",
      description: "The strength of transfer determines what claims signal can support. You can only signal competence that your transfer system actually produces.",
    },
    connectionFrom: {
      dimension: "Source",
      slug: "source",
      description: "The nature of the source shapes what can be transferred. Research-backed methods transfer differently than experience-based ones.",
    },
    metaTitle: "Transfer: How Trust Moves | Systems of Trust™ | Method Lab",
    metaDescription: "Trust requires a pathway. Learn how the Transfer dimension enables credibility to move beyond the originator through curriculum, assessment, and structured systems.",
  },
  {
    slug: "signal",
    title: "Signal",
    numeral: "03",
    subtitle: "How trust is recognized",
    thesis: "Trust must be legible to function. Without clear signal, competence remains invisible to the market.",
    definition: [
      "Signal is how trust becomes visible to the people who need to recognize it. It encompasses language, positioning, designation systems, verification tools, and every mechanism that allows others to interpret what competence represents.",
      "This dimension bridges the internal system (source and transfer) with the external market. A credential, a designation, a certification mark — these are signal mechanisms. They compress complex competence into recognizable, verifiable claims.",
      "Signal is not marketing. Marketing attracts attention. Signal communicates verified meaning. The distinction matters because signal must be defensible — it represents earned authority, not claimed authority.",
    ],
    diagnosticQuestions: [
      "Can an outsider understand what your credential or designation represents in under 30 seconds?",
      "Does your signal communicate verified competence or just program completion?",
      "Is your designation language distinct, defensible, and free of confusion with adjacent programs?",
      "Can employers, clients, or institutions verify a practitioner's status independently?",
      "Does your signal create market pull — do buyers actively seek credentialed practitioners?",
    ],
    strong: [
      "Employers and clients actively seek credentialed professionals",
      "The designation communicates clear, specific, verified competence",
      "Verification is instant — anyone can confirm a practitioner's status",
      "Market positioning is distinct from adjacent credentials and programs",
    ],
    weak: [
      "Market confusion — buyers don't understand what the credential means",
      "The designation is indistinguishable from dozens of similar-sounding programs",
      "No verification system exists — anyone can claim the credential",
      "Signal attracts price shoppers rather than quality-seeking buyers",
    ],
    patterns: [
      {
        title: "Professional designation system",
        description: "The WELL AP credential created a globally recognized designation that employers, building owners, and regulatory bodies can verify instantly. The signal is clear: this person understands health-focused building standards.",
      },
      {
        title: "Tiered credentialing",
        description: "A coaching certification with distinct levels — each communicating a specific scope of competence. The tiered signal prevents confusion and creates clear progression pathways.",
      },
      {
        title: "Verification infrastructure",
        description: "A digital directory where any employer or client can verify a practitioner's credential status, renewal date, and specialization — making signal trustworthy because it's independently verifiable.",
      },
      {
        title: "Market legibility design",
        description: "Positioning a credential so that it communicates to the right audience without explanation. The name, visual identity, and language system all reinforce what the designation means.",
      },
    ],
    connectionTo: {
      dimension: "Integrity",
      slug: "integrity",
      description: "Signal clarity influences how integrity must be maintained. The stronger your public claims, the more rigorous your governance must be to protect them.",
    },
    connectionFrom: {
      dimension: "Transfer",
      slug: "transfer",
      description: "The strength of transfer determines what claims signal can support. Signal without substance is marketing — signal with verified transfer is authority.",
    },
    metaTitle: "Signal: How Trust Is Recognized | Systems of Trust™ | Method Lab",
    metaDescription: "Trust must be legible to function. Learn how the Signal dimension makes competence visible through designations, verification, and market positioning.",
  },
  {
    slug: "integrity",
    title: "Integrity",
    numeral: "04",
    subtitle: "What protects trust",
    thesis: "Growth introduces pressure. Without structural integrity, trust systems drift, dilute, and eventually collapse.",
    definition: [
      "Integrity is the governance layer that preserves coherence as a trust system grows. It encompasses decision rights, quality controls, renewal requirements, scope boundaries, and the structural disciplines that prevent drift under commercial or operational pressure.",
      "This is the dimension that separates durable institutions from temporary programs. Every trust system faces the same pressure: more demand, more revenue, more practitioners — and with each expansion, more opportunities for the system to compromise itself.",
      "Integrity is not rigidity. It is intentional governance — knowing which decisions require central authority, which can be distributed, and where the boundaries of acceptable variation exist.",
    ],
    diagnosticQuestions: [
      "Who has the authority to modify your standard, curriculum, or assessment criteria?",
      "Do you have documented governance that prevents unilateral changes to core methodology?",
      "Are there renewal or continuing education requirements that maintain practitioner competence over time?",
      "Can you identify where commercial pressure has already caused quality compromises?",
      "Is your governance structure designed for the scale you're targeting, or only for current operations?",
    ],
    strong: [
      "Governance prevents unilateral changes to core methodology under commercial pressure",
      "Renewal cycles maintain practitioner competence — credentials don't become stale",
      "Quality controls scale proportionally with program growth",
      "Decision rights are clear — everyone knows who can change what",
    ],
    weak: [
      "Standards drift — the credential means something different than it did two years ago",
      "Commercial pressure overrides quality decisions (lowering pass rates, waiving requirements)",
      "No renewal system — credentials granted once remain valid indefinitely regardless of competence",
      "Governance is ad hoc — decisions depend on who's in the room, not documented authority",
    ],
    patterns: [
      {
        title: "Governance architecture",
        description: "A certification body with documented decision rights: who can modify the standard, what process changes require, and how conflicts between commercial and quality objectives are resolved.",
      },
      {
        title: "Renewal and continuing education",
        description: "A credential system requiring biennial renewal with documented continuing education — ensuring that the signal remains accurate years after initial certification.",
      },
      {
        title: "Scope boundary enforcement",
        description: "Clear boundaries defining what a credential authorizes and what it does not. A WELL AP can advise on health-focused building design but is not licensed to practice architecture.",
      },
      {
        title: "Quality audit systems",
        description: "Periodic assessment of training delivery, practitioner outcomes, and program fidelity — catching drift before it becomes structural damage.",
      },
    ],
    connectionTo: {
      dimension: "Risk",
      slug: "risk",
      description: "Integrity decisions affect risk concentration. Weak governance creates concentrated points of failure; strong governance distributes and mitigates risk.",
    },
    connectionFrom: {
      dimension: "Signal",
      slug: "signal",
      description: "Signal clarity influences how integrity must be maintained. Public claims create accountability — the stronger the signal, the more governance is required to protect it.",
    },
    metaTitle: "Integrity: What Protects Trust | Systems of Trust™ | Method Lab",
    metaDescription: "Growth introduces pressure. Learn how the Integrity dimension preserves coherence through governance, renewal, and quality controls as trust systems scale.",
  },
  {
    slug: "risk",
    title: "Risk",
    numeral: "05",
    subtitle: "Where trust is vulnerable",
    thesis: "Every trust system carries exposure. Without mapped risk, fragility scales alongside growth.",
    definition: [
      "Risk is the dimension that maps where a trust system is vulnerable. It encompasses operational limits, reputational sensitivity, governance concentration, economic alignment, and every structural exposure that could undermine the system under pressure.",
      "Risk in a trust system is not hypothetical. It is architectural. A program with a single point of governance failure, a credential that depends on one person's judgment, a revenue model that incentivizes volume over quality — these are structural risks that scale alongside the system.",
      "The purpose of mapping risk is not to eliminate it — that's impossible — but to make it intentional. Every design decision creates exposure. The question is whether that exposure is understood, accepted, and mitigated, or whether it remains hidden until it causes damage.",
    ],
    diagnosticQuestions: [
      "What happens to your program if you are personally unavailable for 12 months?",
      "Does your revenue model create incentives that conflict with quality standards?",
      "Is governance concentrated in a single individual or small group without succession planning?",
      "What is your reputational exposure if a credentialed practitioner causes harm?",
      "Can your operational infrastructure handle 10x current volume without structural failure?",
    ],
    strong: [
      "Structural risks are mapped, documented, and actively mitigated",
      "Revenue model aligns with quality incentives — growth doesn't compromise standards",
      "Succession planning exists for all critical governance and operational roles",
      "Reputational exposure is bounded by clear scope, ethics frameworks, and enforcement mechanisms",
    ],
    weak: [
      "Fragility scales — every expansion creates new unmonitored vulnerabilities",
      "Revenue incentives conflict with quality (e.g., pressure to lower pass rates)",
      "Governance depends on a single person with no succession plan",
      "One practitioner failure could undermine the entire system's credibility",
    ],
    patterns: [
      {
        title: "Founder dependency risk",
        description: "A methodology where all authority, curriculum knowledge, and governance reside in a single person. The system has a single point of failure that becomes more costly as it scales.",
      },
      {
        title: "Volume-quality misalignment",
        description: "A certification program where revenue depends on enrollment volume but credibility depends on selectivity. The economic model and the trust model pull in opposite directions.",
      },
      {
        title: "Reputational concentration",
        description: "A credential attached to a personal brand where any controversy involving the founder threatens the entire credentialing system — even if the controversy is unrelated to the methodology.",
      },
      {
        title: "Operational fragility mapping",
        description: "A structured assessment identifying every point where the system could fail at 10x scale — technology limits, staffing gaps, governance bottlenecks, and economic pressure points.",
      },
    ],
    connectionTo: {
      dimension: "Source",
      slug: "source",
      description: "Risk exposure feeds back into source. Unmanaged risk can undermine the very foundation of credibility — a single failure can call the entire source into question.",
    },
    connectionFrom: {
      dimension: "Integrity",
      slug: "integrity",
      description: "Integrity decisions affect risk concentration. Every governance choice either distributes risk or concentrates it.",
    },
    metaTitle: "Risk: Where Trust Is Vulnerable | Systems of Trust™ | Method Lab",
    metaDescription: "Every trust system carries exposure. Learn how the Risk dimension maps vulnerabilities in governance, operations, and economics before they scale.",
  },
];

export const getDimension = (slug: string): TrustDimension | undefined =>
  trustDimensions.find((d) => d.slug === slug);
