import type { CSSProperties } from "react";

type MarqueeProps = {
  items: string[];
  reverse?: boolean;
  /** Seconds for one full loop. */
  duration?: number;
};

/** Endless row of pills; the list is rendered twice so the -50% scroll loops seamlessly. Pauses on hover. */
const Marquee = ({ items, reverse = false, duration = 32 }: MarqueeProps) => {
  const doubled = [...items, ...items];

  return (
    <div className="marquee-track marquee-mask overflow-hidden py-1">
      <div
        className={`marquee gap-3 ${reverse ? "marquee-reverse" : ""}`}
        style={{ "--marquee-duration": `${duration}s` } as CSSProperties}
      >
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="shrink-0 whitespace-nowrap text-sm px-4 py-2 rounded-full border border-border/50 bg-card/40 backdrop-blur-sm text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors duration-300"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
