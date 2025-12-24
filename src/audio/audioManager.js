// src/audio/audioManager.js

let MAIN = null;
let muted = true;

export function initMAIN() {
  if (MAIN) return;

  MAIN = new Audio("/audio/MAIN.mp3");
  MAIN.loop = true;
  MAIN.volume = 0;       // start muted
  MAIN.muted = false;

  // autoplay muted (browser-legal)
  MAIN.play().catch(() => {});
}

export function muteMAIN() {
  if (!MAIN) return;
  MAIN.volume = 0;
  muted = true;
}

export function unmuteMAIN() {
  if (!MAIN) return;
  MAIN.volume = 1;
  muted = false;
}

export function toggleMute() {
  muted ? unmuteMAIN() : muteMAIN();
}

export function isMuted() {
  return muted;
}
