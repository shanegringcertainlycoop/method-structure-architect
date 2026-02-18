import { ReactNode } from "react";

interface RevealCardProps {
  step: string;
  title: string;
  description: string;
  children: ReactNode;
  cta: ReactNode;
}

const RevealCard = ({ step, title, description, children, cta }: RevealCardProps) => {
  return (
    <div className="border border-border rounded-sm bg-card p-8 h-full flex flex-col">
      <p className="text-xs tracking-[0.2em] text-accent mb-3 font-sans">{step}</p>
      <h3 className="font-serif text-2xl mb-4 text-foreground">{title}</h3>
      <p className="text-base text-muted-foreground leading-relaxed mb-6">{description}</p>

      <div className="flex-1">{children}</div>

      <div className="mt-auto pt-4">{cta}</div>
    </div>
  );
};

export default RevealCard;
