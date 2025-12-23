import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function IntroCinematic({ onFinish }) {
  const skyRef = useRef(null);
  const landRef = useRef(null);
  const logoRef = useRef(null);
  const ichigoRef = useRef(null);
  const dustRef = useRef(null);
  const darkCoreRef = useRef(null);
  const vignetteRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power2.inOut" },
    });

    // INITIAL STATES
    gsap.set(skyRef.current, { scale: 3.5 });
    gsap.set(landRef.current, { y: "100vh", scale: 2.5 });
    gsap.set(logoRef.current, { opacity: 0, scale: 1.2 });
    gsap.set(ichigoRef.current, { opacity: 0 });

    gsap.set(
      [
        dustRef.current,
        darkCoreRef.current,
        vignetteRef.current,
        glowRef.current,
      ],
      { opacity: 0 }
    );

    // LOGO
    tl.to(logoRef.current, { opacity: 1, duration: 1 }, 0.3);

    // CAMERA / WORLD
    tl.to(skyRef.current, { scale: 1, duration: 2.5 }, 1.4);
    tl.to(
      logoRef.current,
      { scale: 0.34, opacity: 0, duration: 2.5 },
      1.4
    );
    tl.to(landRef.current, { y: 0, scale: 1, duration: 1.9 }, 2.1);
    tl.to(ichigoRef.current, { opacity: 1, duration: 2 }, 2.5);

    // DARK THEME
    tl.to(dustRef.current, { opacity: 0.45, duration: 1.2 }, 4.1);
    tl.to(
      darkCoreRef.current,
      { opacity: 1, scale: 6, duration: 2 },
      4.2
    );
    tl.to(vignetteRef.current, { opacity: 1, duration: 1.8 }, 4.4);
    tl.to(glowRef.current, { opacity: 0.25, duration: 2 }, 4.7);

    // HANDOFF
    tl.add(onFinish, 6.8);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 z-[100] bg-[#0b0b0f] overflow-hidden">
      {/* SKY */}
      <div ref={skyRef} className="absolute inset-0">
        <img src="/intro/sky.jpg" className="w-full h-full object-cover" />
      </div>

      {/* LAND */}
      <div ref={landRef} className="absolute bottom-0 w-full h-[50vh]">
        <img
          src="/intro/land.png"
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* ICHIGO */}
      <div
        ref={ichigoRef}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[280px]"
      >
        <img src="/intro/ichigo_base.png" className="w-full" />
      </div>

      {/* PRESSURE DUST */}
      <video
        ref={dustRef}
        src="/intro/pressure-dust.mp4"
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover mix-blend-screen"
      />

      {/* DARK THEME */}
      <div ref={darkCoreRef} className="absolute inset-0 bg-black" />
      <div
        ref={vignetteRef}
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_25%,black_100%)]"
      />
      <div
        ref={glowRef}
        className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.08),transparent_60%)]"
      />

      {/* LOGO */}
      <img
        ref={logoRef}
        src="/intro/bleach-logo.png"
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[520px]"
      />
    </div>
  );
}
