import { motion } from 'framer-motion';
import {
  HeartPulse,
  Sparkles,
  UtensilsCrossed,
  Baby,
  HeartHandshake,
  Clock,
  ShieldCheck,
  ArrowRight,
  MessageSquare,
  CheckCircle2
} from 'lucide-react';
import { businessInfo } from '../data/businessInfo';

const iconMap = {
  HeartPulse,
  Sparkles,
  UtensilsCrossed,
  Baby,
  HeartHandshake,
  Clock,
  ShieldCheck
};

export const ServiceCard = ({ service, index }) => {
  const Icon = iconMap[service.iconName] || HeartPulse;

  const whatsappMessage = encodeURIComponent(
    `Hello GD Care Nurse And Aya Centre, I would like to enquire about your ${service.title} services.`
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, delay: (index % 3) * 0.1 }}
      whileHover={{ y: -7 }}
      className="snake-card group relative flex flex-col justify-between p-7 sm:p-8 rounded-3xl border border-[#176B78]/18 shadow-[0_10px_30px_rgba(15,76,92,0.06)] hover:shadow-[0_20px_40px_rgba(15,76,92,0.14)] transition-all duration-300 backdrop-blur-xs cursor-pointer"
    >
      {/* Top Card Info */}
      <div>
        {/* Header with Number and Icon */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-[#DCEEE8] to-[#CDE8E0] text-[#0F4C5C] group-hover:from-[#0F4C5C] group-hover:to-[#176B78] group-hover:text-white group-hover:scale-105 transition-all duration-300 shadow-sm border border-[#176B78]/15">
            <Icon className="w-7 h-7 stroke-[2.2]" />
          </div>

          <div className="flex flex-col items-end">
            <span className="text-2xl font-black text-[#176B78]/30 group-hover:text-[#D79B3D] transition-colors duration-300 font-heading">
              {service.number}
            </span>
            <span className="text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full bg-[#E2F0EC] text-[#0F4C5C] border border-[#176B78]/15">
              {service.badge}
            </span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-[22px] font-semibold text-[#0F4C5C] group-hover:text-[#176B78] transition-colors duration-200 leading-snug font-sans">
          {service.title}
        </h3>

        {/* Description */}
        <p className="mt-3 text-sm leading-relaxed text-[#4F6D74] font-medium">
          {service.shortDesc}
        </p>

        {/* Bullet Highlights */}
        {service.highlights && (
          <ul className="mt-5 space-y-2.5 pt-4 border-t border-[#176B78]/10">
            {service.highlights.map((item, idx) => (
              <li key={idx} className="flex items-center gap-2.5 text-xs text-[#0E2A32] font-semibold">
                <CheckCircle2 className="w-4 h-4 text-[#D79B3D] shrink-0 stroke-[2.5]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Action Footer */}
      <div className="mt-7 pt-4 border-t border-[#176B78]/10">
        <a
          href={`${businessInfo.contact.whatsappHref}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-between w-full px-4.5 py-3 rounded-xl bg-[#DCEEE8] text-[#0F4C5C] font-extrabold text-xs hover:bg-[#25D366] hover:text-white transition-all duration-200 group/btn shadow-xs hover:shadow-md"
        >
          <div className="flex items-center gap-2">
            <MessageSquare className="w-4 h-4 fill-current" />
            <span>Enquire on WhatsApp</span>
          </div>
          <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform stroke-[2.5]" />
        </a>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
