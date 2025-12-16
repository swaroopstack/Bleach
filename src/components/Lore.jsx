import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Lore() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const visualRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      }
    );

    gsap.fromTo(
      visualRef.current,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
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

        {/* Text */}
        <div ref={textRef} className="flex flex-col justify-center">
          <h2 className="text-5xl font-bold tracking-wide">
            A WAR WRITTEN IN BLOOD
          </h2>

          <p className="mt-8 text-lg leading-relaxed text-gray-300">
            The balance of the worlds has been shattered.
            An ancient enemy rises from the shadows,
            threatening the Soul Society itself.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-gray-400">
            Ichigo Kurosaki is drawn once more into battle —
            where power alone is not enough, and every strike
            carries the weight of fate.
          </p>
        </div>

        {/* Visual */}
        <div
          ref={visualRef}
          className="relative flex items-center justify-center"
        >
          <div className="w-full h-[420px] bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-gray-500">
            Visual / Artwork
          </div>
        </div>

      </div>
    </section>
  );
}

export default Lore;
