import { Phone, MessageSquare, HeartPulse } from 'lucide-react';
import { businessInfo } from '../data/businessInfo';

export const EmergencyCTA = () => {
  const defaultWhatsappMessage = encodeURIComponent(
    "Hello GD Care Nurse And Aya Centre, I need urgent care assistance for my family."
  );

  return (
    <div className="snake-card-dark my-10 p-6 sm:p-8 md:p-9 rounded-3xl text-white shadow-xl relative overflow-hidden border border-teal-500/20 cursor-pointer">
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-teal-100 text-xs font-bold uppercase tracking-wider mb-2.5 border border-white/20">
            <HeartPulse className="w-3.5 h-3.5 text-[#F5C77E]" />
            <span>Need Care Assistance?</span>
          </div>
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-white leading-snug font-sans">
            Talk to GD Care Nurse And Aya Centre About Your Requirements
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-teal-100/90 leading-relaxed font-normal">
            Our team in Sonarpur is available to guide you with nursing, elderly care, baby care, or daily home assistance.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full lg:w-auto">
          <a
            href={businessInfo.contact.callHref}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-[#0F4C5C] font-bold text-sm hover:bg-[#DCEEE8] shadow-md transition-all active:scale-95"
          >
            <Phone className="w-4 h-4 text-[#D79B3D]" />
            <span>Call Now</span>
          </a>

          <a
            href={`${businessInfo.contact.whatsappHref}?text=${defaultWhatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#25D366] to-[#20BA56] hover:brightness-105 text-white font-bold text-sm shadow-md shadow-green-950/20 transition-all active:scale-95"
          >
            <MessageSquare className="w-4 h-4 fill-white" />
            <span>WhatsApp Us</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default EmergencyCTA;
