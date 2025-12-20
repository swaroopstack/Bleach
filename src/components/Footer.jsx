import { useEffect, useRef } from "react";

export default function Footer() {
  const footerRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    const footer = footerRef.current;
    const line = lineRef.current;
    if (!footer || !line) return;

    const onScroll = () => {
      const rect = footer.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // when footer starts entering viewport
      const start = viewportHeight;
      const end = viewportHeight * 0.4;

      const visibleProgress = (start - rect.top) / (start - end);
      const clamped = Math.min(Math.max(visibleProgress, 0), 1);

      line.style.transform = `translateX(-50%) scaleX(${clamped})`;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <footer ref={footerRef} className="bg-[#0b0b0f] text-white">
      {/* SCROLL-AWARE SEPARATOR */}
      <div className="relative w-full h-[1.5px] overflow-hidden">
        <span
          ref={lineRef}
          className="
            absolute left-1/2 top-0
            h-full w-full
            bg-[#7a1212]
            -translate-x-1/2
            scale-x-0
            origin-center
          "
        />
      </div>

      {/* FOOTER CONTENT */}
      <div className="max-w-4xl mx-auto px-6 py-10 text-center">
        <p className="text-xs tracking-[0.45em] text-white/70">
          BLEACH
        </p>

        <p className="mt-3 text-[11px] leading-relaxed text-white/45 max-w-xl mx-auto">
          A fan-made tribute experience inspired by the world of Bleach.
          This project is created for learning and artistic exploration.
        </p>

        <p className="mt-3 text-[10px] tracking-wide text-white/30">
          © Tite Kubo · Shueisha · TV Tokyo · Aniplex
        </p>

        <div className="mt-6">
          <p className="text-[10px] tracking-[0.3em] uppercase text-white/40">
            Made with <span className="text-[#b11212]">❤</span> by
          </p>

          <a
            href="https://www.linkedin.com/in/swaroop-kumar-922888333/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-block mt-1 text-[13px] tracking-[0.4em] uppercase font-semibold text-[#b11212] group"
          >
            Swaroop Kumar
            <span className="absolute left-0 -bottom-1 h-[1.5px] w-full bg-[#b11212] scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
          </a>
        </div>
      </div>
    </footer>
  );
}
