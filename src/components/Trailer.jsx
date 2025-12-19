import { useEffect, useRef } from "react";

function Trailer() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;

    if (!section || !video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        }
      },
      {
        root: null,

        // 🔥 STARTS EARLIER (just after Lore)
        // smaller negative top margin = earlier trigger
        rootMargin: "-10% 0px -30% 0px",

        threshold: 0,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-32 bg-[#0b0b0f] flex justify-center overflow-hidden"
    >
      <div className="relative w-[97%] max-w-[1500px]">

        {/* Video card */}
        <div className="relative aspect-[21/9] overflow-hidden rounded-[28px] bg-black shadow-[0_40px_120px_rgba(0,0,0,0.85)]">
          
          <video
            ref={videoRef}
            src="/bleach-trailer.mp4"
            muted
            playsInline
            preload="metadata"
            className="w-full h-full object-cover"
          />

          {/* Subtle internal bottom fade */}
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0"
            style={{
              height: "30%",
              background:
                "linear-gradient(to bottom, rgba(11,11,15,0) 0%, rgba(11,11,15,0.25) 65%, rgba(11,11,15,0.55) 100%)",
            }}
          />
        </div>

      </div>
    </section>
  );
}

export default Trailer;
