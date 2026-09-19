import React from 'react';
import { Check, MessageCircle, Sparkles } from 'lucide-react';
import { TREATMENTS, buildWhatsAppUrl } from '../../data/clinicData';
import { Button } from '../ui/Button';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export const TreatmentsSection: React.FC = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section
      id="tratamientos"
      ref={ref}
      className="py-16 sm:py-24 bg-[#F7F5F1] relative border-t border-[#1F2421]/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#2B4650] mb-2">
            Tratamientos Principales
          </p>
          <h2
            id="treatments-section-title"
            className="font-editorial text-3xl sm:text-4xl font-bold text-[#1F2421] tracking-tight"
          >
            Oferta y Tratamientos
          </h2>
          <p className="mt-3 text-base text-[#1F2421]/75 leading-relaxed">
            Procedimientos planificados con rigor biomimético y estética natural.
            Sin sobretratamientos ni desgastes innecesarios.
          </p>
        </div>

        {/* 3 Grid Cards with Incremental Delay */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {TREATMENTS.map((treatment, index) => {
            const isCarillas = treatment.id === 'carillas';
            const treatmentWhatsAppUrl = buildWhatsAppUrl(
              `Hola Dra. María José Cabrera, me interesa consultar información y agendar valoración para ${treatment.title} en MO Dental.`
            );

            return (
              <article
                key={treatment.id}
                id={`treatment-card-${treatment.id}`}
                className={`bg-white rounded-xl overflow-hidden border transition-all duration-500 flex flex-col justify-between hover:shadow-lg ${
                  isCarillas
                    ? 'border-[#B08D57]/40 ring-1 ring-[#B08D57]/20 shadow-xs'
                    : 'border-[#1F2421]/10 shadow-xs'
                } ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-90 translate-y-3'
                }`}
                style={{
                  transitionDelay: `${index * 140}ms`,
                }}
              >
                <div>
                  {/* Treatment Image with Alt tag */}
                  <div className="relative h-56 overflow-hidden bg-[#2B4650]/5">
                    <img
                      src={treatment.image}
                      alt={`${treatment.title} en MO Dental Guayaquil`}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                      width="900"
                      height="560"
                    />

                    {/* Gold Badge for Carillas only */}
                    {treatment.badge && (
                      <div className="absolute top-3 left-3 bg-[#B08D57] text-white px-3 py-1 rounded-md text-xs font-medium tracking-wide flex items-center gap-1.5 shadow-sm">
                        <Sparkles className="w-3.5 h-3.5 text-white" strokeWidth={1.75} />
                        <span>{treatment.badge}</span>
                      </div>
                    )}
                  </div>

                  {/* Card Content */}
                  <div className="p-6 sm:p-7">
                    <h3 className="font-editorial text-2xl font-bold text-[#1F2421] tracking-tight mb-3">
                      {treatment.title}
                    </h3>

                    <p className="text-sm sm:text-base text-[#1F2421]/80 leading-relaxed mb-4">
                      {treatment.description}
                    </p>

                    {/* Price/Promotion banner for Carillas using exact #B08D57 */}
                    {treatment.priceNote && (
                      <div className="mb-5 p-3.5 rounded-lg bg-[#B08D57]/10 border border-[#B08D57]/30">
                        <p className="text-xs uppercase tracking-wider text-[#B08D57] font-semibold mb-1">
                          Inversión & Promoción
                        </p>
                        <p className="text-base font-bold text-[#1F2421]">
                          {treatment.priceNote}
                        </p>
                      </div>
                    )}

                    {/* Highlight bullets */}
                    <ul className="space-y-2.5 mb-6">
                      {treatment.highlights.map((bullet, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-[#1F2421]/75"
                        >
                          <Check
                            className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                              isCarillas ? 'text-[#B08D57]' : 'text-[#2B4650]'
                            }`}
                            strokeWidth={2}
                          />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Footer Button */}
                <div className="p-6 sm:p-7 pt-0">
                  <Button
                    asLink
                    href={treatmentWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant={isCarillas ? 'gold' : 'primary'}
                    size="md"
                    className="w-full justify-center text-sm font-medium"
                  >
                    <MessageCircle className="w-4 h-4" strokeWidth={1.75} />
                    <span>Consultar este tratamiento</span>
                  </Button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
