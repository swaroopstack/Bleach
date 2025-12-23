import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function IntroCinematic() {
  const cameraRef = useRef(null);
  const worldRef = useRef(null);
  const skyRef = useRef(null);
  const landRef = useRef(null);
  const logoRef = useRef(null);
  const ichigoRef = useRef(null);

  useEffect(() => {
    const camera = cameraRef.current;
    const sky = skyRef.current;
    const land = landRef.current;
    const logo = logoRef.current;
    const ichigo = ichigoRef.current;

    if (!camera || !sky || !land || !logo || !ichigo) return;

    // Initial state: sky zoomed in
    gsap.set(sky, {
      scale: 3.5,
      transformOrigin: 'center center',
    });

    // Land starts hidden
    gsap.set(land, {
      y: '100vh',
      scale: 2.5,
      transformOrigin: 'bottom center',
    });

    // Logo initial state
    gsap.set(logo, {
      scale: 1.2,
      opacity: 0,
      y: 0,
    });

    // Ichigo initial state
    gsap.set(ichigo, {
      opacity: 0,
    });

    // Step 1: Logo fades in
    const logoFadeIn = gsap.to(logo, {
      opacity: 1,
      duration: 1,
      delay: 0.3,
      ease: 'power2.out',
    });

    // Step 2: Auto cinematic sequence
    logoFadeIn.then(() => {
      const tl = gsap.timeline({
        defaults: { ease: 'power2.inOut' }
      });

      // Sky zooms out
      tl.to(sky, {
        scale: 1,
        duration: 2.5,
      }, 0);

      // Logo scales with sky
      tl.to(logo, {
        scale: 0.34,
        duration: 2.5,
        ease: 'power2.inOut',
      }, 0);

      // Logo fades out
      tl.to(logo, {
        opacity: 0,
        duration: 2.5,
        ease: 'power1.inOut',
      }, 0);

      // Ichigo fades in (SLIGHTLY LATER)
      tl.to(ichigo, {
        opacity: 1,
        duration: 2,
        ease: 'power1.inOut',
      }, 1.4); // 👈 delayed a bit more

      // Land rises + zooms out
      tl.to(land, {
        y: 0,
        scale: 1,
        duration: 1.8,
        ease: 'power2.out',
      }, 0.7);
    });

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return (
    <div className="relative w-full">
      {/* CAMERA */}
      <div
        ref={cameraRef}
        className="relative w-full h-screen overflow-hidden bg-[#0b0b0f]"
      >
        {/* WORLD */}
        <div
          ref={worldRef}
          className="absolute inset-0 w-full h-full"
        >
          {/* SKY */}
          <div
            ref={skyRef}
            className="absolute inset-0 w-full h-full z-10"
          >
            <img
              src="/intro/sky.jpg"
              alt="Sky"
              className="w-full h-full object-cover"
            />
          </div>

          {/* LAND */}
          <div
            ref={landRef}
            className="
              absolute
              bottom-0
              left-0
              w-full
              h-[50vh]
              z-20
              pointer-events-none
            "
          >
            <img
              src="/intro/land.png"
              alt="Land"
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* ICHIGO */}
          <div
            ref={ichigoRef}
            className="
              absolute
              bottom-0
              left-1/2
              -translate-x-1/2
              w-[280px]
              z-40
              pointer-events-none
            "
          >
            <img
              src="/intro/ichigo-base.png"
              alt="Ichigo"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* LOGO */}
      <img
        ref={logoRef}
        src="/intro/bleach-logo.png"
        alt="Bleach Logo"
        className="
          fixed
          top-1/3
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[520px]
          z-50
          pointer-events-none
        "
      />
    </div>
  );
}
