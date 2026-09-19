import React from 'react';
import { Instagram, Facebook, MapPin, Clock, ArrowUp } from 'lucide-react';
import { Logo } from '../ui/Logo';
import { CLINIC_INFO, NAV_LINKS } from '../../data/clinicData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="main-footer"
      className="bg-[#1F2421] text-[#F7F5F1] border-t border-[#1F2421]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-[#F7F5F1]/15">
          {/* Brand Column */}
          <div className="md:col-span-5 flex flex-col space-y-4">
            <Logo theme="dark" />
            <p className="text-sm text-[#F7F5F1]/80 max-w-sm leading-relaxed mt-2">
              Odontología general con enfoque especializado en Ortodoncia
              (brackets autoligados, alineadores invisibles) y Estética dental
              (carillas de resina estratificadas).
            </p>
            <p className="text-xs text-[#B08D57] font-medium tracking-wide">
              Dra. María José Cabrera · Guayaquil, Ecuador
            </p>
          </div>

          {/* Navigation Links Column */}
          <div className="md:col-span-3 flex flex-col space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#F7F5F1]/60">
              Navegación
            </h3>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-[#F7F5F1]/80 hover:text-[#F7F5F1] hover:underline underline-offset-4 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Location & Schedule summary */}
          <div className="md:col-span-4 flex flex-col space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#F7F5F1]/60">
              Ubicación & Contacto
            </h3>
            <div className="flex items-start gap-2.5 text-sm text-[#F7F5F1]/80">
              <MapPin className="w-4 h-4 text-[#B08D57] flex-shrink-0 mt-0.5" strokeWidth={1.75} />
              <span>{CLINIC_INFO.address}</span>
            </div>
            <div className="flex items-start gap-2.5 text-sm text-[#F7F5F1]/80">
              <Clock className="w-4 h-4 text-[#B08D57] flex-shrink-0 mt-0.5" strokeWidth={1.75} />
              <span>{CLINIC_INFO.schedule}</span>
            </div>

            {/* Social Media Links */}
            <div className="pt-3">
              <span className="text-xs text-[#F7F5F1]/60 block mb-2 font-medium">
                Síguenos en redes sociales:
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={CLINIC_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-[#F7F5F1]/10 hover:bg-[#F7F5F1]/20 flex items-center justify-center text-[#F7F5F1] transition-colors focus:ring-2 focus:ring-[#B08D57]"
                  aria-label="Instagram de MO Dental"
                  id="footer-instagram-link"
                >
                  <Instagram className="w-5 h-5" strokeWidth={1.75} />
                </a>
                <a
                  href={CLINIC_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-[#F7F5F1]/10 hover:bg-[#F7F5F1]/20 flex items-center justify-center text-[#F7F5F1] transition-colors focus:ring-2 focus:ring-[#B08D57]"
                  aria-label="Facebook de MO Dental"
                  id="footer-facebook-link"
                >
                  <Facebook className="w-5 h-5" strokeWidth={1.75} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Dynamic Year */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F7F5F1]/60">
          <p>
            © {currentYear} MO Dental — Dra. María José Cabrera. Todos los derechos reservados.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-xs text-[#F7F5F1]/70 hover:text-[#F7F5F1] transition-colors"
            aria-label="Volver al inicio de la página"
          >
            <span>Volver arriba</span>
            <ArrowUp className="w-3.5 h-3.5" strokeWidth={1.75} />
          </button>
        </div>
      </div>
    </footer>
  );
};
