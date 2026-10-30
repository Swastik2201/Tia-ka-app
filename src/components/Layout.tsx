import React, { ReactNode } from 'react';
import { FloatingHearts } from './FloatingHearts';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { anniversaryData } from '../data/anniversaryData';

interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-rose-50 via-pink-100 to-rose-200 text-gray-800 selection:bg-rose-200 selection:text-rose-800 overflow-x-hidden">
      {/* Subtle dreamy radial gradient background accents */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-60 z-0" 
        style={{
          background: 'radial-gradient(circle at 50% 15%, rgba(254, 205, 214, 0.45) 0%, rgba(255, 245, 247, 0.2) 60%, transparent 100%)'
        }}
      />

      {/* Floating particle / heart animations using Framer Motion */}
      <FloatingHearts />

      {/* Aesthetic Floating Pill Navigation & Audio Toggle */}
      <Navbar partnerName={anniversaryData.partnerName} />

      {/* Page Content */}
      <div className="relative z-10 flex flex-col">
        {children}
      </div>

      {/* Persistent Romantic Footer */}
      <Footer data={anniversaryData} />
    </div>
  );
};
