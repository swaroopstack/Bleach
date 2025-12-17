import SpotlightCard from "./SpotlightCard";

function Links() {
  return (
    <section className="relative w-full bg-black py-40 text-white">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-5xl font-bold tracking-wide text-center">
          ENTER THE WORLD
        </h2>

        <p className="mt-6 text-center text-gray-400 text-lg">
          Official platforms to experience Bleach
        </p>

        <div className="mt-20 flex flex-col gap-12">

          <a
            href="https://www.crunchyroll.com/series/G63VGG2NY/bleach"
            target="_blank"
            rel="noreferrer"
          >
            <SpotlightCard>
              <h3 className="text-3xl font-semibold">
                Crunchyroll
              </h3>

              <p className="mt-4 text-gray-400 max-w-xl">
                Stream Bleach officially in high quality with subtitles and dubs.
              </p>

              <span className="mt-8 inline-block text-sm tracking-widest text-gray-500">
                WATCH NOW →
              </span>
            </SpotlightCard>
          </a>

          <a
            href="https://bleach-anime.com/"
            target="_blank"
            rel="noreferrer"
          >
            <SpotlightCard>
              <h3 className="text-3xl font-semibold">
                Official Website
              </h3>

              <p className="mt-4 text-gray-400 max-w-xl">
                News, visuals, announcements, and official Bleach information.
              </p>

              <span className="mt-8 inline-block text-sm tracking-widest text-gray-500">
                VISIT SITE →
              </span>
            </SpotlightCard>
          </a>

        </div>
      </div>
    </section>
  );
}

export default Links;
