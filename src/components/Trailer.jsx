function Trailer() {
  return (
    <section className="relative w-full py-32 bg-[#0a0a0c] flex justify-center">
      
      {/* Wide landscape wrapper */}
      <div className="relative w-[97%] max-w-[1500px]">


        {/* Video card */}
        <div className="relative aspect-[21/9] overflow-hidden rounded-[28px] bg-black shadow-[0_40px_120px_rgba(0,0,0,0.85)]">

          <video
            src="/bleach-trailer.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />

        </div>
      </div>

    </section>
  );
}

export default Trailer;
