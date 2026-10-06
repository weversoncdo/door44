import React, { useState } from 'react';
import { Play, ExternalLink } from 'lucide-react';
import { VideoModal } from '../VideoModal';
import { HeaderBrand } from '../Logo44';
import { IMAGES } from '../../assets/images';

export const Page05GleyfyVideo: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="relative w-full min-h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden bg-[#0c0c10] px-4 sm:px-8 py-10">
      {/* Video Container replicating the exact white brick wall YouTube thumbnail frame */}
      <div 
        onClick={() => setModalOpen(true)}
        className="relative w-full max-w-5xl aspect-video rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border-2 sm:border-4 border-[#27272a] cursor-pointer group transition-all duration-300 hover:shadow-[0_0_50px_rgba(225,29,36,0.3)] bg-white"
      >
        {/* Background: White Brick Wall texture */}
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.brickWallCover}
            alt="Muro de tijolos brancos - Another Brick in the Wall"
            className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
          />
        </div>

        {/* Video Overlay Top Bar */}
        <div className="absolute top-0 left-0 right-0 z-20 p-4 sm:p-6 bg-gradient-to-b from-black/80 via-black/40 to-transparent flex items-center justify-between text-white">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-black/80 border border-white/30 flex items-center justify-center font-bebas text-sm">
              44
            </div>
            <div>
              <h3 className="text-xs sm:text-base font-bold text-white drop-shadow-md line-clamp-1">
                Gleyfy Brauly - Another Brick In The Wall, Part 2 (Pink Floyd Cover)
              </h3>
              <p className="text-[10px] sm:text-xs text-white/80">Door44 Studios</p>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-xs font-semibold bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
            <span>Assistir Agora</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* Center Graffiti & Big Play Button */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center p-4">
          {/* Top Graffiti Title: Gleyfy Brauly */}
          <div className="mb-2 sm:mb-4 select-none">
            <span className="font-caveat text-4xl sm:text-7xl md:text-8xl font-black text-[#dc2626] tracking-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] -rotate-3 block">
              Gleyfy Brauly
            </span>
          </div>

          {/* Center Play Button & Title */}
          <div className="relative flex items-center justify-center my-1 select-none">
            {/* Spray paint effect behind */}
            <div className="absolute w-72 h-16 bg-[#e11d24]/20 blur-xl pointer-events-none" />

            <div className="flex items-center gap-2 sm:gap-4 flex-wrap justify-center">
              <span className="font-caveat text-2xl sm:text-5xl md:text-6xl font-bold text-[#dc2626] drop-shadow-sm">
                Another Brick in
              </span>

              {/* YouTube Style Play Button */}
              <div className="w-16 h-11 sm:w-24 sm:h-16 rounded-2xl bg-[#dc2626] text-white flex items-center justify-center shadow-[0_0_35px_rgba(220,38,38,0.7)] group-hover:scale-115 transition-transform duration-300">
                <Play className="w-6 h-6 sm:w-9 sm:h-9 fill-white ml-1" />
              </div>

              <span className="font-caveat text-2xl sm:text-5xl md:text-6xl font-bold text-[#dc2626] drop-shadow-sm">
                The Wall, Part. 2
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Door44 watermark & Watch on YouTube prompt */}
        <div className="absolute bottom-0 left-0 right-0 z-20 p-4 sm:p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end justify-between text-white">
          <div className="text-[11px] sm:text-xs text-white/80 font-mono">
            4K UHD · 45 Anos de "The Wall"
          </div>
          <div className="flex flex-col items-end">
            <HeaderBrand className="scale-75 sm:scale-90 origin-right" />
            <div className="flex items-center gap-1.5 text-[11px] sm:text-xs text-white/90 font-medium mt-1">
              <span>Watch on</span>
              <span className="bg-[#dc2626] px-1.5 py-0.5 rounded font-bold text-[10px] text-white">
                YouTube
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal Trigger */}
      <VideoModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Another Brick In The Wall, Part 2 (Pink Floyd Cover)"
        artist="Gleyfy Brauly"
        coverImage={IMAGES.brickWallCover}
      />
    </section>
  );
};
