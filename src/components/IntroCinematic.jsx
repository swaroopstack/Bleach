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

  useEffect(() => {
    const camera = cameraRef.current;
    const sky = skyRef.current;
    const land = landRef.current;
    const logo = logoRef.current;

    if (!camera || !sky || !land || !logo) return;

    // Initial state: sky zoomed in
    gsap.set(sky, {
      scale: 3.5,
      transformOrigin: 'center center',
    });

    // Land starts COMPLETELY HIDDEN - positioned way below viewport
    gsap.set(land, {
      y: '100vh',
      scale: 1,
      transformOrigin: 'bottom center',
    });

    // Logo initial state (hidden)
    gsap.set(logo, {
      scale: 1.2,
      opacity: 0,
      y: 0,
    });

    // Step 1: Logo fades in
    const logoFadeIn = gsap.to(logo, {
      opacity: 1,
      duration: 1,
      delay: 0.3,
      ease: 'power2.out',
    });

    // Step 2: After logo appears, AUTO ANIMATION happens
    logoFadeIn.then(() => {
      // Create the main animation timeline
      const tl = gsap.timeline({
        defaults: { ease: 'power2.inOut' }
      });

      // Sky zooms out
      tl.to(sky, {
        scale: 1,
        duration: 2,
      }, 0);

      // Logo zooms out WITH sky AND fades out
      tl.to(logo, {
        scale: 0.4,
        opacity: 0,
        duration: 1.5,
        ease: 'power2.inOut',
      }, 0);

      // Land slides UP into frame (dolly zoom reveal)
      tl.to(land, {
        y: 0,
        duration: 1.8,
        ease: 'power2.out',
      }, 0.8);
    });

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return (
    <div className="relative w-full">
      {/* CAMERA VIEWPORT */}
      <div
        ref={cameraRef}
        className="relative w-full h-screen overflow-hidden bg-[#0b0b0f]"
      >
        {/* WORLD */}
        <div
          ref={worldRef}
          className="absolute inset-0 w-full h-full"
        >
          {/* SKY - z-10 (back layer) */}
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

          {/* LAND - z-30 (front layer, starts hidden below viewport) */}
          <div
            ref={landRef}
            className="
              absolute
              bottom-0
              left-0
              w-full
              h-[50vh]
              z-30
              pointer-events-none
            "
          >
            <img
              src="/intro/land.png"
              alt="Land"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </div>

      {/* LOGO - z-50 (middle layer, zooms out with sky and fades) */}
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