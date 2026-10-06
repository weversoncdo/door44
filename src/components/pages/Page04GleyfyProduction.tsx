import React from 'react';
import { InstagramCard } from '../InstagramCard';
import { Film, Play, MapPin, Calendar } from 'lucide-react';
import { IMAGES } from '../../assets/images';

interface Page04Props {
  onWatchVideo: () => void;
}

export const Page04GleyfyProduction: React.FC<Page04Props> = ({ onWatchVideo }) => {
  const credits = [
    { role: 'Produtor Executivo', name: 'Weverson Duarte' },
    { role: 'Diretor', name: 'Pedro Turra' },
    { role: '1ª Assistente de Direção', name: 'Stephanie Cristini' },
    { role: 'Roteiro', name: 'Weverson Duarte e Gleyfy Brauly' },
    { role: 'Operador de Câmera', name: 'Eric Griecco' },
    { role: 'Montador', name: 'Eric Griecco' },
    { role: 'Colorista', name: 'Eric Griecco' },
    { role: 'Maquiagem', name: 'Stephanie Cristini' },
    { role: 'Making Of', name: 'Stephanie Cristini' },
    { role: 'Coordenador de Transportes', name: 'Diogo Travagin' },
  ];

  return (
    <section className="relative w-full min-h-[calc(100vh-5rem)] flex items-center justify-between overflow-hidden bg-[#09090c] paper-grunge-bg px-6 sm:px-12 lg:px-20 py-12">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Column: Technical Sheet and production description */}
        <div className="lg:col-span-7 z-10 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#e11d24]">
            <Film className="w-4 h-4" />
            <span>Ficha Técnica Oficial</span>
          </div>

          <h2 className="font-bebas text-6xl sm:text-7xl lg:text-8xl tracking-wider text-white distressed-text leading-none">
            SOBRE A PRODUÇÃO
          </h2>

          <p className="text-sm sm:text-base text-[#d4d4d8] leading-relaxed">
            Videoclipe gravado para o artista <strong className="text-white">Gleyfy Brauly</strong> da música{' '}
            <span className="text-white font-semibold">"Another Brick In The Wall, Part 2"</span> cover da banda{' '}
            <strong className="text-white">Pink Floyd</strong>. Lançado dia <span className="text-[#f4f4f5]">29/11</span> em homenagem aos{' '}
            <strong className="text-white">45 anos do álbum "The Wall"</strong> (30 de Dezembro de 1979),
            gravado no <span className="text-white">Skina Mooca Bar</span>, na Mooca em São Paulo.
          </p>

          {/* Location and release metadata */}
          <div className="flex flex-wrap gap-4 text-xs font-medium text-[#a1a1aa] py-1">
            <span className="flex items-center gap-1.5 bg-[#14141a] px-3 py-1.5 rounded-lg border border-[#27272a]">
              <MapPin className="w-3.5 h-3.5 text-[#e11d24]" />
              Skina Mooca Bar · São Paulo - SP
            </span>
            <span className="flex items-center gap-1.5 bg-[#14141a] px-3 py-1.5 rounded-lg border border-[#27272a]">
              <Calendar className="w-3.5 h-3.5 text-[#e11d24]" />
              Lançamento Oficial: 29/11
            </span>
          </div>

          {/* Credits List */}
          <div className="pt-2 border-t border-[#27272a]">
            <h4 className="text-xs uppercase font-bold tracking-wider text-[#a1a1aa] mb-3">
              Equipe & Créditos:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 text-xs sm:text-sm">
              {credits.map((c, i) => (
                <div key={i} className="flex items-baseline gap-1.5">
                  <span className="text-[#a1a1aa] font-medium">{c.role}:</span>
                  <span className="text-white font-semibold">{c.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4">
            <button
              onClick={onWatchVideo}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#e11d24] hover:bg-[#b91c1c] text-white text-xs font-bold tracking-wider uppercase transition-colors cursor-pointer shadow-[0_0_20px_rgba(225,29,36,0.3)]"
            >
              <Play className="w-4 h-4 fill-white" />
              <span>Assistir ao Videoclipe Oficial</span>
            </button>
          </div>
        </div>

        {/* Right Column: Instagram embed */}
        <div className="lg:col-span-5 flex items-center justify-center">
          <InstagramCard
            artistName="Gleyfy Brauly"
            songTitle="Another Brick in The Wall, Part 2"
            location="Skina Mooca Bar, São Paulo"
            credits={credits}
            instagramUrl="https://www.instagram.com/gleyfybraulyy/reel/DC-fxphv1xc/"
            username="gleyfybraulyy"
            imagePreview={IMAGES.gleyfyPortrait}
            captionSnippet="45 anos do clássico 'The Wall' do Pink Floyd homenageados em grande estilo com Gleyfy Brauly! Direção Door44 Studios."
          />
        </div>
      </div>
    </section>
  );
};
