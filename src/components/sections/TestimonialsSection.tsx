import React, { useState } from 'react';
import { MessageSquare, Clock, ShieldCheck, Heart } from 'lucide-react';
import { TESTIMONIAL_SLOTS } from '../../data/clinicData';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export const TestimonialsSection: React.FC = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate slots to ensure continuous infinite loop
  const duplicatedSlots = [...TESTIMONIAL_SLOTS, ...TESTIMONIAL_SLOTS];

  return (
    <section
      id="testimonios"
      ref={ref}
      className="py-16 sm:py-24 bg-[#F7F5F1] relative border-t border-[#1F2421]/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2B4650]/8 text-[#2B4650] text-xs font-semibold tracking-wide mb-3">
          <ShieldCheck className="w-4 h-4 text-[#2B4650]" strokeWidth={1.75} />
          <span>TRANSPARENCIA CLÍNICA</span>
        </div>
        <h2
          id="testimonials-title"
          className="font-editorial text-3xl sm:text-4xl font-bold text-[#1F2421] tracking-tight"
        >
          Experiencias de Pacientes
        </h2>
        <p className="mt-3 text-sm sm:text-base text-[#1F2421]/75 max-w-xl mx-auto leading-relaxed">
          En MO Dental priorizamos la veracidad médica y la privacidad del paciente.
          Los testimonios son casos reales documentados con autorización directa.
        </p>
      </div>

      {/* Marquee Carousel Container */}
      <div
        className="relative w-full overflow-hidden py-4"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        {/* Soft edge fade masks */}
        <div className="absolute left-0 inset-y-0 w-12 sm:w-24 bg-gradient-to-r from-[#F7F5F1] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 inset-y-0 w-12 sm:w-24 bg-gradient-to-l from-[#F7F5F1] to-transparent z-10 pointer-events-none" />

        <div
          className={`flex gap-6 ${
            isVisible && !isPaused ? 'animate-marquee' : 'animate-marquee-paused flex max-w-full overflow-x-auto pb-4 px-4'
          }`}
        >
          {duplicatedSlots.map((slot, index) => (
            <div
              key={`${slot.id}-${index}`}
              className="w-[300px] sm:w-[360px] flex-shrink-0 bg-white rounded-xl p-6 border border-[#1F2421]/10 shadow-xs flex flex-col justify-between"
            >
              <div>
                {/* Header: Verified Slot Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#2B4650]">
                    <Clock className="w-3.5 h-3.5 text-[#2B4650]" strokeWidth={1.75} />
                    <span>Registro Clínico #{slot.id}</span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] text-[#B08D57] font-medium bg-[#B08D57]/10 px-2 py-0.5 rounded">
                    <Heart className="w-3 h-3 fill-[#B08D57]" />
                    <span>Verificado</span>
                  </span>
                </div>

                {/* Status Indicator (Required Exact Format) */}
                <div className="p-4 rounded-lg bg-[#F7F5F1]/80 border border-dashed border-[#1F2421]/20 mb-4">
                  <div className="flex items-start gap-3">
                    <MessageSquare className="w-4 h-4 text-[#2B4650] flex-shrink-0 mt-0.5" strokeWidth={1.75} />
                    <div>
                      <p className="text-sm font-semibold text-[#1F2421]">
                        {slot.statusText}
                      </p>
                      <p className="text-xs text-[#1F2421]/65 mt-1 leading-relaxed">
                        {slot.note}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer: Clinical Verification Standard */}
              <div className="pt-4 border-t border-[#1F2421]/5 flex items-center justify-between text-[11px] text-[#1F2421]/60">
                <span>MO Dental · Dra. Cabrera</span>
                <span className="font-mono text-[10px]">CASO-EC-{slot.id}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-6">
        <p className="text-xs text-[#1F2421]/60 italic">
          * Desliza o coloca el cursor sobre las tarjetas para pausar la vista.
        </p>
      </div>
    </section>
  );
};
