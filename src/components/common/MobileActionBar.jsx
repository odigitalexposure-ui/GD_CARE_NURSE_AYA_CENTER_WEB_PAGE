import React from 'react';
import { Phone, MessageSquare, CalendarCheck } from 'lucide-react';
import { businessInfo } from '../../data/businessInfo';

export const MobileActionBar = () => {
  const defaultWhatsappMessage = encodeURIComponent(
    "Hello GD Care Nurse And Aya Centre, I would like to enquire about home care assistance."
  );

  return (
    <aside
      aria-label="Quick mobile contact actions"
      className="fixed bottom-0 left-0 right-0 z-40 bg-[#092F38]/95 backdrop-blur-lg border-t border-[#176B78]/30 px-3 py-2.5 sm:hidden shadow-[0_-8px_25px_rgba(0,0,0,0.35)]"
    >
      <div className="flex items-center justify-between gap-2 max-w-md mx-auto">
        {/* Call Button */}
        <a
          href={businessInfo.contact.callHref}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-white/10 text-white font-black text-xs border border-white/20 active:scale-95 transition-all"
        >
          <Phone className="w-4 h-4 text-[#F5C77E]" />
          <span>Call Desk</span>
        </a>

        {/* WhatsApp Chat Button (Primary Action) */}
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
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-gradient-to-r from-[#D79B3D] to-[#e5aa4e] text-[#092F38] font-black text-xs shadow-md active:scale-95 transition-all"
        >
          <CalendarCheck className="w-4 h-4 text-[#092F38]" />
          <span>Enquire</span>
        </a>
      </div>
    </aside>
  );
};

export default MobileActionBar;
