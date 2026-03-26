export interface CaseStudyStat {
  value: string;
  label: string;
}

export interface CaseStudyQuote {
  text: string;
  author: string;
  role: string;
}

export interface CaseStudyChallenge {
  context: string[];
  specificChallenges: string[];
}

export interface CaseStudyPillar {
  title: string;
  description: string;
  bullets: string[];
  without: string;
}

export interface CaseStudyImpactStat {
  value: string;
  label: string;
  description: string;
}

export interface CaseStudyOutcome {
  title: string;
  bullets: string[];
}

export interface CaseStudyComparison {
  typical: string;
  system: string;
}

export interface CaseStudyTimelineStep {
  stage: string;
  description: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  metaTitle: string;
  metaDescription: string;
  heroStats?: CaseStudyStat[];
  challengeQuote?: CaseStudyQuote;
  challenge: CaseStudyChallenge;
  pillars: CaseStudyPillar[];
  whyItMatters: {
    forClient: { title: string; bullets: string[] };
    forPractitioners: { title: string; bullets: string[] };
    forIndustry: { title: string; bullets: string[] };
  };
  impactStats: CaseStudyImpactStat[];
  outcomes: CaseStudyOutcome[];
  testimonial: CaseStudyQuote;
  comparison: CaseStudyComparison[];
  timeline: CaseStudyTimelineStep[];
  biggerPictureQuote: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "well-ap",
    title: "How a Credential Became a Global Movement",
    subtitle:
      "The WELL AP credential transformed IWBI from a standard-setting body into a global workforce development engine -- creating 20,000+ credentialed professionals across 120 countries.",
    metaTitle:
      "WELL AP Case Study -- How a Credential Became a Global Movement | Certainly",
    metaDescription:
      "How Certainly helped IWBI build the WELL AP credential into a System of Trust that created 20,000+ credentialed professionals across 120 countries.",
    heroStats: [
      { value: "20K+", label: "WELL APs Worldwide" },
      { value: "120+", label: "Countries" },
      { value: "$M+", label: "Recurring Revenue" },
      { value: "500+", label: "WELL Faculty" },
    ],
    challengeQuote: {
      text: "WELL AP became a gateway -- not just to proficiency, but to participation in a global health movement.",
      author: "Prateek Khanna",
      role: "COO, IWBI",
    },
    challenge: {
      context: [
        "When IWBI launched the WELL Building Standard, project registrations surged 300% in the first 18 months. But fewer than 5% of architecture, engineering, and construction (AEC) professionals had formal training in occupant health -- and IWBI was fielding hundreds of technical inquiries each month.",
        "The standard was generating excitement across industries. Corporate real estate teams, healthcare systems, and governments were all exploring WELL. But enthusiasm without competence creates risk -- for both the standard and the people trying to implement it.",
        "Without a credentialed workforce, WELL risked becoming admired -- but not adopted.",
      ],
      specificChallenges: [
        'Building owners asking "Who can help us implement this?" -- with no reliable way to verify competence',
        "Designers and engineers eager to learn WELL but no structured pathway from interest to proficiency",
        "Enterprises requiring a standard for evaluating team readiness -- beyond self-reported experience",
        "A 400-page standard that needed a delivery mechanism -- not another training product, but a System of Trust",
      ],
    },
    pillars: [
      {
        title: "Teachable Model",
        description:
          "WELL's 400-page standard was decomposed into a structured curriculum with clear domain weighting, learning objectives, and assessment alignment.",
        bullets: [
          "12 core competency domains",
          "400+ technical requirements mapped to exam blueprint",
          "600+ vetted exam items with input from 150+ SMEs",
        ],
        without:
          "Without this, the standard stays trapped in documentation -- admired but not actionable.",
      },
      {
        title: "Premium Global Brand",
        description:
          "The WELL AP identity communicated ethics, proficiency, and prestige -- positioning credentialed professionals as trusted authorities in building health.",
        bullets: [
          "Credential-related search volume grew 10x within two years",
          "Enterprise recognition across AEC, real estate, and healthcare",
          "Global portability across 120+ countries",
        ],
        without:
          'Without this, "certified" means whatever the local market decides.',
      },
      {
        title: "Governance & Standards",
        description:
          'Defined what "WELL AP" means -- to practitioners, employers, and the global market -- and established the systems to protect that meaning over time.',
        bullets: [
          "Renewal cycles maintaining credential relevance",
          "92%+ renewal compliance rate",
          "Continuing education requirements tied to standard evolution",
        ],
        without:
          "Without this, credential value erodes with every cohort.",
      },
      {
        title: "Renewal Ecosystem",
        description:
          "Built recurring revenue infrastructure that compounds over time -- independent of new credential sales.",
        bullets: [
          "Six-figure recurring revenue from renewals alone",
          "Long-term practitioner engagement and brand loyalty",
          "Revenue stability enabling reinvestment in program quality",
        ],
        without:
          "Without this, growth depends entirely on acquisition -- not compounding value.",
      },
      {
        title: "Training Ecosystem",
        description:
          "A distributed network of educators that extended IWBI's reach far beyond what internal teams could deliver.",
        bullets: [
          "500+ WELL Faculty across 40+ countries",
          "Prep providers drove 25-30% of early exam purchases",
          "Corporate training partnerships increased uptake 3-5x",
        ],
        without:
          "Without this, scale depends on more staff -- not more advocates.",
      },
    ],
    whyItMatters: {
      forClient: {
        title: "For IWBI",
        bullets: [
          "200-500 credential sales per month",
          "Multi-million-dollar annual recurring revenue",
          "A credentialed workforce that sells and delivers WELL",
          "Adoption spanning 120+ countries",
        ],
      },
      forPractitioners: {
        title: "For Practitioners",
        bullets: [
          "20-40% higher consulting fees",
          "Clear industry differentiation",
          "Global recognition and portability",
          "Continuing education engagement and renewal",
        ],
      },
      forIndustry: {
        title: "For the Industry",
        bullets: [
          "Health became a design priority, not an afterthought",
          "Building owners gained a reliable way to verify expertise",
          "Major firms built dedicated WELL practices",
          "An entirely new professional category emerged",
        ],
      },
    },
    impactStats: [
      {
        value: "20K+",
        label: "20,000+ WELL APs worldwide",
        description:
          "A credentialed workforce spanning 120+ countries -- each one an advocate for the WELL standard in their market.",
      },
      {
        value: "$M+",
        label: "Multi-million-dollar recurring revenue",
        description:
          "Renewals, exam fees, and training partnerships created a compounding revenue stream independent of new sales.",
      },
      {
        value: "500+",
        label: "500+ WELL Faculty across 40+ countries",
        description:
          "A distributed education network that extended IWBI's reach far beyond what internal staff could achieve.",
      },
    ],
    outcomes: [
      {
        title: "Market credibility at scale",
        bullets: [
          "A globally recognized credential that employers require and practitioners pursue",
          "A clear definition of competence in building health and wellness",
          "Enterprise adoption by major AEC firms and real estate developers",
        ],
      },
      {
        title: "Self-sustaining acquisition engine",
        bullets: [
          "Credential holders became project champions -- selling the standard to employers, clients, and networks",
          "Enterprises began mandating the credential for project teams",
          "Organic demand replaced marketing-driven acquisition",
        ],
      },
      {
        title: "Compounding revenue infrastructure",
        bullets: [
          "92%+ renewal compliance creating predictable revenue",
          "200-500 new credential sales per month at scale",
          "Training ecosystem generating revenue through prep providers and corporate partnerships",
        ],
      },
      {
        title: "Industry transformation",
        bullets: [
          "An entirely new professional category -- health-focused building design",
          "A workforce that doesn't just implement WELL -- it evangelizes it",
          "A credential that made health-focused design the default, not the exception",
        ],
      },
    ],
    testimonial: {
      text: "WELL AP became a gateway -- not just to proficiency, but to participation in a global health movement. It changed how people think about buildings, how firms hire, and how an entire industry defines competence.",
      author: "Prateek Khanna",
      role: "COO, International WELL Building Institute",
    },
    comparison: [
      {
        typical: "Surface-level training",
        system: "400-page standard mapped to 12 competency domains",
      },
      {
        typical: "Self-governed, loosely maintained",
        system: "92%+ renewal compliance with CE requirements",
      },
      {
        typical: "One-time purchase, value decays",
        system: "Structured renewal ecosystem with compounding revenue",
      },
      {
        typical: "Regional or niche recognition",
        system: "120+ countries, enterprise-mandated",
      },
      {
        typical: "Credential exists in isolation",
        system: "A System of Trust that drives ecosystem adoption",
      },
    ],
    timeline: [
      {
        stage: "Building Standard",
        description:
          "A rigorous, evidence-based standard for health in the built environment",
      },
      {
        stage: "System of Trust",
        description:
          "Credential infrastructure that verified competence and created accountability",
      },
      {
        stage: "Global Workforce",
        description:
          "20,000+ professionals carrying WELL into every market, firm, and project",
      },
    ],
    biggerPictureQuote:
      "The credential didn't just scale knowledge -- it created a self-sustaining movement. Every WELL AP represents the standard to their employer, their clients, and their network. That's the difference between training and infrastructure.",
  },
  {
    slug: "iwbi-digital-standard",
    title: "How IWBI Turned a Building Standard Into a Global System of Trust",
    subtitle:
      "The WELL Building Standard had global demand -- but no digital infrastructure to match. Over a decade-long partnership, IWBI and Certainly built the certification operating system that now spans 131 countries and 300,000+ users.",
    metaTitle:
      "IWBI Digital Standard Case Study -- Building Standard to Global System of Trust | Certainly",
    metaDescription:
      "How Certainly helped IWBI build the digital infrastructure that transformed the WELL Building Standard into a global certification operating system spanning 131 countries.",
    heroStats: [
      { value: "26K+", label: "Projects" },
      { value: "131", label: "Countries" },
      { value: "5.1B", label: "Sq Ft" },
      { value: "300K+", label: "Users" },
    ],
    challengeQuote: {
      text: "WELL became more than a standard -- it became a movement. And that movement needed infrastructure to scale without losing integrity.",
      author: "Prateek Khanna",
      role: "IWBI",
    },
    challenge: {
      context: [
        'In the built environment, "wellness certification" was still an emerging category. Green building standards like LEED had proven the model, but health-focused performance standards were new territory. IWBI needed more than a document -- it needed an ecosystem that could govern, educate, and scale simultaneously.',
        "The WELL Building Standard had already attracted attention from architects, owners, and enterprises worldwide. But attention without infrastructure creates a bottleneck, not a movement.",
        'IWBI faced a pivotal question: "How do we turn a 1,000-page PDF standard into a living, governed, self-service global platform -- without losing the rigor that made it matter?"',
      ],
      specificChallenges: [
        "No unified certification platform -- projects were tracked manually across spreadsheets and email",
        "Unstructured document submission created bottlenecks for reviewers and applicants alike",
        "Inconsistent interpretation of 1,000+ pages of criteria across global markets",
        "Enterprise clients couldn't manage multi-building portfolios -- every project was handled individually",
        "Rising global demand was outpacing internal staff capacity -- IWBI needed a system, not more headcount",
      ],
    },
    pillars: [
      {
        title: "WELL Online Platform",
        description:
          "A cloud-based certification operating system supporting 10,000+ monthly active users.",
        bullets: [
          "Documentation submission and reviewer workflows",
          "Payments, enrollment, and real-time project tracking",
          "Custom middleware integrating support and education",
        ],
        without:
          "Without this, certification stays staff-dependent -- every new user creates more burden, not more value.",
      },
      {
        title: "The Digital Standard",
        description:
          "1,000+ pages of PDF transformed into a modular, searchable, version-controlled knowledge base.",
        bullets: [
          "Indexable and mobile-friendly for global access",
          "Governed versioning with clear authoritative sources",
          "Reduced reliance on staff interpretation",
        ],
        without:
          "Without this, the standard is admired but inaccessible -- trapped in PDFs that don't scale.",
      },
      {
        title: "Education & Credentialing",
        description:
          "Custom systems powering the WELL AP, WELL Faculty, and continuing education ecosystem.",
        bullets: [
          "Exam registration, renewals, and CE tracking",
          "Provider certification and faculty programs",
          "Learning ecosystem tied to certification journeys",
        ],
        without:
          "Without this, credentials lack a pathway -- and professionals lack a reason to stay engaged.",
      },
      {
        title: "Enterprise & Portfolio Systems",
        description:
          "Scalable tools for organizations managing wellness across dozens or hundreds of buildings.",
        bullets: [
          "Multi-building dashboards and portfolio documentation",
          "Bulk enrollment workflows and client reporting",
          "Analytics for global health performance tracking",
        ],
        without:
          "Without this, enterprise clients pursue health project-by-project -- never at scale.",
      },
      {
        title: "Global Governance",
        description:
          "Rules management and integrity systems ensuring the standard means the same thing in 131 countries.",
        bullets: [
          "Consistent interpretation across markets",
          "Renewal cycles and accountability systems",
          "Protected integrity at global adoption scale",
        ],
        without:
          'Without this, "certified" means whatever the local market decides -- and the brand erodes.',
      },
    ],
    whyItMatters: {
      forClient: {
        title: "For IWBI",
        bullets: [
          "26,000+ enrolled projects generating recurring revenue",
          "300,000+ platform users operating self-service",
          "Multi-million-dollar credential and renewal revenue",
          "Enterprise clients at portfolio scale",
        ],
      },
      forPractitioners: {
        title: "For Practitioners",
        bullets: [
          "Self-service certification journeys from enrollment to verification",
          "Clear documentation pathways with consistent interpretation",
          "Portfolio-wide project management for enterprise teams",
          "Continuing education that reinforces -- not replaces -- expertise",
        ],
      },
      forIndustry: {
        title: "For the Industry",
        bullets: [
          "Health became a measurable design priority in the built environment",
          "A credentialed global workforce emerged around wellness",
          "New service categories and consulting practices formed",
          'The "WELL effect" spread across 131 countries',
        ],
      },
    },
    impactStats: [
      {
        value: "26K+",
        label: "26,000+ projects enrolled worldwide",
        description:
          "From individual buildings to enterprise portfolios spanning hundreds of sites.",
      },
      {
        value: "300K",
        label: "300,000+ platform users",
        description:
          "Operating self-service across certification, education, and documentation.",
      },
      {
        value: "131",
        label: "131 countries",
        description:
          "Global reach with consistent governance and interpretation.",
      },
      {
        value: "5.1B",
        label: "5.1 billion square feet in WELL programs",
        description:
          "Health performance measured and certified at unprecedented scale.",
      },
    ],
    outcomes: [
      {
        title: "Platform Scale",
        bullets: [
          "From manual processes to self-service certification at global scale",
          "10,000+ monthly active users on WELL Online",
          "Staff dependency replaced by governed digital infrastructure",
        ],
      },
      {
        title: "Global Reach",
        bullets: [
          "Consistent interpretation across 131 countries",
          "Localized support without fragmenting the standard",
        ],
      },
      {
        title: "Revenue Infrastructure",
        bullets: [
          "Multi-million-dollar credential and renewal revenue",
          "Annual renewals creating predictable, compounding income",
        ],
      },
      {
        title: "Ecosystem Growth",
        bullets: [
          "Credentialed professionals becoming market advocates",
          "Certified projects attracting more projects",
          "New service categories and consulting practices forming globally",
        ],
      },
    ],
    testimonial: {
      text: "What started as a standards digitization project became the operating system for a global health movement. The infrastructure Certainly built didn't just support WELL -- it enabled WELL to become something we couldn't have imagined at launch.",
      author: "Prateek Khanna",
      role: "International WELL Building Institute",
    },
    comparison: [
      {
        typical: "Static PDF documents",
        system: "Living digital platform",
      },
      {
        typical: "Informal interpretation",
        system: "Governed global standard",
      },
      {
        typical: "Manual review workflows",
        system: "Self-service certification OS",
      },
      {
        typical: "Project-by-project management",
        system: "Enterprise portfolio systems",
      },
      {
        typical: "Isolated credential",
        system: "A System of Trust",
      },
    ],
    timeline: [
      {
        stage: "PDF Standard",
        description:
          "1,000+ pages of health performance criteria -- admired but inaccessible at scale",
      },
      {
        stage: "Digital Platform",
        description:
          "Modular, governed, self-service -- a certification operating system",
      },
      {
        stage: "Global Certification Movement",
        description:
          "131 countries, 300K+ users, a credentialed workforce reshaping the built environment",
      },
    ],
    biggerPictureQuote:
      "The WELL Building Standard didn't just get digitized -- it got infrastructure. And that infrastructure is what turned a standard into a global movement.",
  },
  {
    slug: "advance",
    title:
      "How USGBC Turned a Social Equity Vision Into a National System of Trust",
    subtitle:
      "USGBC's ADVANCE program had the mission -- but no structured, repeatable system to deliver it. Over a multi-year partnership, Certainly built the program infrastructure that trained 424+ community leaders and impacted 8.5M square feet.",
    metaTitle:
      "ADVANCE Case Study -- Social Equity Vision to National System of Trust | Certainly",
    metaDescription:
      "How Certainly helped USGBC build the ADVANCE program infrastructure that trained 424+ community leaders and impacted 8.5M square feet of building space.",
    heroStats: [
      { value: "424+", label: "Leaders Trained" },
      { value: "2,000+", label: "Residents Educated" },
      { value: "8.5M", label: "Sq Ft Impacted" },
      { value: "100+", label: "Program Assets" },
    ],
    challengeQuote: {
      text: "ADVANCE became a platform -- not just a program. It gave communities real tools to participate in the sustainability movement.",
      author: "USGBC Leadership",
      role: "U.S. Green Building Council",
    },
    challenge: {
      context: [
        "In the sustainability space, equity programming was largely aspirational. Most green building organizations had DEI statements and community goals, but few had structured frameworks for turning those goals into measurable, repeatable local impact.",
        "USGBC had already built one of the world's most recognized sustainability platforms through LEED. But extending that reach into under-resourced neighborhoods required a fundamentally different model -- one designed for community engagement, not just building performance.",
        'USGBC faced a pivotal question: "How do we turn a social equity vision into a scalable, governed program -- one that any city can activate without reinventing the wheel?"',
      ],
      specificChallenges: [
        "No unified framework for community engagement -- every city was reinventing the approach",
        "Inconsistent training across regions meant wildly different participant experiences",
        "No scalable toolkit -- staff had to build materials from scratch for each activation",
        "Heavy reliance on internal staff for every workshop, assessment, and community event",
        "No measurable pathway connecting community engagement to real building improvements",
      ],
    },
    pillars: [
      {
        title: "The ADVANCE Framework",
        description:
          "A codified, teachable structure that guided communities from awareness through implementation.",
        bullets: [
          "Sustainability awareness and building assessments",
          "Project scoping and stakeholder engagement",
          "Clear pathways from education to implementation",
        ],
        without:
          "Without this, every activation is a one-off -- impossible to replicate or measure.",
      },
      {
        title: "The 100+ Asset Toolkit",
        description:
          "A complete program suite prototyped and built from scratch for national deployment.",
        bullets: [
          "Workbooks, orientation videos, and workshop modules",
          "UX materials, reports, graphs, and decks",
          "Staff and ambassador training resources",
        ],
        without:
          "Without this, every new city starts from zero -- burning staff time instead of building momentum.",
      },
      {
        title: "Staff & Ambassador Enablement",
        description:
          "20 USGBC staff and 45 trained brand ambassadors equipped with standardized delivery systems.",
        bullets: [
          "Workshop delivery scripts and engagement protocols",
          "Assessment methodologies for community buildings",
          "Train-the-trainer model for national scaling",
        ],
        without:
          "Without this, every activation requires headquarters -- limiting reach to staff capacity.",
      },
      {
        title: "Communication & Marketing Engine",
        description:
          "Messaging architecture and launch playbooks ensuring professional, on-brand activations everywhere.",
        bullets: [
          "Local launch playbooks and email templates",
          "Partner pitch decks and social media toolkits",
          "Consistent brand experience across all markets",
        ],
        without:
          "Without this, local teams improvise -- and the brand fractures with every new city.",
      },
      {
        title: "Program Governance",
        description:
          "Version control, quality standards, and impact measurement ensuring the program means the same thing in every city.",
        bullets: [
          "Standardized materials with governed versioning",
          "Foundation-ready impact metrics and reporting",
          "Quality assurance across all activations",
        ],
        without:
          "Without this, impact can't be measured -- and funders can't justify continued investment.",
      },
    ],
    whyItMatters: {
      forClient: {
        title: "For USGBC",
        bullets: [
          "Scalable equity programming across multiple cities",
          "Reduced staff burden per activation",
          "Consistent brand experience nationwide",
          "Foundation-ready impact metrics",
        ],
      },
      forPractitioners: {
        title: "For Communities",
        bullets: [
          "Clear, actionable sustainability pathways",
          "Trained local leaders who stay in the community",
          "Real building improvements, not just education",
          "Connection to the broader green building movement",
        ],
      },
      forIndustry: {
        title: "For the Mission",
        bullets: [
          "424+ community leaders trained nationally",
          "2,000+ residents educated on sustainability",
          "8.5M square feet of building space impacted",
          "Sustainability democratized beyond well-resourced projects",
        ],
      },
    },
    impactStats: [
      {
        value: "424+",
        label: "424+ community leaders trained",
        description:
          "Local champions equipped with standardized frameworks, tools, and delivery scripts.",
      },
      {
        value: "2K+",
        label: "2,000+ residents educated",
        description:
          "Community members engaged through structured workshops and sustainability awareness programs.",
      },
      {
        value: "8.5M",
        label: "8.5 million square feet impacted",
        description:
          "Real building improvements in under-resourced communities -- measurable, documented, and replicable.",
      },
      {
        value: "100+",
        label: "100+ program assets created",
        description:
          "A complete toolkit enabling any city to activate without rebuilding from scratch.",
      },
    ],
    outcomes: [
      {
        title: "Scalable program infrastructure",
        bullets: [
          "From ad hoc workshops to a governed, repeatable framework",
          "New cities activated without headquarters involvement",
          "Foundation-ready impact reporting from day one",
        ],
      },
      {
        title: "Reduced organizational risk",
        bullets: [
          "Consistent quality across all markets and facilitators",
          "Version-controlled materials eliminating outdated content",
          "Professional brand experience in every community",
        ],
      },
      {
        title: "Community multiplier effect",
        bullets: [
          "Trained ambassadors carrying the program into their neighborhoods",
          "Success in one city creating demand in adjacent markets",
          "Foundation funding following documented impact",
        ],
      },
    ],
    testimonial: {
      text: "ADVANCE became a platform -- not just a program. It gave communities real tools to participate in the sustainability movement. The infrastructure Certainly built didn't just support the program -- it made the program possible at national scale.",
      author: "USGBC Leadership",
      role: "U.S. Green Building Council",
    },
    comparison: [
      {
        typical: "One-off workshops",
        system: "Governed national framework",
      },
      {
        typical: "Staff-dependent delivery",
        system: "Trained ambassador network",
      },
      {
        typical: "Ad hoc materials",
        system: "100+ asset toolkit",
      },
      {
        typical: "Awareness without action",
        system: "Measurable building improvements",
      },
      {
        typical: "Isolated initiative",
        system: "A System of Trust",
      },
    ],
    timeline: [
      {
        stage: "Equity Vision",
        description:
          "A powerful mission for inclusive sustainability -- without the framework to deliver it consistently",
      },
      {
        stage: "System of Trust",
        description:
          "Governed framework, toolkit, and trained network -- a program operating system",
      },
      {
        stage: "National Sustainability Engine",
        description:
          "Community leaders, building improvements, and replicable impact across the country",
      },
    ],
    biggerPictureQuote:
      "ADVANCE proved something important: that mission-driven programs don't have to choose between impact and structure. The System of Trust gave USGBC both -- a way to scale equity programming without sacrificing quality, consistency, or community connection.",
  },
  {
    slug: "drvn",
    title:
      "How DRVN Turned a Founder-Led Method Into a Scalable System of Trust",
    subtitle:
      "DRVN had a methodology that worked. The challenge wasn't proving it -- it was scaling it with clarity, authority, and structure as it moved beyond the founder and into the market.",
    metaTitle:
      "DRVN Case Study -- Founder-Led Method to Scalable System of Trust | Certainly",
    metaDescription:
      "How Certainly helped DRVN build a System of Trust that transformed a proven golf fitness methodology into a scalable certification program for coaches.",
    heroStats: [
      { value: "70+", label: "Pros Opted In" },
      { value: "12", label: "Curriculum Sections" },
      { value: "86", label: "Modules" },
      { value: "40+", label: "Applied Videos" },
    ],
    challengeQuote: {
      text: "We had hundreds of thousands of people using our app successfully. But when someone gets certified to represent DRVN, they're not just learning a methodology -- they're building their business on our brand. We needed infrastructure that protected both the coach and the golfer.",
      author: "Michael Dennington",
      role: "Founder of DRVN",
    },
    challenge: {
      context: [
        'In golf fitness, "certification" means a hundred different things. Some are weekend workshops. Others are video courses. A few are rigorous multi-year programs. There\'s no consistent standard -- which makes it hard for trainers to know what\'s worth pursuing, and even harder for golfers to know what a certification actually represents.',
        "DRVN had already proven their methodology worked. Their self-led fitness app had been used by hundreds of thousands of golfers to transform their performance through progressive strength training.",
        'But they faced a pivotal question: "How do we extend this proven methodology through certified professionals -- and ensure they can build sustainable businesses around it, not just add another credential to their wall?"',
      ],
      specificChallenges: [
        "A competitor had launched a well-structured certification and was gaining traction",
        "70+ coaches were asking for a way to operate in public without brand risk -- to deliver DRVN's approach with real authority",
        "What they had was a method that worked, not the infrastructure to let others carry it forward",
        "They needed a business system, not a content product -- they needed a System of Trust",
      ],
    },
    pillars: [
      {
        title: "Clear Public Methodology",
        description:
          'Not just "here\'s what to do," but "here\'s why it works, how it\'s different, and how you can evaluate it."',
        bullets: [
          "Transparent progressive strength training framework",
          "App-based programming and bodyweight protocols",
          "Simple assessments tied to golf performance outcomes",
        ],
        without:
          "Without this, the method stays trapped in the founder's head -- or gets distorted in the market.",
      },
      {
        title: "Business Infrastructure",
        description:
          "Coaches don't just learn the DRVN method -- they get the systems to deliver it professionally.",
        bullets: [
          "Access to the proven app platform their clients will use",
          "Assessment protocols and programming tools",
          "Infrastructure to build a practice around DRVN",
        ],
        without:
          "Without this, scale depends on more marketing or more founder time.",
      },
      {
        title: "Structured Certification Pathway",
        description:
          "A systematic learning journey with clear milestones.",
        bullets: [
          "Competency-based progression, not just content completion",
          "Verification that coaches can apply methodology",
          "Real golfer application requirements",
        ],
        without:
          "Without this, certification becomes a badge, not a system.",
      },
      {
        title: "Governance & Standards",
        description:
          'Defined what "DRVN Certified Pro" means -- to coaches, golfers, and the market.',
        bullets: [
          "Renewal cycles so the credential maintains meaning",
          "Accountability systems for maintaining standards",
          "Clear expectations for ongoing participation",
        ],
        without:
          'Without this, "certified" means whatever the market decides.',
      },
      {
        title: "Scalable Foundation",
        description:
          "Built for growth from 70 coaches to 700 to 7,000.",
        bullets: [
          "Systems for ongoing program management",
          "Quality assurance infrastructure",
          "Infrastructure that evolves as methodology develops",
        ],
        without:
          "Without this, growth creates more problems than it solves.",
      },
    ],
    whyItMatters: {
      forClient: {
        title: "For DRVN",
        bullets: [
          "Representing the DRVN methodology",
          "Using the same systems and app",
          "Delivering results in a controlled, measured way",
          "Every certified professional becomes an extension of the brand",
        ],
      },
      forPractitioners: {
        title: "For The Coach",
        bullets: [
          "The DRVN app becomes their delivery platform",
          "The methodology becomes their differentiator",
          "The certification becomes their credibility",
          "The systems become their infrastructure",
        ],
      },
      forIndustry: {
        title: "For The Golfer",
        bullets: [
          "This coach is using a proven methodology (100k+ users)",
          "They have access to the same app and systems that work",
          "There are standards behind that certification",
          "Their investment translates to real performance gains",
        ],
      },
    },
    impactStats: [
      {
        value: "70+",
        label: "70+ professionals opted in pre-launch",
        description:
          "Demand was validated before the certification opened -- driven by interest in the methodology, not discounts or urgency tactics.",
      },
      {
        value: "12",
        label: "12 curriculum sections covering the full DRVN Methodology",
        description:
          "A complete, body-first coaching framework delivered through 86 structured modules and 40+ applied videos -- designed as a decision system, not a content library.",
      },
    ],
    outcomes: [
      {
        title: "A scalable business foundation",
        bullets: [
          "A way to extend the methodology beyond a founder-led app",
          "A clear definition of what DRVN Certified Pro means",
          "Infrastructure designed to support long-term growth -- not short-term hype",
        ],
      },
      {
        title: "A system that reduces business risk",
        bullets: [
          "Standardized assessments and progression logic",
          "A shared language clients understand and trust",
          "Less reliance on personality, more reliance on method",
        ],
      },
      {
        title: "Improved coaching economics",
        bullets: [
          "Clear scope of practice for working with golfers",
          "Faster, more confident decision-making",
          "Easier explanation of value to clients",
        ],
      },
      {
        title: "Early network momentum",
        bullets: [
          "70+ coaches entered the certification pathway",
          "Founding cohort launched without staff expansion",
          "A credible alternative in a crowded, price-driven market",
        ],
      },
    ],
    testimonial: {
      text: "We thought we were building a certification. We didn't realize we were building a complete business infrastructure for coaches. It's so much more sophisticated than we imagined -- the governance, the ongoing management, the systems integration. There's no way we could have researched and built this ourselves.",
      author: "Michael Dennington",
      role: "Founder, DRVN | PGA Professional",
    },
    comparison: [
      {
        typical: "Another credential to stack",
        system: "A business model to build on",
      },
      {
        typical: "Just training content",
        system: "Complete infrastructure",
      },
      {
        typical: "Weekend workshop",
        system: "A System of Trust",
      },
      {
        typical: "Unclear standards",
        system: "Crystal clear definition",
      },
      {
        typical: "Generic methodology",
        system: "Proven app + protocols",
      },
    ],
    timeline: [
      {
        stage: "Proven Self-Led App",
        description:
          "Hundreds of thousands of users transforming their game",
      },
      {
        stage: "System of Trust",
        description:
          "Infrastructure for certified professionals",
      },
      {
        stage: "Professional Network",
        description:
          "Coaches building sustainable businesses on DRVN's foundation",
      },
    ],
    biggerPictureQuote:
      "We can now scale our impact exponentially. Every DRVN Certified Pro represents our methodology, uses our systems, and helps golfers transform their game and stay fit for decades. And they're not just representing us -- they're building businesses that depend on us maintaining quality. That's why the System of Trust matters so much.",
  },
];
