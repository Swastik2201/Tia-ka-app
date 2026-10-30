import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Calendar, MapPin, Heart } from 'lucide-react';
import { MemoryPhoto } from '../data/anniversaryData';

interface PhotoModalProps {
  photo: MemoryPhoto | null;
  currentIndex: number;
  totalPhotos: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export const PhotoModal: React.FC<PhotoModalProps> = ({
  photo,
  currentIndex,
  totalPhotos,
  onClose,
  onNext,
  onPrev,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!photo) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [photo, onClose, onNext, onPrev]);

  return (
    <AnimatePresence>
      {photo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6">
          {/* Dimmed Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative max-w-4xl w-full max-h-[92vh] flex flex-col bg-white rounded-3xl overflow-hidden shadow-2xl z-10 border border-white/40"
          >
            {/* Header controls */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-gray-100 bg-white/95 backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 text-rose-600 text-xs font-semibold">
                  <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
                  Memory {currentIndex + 1} of {totalPhotos}
                </span>
              </div>

              <button
                onClick={onClose}
                id="close-lightbox"
                className="w-9 h-9 rounded-full bg-gray-100 hover:bg-rose-100 text-gray-500 hover:text-rose-600 flex items-center justify-center transition-colors"
                aria-label="Close photo preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Photo & Navigation */}
            <div className="relative flex-1 bg-neutral-950 flex items-center justify-center overflow-hidden min-h-[300px] sm:min-h-[460px]">
              <motion.img
                key={photo.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                src={photo.url}
                alt={photo.title}
                className="max-h-[60vh] w-auto max-w-full object-contain mx-auto select-none"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/images/photo-1.jpg";
                }}
              />

              {/* Prev Button */}
              <button
                onClick={onPrev}
                id="prev-photo-button"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-sm flex items-center justify-center transition-transform hover:scale-110 active:scale-95"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Next Button */}
              <button
                onClick={onNext}
                id="next-photo-button"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-sm flex items-center justify-center transition-transform hover:scale-110 active:scale-95"
                aria-label="Next photo"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Caption & Details Footer */}
            <div className="p-5 sm:p-6 bg-white flex flex-col gap-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-gray-900">
                  {photo.title}
                </h3>
                <div className="flex items-center gap-3 text-xs text-gray-500">
                  {photo.date && (
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-rose-500" />
                      {photo.date}
                    </span>
                  )}
                  {photo.location && (
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-rose-500" />
                      {photo.location}
                    </span>
                  )}
                </div>
              </div>

              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                {photo.caption}
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
