import { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/FadeIn";
import certainlyLogo from "@/assets/certainly-logo.png";

// ─── Types ───────────────────────────────────────────────────────────────────

interface Question {
  id: number;
  section: number;
  text: string;
  lowLabel: string;
  highLabel: string;
}

interface OpenQuestion {
  id: number;
  section: number;
  prompt: string;
  placeholder: string;
}

interface SectionConfig {
  number: number;
  numeral: string;
  title: string;
  subtitle: string;
  description: string;
}

// ─── Data ────────────────────────────────────────────────────────────────────

const SECTIONS: SectionConfig[] = [
  {
    number: 1,
    numeral: "I",
    title: "Trust Sources",
    subtitle: "Where your credibility comes from today",
    description:
      "These questions examine the foundations of your professional authority — who or what the market is actually trusting when they engage with your work.",
  },
  {
    number: 2,
    numeral: "II",
    title: "Trust Transfer",
    subtitle: "How trust moves — or fails to — beyond you",
    description:
      "These questions reveal how effectively your expertise travels to other practitioners and whether your methodology can be delivered consistently without you.",
  },
  {
    number: 3,
    numeral: "III",
    title: "Trust Signals",
    subtitle: "What the market sees and can verify",
    description:
      "These questions examine the external signals your market can use to evaluate your work — independently of your personal explanation or presence.",
  },
  {
    number: 4,
    numeral: "IV",
    title: "Trust Under Pressure",
    subtitle: "What happens when something goes wrong",
    description:
      "These questions probe the resilience of your trust architecture — what breaks first when quality slips, a key person leaves, or your methodology is challenged.",
  },
  {
    number: 5,
    numeral: "V",
    title: "Trust at Scale",
    subtitle: "Where risk increases as you grow",
    description:
      "These questions examine how your trust infrastructure holds up — or doesn't — as you add practitioners, clients, and complexity.",
  },
];

const QUESTIONS: Question[] = [
  // Section 1: Trust Sources
  {
    id: 1,
    section: 1,
    text: "When a prospective client decides to hire you, what primarily drives that decision?",
    lowLabel: "My personal reputation or a referral from someone who knows me",
    highLabel: "The firm's documented track record, methodology, or institutional credentials",
  },
  {
    id: 2,
    section: 1,
    text: "If you stepped away from the business for six months, how would your market credibility be affected?",
    lowLabel: "Significantly — my personal presence sustains the firm's standing",
    highLabel: "Minimally — credibility exists at an institutional level independent of me",
  },
  {
    id: 3,
    section: 1,
    text: "How would you characterize the primary source of your professional authority?",
    lowLabel: "My personal experience, relationships, and track record",
    highLabel: "A documented, governed methodology with external recognition",
  },
  // Section 2: Trust Transfer
  {
    id: 4,
    section: 2,
    text: "When a team member (not you) delivers your methodology, how consistent is client satisfaction?",
    lowLabel: "Noticeably lower — quality depends on my personal involvement",
    highLabel: "Consistently comparable — the method holds regardless of who delivers it",
  },
  {
    id: 5,
    section: 2,
    text: "Do you have documentation that tells a practitioner how to make the key judgment calls in your methodology?",
    lowLabel: "No — it lives in my head and transfers through conversation and example",
    highLabel: "Yes — judgment criteria are written down and tested against real delivery",
  },
  {
    id: 6,
    section: 2,
    text: "When a client asks 'how do I know this person is qualified?', you answer:",
    lowLabel: "I vouch for them personally",
    highLabel: "They've been assessed against our documented competence standard",
  },
  // Section 3: Trust Signals
  {
    id: 7,
    section: 3,
    text: "Does your methodology have a name, defined structure, and publicly documented description?",
    lowLabel: "No — it's described informally in proposals and conversations",
    highLabel: "Yes — defined name, documented structure, publicly accessible description",
  },
  {
    id: 8,
    section: 3,
    text: "Can a third party independently verify that one of your practitioners is qualified?",
    lowLabel: "No — they must rely on my word or a reference",
    highLabel: "Yes — we have a verifiable credential, registry, or certified practitioner list",
  },
  {
    id: 9,
    section: 3,
    text: "How much documented evidence of outcomes exists independently of your personal explanation?",
    lowLabel: "Very little — outcomes are communicated through conversation",
    highLabel: "Substantial — systematically documented and publicly accessible",
  },
  // Section 4: Trust Under Pressure
  {
    id: 10,
    section: 4,
    text: "If a practitioner delivered poor work that harmed a client, your response process would be:",
    lowLabel: "Informal — handled case by case with no defined procedure",
    highLabel: "Formal — documented complaints procedure with defined consequences",
  },
  {
    id: 11,
    section: 4,
    text: "If a key practitioner left and took several client relationships, the impact would be:",
    lowLabel: "Significant damage to market position",
    highLabel: "Operationally manageable — relationships exist at the firm level",
  },
  {
    id: 12,
    section: 4,
    text: "If your methodology were publicly challenged, your defense would rely on:",
    lowLabel: "My personal credibility and explanation",
    highLabel: "Documented evidence, published standards, or standards body backing",
  },
  // Section 5: Trust at Scale
  {
    id: 13,
    section: 5,
    text: "If you needed to onboard five new practitioners in the next ninety days, how confident are you in quality consistency?",
    lowLabel: "Not confident — quality would drop without close personal oversight",
    highLabel: "Very confident — documented onboarding standards and assessment processes exist",
  },
  {
    id: 14,
    section: 5,
    text: "Your methodology's long-term market value depends primarily on:",
    lowLabel: "My continued personal involvement and reputation",
    highLabel: "An institutional framework — documentation, governance, and credential infrastructure",
  },
  {
    id: 15,
    section: 5,
    text: "In ten years, your business's credibility will be:",
    lowLabel: "Still largely dependent on my personal relationships and delivery",
    highLabel: "Institutional — operating with its own authority, independent of me",
  },
];

// ─── Open-Ended Questions ─────────────────────────────────────────────────────

const OPEN_QUESTIONS: OpenQuestion[] = [
  // Section 1: Trust Sources
  {
    id: 101,
    section: 1,
    prompt: "If a prospective client asked a current client why they hired you — not the polished answer, but the honest one — what would they say?",
    placeholder: "Write what you think they'd actually say, not what you'd want them to say.",
  },
  {
    id: 102,
    section: 1,
    prompt: "Which parts of your credibility would survive if you stopped working for a year? Which wouldn't?",
    placeholder: "Be specific. What would still be there — and what would fade?",
  },
  // Section 2: Trust Transfer
  {
    id: 201,
    section: 2,
    prompt: "Describe the last time someone else delivered your methodology. What required your involvement that shouldn't have?",
    placeholder: "Walk through what happened. What did they get right? Where did you have to step in?",
  },
  {
    id: 202,
    section: 2,
    prompt: "If you had to write down the three things a new practitioner most needs to understand to do your work well — not the steps, but the underlying judgment — what would they be?",
    placeholder: "Try to write them out. Notice where you get stuck.",
  },
  // Section 3: Trust Signals
  {
    id: 301,
    section: 3,
    prompt: "What would a client find if they searched for your methodology online, without you in the room to explain it? Is what they'd find accurate? Sufficient?",
    placeholder: "Describe what exists — and what's missing.",
  },
  {
    id: 302,
    section: 3,
    prompt: "What credential, document, or signal would you want your practitioners to be able to show a client that proves they're qualified? Does it exist?",
    placeholder: "Describe what you wish existed — and what's actually available today.",
  },
  // Section 4: Trust Under Pressure
  {
    id: 401,
    section: 4,
    prompt: "What is the most likely thing to go seriously wrong as you grow — and what would you actually do about it if it happened tomorrow?",
    placeholder: "Don't answer with what you should do. Answer with what you'd probably do.",
  },
  {
    id: 402,
    section: 4,
    prompt: "Who in your business holds knowledge, relationships, or capabilities that no one else does? What happens to the business if that person leaves?",
    placeholder: "Name the person or role. Be honest about the exposure.",
  },
  // Section 5: Trust at Scale
  {
    id: 501,
    section: 5,
    prompt: "What's the one part of your methodology that still depends entirely on your personal judgment — the part you haven't figured out how to transfer? What would it take to change that?",
    placeholder: "Try to name it specifically. What makes it hard to document or teach?",
  },
  {
    id: 502,
    section: 5,
    prompt: "In two years, if the business were twice its current size, what would break first? What are you not building today that you'll wish you had?",
    placeholder: "Write what you actually believe — not the optimistic version.",
  },
];

// ─── Scoring ─────────────────────────────────────────────────────────────────

function getSectionScore(sectionNum: number, answers: Record<number, number>): number {
  const qs = QUESTIONS.filter((q) => q.section === sectionNum);
  const answered = qs.filter((q) => answers[q.id] !== undefined);
  if (answered.length === 0) return 0;
  const avg = answered.reduce((sum, q) => sum + (answers[q.id] || 0), 0) / answered.length;
  return Math.round((avg - 1) * 25); // 1–5 → 0–100
}

function getOverallScore(answers: Record<number, number>): number {
  const scores = [1, 2, 3, 4, 5].map((s) => getSectionScore(s, answers));
  return Math.round(scores.reduce((a, b) => a + b, 0) / 5);
}

// ─── Interpretations ─────────────────────────────────────────────────────────

const STAGES = [
  {
    min: 0,
    max: 30,
    stage: "Level 1",
    title: "Personality-Dependent Trust",
    color: "text-muted-foreground",
    bar: "bg-foreground/25",
    summary:
      "Your credibility is real — but it lives primarily in you. The market trusts you, not yet the institution you've built. This is a natural starting point, but it creates a ceiling: you can only scale what you can personally oversee.",
    implications: [
      "Client relationships depend on your direct involvement",
      "Quality variation is high when you step back",
      "Growth adds complexity without reducing founder-dependence",
      "Market exits, licensing, and partnerships are structurally difficult",
    ],
    recommendation:
      "The highest-leverage investment at this stage is methodology documentation — making the implicit explicit. Until the method exists outside your head, nothing else in the trust architecture can be built on it.",
    cta: "Start with a Method Capture engagement",
  },
  {
    min: 31,
    max: 55,
    stage: "Level 2",
    title: "Trust in Transition",
    color: "text-accent/70",
    bar: "bg-accent/40",
    summary:
      "You have meaningful expertise and some institutional elements — but trust is inconsistently distributed between you and your firm. Some clients trust the method; most still trust you. The foundation exists but isn't yet load-bearing.",
    implications: [
      "Scaling is possible but uneven — quality depends on which practitioner is involved",
      "Documentation or structure exists in some areas; gaps remain in others",
      "Certification is becoming viable, but premature without addressing foundation gaps",
      "Trust signals are present but not yet independently verifiable",
    ],
    recommendation:
      "The priority is closing the documentation gaps and formalizing your competence standard. The raw material is there — it needs to be made explicit and testable before you invest in credentialing infrastructure.",
    cta: "Book a Trust Architecture™ Review",
  },
  {
    min: 56,
    max: 75,
    stage: "Level 3",
    title: "Emerging Structure",
    color: "text-accent/85",
    bar: "bg-accent/65",
    summary:
      "You've built meaningful institutional infrastructure. The method is documented. Practitioners can deliver it reasonably consistently. The market is starting to recognize signals beyond your personal reputation. The foundation is solid enough to build a certification or licensing program on.",
    implications: [
      "Your method is transferable — onboarding new practitioners is a process, not an art",
      "The market can partially evaluate practitioners without your personal endorsement",
      "Quality governance exists but may still have gaps in enforcement",
      "You're ready to formalize the credential — the substance is there",
    ],
    recommendation:
      "This is the right moment to invest in certification program design or licensing infrastructure. The foundation is solid. The next step is building the governance and assessment systems that make the credential defensible at scale.",
    cta: "Start your Certification Program Design",
  },
  {
    min: 76,
    max: 100,
    stage: "Level 4",
    title: "Structural Trust",
    color: "text-accent",
    bar: "bg-accent",
    summary:
      "Your trust architecture is genuinely institutional. Credibility exists at the firm level. The method is documented and governed. Practitioners are assessed against a defined standard. The market can verify qualifications independently. This is a strong, defensible position.",
    implications: [
      "The firm operates largely independent of your personal involvement",
      "Scaling adds capacity without proportionally increasing quality risk",
      "Partnerships, licensing, and eventual exit are structurally supported",
      "The primary work is evolution, expansion, and strategic positioning",
    ],
    recommendation:
      "The strategic questions at this stage are directional: new markets, new credential tiers, licensing expansion, or standards organization development. The infrastructure is built. The next chapter is about where to deploy it.",
    cta: "Request a Method Audit to map what's next",
  },
];

function getStage(score: number) {
  return STAGES.find((s) => score >= s.min && score <= s.max) || STAGES[STAGES.length - 1];
}

const SECTION_INSIGHTS: Record<number, [string, string, string]> = {
  1: [
    "Trust is primarily personal — the market trusts you as an individual rather than your firm or method.",
    "Trust is partly personal, partly institutional — a transitional position with vulnerabilities on both sides.",
    "Trust is primarily institutional — your credibility is durable and not dependent on your direct presence.",
  ],
  2: [
    "Your method isn't yet transferable — quality depends on your personal judgment and involvement.",
    "Transfer is possible but inconsistent — the method moves, but not reliably enough to scale confidently.",
    "Your method transfers reliably — other practitioners can deliver it to your standard.",
  ],
  3: [
    "The market has few independent signals to evaluate your work without your personal explanation.",
    "Some signals exist — but they aren't yet comprehensive or independently verifiable.",
    "The market can verify your practitioners' qualifications without relying on your endorsement.",
  ],
  4: [
    "Your trust architecture is brittle under pressure — vulnerabilities that scale will expose.",
    "Some resilience exists, but gaps in enforcement or governance create exposure.",
    "Your trust architecture holds under pressure — processes exist to manage violations and challenges.",
  ],
  5: [
    "Scaling will amplify your current vulnerabilities — the architecture isn't built for growth.",
    "You can scale modestly, but the architecture will need investment to hold at larger size.",
    "Your infrastructure is built for scale — growth adds capacity without proportionally increasing risk.",
  ],
};

function getSectionInsight(sectionNum: number, score: number): string {
  const insights = SECTION_INSIGHTS[sectionNum];
  if (score < 35) return insights[0];
  if (score < 65) return insights[1];
  return insights[2];
}

// ─── Sub-components ───────────────────────────────────────────────────────────

const Divider = () => <div className="w-full h-px bg-border" />;

// Open-ended textarea input
const ReflectionInput = ({
  question,
  value,
  onChange,
}: {
  question: OpenQuestion;
  value: string;
  onChange: (v: string) => void;
}) => (
  <div>
    <p className="text-sm text-foreground leading-relaxed mb-3">{question.prompt}</p>
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={question.placeholder}
      rows={4}
      className="w-full bg-surface border border-border rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 leading-relaxed resize-none focus:outline-none focus:border-accent/50 transition-colors"
    />
  </div>
);

const Nav = () => (
  <nav className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center border-b border-border bg-background/80 backdrop-blur-sm">
    <div className="flex items-center gap-8">
      <Link to="/">
        <img src={certainlyLogo} alt="Certainly" className="h-8" />
      </Link>
      <Link to="/blog" className="text-xs text-muted-foreground hover:text-foreground transition-colors tracking-wide">
        Writings
      </Link>
    </div>
    <Link to="/trust-architecture-review">
      <Button size="sm" className="btn-accent-gradient text-accent-foreground rounded-sm text-xs tracking-wide">
        About this Review
      </Button>
    </Link>
  </nav>
);

// Progress bar at top (5 pips)
const ProgressBar = ({ current }: { current: number }) => (
  <div className="flex items-center gap-2">
    {SECTIONS.map((s) => (
      <div key={s.number} className="flex items-center gap-2">
        <div
          className={`h-1 w-8 rounded-full transition-all duration-500 ${
            s.number < current ? "bg-accent" : s.number === current ? "bg-accent/60" : "bg-border"
          }`}
        />
      </div>
    ))}
  </div>
);

// Scale input (1–5)
const ScaleInput = ({
  questionId,
  value,
  lowLabel,
  highLabel,
  onChange,
}: {
  questionId: number;
  value: number | undefined;
  lowLabel: string;
  highLabel: string;
  onChange: (v: number) => void;
}) => (
  <div className="mt-4">
    <div className="flex items-center justify-between gap-2">
      {[1, 2, 3, 4, 5].map((n) => (
        <button
          key={n}
          onClick={() => onChange(n)}
          className={`w-10 h-10 rounded-sm border text-sm font-serif transition-all duration-150 flex items-center justify-center
            ${value === n
              ? "border-accent bg-accent/10 text-accent"
              : "border-border text-muted-foreground hover:border-accent/40 hover:text-foreground"
            }`}
        >
          {n}
        </button>
      ))}
    </div>
    <div className="flex justify-between mt-2">
      <p className="text-[10px] text-muted-foreground leading-tight max-w-[42%]">{lowLabel}</p>
      <p className="text-[10px] text-muted-foreground leading-tight max-w-[42%] text-right">{highLabel}</p>
    </div>
  </div>
);

// Score bar for results
const ScoreBar = ({ score, label, barClass }: { score: number; label: string; barClass: string }) => (
  <div>
    <div className="flex justify-between items-baseline mb-1.5">
      <span className="text-xs text-muted-foreground tracking-wide">{label}</span>
      <span className="text-xs text-foreground font-serif">{score}</span>
    </div>
    <div className="w-full h-1 bg-border rounded-full">
      <div
        className={`h-1 rounded-full transition-all duration-700 ${barClass}`}
        style={{ width: `${score}%` }}
      />
    </div>
  </div>
);

// ─── Visual Components ────────────────────────────────────────────────────────

// Semicircle arc gauge
const ArcGauge = ({ score }: { score: number }) => {
  const cx = 100, cy = 95, r = 64;

  const bgD = `M ${cx - r} ${cy} A ${r} ${r} 0 0 0 ${cx} ${cy - r} A ${r} ${r} 0 0 0 ${cx + r} ${cy}`;

  const θ = Math.PI * (1 - score / 100);
  const ex = +(cx + r * Math.cos(θ)).toFixed(2);
  const ey = +(cy - r * Math.sin(θ)).toFixed(2);

  const scoreD =
    score <= 0
      ? ""
      : score >= 100
      ? bgD
      : `M ${cx - r} ${cy} A ${r} ${r} 0 0 0 ${ex} ${ey}`;

  const ticks = [25, 50, 75].map((tick) => {
    const tθ = Math.PI * (1 - tick / 100);
    return {
      tick,
      x1: +(cx + (r - 5) * Math.cos(tθ)).toFixed(2),
      y1: +(cy - (r - 5) * Math.sin(tθ)).toFixed(2),
      x2: +(cx + (r + 5) * Math.cos(tθ)).toFixed(2),
      y2: +(cy - (r + 5) * Math.sin(tθ)).toFixed(2),
    };
  });

  return (
    <svg viewBox="0 0 200 120" className="w-full max-w-[240px] mx-auto" aria-hidden>
      {/* Background arc */}
      <path d={bgD} fill="none" stroke="hsl(var(--border))" strokeWidth="8" strokeLinecap="round" />
      {/* Tick marks */}
      {ticks.map(({ tick, x1, y1, x2, y2 }) => (
        <line key={tick} x1={x1} y1={y1} x2={x2} y2={y2} stroke="hsl(var(--muted-foreground))" strokeWidth="1" opacity="0.4" />
      ))}
      {/* Score arc */}
      {score > 0 && (
        <path d={scoreD} fill="none" stroke="hsl(var(--accent))" strokeWidth="8" strokeLinecap="round" />
      )}
      {/* Endpoint dot */}
      {score > 0 && score < 100 && (
        <circle cx={ex} cy={ey} r="5" fill="hsl(var(--background))" stroke="hsl(var(--accent))" strokeWidth="2" />
      )}
      {/* Score number */}
      <text x={cx} y={cy - 8} textAnchor="middle" fill="hsl(var(--foreground))" fontSize="28" fontFamily="Georgia,serif" fontWeight="400">{score}</text>
      {/* Denominator */}
      <text x={cx} y={cy + 10} textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9" letterSpacing="1.5" fontFamily="sans-serif">/ 100</text>
    </svg>
  );
};

// Pentagon radar chart
const RadarChart = ({ scores }: { scores: number[] }) => {
  const cx = 110, cy = 118, r = 68;
  const angles = Array.from({ length: 5 }, (_, i) => ((-90 + i * 72) * Math.PI) / 180);
  const pt = (a: number, radius: number): [number, number] => [
    +(cx + radius * Math.cos(a)).toFixed(2),
    +(cy + radius * Math.sin(a)).toFixed(2),
  ];
  const pStr = (pts: [number, number][]) => pts.map(([x, y]) => `${x},${y}`).join(" ");

  const scorePts = angles.map((a, i) => pt(a, r * Math.max(scores[i] / 100, 0.04)));
  const gridLevels = [0.33, 0.66, 1];
  const labelR = r + 22;
  const labels = ["Sources", "Transfer", "Signals", "Resilience", "Scale"];

  return (
    <svg viewBox="0 0 240 240" className="w-full max-w-[300px] mx-auto" aria-hidden>
      {/* Grid pentagons */}
      {gridLevels.map((level) => (
        <polygon
          key={level}
          points={pStr(angles.map((a) => pt(a, r * level)))}
          fill="none"
          stroke="hsl(var(--border))"
          strokeWidth={level === 1 ? "1" : "0.75"}
          strokeDasharray={level < 1 ? "3 3" : "0"}
        />
      ))}
      {/* Axes */}
      {angles.map((a, i) => {
        const [x, y] = pt(a, r);
        return <line key={i} x1={cx} y1={cy} x2={x} y2={y} stroke="hsl(var(--border))" strokeWidth="0.75" />;
      })}
      {/* Score shape */}
      <polygon
        points={pStr(scorePts)}
        fill="hsl(var(--accent))"
        fillOpacity="0.12"
        stroke="hsl(var(--accent))"
        strokeWidth="1.5"
        strokeOpacity="0.75"
      />
      {/* Score dots */}
      {scorePts.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="3" fill="hsl(var(--accent))" />
      ))}
      {/* Labels */}
      {angles.map((a, i) => {
        const [lx, ly] = pt(a, labelR);
        const anchor = Math.abs(lx - cx) < 5 ? "middle" : lx > cx ? "start" : "end";
        return (
          <text
            key={i}
            x={lx}
            y={ly}
            textAnchor={anchor}
            dominantBaseline="middle"
            fill="hsl(var(--muted-foreground))"
            fontSize="8.5"
            letterSpacing="0.5"
          >
            {labels[i]}
          </text>
        );
      })}
    </svg>
  );
};

