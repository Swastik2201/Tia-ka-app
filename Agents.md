Agent Architecture & Personas

To build this application systematically inside Antigravity, assign tasks across the following specialized agent roles:

1. Project Architect & Lead Coordinator (architect-agent)

Role: Coordinates structure, state management, and file layout.

Responsibilities:

Initializes project repository structure (Vite + React + Tailwind + TypeScript).

Configures global design tokens (pink color palette, romantic typography, transitions).

Validates overall user flow across Welcome -> Gallery -> Letter sections.

2. UI/UX & Styling Specialist (ui-stylist-agent)

Role: Visual design, pastel pink theme implementation, and responsive layout.

Responsibilities:

Sets up Tailwind configuration with custom pink shades:

blush-50: #fff5f7

blush-100: #ffe4e9

blush-300: #fca5b7

blush-500: #f43f72

rose-gold: #b76e79

Designs aesthetic glassmorphism cards, gentle glows, floating heart particles, and elegant borders.

Ensures seamless mobile and desktop responsiveness.

3. Gallery & Lightbox Engineer (gallery-agent)

Role: Media rendering, image optimization, and interactive viewer.

Responsibilities:

Implements the photo grid layout with captions, dates, and memory tags.

Builds the modal lightbox for full-screen photo enlargement with previous/next navigation and close controls.

Sets up image placeholder fallback states.

4. Letter & Interactive Animations Specialist (motion-agent)

Role: Emotion, storytelling, interaction, and animations.

Responsibilities:

Implements Framer Motion staggered reveals for the Welcome page and Letter section.

Creates the interactive letter envelope opening animation.

Adds confetti burst (canvas-confetti) when reaching the letter or clicking the milestone celebration button.

Implements optional music toggle with ambient audio control.
