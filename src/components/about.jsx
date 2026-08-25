import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, CalendarCheck, ShieldAlert, ArrowRight, MessageSquare, MapPin } from 'lucide-react';
import SectionHeading from './common/SectionHeading';
import { aboutImg } from '../assets/images';
import { businessInfo } from '../data/businessInfo';

const highlights = [
  {
    number: '01',
    title: 'Compassionate Care',
    desc: 'Attentive, respectful assistance designed to provide daily comfort and peace of mind.',
    icon: Heart
  },
  {
    number: '02',
    title: 'Family-Focused Support',
    desc: 'Understanding your unique household needs, from elder comfort to infant nurturing.',
    icon: Users
  },
  {
    number: '03',
    title: 'Flexible Home Assistance',
    desc: 'Assistance tailored according to your family routine, timing, and preferred care hours.',
    icon: CalendarCheck
  },
  {
    number: '04',
    title: '24/7 Nursing Support',
    desc: 'Continuous round-the-clock home nursing and aya availability based on requirements.',
    icon: ShieldAlert
  }
];

export const About = () => {
  const defaultWhatsappMessage = encodeURIComponent(
    "Hello GD Care Nurse And Aya Centre, I would like to talk to your care team regarding home assistance."
  );

  return (
    <section id="about" className="py-20 md:py-28 bg-gradient-to-b from-[#EAF4F1] via-[#E1EFEA] to-[#EAF4F1] relative overflow-hidden">
      {/* Decorative subtle ambient circles */}
      <div className="absolute top-10 left-[-100px] w-96 h-96 bg-[#176B78]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-[-100px] w-96 h-96 bg-[#D79B3D]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <SectionHeading
          badge="About GD Care"
          title="Caring Support When Your Family Needs It Most"
          subtitle="GD Care Nurse And Aya Centre provides dependable nursing and home-care assistance designed to help families in Sonarpur and Kolkata manage everyday care needs with dignity and compassion."
        />

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Image Asset */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="snake-card relative rounded-3xl overflow-hidden shadow-2xl border border-white/80 bg-white">
              <img
                src={aboutImg}
                alt="GD Care Nurse And Aya Centre office and consultation in Sonarpur Kolkata"
                className="w-full h-[420px] sm:h-[490px] object-cover object-center transform hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#092F38]/85 via-transparent to-transparent" />

              {/* Floating Badge */}
              <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-[#176B78]/20">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#0F4C5C] to-[#176B78] text-white flex items-center justify-center font-black text-sm shadow-md">
                    GD
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-[#0F4C5C]">
                      GD Care Nurse & Aya Centre
                    </h4>
                    <p className="text-xs text-[#4F6D74] flex items-center gap-1 mt-0.5 font-medium">
                      <MapPin className="w-3 h-3 text-[#D79B3D]" />
                      <span>Sonarpur Dakshin Ghosh Para, Kolkata</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Corner Accents */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#D79B3D]/20 rounded-3xl -z-10 blur-xs" />
            <div className="absolute -bottom-4 -right-4 w-28 h-28 bg-[#0F4C5C]/15 rounded-3xl -z-10 blur-xs" />
          </motion.div>

          {/* Right Column: Narrative Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col justify-center space-y-6"
          >
            <div className="prose prose-teal max-w-none text-[#0E2A32]">
              <p className="text-base sm:text-lg leading-relaxed text-[#0E2A32] font-semibold">
                At <span className="text-[#0F4C5C] font-black underline decoration-[#D79B3D] decoration-2">GD Care Nurse And Aya Centre</span>,
                we understand that having a dependable, caring hand at home makes all the difference.
                Whether you need dedicated nursing support for a recovering loved one, patient assistance,
                compassionate elderly care, newborn baby support, or reliable help with everyday cooking
                and house cleaning, our centre is here to assist your household.
              </p>

              <p className="text-sm sm:text-base leading-relaxed text-[#4F6D74] font-medium">
                Located in Sonarpur Dakshin Ghosh Para (near Ananda Asram Club), we connect families
                with suitable home-care attendants, aya personnel, and 24/7 nursing assistants. Our focus is
                on gentle care, patience, household hygiene, and flexible schedules that work around your family’s routine.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.number}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="snake-card p-4.5 rounded-2xl border border-[#176B78]/15 shadow-xs cursor-pointer"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-black px-2.5 py-1 rounded-lg bg-[#DCEEE8] text-[#0F4C5C]">
                        {item.number}
                      </span>
                      <Icon className="w-4 h-4 text-[#D79B3D] stroke-[2.5]" />
                      <h4 className="font-extrabold text-sm text-[#0F4C5C]">{item.title}</h4>
                    </div>
                    <p className="text-xs leading-normal text-[#4F6D74] font-medium">{item.desc}</p>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href={`${businessInfo.contact.whatsappHref}?text=${defaultWhatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl bg-gradient-to-r from-[#0F4C5C] to-[#176B78] text-white font-extrabold text-sm hover:brightness-110 shadow-lg shadow-teal-950/15 transition-all duration-200 active:scale-95"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366] fill-[#25D366]" />
                <span>Talk to Our Care Team</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={businessInfo.contact.callHref}
                className="inline-flex items-center gap-2 px-6 py-4 rounded-xl border-2 border-[#0F4C5C]/30 text-[#0F4C5C] font-extrabold text-sm bg-white/80 hover:bg-[#DCEEE8] transition-all duration-200"
              >
                <span>Call: +91 84780 95846</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
