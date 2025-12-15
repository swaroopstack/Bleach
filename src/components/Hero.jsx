import { useEffect } from "react";
import gsap from "gsap";

function Hero() {
  useEffect(() => {
    const bg = document.querySelector(".hero-bg");
    const energy = document.querySelector(".hero-energy");
    const ichigo = document.querySelector(".hero-ichigo");

    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;

      // background (least movement)
      gsap.to(bg, {
        x: x * 15,
        y: y * 15,
        duration: 1.2,
        ease: "power3.out",
      });

      // energy (medium movement)
      gsap.to(energy, {
        x: x * 30,
        y: y * 30,
        duration: 1.2,
        ease: "power3.out",
      });

      // ichigo (most movement, heavier)
      gsap.to(ichigo, {
        x: x * 55,
        y: y * 35,
        duration: 1.4,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#0b0b0f] text-white">

      {/* Background */}
      <img
        src="/hero-bg.png"
        alt=""
        className="hero-bg absolute inset-0 w-full h-full object-cover scale-105"
      />

      {/* Energy overlay */}
      <img
        src="/hero-energy.png"
        alt=""
        className="hero-energy absolute inset-0 w-full h-full object-cover opacity-[0.12] mix-blend-overlay"
      />

      {/* Ichigo Bankai */}
      <img
        src="/ichigo-bankai.png"
        alt="Ichigo Bankai"
        className="hero-ichigo absolute bottom-0 left-1/2 -translate-x-1/2 scale-110"
      />

      {/* Text & UI */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center pointer-events-none">
        <h1 className="text-7xl font-extrabold tracking-[0.4em]">
          BLEACH
        </h1>
        <p className="mt-4 text-xl text-gray-300 tracking-widest">
          THOUSAND-YEAR BLOOD WAR
        </p>

        {/* Scroll indicator */}
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
