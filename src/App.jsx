import { useState } from "react";
import IntroCinematic from "./components/IntroCinematic";
import Hero from "./components/Hero";
import Lore from "./components/Lore";
import Trailer from "./components/Trailer";
import Watch from "./components/Watch";
import Footer from "./components/Footer";

function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      {showIntro ? (
        <IntroCinematic onFinish={() => setShowIntro(false)} />
      ) : (
        <>
          <Hero />
          <Lore />
          <Trailer />
          <Watch />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
