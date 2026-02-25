import FadeIn from "@/components/FadeIn";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How do I build a certification program around my methodology?",
    a: "The first step is documenting your method so it can be delivered consistently by others — not just you. From there, you define competence standards, design assessments, and build governance structures that protect quality as you scale. That's the core of what we do.",
  },
  {
    q: "What's the difference between a certification and a licensing framework?",
    a: "A certification defines and verifies competence — it tells the market someone has met a standard. A license grants the right to use a methodology or brand under defined terms. Both can be the right answer depending on your goals, market, and operational capacity. We help you choose the right mechanism.",
  },
  {
    q: "How do I scale my consulting firm without losing quality?",
    a: "Most firms try to solve this with hiring or systems. But the root issue is usually that expertise lives in the founder — not in a documented, auditable method. Before you can scale delivery, you need to capture and structure what you actually know.",
  },
  {
    q: "What types of organizations do you work with?",
    a: "We work with founder-led consulting firms, standards organizations, advisory practices with proprietary frameworks, and institutional leaders stewarding intellectual capital. You must already have proof of results — we provide discipline and structure.",
  },
  {
    q: "Do you help with curriculum development for certification programs?",
    a: "Yes. Curriculum architecture and competence definition are core parts of our Preserve phase — we design learning and assessment structures that reflect what your method actually requires.",
  },
];

const FAQSection = () => (
  <section className="px-6 py-32 max-w-3xl mx-auto">
    <FadeIn>
      <span className="font-serif text-accent text-sm tracking-widest">IX</span>
      <h2 className="font-serif text-3xl sm:text-4xl font-normal mt-4 mb-4">
        Frequently Asked Questions
      </h2>
      <p className="text-lg text-muted-foreground mb-12">
        Common questions about certification program design, licensing frameworks, and methodology consulting.
      </p>
    </FadeIn>
    <FadeIn delay={200}>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="border-border">
            <AccordionTrigger className="text-left font-serif text-base sm:text-lg text-foreground hover:no-underline py-6">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-base text-muted-foreground leading-relaxed pb-6">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </FadeIn>
  </section>
);

export default FAQSection;
