Antigravity Step-by-Step Prompt Sequence

Execute these prompts in sequence within Antigravity to build and launch the anniversary web application.

Step 1: Project Initialization & Configuration

Agent: architect-agent

Prompt:

"Initialize a new React + TypeScript web application using Vite and Tailwind CSS. Install dependencies: framer-motion, lucide-react, canvas-confetti, and @types/canvas-confetti. Configure tailwind.config.js with a romantic pastel pink color palette (blush, rose, cream) and import elegant fonts ('Playfair Display' for headings, 'Plus Jakarta Sans' for text) in index.html. Set up a centralized data file src/data/anniversaryData.ts containing placeholder strings for our names, anniversary date, photo entries (url, caption, date), and anniversary letter text."

Step 2: Global Layout & Pastel Theme Setup

Agent: ui-stylist-agent

Prompt:

"Create a persistent layout component with a dreamy soft pink radial gradient background (bg-gradient-to-br from-rose-50 via-pink-100 to-rose-200) and subtle floating particle/heart animations in the background using Framer Motion. Add an aesthetic top navigation bar or floating pill navigation allowing smooth navigation between: 'Welcome', 'Our Memories', and 'Love Letter', along with a gentle floating background audio toggle button in the top corner."

Step 3: Welcome Screen Implementation

Agent: motion-agent

Prompt:

"Build src/components/WelcomeSection.tsx. Design a full-height romantic hero section that greets my girlfriend for our 1-year anniversary. Include:

Animated title with glowing pink accents (e.g., 'Happy 1st Anniversary, My Love ❤️').

A milestone badge: '365 Days of Loving You'.

A romantic call-to-action button ('Open Our Story 💌') with a pulse effect that automatically scrolls down or transitions smoothly into the 'Our Photos' gallery section."

Step 4: Photo Gallery with Lightbox Enlargement

Agent: gallery-agent

Prompt:

"Build src/components/PhotoGallery.tsx and src/components/PhotoModal.tsx.

Display photos in a responsive Pinterest/masonry or polished grid layout with polaroid-style white borders, soft drop shadows, and subtle hover tilt effects.

Display a short caption and memory date beneath each picture.

When any photo is clicked, open a smooth Framer Motion modal lightbox that enlarges the photo, dims the background, shows high-res details, and provides Next/Prev arrow buttons and a Close button. Include keyboard support (Escape, Left/Right arrow keys)."

Step 5: Interactive Love Letter & Celebration Finale

Agent: motion-agent

Prompt:

"Build src/components/LoveLetter.tsx.

Present the letter inside an interactive, aesthetic parchment card or an envelope that opens on click.

Display the 1-year anniversary letter with warm, heartfelt typography, decorative quotation marks, and a sign-off signature.

Add a celebratory interactive button at the end: 'Celebrate 1 Year 🎉' which triggers a heart-and-rose colored confetti burst using canvas-confetti.

Ensure all components are wired together seamlessly in src/App.tsx."

Step 6: Polish, Assets & Production Build

Agent: architect-agent

Prompt:

"Run a full build verification (npm run build). Verify responsiveness across mobile viewports (iPhone/Android screens) and desktop browsers. Replace placeholder images and text references with instructions on how to drop real photos into /public/images/ and update anniversaryData.ts."
