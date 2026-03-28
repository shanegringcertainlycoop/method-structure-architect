export interface Prompt {
  title: string;
  description: string;
  prompt: string;
  bestWith?: string;
}

export interface PromptCategory {
  id: string;
  numeral: string;
  title: string;
  subtitle: string;
  prompts: Prompt[];
}

export const promptCategories: PromptCategory[] = [
  {
    id: "method-extraction",
    numeral: "I",
    title: "Method Extraction",
    subtitle: "Uncover what you actually do — before you try to teach it.",
    prompts: [
      {
        title: "The Invisible Method Finder",
        description: "Most founders can't articulate their method because it lives in muscle memory. This prompt surfaces the hidden structure.",
        prompt: `I run a consulting practice in [YOUR DOMAIN]. My clients consistently get results, but I've never formally documented how.

Interview me like a methodology researcher. Ask me one question at a time about:
1. What happens in the first 48 hours of a new engagement
2. The decision points where I diverge from what most practitioners do
3. The non-obvious sequence that matters (what must happen before what)
4. The things I check that others skip

After each answer, reflect back the underlying principle before asking the next question. After 10 questions, synthesize what you've heard into a draft "Method Architecture" — the structural bones of my approach.`,
        bestWith: "Claude or ChatGPT (conversational mode)",
      },
      {
        title: "Proprietary vs. Generic Separator",
        description: "Not everything you do is proprietary. This prompt helps you isolate what's truly yours from what's industry-standard.",
        prompt: `I'm building a certification program around my methodology in [YOUR DOMAIN].

Help me separate my intellectual property into three tiers:

**Tier 1 — Proprietary Core:** Steps, sequences, frameworks, or decision models that I invented or uniquely combine. These are defensible and should be protected.

**Tier 2 — Curated Application:** Industry-standard techniques that I apply in a distinctive sequence or context. These are differentiating but not fully original.

**Tier 3 — Foundational Knowledge:** Baseline competencies any practitioner needs. These are prerequisite, not proprietary.

Here is a description of my method: [PASTE YOUR METHOD DESCRIPTION]

For each element, classify it into a tier and explain why. Then recommend which tier should be the focus of a certification program and which should be prerequisite learning.`,
        bestWith: "Claude (strong at structured classification)",
      },
      {
        title: "The Client Transformation Map",
        description: "Certification programs certify competence — but competence toward what outcome? This maps the transformation your method delivers.",
        prompt: `My methodology helps [TYPE OF CLIENT] achieve [PRIMARY OUTCOME].

Map the full client transformation arc:

1. **Entry State:** What does the client look like, believe, and struggle with before working with me?
2. **Key Shifts:** What are the 4-6 critical shifts (mindset, skill, or structural) that must happen — in order?
3. **Exit State:** What does the client look like, believe, and do differently after the full engagement?
4. **Proof Points:** For each shift, what observable evidence shows it has occurred?

Then reverse-engineer this: If I were certifying practitioners to deliver this transformation, what competencies map to each shift? Present this as a "Competency-to-Transformation Matrix."`,
        bestWith: "Claude or ChatGPT-4",
      },
    ],
  },
  {
    id: "curriculum-architecture",
    numeral: "II",
    title: "Curriculum Architecture",
    subtitle: "Design what gets taught, in what order, and why it matters.",
    prompts: [
      {
        title: "The Learning Sequence Designer",
        description: "Order matters more than content. This prompt builds a curriculum sequence that mirrors how competence actually develops.",
        prompt: `I'm designing a certification curriculum for [YOUR METHOD NAME] in [YOUR DOMAIN].

The core competencies a certified practitioner must demonstrate are:
[LIST 5-8 COMPETENCIES]

Design a learning sequence that follows the principle of "progressive complexity" — each module should build on the previous one and unlock the next.

For each module, specify:
- **Module Title** and duration estimate
- **Prerequisite:** Which previous module(s) must be completed
- **Core Concept:** The one idea that changes how the learner thinks
- **Skill Outcome:** What the learner can DO after this module (observable, assessable)
- **Common Mistake:** The most frequent way learners get this wrong
- **Bridge Forward:** How this module sets up the next one

End with a visual dependency map showing which modules gate which.`,
        bestWith: "Claude (excels at structured educational design)",
      },
      {
        title: "The Assessment Blueprint",
        description: "If you can't assess it, you can't certify it. This prompt designs assessments that test real competence, not memorization.",
        prompt: `I need to design assessments for a certification program in [YOUR DOMAIN].

The certified practitioner must demonstrate mastery of:
[LIST KEY COMPETENCIES]

For each competency, design three assessment layers:

**Layer 1 — Knowledge Check:** A scenario-based question (not trivia) that tests whether the candidate understands the WHY behind the method, not just the WHAT.

**Layer 2 — Applied Demonstration:** A practical exercise, case study, or simulation where the candidate must apply the method to a realistic situation. Include the scoring rubric.

**Layer 3 — Judgment Call:** A deliberately ambiguous scenario with no single right answer, designed to test whether the candidate can exercise sound judgment within the methodology's framework. Include what a strong response looks like vs. a weak one.

Also flag: which competencies are binary (pass/fail) vs. graduated (novice → proficient → expert)?`,
        bestWith: "Claude (nuanced rubric design)",
      },
      {
        title: "The Anti-Dilution Curriculum Audit",
        description: "The biggest risk in certification is teaching a watered-down version of your method. This prompt stress-tests your curriculum.",
        prompt: `Here is the draft curriculum outline for my certification program:
[PASTE YOUR CURRICULUM OUTLINE]

Audit this curriculum for dilution risk across five vectors:

1. **Oversimplification:** Where have I reduced a nuanced concept to a rule or checklist that loses the judgment component?
2. **Missing Context:** Where does the curriculum teach the WHAT without the situational WHEN and WHY?
3. **Practitioner Drift:** Which modules are most likely to be reinterpreted or "improved" by future instructors in ways that corrupt the method?
4. **Assessment Gaps:** Which competencies does the curriculum claim to develop but never actually assess?
5. **False Confidence:** Where might a learner feel competent after completing the module but actually not be ready for real-world application?

For each finding, recommend a specific structural fix — not just "add more content" but a design change that addresses the root cause.`,
        bestWith: "Claude (critical analysis strength)",
      },
    ],
  },
  {
    id: "governance-quality",
    numeral: "III",
    title: "Governance & Quality Systems",
    subtitle: "Build the structures that protect your method at scale.",
    prompts: [
      {
        title: "The Governance Framework Generator",
        description: "Certification without governance is just a badge. This prompt designs the oversight structure.",
        prompt: `I'm launching a certification program for [YOUR METHOD] and need a governance framework.

Context:
- Expected certified practitioners in Year 1: [NUMBER]
- Program will be delivered by: [ME ONLY / LICENSED TRAINERS / PARTNER ORGANIZATIONS]
- My method evolves: [RARELY / ANNUALLY / CONTINUOUSLY]

Design a governance framework covering:

1. **Standards Body:** Who decides what the certification requires? What's the decision-making process when the method evolves?
2. **Quality Assurance:** How do we verify that certified practitioners are actually maintaining competence? (Renewal, audits, continuing education)
3. **Complaint & Appeals:** When someone challenges a certification decision, what's the process?
4. **Version Control:** When the method updates, how do existing certificate holders get brought current?
5. **Enforcement:** What happens when a certified practitioner misrepresents or misapplies the method?

For each element, give me both the "minimum viable" version (Year 1) and the "mature" version (Year 3+).`,
        bestWith: "Claude (systematic governance design)",
      },
      {
        title: "The Renewal & Recertification Designer",
        description: "A credential without renewal is a participation trophy. This prompt designs a recertification system that maintains real trust.",
        prompt: `My certification program in [YOUR DOMAIN] needs a renewal/recertification system.

Current program details:
- Initial certification involves: [BRIEF DESCRIPTION]
- Certification cycle length: [1 YEAR / 2 YEARS / 3 YEARS]
- The method evolves: [HOW OFTEN AND IN WHAT WAYS]

Design a recertification system that balances rigor with practicality:

1. **Renewal Requirements:** What must a certified practitioner do to maintain their credential? Consider: continuing education, practice hours, peer review, updated assessments, community contribution.
2. **Lapsed Credential Path:** What happens if someone doesn't renew on time? Design a fair but firm reinstatement process.
3. **Grandfather Clause Policy:** When the method significantly evolves, what's the policy for practitioners certified under the old version?
4. **Tiered Renewal:** Should renewal requirements scale with how long someone has been certified? (Year 1 renewal vs. Year 5 renewal)

Make the system feel like a professional obligation, not busywork.`,
        bestWith: "Claude or ChatGPT-4",
      },
      {
        title: "The Risk Scenario Planner",
        description: "Every certification program will face a crisis. This prompt helps you plan for the ones that matter most.",
        prompt: `I'm building a certification program for [YOUR METHOD] in [YOUR DOMAIN].

Generate the 8 most likely risk scenarios my program will face, categorized as:

**Reputational Risk:** A certified practitioner does something that damages the credential's reputation.
**Operational Risk:** The program's delivery or assessment systems fail in some way.
**Market Risk:** External changes threaten the credential's relevance or value.
**Integrity Risk:** Someone games, cheats, or misrepresents their certification.

For each scenario:
1. Describe the specific situation in realistic detail
2. Rate likelihood (1-5) and impact (1-5)
3. Describe the response protocol — what do you do in the first 24 hours, first week, and first month?
4. Identify the structural safeguard that would have prevented or minimized it

Present as a Risk Register I can use as a living document.`,
        bestWith: "Claude (scenario planning strength)",
      },
    ],
  },
  {
    id: "credential-positioning",
    numeral: "IV",
    title: "Credential Positioning & Signal",
    subtitle: "Make the market understand what your credential means.",
    prompts: [
      {
        title: "The Credential Naming Workshop",
        description: "The name of your credential shapes how the market perceives it. This prompt explores naming options systematically.",
        prompt: `I need to name the credential for my certification program.

Context:
- My method is called: [METHOD NAME]
- The domain: [YOUR DOMAIN]
- The certified practitioner will be able to: [KEY CAPABILITY]
- The audience who will hire/trust this credential: [WHO EVALUATES IT]
- Existing credentials in the space: [LIST ANY COMPETITORS]

Generate naming options across these patterns:

1. **Descriptive:** Names that describe what the person can do (e.g., Certified Financial Planner)
2. **Method-Branded:** Names that carry the method's brand (e.g., Scrum Master, WELL AP)
3. **Outcome-Oriented:** Names that signal the result (e.g., Certified Performance Coach)
4. **Tiered:** Names that suggest a progression path (e.g., Associate → Professional → Fellow)

For each option, evaluate:
- Does it communicate competence to the hiring audience?
- Is it defensible as intellectual property?
- Does it age well as the market evolves?
- Does it work as a post-nominal (letters after someone's name)?

Recommend your top 3 with reasoning.`,
        bestWith: "Claude (brand strategy analysis)",
      },
      {
        title: "The Market Signal Audit",
        description: "A credential is only valuable if the right people trust it. This prompt maps where and how your credential needs to show up.",
        prompt: `My certification program grants the [CREDENTIAL NAME] credential in [YOUR DOMAIN].

Map the "trust signal chain" — every point where the credential's value is evaluated by someone:

1. **Discovery:** How do potential candidates first learn the credential exists? (Channels, triggers, referral patterns)
2. **Evaluation:** When a candidate is deciding whether to pursue it, what do they compare it against? What objections do they have?
3. **Verification:** When an employer, client, or partner encounters someone with this credential, how do they verify it's real and current?
4. **Advocacy:** What would make a credential holder actively promote it to peers? (Not just display it, but recommend it)
5. **Ecosystem:** What other credentials, platforms, or professional communities should this credential integrate with?

For each link in the chain, identify the current gap (what's missing) and the design decision needed to close it.`,
        bestWith: "Claude or ChatGPT-4",
      },
      {
        title: "The Pricing & Value Architecture Prompt",
        description: "Price a credential too low and it signals low value. Too high and you gate out your market. This prompt finds the right structure.",
        prompt: `I need to price my certification program and ongoing credential.

Context:
- Domain: [YOUR DOMAIN]
- Target candidate: [WHO PURSUES THIS — their role, income range, who pays]
- Program length: [DURATION]
- Delivery model: [ONLINE / IN-PERSON / HYBRID]
- Comparable credentials in the market: [LIST WITH THEIR PRICES IF KNOWN]

Design a pricing architecture that includes:

1. **Initial Certification Fee:** What should candidates pay, and should it be split (application fee + exam fee + credential fee)?
2. **Renewal Fee:** Annual or per-cycle fee for maintaining the credential
3. **Employer vs. Individual:** Should you price differently when an employer sponsors vs. individual pays?
4. **Early Mover Pricing:** What discount or benefit structure makes sense for the first cohort?
5. **Value Justification:** What ROI story supports the price point? (Career advancement, client trust, competitive advantage)

Price should signal seriousness without creating an access barrier. Show your reasoning for the recommended price point.`,
        bestWith: "Claude (pricing strategy analysis)",
      },
    ],
  },
  {
    id: "scale-transfer",
    numeral: "V",
    title: "Scale & Transfer",
    subtitle: "Move from founder-delivered to organization-delivered — without losing the method.",
    prompts: [
      {
        title: "The Train-the-Trainer Blueprint",
        description: "The moment someone else teaches your method, dilution begins. This prompt designs the safeguards.",
        prompt: `I need to train other people to deliver my certification program.

Context:
- Currently, only I teach the method
- I want to enable [NUMBER] licensed trainers in the next [TIMEFRAME]
- The hardest parts of my method to transfer are: [DESCRIBE]

Design a Train-the-Trainer program that includes:

1. **Trainer Selection Criteria:** What qualities, experience, and competencies must a trainer candidate have BEFORE entering the program?
2. **Trainer Curriculum:** What must they learn beyond the method itself? (Facilitation skills, assessment calibration, common learner pitfalls)
3. **Calibration Protocol:** How do you ensure all trainers teach to the same standard? (Shadow delivery, recorded sessions, inter-rater reliability for assessments)
4. **Ongoing Quality Control:** After certification, how do you monitor trainer quality? (Learner feedback, audit sits, outcome tracking)
5. **Correction & Removal:** What's the process when a trainer drifts from the method or underperforms?

The goal is structural fidelity, not trainer cloning. Trainers should bring their own style while preserving the method's integrity.`,
        bestWith: "Claude (program design strength)",
      },
      {
        title: "The Licensing Model Designer",
        description: "How do you let others deliver your method without giving away control? This prompt designs the licensing structure.",
        prompt: `I want to license my methodology [METHOD NAME] to other organizations or practitioners.

Context:
- The method includes: [CURRICULUM / TOOLS / FRAMEWORKS / ASSESSMENTS]
- I want to license to: [INDIVIDUAL PRACTITIONERS / TRAINING COMPANIES / INSTITUTIONS]
- My primary concern is: [QUALITY CONTROL / REVENUE / BRAND PROTECTION / SCALE]

Design a licensing model that covers:

1. **License Tiers:** What levels of access/rights make sense? (e.g., Individual Practitioner License vs. Organizational License vs. Regional Exclusive)
2. **Included vs. Restricted:** What materials and IP does each tier include? What's explicitly restricted?
3. **Quality Requirements:** What must licensees maintain to keep their license? (Certification rates, learner satisfaction, audit compliance)
4. **Financial Structure:** One-time fee vs. annual fee vs. per-cohort royalty? What makes sense at each tier?
5. **Termination Clause:** Under what conditions is a license revoked, and what happens to learners in progress?

Design for the tension between scale and control — more licenses means more reach but more dilution risk.`,
        bestWith: "Claude (contract/structure design)",
      },
      {
        title: "The Year-One Launch Roadmap",
        description: "You don't need everything on day one. This prompt creates a phased launch plan that builds credibility before scale.",
        prompt: `I'm ready to launch my certification program for [YOUR METHOD] in [YOUR DOMAIN].

Context:
- My method is documented: [YES / PARTIALLY / NO]
- I have an existing audience of: [SIZE AND TYPE]
- My budget for launch: [RANGE]
- I can dedicate [HOURS/WEEK] to this alongside my consulting practice

Create a 12-month launch roadmap with four phases:

**Phase 1 — Foundation (Months 1-3):** What must be built before anything launches? (Minimum viable curriculum, assessment, governance)

**Phase 2 — Pilot (Months 4-6):** How do I run a beta cohort that validates the program and generates testimonials? (Cohort size, pricing, feedback loops)

**Phase 3 — Refine (Months 7-9):** Based on pilot data, what gets adjusted? (Curriculum gaps, assessment calibration, delivery model)

**Phase 4 — Scale (Months 10-12):** What does the first "real" cohort look like? (Marketing, pricing, delivery, support)

For each phase, specify: key deliverables, decision gates (what must be true before advancing), and the single biggest risk to mitigate.`,
        bestWith: "Claude or ChatGPT-4",
      },
    ],
  },
];
