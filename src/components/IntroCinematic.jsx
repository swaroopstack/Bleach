import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function IntroCinematic() {
  const sectionRef = useRef(null);

  useEffect(() => {
    // INITIAL STATES (BEFORE SCROLL)
    gsap.set(".intro-sky", { scale: 1.6 });
    gsap.set(".intro-logo", { opacity: 0 });
    gsap.set(".intro-land", { yPercent: 50 });
    gsap.set(".intro-ichigo", { opacity: 0 });

    // LOGO FADE IN ON LOAD (NOT SCROLL-DEPENDENT)
    gsap.to(".intro-logo", {
      opacity: 1,
      duration: 1.2,
      ease: "power2.out",
      delay: 0.2,
    });

    // SCROLL-DRIVEN CAMERA ZOOM-OUT
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=300%", // LONG SCROLL = SLOW ZOOM
        scrub: true,
        pin: true,
      },
    });

    // SKY ZOOMS OUT SLOWLY
    tl.to(".intro-sky", {
      scale: 1,
      duration: 3,
      ease: "none",
    });

    // LOGO FADES OUT WHILE SCROLLING
    tl.to(
      ".intro-logo",
      {
        opacity: 0,
        duration: 1,
        ease: "none",
      },
      0.3
    );

    // LAND COMES UP DURING ZOOM-OUT
    tl.to(
      ".intro-land",
      {
        yPercent: 0,
        duration: 3,
        ease: "none",
      },
      0
    );

    // ICHIGO APPEARS LATE IN THE ZOOM-OUT
    tl.to(
      ".intro-ichigo",
      {
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      },
      1.5
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
      {/* SKY — STARTS HEAVILY ZOOMED */}
      <img
        src="/intro/sky.jpg"
        className="intro-sky absolute inset-0 w-full h-full object-cover"
        alt=""
      />

      {/* LOGO — AUTO FADE IN */}
      <img
        src="/intro/bleach-logo.png"
        className="intro-logo absolute top-1/3 left-1/2 -translate-x-1/2 w-[440px]"
        alt=""
      />

      {/* LAND */}
      <img
        src="/intro/land.png"
        className="intro-land absolute bottom-0 w-full object-cover"
        alt=""
      />

      {/* ICHIGO — REVEALED BY ZOOM-OUT */}
      <img
        src="/intro/ichigo-base.png"
        className="intro-ichigo absolute bottom-0 left-1/2 -translate-x-1/2 w-[420px]"
        alt=""
      />
    </section>
  );
}

export default IntroCinematic;
