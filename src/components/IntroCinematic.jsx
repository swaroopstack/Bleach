import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function IntroCinematic() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=200%",
        scrub: true,
        pin: true,
      },
    });

    /* INITIAL STATE — SKY ZOOMED IN */
    gsap.set(".intro-sky", { scale: 1.25 });
    gsap.set(".intro-land", { yPercent: 40 });
    gsap.set(".intro-ichigo", { opacity: 1 });
    gsap.set(".intro-logo", { opacity: 0 });

    /* LOGO FADES IN ON LOAD */
    tl.to(".intro-logo", {
      opacity: 1,
      duration: 0.8,
      ease: "power2.out",
    });

    /* CAMERA ZOOMS OUT + WORLD REVEALS */
    tl.to(
      ".intro-sky",
      {
        scale: 1,
        duration: 2,
        ease: "none",
      },
      "+=0.2"
    );

    tl.to(
      ".intro-land",
      {
        yPercent: 0,
        duration: 2,
        ease: "none",
      },
      "<"
    );

    /* LOGO FADES OUT DURING ZOOM OUT */
    tl.to(
      ".intro-logo",
      {
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      },
      "<+=0.4"
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
      {/* SKY (STARTS ZOOMED IN) */}
      <img
        src="/intro/sky.jpg"
        className="intro-sky absolute inset-0 w-full h-full object-cover"
        alt=""
      />

      {/* LAND / MOUNTAINS */}
      <img
        src="/intro/land.png"
        className="intro-land absolute bottom-0 w-full object-cover"
        alt=""
      />

      {/* ICHIGO — ALREADY PRESENT */}
      <img
        src="/intro/ichigo-base.png"
        className="intro-ichigo absolute bottom-0 left-1/2 -translate-x-1/2 w-[420px]"
        alt=""
      />

      {/* LOGO */}
      <img
        src="/intro/bleach-logo.png"
        className="intro-logo absolute top-1/3 left-1/2 -translate-x-1/2 w-[420px]"
        alt=""
      />
    </section>
  );
}

export default IntroCinematic;
