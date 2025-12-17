import { useRef } from "react";
import "./SpotlightCard.css";

function SpotlightCard({
  children,
  className = "",
  spotlightColor = "rgba(255,255,255,0.06)",
}) {
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ref.current.style.setProperty("--mouse-x", `${x}px`);
    ref.current.style.setProperty("--mouse-y", `${y}px`);
    ref.current.style.setProperty("--spotlight-color", spotlightColor);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className={`card-spotlight ${className}`}
    >
      {children}
    </div>
  );
}

export default SpotlightCard;
