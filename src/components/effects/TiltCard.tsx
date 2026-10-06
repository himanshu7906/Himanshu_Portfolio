import { useRef, type CSSProperties, type PointerEvent, type ReactNode } from "react";

type TiltCardProps = {
  children: ReactNode;
  className?: string;
  /** Maximum tilt in degrees. */
  max?: number;
  /** How far the card lifts (px) while hovered. */
  lift?: number;
  style?: CSSProperties;
};

/**
 * Tilts toward the pointer in 3D and exposes the pointer position as --mx / --my,
 * which the .tilt-shine and .spotlight-card glows follow.
 */
const TiltCard = ({ children, className = "", max = 8, lift = 6, style }: TiltCardProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const rotateY = (x - 0.5) * (max * 2);
    const rotateX = (0.5 - y) * (max * 2);
    el.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-${lift}px)`;
    el.style.setProperty("--mx", `${x * 100}%`);
    el.style.setProperty("--my", `${y * 100}%`);
  };

  const handleLeave = () => {
    if (ref.current) ref.current.style.transform = "rotateX(0deg) rotateY(0deg) translateY(0)";
  };

  return (
    <div className="tilt-perspective" style={style}>
      <div ref={ref} onPointerMove={handleMove} onPointerLeave={handleLeave} className={`tilt-inner relative ${className}`}>
        {children}
        <span className="tilt-shine" aria-hidden />
      </div>
    </div>
  );
};

export default TiltCard;
