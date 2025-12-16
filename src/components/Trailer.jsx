function Trailer() {
  return (
    <section className="relative h-screen w-full bg-black overflow-hidden">

      {/* Video */}
      <video
        src="/bleach-trailer.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay (important for readability) */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Text overlay */}
      <div className="relative z-10 flex h-full items-center justify-center text-center text-white px-6">
        <div>
          <h2 className="text-5xl font-bold tracking-wide">
            THE FINAL BATTLE BEGINS
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Watch the Thousand-Year Blood War trailer
          </p>
        </div>
      </div>

    </section>
  );
}

export default Trailer;
