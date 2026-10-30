import React from 'react';
import { Layout } from './components/Layout';
import { WelcomeSection } from './components/WelcomeSection';
import { PhotoGallery } from './components/PhotoGallery';
import { LoveLetter } from './components/LoveLetter';
import { anniversaryData } from './data/anniversaryData';

export function App() {
  const scrollToMemories = () => {
    const el = document.getElementById('memories');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Layout>
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
    </Layout>
  );
}

export default App;
