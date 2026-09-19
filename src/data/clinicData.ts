import {
  NavLink,
  WhyChooseUsItem,
  TreatmentItem,
  BrandValueItem,
  TestimonialSlot,
} from '../types';

// WhatsApp phone placeholder note (pending confirmation from clinic)
export const CLINIC_INFO = {
  name: 'MO Dental — Consultorio Odontológico',
  doctor: 'Dra. María José Cabrera',
  specialty: 'Odontología general con enfoque en Ortodoncia y Estética Dental',
  address: 'Edificio Trade Building, Torre B, Consultorio 718 C, Av. Joaquín J. Orrantia González, Guayaquil, Ecuador',
  city: 'Guayaquil, Ecuador',
  schedule: 'Lunes a Viernes: 9h00 a 20h00 · Sábados: 9h00 a 15h00 · Citas bajo previo agendamiento',
  whatsappNumber: '593900000000', // PENDIENTE: no visible en el Instagram público de mo_dental_ec
  whatsappPendingNotice: 'Número telefónico directo pendiente de confirmación pública con la clínica',
  instagramUrl: 'https://www.instagram.com/mo_dental_ec/',
  facebookUrl: 'https://www.facebook.com/search/top?q=MO%20Dental',
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Edificio+Trade+Building+Torre+B+Av+Joaquin+J+Orrantia+Gonzalez+Guayaquil',
  // Embed iframe url for Google Maps at Trade Building Guayaquil
  googleMapsEmbedUrl: 'https://maps.google.com/maps?q=Trade+Building+Torre+B+Av+Joaquin+J+Orrantia+Gonzalez+Guayaquil&t=&z=16&ie=UTF8&iwloc=&output=embed',
};

export const NAV_LINKS: NavLink[] = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Por qué elegirnos', href: '#por-que-elegirnos' },
  { label: 'Tratamientos', href: '#tratamientos' },
  { label: 'Sobre nosotros', href: '#sobre-nosotros' },
  { label: 'Contacto', href: '#contacto' },
];

export const WHY_CHOOSE_US: WhyChooseUsItem[] = [
  {
    id: 'diagnostico',
    title: 'Diagnóstico antes que venta',
    description: 'Antes de proponerte carillas o brackets, evaluamos tu boca completa. Ningún tratamiento se recomienda sin ese paso.',
    iconName: 'Stethoscope',
  },
  {
    id: 'tecnologia',
    title: 'Ortodoncia con tecnología actual',
    description: 'Brackets autoligados y alineadores discretos, adaptados a tu día a día — no al catálogo genérico de una clínica.',
    iconName: 'Sparkles',
  },
  {
    id: 'trato-directo',
    title: 'Trato directo con tu doctora',
    description: 'Es la Dra. María José Cabrera quien te atiende, revisa tu caso y da seguimiento — no un consultorio rotativo de especialistas distintos cada cita.',
    iconName: 'UserCheck',
  },
];

export const TREATMENTS: TreatmentItem[] = [
  {
    id: 'carillas',
    title: 'Carillas de resina estratificadas',
    description: 'Diseño de sonrisa capa por capa, sin desgastar el diente más de lo necesario.',
    priceNote: '$100 c/u — $80 c/u desde la segunda carilla.',
    badge: 'Estética de alta precisión',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=900&q=80',
    highlights: [
      'Técnica estratificada capa a capa',
      'Preservación máxima del esmalte natural',
      'Promoción: $100 c/u — $80 c/u desde la segunda',
      'Planificación con análisis estético y funcional',
    ],
  },
  {
    id: 'brackets',
    title: 'Brackets autoligados',
    description: 'Alinean tu sonrisa con menos fricción y menos visitas de ajuste que un bracket convencional.',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=900&q=80',
    highlights: [
      'Menor fricción y mayor comodidad biológica',
      'Menos citas de control y ajustes más rápidos',
      'Higiene bucal más sencilla durante el tratamiento',
      'Resultados controlados paso a paso',
    ],
  },
  {
    id: 'alineadores',
    title: 'Alineadores invisibles',
    description: 'Corrige tu mordida sin que se note: discretos, removibles y hechos a la medida de tu tratamiento.',
    image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=900&q=80',
    highlights: [
      'Completamente transparentes e imperceptibles',
      'Removibles para comer y cepillarse',
      'Planificación digital computarizada',
      'Sin alambres ni molestias en encías',
    ],
  },
];

export const BRAND_VALUES: BrandValueItem[] = [
  {
    id: 'val-diagnostico',
    title: 'Diagnóstico honesto',
    iconName: 'FileCheck',
  },
  {
    id: 'val-tecnologia',
    title: 'Tecnología actualizada',
    iconName: 'Cpu',
  },
  {
    id: 'val-comunicacion',
    title: 'Comunicación clara',
    iconName: 'MessageSquareCheck',
  },
  {
    id: 'val-seguimiento',
    title: 'Seguimiento personalizado',
    iconName: 'HeartHandshake',
  },
];

export const TESTIMONIAL_SLOTS: TestimonialSlot[] = [
  {
    id: 1,
    statusText: 'Espacio reservado para testimonio real',
    note: 'Caso clínico ortodoncia / estética en revisión y autorización de paciente.',
  },
  {
    id: 2,
    statusText: 'Espacio reservado para testimonio real',
    note: 'Caso clínico carillas de resina estratificadas en recopilación.',
  },
  {
    id: 3,
    statusText: 'Espacio reservado para testimonio real',
    note: 'Caso clínico brackets autoligados y evolución de mordida.',
  },
  {
    id: 4,
    statusText: 'Espacio reservado para testimonio real',
    note: 'Caso clínico alineadores invisibles en seguimiento activo.',
  },
];

export function buildWhatsAppUrl(message: string): string {
  const encoded = encodeURIComponent(message);
  // Using WhatsApp API url format
  return `https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${encoded}`;
}
