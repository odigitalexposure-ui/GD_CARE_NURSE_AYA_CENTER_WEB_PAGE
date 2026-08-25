import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import AreasWeServe from '../components/AreasWeServe';
import WhyChooseUs from '../components/WhyChooseUs';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/common/FloatingWhatsApp';
import BackToTop from '../components/common/BackToTop';
import MobileActionBar from '../components/common/MobileActionBar';

function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F4FAF8] text-[#17323A] selection:bg-[#0F4C5C] selection:text-white relative">
      {/* Top Sticky Navigation */}
      <Navbar />

      {/* Main Single Page Content */}
      <main className="flex-grow">
        {/* 1. Home / Full Screen Hero */}
        <Hero />

        {/* 2. About Section with authentic office photograph & 4 highlight cards */}
        <About />

        {/* 3. Care Services (7 Cards + Care Helper) */}
        <Services />

        {/* 4. Areas We Serve (15 Kolkata Locations) */}
        <AreasWeServe />

        {/* 5. Why Families Choose GD Care (4 Value Cards) */}
        <WhyChooseUs />

        {/* 6. Authentic Gallery Grid & Lightbox */}
        <Gallery />

        {/* 7. Contact Section (Address card, Visiting asset, WhatsApp Form, Emergency CTA, Google Maps) */}
        <Contact />
      </main>

      {/* Footer & Developer Attribution Banner */}
      <Footer />

      {/* Floating Action Controls & Mobile Sticky Contact Bar */}
      <FloatingWhatsApp />
      <BackToTop />
      <MobileActionBar />
    </div>
  );
}

export default Home;

