import { useRef } from "react";
import {
  motion,
  useSpring,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";

export default function Watch() {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);

  /* ---------- scroll trigger for text ---------- */
  const isInView = useInView(sectionRef, {
    once: true,
    margin: "-100px",
  });

  /* ---------- poster tilt (mouse) ---------- */
  const rotateX = useSpring(0, { stiffness: 120, damping: 20 });
  const rotateY = useSpring(0, { stiffness: 120, damping: 20 });
  const scale = useSpring(1, { stiffness: 120, damping: 20 });

  function handleMouseMove(e) {
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    rotateX.set((-y / rect.height) * 8);
    rotateY.set((x / rect.width) * 8);
  }

  function handleMouseEnter() {
    scale.set(1.04);
  }

  function handleMouseLeave() {
    rotateX.set(0);
    rotateY.set(0);
    scale.set(1);
  }

  /* ---------- scroll parallax (poster only) ---------- */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // VERY subtle movement
  const posterY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const posterYSpring = useSpring(posterY, {
    stiffness: 60,
    damping: 20,
  });

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[80vh] bg-[#0b0b0f] flex items-center overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto px-12 grid grid-cols-2 gap-20 items-center">

        {/* LEFT — POSTER (TILT + SCROLL PARALLAX) */}
        <div className="flex justify-center">
          <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
              rotateX,
              rotateY,
              scale,
              y: posterYSpring,
            }}
          >
            <img
              src="/bleach-poster.jpg"
              alt="Bleach Poster"
              className="
                w-[360px]
                aspect-[2/3]
                object-cover
                rounded-2xl
                shadow-[0_50px_140px_rgba(0,0,0,0.85)]
                will-change-transform
              "
            />
          </motion.div>
        </div>

        {/* RIGHT — TEXT */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{
            duration: 1.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex flex-col items-start gap-10"
        >
          <h2 className="uppercase font-extrabold text-white leading-[0.95] tracking-[-0.02em]">
            <span className="block text-[4.2rem]">Bleach</span>
            <span className="block text-[3.6rem]">Is Streaming</span>
            <span className="block text-[3.6rem]">On Crunchyroll</span>
          </h2>

          {/* CTA */}
          <a
            href="https://www.crunchyroll.com/series/G63VGG2NY/bleach"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-block overflow-hidden"
          >
            <span className="absolute inset-0 bg-[#8c0000] translate-x-[-100%] transition-transform duration-500 group-hover:translate-x-0" />
            <span className="relative z-10 block px-8 py-4 text-xs tracking-[0.35em] uppercase text-white border border-white/20">
              Watch Now →
            </span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
