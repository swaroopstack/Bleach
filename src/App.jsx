import Hero from "./components/Hero";
import Lore from "./components/Lore";
import Trailer from "./components/Trailer";
import Links from "./components/Links";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="main w-full">
      <Hero />
      <Lore />
      <Trailer />
      <Links />
      <Footer />
    </div>
  );
}

export default App;
