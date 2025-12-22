import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function IntroCinematic() {
  const sectionRef = useRef(null);

  useEffect(() => {
    // INITIAL STATE
    gsap.set(".intro-sky", { scale: 1.75 });
    gsap.set(".intro-logo", {
      opacity: 0,
      scale: 1.4,
    });

    // LOGO FADE IN (EARLY)
    gsap.to(".intro-logo", {
      opacity: 1,
      duration: 0.6,
      delay: 0.2,
      ease: "power2.out",
    });

    // SCROLL-DRIVEN CAMERA ZOOM-OUT
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=220%",
        scrub: true,
        pin: true,
      },
    });

    // SKY ZOOMS OUT
    tl.to(".intro-sky", {
      scale: 1,
      duration: 3,
      ease: "none",
    });

    // LOGO SCALES DOWN (NO FADE)
    tl.to(
      ".intro-logo",
      {
        scale: 0.65,
        duration: 3,
        ease: "none",
      },
      0
    );

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden bg-[#0b0b0f]"
    >
      {/* SKY */}
      <img
        src="/intro/sky.jpg"
        className="intro-sky absolute inset-0 w-full h-full object-cover"
        alt=""
      />

      {/* LOGO — BIG → SMALL */}
      <img
        src="/intro/bleach-logo.png"
        className="intro-logo absolute top-1/3 left-1/2 -translate-x-1/2 w-[520px]"
        alt=""
      />
    </section>
  );
}

export default IntroCinematic;
