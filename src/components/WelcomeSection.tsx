import React from 'react';
import { motion } from 'framer-motion';
import { Heart, CalendarHeart, Clock, Sparkles, Infinity, ChevronDown } from 'lucide-react';
import { AnniversaryData } from '../data/anniversaryData';

interface WelcomeSectionProps {
  data: AnniversaryData;
  onExplore: () => void;
}

const iconMap: Record<string, React.ReactNode> = {
  CalendarHeart: <CalendarHeart className="w-5 h-5 text-rose-500" />,
  Clock: <Clock className="w-5 h-5 text-rose-500" />,
  Sparkles: <Sparkles className="w-5 h-5 text-rose-500" />,
  Infinity: <Infinity className="w-5 h-5 text-rose-500" />,
};

export const WelcomeSection: React.FC<WelcomeSectionProps> = ({ data, onExplore }) => {
  return (
    <section
      id="welcome"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-24 pb-16 text-center"
    >
      <div className="max-w-3xl mx-auto flex flex-col items-center z-10">
        {/* Milestone Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-100/90 border border-rose-200/90 text-rose-700 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-6 shadow-sm"
        >
          <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500 animate-pulse" />
          <span>{data.milestoneTitle}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-rose-400"></span>
          <span className="lowercase font-normal text-rose-600">{data.anniversaryDate}</span>
        </motion.div>

        {/* Hero Greeting */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold text-gray-900 leading-tight tracking-tight mb-4"
        >
          Happy <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600 text-glow-rose">1st Anniversary</span>,
          <br />
          <span className="font-cursive text-5xl sm:text-7xl md:text-8xl text-rose-600 block mt-2 font-normal">
            My Love {data.partnerName}
          </span>
        </motion.h1>

        {/* Romantic Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base sm:text-xl text-gray-700 max-w-2xl leading-relaxed font-light mb-10"
        >
          {data.heroSubtext}
        </motion.p>

        {/* Milestone Statistics Cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 w-full max-w-2xl mb-10"
        >
          {data.metrics.map((metric, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-4 flex flex-col items-center text-center transition-all duration-300 hover:scale-105 hover:border-rose-300 shadow-sm"
            >
              <div className="w-10 h-10 rounded-full bg-rose-100/80 flex items-center justify-center mb-2">
                {iconMap[metric.iconName] || <Heart className="w-5 h-5 text-rose-500" />}
              </div>
              <span className="font-serif text-xl sm:text-2xl font-bold text-gray-800">
                {metric.value}
              </span>
              <span className="text-xs font-semibold text-rose-600 mt-0.5">
                {metric.label}
              </span>
              {metric.subtext && (
                <span className="text-[11px] text-gray-600 mt-0.5 line-clamp-1">
                  {metric.subtext}
                </span>
              )}
            </div>
          ))}
        </motion.div>

        {/* Romantic Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <button
            id="open-story-button"
            onClick={onExplore}
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full font-serif font-semibold text-base sm:text-lg text-white bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600 shadow-romantic-lg hover:shadow-rose-400/50 hover:scale-105 transition-all duration-300 active:scale-95"
          >
            <span>Open Our Story</span>
            <span className="text-xl transition-transform group-hover:rotate-12 duration-300">💌</span>
            <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none" />
          </button>
        </motion.div>
      </div>

      {/* Subtle Down Indicator */}
      <motion.button
        onClick={onExplore}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-rose-400 hover:text-rose-600 flex flex-col items-center gap-1 transition-colors"
        aria-label="Scroll to memories"
      >
        <span className="text-xs uppercase tracking-widest font-sans font-medium">Scroll to explore</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </motion.button>
    </section>
  );
};
