import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { businessInfo } from '../../data/businessInfo';

export const FloatingWhatsApp = () => {
  const [isHovered, setIsHovered] = useState(false);

  const defaultMessage = encodeURIComponent(
    "Hello GD Care Nurse And Aya Centre, I would like to enquire about your nursing and home care services."
  );
  const whatsappUrl = `${businessInfo.contact.whatsappHref}?text=${defaultMessage}`;

  return (
    <div className="hidden sm:flex fixed sm:bottom-6 sm:right-6 z-40 items-center flex-row-reverse gap-3">
      {/* Pulse & Direct WhatsApp Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Chat with GD Care on WhatsApp at ${businessInfo.contact.phone}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white shadow-xl hover:bg-[#20BA56] transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40 whatsapp-pulse"
      >
        {/* Lucide Message / Custom WhatsApp Icon */}
        <svg
          className="w-7 h-7 fill-current"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.067-1.127-.074-.298-.097-.665-.224-1.135-.429-1.993-.865-3.29-2.883-3.39-3.015-.1-.133-.808-1.077-.808-2.054 0-.977.51-1.458.692-1.658.182-.2.398-.25.53-.25.133 0 .266.002.382.008.122.007.285-.046.446.339.166.398.564 1.378.614 1.48.05.102.083.22.016.353-.066.133-.1.216-.199.332-.099.116-.208.26-.298.349-.1.099-.204.208-.088.407.116.199.516.852 1.107 1.378.761.678 1.403.887 1.603.987.2.1.317.088.435-.049.117-.137.5-.581.633-.78.133-.2.267-.166.45-.099.183.067 1.162.548 1.362.648.2.1.332.149.382.233.05.083.05.482-.094.887z" />
          <path d="M12 2C6.477 2 2 6.477 2 12c0 1.891.526 3.662 1.442 5.176L2 22l4.982-1.398A9.957 9.957 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.167c-1.639 0-3.167-.506-4.437-1.371l-.318-.219-3.295.924.938-3.224-.239-.338A8.136 8.136 0 0 1 3.833 12c0-4.503 3.664-8.167 8.167-8.167s8.167 3.664 8.167 8.167-3.664 8.167-8.167 8.167z" />
        </svg>
      </motion.a>

      {/* Tooltip on Hover / Desktop */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="hidden sm:flex items-center gap-2 bg-[#17323A] text-white text-xs font-semibold px-3.5 py-2 rounded-xl shadow-lg whitespace-nowrap border border-[#25D366]/40"
          >
            <span>WhatsApp: <strong className="text-[#25D366]">{businessInfo.contact.phone}</strong></span>
            <div className="w-2 h-2 bg-[#25D366] rounded-full animate-ping" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FloatingWhatsApp;
