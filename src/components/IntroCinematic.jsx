import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function IntroCinematic({ onFinish }) {
  const sectionRef = useRef(null);
  const bankaiPlayed = useRef(false);
  const tensaPlayed = useRef(false);

  const bankaiAudio = useRef(null);
  const tensaAudio = useRef(null);

  useEffect(() => {
    bankaiAudio.current = new Audio("/audio/bankai.mp3");
    tensaAudio.current = new Audio("/audio/tensa-zangetsu.mp3");

    bankaiAudio.current.volume = 1;
    tensaAudio.current.volume = 1;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=220%",
        scrub: true,
        pin: true,
      },
    });

    /* SKY → LOGO → ICHIGO */
    tl.fromTo(
      ".intro-sky",
      { opacity: 1 },
      { opacity: 1, duration: 1 }
    )
      .fromTo(
        ".intro-logo",
        { opacity: 0 },
        { opacity: 1, duration: 0.6 },
        "+=0.2"
      )
      .to(".intro-logo", { opacity: 0, duration: 0.4 }, "+=0.4")
      .fromTo(
        ".intro-ichigo",
        { opacity: 0, scale: 0.96 },
        { opacity: 1, scale: 1, duration: 1 },
        "<"
      );

    /* BANKAI MOMENT */
    tl.add(() => {
      if (!bankaiPlayed.current) {
        bankaiAudio.current.play().catch(() => {});
        bankaiPlayed.current = true;
      }
    });

    tl.to(".intro-dark", { opacity: 1, duration: 0.8 }, "+=0.2");

    /* TENSA ZANGETSU */
    tl.add(() => {
      if (!tensaPlayed.current) {
        tensaAudio.current.play().catch(() => {});
        tensaPlayed.current = true;
      }
    });

    /* HANDOFF */
    tl.to(".intro-wrapper", { opacity: 0, duration: 0.6 }, "+=0.4");

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "bottom bottom",
      once: true,
      onEnter: onFinish,
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [onFinish]);

  return (
    <section
      ref={sectionRef}
      className="intro-wrapper relative h-screen w-full overflow-hidden bg-white"
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
        className="absolute bottom-0 w-full object-cover"
        alt=""
      />

      {/* ICHIGO */}
      <img
        src="/intro/ichigo-base.png"
        className="intro-ichigo absolute bottom-0 left-1/2 -translate-x-1/2 w-[420px] opacity-0"
        alt=""
      />

      {/* DUST */}
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
        className="intro-logo absolute top-1/3 left-1/2 -translate-x-1/2 opacity-0 w-[320px]"
        alt=""
      />

      {/* DARK TAKEOVER */}
      <div className="intro-dark absolute inset-0 bg-[#0b0b0f] opacity-0" />
    </section>
  );
}

export default IntroCinematic;
