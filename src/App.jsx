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

  useEffect(() => {
    if (!showIntro) {
      gsap.fromTo(
        mainRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1.6, ease: "power2.out" }
      );
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
    </>
  );
}

export default App;
