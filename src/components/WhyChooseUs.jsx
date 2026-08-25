import { motion } from 'framer-motion';
import { Heart, Clock, MapPinned, ShieldCheck } from 'lucide-react';
import SectionHeading from './common/SectionHeading';

const reasons = [
  {
    icon: Heart,
    title: 'Compassionate Support',
    desc: 'Attentive, patient, and respectful caregivers who prioritize the daily comfort, dignity, and well-being of your loved ones.'
  },
  {
    icon: Clock,
    title: 'Flexible Home Assistance',
    desc: 'Daycare, night shifts, routine daily visits, or full 24/7 nursing care schedules arranged according to your household requirements.'
  },
  {
    icon: MapPinned,
    title: 'Wide Service Coverage',
    desc: 'Convenient availability across Sonarpur, Subhasgram, Garia, Jadavpur, Behala, Ballygunge, and multiple Kolkata localities.'
  },
  {
    icon: ShieldCheck,
    title: 'Care-Focused Approach',
    desc: 'Practical, dependable home assistance bringing nursing care, patient support, infant care, cooking, and cleaning together.'
  }
];

export const WhyChooseUs = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-[#EAF4F1] via-[#E0EFEA] to-[#EAF4F1] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Why GD Care"
          title="Why Families Choose GD Care"
          subtitle="A dependable local centre committed to providing attentive, respectful, and family-first home care assistance."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="snake-card p-7 rounded-3xl border border-[#176B78]/18 shadow-[0_8px_24px_rgba(15,76,92,0.06)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
                <div>
                  <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-[#DCEEE8] to-[#CDE8E0] text-[#0F4C5C] flex items-center justify-center mb-6 shadow-xs border border-[#176B78]/15">
                    <Icon className="w-6 h-6 stroke-[2.2] text-[#0F4C5C]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#0F4C5C] mb-3 leading-snug font-sans">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm leading-relaxed text-[#4F6D74] font-medium">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#176B78]/12 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#D79B3D] shadow-[0_0_6px_#D79B3D]"></span>
                  <span className="text-[11px] font-black text-[#0F4C5C] uppercase tracking-widest">
                    Reliable Service
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
