import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import IntroCinematic from "./components/IntroCinematic";
import Hero from "./components/Hero";
import Lore from "./components/Lore";
import Trailer from "./components/Trailer";
import Watch from "./components/Watch";
import Footer from "./components/Footer";

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const mainRef = useRef(null);
  const zangetsuAudioRef = useRef(null);

  useEffect(() => {
    if (!showIntro) {
      // Fade in whole site
      gsap.fromTo(
        mainRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1.6, ease: "power2.out" }
      );

      // 🔊 Tensa Zangetsu WITH fade-in
      zangetsuAudioRef.current.volume = 0;
      zangetsuAudioRef.current.currentTime = 0;
      zangetsuAudioRef.current.play().catch(() => {});
      gsap.to(zangetsuAudioRef.current, { volume: 1, duration: 2 });
    }
  }, [showIntro]);

  return (
    <>
      {showIntro ? (
        <IntroCinematic onFinish={() => setShowIntro(false)} />
      ) : (
        <div ref={mainRef}>
          <Hero />
          <Lore />
          <Trailer />
          <Watch />
          <Footer />
        </div>
      )}

      <audio ref={zangetsuAudioRef} src="/audio/tensa-zangetsu.mp3" />
    </>
  );
}

export default App;
