import React, { useEffect } from 'react';
import { X, Play, Volume2, MessageCircle, Phone, Calendar, Info } from 'lucide-react';
import { VideoItem, DOCTOR_INFO } from '../data/assetsData';

interface VideoLightboxModalProps {
  video: VideoItem | null;
  onClose: () => void;
  onOpenAppointmentModal: () => void;
}

export const VideoLightboxModal: React.FC<VideoLightboxModalProps> = ({
  video,
  onClose,
  onOpenAppointmentModal
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (video) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [video, onClose]);

  if (!video) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-fadeIn">
      {/* Backdrop overlay */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col my-auto max-h-[90vh]">
        
        {/* Modal Top Header */}
        <div className="p-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-teal-500 animate-ping" />
            <span className="text-xs font-bold text-teal-400 uppercase tracking-wider">
              {video.filename} • Adda Gamber
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Video Player */}
        <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden">
          <video
            src={video.videoUrl}
            poster={video.fallbackPosterUrl}
            controls
            autoPlay
            playsInline
            preload="metadata"
            className="w-full h-full object-contain"
          >
            Your browser does not support HTML5 video tag.
          </video>
        </div>

        {/* Modal Bottom Bar & Context Info */}
        <div className="p-6 bg-slate-900 overflow-y-auto space-y-4">
          <div>
            <h3 className="text-xl font-extrabold text-white">
              {video.title}
            </h3>
            <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
              {video.description}
            </p>
          </div>

          <div className="pt-3 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="text-xs text-slate-400 flex items-center gap-1.5">
              <Info className="w-4 h-4 text-sky-400 shrink-0" />
              <span>Dr. Shakeel Anjum Ramay • Pediatrician • Adda Gamber</span>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <a
                href={DOCTOR_INFO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                WhatsApp
              </a>

              <button
                onClick={() => {
                  onClose();
                  onOpenAppointmentModal();
                }}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs rounded-xl transition-colors cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5" />
                Book Appointment
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
