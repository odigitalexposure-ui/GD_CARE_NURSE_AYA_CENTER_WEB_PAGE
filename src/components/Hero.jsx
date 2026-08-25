import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, ShieldCheck, MapPin, ArrowRight, MessageSquare, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { heroImages } from '../assets/images';
import { businessInfo } from '../data/businessInfo';

export const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, []);

    const prevSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 3000);
        return () => clearInterval(timer);
    }, [nextSlide]);

    const defaultWhatsappMessage = encodeURIComponent(
        "Hello GD Care Nurse And Aya Centre, I would like to get care assistance for my family."
    );

    return (
        <section
            id="home"
            className="relative min-h-[100vh] flex items-center justify-center pt-24 pb-20 sm:pt-28 sm:pb-20 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-[#092F38] via-[#0F4C5C] to-[#0A333D]"
        >
            {/* Background Image Carousel Container with AnimatePresence */}
            <div className="absolute inset-0 z-0">
                <AnimatePresence initial={false}>
                    <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0, scale: 1.06 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.2, ease: 'easeInOut' }}
                        className="absolute inset-0 w-full h-full"
                    >
                        <img
                            src={heroImages[currentSlide].url}
                            alt={heroImages[currentSlide].alt}
                            className="w-full h-full object-cover object-center filter brightness-[0.98] contrast-[1.02]"
                            loading="eager"
                        />
                    </motion.div>
                </AnimatePresence>

                {/* Minimal, Subtle Scrim to keep photo natural and clear */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-black/55" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#EAF4F1] via-transparent to-transparent opacity-70 h-16 bottom-0 top-auto" />

                {/* Slide Indicators & Navigation Arrows */}
                <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
                    <button
                        onClick={prevSlide}
                        aria-label="Previous Slide"
                        className="w-8 h-8 rounded-full bg-black/40 hover:bg-black/70 border border-white/20 text-white flex items-center justify-center backdrop-blur-md transition-all duration-200 cursor-pointer"
                    >
                        <ChevronLeft className="w-4 h-4" />
                    </button>

                    <div className="flex items-center gap-2">
                        {heroImages.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentSlide(idx)}
                                aria-label={`Go to slide ${idx + 1}`}
                                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${idx === currentSlide
                                        ? 'w-8 bg-[#F5C77E] shadow-[0_0_10px_#D79B3D]'
                                        : 'w-2 bg-white/40 hover:bg-white/70'
                                    }`}
                            />
                        ))}
                    </div>

                    <button
                        onClick={nextSlide}
                        aria-label="Next Slide"
                        className="w-8 h-8 rounded-full bg-black/40 hover:bg-black/70 border border-white/20 text-white flex items-center justify-center backdrop-blur-md transition-all duration-200 cursor-pointer"
                    >
                        <ChevronRight className="w-4 h-4" />
                    </button>
                </div>
            </div>

            {/* Hero Content */}
            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                {/* Badge with Subtle Glow */}
                <motion.div
                    initial={{ opacity: 0, y: -16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/35 border border-[#F5C77E]/40 backdrop-blur-md text-xs sm:text-sm font-medium tracking-wider uppercase text-teal-100 mb-6 shadow-sm"
                >
                    <Sparkles className="w-3.5 h-3.5 text-[#F5C77E] animate-spin" style={{ animationDuration: '8s' }} />
                    <span>Compassionate Care • Professional Support</span>
                </motion.div>

                {/* Main Heading with Playfair Display Italic Serif Font */}
                <motion.h1
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="text-3xl sm:text-5xl md:text-6xl lg:text-[62px] font-serif italic font-normal tracking-wide leading-[1.2] text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
                >
                    Trusted Nursing & <br className="hidden sm:inline" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5C77E] via-[#D79B3D] to-[#F5C77E] drop-shadow-sm font-serif italic font-normal">
                        Home Care Services
                    </span>{' '}
                    in Kolkata
                </motion.h1>

                {/* Supporting Text with Balanced Normal Weight */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="mt-6 text-base sm:text-lg md:text-xl text-teal-50/90 max-w-3xl mx-auto leading-relaxed font-normal drop-shadow-[0_1px_6px_rgba(0,0,0,0.4)]"
                >
                    Reliable nursing, elderly care, baby care, home cleaning, cooking and 24/7 care services
                    for families across Sonarpur and surrounding areas.
                </motion.p>

                {/* Action Buttons with Clean Medium/Semibold Weights */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto"
                >
                    {/* Primary CTA */}
                    <a
                        href="#contact"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#D79B3D] via-[#e5aa4e] to-[#C78B30] text-[#092F38] font-semibold text-sm sm:text-base shadow-lg shadow-amber-950/20 hover:brightness-105 active:scale-95 transition-all duration-200"
                    >
                        <span>Get Care Assistance</span>
                        <ArrowRight className="w-4 h-4 stroke-[2]" />
                    </a>

                    {/* Secondary CTA */}
                    <a
                        href="#services"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-sm sm:text-base border border-white/25 backdrop-blur-md transition-all duration-200"
                    >
                        <span>Explore Our Services</span>
                    </a>

                    {/* WhatsApp CTA */}
                    <a
                        href={`${businessInfo.contact.whatsappHref}?text=${defaultWhatsappMessage}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#25D366] to-[#20BA56] hover:brightness-105 text-white font-medium text-sm sm:text-base shadow-md transition-all duration-200"
                    >
                        <MessageSquare className="w-4 h-4 fill-white" />
                        <span>Chat on WhatsApp</span>
                    </a>
                </motion.div>

                {/* Trust Indicators with Lighter, Clean Typography */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.55 }}
                    className="mt-14 pt-8 border-t border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-3xl mx-auto"
                >
                    {/* Trust 1 */}
                    <div className="snake-card-dark flex items-center justify-center sm:justify-start gap-3.5 p-4 rounded-2xl border border-white/15 backdrop-blur-md shadow-xs cursor-pointer">
                        <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#D79B3D]/30 to-[#D79B3D]/10 text-[#F5C77E] shrink-0 border border-[#D79B3D]/40">
                            <Clock className="w-5 h-5 stroke-[1.8]" />
                        </div>
                        <div className="text-left">
                            <div className="font-semibold text-sm text-white">24/7 Nursing Care</div>
                            <div className="text-xs text-teal-200/80 font-normal">Support when you need it</div>
                        </div>
                    </div>

                    {/* Trust 2 */}
                    <div className="snake-card-dark flex items-center justify-center sm:justify-start gap-3.5 p-4 rounded-2xl border border-white/15 backdrop-blur-md shadow-xs cursor-pointer">
                        <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#D79B3D]/30 to-[#D79B3D]/10 text-[#F5C77E] shrink-0 border border-[#D79B3D]/40">
                            <ShieldCheck className="w-5 h-5 stroke-[1.8]" />
                        </div>
                        <div className="text-left">
                            <div className="font-semibold text-sm text-white">Experienced Care Support</div>
                            <div className="text-xs text-teal-200/80 font-normal">Dedicated attendants</div>
                        </div>
                    </div>

                    {/* Trust 3 */}
                    <div className="snake-card-dark flex items-center justify-center sm:justify-start gap-3.5 p-4 rounded-2xl border border-white/15 backdrop-blur-md shadow-xs cursor-pointer">
                        <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#D79B3D]/30 to-[#D79B3D]/10 text-[#F5C77E] shrink-0 border border-[#D79B3D]/40">
                            <MapPin className="w-5 h-5 stroke-[1.8]" />
                        </div>
                        <div className="text-left">
                            <div className="font-semibold text-sm text-white">Multiple Kolkata Locations</div>
                            <div className="text-xs text-teal-200/80 font-normal">Sonarpur & surrounding areas</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
