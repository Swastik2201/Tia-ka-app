import React from 'react';
import { FloatingHearts } from './components/FloatingHearts';
import { Navbar } from './components/Navbar';
import { WelcomeSection } from './components/WelcomeSection';
import { PhotoGallery } from './components/PhotoGallery';
import { LoveLetter } from './components/LoveLetter';
import { Footer } from './components/Footer';
import { anniversaryData } from './data/anniversaryData';

export function App() {
  const scrollToMemories = () => {
    const el = document.getElementById('memories');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-rose-50 via-pink-100 to-rose-200 text-gray-800 selection:bg-rose-200 selection:text-rose-800">
      {/* Floating Ambient Hearts & Orbs */}
      <FloatingHearts />

      {/* Floating Pill Header / Nav */}
      <Navbar partnerName={anniversaryData.partnerName} />

      {/* Main Content Sections */}
      <main className="relative z-10 flex flex-col">
        {/* Hero / Welcome */}
        <WelcomeSection 
          data={anniversaryData} 
          onExplore={scrollToMemories} 
        />

        {/* Polaroid Memory Gallery with Lightbox */}
        <PhotoGallery 
          photos={anniversaryData.photos} 
        />

        {/* Interactive Wax-Sealed Love Letter with Confetti */}
        <LoveLetter 
          letterData={anniversaryData.letter} 
          partnerName={anniversaryData.partnerName} 
        />
      </main>

      {/* Footer & Customization Guide */}
      <Footer data={anniversaryData} />
    </div>
  );
}

export default App;
