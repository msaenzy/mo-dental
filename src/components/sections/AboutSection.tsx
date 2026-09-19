import React from 'react';
import { FileCheck, Cpu, MessageSquare, HeartHandshake, MapPin } from 'lucide-react';
import { BRAND_VALUES } from '../../data/clinicData';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export const AboutSection: React.FC = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.15 });

  const getIcon = (name: string) => {
    switch (name) {
      case 'FileCheck':
        return <FileCheck className="w-5 h-5 text-[#2B4650]" strokeWidth={1.75} />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-[#2B4650]" strokeWidth={1.75} />;
      case 'MessageSquareCheck':
      case 'MessageSquare':
        return <MessageSquare className="w-5 h-5 text-[#2B4650]" strokeWidth={1.75} />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5 text-[#2B4650]" strokeWidth={1.75} />;
      default:
        return <FileCheck className="w-5 h-5 text-[#2B4650]" strokeWidth={1.75} />;
    }
  };

  return (
    <section
      id="sobre-nosotros"
      ref={ref}
      className="py-16 sm:py-24 bg-[#F7F5F1] relative border-t border-[#1F2421]/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center transition-all duration-700 ease-out ${
            isVisible
              ? 'opacity-100 scale-100'
              : 'opacity-90 scale-[0.98]'
          }`}
        >
          {/* Left Column: Image with Subtle Frame */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="rounded-2xl overflow-hidden border border-[#1F2421]/10 shadow-lg bg-white">
                <img
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80"
                  alt="Instalaciones del consultorio odontológico MO Dental en Trade Building Guayaquil"
                  className="w-full h-[400px] object-cover object-center"
                  loading="lazy"
                  width="800"
                  height="400"
                />
              </div>

              {/* Location pin tag */}
              <div className="mt-4 flex items-center gap-2 text-xs text-[#1F2421]/70">
                <MapPin className="w-4 h-4 text-[#2B4650]" strokeWidth={1.75} />
                <span>Edificio Trade Building, Torre B, Consultorio 718 C · Orrantia</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Copy and Values */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#2B4650] mb-2">
              Sobre el Consultorio
            </p>
            <h2
              id="about-us-title"
              className="font-editorial text-3xl sm:text-4xl font-bold text-[#1F2421] tracking-tight mb-6"
            >
              MO Dental — Dra. María José Cabrera
            </h2>

            {/* Exact copy from prompt */}
            <p className="text-base sm:text-lg text-[#1F2421]/85 leading-relaxed font-normal mb-8">
              MO Dental es el consultorio de la Dra. María José Cabrera, en el
              Edificio Trade Building, en pleno Orrantia. Un espacio pensado para
              pacientes que quieren entender qué necesita su boca antes de
              decidir un tratamiento — con explicaciones claras y sin presión de
              venta.
            </p>

            {/* Brand Values Grid */}
            <div className="pt-4 border-t border-[#1F2421]/10">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#1F2421]/60 mb-4">
                Nuestros pilares de atención
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {BRAND_VALUES.map((val) => (
                  <div
                    key={val.id}
                    className="flex items-center gap-3 p-3.5 rounded-lg bg-white border border-[#1F2421]/10 shadow-2xs"
                  >
                    <div className="w-9 h-9 rounded-md bg-[#2B4650]/8 flex items-center justify-center flex-shrink-0">
                      {getIcon(val.iconName)}
                    </div>
                    <span className="text-sm font-semibold text-[#1F2421]">
                      {val.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
