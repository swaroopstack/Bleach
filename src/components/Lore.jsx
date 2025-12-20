import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollReveal from "./ui/ScrollReveal";
import HoverCard from "./ui/HoverCard";

gsap.registerPlugin(ScrollTrigger);

function Lore() {
  const sectionRef = useRef(null);
  const visualRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    // Visual card entry
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

    // Title entry
    gsap.fromTo(
      titleRef.current,
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[120vh] w-full bg-[#0b0b0f] text-white flex items-center"
    >
      {/* subtle atmosphere — SAME BLACK FAMILY */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(11,11,15,0) 0%, rgba(11,11,15,0.2) 55%, rgba(11,11,15,0.45) 100%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20">

        {/* TEXT */}
        <div className="flex flex-col justify-center">

          {/* TITLE */}
          <div
            ref={titleRef}
            className="
              mb-10
              flex
              flex-wrap
              items-baseline
              gap-x-4
              uppercase
              leading-none
              select-none
            "
          >
            <span
              className="
                text-[clamp(2.6rem,4.5vw,3.6rem)]
                font-semibold
                tracking-[0.32em]
                text-white/90
              "
            >
              A WAR WRITTEN IN
            </span>

            <span
              className="
                text-[clamp(2.6rem,4.5vw,3.6rem)]
                font-extrabold
                tracking-[0.22em]
                text-[#b11212]
                drop-shadow-[0_0_28px_rgba(177,18,18,0.25)]
              "
            >
              BLOOD
            </span>
          </div>

          {/* BODY */}
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
