import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Compass } from 'lucide-react';
import SectionHeading from './common/SectionHeading';
import { locationsData, locationIntro } from '../data/locations';

export const AreasWeServe = () => {
  return (
    <section id="areas" className="py-20 md:py-28 bg-gradient-to-b from-[#EAF4F1] via-[#E4F0EC] to-[#EAF4F1] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <SectionHeading
          badge="Service Locations"
          title="Areas We Serve"
          subtitle="Our services are available across Sonarpur and selected areas of Kolkata."
        />

        {/* Introductory Highlight Box with Soft Teal Mesh */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="snake-card max-w-3xl mx-auto mb-12 p-6 rounded-3xl border border-[#176B78]/25 text-center shadow-xs cursor-pointer"
        >
          <div className="flex items-center justify-center gap-2 text-[#0F4C5C] font-extrabold text-sm mb-2">
            <Compass className="w-4 h-4 text-[#D79B3D]" />
            <span>Kolkata & South 24 Parganas Service Hub</span>
          </div>
          <p className="text-sm sm:text-base text-[#0E2A32] leading-relaxed font-semibold">
            "{locationIntro}"
          </p>
        </motion.div>

        {/* 15 Locations Responsive Grid with Tinted Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-5">
          {locationsData.map((loc, idx) => (
            <motion.div
              key={loc.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: (idx % 5) * 0.05 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="snake-card group flex items-center gap-2.5 sm:gap-3 p-3 sm:p-4 rounded-2xl border border-[#176B78]/18 shadow-[0_4px_16px_rgba(15,76,92,0.05)] hover:shadow-lg transition-all duration-200 cursor-pointer"
            >
              <div className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#DCEEE8] text-[#0F4C5C] group-hover:bg-[#0F4C5C] group-hover:text-white shrink-0 transition-colors duration-200 shadow-xs">
                <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D79B3D] group-hover:text-white transition-colors" />
              </div>
              <div className="text-left overflow-hidden min-w-0">
                <div className="font-extrabold text-xs sm:text-sm text-[#0F4C5C] group-hover:text-[#176B78] truncate transition-colors">
                  {loc.name}
                </div>
                <div className="text-[10px] text-[#4F6D74] font-bold tracking-wide truncate">
                  PIN {loc.pin}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Area Note */}
        <div className="mt-12 text-center">
          <p className="text-xs text-[#4F6D74] max-w-xl mx-auto font-medium">
            Need home care assistance in your neighborhood? Contact our Sonarpur desk to confirm attendant availability for your exact pincode.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AreasWeServe;
