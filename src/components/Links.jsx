function Links() {
  return (
    <section className="relative w-full bg-black py-32 text-white">
      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold tracking-wide">
          WATCH BLEACH
        </h2>

        <p className="mt-6 text-gray-400 text-lg">
          Stream the official series from licensed platforms
        </p>

        <div className="mt-16 flex flex-col md:flex-row gap-8 justify-center">

          <a
            href="https://www.crunchyroll.com/series/G63VGG2NY/bleach"
            target="_blank"
            rel="noreferrer"
            className="px-10 py-5 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all duration-300"
          >
            Crunchyroll
          </a>

          <a
            href="https://bleach-anime.com/"
            target="_blank"
            rel="noreferrer"
            className="px-10 py-5 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all duration-300"
          >
            Official Website
          </a>

        </div>

      </div>
    </section>
  );
}

export default Links;
