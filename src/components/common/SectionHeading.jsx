import { motion } from 'framer-motion';

export const SectionHeading = ({
  badge,
  title,
  subtitle,
  align = 'center',
  className = '',
  light = false
}) => {
  const isCenter = align === 'center';

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`mb-12 md:mb-16 ${isCenter ? 'text-center mx-auto' : 'text-left'} max-w-3xl ${className}`}
    >
      {badge && (
        <div className={`inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-extrabold tracking-widest uppercase mb-4 shadow-xs ${
          light
            ? 'bg-white/15 text-teal-100 border border-white/20 backdrop-blur-md'
            : 'bg-gradient-to-r from-[#DCEEE8] to-[#EAF4F1] text-[#0F4C5C] border border-[#176B78]/25'
        }`}>
          <span className="w-2 h-2 rounded-full bg-[#D79B3D] shadow-[0_0_8px_#D79B3D]"></span>
          <span>{badge}</span>
        </div>
      )}

      <h2
        className={`text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-semibold tracking-tight leading-[1.2] font-sans ${
          light ? 'text-white' : 'text-gradient-teal'
        }`}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed font-normal ${
            light ? 'text-teal-100/90' : 'text-[#4F6D74]'
          } ${isCenter ? 'mx-auto' : ''}`}
        >
          {subtitle}
        </p>
      )}

      {/* Decorative Accent Dual-Color Line */}
      <div
        className={`mt-5 flex items-center gap-1.5 ${
          isCenter ? 'justify-center mx-auto' : 'justify-start'
        }`}
      >
        <div className="h-1.5 w-12 rounded-full bg-gradient-to-r from-[#D79B3D] to-[#F5C77E]" />
        <div className="h-1.5 w-3 rounded-full bg-[#0F4C5C]" />
        <div className="h-1.5 w-1.5 rounded-full bg-[#176B78]" />
      </div>
    </motion.div>
  );
};

export default SectionHeading;
