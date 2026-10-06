import React from 'react';
import { ArrowRight, Flame, Music } from 'lucide-react';

interface Page06Props {
  onGoToProduction: () => void;
}

export const Page06GabrielzBio: React.FC<Page06Props> = ({ onGoToProduction }) => {
  return (
    <section className="relative w-full min-h-[calc(100vh-5rem)] flex items-center justify-between overflow-hidden bg-[#09090c] paper-grunge-bg px-6 sm:px-12 lg:px-20 py-12">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Column: Cutout torn paper photo of Gabrielz as in PDF page 6 */}
        <div className="lg:col-span-5 flex items-center justify-center">
          <div className="relative w-full max-w-sm sm:max-w-md aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-[#27272a]/70 group">
            <img
              src="/src/assets/images/gabrielz_authentic_portrait_1791289210041.jpg"
              alt="Gabrielz - Retrato com colagem de jornal rasgado"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white">
              <span className="font-bebas text-lg tracking-wider">SÃO PAULO / UNDERGROUND</span>
              <span className="font-mono text-[11px] text-[#eab308]">ROCK VISCERAL</span>
            </div>
          </div>
        </div>

        {/* Right Column: Bio text */}
        <div className="lg:col-span-7 z-10 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#e11d24]">
            <Music className="w-4 h-4" />
            <span>Produção em Destaque · Case 02</span>
          </div>

          <h2 className="font-bebas text-6xl sm:text-7xl lg:text-8xl tracking-wider text-white distressed-text leading-none">
            GABRIELZ
          </h2>

          <div className="space-y-4 text-sm sm:text-base text-[#d4d4d8] leading-relaxed">
            <p>
              <strong className="text-white">Gabrielz</strong> é um cantor e compositor brasileiro natural de São
              Paulo que vem conquistando cada vez mais espaço no cenário
              underground paulistano. Suas músicas apresentam uma
              perspectiva inovadora e carregam a atitude visceral do rock,
              combinando intensidade, autenticidade e identidade própria.
            </p>

            <p>
              Suas composições têm o propósito de encorajar a liberdade,
              questionar o que está estabelecido, idealizar sonhos e
              transformar o cotidiano em música. Letras sinceras e marcantes
              com melodias carregadas de emoção, constrói canções que
              dialogam com inquietações, desejos e experiências reais.
            </p>
          </div>

          {/* Highlights box */}
          <div className="p-4 rounded-xl bg-[#14141a] border border-[#27272a] space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#f4f4f5]">
              <Flame className="w-3.5 h-3.5 text-[#eab308]" />
              <span>Identidade Rock Underground Paulistano</span>
            </div>
            <p className="text-xs text-[#a1a1aa] italic">
              "Composições que confrontam a realidade com energia e guitarras pesadas, gravado no coração cultural de São Paulo."
            </p>
          </div>

          <div className="pt-2">
            <button
              onClick={onGoToProduction}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#e11d24] hover:bg-[#b91c1c] text-white text-xs font-bold tracking-wider uppercase transition-colors cursor-pointer shadow-[0_0_20px_rgba(225,29,36,0.3)]"
            >
              <span>Ver Ficha Técnica da Produção</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
