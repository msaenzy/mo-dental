import React from 'react';
import { MessageCircle, ArrowRight, ShieldCheck, Clock, MapPin } from 'lucide-react';
import { Button } from '../ui/Button';
import { CLINIC_INFO, buildWhatsAppUrl } from '../../data/clinicData';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export const HeroSection: React.FC = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });
  const whatsAppUrl = buildWhatsAppUrl('Hola, quiero agendar una valoración en MO Dental');

  const headlineWords = [
    'Antes',
    'de',
    'una',
    'carilla',
    'o',
    'un',
    'bracket,',
    'hay',
    'un',
    'diagnóstico',
    'que',
    'la',
    'mayoría',
    'se',
    'salta.',
  ];

  return (
    <section
      id="inicio"
      ref={ref}
      className="relative min-h-[calc(100vh-76px)] flex items-center justify-center bg-[#F7F5F1] overflow-hidden py-12 lg:py-20"
    >
      {/* Subtle architectural background texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            'radial-gradient(#2B4650 0.75px, transparent 0.75px), radial-gradient(#2B4650 0.75px, #F7F5F1 0.75px)',
          backgroundSize: '30px 30px',
          backgroundPosition: '0 0, 15px 15px',
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.6), transparent 85%)',
          WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.6), transparent 85%)',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Copy & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Clinical Trust Badge */}
            <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-[#2B4650]/10 text-[#2B4650] text-xs font-semibold tracking-wide mb-6">
              <ShieldCheck className="w-4 h-4 text-[#2B4650]" strokeWidth={1.75} />
              <span>CONSULTORIO ODONTOLÓGICO · GUAYAQUIL</span>
            </div>

            {/* H1 Headline with word-by-word stagger animation */}
            <h1
              id="hero-headline"
              className="font-editorial text-3xl sm:text-5xl lg:text-[3.25rem] font-bold text-[#1F2421] leading-[1.15] tracking-tight mb-6"
            >
              {headlineWords.map((word, index) => (
                <span
                  key={`${word}-${index}`}
                  className={`inline-block mr-[0.25em] transition-all duration-500 ease-out ${
                    isVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-90 translate-y-1'
                  }`}
                  style={{
                    transitionDelay: `${index * 45}ms`,
                  }}
                >
                  {word}
                </span>
              ))}
            </h1>

            {/* Subheadline with exact copy */}
            <p className="text-base sm:text-lg lg:text-xl text-[#1F2421]/80 leading-relaxed font-normal max-w-2xl mb-8">
              En MO Dental, la Dra. María José Cabrera revisa tu boca completa
              —encías, mordida y estética real— antes de proponerte cualquier
              tratamiento.
            </p>

            {/* Action Buttons: Fade with slight delay */}
            <div
              className={`flex flex-col sm:flex-row items-stretch sm:items-center gap-4 transition-all duration-700 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-90 translate-y-1'
              }`}
            >
              <Button
                asLink
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="lg"
                id="hero-primary-cta"
                className="group shadow-md hover:shadow-lg"
              >
                <MessageCircle className="w-5 h-5 text-[#F7F5F1]" strokeWidth={1.75} />
                <span>Agenda tu valoración</span>
              </Button>

              <Button
                asLink
                href="#tratamientos"
                variant="secondary"
                size="lg"
                id="hero-secondary-cta"
                className="group"
              >
                <span>Ver tratamientos</span>
                <ArrowRight
                  className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1"
                  strokeWidth={1.75}
                />
              </Button>
            </div>

            {/* Quick meta indicators */}
            <div className="pt-8 mt-8 border-t border-[#1F2421]/10 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-[#1F2421]/70">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#2B4650] flex-shrink-0" strokeWidth={1.75} />
                <span>Trade Building, Torre B</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#2B4650] flex-shrink-0" strokeWidth={1.75} />
                <span>Lun-Vie hasta 20h00</span>
              </div>
              <div className="col-span-2 sm:col-span-1 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-600 inline-block flex-shrink-0"></span>
                <span>Atención personalizada</span>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Clinical Photography */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative border frame */}
              <div className="absolute -inset-2 rounded-2xl bg-[#2B4650]/5 -rotate-1 transform pointer-events-none" />

              <div className="relative rounded-xl overflow-hidden bg-white shadow-xl border border-[#1F2421]/10">
                <img
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=900&q=80"
                  alt="Dra. María José Cabrera realizando diagnóstico clínico odontológico en consultorio MO Dental Guayaquil"
                  className="w-full h-[380px] sm:h-[460px] object-cover object-center"
                  loading="eager"
                  width="900"
                  height="460"
                />

                {/* Clinical Doctor Card Overlay */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#1F2421]/90 via-[#1F2421]/60 to-transparent p-5 text-[#F7F5F1]">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-editorial text-lg font-semibold tracking-wide">
                        Dra. María José Cabrera
                      </p>
                      <p className="text-xs text-[#F7F5F1]/80 font-normal">
                        Ortodoncia y Estética Dental · MO Dental
                      </p>
                    </div>
                    <div className="px-2.5 py-1 rounded bg-[#B08D57]/90 text-[11px] font-semibold tracking-wider uppercase text-white shadow-xs">
                      Presencial
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating micro-badge: "Diagnóstico completo antes de intervenir" */}
              <div className="absolute -bottom-4 -left-4 sm:-left-6 bg-white py-2.5 px-4 rounded-lg shadow-lg border border-[#1F2421]/10 hidden sm:flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#2B4650] flex items-center justify-center text-white">
                  <ShieldCheck className="w-4 h-4" strokeWidth={1.75} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#1F2421]">Valoración Integral</p>
                  <p className="text-[11px] text-[#1F2421]/60">Encías, mordida y salud previa</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
