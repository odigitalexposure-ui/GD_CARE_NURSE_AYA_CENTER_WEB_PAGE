import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PhoneCall } from 'lucide-react';
import { businessInfo } from '../../data/businessInfo';

export const FloatingCall = () => {
  const [isHovered, setIsHovered] = useState(false);
  const phoneNumber = businessInfo.contact.phone;
  const callHref = businessInfo.contact.callHref;

  return (
    <div className="hidden sm:flex fixed sm:bottom-22 sm:right-6 z-40 items-center flex-row-reverse gap-3">
      {/* Pulse & Direct Call Button */}
      <motion.a
        href={callHref}
        aria-label={`Call GD Care directly at ${phoneNumber}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-[#092F38] via-[#0F4C5C] to-[#176B78] text-white shadow-xl hover:shadow-2xl border-2 border-[#D79B3D]/70 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-[#0F4C5C]/50 call-pulse"
      >
        <PhoneCall className="w-5 h-5 sm:w-6 sm:h-6 text-[#F5C77E] animate-pulse" />
      </motion.a>

      {/* Tooltip on Hover / Desktop */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="hidden sm:flex items-center gap-2 bg-[#092F38] text-white text-xs font-semibold px-3 py-2 rounded-lg shadow-lg whitespace-nowrap border border-[#D79B3D]/30"
          >
            <span>Call Now: <strong className="text-[#F5C77E]">{phoneNumber}</strong></span>
            <div className="w-2 h-2 bg-[#D79B3D] rounded-full animate-ping" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FloatingCall;
