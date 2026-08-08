import React from 'react';
import { Building2, Sparkles, MapPin, CheckCircle, Shield, Clock } from 'lucide-react';
import { SUPPORTING_IMAGES, DOCTOR_INFO } from '../data/assetsData';

export const ClinicTour: React.FC = () => {
  const clinicImages = SUPPORTING_IMAGES.filter(img => img.category === 'clinic' || ['img-10', 'img-11', 'img-12'].includes(img.id));

  return (
    <section className="py-16 sm:py-20 bg-slate-50 relative border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-sky-100 border border-sky-200 text-sky-800 text-xs font-bold uppercase tracking-wider">
            <Building2 className="w-4 h-4 text-sky-600" />
            Adda Gamber Clinic Setup
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our Modern & Clean Clinic Environment
          </h2>
          <p className="text-sm text-slate-600">
            A safe, comfortable, and hygienic clinical space designed to welcome young patients and their families.
          </p>
        </div>

        {/* Clinic Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {clinicImages.map((img, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-md group hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="relative h-56 bg-slate-100 overflow-hidden">
                <img
                  src={img.url}
                  alt={img.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] font-bold text-teal-300">
                  Adda Gamber
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-2">
                <div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
                    {img.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    {img.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Facility Amenities Ribbon */}
        <div className="mt-10 bg-white p-6 rounded-2xl border border-slate-200 shadow-xs grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="space-y-1">
            <p className="text-xs font-bold text-slate-400 uppercase">Hygiene</p>
            <p className="text-sm font-bold text-slate-800">100% Sanitized</p>
          </div>
          <div className="space-y-1">
            <p className="text-xs font-bold text-slate-400 uppercase">Seating</p>
            <p className="text-sm font-bold text-slate-800">Spacious Waiting Area</p>
          </div>
          <div className="space-y-1">
            <p className="text-xs font-bold text-slate-400 uppercase">Care Equipment</p>
            <p className="text-sm font-bold text-slate-800">In-clinic Nebulizer</p>
          </div>
          <div className="space-y-1">
            <p className="text-xs font-bold text-slate-400 uppercase">Location</p>
            <p className="text-sm font-bold text-rose-600">Adda Gamber Main</p>
          </div>
        </div>

      </div>
    </section>
  );
};
