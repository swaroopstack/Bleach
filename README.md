# Bleach Cinematic Website ⚔️

A cinematic, animation-heavy fan website inspired by *Bleach*, built to experiment with advanced frontend concepts like timeline-based animations, audio control under browser restrictions, and immersive UI transitions.

This project focuses on **experience over content** — creating a dramatic, anime-style intro flow similar to opening cinematics rather than a typical static website.

---

## 🔍 Project Overview

- Fully animated intro sequence with cinematic transitions  
- Scroll-based and timeline-based animations  
- Controlled background music and trailer playback  
- Responsive layout with desktop-first cinematic intent  
- Deployed as a live production build

The goal was **not** to clone an existing Bleach site, but to explore how far modern frontend tools can go in delivering a story-like web experience.

---

## 🛠 Tech Stack

- **Frontend:** React (Vite)
- **Styling:** CSS
- **Animations:** GSAP (timelines + ScrollTrigger)
- **Audio / Video:** HTML5 Media APIs
- **Build Tool:** Vite
- **Deployment:** Static hosting (production build)

---

## 🎬 Key Features

- **Cinematic Intro**
  - Multi-layer GSAP timeline
  - Controlled reveal of background, land, logo, and effects
- **Audio Handling**
  - User-interaction–based audio start (browser-compliant)
  - Manual volume toggle
  - One-shot cinematic audio + background music separation
- **Trailer Section**
  - Large media asset handling
  - Lazy loading considerations
- **Smooth Transitions**
  - Fade-in of main site after intro
  - Scroll-triggered animations for sections

---

## ⚠️ Challenges Faced (and Solved)

- **Browser autoplay restrictions**
  - Audio only starts after explicit user interaction
- **Heavy media assets**
  - MP4 loading delays required design compromises
- **State & ref coordination**
  - Managing audio, animation, and UI state together
- **Animation timing**
  - Preventing desync between visuals and sound

These challenges forced a deeper understanding of **how browsers actually behave**, not just how code “should” work.

---

## 📱 Responsiveness & Limitations

- Designed primarily for **desktop cinematic viewing**
- Works on mobile, but:
  - Some animations are intentionally simplified
  - Performance depends on device capability
- Safari/iOS autoplay limitations are handled, not bypassed

---

## 🚀 Deployment

The project is deployed and accessible publicly.  
Built using a production Vite build and hosted as a static site.

---

## 🧠 What This Project Demonstrates

- Practical React component structuring
- Advanced GSAP timeline usage
- Real-world audio/video constraints
- Debugging animation-heavy UI under pressure
- Completing and deploying a complex idea end-to-end

---

## 🔮 Future Improvements

- Media optimization (video compression, better loading strategy)
- Cleaner animation abstraction
- Improved mobile performance
- Codebase refactor for better readability and scalability

---

## 📌 Disclaimer

This is a **fan-made project** created for learning and experimentation.  
All rights to *Bleach* belong to their respective owners.

---

## 👤 Author

Built by **Swaroop Kumar**  
Frontend Developer | React | Animation-focused UI
