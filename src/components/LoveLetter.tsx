import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Mail, Heart, Sparkles, Feather, PartyPopper } from 'lucide-react';
import { AnniversaryData } from '../data/anniversaryData';

interface LoveLetterProps {
  letterData: AnniversaryData['letter'];
  partnerName: string;
}

export const LoveLetter: React.FC<LoveLetterProps> = ({ letterData, partnerName }) => {
  const [isOpen, setIsOpen] = useState(false);

  const fireRomanticConfetti = () => {
    // Multi-stage romantic confetti explosion
    const end = Date.now() + 2.5 * 1000;
    const colors = ['#f43f72', '#fb7185', '#fca5b7', '#ffe4e9', '#ffd700', '#ffffff'];

    (function frame() {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors,
      });
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  };

  const handleOpenEnvelope = () => {
    setIsOpen(true);
    fireRomanticConfetti();
  };

  return (
    <section id="letter" className="relative py-24 px-4 sm:px-6 max-w-4xl mx-auto z-10">
      {/* Section Header */}
      <div className="text-center max-w-xl mx-auto mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100 text-rose-600 text-xs font-semibold uppercase tracking-wider mb-3">
          <Feather className="w-3.5 h-3.5 text-rose-500" />
          <span>From My Heart To Yours</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-5xl font-bold text-gray-900 mb-3">
          Our Anniversary <span className="font-cursive text-rose-600 text-4xl sm:text-6xl font-normal">Love Letter</span>
        </h2>
        <p className="text-gray-600 text-sm sm:text-base">
          A personal note written just for you, {partnerName}.
        </p>
      </div>

      {/* Interactive Envelope / Letter Container */}
      <div className="flex flex-col items-center">
        <AnimatePresence mode="wait">
          {!isOpen ? (
            /* Closed Interactive Envelope */
            <motion.div
              key="closed-envelope"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0, y: -20 }}
              whileHover={{ scale: 1.02 }}
              onClick={handleOpenEnvelope}
              className="cursor-pointer group relative w-full max-w-lg bg-gradient-to-br from-rose-100 via-rose-50 to-pink-100 border-2 border-rose-200/90 rounded-3xl p-8 sm:p-12 shadow-romantic-lg flex flex-col items-center text-center transition-all duration-300 hover:border-rose-400"
            >
              {/* Envelope flap aesthetic */}
              <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-rose-200/50 to-transparent rounded-t-3xl pointer-events-none" />

              {/* Decorative Wax Seal */}
              <div className="relative mb-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-rose-600 to-rose-700 shadow-xl flex items-center justify-center border-4 border-rose-200 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Heart className="w-9 h-9 fill-rose-100 text-rose-100" />
                </div>
                <span className="absolute -bottom-1 -right-1 flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-rose-500"></span>
                </span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-gray-800 mb-2">
                For My Dearest {partnerName}
              </h3>
              <p className="text-sm text-gray-500 mb-6">
                {letterData.date ? `Sealed with all my love on ${letterData.date}` : "Sealed with all my love"}
              </p>

              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-rose-500 text-white font-medium text-sm shadow-md group-hover:bg-rose-600 transition-colors">
                <Mail className="w-4 h-4" />
                <span>Click to Break Seal & Read Letter</span>
              </div>
            </motion.div>
          ) : (
            /* Open Parchment Letter */
            <motion.div
              key="open-letter"
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative w-full max-w-2xl parchment-texture rounded-3xl p-7 sm:p-14 shadow-2xl border border-parchmentBorder relative overflow-hidden"
            >
              {/* Decorative vintage ribbon accent */}
              <div className="absolute top-0 left-10 w-8 h-12 bg-rose-500 shadow-sm flex items-end justify-center pb-1">
                <Heart className="w-3.5 h-3.5 text-white fill-white" />
              </div>

              {/* Date Header */}
              {letterData.date && (
                <div className="text-right text-xs font-serif text-gray-600 italic mb-8">
                  {letterData.date}
                </div>
              )}

              {/* Greeting */}
              <h3 className="font-cursive text-4xl sm:text-5xl text-rose-700 font-normal mb-8">
                {letterData.greeting}
              </h3>

              {/* Decorative Opening Quotation Mark */}
              <div className="text-rose-200 font-serif text-6xl sm:text-7xl leading-none select-none -mb-3 opacity-70">
                “
              </div>

              {/* Letter Paragraphs */}
              <div className="space-y-6 text-gray-700 font-serif text-base sm:text-lg leading-relaxed relative z-10 pl-2">
                {letterData.paragraphs.map((p, idx) => (
                  <p
                    key={idx}
                    className={
                      idx === 0
                        ? "first-letter:text-3xl first-letter:font-bold first-letter:text-rose-600 first-letter:mr-0.5"
                        : ""
                    }
                  >
                    {p}
                  </p>
                ))}
              </div>

              {/* Decorative Closing Quotation Mark */}
              <div className="text-right text-rose-200 font-serif text-6xl sm:text-7xl leading-none select-none -mt-3 opacity-70 pr-2">
                ”
              </div>

              {/* Sign-off & Handwritten Signature */}
              <div className="mt-12 pt-6 border-t border-rose-200/60 flex flex-col items-end">
                <span className="text-gray-500 font-serif italic text-sm mb-1">
                  {letterData.signOff}
                </span>
                <span className="font-cursive text-4xl sm:text-5xl text-rose-600">
                  {letterData.signature}
                </span>
              </div>

              {/* Interactive Celebration Finale */}
              <div className="mt-12 pt-8 border-t border-dashed border-rose-300 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-xs text-rose-600 hover:text-rose-800 underline underline-offset-4 font-sans order-2 sm:order-1"
                >
                  Fold letter back into envelope
                </button>

                <button
                  id="celebrate-confetti-button"
                  onClick={fireRomanticConfetti}
                  className="order-1 sm:order-2 inline-flex items-center gap-2 px-6 py-3 rounded-full font-serif font-bold text-sm sm:text-base text-white bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600 shadow-romantic hover:scale-105 active:scale-95 transition-all duration-200"
                >
                  <PartyPopper className="w-4 h-4" />
                  <span>Celebrate 1 Year 🎉</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
