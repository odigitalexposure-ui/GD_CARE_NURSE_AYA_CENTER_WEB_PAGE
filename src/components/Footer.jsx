import React from 'react';
import { MapPin, Phone, MessageSquare, Heart, ArrowUp } from 'lucide-react';
import Logo from './common/Logo';
import { businessInfo } from '../data/businessInfo';

const footerNav = [
  { name: 'Home', href: '#home' },
  { name: 'About Us', href: '#about' },
  { name: 'Our Services', href: '#services' },
  { name: 'Areas We Serve', href: '#areas' },
  { name: 'Centre Gallery', href: '#gallery' },
  { name: 'Contact & Enquiry', href: '#contact' }
];

export const Footer = () => {
  const defaultWhatsappMessage = encodeURIComponent(
    "Hello GD Care Nurse And Aya Centre, I would like to get care assistance."
  );

  return (
    <footer className="bg-gradient-to-b from-[#092F38] to-[#051C22] text-white pt-16 md:pt-20 border-t border-teal-900/60 relative">
      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/10">
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <Logo variant="light" />
            <p className="text-sm text-teal-100/85 leading-relaxed max-w-sm pt-2 font-medium">
              GD Care Nurse And Aya Centre provides dependable nursing, elderly care, baby care,
              home cleaning, cooking, and 24/7 home assistance for families across Sonarpur and Kolkata.
            </p>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-teal-200 text-xs font-bold border border-white/15">
                <span className="w-2 h-2 rounded-full bg-[#25D366] shadow-[0_0_8px_#25D366]"></span>
                <span>Direct WhatsApp Consultation Available</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links & Services */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-[#F5C77E] mb-5">
              Quick Navigation
            </h4>
            <ul className="space-y-3">
              {footerNav.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-xs sm:text-sm text-teal-100/85 hover:text-white hover:underline transition-colors flex items-center gap-2.5 font-semibold"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D79B3D]"></span>
                    <span>{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Details & CTAs */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-[#F5C77E] mb-5">
              Centre Contact
            </h4>

            <div className="space-y-3.5 text-xs sm:text-sm text-teal-100/90 font-medium">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F5C77E] shrink-0 mt-1" />
                <span>
                  SONARPUR DAKSHIN GHOSH PARA, Landmark: ANANDA ASRAM CLUB, South 24 Parganas, Kolkata - 700150
                </span>
              </div>

              <div className="flex items-center gap-2.5 pt-1">
                <Phone className="w-4 h-4 text-[#F5C77E] shrink-0" />
                <a
                  href={businessInfo.contact.callHref}
                  className="font-black text-white hover:text-[#F5C77E] transition-colors text-base"
                >
                  +91 84780 95846
                </a>
              </div>
            </div>

            <div className="pt-3 flex flex-col gap-2.5">
              <a
                href={`${businessInfo.contact.whatsappHref}?text=${defaultWhatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-gradient-to-r from-[#25D366] to-[#20BA56] hover:brightness-105 text-white font-extrabold text-xs sm:text-sm shadow-md transition-all active:scale-95"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Get Care Assistance on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Mid-Footer Copyright Line */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between text-xs text-teal-200/80 gap-3 font-medium">
          <p>
            © {new Date().getFullYear()} GD Care Nurse And Aya Centre. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            <span>Providing compassionate home care across Kolkata</span>
          </p>
        </div>
      </div>

      {/* Developer Bottom Banner as requested */}
      <div className="bg-[#031418] pt-4 pb-16 sm:pb-4 px-4 text-center border-t border-teal-950 text-xs text-teal-200/90 font-medium">
        <div className="max-w-7xl mx-auto flex items-center justify-center flex-wrap gap-1">
          <span>Design & Developed By</span>
          <a
            href="https://www.teamdeoskolkata.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-black text-white hover:text-red-400 transition-colors duration-300 ml-1 underline decoration-red-400/70 hover:decoration-red-400"
          >
            Digital Exposure Online Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
