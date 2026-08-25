import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, ChevronDown, ChevronUp, Image as ImageIcon } from 'lucide-react';
import SectionHeading from './common/SectionHeading';
import GalleryModal from './GalleryModal';
import { galleryData, galleryCategories } from '../data/gallery';

export const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showAll, setShowAll] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const filteredImages = selectedCategory === 'All'
    ? galleryData
    : galleryData.filter((item) => item.category === selectedCategory);

  const initialCount = 6;
  const visibleImages = showAll ? filteredImages : filteredImages.slice(0, initialCount);

  const handleOpenModal = (index) => {
    setSelectedImageIndex(index);
    setModalOpen(true);
  };

  const handlePrev = () => {
    setSelectedImageIndex((prev) => (prev === 0 ? filteredImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSelectedImageIndex((prev) => (prev === filteredImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="gallery" className="py-20 md:py-28 bg-gradient-to-b from-[#EAF4F1] via-[#E2F0EC] to-[#EAF4F1] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <SectionHeading
          badge="Centre Gallery"
          title="GD Care Centre & Official Assets"
          subtitle="Authentic photographs of GD Care Nurse And Aya Centre office, consultation desk, entrance, and verified credentials in Sonarpur, Kolkata."
        />

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 md:mb-12">
          {galleryCategories.map((cat) => {
            const count = cat === 'All' 
              ? galleryData.length 
              : galleryData.filter((img) => img.category === cat).length;
            const isActive = selectedCategory === cat;

            return (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setShowAll(false);
                }}
                className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-extrabold transition-all duration-300 cursor-pointer flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-[#0F4C5C] text-white shadow-[0_4px_16px_rgba(15,76,92,0.25)] scale-105 border border-[#0F4C5C]'
                    : 'bg-white/80 hover:bg-white text-[#4F6D74] hover:text-[#0F4C5C] border border-[#176B78]/20 shadow-xs'
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-black ${
                    isActive
                      ? 'bg-[#D79B3D] text-[#092F38]'
                      : 'bg-[#EAF4F1] text-[#0F4C5C]'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          <AnimatePresence mode="popLayout">
            {visibleImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.3, delay: (index % 3) * 0.05 }}
                className="snake-card group relative h-64 sm:h-76 rounded-3xl overflow-hidden shadow-[0_8px_24px_rgba(15,76,92,0.08)] hover:shadow-2xl bg-white border border-white/80 cursor-pointer"
                onClick={() => handleOpenModal(index)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500"
                  loading="lazy"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#092F38]/95 via-[#0F4C5C]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6" />

                {/* Floating View Icon on Hover */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-13 h-13 rounded-full bg-white/95 text-[#0F4C5C] shadow-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 border border-white">
                    <Maximize2 className="w-5 h-5 stroke-[2.5]" />
                  </div>
                </div>

                {/* Card Caption Info */}
                <div className="absolute bottom-0 inset-x-0 p-5 text-white transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full bg-gradient-to-r from-[#D79B3D] to-[#F5C77E] text-[#092F38] inline-block mb-1.5 shadow-sm">
                    {image.category}
                  </span>
                  <h4 className="text-sm font-extrabold text-white drop-shadow-sm truncate">
                    {image.title}
                  </h4>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More / Show Less Toggle Button (if count exceeds initialCount) */}
        {filteredImages.length > initialCount && (
          <div className="mt-14 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-[#DCEEE8] to-[#E6F3EF] border border-[#176B78]/30 text-[#0F4C5C] font-black text-sm hover:bg-[#0F4C5C] hover:text-white shadow-sm hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#0F4C5C] cursor-pointer"
              aria-expanded={showAll}
            >
              <ImageIcon className="w-4 h-4" />
              <span>{showAll ? 'Show Less' : `View More (${filteredImages.length - initialCount} more)`}</span>
              {showAll ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      <GalleryModal
        isOpen={modalOpen}
        images={filteredImages}
        currentIndex={selectedImageIndex}
        onClose={() => setModalOpen(false)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </section>
  );
};

export default Gallery;
