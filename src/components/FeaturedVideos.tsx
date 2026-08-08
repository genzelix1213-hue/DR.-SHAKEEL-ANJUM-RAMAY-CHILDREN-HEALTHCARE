import React from 'react';
import { Play, Video, ShieldCheck, Sparkles, Building } from 'lucide-react';
import { VIDEOS, VideoItem } from '../data/assetsData';

interface FeaturedVideosProps {
  onSelectVideo: (video: VideoItem) => void;
}

export const FeaturedVideos: React.FC<FeaturedVideosProps> = ({ onSelectVideo }) => {
  const doctorVideo = VIDEOS.find(v => v.id === 'vid-73') || VIDEOS[0];
  const clinicVideo = VIDEOS.find(v => v.id === 'vid-70') || VIDEOS[2];

  return (
    <section className="py-16 bg-slate-900 text-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-teal-500/20 border border-teal-400/30 text-teal-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-teal-400" />
            Featured Video Spotlights
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Meet Dr. Shakeel & Explore Our Clinic
          </h2>
          <p className="text-sm text-slate-300">
            Watch real video clips from our Adda Gamber clinic showcasing doctor consultations and healthcare facilities.
          </p>
        </div>

        {/* 2 Featured Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1: Meet Doctor Video */}
          <div className="bg-slate-800/90 border border-slate-700 rounded-3xl overflow-hidden shadow-2xl flex flex-col group hover:border-teal-400/50 transition-all">
            <div className="relative aspect-video bg-black overflow-hidden cursor-pointer" onClick={() => onSelectVideo(doctorVideo)}>
              <img
                src={doctorVideo.fallbackPosterUrl}
                alt={doctorVideo.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-teal-500 text-white flex items-center justify-center shadow-lg shadow-teal-500/50 group-hover:scale-110 transition-transform">
                  <Play className="w-7 h-7 fill-white ml-1" />
                </div>
              </div>

              {/* Top Tag */}
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-900/90 backdrop-blur-md rounded-full text-xs font-bold text-teal-300 border border-teal-500/30">
                  <Video className="w-3.5 h-3.5 text-teal-400" />
                  Featured Doctor Video
                </span>
              </div>

              {/* Bottom Duration */}
              <div className="absolute bottom-4 right-4 bg-black/80 px-2.5 py-1 rounded text-xs font-mono text-slate-300">
                {doctorVideo.duration || "1:15"}
              </div>
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-teal-300 transition-colors">
                  {doctorVideo.title}
                </h3>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  {doctorVideo.description}
                </p>
              </div>

              <button
                onClick={() => onSelectVideo(doctorVideo)}
                className="w-full inline-flex items-center justify-center gap-2 py-3 bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs rounded-xl shadow-md transition-all cursor-pointer"
              >
                <Play className="w-4 h-4 fill-white" />
                Watch Full Video
              </button>
            </div>
          </div>

          {/* Card 2: Clinic Tour Video */}
          <div className="bg-slate-800/90 border border-slate-700 rounded-3xl overflow-hidden shadow-2xl flex flex-col group hover:border-sky-400/50 transition-all">
            <div className="relative aspect-video bg-black overflow-hidden cursor-pointer" onClick={() => onSelectVideo(clinicVideo)}>
              <img
                src={clinicVideo.fallbackPosterUrl}
                alt={clinicVideo.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-sky-500 text-white flex items-center justify-center shadow-lg shadow-sky-500/50 group-hover:scale-110 transition-transform">
                  <Play className="w-7 h-7 fill-white ml-1" />
                </div>
              </div>

              {/* Top Tag */}
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-900/90 backdrop-blur-md rounded-full text-xs font-bold text-sky-300 border border-sky-500/30">
                  <Building className="w-3.5 h-3.5 text-sky-400" />
                  Clinic Tour Video
                </span>
              </div>

              {/* Bottom Duration */}
              <div className="absolute bottom-4 right-4 bg-black/80 px-2.5 py-1 rounded text-xs font-mono text-slate-300">
                {clinicVideo.duration || "1:00"}
              </div>
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
                  {clinicVideo.title}
                </h3>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  {clinicVideo.description}
                </p>
              </div>

              <button
                onClick={() => onSelectVideo(clinicVideo)}
                className="w-full inline-flex items-center justify-center gap-2 py-3 bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs rounded-xl shadow-md transition-all cursor-pointer"
              >
                <Play className="w-4 h-4 fill-white" />
                Watch Clinic Tour
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
