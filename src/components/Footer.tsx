import React from 'react';
import { HeartPulse, Phone, MessageCircle, MapPin, Calendar, Award, ShieldCheck, Navigation } from 'lucide-react';
import { DOCTOR_INFO } from '../data/assetsData';

interface FooterProps {
  onOpenAppointmentModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAppointmentModal }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800 pt-12 pb-24 lg:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-slate-800">
          
          {/* Brand & Doctor Intro */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl medical-gradient flex items-center justify-center text-white shadow-md">
                <HeartPulse className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-lg font-extrabold text-white">
                  {DOCTOR_INFO.name}
                </h2>
                <p className="text-xs text-teal-400 font-medium">Child Healthcare Specialist • Adda Gamber</p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-md">
              Over 20 years of compassionate clinical experience treating children's diseases, infant care, growth monitoring, and pediatric health in Adda Gamber.
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              {DOCTOR_INFO.credentials.map((cred) => (
                <span key={cred} className="px-2.5 py-1 bg-slate-900 text-slate-300 font-bold text-[11px] rounded border border-slate-800">
                  {cred}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider">
              Quick Navigation
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#hero" className="hover:text-teal-400 transition-colors">Home & Overview</a>
              </li>
              <li>
                <a href="#about" className="hover:text-teal-400 transition-colors">About Dr. Shakeel Anjum Ramay</a>
              </li>
              <li>
                <a href="#services" className="hover:text-teal-400 transition-colors">Child Healthcare Services</a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-teal-400 transition-colors">Why Choose Us</a>
              </li>
              <li>
                <a href="#video-gallery" className="hover:text-teal-400 transition-colors">Clinic & Doctor Videos</a>
              </li>
              <li>
                <a href="#location" className="hover:text-teal-400 transition-colors">Adda Gamber Location</a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-teal-400 transition-colors">FAQs</a>
              </li>
            </ul>
          </div>

          {/* Location & Contact CTA */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider">
              Adda Gamber Clinic Contact
            </h3>

            <div className="space-y-2 text-slate-300">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <span>Adda Gamber Clinic, Punjab, Pakistan</span>
              </p>

              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <a href={`tel:${DOCTOR_INFO.phone.replace(/\s+/g, '')}`} className="hover:text-teal-400 font-bold">
                  {DOCTOR_INFO.phone}
                </a>
              </p>

              <p className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={DOCTOR_INFO.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 font-bold">
                  WhatsApp: +92 344 3335333
                </a>
              </p>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <a
                href={DOCTOR_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 rounded-xl font-bold"
              >
                <Navigation className="w-3.5 h-3.5 text-rose-400" />
                Directions on Google Maps
              </a>

              <button
                onClick={onOpenAppointmentModal}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-teal-600 hover:bg-teal-500 text-white rounded-xl font-bold cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5" />
                Book an Appointment
              </button>
            </div>
          </div>

        </div>

        {/* Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <p>© {new Date().getFullYear()} Dr. Shakeel Anjum Ramay Clinic. All rights reserved.</p>
          <p className="text-center sm:text-right">
            Child Healthcare Specialist • Single Exclusive Location: Adda Gamber
          </p>
        </div>

      </div>
    </footer>
  );
};
