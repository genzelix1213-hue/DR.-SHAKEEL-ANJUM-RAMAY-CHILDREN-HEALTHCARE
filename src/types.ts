export interface DoctorInfo {
  name: string;
  title: string;
  experience: string;
  location: string;
  credentials: string[];
  additionalRoles: string[];
  phone: string;
  whatsapp: string;
  googleMapsUrl: string;
}

export interface MediaImage {
  id: string;
  url: string;
  title: string;
  caption: string;
  category: 'hero' | 'doctor' | 'services' | 'why_choose' | 'clinic';
}

export interface VideoItem {
  id: string;
  filename: string;
  videoUrl: string;
  fallbackPosterUrl: string;
  title: string;
  category: 'featured_doctor' | 'featured_clinic' | 'gallery';
  description: string;
  duration?: string;
  featured?: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  imageUrl: string;
  highlights: string[];
}

export interface AppointmentFormData {
  parentName: string;
  phone: string;
  childName: string;
  childAge: string;
  gender: 'male' | 'female' | 'other';
  appointmentDate: string;
  preferredTime: string;
  reason: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface TestimonialItem {
  id: string;
  parentName: string;
  location: string;
  childAge: string;
  comment: string;
  rating: number;
  date: string;
}
