import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

interface Page01Props {
  onNext: () => void;
  onExploreProductions: () => void;
}

export const Page01Hero: React.FC<Page01Props> = ({ onNext, onExploreProductions }) => {
  return (
    <section className="relative w-full min-h-[calc(100vh-5rem)] flex items-center justify-between overflow-hidden bg-[#070709] px-6 sm:px-12 lg:px-20 py-12">
      {/* Background with door light beam image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/door_light_hero_1790949397781.jpg"
          alt="Porta entreaberta com feixe de luz radiante Door44 Studios"
          className="w-full h-full object-cover object-center opacity-85"
        />
        {/* Cinematic dark scrims to ensure high contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-2xl py-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 border border-[#27272a] text-[#e11d24] text-xs font-mono tracking-widest uppercase mb-6 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-[#e11d24] animate-ping" />
          Produtora Audiovisual · São Paulo
        </div>

        {/* Large Editorial Serif as seen in PDF page 1 */}
        <h1 className="font-cinzel text-5xl sm:text-7xl lg:text-8xl font-black text-white leading-[0.95] tracking-tight drop-shadow-[0_8px_20px_rgba(0,0,0,0.9)]">
          DOOR44<br />
          <span className="text-[#f4f4f5]">STUDIOS</span>
        </h1>

        <p className="mt-6 text-sm sm:text-base text-[#d4d4d8] font-normal max-w-lg leading-relaxed drop-shadow-md">
          Especializada na criação de videoclipes musicais, curta e longa-metragem.
          Transformamos ideias e canções em obras-primas visuais.
        </p>

        {/* Interactive CTA buttons */}
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <button
            onClick={onNext}
            className="px-6 py-3 bg-[#e11d24] hover:bg-[#b91c1c] text-white font-bold tracking-wider uppercase text-xs rounded-lg transition-all shadow-[0_0_25px_rgba(225,29,36,0.4)] flex items-center gap-2 cursor-pointer group"
          >
            <span>Conhecer a Produtora</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onExploreProductions}
            className="px-5 py-3 bg-black/60 hover:bg-black/80 text-white font-medium text-xs tracking-wider uppercase rounded-lg border border-[#3f3f46] hover:border-white transition-all flex items-center gap-2 backdrop-blur-md cursor-pointer"
          >
            <Play className="w-3.5 h-3.5 text-[#e11d24]" />
            <span>Ver Produções</span>
          </button>
        </div>
      </div>
    </section>
  );
};
