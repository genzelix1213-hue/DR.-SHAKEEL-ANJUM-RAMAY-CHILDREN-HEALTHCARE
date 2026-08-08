import React, { useState } from 'react';
import { Stethoscope, Baby, TrendingUp, Syringe, Activity, Apple, Check, ArrowRight, Calendar, MessageCircle } from 'lucide-react';
import { SERVICES, DOCTOR_INFO, ServiceItem } from '../data/assetsData';

interface ServicesProps {
  onOpenAppointmentModal: (serviceTitle?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenAppointmentModal }) => {
  const [activeTab, setActiveTab] = useState<string>(SERVICES[0].id);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Stethoscope': return Stethoscope;
      case 'Baby': return Baby;
      case 'TrendingUp': return TrendingUp;
      case 'Syringe': return Syringe;
      case 'Activity': return Activity;
      case 'Apple': return Apple;
      default: return Stethoscope;
    }
  };

  const selectedService = SERVICES.find(s => s.id === activeTab) || SERVICES[0];

  return (
    <section id="services" className="py-16 sm:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold uppercase tracking-wider">
            <Stethoscope className="w-4 h-4 text-teal-600" />
            Pediatric Specialties
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Child Healthcare Services in Adda Gamber
          </h2>
          <p className="text-base text-slate-600">
            Comprehensive medical diagnosis, treatment, and preventive healthcare tailored specifically for infants, children, and teenagers.
          </p>
        </div>

        {/* Desktop Service Tabs + Detail View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Tab list */}
          <div className="lg:col-span-5 space-y-3">
            {SERVICES.map((srv) => {
              const IconComp = getIcon(srv.iconName);
              const isSelected = srv.id === activeTab;
              return (
                <button
                  key={srv.id}
                  onClick={() => setActiveTab(srv.id)}
                  className={`w-full text-left p-4 rounded-2xl transition-all border flex items-center justify-between cursor-pointer ${
                    isSelected
                      ? 'bg-white border-teal-500 shadow-lg shadow-teal-500/10 ring-2 ring-teal-500/20'
                      : 'bg-white/60 hover:bg-white border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`p-2.5 rounded-xl ${isSelected ? 'bg-teal-600 text-white' : 'bg-slate-100 text-slate-600'}`}>
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className={`text-sm font-bold ${isSelected ? 'text-teal-900' : 'text-slate-800'}`}>
                        {srv.title}
                      </h3>
                      <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                        {srv.shortDesc}
                      </p>
                    </div>
                  </div>
                  <ArrowRight className={`w-4 h-4 transition-transform ${isSelected ? 'text-teal-600 translate-x-1' : 'text-slate-400'}`} />
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Service Detail Panel */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl space-y-6">
            <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden border border-slate-200 bg-slate-100">
              <img
                src={selectedService.imageUrl}
                alt={selectedService.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md px-3.5 py-1.5 rounded-full text-white text-xs font-bold border border-slate-700">
                Dr. Shakeel Anjum Ramay • Adda Gamber
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-extrabold text-slate-900">
                {selectedService.title}
              </h3>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                {selectedService.fullDesc}
              </p>
            </div>

            {/* Key Clinical Highlights */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Key Care Highlights
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selectedService.highlights.map((h, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                    <Check className="w-4 h-4 text-teal-600 shrink-0" />
                    <span className="text-xs font-semibold text-slate-800">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={() => onOpenAppointmentModal(selectedService.title)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-bold text-white medical-gradient hover:opacity-95 rounded-xl shadow-md cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                Book for {selectedService.title}
              </button>

              <a
                href={DOCTOR_INFO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-xl transition-all"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                Inquire via WhatsApp
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
