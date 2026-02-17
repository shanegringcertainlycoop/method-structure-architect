import { useState, ReactNode } from "react";

interface RevealCardProps {
  step: string;
  title: string;
  description: string;
  children: ReactNode;
  cta: ReactNode;
}

const RevealCard = ({ step, title, description, children, cta }: RevealCardProps) => {
  const [revealed, setRevealed] = useState(false);

  return (
    <div
      className="group border border-border rounded-sm bg-surface p-8 hover:border-accent/30 transition-all duration-300 h-full flex flex-col cursor-pointer"
      onClick={() => setRevealed(!revealed)}
    >
      <p className="text-xs tracking-[0.2em] text-accent mb-2 font-sans">{step}</p>
      <h3 className="font-serif text-xl mb-4">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed mb-6">{description}</p>

      <div
        className={`overflow-hidden transition-all duration-500 ease-out flex-1 ${
          revealed ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0 md:group-hover:max-h-[300px] md:group-hover:opacity-100"
        }`}
      >
        {children}
      </div>

      <div className="mt-auto pt-4">{cta}</div>
    </div>
  );
};

export default RevealCard;
