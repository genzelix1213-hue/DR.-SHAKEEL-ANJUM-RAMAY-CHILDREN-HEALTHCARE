import React, { useState } from 'react';
import { Calendar, Clock, User, Phone, MessageCircle, Heart, CheckCircle2, Send, Sparkles } from 'lucide-react';
import { DOCTOR_INFO, SERVICES } from '../data/assetsData';
import { AppointmentFormData } from '../types';

interface AppointmentSectionProps {
  initialService?: string;
}

export const AppointmentSection: React.FC<AppointmentSectionProps> = ({ initialService }) => {
  const [formData, setFormData] = useState<AppointmentFormData>({
    parentName: '',
    phone: '',
    childName: '',
    childAge: '',
    gender: 'male',
    appointmentDate: new Date().toISOString().split('T')[0],
    preferredTime: 'Morning (10:00 AM - 01:00 PM)',
    reason: initialService || 'General Pediatric Checkup'
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Format WhatsApp message
    const message = `Hello Dr. Shakeel Anjum Ramay Clinic Adda Gamber,%0A%0AI would like to book a Child Consultation Appointment:%0A- Parent Name: ${encodeURIComponent(formData.parentName)}%0A- Phone: ${encodeURIComponent(formData.phone)}%0A- Child Name: ${encodeURIComponent(formData.childName)} (${formData.childAge}, ${formData.gender})%0A- Preferred Date: ${formData.appointmentDate}%0A- Time Slot: ${encodeURIComponent(formData.preferredTime)}%0A- Reason/Service: ${encodeURIComponent(formData.reason)}%0A%0APlease confirm availability. Thank you!`;

    const whatsappUrl = `https://wa.me/923443335333?text=${message}`;

    // Open WhatsApp after short delay
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 600);
  };

  return (
    <section id="appointment" className="py-16 sm:py-24 bg-gradient-to-b from-slate-50 via-sky-50/50 to-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-teal-100 border border-teal-200 text-teal-800 text-xs font-bold uppercase tracking-wider">
            <Calendar className="w-4 h-4 text-teal-600" />
            Easy Online Booking
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Book an Appointment in Adda Gamber
          </h2>
          <p className="text-sm text-slate-600">
            Schedule a visit for your child with Dr. Shakeel Anjum Ramay. Instant WhatsApp confirmation available.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-2xl relative">
          
          {submitted ? (
            <div className="text-center py-10 space-y-4 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                Appointment Request Prepared!
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                Your appointment details for <strong>{formData.childName}</strong> have been created. Opening WhatsApp now to send directly to Dr. Shakeel's team in Adda Gamber.
              </p>
              <div className="pt-4 flex justify-center gap-3">
                <a
                  href={`https://wa.me/923443335333?text=Appointment%20for%20${encodeURIComponent(formData.childName)}%20on%20${formData.appointmentDate}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-emerald-600 text-white font-bold text-xs rounded-xl shadow-md inline-flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  Open WhatsApp Now
                </a>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-3 bg-slate-100 text-slate-700 font-semibold text-xs rounded-xl hover:bg-slate-200"
                >
                  Book Another Appointment
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Parent Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Parent / Guardian Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Muhammad Ali"
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-xs text-slate-900 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
                  />
                </div>

                {/* Parent Phone */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 0344 3335333"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-xs text-slate-900 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {/* Child Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Child's Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Baby Abdullah"
                    value={formData.childName}
                    onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-xs text-slate-900 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
                  />
                </div>

                {/* Child Age */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Child's Age *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 6 Months / 3 Years"
                    value={formData.childAge}
                    onChange={(e) => setFormData({ ...formData, childAge: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-xs text-slate-900 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
                  />
                </div>

                {/* Child Gender */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Gender
                  </label>
                  <select
                    value={formData.gender}
                    onChange={(e) => setFormData({ ...formData, gender: e.target.value as any })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-xs text-slate-900 bg-white focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Date */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Preferred Visit Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.appointmentDate}
                    onChange={(e) => setFormData({ ...formData, appointmentDate: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-xs text-slate-900 bg-white focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
                  />
                </div>

                {/* Preferred Time Slot */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Time Slot
                  </label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-xs text-slate-900 bg-white focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
                  >
                    <option value="Morning (10:00 AM - 01:00 PM)">Morning (10:00 AM - 01:00 PM)</option>
                    <option value="Afternoon (02:00 PM - 05:00 PM)">Afternoon (02:00 PM - 05:00 PM)</option>
                    <option value="Evening (05:00 PM - 09:00 PM)">Evening (05:00 PM - 09:00 PM)</option>
                  </select>
                </div>
              </div>

              {/* Service / Reason */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Reason for Visit / Pediatric Concern
                </label>
                <select
                  value={formData.reason}
                  onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 text-xs text-slate-900 bg-white focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
                >
                  <option value="General Pediatric Checkup">General Pediatric Checkup</option>
                  <option value="Fever, Cold & Flu">Fever, Cold & Flu</option>
                  <option value="Newborn & Infant Care">Newborn & Infant Care</option>
                  <option value="Child Vaccination & Booster">Child Vaccination & Booster</option>
                  <option value="Chest Congestion & Asthma Nebulization">Chest Congestion & Asthma Nebulization</option>
                  <option value="Growth & Weight Checkup">Growth & Weight Checkup</option>
                  <option value="Stomach Pain & Diarrhea">Stomach Pain & Diarrhea</option>
                </select>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 px-6 bg-teal-600 hover:bg-teal-700 text-white font-extrabold text-sm rounded-xl shadow-lg shadow-teal-600/20 active:scale-[0.99] transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Confirm & Send Appointment on WhatsApp
              </button>

              <div className="text-center pt-2">
                <p className="text-[11px] text-slate-500">
                  📍 Single Clinic Location: <strong>Adda Gamber</strong> • Call directly: <strong>+92 344 3335333</strong>
                </p>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
