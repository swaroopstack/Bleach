export default function Watch() {
  return (
    <section className="relative w-full h-[80vh] bg-black flex items-center">

      <div className="w-full max-w-7xl mx-auto px-12 grid grid-cols-2 gap-20 items-center">

        {/* LEFT — POSTER (CORRECT) */}
        <div className="flex justify-center">
          <img
            src="/bleach-poster.jpg"
            alt="Bleach Poster"
            className="
              w-[360px]
              aspect-[2/3]
              object-cover
              rounded-2xl
              shadow-[0_40px_120px_rgba(0,0,0,0.8)]
            "
          />
        </div>

        {/* RIGHT — TEXT + CTA */}
        <div className="flex flex-col items-start gap-10">

          <h2 className="text-6xl font-extrabold uppercase leading-tight text-white">
            Bleach
            <br />
            Is Streaming
            <br />
            On Crunchyroll
          </h2>

          {/* CTA — ONLY RED ELEMENT */}
          <a
            href="https://www.crunchyroll.com/series/G63VGG2NY/bleach"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-block overflow-hidden"
          >
            {/* RED SLIDE */}
            <span className="absolute inset-0 bg-[#8c0000] translate-x-[-100%] transition-transform duration-500 group-hover:translate-x-0" />

            {/* TEXT */}
            <span className="relative z-10 block px-8 py-4 text-sm tracking-widest uppercase text-white border border-white/20">
              Watch Now →
            </span>
          </a>

        </div>
      </div>
    </section>
  );
}
