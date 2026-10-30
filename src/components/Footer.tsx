import React from 'react';
import { Heart } from 'lucide-react';
import { AnniversaryData } from '../data/anniversaryData';

interface FooterProps {
  data: AnniversaryData;
}

export const Footer: React.FC<FooterProps> = ({ data }) => {
  return (
    <footer className="relative py-12 border-t border-rose-200/60 bg-white/40 backdrop-blur-sm text-center z-10">
      <div className="max-w-4xl mx-auto px-4 flex flex-col items-center">
        <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center text-rose-500 mb-4 shadow-sm">
          <Heart className="w-5 h-5 fill-rose-500" />
        </div>

        <p className="font-serif text-lg font-bold text-gray-800">
          Happy 1st Anniversary, {data.partnerName} & {data.yourName}
        </p>

        <p className="text-xs text-gray-600 mt-1 max-w-sm">
          Every moment of 365 days cherished, and a lifetime of love to come.
        </p>
      </div>
    </footer>
  );
};
