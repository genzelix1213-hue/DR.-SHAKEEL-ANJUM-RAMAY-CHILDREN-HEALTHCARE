import React from 'react';
import { Award, Users, MapPin, Heart, Shield } from 'lucide-react';
import { DOCTOR_INFO } from '../data/assetsData';

export const TrustStats: React.FC = () => {
  const stats = [
    {
      icon: Award,
      value: "20+ Years",
      label: "Clinical Experience",
      desc: "Specialized in treating children's diseases since 2004",
      color: "text-teal-600 bg-teal-50 border-teal-200"
    },
    {
      icon: Users,
      value: "50,000+",
      label: "Children Treated",
      desc: "Trusted by thousands of families across Adda Gamber & region",
      color: "text-sky-600 bg-sky-50 border-sky-200"
    },
    {
      icon: MapPin,
      value: "Adda Gamber",
      label: "Exclusive Clinic Location",
      desc: "Easy accessibility & state-of-the-art consultation suite",
      color: "text-rose-600 bg-rose-50 border-rose-200"
    },
    {
      icon: Heart,
      value: "100%",
      label: "Compassionate Care",
      desc: "Gentle child handling and thorough parent guidance",
      color: "text-emerald-600 bg-emerald-50 border-emerald-200"
    }
  ];

  return (
    <section className="py-10 bg-slate-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={idx}
                className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 transition-all hover:bg-slate-800 hover:border-teal-500/50 hover:shadow-xl"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className={`p-3 rounded-xl border ${stat.color}`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                      {stat.value}
                    </p>
                    <p className="text-xs font-bold text-teal-400 uppercase tracking-wide">
                      {stat.label}
                    </p>
                  </div>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed pl-1">
                  {stat.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
