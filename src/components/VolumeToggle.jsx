import { Volume2, VolumeX } from "lucide-react";

export default function VolumeToggle({ enabled, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className="
        fixed bottom-6 right-6
        z-[9999]
        w-12 h-12
        rounded-full
        bg-black/70 backdrop-blur-md
        border border-white/20
        flex items-center justify-center
        text-white
        hover:bg-black/90
        transition
      "
      aria-label="Toggle background music"
    >
      {enabled ? <Volume2 size={22} /> : <VolumeX size={22} />}
    </button>
  );
}
