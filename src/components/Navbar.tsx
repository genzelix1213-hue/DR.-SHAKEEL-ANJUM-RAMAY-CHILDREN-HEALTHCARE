import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Calendar, Menu, X, HeartPulse, MapPin, Award } from 'lucide-react';
import { DOCTOR_INFO } from '../data/assetsData';

interface NavbarProps {
  onOpenAppointmentModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAppointmentModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About Doctor', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Why Choose Us', href: '#why-us' },
    { name: 'Video Gallery', href: '#video-gallery' },
    { name: 'Location', href: '#location' },
    { name: 'FAQs', href: '#faqs' },
  ];

  return (
    <>
      {/* Top Banner for Credentials & Location */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-3 flex-wrap justify-center sm:justify-start">
            <span className="inline-flex items-center gap-1.5 font-medium text-teal-400">
              <Award className="w-3.5 h-3.5" />
              {DOCTOR_INFO.experience}
            </span>
            <span className="hidden md:inline text-slate-600">•</span>
            <span className="inline-flex items-center gap-1 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-rose-400" />
              Adda Gamber Clinic
            </span>
            <span className="hidden lg:inline text-slate-600">•</span>
            <span className="hidden lg:inline text-slate-400">
              MD (Medicine), MBBS, RMP, D.A. (PGMI)
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`tel:${DOCTOR_INFO.phone.replace(/\s+/g, '')}`}
              className="inline-flex items-center gap-1.5 text-slate-200 hover:text-teal-400 transition-colors font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-teal-400" />
              <span>{DOCTOR_INFO.phone}</span>
            </a>
            <a
              href={DOCTOR_INFO.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-slate-200/80'
            : 'bg-white py-4 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo & Doctor Title */}
            <a href="#hero" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl medical-gradient flex items-center justify-center text-white shadow-md shadow-teal-500/20 group-hover:scale-105 transition-transform">
                <HeartPulse className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight leading-none group-hover:text-sky-700 transition-colors">
                  {DOCTOR_INFO.name}
                </h1>
                <p className="text-xs font-semibold text-teal-700 mt-1 flex items-center gap-1">
                  <span>Child Healthcare Specialist</span>
                  <span className="text-slate-300">•</span>
                  <span className="text-rose-600 font-medium">Adda Gamber</span>
                </p>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-slate-700 hover:text-sky-700 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-teal-500 hover:after:w-full after:transition-all"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Desktop Action CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={`tel:${DOCTOR_INFO.phone.replace(/\s+/g, '')}`}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-sky-800 bg-sky-50 hover:bg-sky-100 border border-sky-200 rounded-xl transition-all"
              >
                <Phone className="w-3.5 h-3.5 text-sky-600" />
                Call Now
              </a>

              <a
                href={DOCTOR_INFO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-xl transition-all"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                WhatsApp
              </a>

              <button
                onClick={onOpenAppointmentModal}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-white medical-gradient hover:opacity-95 rounded-xl shadow-md shadow-teal-600/20 active:scale-95 transition-all cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5" />
                Book Appointment
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex xl:hidden items-center gap-2">
              <button
                onClick={onOpenAppointmentModal}
                className="sm:hidden inline-flex items-center justify-center p-2 text-xs font-semibold text-white medical-gradient rounded-lg shadow-sm"
              >
                <Calendar className="w-4 h-4" />
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-700 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-b border-slate-200 shadow-xl px-4 pt-3 pb-6 animate-fadeIn">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:text-sky-700 hover:bg-slate-50 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3 border-t border-slate-100 grid grid-cols-1 gap-2">
                <a
                  href={`tel:${DOCTOR_INFO.phone.replace(/\s+/g, '')}`}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-sky-800 bg-sky-50 rounded-xl border border-sky-200"
                >
                  <Phone className="w-4 h-4 text-sky-600" />
                  Call Now (+92 344 3335333)
                </a>
                <a
                  href={DOCTOR_INFO.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-emerald-800 bg-emerald-50 rounded-xl border border-emerald-200"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  WhatsApp Us
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAppointmentModal();
                  }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white medical-gradient rounded-xl shadow-md"
                >
                  <Calendar className="w-4 h-4" />
                  Book an Appointment
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
