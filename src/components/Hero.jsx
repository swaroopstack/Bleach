import { useEffect } from "react";
import gsap from "gsap";

function Hero() {
  useEffect(() => {
    const bg = document.querySelector(".hero-bg");
    const energy = document.querySelector(".hero-energy");
    const ichigo = document.querySelector(".hero-ichigo");

    // GSAP owns centering
    gsap.set(ichigo, { xPercent: -50 });

    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;

      // World plane
      gsap.to([bg, energy], {
        x: x * 18,
        y: y * 18,
        duration: 1.3,
        ease: "power3.out",
      });

      // Character plane
      gsap.to(ichigo, {
        x: x * 40,
        y: y * 22,
        duration: 1.5,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#0b0b0f] text-white">

      {/* WORLD PLANE */}
      <div className="absolute inset-0 scale-105">
        <img
          src="/hero-bg.png"
          alt=""
          className="hero-bg absolute inset-0 w-full h-full object-cover"
        />

        <img
          src="/hero-energy.png"
          alt=""
          className="hero-energy absolute inset-0 w-full h-full object-cover opacity-[0.12] mix-blend-overlay"
        />
      </div>

      {/* CHARACTER PLANE — NOW IN FRONT */}
      <img
        src="/ichigo-bankai.png"
        alt="Ichigo Bankai"
        className="
          hero-ichigo
          absolute
          bottom-[-6%]
          left-1/2
          w-[55vw]
          max-w-[900px]
          z-[20]
          drop-shadow-[0_40px_80px_rgba(0,0,0,0.8)]
        "
      />

      {/* HERO BOTTOM FADE */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 w-full z-[5]"
        style={{
          height: "30vh",
          background:
            "linear-gradient(to bottom, rgba(11,11,15,0) 0%, rgba(11,11,15,0.6) 45%, rgba(11,11,15,1) 100%)",
        }}
      />

      {/* UI PLANE */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center pointer-events-none">
        <h1 className="text-7xl font-extrabold tracking-[0.4em]">
          BLEACH
        </h1>

        <div className="absolute bottom-10 flex items-center gap-2 opacity-70">
          <span className="text-sm uppercase tracking-widest">
            Scroll
          </span>
          <span className="animate-bounce">↓</span>
        </div>
      </div>

    </section>
  );
}

export default Hero;