// 4-node stage progression rail
const StageRail = ({ score }: { score: number }) => {
  const currentIdx = STAGES.findIndex((s) => score >= s.min && score <= s.max);
  return (
    <div className="flex items-center w-full max-w-xs">
      {STAGES.map((s, i) => (
        <Fragment key={i}>
          <div className="flex flex-col items-center gap-1.5">
            <div
              className={`w-2 h-2 rounded-full transition-all duration-500 ${
                i <= currentIdx ? "bg-accent" : "bg-border"
              }`}
            />
            <span
              className={`text-[8px] tracking-widest uppercase transition-colors ${
                i === currentIdx ? "text-accent" : "text-muted-foreground/35"
              }`}
            >
              {s.stage}
            </span>
          </div>
          {i < STAGES.length - 1 && (
            <div
              className={`h-px flex-1 mx-2 mb-3 transition-all duration-500 ${
                i < currentIdx ? "bg-accent" : "bg-border"
              }`}
            />
          )}
        </Fragment>
      ))}
    </div>
  );
};

// ─── Main Component ───────────────────────────────────────────────────────────

type Phase = "landing" | "section" | "results";

const TrustReviewWorkbook = () => {
  const [phase, setPhase] = useState<Phase>("landing");
  const [currentSection, setCurrentSection] = useState(1);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [openAnswers, setOpenAnswers] = useState<Record<number, string>>({});
  const [sectionError, setSectionError] = useState(false);
  const [copied, setCopied] = useState(false);

  const currentSectionConfig = SECTIONS.find((s) => s.number === currentSection)!;
  const currentQuestions = QUESTIONS.filter((q) => q.section === currentSection);
  const allCurrentAnswered = currentQuestions.every((q) => answers[q.id] !== undefined);

  const handleAnswer = (questionId: number, value: number) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
    setSectionError(false);
  };

  const handleOpenAnswer = (questionId: number, value: string) => {
    setOpenAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const currentOpenQuestions = OPEN_QUESTIONS.filter((q) => q.section === currentSection);

  const handleNext = () => {
    if (!allCurrentAnswered) {
      setSectionError(true);
      return;
    }
    if (currentSection < 5) {
      setCurrentSection((s) => s + 1);
      setSectionError(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setPhase("results");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleBack = () => {
    if (currentSection > 1) {
      setCurrentSection((s) => s - 1);
      setSectionError(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setPhase("landing");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const overallScore = getOverallScore(answers);
  const stage = getStage(overallScore);

  const handleCopy = () => {
    const sectionLines = SECTIONS.map((s) => {
      const score = getSectionScore(s.number, answers);
      const bar = "▓".repeat(Math.round(score / 10)) + "░".repeat(10 - Math.round(score / 10));
      return `  ${s.title.padEnd(22)} ${bar}  ${score}/100`;
    }).join("\n");

    const reflectionLines = SECTIONS.flatMap((s) => {
      const qs = OPEN_QUESTIONS.filter((q) => q.section === s.number);
      const answered = qs.filter((q) => openAnswers[q.id]?.trim());
      if (answered.length === 0) return [];
      return [
        `\n[${s.numeral}. ${s.title}]`,
        ...answered.map((q, i) =>
          `${String.fromCharCode(65 + i)}. ${q.prompt}\n   ${openAnswers[q.id].trim()}`
        ),
      ];
    });

    const lines = [
      "Trust Architecture Review™",
      "─".repeat(40),
      `Overall Score: ${overallScore} / 100`,
      `${stage.stage}: ${stage.title}`,
      "",
      stage.summary,
      "",
      "Score by Dimension:",
      sectionLines,
      "",
      "What This Means:",
      ...stage.implications.map((i) => `  · ${i}`),
      "",
      "Recommended Path Forward:",
      stage.recommendation,
      ...(reflectionLines.length > 0
        ? ["", "─".repeat(40), "Written Reflections:", ...reflectionLines]
        : []),
      "",
      "─".repeat(40),
      "certainly.coop/trust-architecture-review",
    ];

    navigator.clipboard.writeText(lines.join("\n")).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <div className="bg-background text-foreground min-h-screen">
      <Helmet>
        <title>Trust Architecture Review™ Workbook | Certainly</title>
        <meta
          name="description"
          content="A self-guided diagnostic for expert-led businesses. Understand where your credibility comes from, how trust transfers beyond you, and which trust mechanism is right for your stage."
        />
        <link rel="canonical" href="https://method.certainly.coop/trust-review-workbook" />
        <style>{`
          @media print {
            .no-print { display: none !important; }
            nav { display: none !important; }
            body, #root { background: #fff !important; color: #1a1a1a !important; }
            .bg-surface { background: #f5f5f3 !important; }
            .bg-border, .h-px { background: #e0e0e0 !important; }
            .text-muted-foreground { color: #555 !important; }
            .text-foreground { color: #1a1a1a !important; }
            .text-accent { color: #b8882a !important; }
            .border-border { border-color: #e0e0e0 !important; }
            section { padding-top: 1rem !important; }
            @page { margin: 1.5cm; }
          }
        `}</style>
      </Helmet>

      <Nav />

      {/* ── Landing ── */}
      {phase === "landing" && (
        <section className="min-h-screen flex items-center justify-center px-6 pt-24 pb-20">
          <div className="max-w-2xl mx-auto">
            <FadeIn>
              <p className="text-[10px] tracking-[0.3em] uppercase text-accent/70 mb-4 font-sans">
                Self-Guided Diagnostic · 30–45 minutes
              </p>
              <h1 className="font-serif text-4xl sm:text-5xl font-normal leading-tight mb-4">
                Trust Architecture Review™
              </h1>
              <p className="font-serif italic text-xl text-muted-foreground mb-10">
                A Self-Guided Diagnostic for Expert-Led Businesses
              </p>
              <Divider />
              <div className="py-10 space-y-4 text-base text-muted-foreground leading-relaxed">
                <p>
                  Before you invest in certification, partnerships, or scaling delivery — understand how trust
                  actually works in your business.
                </p>
                <p>
                  This diagnostic reveals where your credibility comes from (and where it's fragile), how trust
                  transfers when others deliver your work, what breaks first as you scale, and which trust
                  mechanism is right for your stage.
                </p>
              </div>
              <Divider />
              <div className="py-10">
                <p className="text-xs text-muted-foreground tracking-widest uppercase mb-6">
                  Five sections · Fifteen rated questions · Ten open-ended prompts
                </p>
                <div className="space-y-3">
                  {SECTIONS.map((s) => (
                    <div key={s.number} className="flex items-start gap-4">
                      <span className="font-serif text-accent text-xs mt-0.5 w-5 shrink-0">{s.numeral}</span>
                      <div>
                        <span className="text-sm text-foreground">{s.title}</span>
                        <span className="text-sm text-muted-foreground"> — {s.subtitle}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <Divider />
              <div className="pt-10">
                <Button
                  onClick={() => { setPhase("section"); window.scrollTo({ top: 0 }); }}
                  className="btn-accent-gradient text-accent-foreground rounded-sm px-10 py-4 text-base tracking-wide h-auto"
                >
                  Begin the Review <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </FadeIn>
          </div>
        </section>
      )}

      {/* ── Section Questions ── */}
      {phase === "section" && (
        <section className="min-h-screen px-6 pt-28 pb-24">
          <div className="max-w-2xl mx-auto">
            {/* Progress */}
            <div className="flex items-center justify-between mb-12">
              <ProgressBar current={currentSection} />
              <span className="text-xs text-muted-foreground tracking-wide">
                {currentSection} of 5
              </span>
            </div>

            {/* Section header */}
            <FadeIn key={currentSection}>
              <p className="font-serif text-accent text-sm tracking-widest mb-3">
                {currentSectionConfig.numeral}
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal mb-2">
                {currentSectionConfig.title}
              </h2>
              <p className="text-base text-muted-foreground italic mb-3">
                {currentSectionConfig.subtitle}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-10">
                {currentSectionConfig.description}
              </p>

              <Divider />

              {/* Questions */}
              <div className="space-y-10 py-10">
                {currentQuestions.map((q, i) => (
                  <div key={q.id}>
                    <div className="flex gap-4 items-start">
                      <span className="font-serif text-accent text-xs mt-1 shrink-0 w-5">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="flex-1">
                        <p className="text-base text-foreground leading-relaxed mb-1">{q.text}</p>
                        <ScaleInput
                          questionId={q.id}
                          value={answers[q.id]}
                          lowLabel={q.lowLabel}
                          highLabel={q.highLabel}
                          onChange={(v) => handleAnswer(q.id, v)}
                        />
                      </div>
                    </div>
                    {i < currentQuestions.length - 1 && <div className="mt-10 w-full h-px bg-border/50" />}
                  </div>
                ))}
              </div>

              {sectionError && (
                <p className="text-xs text-destructive mb-4">
                  Please answer all three questions before continuing.
                </p>
              )}

              {/* Reflection prompts */}
              <div className="mt-4 mb-2">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px flex-1 bg-border" />
                  <span className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground/60">Reflect & Write</span>
                  <div className="h-px flex-1 bg-border" />
                </div>
                <p className="text-xs text-muted-foreground mb-6 leading-relaxed">
                  These prompts don't affect your score — they're for your own clarity. Answer honestly, or skip them entirely.
                </p>
                <div className="space-y-8">
                  {currentOpenQuestions.map((oq, i) => (
                    <div key={oq.id}>
                      <div className="flex gap-4 items-start">
                        <span className="font-serif text-muted-foreground/40 text-xs mt-1 shrink-0 w-5">
                          {String.fromCharCode(65 + i)}
                        </span>
                        <div className="flex-1">
                          <ReflectionInput
                            question={oq}
                            value={openAnswers[oq.id] || ""}
                            onChange={(v) => handleOpenAnswer(oq.id, v)}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Divider />

              {/* Navigation */}
              <div className="flex items-center justify-between pt-8">
                <button
                  onClick={handleBack}
                  className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors tracking-wide"
                >
                  <ArrowLeft className="h-3 w-3" />
                  {currentSection === 1 ? "Back to start" : "Previous section"}
                </button>
                <Button
                  onClick={handleNext}
                  className="btn-accent-gradient text-accent-foreground rounded-sm px-8 py-3 text-sm tracking-wide h-auto"
                >
                  {currentSection < 5 ? (
                    <>Next section <ArrowRight className="ml-2 h-4 w-4" /></>
                  ) : (
                    <>See your results <ArrowRight className="ml-2 h-4 w-4" /></>
                  )}
                </Button>
              </div>
            </FadeIn>
          </div>
        </section>
      )}

      {/* ── Results ── */}
      {phase === "results" && (
        <section className="min-h-screen px-6 pt-28 pb-24">
          <div className="max-w-2xl mx-auto">
            <FadeIn>

              {/* ── Score header ── */}
              <p className="text-[10px] tracking-[0.3em] uppercase text-accent/70 mb-8 text-center">
                Your Results
              </p>

              {/* Arc gauge */}
              <ArcGauge score={overallScore} />

              {/* Stage label + title */}
              <div className="text-center mt-5 mb-5">
                <p className={`font-serif text-lg mb-0.5 tracking-wide ${stage.color}`}>{stage.stage}</p>
                <h2 className="font-serif text-3xl sm:text-4xl font-normal">{stage.title}</h2>
              </div>

              {/* Stage progression rail */}
              <div className="flex justify-center mb-10">
                <StageRail score={overallScore} />
              </div>

              <Divider />

              {/* Summary */}
              <div className="py-8">
                <p className="text-base text-muted-foreground leading-relaxed">{stage.summary}</p>
              </div>

              <Divider />

              {/* ── Dimension breakdown ── */}
              <div className="py-8">
                <p className="text-xs tracking-widest uppercase text-muted-foreground mb-8">
                  Score by dimension
                </p>

                {/* Radar chart — full width */}
                <div className="mb-10">
                  <RadarChart scores={SECTIONS.map((s) => getSectionScore(s.number, answers))} />
                </div>

                {/* Dimension scores with inline feedback */}
                <div className="space-y-6">
                  {SECTIONS.map((s) => {
                    const sScore = getSectionScore(s.number, answers);
                    let barClass = "bg-foreground/20";
                    if (sScore >= 65) barClass = "bg-accent";
                    else if (sScore >= 35) barClass = "bg-accent/50";
                    return (
                      <div key={s.number}>
                        <div className="flex items-baseline justify-between mb-1.5">
                          <div className="flex items-center gap-2">
                            <span className="font-serif text-accent/50 text-[10px] w-4 shrink-0">{s.numeral}</span>
                            <span className="text-xs text-foreground tracking-wide">{s.title}</span>
                          </div>
                          <span className="font-serif text-xl text-foreground leading-none">{sScore}</span>
                        </div>
                        <div className="w-full h-0.5 bg-border rounded-full mb-2">
                          <div
                            className={`h-0.5 rounded-full transition-all duration-700 ${barClass}`}
                            style={{ width: `${sScore}%` }}
                          />
                        </div>
                        <p className="text-[11px] text-muted-foreground leading-relaxed pl-6">
                          {getSectionInsight(s.number, sScore)}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              <Divider />

              {/* Implications */}
              <div className="py-8">
                <p className="text-xs tracking-widest uppercase text-muted-foreground mb-5">
                  What this means
                </p>
                <ul className="space-y-3">
                  {stage.implications.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-foreground/80">
                      <span className="w-1 h-1 rounded-full bg-accent mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <Divider />

              {/* Recommendation */}
              <div className="py-8 bg-surface rounded-sm px-6 -mx-2">
                <p className="text-xs tracking-widest uppercase text-muted-foreground mb-4">
                  Recommended path forward
                </p>
                <p className="text-sm text-foreground leading-relaxed">{stage.recommendation}</p>
              </div>

              {/* Save / Share */}
              <div className="py-6 border-t border-border no-print">
                <p className="text-xs text-muted-foreground leading-relaxed mb-5">
                  Your written reflections stay in your browser — they're not sent anywhere.
                  Save or copy your results before closing this tab.
                </p>
                <div className="flex flex-wrap gap-x-6 gap-y-3 items-center">
                  <button
                    onClick={handleCopy}
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors tracking-wide underline underline-offset-4"
                  >
                    {copied ? "✓ Copied to clipboard" : "Copy results"}
                  </button>
                  <button
                    onClick={() => window.print()}
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors tracking-wide underline underline-offset-4"
                  >
                    Save as PDF
                  </button>
                </div>
              </div>

              {/* CTA */}
              <div className="pt-4 space-y-4 no-print">
                <Link to="/">
                  <Button className="btn-accent-gradient text-accent-foreground rounded-sm px-10 py-4 text-base tracking-wide h-auto w-full sm:w-auto">
                    {stage.cta} <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <div className="pt-2">
                  <button
                    onClick={() => {
                      setPhase("landing");
                      setAnswers({});
                      setCurrentSection(1);
                      window.scrollTo({ top: 0 });
                    }}
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors tracking-wide underline underline-offset-4"
                  >
                    Start over
                  </button>
                </div>
              </div>

            </FadeIn>
          </div>
        </section>
      )}
    </div>
  );
};

export default TrustReviewWorkbook;
