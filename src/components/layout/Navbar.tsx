import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { Logo } from '../ui/Logo';
import { Button } from '../ui/Button';
import { NAV_LINKS, CLINIC_INFO, buildWhatsAppUrl } from '../../data/clinicData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const defaultWhatsAppMsg = 'Hola, quiero agendar una valoración en MO Dental';
  const whatsAppUrl = buildWhatsAppUrl(defaultWhatsAppMsg);

  return (
    <header
      id="main-navbar-header"
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F7F5F1]/95 backdrop-blur-md shadow-xs border-b border-[#1F2421]/10 py-3'
          : 'bg-[#F7F5F1] py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo theme="light" />
          </div>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Navegación principal"
            className="hidden md:flex items-center gap-6 lg:gap-8"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#1F2421]/80 hover:text-[#2B4650] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#2B4650] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <Button
              asLink
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="sm"
              className="text-xs sm:text-sm font-medium tracking-wide"
              id="navbar-whatsapp-cta"
            >
              <MessageCircle className="w-4 h-4" strokeWidth={1.75} />
              <span>Agendar por WhatsApp</span>
            </Button>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex md:hidden items-center gap-2">
            <Button
              asLink
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="sm"
              className="px-2.5 py-1.5 text-xs sm:hidden"
              aria-label="Agendar por WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5" strokeWidth={1.75} />
            </Button>

            <button
              type="button"
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#1F2421] hover:bg-[#1F2421]/5 focus:outline-none focus:ring-2 focus:ring-[#2B4650]"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" strokeWidth={1.75} />
              ) : (
                <Menu className="w-6 h-6" strokeWidth={1.75} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="md:hidden bg-[#F7F5F1] border-b border-[#1F2421]/10 px-4 pt-3 pb-6 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200"
        >
          <div className="flex flex-col space-y-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#1F2421] text-base font-medium py-2 px-3 rounded-md hover:bg-[#2B4650]/5 hover:text-[#2B4650] transition-colors"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-3 border-t border-[#1F2421]/10">
              <Button
                asLink
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="md"
                className="w-full justify-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                <MessageCircle className="w-4 h-4 mr-2" strokeWidth={1.75} />
                Agendar por WhatsApp
              </Button>
              <p className="text-[11px] text-[#1F2421]/60 text-center mt-2">
                {CLINIC_INFO.whatsappPendingNotice}
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
