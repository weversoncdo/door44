import React, { useState } from 'react';
import { Play, ExternalLink } from 'lucide-react';
import { VideoModal } from '../VideoModal';
import { HeaderBrand } from '../Logo44';

export const Page08GabrielzVideo: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="relative w-full min-h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden bg-[#0c0c10] px-4 sm:px-8 py-10">
      {/* Video Container replicating the exact high-contrast yellow typography YouTube thumbnail frame */}
      <div 
        onClick={() => setModalOpen(true)}
        className="relative w-full max-w-5xl aspect-video rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border-2 sm:border-4 border-[#27272a] cursor-pointer group transition-all duration-300 hover:shadow-[0_0_50px_rgba(234,179,8,0.25)] bg-black"
      >
        {/* Background Image: Grayscale urban scene */}
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/images/gabrielz_retomada_cover_1790949464295.jpg"
            alt="Gabrielz Retomada videoclipe oficial - Vila Madalena São Paulo"
            className="w-full h-full object-cover object-center grayscale contrast-125 group-hover:scale-[1.02] transition-transform duration-500 opacity-90"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Video Overlay Top Bar */}
        <div className="absolute top-0 left-0 right-0 z-20 p-4 sm:p-6 bg-gradient-to-b from-black/85 via-black/40 to-transparent flex items-center justify-between text-white">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-black/80 border border-white/30 flex items-center justify-center font-bebas text-sm">
              44
            </div>
            <div>
              <h3 className="text-xs sm:text-base font-bold text-white drop-shadow-md line-clamp-1">
                Gabrielz - Retomada (Feat. Liz Sacramento)
              </h3>
              <p className="text-[10px] sm:text-xs text-white/80">Gabrielz · Door44 Studios</p>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-xs font-semibold bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
            <span>Assistir Agora</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* Center Giant Yellow Typography: GABRIELZ RETOMADA with Play button */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center p-4">
          <div className="select-none flex flex-col items-center">
            {/* Small uppercase label */}
            <span className="font-bebas text-lg sm:text-2xl md:text-3xl tracking-[0.25em] text-[#facc15] font-black drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)] mb-[-0.5rem]">
              GABRIELZ
            </span>

            <div className="relative flex items-center justify-center">
              {/* Massive yellow title */}
              <h2 className="font-bebas text-5xl sm:text-8xl md:text-9xl font-black text-[#facc15] tracking-tight leading-none drop-shadow-[0_8px_20px_rgba(0,0,0,0.9)]">
                RETOMADA
              </h2>

              {/* YouTube Play Icon centered over text */}
              <div className="absolute w-16 h-11 sm:w-22 sm:h-15 rounded-2xl bg-[#dc2626] text-white flex items-center justify-center shadow-[0_0_35px_rgba(220,38,38,0.8)] group-hover:scale-115 transition-transform duration-300">
                <Play className="w-6 h-6 sm:w-8 sm:h-8 fill-white ml-0.5" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Door44 watermark & Watch on YouTube prompt */}
        <div className="absolute bottom-0 left-0 right-0 z-20 p-4 sm:p-6 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex items-end justify-between text-white">
          <div className="text-[11px] sm:text-xs text-white/80 font-mono">
            4K UHD · Gravado em São Paulo
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
        title="Retomada (Feat. Liz Sacramento)"
        artist="Gabrielz"
        coverImage="/src/assets/images/gabrielz_retomada_cover_1790949464295.jpg"
      />
    </section>
  );
};
