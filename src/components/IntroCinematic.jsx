import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function IntroCinematic({ onFinish }) {
  const sectionRef = useRef(null);
  const playedBankai = useRef(false);
  const playedTensa = useRef(false);

  useEffect(() => {
    const bankai = new Audio("/audio/bankai.mp3");
    const tensa = new Audio("/audio/tensa-zangetsu.mp3");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=260%",
        scrub: true,
        pin: true,
      },
      onComplete: () => {
        ScrollTrigger.getAll().forEach(t => t.kill());
        onFinish();
      },
    });

    /* SKY – INITIAL STILLNESS */
    tl.fromTo(
      ".intro-sky",
      { scale: 1 },
      { scale: 1.08, duration: 3, ease: "none" }
    );

    /* LOGO IN → OUT (WHILE CAMERA MOVES) */
    tl.fromTo(
      ".intro-logo",
      { opacity: 0, scale: 1 },
      { opacity: 1, scale: 1, duration: 0.8 },
      0.2
    );
    tl.to(".intro-logo", { opacity: 0, scale: 0.92, duration: 0.8 }, 1);

    /* LAND RISES INTO FRAME */
    tl.fromTo(
      ".intro-land",
      { yPercent: 30 },
      { yPercent: 0, duration: 2, ease: "none" },
      0.8
    );

    /* ICHIGO ALREADY PRESENT (SUBTLE PRESENCE) */
    tl.fromTo(
      ".intro-ichigo",
      { opacity: 0.85 },
      { opacity: 1, duration: 1 },
      1.2
    );

    /* BANKAI VOICE */
    tl.add(() => {
      if (!playedBankai.current) {
        bankai.play().catch(() => {});
        playedBankai.current = true;
      }
    }, 1.9);

    /* BLACK RISE FROM BOTTOM */
    tl.fromTo(
      ".intro-black",
      { scaleY: 0, transformOrigin: "bottom" },
      { scaleY: 1, duration: 1.2, ease: "power2.inOut" },
      2.1
    );

    /* TENSA ZANGETSU */
    tl.add(() => {
      if (!playedTensa.current) {
        tensa.play().catch(() => {});
        playedTensa.current = true;
      }
    }, 2.6);

    /* FADE INTRO OUT */
    tl.to(".intro-wrapper", { opacity: 0, duration: 0.6 }, 3);

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, [onFinish]);

  return (
    <section
      ref={sectionRef}
      className="intro-wrapper relative h-screen w-full overflow-hidden bg-[#0b0b0f]"
    >
      {/* SKY */}
      <img
        src="/intro/sky.jpg"
        className="intro-sky absolute inset-0 w-full h-full object-cover"
        alt=""
      />

      {/* LAND */}
      <img
        src="/intro/land.png"
        className="intro-land absolute bottom-0 w-full object-cover"
        alt=""
      />

      {/* ICHIGO (ALREADY THERE) */}
      <img
        src="/intro/ichigo-intro.png"
        className="intro-ichigo absolute bottom-0 left-1/2 -translate-x-1/2 w-[420px]"
        alt=""
      />

      {/* DUST / PRESSURE */}
      <video
        src="/intro/pressure-dust.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-[0.08]"
      />

      {/* LOGO */}
      <img
        src="/intro/bleach-logo.png"
        className="intro-logo absolute top-1/3 left-1/2 -translate-x-1/2 w-[320px] opacity-0"
        alt=""
      />

      {/* BLACK TAKEOVER */}
      <div className="intro-black absolute inset-0 bg-[#0b0b0f] scale-y-0" />
    </section>
  );
}

export default IntroCinematic;
