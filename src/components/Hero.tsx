import React from 'react';
import { Calendar, Phone, MessageCircle, ShieldCheck, Award, MapPin, CheckCircle2, Star, UserCheck } from 'lucide-react';
import { DOCTOR_INFO, HERO_IMAGE } from '../data/assetsData';

interface HeroProps {
  onOpenAppointmentModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAppointmentModal }) => {
  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-b from-sky-50/70 via-white to-slate-50 pt-8 pb-16 lg:py-20 border-b border-slate-100">
      {/* Subtle Background Aesthetic Gradients */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-sky-200/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-teal-200/30 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Hero Copy & Actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Experience Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs sm:text-sm font-semibold shadow-xs">
              <Award className="w-4 h-4 text-teal-600" />
              <span>20+ Years of Experience</span>
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Compassionate Child Healthcare You Can Trust
              </h2>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2 pt-1">
                <span className="text-xl sm:text-2xl font-bold text-sky-800">
                  {DOCTOR_INFO.name}
                </span>
                <span className="hidden sm:inline text-slate-300">•</span>
                <span className="text-base sm:text-lg font-medium text-slate-600">
                  Experienced Child Healthcare in Adda Gamber
                </span>
              </div>
            </div>

            {/* Medical Credentials Badge Block */}
            <div className="bg-white/90 backdrop-blur-sm p-4 rounded-2xl border border-slate-200/80 shadow-xs max-w-xl mx-auto lg:mx-0">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 flex items-center justify-center lg:justify-start gap-1.5">
                <ShieldCheck className="w-4 h-4 text-sky-600" />
                Verified Medical Qualifications & Licensing
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                {DOCTOR_INFO.credentials.map((cred) => (
                  <span
                    key={cred}
                    className="px-3 py-1 bg-sky-50 text-sky-900 text-xs sm:text-sm font-bold rounded-lg border border-sky-100 shadow-2xs"
                  >
                    {cred}
                  </span>
                ))}
              </div>
              <p className="text-xs text-slate-600 mt-2.5 font-medium flex items-center justify-center lg:justify-start gap-1">
                <MapPin className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                <span>Single Exclusive Location: <strong>Adda Gamber</strong></span>
              </p>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3.5 max-w-lg mx-auto lg:mx-0">
              <button
                onClick={onOpenAppointmentModal}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-white medical-gradient hover:opacity-95 rounded-xl shadow-lg shadow-teal-600/25 active:scale-95 transition-all cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                Book an Appointment
              </button>

              <a
                href={`tel:${DOCTOR_INFO.phone.replace(/\s+/g, '')}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl shadow-xs transition-all"
              >
                <Phone className="w-4 h-4 text-sky-600" />
                Call Now
              </a>

              <a
                href={DOCTOR_INFO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-emerald-900 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 rounded-xl transition-all"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                WhatsApp Us
              </a>
            </div>

            {/* Key Trust Highlights Bullet List */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 text-left max-w-xl mx-auto lg:mx-0 border-t border-slate-200/60">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Child Friendly Setup</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Infant & Newborn Care</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Instant WhatsApp Booking</span>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Primary Hero Image (Supplied Authentic Image) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative Frame Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/20 to-sky-500/20 rounded-3xl transform rotate-2 blur-lg" />

              {/* Main Image Container */}
              <div className="relative bg-white p-3 rounded-3xl border border-slate-200 shadow-2xl overflow-hidden group">
                <img
                  src={HERO_IMAGE}
                  alt="Dr. Shakeel Anjum Ramay - Pediatrician Adda Gamber"
                  className="w-full h-auto max-h-[500px] object-cover object-top rounded-2xl transform group-hover:scale-[1.01] transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle Overlay Badge on Image Corner */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-3.5 rounded-xl border border-slate-100 shadow-lg flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-slate-900">{DOCTOR_INFO.name}</p>
                    <p className="text-[11px] font-medium text-teal-700">Child Specialist • Adda Gamber</p>
                  </div>
                  <div className="flex items-center gap-1 bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
                    <span className="text-xs font-bold text-amber-900">20+ Yrs</span>
                  </div>
                </div>
              </div>

              {/* Floating Badge (Top Right) */}
              <div className="hidden sm:flex absolute -top-4 -right-4 bg-slate-900 text-white p-3.5 rounded-2xl shadow-xl border border-slate-700 items-center gap-3 animate-pulse-subtle">
                <div className="w-9 h-9 rounded-xl bg-teal-500/20 flex items-center justify-center text-teal-400">
                  <UserCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-300">Pediatric Care</p>
                  <p className="text-sm font-bold text-white">Adda Gamber</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
