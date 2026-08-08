import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStats } from './components/TrustStats';
import { AboutDoctor } from './components/AboutDoctor';
import { FeaturedVideos } from './components/FeaturedVideos';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ClinicTour } from './components/ClinicTour';
import { VideoGallery } from './components/VideoGallery';
import { LocationMap } from './components/LocationMap';
import { AppointmentSection } from './components/AppointmentSection';
import { AppointmentModal } from './components/AppointmentModal';
import { Testimonials } from './components/Testimonials';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { FloatingControls } from './components/FloatingControls';
import { VideoLightboxModal } from './components/VideoLightboxModal';
import { VideoItem } from './types';

export default function App() {
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);
  const [selectedServiceTitle, setSelectedServiceTitle] = useState<string | undefined>();
  const [activeVideoModal, setActiveVideoModal] = useState<VideoItem | null>(null);

  const handleOpenAppointmentModal = (serviceTitle?: string) => {
    setSelectedServiceTitle(serviceTitle);
    setAppointmentModalOpen(true);
  };

  const handleCloseAppointmentModal = () => {
    setAppointmentModalOpen(false);
    setSelectedServiceTitle(undefined);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-teal-500 selection:text-white">
      {/* 1. HEADER */}
      <Navbar onOpenAppointmentModal={() => handleOpenAppointmentModal()} />

      {/* Main Flow */}
      <main className="flex-1">
        {/* 2. HERO IMAGE & CREDENTIALS */}
        <Hero onOpenAppointmentModal={() => handleOpenAppointmentModal()} />

        {/* 3. 20+ YEARS EXPERIENCE & TRUST STATS */}
        <TrustStats />

        {/* 4. ABOUT DR. SHAKEEL ANJUM RAMAY */}
        <AboutDoctor />

        {/* 5. CHILD HEALTHCARE SERVICES + SUPPORTING IMAGES */}
        <Services onOpenAppointmentModal={handleOpenAppointmentModal} />

        {/* 6. WHY CHOOSE US + SUPPORTING IMAGES */}
        <WhyChooseUs />

        {/* 7. MEET THE DOCTOR & 8. CLINIC TOUR (FEATURED VIDEOS) */}
        <FeaturedVideos onSelectVideo={(video) => setActiveVideoModal(video)} />

        {/* CLINIC ENVIRONMENT PHOTO TOUR */}
        <ClinicTour />

        {/* 9. VIDEO GALLERY (10 VIDEOS GRID) */}
        <VideoGallery onSelectVideo={(video) => setActiveVideoModal(video)} />

        {/* 10. ADDA GAMBER LOCATION & GOOGLE MAP */}
        <LocationMap />

        {/* 11. APPOINTMENT BOOKING SECTION */}
        <AppointmentSection initialService={selectedServiceTitle} />

        {/* 12. TESTIMONIALS */}
        <Testimonials />

        {/* 13. FAQs */}
        <FaqSection />
      </main>

      {/* 14. FOOTER */}
      <Footer onOpenAppointmentModal={() => handleOpenAppointmentModal()} />

      {/* FLOATING WHATSAPP & MOBILE STICKY BAR */}
      <FloatingControls onOpenAppointmentModal={() => handleOpenAppointmentModal()} />

      {/* LIGHTBOX VIDEO PLAYER MODAL */}
      <VideoLightboxModal
        video={activeVideoModal}
        onClose={() => setActiveVideoModal(null)}
        onOpenAppointmentModal={() => handleOpenAppointmentModal()}
      />

      {/* APPOINTMENT MODAL */}
      <AppointmentModal
        isOpen={appointmentModalOpen}
        onClose={handleCloseAppointmentModal}
        initialService={selectedServiceTitle}
      />
    </div>
  );
}
