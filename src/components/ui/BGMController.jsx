import React, { useState, useRef, useEffect } from "react";

export default function BGMController() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // Attempt to auto-play on load
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.4; // Set a nice background level
      const playPromise = audio.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch((error) => {
            console.log("Autoplay prevented. User interaction required.");
            setIsPlaying(false);
          });
      }
    }
  }, []);

  const toggleAudio = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[9999]">
      <button
        onClick={toggleAudio}
        className="
          group
          relative
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-full
          bg-white/10
          backdrop-blur-md
          border border-white/20
          text-white
          transition-all
          duration-300
          hover:bg-white/20
          hover:scale-110
          hover:border-white/40
          cursor-pointer
        "
      >
        {/* Glow Effect */}
        <span className="absolute inset-0 rounded-full bg-white/5 blur-lg transition-opacity group-hover:bg-white/10" />

        {/* Icons (Standard SVGs, no external library needed) */}
        {isPlaying ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <line x1="23" x2="17" y1="9" y2="15" />
            <line x1="17" x2="23" y1="9" y2="15" />
          </svg>
        )}
      </button>

      {/* The Audio Element */}
      <audio ref={audioRef} src="/audio/bgm.mp3" loop />
    </div>
  );
}