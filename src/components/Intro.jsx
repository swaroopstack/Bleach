import { useEffect, useRef } from "react";
import gsap from "gsap";

function Intro({ onFinish }) {
  const containerRef = useRef(null);
  const ichigoRef = useRef(null);
  const flameRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: onFinish,
    });

    // 1️⃣ White calm entry
    tl.fromTo(
      ichigoRef.current,
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, duration: 1.2, ease: "power2.out" }
    );

    // 2️⃣ Bankai pause (beat)
    tl.to({}, { duration: 0.6 });

    // 3️⃣ Black flame emerges
    tl.fromTo(
      flameRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1.2, duration: 1, ease: "power3.out" }
    );

    // 4️⃣ Fade everything to black
    tl.to(containerRef.current, {
      backgroundColor: "#0b0b0f",
      duration: 0.8,
      ease: "power2.inOut",
    });

    // 5️⃣ Fade out intro
    tl.to(containerRef.current, {
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
    });
  }, [onFinish]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[999] flex items-center justify-center bg-white"
    >
      {/* Base Ichigo */}
      <img
        ref={ichigoRef}
        src="/intro/ichigo-base.png"
        alt="Ichigo Kurosaki"
        className="absolute bottom-0 w-[420px] max-w-[80vw] opacity-0"
      />

      {/* Black flame */}
      <img
        ref={flameRef}
        src="/intro/bankai-flame.png"
        alt="Bankai Flame"
        className="absolute w-[600px] max-w-[90vw] opacity-0 mix-blend-multiply"
      />
    </div>
  );
}

export default Intro;
