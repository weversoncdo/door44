import React from 'react';
import { 
  BuzzkillBoyzBadge, 
  CenaClassBadge, 
  CristiniMakeupBadge, 
  YourBrandHereBadge 
} from '../PartnerBadges';
import { Users, ArrowRight } from 'lucide-react';

interface Page09Props {
  onSelectPartner: (pageNumber: number) => void;
}

export const Page09PartnersOverview: React.FC<Page09Props> = ({ onSelectPartner }) => {
  return (
    <section className="relative w-full min-h-[calc(100vh-5rem)] flex flex-col justify-center items-center overflow-hidden bg-[#09090c] paper-grunge-bg px-6 sm:px-12 py-12 text-center">
      <div className="max-w-6xl mx-auto w-full z-10 flex flex-col items-center">
        {/* Section kicker */}
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#e11d24] mb-3">
          <Users className="w-4 h-4" />
          <span>Rede Colaborativa & Ecossistema</span>
        </div>

        <h2 className="font-bebas text-5xl sm:text-7xl lg:text-8xl tracking-wider text-white distressed-text leading-none mb-4">
          NOSSOS PARCEIROS
        </h2>

        {/* 4 Circular Partner Badges in a Row exactly as in PDF page 9 */}
        <div className="w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 my-8 sm:my-12 place-items-center">
          {/* 1. BUZZKILL BOYZ */}
          <div className="flex flex-col items-center gap-3">
            <BuzzkillBoyzBadge
              size={150}
              interactive
              onClick={() => onSelectPartner(10)}
            />
            <span className="font-bebas text-base sm:text-lg tracking-wider text-white">
              BUZZKILL<br />BOYZ
            </span>
            <button
              onClick={() => onSelectPartner(10)}
              className="text-[11px] font-semibold text-[#e11d24] hover:underline flex items-center gap-1 cursor-pointer"
            >
              Ver detalhes <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          {/* 2. CENA CLASS */}
          <div className="flex flex-col items-center gap-3">
            <CenaClassBadge
              size={150}
              interactive
              onClick={() => onSelectPartner(11)}
            />
            <span className="font-bebas text-base sm:text-lg tracking-wider text-white">
              CENA<br />CLASS
            </span>
            <button
              onClick={() => onSelectPartner(11)}
              className="text-[11px] font-semibold text-[#06b6d4] hover:underline flex items-center gap-1 cursor-pointer"
            >
              Ver detalhes <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          {/* 3. CRISTINI MAKEUP */}
          <div className="flex flex-col items-center gap-3">
            <CristiniMakeupBadge
              size={150}
              interactive
              onClick={() => onSelectPartner(12)}
            />
            <span className="font-bebas text-base sm:text-lg tracking-wider text-white">
              CRISTINI<br />MAKEUP
            </span>
            <button
              onClick={() => onSelectPartner(12)}
              className="text-[11px] font-semibold text-[#c084fc] hover:underline flex items-center gap-1 cursor-pointer"
            >
              Ver detalhes <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          {/* 4. A SUA MARCA AQUI */}
          <div className="flex flex-col items-center gap-3">
            <YourBrandHereBadge
              size={150}
              interactive
              onClick={() => onSelectPartner(13)}
            />
            <span className="font-bebas text-base sm:text-lg tracking-wider text-white">
              A SUA MARCA<br />AQUI
            </span>
            <button
              onClick={() => onSelectPartner(13)}
              className="text-[11px] font-semibold text-[#e11d24] hover:underline flex items-center gap-1 cursor-pointer"
            >
              Seja um parceiro <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Sub-label "A - Z" as shown in PDF */}
        <div className="pt-4 flex items-center gap-3">
          <span className="w-8 h-[1px] bg-[#3f3f46]" />
          <span className="font-bebas text-lg sm:text-xl tracking-[0.25em] text-[#a1a1aa]">
            A - Z
          </span>
          <span className="w-8 h-[1px] bg-[#3f3f46]" />
        </div>
      </div>
    </section>
  );
};
