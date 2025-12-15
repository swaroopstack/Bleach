export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#0b0b0f] text-white">


      {/* Background layer */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.png"
          alt="Background"
          className="w-full h-full object-cover opacity-80"
        />
      </div>

      {/* Energy / texture layer */}
      <div className="absolute inset-0">
        <img
          src="/hero-energy.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-[0.15] mix-blend-overlay"
        />

      </div>

      {/* Ichigo Bankai */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src="/ichigo-bankai.png"
          alt="Ichigo Bankai"
          className="w-[420px] max-w-none"
        />
      </div>

      {/* Title */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 text-center">
        <h1 className="text-6xl tracking-[0.4em] font-semibold">
          BLEACH
        </h1>
        <p className="mt-3 text-sm tracking-[0.35em] text-gray-400">
          THOUSAND-YEAR BLOOD WAR
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 right-6 flex items-center gap-2 text-gray-400">
        <span className="text-xs tracking-widest">SCROLL</span>
        <div className="w-[1px] h-6 bg-gray-500" />
      </div>

    </section>
  );
}
