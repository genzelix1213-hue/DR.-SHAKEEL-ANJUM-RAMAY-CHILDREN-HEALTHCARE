import React from 'react';
import { ShieldCheck, Heart, Award, Clock, MapPin, CheckCircle2, UserCheck, Stethoscope } from 'lucide-react';
import { DOCTOR_INFO, SUPPORTING_IMAGES } from '../data/assetsData';

export const WhyChooseUs: React.FC = () => {
  const whyImages = SUPPORTING_IMAGES.filter(img => img.category === 'why_choose' || ['img-7', 'img-8', 'img-9'].includes(img.id));

  const reasons = [
    {
      icon: Award,
      title: "20+ Years Clinical Expertise",
      desc: "Over two decades of hands-on pediatric clinical practice, diagnosing thousands of complex child cases accurately."
    },
    {
      icon: Heart,
      title: "Gentle & Friendly Child Care",
      desc: "Warm consultation style designed to eliminate anxiety and make children feel comfortable during physical checkups."
    },
    {
      icon: MapPin,
      title: "Adda Gamber Local Convenience",
      desc: "Centrally located in Adda Gamber, saving families long travel times for routine and urgent child healthcare."
    },
    {
      icon: ShieldCheck,
      title: "Clean & Hygienic Clinic Setup",
      desc: "Strict sanitized environment adhering to child health standards, protecting young immune systems."
    },
    {
      icon: UserCheck,
      title: "Thorough Parent Guidance",
      desc: "Clear explanations on medication, diet, dosage, home care, and emergency warning signs."
    },
    {
      icon: Stethoscope,
      title: "No Unnecessary Medications",
      desc: "Evidence-based medical prescriptions focusing on genuine recovery without unnecessary heavy antibiotics."
    }
  ];

  return (
    <section id="why-us" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-rose-800 text-xs font-bold uppercase tracking-wider">
            <Heart className="w-4 h-4 text-rose-600" />
            Why Parents Trust Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why Choose Dr. Shakeel Anjum Ramay in Adda Gamber?
          </h2>
          <p className="text-base text-slate-600">
            Dedicated pediatric clinical care combining decades of medical knowledge with genuine warmth and accessible community service.
          </p>
        </div>

        {/* 6 Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {reasons.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 hover:bg-white hover:border-teal-500 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center mb-4 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                  <IconComp className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-teal-900 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Supporting Images Editorial Block */}
        <div className="bg-slate-900 rounded-3xl p-6 sm:p-10 text-white shadow-2xl relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-bold text-teal-400 uppercase tracking-widest">
                Our Clinic Philosophy
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                Healthcare Crafted Around Your Child's Comfort
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                We believe every child deserves gentle, patient-centered medical attention. From our welcoming reception in Adda Gamber to our gentle physical examinations, our team works to create a safe space for your family.
              </p>
              <div className="pt-2">
                <a
                  href={DOCTOR_INFO.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs rounded-xl shadow-lg transition-colors"
                >
                  Message Dr. Shakeel on WhatsApp
                </a>
              </div>
            </div>

            {/* Image Gallery Row */}
            <div className="lg:col-span-7 grid grid-cols-3 gap-3">
              {whyImages.map((img, idx) => (
                <div key={idx} className="rounded-xl overflow-hidden border border-slate-700 aspect-3/4 group relative">
                  <img
                    src={img.url}
                    alt={img.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-2 flex items-end">
                    <p className="text-[10px] font-bold text-white line-clamp-2">{img.title}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
