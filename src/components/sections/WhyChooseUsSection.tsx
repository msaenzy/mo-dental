import React from 'react';
import { Stethoscope, Sparkles, UserCheck } from 'lucide-react';
import { WHY_CHOOSE_US } from '../../data/clinicData';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export const WhyChooseUsSection: React.FC = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.15 });

  const getIcon = (name: string) => {
    switch (name) {
      case 'Stethoscope':
        return <Stethoscope className="w-6 h-6 text-[#2B4650]" strokeWidth={1.75} />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#2B4650]" strokeWidth={1.75} />;
      case 'UserCheck':
        return <UserCheck className="w-6 h-6 text-[#2B4650]" strokeWidth={1.75} />;
      default:
        return <Stethoscope className="w-6 h-6 text-[#2B4650]" strokeWidth={1.75} />;
    }
  };

  return (
    <section
      id="por-que-elegirnos"
      ref={ref}
      className="py-16 sm:py-24 bg-[#F7F5F1] relative border-t border-[#1F2421]/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#2B4650] mb-2">
            Metodología y Ética Médica
          </p>
          <h2
            id="why-choose-us-title"
            className="font-editorial text-3xl sm:text-4xl font-bold text-[#1F2421] tracking-tight"
          >
            Por qué elegirnos
          </h2>
          <p className="mt-3 text-base text-[#1F2421]/70 leading-relaxed">
            La odontología no es una venta rápida de estética: es salud, función
            y longevidad para tu sonrisa.
          </p>
        </div>

        {/* 3 Staggered Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-8">
          {WHY_CHOOSE_US.map((item, index) => (
            <article
              key={item.id}
              id={`why-card-${item.id}`}
              className={`bg-white rounded-xl p-8 border border-[#1F2421]/10 shadow-xs hover:shadow-md transition-all duration-500 ease-out flex flex-col justify-between ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-90 translate-y-2'
              }`}
              style={{
                transitionDelay: `${index * 120}ms`,
              }}
            >
              <div>
                {/* Icon Container */}
                <div className="w-12 h-12 rounded-lg bg-[#2B4650]/8 flex items-center justify-center mb-6">
                  {getIcon(item.iconName)}
                </div>

                {/* Card Title (exact copy) */}
                <h3 className="font-editorial text-xl font-bold text-[#1F2421] tracking-tight mb-3">
                  {item.title}
                </h3>

                {/* Card Body (exact copy) */}
                <p className="text-sm sm:text-base text-[#1F2421]/75 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#1F2421]/5 flex items-center justify-between text-xs text-[#2B4650] font-medium">
                <span>Criterio clínico MO Dental</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#2B4650]/40"></span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
