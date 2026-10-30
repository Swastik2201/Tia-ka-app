Project Requirements & Dependencies

1. Project Overview

A romantic, responsive 1st-year anniversary web application featuring:

Theme: Soft pastel pink aesthetic (rose, blush, warm cream, subtle glow effects, romantic typography).

Core Sections:

Welcome Screen: Personalized greeting, romantic animation/floating hearts, and an interactive "Open Our Story" / "Continue" button.

Our Photos Gallery: Responsive grid/masonry gallery with lightbox/modal view to enlarge and view photos with captions/dates.

Love Letter: Parchment/envelope styled interactive letter with gentle reveal/scroll animation and heartfelt typography.

Background Music Player (Optional toggle): Subtle romantic ambient music audio toggle.

2. Tech Stack & Environment

Runtime: Node.js (v18+ or v20+)

Framework: Next.js 14 (App Router) or Vite + React

Styling: Tailwind CSS + lucide-react (for icons)

Animation: Framer Motion (for smooth fades, floating hearts, and modal transitions)

Media Lightbox: yet-another-react-lightbox or custom Framer Motion modal

3. Package Dependencies

{
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "framer-motion": "^11.0.0",
    "lucide-react": "^0.360.0",
    "canvas-confetti": "^1.9.2",
    "clsx": "^2.1.0",
    "tailwind-merge": "^2.2.0"
  },
  "devDependencies": {
    "@types/react": "^18.3.0",
    "@types/react-dom": "^18.3.0",
    "@types/canvas-confetti": "^1.9.0",
    "tailwindcss": "^3.4.1",
    "postcss": "^8.4.35",
    "autoprefixer": "^10.4.18",
    "typescript": "^5.4.0",
    "vite": "^5.1.0",
    "@vitejs/plugin-react": "^4.2.1"
  }
}


4. Assets & Media Checklist

public/images/: Folder for anniversary photos (e.g., photo-1.jpg, photo-2.jpg, etc.).

public/audio/: Optional background romantic instrumental track (bg-music.mp3).

Google Fonts:

Header/Accent: Playfair Display or Great Vibes

Body: Inter or Plus Jakarta Sans
