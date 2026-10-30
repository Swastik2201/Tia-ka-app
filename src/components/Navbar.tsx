import React, { useState, useEffect } from 'react';
import { Heart, Sparkles, Image, Mail } from 'lucide-react';
import { AudioPlayer } from './AudioPlayer';

interface NavbarProps {
  partnerName: string;
}

export const Navbar: React.FC<NavbarProps> = ({ partnerName }) => {
  const [activeSection, setActiveSection] = useState<'welcome' | 'memories' | 'letter'>('welcome');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const welcomeEl = document.getElementById('welcome');
      const memoriesEl = document.getElementById('memories');
      const letterEl = document.getElementById('letter');

      const scrollPos = window.scrollY + 250;

      if (letterEl && scrollPos >= letterEl.offsetTop) {
        setActiveSection('letter');
      } else if (memoriesEl && scrollPos >= memoriesEl.offsetTop) {
        setActiveSection('memories');
      } else {
        setActiveSection('welcome');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center px-4 py-3 sm:py-4 pointer-events-none">
      <nav 
        className={`pointer-events-auto transition-all duration-300 w-full max-w-4xl flex items-center justify-between px-4 sm:px-6 py-2.5 rounded-full border ${
          scrolled 
            ? 'glass-pill shadow-romantic bg-white/90 border-rose-200/80 backdrop-blur-md' 
            : 'bg-white/70 border-white/60 backdrop-blur-sm'
        }`}
      >
        {/* Brand / Title */}
        <button 
          onClick={() => scrollToSection('welcome')}
          className="flex items-center gap-1.5 font-serif text-rose-800 hover:text-rose-600 transition-colors group"
        >
          <span className="flex items-center justify-center w-7 h-7 rounded-full bg-rose-100 text-rose-500 group-hover:scale-110 transition-transform">
            <Heart className="w-4 h-4 fill-rose-500" />
          </span>
          <span className="font-semibold text-sm sm:text-base tracking-wide font-serif">
            For {partnerName}
          </span>
        </button>

        {/* Navigation links */}
        <div className="flex items-center gap-1 sm:gap-2">
          <button
            onClick={() => scrollToSection('welcome')}
            className={`px-2.5 sm:px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 flex items-center gap-1.5 ${
              activeSection === 'welcome'
                ? 'bg-rose-100 text-rose-700 font-semibold'
                : 'text-gray-600 hover:text-rose-600 hover:bg-rose-50/50'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 sm:inline hidden text-rose-400" />
            <span>Welcome</span>
          </button>

          <button
            onClick={() => scrollToSection('memories')}
            className={`px-2.5 sm:px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 flex items-center gap-1.5 ${
              activeSection === 'memories'
                ? 'bg-rose-100 text-rose-700 font-semibold'
                : 'text-gray-600 hover:text-rose-600 hover:bg-rose-50/50'
            }`}
          >
            <Image className="w-3.5 h-3.5 sm:inline hidden text-rose-400" />
            <span>Our Memories</span>
          </button>

          <button
            onClick={() => scrollToSection('letter')}
            className={`px-2.5 sm:px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 flex items-center gap-1.5 ${
              activeSection === 'letter'
                ? 'bg-rose-100 text-rose-700 font-semibold'
                : 'text-gray-600 hover:text-rose-600 hover:bg-rose-50/50'
            }`}
          >
            <Mail className="w-3.5 h-3.5 sm:inline hidden text-rose-400" />
            <span>Love Letter</span>
          </button>
        </div>

        {/* Music Player */}
        <div className="flex items-center">
          <AudioPlayer />
        </div>
      </nav>
    </header>
  );
};
