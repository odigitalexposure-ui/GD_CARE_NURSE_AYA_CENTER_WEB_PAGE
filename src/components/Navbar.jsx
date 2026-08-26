import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, MessageSquare, ChevronDown } from 'lucide-react';
import Logo from './common/Logo';
import { businessInfo } from '../data/businessInfo';

const navLinks = [
  { name: 'HOME', href: '#home' },
  { name: 'ABOUT', href: '#about' },
  { name: 'SERVICES', href: '#services' },
  { name: 'AREAS', href: '#areas' },
  { name: 'GALLERY', href: '#gallery' },
  { name: 'CONTACT', href: '#contact' }
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [callDropdownOpen, setCallDropdownOpen] = useState(false);
  const [whatsappDropdownOpen, setWhatsappDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ['home', 'about', 'services', 'areas', 'gallery', 'contact'];
      const scrollPosition = window.scrollY + 220;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  const defaultWhatsappMessage = encodeURIComponent(
    "Hello GD Care Nurse And Aya Centre, I would like to enquire about care assistance."
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#EAF4F1]/95 backdrop-blur-md shadow-md py-3 border-b border-[#176B78]/20'
          : 'bg-gradient-to-b from-[#092F38]/95 via-[#0F4C5C]/75 to-transparent py-4 md:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Logo variant={isScrolled ? 'dark' : 'light'} />

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-3.5 py-2 text-xs xl:text-sm font-extrabold tracking-wider transition-colors duration-200 rounded-md group ${
                    isScrolled
                      ? isActive
                        ? 'text-[#0F4C5C]'
                        : 'text-[#0E2A32] hover:text-[#0F4C5C]'
                      : isActive
                      ? 'text-white'
                      : 'text-teal-50/90 hover:text-white'
                  }`}
                >
                  {link.name}
                  {/* Glowing Underline Indicator */}
                  <span
                    className={`absolute bottom-0 left-3 right-3 h-[2.5px] rounded-full transition-all duration-300 ${
                      isActive
                        ? 'bg-gradient-to-r from-[#D79B3D] to-[#F5C77E] scale-x-100 shadow-[0_0_8px_#D79B3D]'
                        : 'bg-gradient-to-r from-[#D79B3D] to-[#F5C77E] scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* Desktop Call & WhatsApp Actions */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Helpline Call Button with Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setCallDropdownOpen(true)}
              onMouseLeave={() => setCallDropdownOpen(false)}
            >
              <button
                type="button"
                onClick={() => setCallDropdownOpen(!callDropdownOpen)}
                className={`flex items-center gap-2 text-xs xl:text-sm font-extrabold px-3.5 py-2 rounded-xl transition-all duration-200 border cursor-pointer ${
                  isScrolled
                    ? 'text-[#0F4C5C] border-[#0F4C5C]/25 hover:bg-[#DCEEE8]/80 shadow-xs'
                    : 'text-white border-white/30 hover:bg-white/15 backdrop-blur-sm'
                }`}
                aria-label="Call GD Care Helplines"
              >
                <Phone className="w-4 h-4 text-[#D79B3D]" />
                <span>Call Helpline</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-70" />
              </button>

              {/* Call Dropdown Menu */}
              <AnimatePresence>
                {callDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full right-0 mt-2 w-60 bg-[#092F38] text-white rounded-2xl shadow-2xl border border-[#D79B3D]/40 p-2.5 z-50 backdrop-blur-md"
                  >
                    <div className="text-[10px] font-black uppercase tracking-wider text-[#F5C77E] px-2 py-1 flex items-center justify-between">
                      <span>Direct Calling</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-ping" />
                    </div>
                    <div className="flex flex-col gap-1 mt-1">
                      {businessInfo.contact.phones.map((p) => (
                        <a
                          key={p.id}
                          href={p.callHref}
                          className="flex items-center justify-between p-2 rounded-xl hover:bg-white/10 text-xs font-bold transition-colors group"
                        >
                          <div className="flex flex-col text-left">
                            <span className="text-[10px] text-teal-200/70">{p.label}</span>
                            <span className="text-white group-hover:text-[#F5C77E] font-extrabold">{p.display}</span>
                          </div>
                          <span className="text-[10px] px-2 py-1 rounded-lg bg-[#D79B3D] text-[#092F38] font-black uppercase">
                            Call
                          </span>
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* WhatsApp Direct Action Button (Dedicated WhatsApp: 9163087355) */}
            <a
              href={`${businessInfo.contact.whatsappHref}?text=${defaultWhatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs xl:text-sm font-extrabold px-4.5 py-2.5 rounded-xl bg-gradient-to-r from-[#25D366] to-[#20BA56] text-white hover:brightness-105 shadow-md hover:shadow-lg transition-all duration-200 active:scale-95"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center lg:hidden gap-2">
            <a
              href={`${businessInfo.contact.whatsappHref}?text=${defaultWhatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-[#25D366] text-white shadow-sm"
              aria-label="Quick WhatsApp chat"
            >
              <MessageSquare className="w-4 h-4" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0F4C5C] transition-colors ${
                isScrolled
                  ? 'text-[#0F4C5C] bg-[#DCEEE8]'
                  : 'text-white bg-white/20 backdrop-blur-xs'
              }`}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 top-[65px] bg-black/65 backdrop-blur-sm z-40 lg:hidden"
            />

            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="absolute top-full left-0 right-0 bg-[#EAF4F1] border-b border-[#176B78]/25 shadow-2xl py-6 px-6 z-50 lg:hidden max-h-[85vh] overflow-y-auto"
            >
              <nav className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={handleLinkClick}
                    className="flex items-center justify-between py-3 px-4 rounded-xl text-sm font-extrabold text-[#0E2A32] hover:bg-[#DCEEE8] hover:text-[#0F4C5C] transition-colors"
                  >
                    <span>{link.name}</span>
                    <span className="w-2 h-2 rounded-full bg-[#D79B3D]"></span>
                  </a>
                ))}
              </nav>

              <div className="mt-6 pt-6 border-t border-[#176B78]/20 flex flex-col gap-3">
                <span className="text-[11px] font-black uppercase tracking-wider text-[#0F4C5C] px-1">
                  Helpline Calling Lines
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <a
                    href={businessInfo.contact.callHref}
                    onClick={handleLinkClick}
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border-2 border-[#0F4C5C] text-[#0F4C5C] font-extrabold text-xs bg-white/60"
                  >
                    <Phone className="w-4 h-4 text-[#D79B3D]" />
                    <span>Line 1: +91 91630 87355</span>
                  </a>
                  <a
                    href={businessInfo.contact.secondaryCallHref}
                    onClick={handleLinkClick}
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border-2 border-[#0F4C5C] text-[#0F4C5C] font-extrabold text-xs bg-white/60"
                  >
                    <Phone className="w-4 h-4 text-[#D79B3D]" />
                    <span>Line 2 (Call Only): +91 84780 95846</span>
                  </a>
                </div>

                <a
                  href={`${businessInfo.contact.whatsappHref}?text=${defaultWhatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleLinkClick}
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-gradient-to-r from-[#25D366] to-[#20BA56] text-white font-extrabold text-xs shadow-md"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>Chat on WhatsApp (+91 91630 87355)</span>
                </a>

                <p className="text-xs text-center text-[#4F6D74] mt-2 font-medium">
                  Sonarpur Dakshin Ghosh Para, Kolkata - 700150
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
