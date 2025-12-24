// src/audio/audioManager.js

let MAIN;
let muted = true;
let unlocked = false;

export function initMAIN() {
  if (MAIN) return;

  MAIN = new Audio("/audio/MAIN.mp3");
  MAIN.loop = true;
  MAIN.volume = 0;
  MAIN.muted = false;

  // autoplay muted (allowed)
  MAIN.play().catch(() => {});
}

// 🔓 MUST be called from a real user gesture
export function unlockAudio() {
  if (!MAIN || unlocked) return;

  MAIN.play()
    .then(() => {
      unlocked = true;
      MAIN.volume = muted ? 0 : 1;
    })
    .catch(() => {});
}

export function muteMAIN() {
  if (!MAIN) return;
  MAIN.volume = 0;
  muted = true;
}

export function unmuteMAIN() {
  if (!MAIN || !unlocked) return;
  MAIN.volume = 1;
  muted = false;
}

export function toggleMute() {
  muted ? unmuteMAIN() : muteMAIN();
}

export function isMuted() {
  return muted;
}
