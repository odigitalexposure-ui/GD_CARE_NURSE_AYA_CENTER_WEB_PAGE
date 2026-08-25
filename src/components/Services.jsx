import React from 'react';
import SectionHeading from './common/SectionHeading';
import ServiceCard from './ServiceCard';
import { servicesData } from '../data/services';
import { businessInfo } from '../data/businessInfo';
import { MessageCircle, Phone, Sparkles } from 'lucide-react';

export const Services = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-gradient-to-b from-[#EAF4F1] via-[#E1EFEA] to-[#EAF4F1] relative overflow-hidden">
      {/* Decorative ambient gradients */}
      <div className="absolute top-1/2 left-[-150px] w-96 h-96 bg-[#176B78]/6 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 right-[-150px] w-96 h-96 bg-[#D79B3D]/6 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <SectionHeading
          badge="What We Provide"
          title="Our Care Services"
          subtitle="Practical, compassionate support for individuals and families at home across Sonarpur and Kolkata."
        />

        {/* 7 Services Grid + 1 Custom Schedule Feature Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}

          {/* Quick Consultation Highlight Card filling the 8th slot */}
          <div className="snake-card-dark p-7 sm:p-8 rounded-3xl text-white flex flex-col justify-between shadow-2xl border border-teal-500/20 relative overflow-hidden cursor-pointer">
            {/* Background Glow */}
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-[#D79B3D]/15 rounded-full blur-2xl" />

            <div className="relative z-10">
              <span className="text-xs font-black uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-white/15 text-teal-100 mb-4 inline-flex items-center gap-1.5 border border-white/20">
                <Sparkles className="w-3.5 h-3.5 text-[#F5C77E]" />
                <span>Need Help Choosing?</span>
              </span>
              <h3 className="text-2xl font-black text-white mt-3 leading-snug">
                Customized Care Schedule
              </h3>
              <p className="mt-3 text-sm text-teal-100/90 leading-relaxed font-medium">
                Not sure whether you require full 24/7 nursing, daycare aya, or specific cooking & cleaning assistance?
                Talk to our care team to tailor an arrangement.
              </p>
            </div>

            <div className="mt-7 pt-5 border-t border-white/15 flex flex-col gap-2.5 relative z-10">
              <a
                href={businessInfo.contact.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-[#25D366] to-[#20BA56] hover:brightness-105 text-white font-extrabold text-xs shadow-md transition-all active:scale-95"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Chat with Care Coordinator</span>
              </a>
              <a
                href={businessInfo.contact.callHref}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-extrabold text-xs transition-colors border border-white/20"
              >
                <Phone className="w-3.5 h-3.5 text-[#F5C77E]" />
                <span>Call Helpline: +91 84780 95846</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
