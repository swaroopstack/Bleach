import { Volume2, VolumeX } from "lucide-react";
import {
  toggleMute,
  unlockAudio,
  isMuted
} from "../audio/audioManager";
import { useSyncExternalStore } from "react";

function subscribe(cb) {
  window.addEventListener("audio-state", cb);
  return () => window.removeEventListener("audio-state", cb);
}

function getSnapshot() {
  return isMuted();
}

export default function VolumeToggle() {
  const muted = useSyncExternalStore(subscribe, getSnapshot);

  const handleClick = (e) => {
    e.stopPropagation();       // prevents GSAP disturbance
    unlockAudio();             // 🔑 browser unlock
    toggleMute();              // mute / unmute only
    window.dispatchEvent(new Event("audio-state"));
  };

  return (
    <button
      onClick={handleClick}
      className="
        fixed bottom-6 right-6 z-[9999]
        w-12 h-12 rounded-full
        bg-black/70 backdrop-blur-md
        border border-white/20
        flex items-center justify-center
        text-white
        hover:bg-black/90
        transition
      "
    >
      {muted ? <VolumeX size={22} /> : <Volume2 size={22} />}
    </button>
  );
}
