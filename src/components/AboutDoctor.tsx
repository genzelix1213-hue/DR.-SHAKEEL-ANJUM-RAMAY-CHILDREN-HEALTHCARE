import React from 'react';
import { Award, CheckCircle, ShieldCheck, Heart, Stethoscope, Building2, UserCheck, Phone, MessageCircle } from 'lucide-react';
import { DOCTOR_INFO, SUPPORTING_IMAGES } from '../data/assetsData';

export const AboutDoctor: React.FC = () => {
  const doctorImages = SUPPORTING_IMAGES.filter(img => img.category === 'doctor' || img.id === 'img-1' || img.id === 'img-2');

  return (
    <section id="about" className="py-16 sm:py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-800 text-xs font-bold uppercase tracking-wider">
            <UserCheck className="w-4 h-4 text-sky-600" />
            Meet Your Pediatrician
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            About Dr. Shakeel Anjum Ramay
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            A trusted medical leader with over two decades of dedicated clinical practice, caring for the health and well-being of children in Adda Gamber and surrounding communities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT: Photo Grid using authentic supporting images */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-100">
                <img
                  src={doctorImages[0]?.url || "https://i.ibb.co/nsssKXdz/Whats-App-Image-2026-08-08-at-10-11-42-PM-1.jpg"}
                  alt="Dr. Shakeel Anjum Ramay Consulting Patient"
                  className="w-full h-80 sm:h-96 object-cover object-center hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-teal-600 text-white p-4 rounded-2xl shadow-xl border-2 border-white max-w-[200px] hidden sm:block">
                <p className="text-xl font-extrabold">20+ Years</p>
                <p className="text-xs text-teal-100 font-medium">Dedicated Pediatric Experience</p>
              </div>
            </div>

            {/* Secondary Supporting Image Card */}
            {doctorImages[1] && (
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="rounded-xl overflow-hidden border border-slate-200 shadow-md">
                  <img
                    src={doctorImages[1].url}
                    alt={doctorImages[1].title}
                    className="w-full h-36 object-cover hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="bg-sky-50 border border-sky-100 rounded-xl p-3.5 flex flex-col justify-center">
                  <p className="text-xs font-bold text-sky-900 uppercase">Location</p>
                  <p className="text-sm font-bold text-slate-800 mt-1">Adda Gamber</p>
                  <p className="text-[11px] text-slate-600 mt-1">Single exclusive clinic for personalized attention</p>
                </div>
              </div>
            )}
          </div>

          {/* RIGHT: Detailed Professional Credentials */}
          <div className="lg:col-span-7 space-y-6">
            
            <div>
              <h3 className="text-2xl font-bold text-slate-900">
                {DOCTOR_INFO.name}
              </h3>
              <p className="text-teal-700 font-semibold text-sm mt-1">
                Child Healthcare Specialist & Consultant Pediatrician
              </p>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              Dr. Shakeel Anjum Ramay is a highly respected child healthcare specialist known for his gentle medical diagnosis, accurate disease evaluation, and empathetic parent counseling. With over 20 years of clinical experience, he specializes in treating acute pediatric illnesses, newborn care, growth delays, and childhood respiratory conditions.
            </p>

            {/* Qualifications Block */}
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-3">
              <h4 className="text-xs font-extrabold text-slate-500 uppercase tracking-wider flex items-center gap-2">
                <Award className="w-4 h-4 text-sky-600" />
                Primary Medical Qualifications
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {DOCTOR_INFO.credentials.map((cred) => (
                  <div key={cred} className="bg-white px-3 py-2 rounded-xl border border-slate-200 shadow-2xs text-center">
                    <span className="text-xs font-bold text-sky-900">{cred}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Experience & Leadership Roles */}
            <div className="space-y-3">
              <h4 className="text-xs font-extrabold text-slate-500 uppercase tracking-wider flex items-center gap-2">
                <Building2 className="w-4 h-4 text-teal-600" />
                Professional Credentials & Leadership
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {DOCTOR_INFO.additionalRoles.map((role, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                    <CheckCircle className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span className="text-xs font-semibold text-slate-800 leading-snug">{role}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={`tel:${DOCTOR_INFO.phone.replace(/\s+/g, '')}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-sky-700 hover:bg-sky-800 text-white font-semibold text-xs rounded-xl shadow-md transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                Call Dr. Shakeel ({DOCTOR_INFO.phone})
              </a>

              <a
                href={DOCTOR_INFO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs rounded-xl shadow-md transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                WhatsApp Message
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
