import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import ServicesSection from './components/ServicesSection.tsx';
import Testimonials from './components/Testimonials.tsx';
import Gallery from './components/Gallery.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';
import FloatingCTA from './components/FloatingCTA.tsx';
import PetAssistant from './components/PetAssistant.tsx';
import BookingModal from './components/BookingModal.tsx';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-stone-50 text-slate-900 overflow-x-hidden">
      <Navbar isScrolled={isScrolled} onBookClick={() => setIsBookingOpen(true)} />
      
      <main>
        <section id="home">
          <Hero onBookClick={() => setIsBookingOpen(true)} />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="services" className="bg-white">
          <ServicesSection onBookClick={() => setIsBookingOpen(true)} />
        </section>

        <section id="testimonials">
          <Testimonials />
        </section>

        <section id="gallery" className="bg-white">
          <Gallery />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />
      <FloatingCTA onBookClick={() => setIsBookingOpen(true)} />
      <PetAssistant />
      
      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
      />
    </div>
  );
};

export default App;