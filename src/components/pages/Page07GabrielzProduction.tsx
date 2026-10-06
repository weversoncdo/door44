import React from 'react';
import { InstagramCard } from '../InstagramCard';
import { Film, Play, MapPin, Disc } from 'lucide-react';

interface Page07Props {
  onWatchVideo: () => void;
}

export const Page07GabrielzProduction: React.FC<Page07Props> = ({ onWatchVideo }) => {
  const credits = [
    { role: 'Produtor Executiva', name: 'Pedro Turra' },
    { role: 'Diretor', name: 'Pedro Turra' },
    { role: '1º Assistente de Direção', name: 'Cauã Philipi' },
    { role: 'Roteiro', name: 'Cauã Philipi, Gabrielz e Pedro Turra' },
    { role: 'Diretor de Fotografia', name: 'Cauã Philipi' },
    { role: 'Operador de Câmera', name: 'Cauã Philipi' },
    { role: 'Montador', name: 'Cauã Philipi' },
    { role: 'Colorista', name: 'Cauã Philipi' },
    { role: 'Maquiagem', name: 'Stephanie Cristini' },
    { role: 'Making Of', name: 'Stephanie Cristini e Simone Lins' },
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
            Videoclipe gravado para o artista <strong className="text-white">Gabrielz</strong> da
            música <span className="text-white font-semibold">"Retomada"</span>, faixa de seu EP <strong className="text-[#eab308]">"Heisenberg"</strong>.
            Gravado na <span className="text-white">Vila Madalena</span> e <span className="text-white">Avenida Paulista</span>,
            em São Paulo, a música conta com a participação
            da artista <strong className="text-white">Liz Sacramento</strong>, que infelizmente não
            pôde estar presente durante as gravações.
          </p>

          {/* Location and release metadata */}
          <div className="flex flex-wrap gap-4 text-xs font-medium text-[#a1a1aa] py-1">
            <span className="flex items-center gap-1.5 bg-[#14141a] px-3 py-1.5 rounded-lg border border-[#27272a]">
              <MapPin className="w-3.5 h-3.5 text-[#e11d24]" />
              Vila Madalena & Av. Paulista · São Paulo
            </span>
            <span className="flex items-center gap-1.5 bg-[#14141a] px-3 py-1.5 rounded-lg border border-[#27272a]">
              <Disc className="w-3.5 h-3.5 text-[#eab308]" />
              EP "Heisenberg"
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
            artistName="Gabrielz"
            songTitle="Retomada (Feat. Liz Sacramento)"
            location="Vila Madalena, São Paulo"
            credits={credits}
            instagramUrl="https://www.instagram.com/gabrielz._/reel/DZ8R1i-vQAQ/"
            username="gabrielz._"
            imagePreview="/src/assets/images/gabrielz_authentic_portrait_1791289210041.jpg"
            captionSnippet="EP Heisenberg na pista! Videoclipe da faixa 'Retomada' nas ruas de São Paulo. Produção pesada da @door44.studios!"
          />
        </div>
      </div>
    </section>
  );
};
