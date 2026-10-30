# Tia's 1st Anniversary Web Application ❤️

A romantic, responsive 1st-year anniversary web application crafted with a dreamy soft pastel pink aesthetic, interactive Polaroid photo memories, audio player, wax-sealed love letter, and celebration confetti.

---

## ✨ Features

- **Soft Pastel Pink Aesthetic**: Curated blush, rose, cream, and rose-gold palette with custom typography (*Playfair Display*, *Great Vibes*, and *Plus Jakarta Sans*).
- **Floating Ambient Background**: Dreamy Framer Motion floating hearts and subtle glowing light orbs.
- **Glassmorphism Floating Navigation**: Pill-shaped header that tracks active sections and provides smooth scrolling.
- **Welcome Hero**: Animated greeting, milestone counter (365 Days of Loving You), live statistics, and a pulsating *"Open Our Story 💌"* call-to-action button.
- **Polaroid Photo Gallery**: Authentic tilted polaroid cards with drop shadows, hover elevation, dates, captions, and locations.
- **Interactive Full-Screen Lightbox**: High-res viewer with keyboard shortcuts (`Escape`, `ArrowLeft`, `ArrowRight`), next/prev buttons, and blurred backdrop.
- **Wax-Sealed Love Letter**: Interactive envelope that breaks its seal on click to reveal a vintage parchment love letter with handwritten signature.
- **Celebratory Finale**: Multi-stage rose and gold confetti burst powered by `canvas-confetti`.
- **Romantic Audio Player**: Ambient background music player in the navigation bar with support for local MP3s and an automatic Web Audio synthesizer fallback chime.

---

## 📸 How to Customize Real Photos & Text

All customizable data is centralized in **[`src/data/anniversaryData.ts`](file:///c:/Users/swastik/Desktop/tia%20app/src/data/anniversaryData.ts)**.

### 1. Adding Real Photos
1. Copy your photos into the `public/images/` folder (for example: `photo-1.jpg`, `photo-2.jpg`, etc.).
2. In `src/data/anniversaryData.ts`, update the `photos` array with your filenames:
   ```ts
   {
     id: "photo-1",
     url: "/images/photo-1.jpg",
     title: "Our First Date",
     caption: "The evening everything started...",
     date: "October 30, 2023",
     location: "Cafe & Bistro",
   }
   ```
*(Note: If you haven't added photos yet, high-resolution romantic placeholder photography is included by default).*

### 2. Changing Names, Dates & Stats
In `src/data/anniversaryData.ts`, you can customize:
- `partnerName`: e.g. `"Tia"`
- `yourName`: e.g. `"Swastik"`
- `anniversaryDate`: e.g. `"October 30"`
- `milestoneTitle`: e.g. `"365 Days of Loving You"`
- `metrics`: Milestone statistics (Days, Hours, Smiles, Infinity)

### 3. Personalizing the Love Letter
In `src/data/anniversaryData.ts`, update the `letter` object:
- `greeting`: Salutation (e.g. `"Dearest Tia,"`)
- `paragraphs`: Array of heartfelt paragraphs
- `signOff`: e.g. `"Forever & Always Yours,"`
- `signature`: e.g. `"Swastik ❤️"`

### 4. Custom Romantic Music
Drop your favorite romantic song into:
```
public/audio/bg-music.mp3
```
If this file is omitted, an ambient synthesized melody will play automatically when the music toggle is clicked.

---

## 🛠️ Tech Stack

- **Framework**: [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Celebration Effects**: [canvas-confetti](https://www.npmjs.com/package/canvas-confetti)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 🚀 Running the Project

### Development Server
```bash
npm run dev
```
Open **`http://localhost:5173/`** in your browser.

### Production Build
```bash
npm run build
```
The optimized bundle will be generated in the `dist/` folder.

### Preview Production Build
```bash
npm run preview
```