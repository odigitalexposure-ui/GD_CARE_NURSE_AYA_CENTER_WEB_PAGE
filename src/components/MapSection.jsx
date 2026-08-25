import React from 'react';
import { MapPin, Navigation, ExternalLink, Compass } from 'lucide-react';
import { businessInfo } from '../data/businessInfo';

export const MapSection = () => {
  return (
    <div className="snake-card mt-16 rounded-3xl overflow-hidden border border-[#176B78]/25 shadow-2xl">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Left / Map Column */}
        <div className="lg:col-span-7 h-[360px] sm:h-[430px] relative bg-[#EAF4F1]">
          <iframe
            title="GD Care Nurse And Aya Centre Google Maps Location"
            src={businessInfo.map.embedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right / Information Column */}
        <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between bg-gradient-to-br from-[#092F38] via-[#0F4C5C] to-[#135866] text-white">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 text-teal-100 text-xs font-black uppercase tracking-widest mb-4 border border-white/15">
              <Compass className="w-3.5 h-3.5 text-[#F5C77E]" />
              <span>Location & Landmark</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white leading-snug font-sans">
              Find GD Care Nurse And Aya Centre
            </h3>

            <div className="mt-6 space-y-4 text-sm text-teal-100/95 font-medium">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#F5C77E] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-white font-extrabold text-base">Main Centre Address:</strong>
                  <span className="text-teal-50">SONARPUR DAKSHIN GHOSH PARA</span>
                  <div className="text-xs text-teal-200 mt-1 font-semibold">
                    Landmark: ANANDA ASRAM CLUB
                  </div>
                  <div className="text-xs text-teal-200 font-semibold">
                    South 24 Parganas, Kolkata, West Bengal - 700150
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <Navigation className="w-5 h-5 text-[#F5C77E] shrink-0" />
                <span className="text-xs text-teal-100">
                  Easily accessible from Sonarpur Railway Station & Rajpur Sonarpur Municipality.
                </span>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/15 flex flex-col sm:flex-row gap-3">
            <a
              href={businessInfo.map.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#D79B3D] to-[#e5aa4e] text-[#092F38] font-black text-xs sm:text-sm hover:brightness-105 shadow-md transition-all active:scale-95"
            >
              <span>Get Directions</span>
              <Navigation className="w-4 h-4 stroke-[2.5]" />
            </a>

            <a
              href={businessInfo.map.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-extrabold text-xs sm:text-sm border border-white/25 transition-all"
            >
              <span>Open in Google Maps</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapSection;
