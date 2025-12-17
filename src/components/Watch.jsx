export default function Watch() {
  return (
    <section className="relative w-full h-[80vh] bg-black overflow-hidden flex items-center">
      
      {/* subtle red atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(140,0,0,0.18),transparent_60%)]" />
        <div className="absolute inset-0 bg-noise opacity-[0.04]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-10 flex justify-between items-center">

        {/* LEFT */}
        <div className="flex flex-col gap-6">
          <img
            src="/crunchyroll.svg"
            alt="Crunchyroll"
            className="w-64 opacity-70 hover:opacity-100 transition-opacity duration-500"
          />
          <span className="text-xs tracking-widest text-white/50 uppercase">
            Official Streaming Partner
          </span>
        </div>

        {/* RIGHT */}
        <div className="max-w-xl text-right">
          <h2 className="text-6xl font-extrabold uppercase leading-tight">
            <span className="block text-white">Bleach</span>
            <span className="block text-white">Is Streaming</span>
            <span className="block text-[#8c0000]">On Crunchyroll</span>
          </h2>

          <a
            href="https://www.crunchyroll.com/series/G63VGG2NY/bleach"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-10 text-white uppercase tracking-widest border-b border-[#8c0000] pb-2 hover:text-[#8c0000] transition-colors duration-300"
          >
            Watch Now →
          </a>
        </div>

      </div>
    </section>
  );
}
