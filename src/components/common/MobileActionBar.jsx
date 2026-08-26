import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageSquare, CalendarCheck, X } from 'lucide-react';
import { businessInfo } from '../../data/businessInfo';

export const MobileActionBar = () => {
  const [showCallSheet, setShowCallSheet] = useState(false);
  const phones = businessInfo.contact.phones;

  const defaultWhatsappMessage = encodeURIComponent(
    "Hello GD Care Nurse And Aya Centre, I would like to enquire about home care assistance."
  );

  return (
    <>
      <aside
        aria-label="Quick mobile contact actions"
        className="fixed bottom-0 left-0 right-0 z-40 bg-[#092F38]/95 backdrop-blur-lg border-t border-[#176B78]/30 px-3 py-2.5 sm:hidden shadow-[0_-8px_25px_rgba(0,0,0,0.35)]"
      >
        <div className="flex items-center justify-between gap-2 max-w-md mx-auto">
          {/* Call Button - Opens Call Chooser */}
          <button
            type="button"
            onClick={() => setShowCallSheet(!showCallSheet)}
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-white/10 text-white font-black text-xs border border-white/20 active:scale-95 transition-all cursor-pointer"
          >
            <Phone className="w-4 h-4 text-[#F5C77E]" />
            <span>Call Desk</span>
          </button>

          {/* WhatsApp Chat Button (Direct 1-Click to 9163087355) */}
          <a
            href={`${businessInfo.contact.whatsappHref}?text=${defaultWhatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-[1.4] flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-gradient-to-r from-[#25D366] to-[#20BA56] text-white font-black text-xs shadow-md shadow-green-950/30 active:scale-95 transition-all"
          >
            <MessageSquare className="w-4 h-4 fill-white" />
            <span>WhatsApp</span>
          </a>

          {/* Enquire / Book Button */}
          <a
            href="#contact"
            onClick={() => setShowCallSheet(false)}
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-gradient-to-r from-[#D79B3D] to-[#e5aa4e] text-[#092F38] font-black text-xs shadow-md active:scale-95 transition-all"
          >
            <CalendarCheck className="w-4 h-4 text-[#092F38]" />
            <span>Enquire</span>
          </a>
        </div>
      </aside>

      {/* Bottom Sheet Call Chooser Modal */}
      <AnimatePresence>
        {showCallSheet && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowCallSheet(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 sm:hidden"
            />
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed bottom-0 left-0 right-0 z-50 bg-[#092F38] text-white rounded-t-3xl border-t border-[#D79B3D]/40 p-5 sm:hidden shadow-2xl"
            >
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/15">
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-[#F5C77E]" />
                  <span className="font-extrabold text-sm text-[#F5C77E]">Choose Helpline to Call</span>
                </div>
                <button
                  type="button"
                  onClick={() => setShowCallSheet(false)}
                  className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white cursor-pointer"
                  aria-label="Close options"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="flex flex-col gap-2.5 pb-2">
                {phones.map((phone) => (
                  <a
                    key={phone.id}
                    href={phone.callHref}
                    onClick={() => setShowCallSheet(false)}
                    className="flex items-center justify-between p-3.5 rounded-2xl bg-white/10 active:bg-white/20 border border-white/10 transition-colors"
                  >
                    <div className="flex flex-col text-left">
                      <span className="text-xs text-teal-200/80 font-bold">{phone.label}</span>
                      <span className="text-base font-black tracking-wide">{phone.display}</span>
                    </div>
                    <span className="text-xs font-black px-3 py-1.5 rounded-xl uppercase bg-[#D79B3D] text-[#092F38]">
                      Call
                    </span>
                  </a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileActionBar;
