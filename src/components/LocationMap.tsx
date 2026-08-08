import React from 'react';
import { MapPin, Navigation, Phone, MessageCircle, Clock, CheckCircle2, ShieldCheck, Building } from 'lucide-react';
import { DOCTOR_INFO } from '../data/assetsData';

export const LocationMap: React.FC = () => {
  return (
    <section id="location" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-rose-800 text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-4 h-4 text-rose-600" />
            Clinic Location
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Visit Our Clinic in Adda Gamber
          </h2>
          <p className="text-base text-slate-600">
            Conveniently situated in Adda Gamber for easy access by local families. Single exclusive clinic location ensuring dedicated pediatric attention.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Clinic Address Card & Details */}
          <div className="lg:col-span-5 bg-slate-900 text-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl space-y-6">
            <div className="space-y-6">
              
              <div className="flex items-center gap-3 pb-4 border-b border-slate-800">
                <div className="w-12 h-12 rounded-2xl bg-rose-500/20 text-rose-400 flex items-center justify-center border border-rose-500/30">
                  <Building className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Dr. Shakeel Anjum Ramay Clinic</h3>
                  <p className="text-xs text-rose-400 font-semibold">Exclusively in Adda Gamber</p>
                </div>
              </div>

              {/* Exact Address */}
              <div className="space-y-2">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-rose-500" />
                  Clinic Address
                </p>
                <p className="text-lg font-bold text-white leading-snug">
                  Adda Gamber Clinic
                </p>
                <p className="text-xs text-slate-300">
                  Adda Gamber, Punjab, Pakistan
                </p>
              </div>

              {/* Timings */}
              <div className="space-y-2 pt-2 border-t border-slate-800">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-teal-400" />
                  Consultation Timings
                </p>
                <div className="space-y-1 text-xs text-slate-300">
                  <div className="flex justify-between py-1 border-b border-slate-800/60">
                    <span className="font-semibold text-slate-200">Monday – Saturday:</span>
                    <span className="text-teal-300 font-bold">Morning & Evening Sessions</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="font-semibold text-slate-200">Sunday:</span>
                    <span className="text-amber-400 font-bold">Available on Appointment</span>
                  </div>
                </div>
              </div>

              {/* Direct Phones */}
              <div className="space-y-2 pt-2 border-t border-slate-800">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Direct Contact
                </p>
                <p className="text-base font-extrabold text-teal-400 flex items-center gap-2">
                  <Phone className="w-4 h-4 text-teal-400" />
                  {DOCTOR_INFO.phone}
                </p>
              </div>

            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-slate-800 flex flex-col gap-2.5">
              <a
                href={DOCTOR_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 bg-rose-600 hover:bg-rose-500 text-white font-extrabold text-xs rounded-xl shadow-lg transition-all"
              >
                <Navigation className="w-4 h-4" />
                Get Directions on Google Maps
              </a>

              <a
                href={DOCTOR_INFO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                Ask Location via WhatsApp
              </a>
            </div>

          </div>

          {/* Right Column: Embedded Google Maps Container */}
          <div className="lg:col-span-7 bg-slate-100 rounded-3xl overflow-hidden border border-slate-200 shadow-xl min-h-[380px] relative flex flex-col">
            <iframe
              title="Dr Shakeel Anjum Ramay Adda Gamber Location Map"
              src="https://maps.google.com/maps?q=Adda%20Gamber%20Pakistan&t=&z=14&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full min-h-[400px] border-0"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            
            {/* Map Overlay Badge */}
            <div className="p-4 bg-white border-t border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600" />
                <span className="text-xs font-bold text-slate-800">
                  Single Official Location in Adda Gamber
                </span>
              </div>

              <a
                href={DOCTOR_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-sky-700 hover:text-sky-800 underline flex items-center gap-1"
              >
                Open in Maps App
                <Navigation className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
