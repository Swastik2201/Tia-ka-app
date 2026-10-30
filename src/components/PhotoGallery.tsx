import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ZoomIn, Heart, Sparkles } from 'lucide-react';
import { MemoryPhoto } from '../data/anniversaryData';
import { PhotoModal } from './PhotoModal';

interface PhotoGalleryProps {
  photos: MemoryPhoto[];
}

export const PhotoGallery: React.FC<PhotoGalleryProps> = ({ photos }) => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedPhotoIndex(index);
  };

  const closeLightbox = () => {
    setSelectedPhotoIndex(null);
  };

  const showNextPhoto = () => {
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex + 1) % photos.length);
    }
  };

  const showPrevPhoto = () => {
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex - 1 + photos.length) % photos.length);
    }
  };

  return (
    <section id="memories" className="relative py-20 px-4 sm:px-6 max-w-7xl mx-auto z-10">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100 text-rose-600 text-xs font-semibold uppercase tracking-wider mb-3">
          <Sparkles className="w-3.5 h-3.5 text-rose-500" />
          <span>Our Visual Journey</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-5xl font-bold text-gray-900 mb-4">
          Capturing <span className="font-cursive text-rose-600 text-4xl sm:text-6xl font-normal">Our Favorite Moments</span>
        </h2>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
          Every picture holds a feeling, a laugh, and a piece of our 1-year story. Click on any Polaroid to enlarge and read the memory behind it.
        </p>
      </div>

      {/* Responsive Masonry / Polaroid Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {photos.map((photo, index) => {
          // Subtle alternating rotation angle for authentic polaroid look
          const tilts = [-1.5, 1.2, -0.8, 1.6, -1.2, 0.9];
          const tilt = tilts[index % tilts.length];

          return (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (index % 3) * 0.15 }}
              whileHover={{ 
                scale: 1.03, 
                rotate: 0, 
                zIndex: 20,
                transition: { duration: 0.25 }
              }}
              style={{ transform: `rotate(${tilt}deg)` }}
              onClick={() => openLightbox(index)}
              className="group cursor-pointer bg-white p-3.5 pb-6 rounded-2xl shadow-polaroid border border-rose-100/80 transition-shadow duration-300 hover:shadow-romantic-lg flex flex-col justify-between"
            >
              {/* Photo Image Frame */}
              <div className="relative w-full overflow-hidden rounded-xl bg-rose-50 aspect-[4/3] sm:aspect-square mb-4">
                <img
                  src={photo.url}
                  alt={photo.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=1200&q=80";
                  }}
                />

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-rose-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="px-3.5 py-1.5 rounded-full bg-white/90 text-rose-600 text-xs font-semibold flex items-center gap-1.5 shadow-md">
                    <ZoomIn className="w-3.5 h-3.5" />
                    <span>View Memory</span>
                  </div>
                </div>

                {/* Date Tag */}
                <div className="absolute bottom-2.5 left-2.5 px-2.5 py-1 rounded-md bg-black/40 backdrop-blur-sm text-white text-[11px] font-medium flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-rose-300" />
                  <span>{photo.date}</span>
                </div>
              </div>

              {/* Polaroid Bottom Caption area */}
              <div className="px-1 flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-serif font-bold text-lg text-gray-800 group-hover:text-rose-600 transition-colors line-clamp-1">
                      {photo.title}
                    </h3>
                    <Heart className="w-4 h-4 text-rose-300 group-hover:text-rose-500 group-hover:fill-rose-500 transition-colors flex-shrink-0" />
                  </div>
                  <p className="text-gray-600 text-xs sm:text-sm line-clamp-2 leading-relaxed">
                    {photo.caption}
                  </p>
                </div>

                {photo.location && (
                  <div className="mt-3 pt-2.5 border-t border-rose-50 flex items-center text-[11px] text-gray-600">
                    <MapPin className="w-3 h-3 text-rose-400 mr-1 flex-shrink-0" />
                    <span className="truncate">{photo.location}</span>
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      <PhotoModal
        photo={selectedPhotoIndex !== null ? photos[selectedPhotoIndex] : null}
        currentIndex={selectedPhotoIndex ?? 0}
        totalPhotos={photos.length}
        onClose={closeLightbox}
        onNext={showNextPhoto}
        onPrev={showPrevPhoto}
      />
    </section>
  );
};
