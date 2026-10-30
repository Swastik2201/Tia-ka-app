import React, { useState } from 'react';
import { Heart, HelpCircle, Code, Image as ImageIcon, Sparkles, X } from 'lucide-react';
import { AnniversaryData } from '../data/anniversaryData';

interface FooterProps {
  data: AnniversaryData;
}

export const Footer: React.FC<FooterProps> = ({ data }) => {
  const [showGuide, setShowGuide] = useState(false);

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

        {/* Quick customization guide button */}
        <button
          onClick={() => setShowGuide(true)}
          className="mt-6 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 hover:bg-rose-50 text-rose-600 border border-rose-200 text-xs font-medium shadow-sm transition-all"
        >
          <HelpCircle className="w-3.5 h-3.5" />
          <span>How to drop your own photos & custom text</span>
        </button>
      </div>

      {/* Customization Modal */}
      {showGuide && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm text-left">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-rose-200 relative animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setShowGuide(false)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-gray-100 hover:bg-rose-100 text-gray-500 hover:text-rose-600 flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-rose-500" />
              <h3 className="font-serif text-xl font-bold text-gray-900">
                Customizing Your Anniversary App
              </h3>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-gray-600">
              <div className="p-3.5 rounded-2xl bg-rose-50/70 border border-rose-100">
                <div className="flex items-center gap-2 font-semibold text-rose-900 mb-1">
                  <ImageIcon className="w-4 h-4 text-rose-600" />
                  <span>1. Adding Real Photos</span>
                </div>
                <p>
                  Place your photos inside the <code className="bg-white px-1.5 py-0.5 rounded text-rose-700 font-mono">public/images/</code> folder (e.g. <code className="bg-white px-1.5 py-0.5 rounded text-rose-700 font-mono">photo-1.jpg</code>), then update the URLs in <code className="bg-white px-1.5 py-0.5 rounded text-rose-700 font-mono">src/data/anniversaryData.ts</code>!
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-rose-50/70 border border-rose-100">
                <div className="flex items-center gap-2 font-semibold text-rose-900 mb-1">
                  <Code className="w-4 h-4 text-rose-600" />
                  <span>2. Editing Text, Dates & Letter</span>
                </div>
                <p>
                  All names, dates, stats, captions, and love letter paragraphs are centralized inside <code className="bg-white px-1.5 py-0.5 rounded text-rose-700 font-mono">src/data/anniversaryData.ts</code>. Simply change the values to personalize it completely.
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-rose-50/70 border border-rose-100">
                <div className="flex items-center gap-2 font-semibold text-rose-900 mb-1">
                  <Sparkles className="w-4 h-4 text-rose-600" />
                  <span>3. Custom Romantic Music</span>
                </div>
                <p>
                  Drop your favorite romantic song into <code className="bg-white px-1.5 py-0.5 rounded text-rose-700 font-mono">public/audio/bg-music.mp3</code>. If no file is provided, an ambient romantic music synthesizer plays automatically.
                </p>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setShowGuide(false)}
                className="px-5 py-2 rounded-full bg-rose-500 hover:bg-rose-600 text-white text-xs font-semibold shadow-md transition-colors"
              >
                Got it, thank you!
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
