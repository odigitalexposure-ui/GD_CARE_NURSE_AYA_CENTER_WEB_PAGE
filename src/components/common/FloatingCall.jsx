import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PhoneCall, Phone } from 'lucide-react';
import { businessInfo } from '../../data/businessInfo';

export const FloatingCall = () => {
  const [isOpen, setIsOpen] = useState(false);
  const phones = businessInfo.contact.phones;

  return (
    <div
      className="hidden sm:flex fixed sm:bottom-22 sm:right-6 z-40 items-center flex-row-reverse gap-3"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Floating Action Button */}
      <motion.button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Call GD Care Helplines"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-[#092F38] via-[#0F4C5C] to-[#176B78] text-white shadow-xl hover:shadow-2xl border-2 border-[#D79B3D]/70 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-[#0F4C5C]/50 call-pulse cursor-pointer"
      >
        <PhoneCall className="w-5 h-5 sm:w-6 sm:h-6 text-[#F5C77E] animate-pulse" />
      </motion.button>

      {/* Dual Helpline Popover */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="hidden sm:flex flex-col gap-2 bg-[#092F38] text-white p-3 rounded-2xl shadow-2xl border border-[#D79B3D]/40 min-w-[215px] backdrop-blur-md"
          >
            <div className="text-[10px] font-black uppercase tracking-wider text-[#F5C77E] px-1 flex items-center justify-between">
              <span>Direct Calling</span>
              <span className="w-2 h-2 bg-[#25D366] rounded-full animate-ping" />
            </div>

            <div className="flex flex-col gap-1.5 pt-0.5">
              {phones.map((item) => (
                <a
                  key={item.id}
                  href={item.callHref}
                  className="flex items-center justify-between gap-2 px-3 py-2 rounded-xl bg-white/10 hover:bg-[#D79B3D] hover:text-[#092F38] text-xs font-bold transition-colors group"
                >
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-[#F5C77E] group-hover:text-[#092F38]" />
                    <div className="flex flex-col text-left">
                      <span className="text-[10px] opacity-75">{item.label}</span>
                      <span className="font-extrabold">{item.display}</span>
                    </div>
                  </div>
                  <span className="text-[10px] uppercase font-black px-1.5 py-0.5 rounded bg-white/10 group-hover:bg-[#092F38]/20">
                    Call
                  </span>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FloatingCall;
