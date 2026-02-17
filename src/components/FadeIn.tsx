import { useEffect, useRef, useState, ReactNode, forwardRef } from "react";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const FadeIn = forwardRef<HTMLDivElement, FadeInProps>(
  ({ children, className = "", delay = 0 }, forwardedRef) => {
    const internalRef = useRef<HTMLDivElement>(null);
    const ref = (forwardedRef as React.RefObject<HTMLDivElement>) || internalRef;
    const [visible, setVisible] = useState(false);

    useEffect(() => {
      const el = ref.current ?? internalRef.current;
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(el);
          }
        },
        { threshold: 0.1 }
      );

      observer.observe(el);
      return () => observer.disconnect();
    }, []);

    return (
      <div
        ref={ref}
        className={className}
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(12px)",
          transition: `opacity 0.8s ease-out ${delay}ms, transform 0.8s ease-out ${delay}ms`,
        }}
      >
        {children}
      </div>
    );
  }
);

FadeIn.displayName = "FadeIn";

export default FadeIn;
