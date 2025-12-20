import { useEffect, useRef, useState } from "react";

function Trailer() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;

    if (!section || !video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowVideo(true);
          video.play().catch(() => {});
        }
      },
      {
        root: null,
        // 🔥 starts when user is NEAR the trailer
        rootMargin: "-20% 0px -40% 0px",
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

          {/* POSTER (BASE LAYER) */}
          <img
            src="/bleach-trailer-poster.jpg"
            alt="Bleach Trailer Poster"
            className="absolute inset-0 w-full h-full object-cover z-[1]"
          />

          {/* VIDEO (DOMINANT LAYER) */}
          <video
            ref={videoRef}
            src="/bleach-trailer.mp4"
            muted
            playsInline
            preload="metadata"
            className={`
              absolute inset-0 w-full h-full object-cover z-[2]
              transition-opacity duration-1000 ease-out
              ${showVideo ? "opacity-100" : "opacity-0"}
            `}
          />

          {/* Subtle internal bottom fade */}
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 z-[3]"
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
