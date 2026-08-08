import React, { useState } from 'react';
import { Play, Video, Film, Sparkles, Filter, Search } from 'lucide-react';
import { VIDEOS, VideoItem } from '../data/assetsData';

interface VideoGalleryProps {
  onSelectVideo: (video: VideoItem) => void;
}

export const VideoGallery: React.FC<VideoGalleryProps> = ({ onSelectVideo }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'doctor' | 'clinic'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredVideos = VIDEOS.filter((video) => {
    const matchesCategory =
      activeFilter === 'all' ||
      (activeFilter === 'doctor' && (video.category === 'featured_doctor' || video.title.toLowerCase().includes('doctor') || video.title.toLowerCase().includes('consultation'))) ||
      (activeFilter === 'clinic' && (video.category === 'featured_clinic' || video.title.toLowerCase().includes('clinic') || video.title.toLowerCase().includes('environment')));

    const matchesSearch =
      video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      video.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="video-gallery" className="py-16 sm:py-24 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-teal-500/20 border border-teal-400/30 text-teal-300 text-xs font-bold uppercase tracking-wider">
            <Film className="w-4 h-4 text-teal-400" />
            Authentic Media Gallery
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Clinic & Doctor Video Gallery
          </h2>
          <p className="text-sm text-slate-300">
            Browse 10 authentic video clips of Dr. Shakeel Anjum Ramay's practice, patient consultations, and Adda Gamber clinic facilities.
          </p>
        </div>

        {/* Filters and Search Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 bg-slate-900/90 p-4 rounded-2xl border border-slate-800">
          
          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto pb-2 sm:pb-0">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                activeFilter === 'all'
                  ? 'bg-teal-500 text-slate-950 shadow-md shadow-teal-500/20'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              All 10 Videos
            </button>
            <button
              onClick={() => setActiveFilter('doctor')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                activeFilter === 'doctor'
                  ? 'bg-teal-500 text-slate-950 shadow-md shadow-teal-500/20'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              Doctor Consultations
            </button>
            <button
              onClick={() => setActiveFilter('clinic')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                activeFilter === 'clinic'
                  ? 'bg-teal-500 text-slate-950 shadow-md shadow-teal-500/20'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              Clinic Walkthroughs
            </button>
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search videos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-teal-500"
            />
          </div>

        </div>

        {/* Video Cards Grid (Desktop 3, Tablet 2, Mobile 1) */}
        {filteredVideos.length === 0 ? (
          <div className="text-center py-12 bg-slate-900 rounded-2xl border border-slate-800">
            <p className="text-sm text-slate-400">No videos match your search or filter.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVideos.map((video) => (
              <div
                key={video.id}
                onClick={() => onSelectVideo(video)}
                className="bg-slate-900/80 border border-slate-800 hover:border-teal-500/60 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group flex flex-col cursor-pointer"
              >
                {/* Poster Thumbnail */}
                <div className="relative aspect-video bg-black overflow-hidden">
                  <img
                    src={video.fallbackPosterUrl}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85 group-hover:opacity-100"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />

                  {/* Play Button Icon Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-teal-500 text-slate-950 flex items-center justify-center shadow-lg shadow-teal-500/40 group-hover:scale-115 transition-transform">
                      <Play className="w-5 h-5 fill-slate-950 ml-0.5" />
                    </div>
                  </div>

                  {/* Duration Tag */}
                  {video.duration && (
                    <div className="absolute bottom-2.5 right-2.5 bg-black/80 backdrop-blur-md px-2 py-0.5 rounded text-[11px] font-mono text-slate-200">
                      {video.duration}
                    </div>
                  )}

                  {/* Top Category Badge */}
                  <div className="absolute top-2.5 left-2.5">
                    <span className="px-2.5 py-0.5 bg-slate-950/80 backdrop-blur-md rounded text-[10px] font-semibold text-teal-300 border border-teal-500/20">
                      {video.filename}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-4 flex-1 flex flex-col justify-between space-y-2">
                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-teal-300 transition-colors line-clamp-1">
                      {video.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                      {video.description}
                    </p>
                  </div>

                  <div className="pt-2 flex items-center justify-between border-t border-slate-800 text-[11px] text-teal-400 font-semibold">
                    <span className="flex items-center gap-1">
                      <Play className="w-3 h-3 fill-teal-400" />
                      Click to Play Fullscreen
                    </span>
                    <span className="text-slate-300">Adda Gamber</span>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
