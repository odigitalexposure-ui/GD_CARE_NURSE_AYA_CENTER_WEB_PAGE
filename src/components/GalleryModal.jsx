import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';

export const GalleryModal = ({
  isOpen,
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext
}) => {
  // Handle Keyboard Navigation (Esc, Left, Right)
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        onPrev();
      } else if (e.key === 'ArrowRight') {
        onNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onPrev, onNext, onClose]);

  if (!isOpen || !images || images.length === 0) return null;

  const currentImage = images[currentIndex] || images[0];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Image gallery lightbox"
        >
          {/* Top Bar Controls */}
          <div
            className="absolute top-4 left-4 right-4 flex items-center justify-between z-20 text-white"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image Counter */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/15 backdrop-blur-md text-xs sm:text-sm font-bold tracking-wider">
              <span>{currentIndex + 1}</span>
              <span className="text-white/50">/</span>
              <span>{images.length}</span>
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-2.5 rounded-full bg-white/15 hover:bg-white/30 text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Close gallery"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            className="absolute left-3 sm:left-6 z-20 p-3 rounded-full bg-white/15 hover:bg-white/30 text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white hover:scale-110 active:scale-95"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>

          {/* Main Image Container */}
          <div
            className="relative max-w-5xl max-h-[85vh] flex flex-col items-center justify-center z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.div
              key={currentImage.id || currentIndex}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20"
            >
              <img
                src={currentImage.src}
                alt={currentImage.alt || 'GD Care photo'}
                className="max-h-[66vh] sm:max-h-[75vh] w-auto object-contain rounded-2xl"
              />

              {/* Bottom Caption Bar */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-3 sm:p-4 text-white text-left">
                <h4 className="text-xs sm:text-base font-bold truncate">
                  {currentImage.title}
                </h4>
                <p className="text-[11px] sm:text-xs text-teal-200/90 flex items-center gap-1 mt-0.5 truncate">
                  <MapPin className="w-3 h-3 text-[#D79B3D] shrink-0" />
                  <span className="truncate">{currentImage.alt}</span>
                </p>
              </div>
            </motion.div>
          </div>

          {/* Navigation Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute right-3 sm:right-6 z-20 p-3 rounded-full bg-white/15 hover:bg-white/30 text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white hover:scale-110 active:scale-95"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GalleryModal;
