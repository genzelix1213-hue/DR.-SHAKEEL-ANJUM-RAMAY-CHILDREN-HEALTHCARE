import React from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { DOCTOR_INFO } from '../data/assetsData';

interface FloatingControlsProps {
  onOpenAppointmentModal: () => void;
}

export const FloatingControls: React.FC<FloatingControlsProps> = ({ onOpenAppointmentModal }) => {
  return (
    <>
      {/* Desktop Floating WhatsApp Button (Bottom-Right) */}
      <div className="hidden lg:block fixed bottom-6 right-6 z-40 group">
        <a
          href={DOCTOR_INFO.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 px-4 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-2xl hover:scale-105 transition-all duration-300 font-extrabold text-xs"
          aria-label="Chat on WhatsApp"
        >
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
            <MessageCircle className="w-5 h-5 fill-white" />
          </div>
          <span>WhatsApp Dr. Shakeel</span>
        </a>
      </div>

      {/* Mobile Sticky Bottom Navigation Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 p-2 shadow-2xl">
        <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
          
          <a
            href={`tel:${DOCTOR_INFO.phone.replace(/\s+/g, '')}`}
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-sky-50 text-sky-800 border border-sky-200 active:scale-95 transition-all"
          >
            <Phone className="w-4 h-4 text-sky-600 mb-0.5" />
            <span className="text-[11px] font-bold">Call Now</span>
          </a>

          <a
            href={DOCTOR_INFO.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 active:scale-95 transition-all"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600 mb-0.5" />
            <span className="text-[11px] font-bold">WhatsApp</span>
          </a>

          <button
            onClick={onOpenAppointmentModal}
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl medical-gradient text-white shadow-md active:scale-95 transition-all cursor-pointer"
          >
            <Calendar className="w-4 h-4 mb-0.5" />
            <span className="text-[11px] font-bold">Appointment</span>
          </button>

        </div>
      </div>
    </>
  );
};
