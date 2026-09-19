import React from 'react';
import { MessageCircle } from 'lucide-react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { WhyChooseUsSection } from './components/sections/WhyChooseUsSection';
import { TreatmentsSection } from './components/sections/TreatmentsSection';
import { AboutSection } from './components/sections/AboutSection';
import { TestimonialsSection } from './components/sections/TestimonialsSection';
import { LocationAndContactSection } from './components/sections/LocationAndContactSection';
import { buildWhatsAppUrl } from './data/clinicData';

export default function App() {
  const floatingWhatsAppUrl = buildWhatsAppUrl(
    'Hola Dra. María José Cabrera, me gustaría solicitar una valoración en MO Dental.'
  );

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F5F1] text-[#1F2421]">
      {/* Sticky Navigation */}
      <Navbar />

      {/* Main Sections in Exact Specified Architectural Order */}
      <main id="main-content" className="flex-grow">
        {/* 1. Hero (100vh) */}
        <HeroSection />

        {/* 2. Por qué elegirnos (3 cards) */}
        <WhyChooseUsSection />

        {/* 3. Oferta / Tratamientos */}
        <TreatmentsSection />

        {/* 4. Sobre nosotros / MO Dental */}
        <AboutSection />

        {/* 5. Testimonios (carrusel loop continuo) */}
        <TestimonialsSection />

        {/* 6. Ubicación y contacto */}
        <LocationAndContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Persistent Floating WhatsApp Quick-Action Button */}
      <aside aria-label="Contacto directo por WhatsApp">
        <a
          href={floatingWhatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          id="floating-whatsapp-trigger"
          aria-label="Contactar a MO Dental por WhatsApp"
          className="fixed bottom-6 right-6 z-40 bg-[#2B4650] hover:bg-[#21373F] text-white p-3.5 sm:p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2B4650] border border-white/20"
        >
          <MessageCircle className="w-6 h-6 text-[#F7F5F1]" strokeWidth={1.75} />
          <span className="hidden sm:inline text-xs font-semibold tracking-wide pr-1">
            Agendar cita
          </span>
        </a>
      </aside>
    </div>
  );
}
