import React, { useState } from 'react';
import {
  MapPin,
  Clock,
  MessageCircle,
  ExternalLink,
  Send,
  AlertCircle,
  CheckCircle2,
} from 'lucide-react';
import { CLINIC_INFO, buildWhatsAppUrl } from '../../data/clinicData';
import { Button } from '../ui/Button';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export const LocationAndContactSection: React.FC = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.15 });

  // Form State
  const [fullName, setFullName] = useState('');
  const [treatment, setTreatment] = useState('Carillas');
  const [consultationType, setConsultationType] = useState<
    'primera vez' | 'ya tengo diagnóstico previo'
  >('primera vez');
  const [preferredSchedule, setPreferredSchedule] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!fullName.trim() || !preferredSchedule.trim()) {
      return;
    }

    // Exact message formula specified in prompt:
    // "Hola, soy [Nombre]. Me interesa [Tratamiento] y [primera vez / ya tengo diagnóstico previo]. Mi horario preferente es [Horario]. ¿Podrían ayudarme a agendar?"
    const compiledMessage = `Hola, soy ${fullName.trim()}. Me interesa ${treatment} y ${consultationType}. Mi horario preferente es ${preferredSchedule.trim()}. ¿Podrían ayudarme a agendar?`;

    const whatsAppUrl = buildWhatsAppUrl(compiledMessage);
    window.open(whatsAppUrl, '_blank', 'noopener,noreferrer');
    setFormSubmitted(true);
  };

  return (
    <section
      id="contacto"
      ref={ref}
      className="py-16 sm:py-24 bg-[#F7F5F1] relative border-t border-[#1F2421]/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#2B4650] mb-2">
            Agendamiento & Ubicación
          </p>
          <h2
            id="location-contact-title"
            className="font-editorial text-3xl sm:text-4xl font-bold text-[#1F2421] tracking-tight"
          >
            Ubicación y Contacto
          </h2>
          <p className="mt-3 text-base text-[#1F2421]/75 leading-relaxed">
            Visítanos en el sector empresarial de Guayaquil con previa cita para
            asegurar una atención puntual y sin esperas.
          </p>
        </div>

        {/* Two-Column Grid with Opposing Lateral Slide-In Animation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Form & Clinical Info (Slide from Left) */}
          <div
            className={`lg:col-span-6 transition-all duration-700 ease-out ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-90 -translate-x-3'
            }`}
          >
            {/* Booking Form Card */}
            <div className="bg-white rounded-xl p-6 sm:p-8 border border-[#1F2421]/10 shadow-sm mb-8">
              <h3 className="font-editorial text-2xl font-bold text-[#1F2421] mb-2">
                Agenda tu Valoración
              </h3>
              <p className="text-sm text-[#1F2421]/70 mb-6 leading-relaxed">
                Completa tus datos para enviarnos tu solicitud directamente a
                WhatsApp con la información de tu caso.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Nombre */}
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-xs font-semibold text-[#1F2421] uppercase tracking-wider mb-1.5"
                  >
                    Nombre y Apellido *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Ej. Andrea Morales"
                    className="w-full px-4 py-2.5 text-sm bg-[#F7F5F1]/50 rounded-lg border border-[#1F2421]/15 text-[#1F2421] placeholder-[#1F2421]/40 focus:bg-white focus:border-[#2B4650] transition-colors"
                  />
                </div>

                {/* Tratamiento de interés */}
                <div>
                  <label
                    htmlFor="treatment"
                    className="block text-xs font-semibold text-[#1F2421] uppercase tracking-wider mb-1.5"
                  >
                    Tratamiento de interés *
                  </label>
                  <select
                    id="treatment"
                    value={treatment}
                    onChange={(e) => setTreatment(e.target.value)}
                    className="w-full px-4 py-2.5 text-sm bg-[#F7F5F1]/50 rounded-lg border border-[#1F2421]/15 text-[#1F2421] focus:bg-white focus:border-[#2B4650] transition-colors"
                  >
                    <option value="Carillas">Carillas (de resina estratificadas)</option>
                    <option value="Brackets autoligados">Brackets autoligados</option>
                    <option value="Alineadores">Alineadores invisibles</option>
                    <option value="Valoración general">Valoración general / Diagnóstico integral</option>
                  </select>
                </div>

                {/* ¿Es tu primera consulta o ya tienes diagnóstico previo? */}
                <div>
                  <span className="block text-xs font-semibold text-[#1F2421] uppercase tracking-wider mb-2">
                    ¿Es tu primera consulta o ya tienes un diagnóstico previo? *
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <label
                      className={`flex items-center gap-2.5 p-3 rounded-lg border text-sm cursor-pointer transition-colors ${
                        consultationType === 'primera vez'
                          ? 'border-[#2B4650] bg-[#2B4650]/5 font-medium text-[#2B4650]'
                          : 'border-[#1F2421]/15 text-[#1F2421]/70 hover:bg-[#F7F5F1]/80'
                      }`}
                    >
                      <input
                        type="radio"
                        name="consultationType"
                        value="primera vez"
                        checked={consultationType === 'primera vez'}
                        onChange={() => setConsultationType('primera vez')}
                        className="text-[#2B4650] focus:ring-[#2B4650]"
                      />
                      <span>Primera vez</span>
                    </label>

                    <label
                      className={`flex items-center gap-2.5 p-3 rounded-lg border text-sm cursor-pointer transition-colors ${
                        consultationType === 'ya tengo diagnóstico previo'
                          ? 'border-[#2B4650] bg-[#2B4650]/5 font-medium text-[#2B4650]'
                          : 'border-[#1F2421]/15 text-[#1F2421]/70 hover:bg-[#F7F5F1]/80'
                      }`}
                    >
                      <input
                        type="radio"
                        name="consultationType"
                        value="ya tengo diagnóstico previo"
                        checked={consultationType === 'ya tengo diagnóstico previo'}
                        onChange={() => setConsultationType('ya tengo diagnóstico previo')}
                        className="text-[#2B4650] focus:ring-[#2B4650]"
                      />
                      <span>Ya tengo diagnóstico</span>
                    </label>
                  </div>
                </div>

                {/* Horario preferente */}
                <div>
                  <label
                    htmlFor="preferredSchedule"
                    className="block text-xs font-semibold text-[#1F2421] uppercase tracking-wider mb-1.5"
                  >
                    Horario preferente *
                  </label>
                  <input
                    type="text"
                    id="preferredSchedule"
                    required
                    value={preferredSchedule}
                    onChange={(e) => setPreferredSchedule(e.target.value)}
                    placeholder="Ej. Martes o Jueves por la tarde (16h00 a 18h00)"
                    className="w-full px-4 py-2.5 text-sm bg-[#F7F5F1]/50 rounded-lg border border-[#1F2421]/15 text-[#1F2421] placeholder-[#1F2421]/40 focus:bg-white focus:border-[#2B4650] transition-colors"
                  />
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full justify-center text-base font-semibold shadow-md hover:shadow-lg"
                    id="submit-whatsapp-booking-btn"
                  >
                    <Send className="w-4 h-4 mr-2" strokeWidth={1.75} />
                    <span>Enviar solicitud por WhatsApp</span>
                  </Button>
                </div>
              </form>

              {formSubmitted && (
                <div className="mt-4 p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0 text-emerald-600" />
                  <span>
                    Mensaje generado correctamente. Se abrirá la conversación en WhatsApp.
                  </span>
                </div>
              )}

              {/* Public notice about pending telephone confirmation */}
              <div className="mt-4 flex items-start gap-2 p-3 rounded-lg bg-[#F7F5F1] border border-[#1F2421]/10 text-[11px] text-[#1F2421]/70">
                <AlertCircle className="w-4 h-4 flex-shrink-0 text-[#2B4650] mt-0.5" strokeWidth={1.75} />
                <div>
                  <span className="font-semibold text-[#1F2421]">Aviso de contacto: </span>
                  <span>
                    [NÚMERO PENDIENTE DE CONFIRMAR — no aparece en el Instagram público; usar el mismo número que en el Navbar una vez confirmado].
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Contact Details */}
            <div className="bg-white rounded-xl p-6 border border-[#1F2421]/10 shadow-xs space-y-4">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#2B4650] flex-shrink-0 mt-0.5" strokeWidth={1.75} />
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#1F2421]">
                    Horario de Atención
                  </h4>
                  <p className="text-sm text-[#1F2421]/80 mt-0.5 leading-relaxed">
                    {CLINIC_INFO.schedule}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-[#1F2421]/5">
                <MessageCircle className="w-5 h-5 text-[#2B4650] flex-shrink-0 mt-0.5" strokeWidth={1.75} />
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#1F2421]">
                    Canal de WhatsApp
                  </h4>
                  <p className="text-sm text-[#1F2421]/80 mt-0.5">
                    Valoraciones programadas con la Dra. María José Cabrera.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Address Details, Map Button & Google Maps Embed (Slide from Right) */}
          <div
            className={`lg:col-span-6 transition-all duration-700 ease-out ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-90 translate-x-3'
            }`}
          >
            {/* Address Card */}
            <div className="bg-white rounded-xl p-6 sm:p-8 border border-[#1F2421]/10 shadow-sm mb-6">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#2B4650]/10 flex items-center justify-center flex-shrink-0 text-[#2B4650]">
                  <MapPin className="w-5 h-5" strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="font-editorial text-xl font-bold text-[#1F2421]">
                    Dirección en Guayaquil
                  </h3>
                  <p className="text-sm text-[#1F2421]/80 mt-1 leading-relaxed">
                    {CLINIC_INFO.address}
                  </p>
                </div>
              </div>

              {/* Botón "Abrir en Mapa" */}
              <div className="pt-2">
                <Button
                  asLink
                  href={CLINIC_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                  size="md"
                  className="w-full sm:w-auto"
                  id="open-in-google-maps-btn"
                >
                  <span>Abrir en Mapa</span>
                  <ExternalLink className="w-4 h-4 ml-1.5" strokeWidth={1.75} />
                </Button>
              </div>
            </div>

            {/* Embedded Google Maps Container */}
            <div className="rounded-xl overflow-hidden border border-[#1F2421]/15 shadow-md bg-white">
              <div className="px-4 py-2.5 bg-[#F7F5F1] border-b border-[#1F2421]/10 flex items-center justify-between text-xs text-[#1F2421]/70">
                <span className="font-medium text-[#1F2421]">Mapa Interactivo: Trade Building Torre B</span>
                <span>Guayaquil, Ecuador</span>
              </div>
              <div className="w-full h-[360px] sm:h-[420px] relative bg-slate-100">
                <iframe
                  title="Ubicación de MO Dental en Edificio Trade Building Torre B, Guayaquil"
                  src={CLINIC_INFO.googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full grayscale-[15%] contrast-[105%]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
