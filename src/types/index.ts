export interface NavLink {
  label: string;
  href: string;
}

export interface WhyChooseUsItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface TreatmentItem {
  id: string;
  title: string;
  description: string;
  badge?: string;
  priceNote?: string;
  image: string;
  highlights: string[];
}

export interface BrandValueItem {
  id: string;
  title: string;
  iconName: string;
}

export interface TestimonialSlot {
  id: number;
  statusText: string;
  note: string;
}

export interface BookingFormData {
  fullName: string;
  treatment: string;
  consultationType: 'Primera vez' | 'Ya tengo diagnóstico';
  preferredSchedule: string;
}
