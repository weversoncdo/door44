import React from 'react';
import { Geometric44Emblem } from '../Logo44';
import { ArrowRight, Film, Sparkles, Award } from 'lucide-react';

interface Page02Props {
  onGoToProductions: () => void;
}

export const Page02About: React.FC<Page02Props> = ({ onGoToProductions }) => {
  return (
    <section className="relative w-full min-h-[calc(100vh-5rem)] flex items-center justify-between overflow-hidden bg-[#09090c] paper-grunge-bg px-6 sm:px-12 lg:px-20 py-12">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Text content exactly matching PDF page 2 */}
        <div className="lg:col-span-7 z-10 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#e11d24]">
            <Film className="w-4 h-4" />
            <span>Nossa Identidade & Propósito</span>
          </div>

          <h2 className="font-bebas text-6xl sm:text-7xl lg:text-8xl tracking-wider text-white distressed-text leading-none">
            SOBRE NÓS
          </h2>

          <div className="space-y-5 text-sm sm:text-base text-[#d4d4d8] leading-relaxed font-normal">
            <p>
              Somos uma produtora audiovisual, especializada em criar videoclipes
              para todos os gêneros musicais, sem restrições. Com a nossa equipe
              criativa e apaixonada, trazemos à vida suas músicas com uma
              abordagem artística diferenciada.
            </p>

            <p>
              Desde o conceito inicial até a finalização, garantimos uma experiência
              personalizada, atendendo às necessidades e sonhos de cada artista.
              Nossa missão é transformar cada projeto em uma obra-prima visual que
              encante você e o seu público.
            </p>

            <div className="pt-2">
              <p className="text-base sm:text-lg font-semibold text-white italic border-l-2 border-[#e11d24] pl-4">
                Door44 Studios – Entre, fique à vontade e surpreenda-se.
              </p>
            </div>
          </div>

          {/* Key pillars / highlights */}
          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#27272a]">
            <div>
              <span className="font-bebas text-2xl sm:text-3xl text-white">4K / CINEMA</span>
              <p className="text-[11px] text-[#71717a]">Qualidade de ponta</p>
            </div>
            <div>
              <span className="font-bebas text-2xl sm:text-3xl text-[#e11d24]">100%</span>
              <p className="text-[11px] text-[#71717a]">Personalizado</p>
            </div>
            <div>
              <span className="font-bebas text-2xl sm:text-3xl text-white">TODOS GÊNEROS</span>
              <p className="text-[11px] text-[#71717a]">Rock, Trap, MPB & Pop</p>
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={onGoToProductions}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#e11d24] hover:bg-[#b91c1c] text-white text-xs font-bold tracking-wider uppercase transition-colors cursor-pointer shadow-[0_0_20px_rgba(225,29,36,0.3)]"
            >
              <span>Ver Casos de Sucesso</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right Column: Exact Attached Image 1 (Official Door44 Symbol) */}
        <div className="lg:col-span-5 flex items-center justify-center relative">
          {/* Ambient red halo */}
          <div className="absolute w-72 h-72 rounded-full bg-[#e11d24]/10 blur-3xl pointer-events-none" />
          
          <div className="relative w-72 h-72 sm:w-88 sm:h-88 lg:w-96 lg:h-96 rounded-3xl bg-[#18181b] border-2 border-[#27272a] shadow-2xl p-8 sm:p-10 flex items-center justify-center group hover:border-[#e11d24]/40 transition-colors duration-300">
            <Geometric44Emblem className="w-full h-full text-white" opacity={1} />
          </div>
        </div>
      </div>
    </section>
  );
};
