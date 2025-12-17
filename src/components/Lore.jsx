import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollReveal from "./ui/ScrollReveal";
import HoverCard from "./ui/HoverCard";

gsap.registerPlugin(ScrollTrigger);

function Lore() {
  const sectionRef = useRef(null);
  const visualRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      visualRef.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[120vh] w-full bg-[#0b0b0f] text-white flex items-center"
    >
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20">

        {/* TEXT */}
        <div className="flex flex-col justify-center">

          <ScrollReveal
            containerClassName="mb-8"
            textClassName="lore-title text-[3.2rem] font-semibold tracking-[0.25em] uppercase text-white"
            baseOpacity={0.4}
            blurStrength={2}
          >
            A WAR WRITTEN IN BLOOD
          </ScrollReveal>


          <ScrollReveal
            containerClassName="mb-6"
            textClassName="text-lg leading-relaxed text-gray-300"
            baseOpacity={0.1}
            baseRotation={2}
            blurStrength={4}
          >
            The balance of the worlds has been shattered.
            An ancient enemy rises from the shadows,
            threatening the Soul Society itself.
          </ScrollReveal>

          <ScrollReveal
            textClassName="text-lg leading-relaxed text-gray-400"
            baseOpacity={0.15}
            baseRotation={2}
            blurStrength={3}
          >
            Ichigo Kurosaki is drawn once more into battle —
            where power alone is not enough, and every strike
            carries the weight of fate.
          </ScrollReveal>

        </div>

        {/* VISUAL */}
        <div
          ref={visualRef}
          className="relative flex items-center justify-center"
        >
          <HoverCard
            coverImage="/lore/ichigo-cover.png"
            characterImage="/lore/ichigo-character.png"
            logoImage="/lore/bleach-logo.png"
          />
        </div>

      </div>
    </section>
  );
}

export default Lore;
