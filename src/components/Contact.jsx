import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Clock, Maximize2, X, MessageSquare, ShieldCheck } from 'lucide-react';
import SectionHeading from './common/SectionHeading';
import ContactForm from './ContactForm';
import MapSection from './MapSection';
import EmergencyCTA from './EmergencyCTA';
import visitingCard2Img from '../assets/visiting_card2.png';
import visitingCard1Img from '../assets/visiting_card1.png';
import { businessInfo } from '../data/businessInfo';

export const Contact = () => {
  const [activeModalImage, setActiveModalImage] = useState(null);

  return (
    <section id="contact" className="py-20 md:py-28 bg-gradient-to-b from-[#EAF4F1] via-[#E1EFEA] to-[#EAF4F1] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <SectionHeading
          badge="Get in Touch"
          title="Let's Talk About Your Care Requirements"
          subtitle="Reach out to GD Care Nurse And Aya Centre for nursing, elderly care, baby care and home-care assistance."
        />

        {/* Address and Contact Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {/* Card 1: Address */}
          <div className="snake-card p-7 rounded-3xl border border-[#176B78]/18 shadow-[0_8px_24px_rgba(15,76,92,0.06)] hover:shadow-xl transition-all cursor-pointer">
            <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-[#DCEEE8] to-[#CDE8E0] text-[#0F4C5C] flex items-center justify-center mb-5 shadow-xs border border-[#176B78]/15">
              <MapPin className="w-6 h-6 text-[#D79B3D] stroke-[2.2]" />
            </div>
            <h4 className="text-base font-black text-[#0F4C5C] mb-1.5">
              Centre Location
            </h4>
            <p className="text-xs sm:text-sm text-[#0E2A32] font-bold">
              GD Care Nurse And Aya Centre
            </p>
            <p className="text-xs text-[#4F6D74] mt-1.5 leading-relaxed font-medium">
              SONARPUR DAKSHIN GHOSH PARA, Landmark: ANANDA ASRAM CLUB, South 24 Parganas, Kolkata - 700150
            </p>
          </div>

          {/* Card 2: Phone */}
          <div className="snake-card p-7 rounded-3xl border border-[#176B78]/18 shadow-[0_8px_24px_rgba(15,76,92,0.06)] hover:shadow-xl transition-all cursor-pointer">
            <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-[#DCEEE8] to-[#CDE8E0] text-[#0F4C5C] flex items-center justify-center mb-5 shadow-xs border border-[#176B78]/15">
              <Phone className="w-6 h-6 text-[#D79B3D] stroke-[2.2]" />
            </div>
            <h4 className="text-base font-black text-[#0F4C5C] mb-1.5">
              Call Helpline
            </h4>
            <a
              href={businessInfo.contact.callHref}
              className="text-lg sm:text-xl font-black text-[#0F4C5C] hover:text-[#176B78] transition-colors block"
            >
              +91 84780 95846
            </a>
            <p className="text-xs text-[#4F6D74] mt-1.5 font-medium">
              Tap to call directly from your device
            </p>
          </div>

          {/* Card 3: Enquiry Availability */}
          <div className="snake-card p-7 rounded-3xl border border-[#176B78]/18 shadow-[0_8px_24px_rgba(15,76,92,0.06)] hover:shadow-xl transition-all cursor-pointer">
            <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-[#DCEEE8] to-[#CDE8E0] text-[#0F4C5C] flex items-center justify-center mb-5 shadow-xs border border-[#176B78]/15">
              <Clock className="w-6 h-6 text-[#D79B3D] stroke-[2.2]" />
            </div>
            <h4 className="text-base font-black text-[#0F4C5C] mb-1.5">
              Care Enquiries
            </h4>
            <p className="text-xs sm:text-sm text-[#0E2A32] font-bold">
              Available for care enquiries
            </p>
            <p className="text-xs text-[#4F6D74] mt-1.5 leading-relaxed font-medium">
              24/7 Nursing Care available based on client family requirements
            </p>
          </div>
        </div>

        {/* 2-Column: Visiting Cards & Send Care Enquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Official Visiting Cards (Card 1 on top, Card 2 below) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Visiting Card 1: Services & Offerings */}
            <div className="snake-card p-4 rounded-3xl border border-[#176B78]/20 shadow-xl backdrop-blur-xs">
              <div
                className="group relative rounded-2xl overflow-hidden cursor-pointer bg-white border border-[#176B78]/15 shadow-xs"
                onClick={() => setActiveModalImage(visitingCard1Img)}
              >
                <img
                  src={visitingCard1Img}
                  alt="GD Care Nurse And Aya Centre official services and care offerings visiting card"
                  className="w-full h-auto object-contain object-center group-hover:scale-102 transition-transform duration-500 rounded-xl"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#092F38]/90 via-transparent to-transparent flex items-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-white flex items-center justify-between w-full">
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full bg-gradient-to-r from-[#D79B3D] to-[#F5C77E] text-[#092F38] inline-block mb-1 shadow-sm">
                        Services Card
                      </span>
                      <h4 className="text-sm font-extrabold drop-shadow-sm">
                        GD Care Services & Care Offerings
                      </h4>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform border border-white/30">
                      <Maximize2 className="w-4 h-4 text-white stroke-[2.5]" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-2.5 px-2 text-center">
                <p className="text-xs text-[#4F6D74] font-semibold">
                  🔍 Click visiting card to expand nursing & aya care services
                </p>
              </div>
            </div>

            {/* Visiting Card 2: Address & Helpline */}
            <div className="snake-card p-4 rounded-3xl border border-[#176B78]/20 shadow-xl backdrop-blur-xs">
              <div
                className="group relative rounded-2xl overflow-hidden cursor-pointer bg-white border border-[#176B78]/15 shadow-xs"
                onClick={() => setActiveModalImage(visitingCard2Img)}
              >
                <img
                  src={visitingCard2Img}
                  alt="GD Care Nurse And Aya Centre official address and contact visiting card"
                  className="w-full h-auto object-contain object-center group-hover:scale-102 transition-transform duration-500 rounded-xl"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#092F38]/90 via-transparent to-transparent flex items-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-white flex items-center justify-between w-full">
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full bg-gradient-to-r from-[#D79B3D] to-[#F5C77E] text-[#092F38] inline-block mb-1 shadow-sm">
                        Official Contact Card
                      </span>
                      <h4 className="text-sm font-extrabold drop-shadow-sm">
                        GD Care Address & 24/7 Helpline Card
                      </h4>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform border border-white/30">
                      <Maximize2 className="w-4 h-4 text-white stroke-[2.5]" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-2.5 px-2 text-center">
                <p className="text-xs text-[#4F6D74] font-semibold">
                  🔍 Click visiting card to expand address & helpline details
                </p>
              </div>
            </div>

            {/* Quick Assurance Box */}
            <div className="p-4.5 rounded-2xl bg-gradient-to-r from-[#DCEEE8] to-[#E6F3EF] border border-[#176B78]/25 flex items-center gap-3.5 shadow-xs">
              <ShieldCheck className="w-6 h-6 text-[#0F4C5C] shrink-0" />
              <p className="text-xs text-[#0E2A32] font-bold">
                Prompt response directly on WhatsApp from our Kolkata coordination desk.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Enquiry Form (Send Care Enquiry) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>

        {/* Emergency / Care Assistance Callout */}
        <EmergencyCTA />

        {/* Google Maps Section */}
        <MapSection />
      </div>

      {/* Lightbox Modal for Visiting Card Images */}
      <AnimatePresence>
        {activeModalImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setActiveModalImage(null)}
          >
            <div
              className="relative max-w-4xl max-h-[90vh] bg-white rounded-3xl overflow-hidden shadow-2xl p-2.5"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveModalImage(null)}
                className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/60 text-white hover:bg-black transition-colors"
                aria-label="Close image popup"
              >
                <X className="w-5 h-5" />
              </button>
              <img
                src={activeModalImage}
                alt="GD Care Nurse And Aya Centre full visiting card view"
                className="max-h-[80vh] w-auto object-contain rounded-2xl mx-auto"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;
