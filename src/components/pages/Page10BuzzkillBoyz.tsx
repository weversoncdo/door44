import React from 'react';
import { BuzzkillBoyzBadge } from '../PartnerBadges';
import { Instagram, Youtube, Sparkles } from 'lucide-react';

export const Page10BuzzkillBoyz: React.FC = () => {
  return (
    <section className="relative w-full min-h-[calc(100vh-5rem)] flex items-center justify-between overflow-hidden bg-[#09090c] paper-grunge-bg px-6 sm:px-12 lg:px-20 py-12">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Column: Large circular torn badge */}
        <div className="lg:col-span-5 flex items-center justify-center">
          <div className="relative flex items-center justify-center">
            {/* Ambient red backlight */}
            <div className="absolute w-64 h-64 rounded-full bg-[#e11d24]/20 blur-3xl pointer-events-none" />
            <BuzzkillBoyzBadge size={280} className="shadow-2xl" />
          </div>
        </div>

        {/* Right Column: Detail Content */}
        <div className="lg:col-span-7 z-10 space-y-5">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#e11d24]">
            <Sparkles className="w-4 h-4" />
            <span>Parceria Estratégica · Mídia & Comunicação</span>
          </div>

          <h2 className="font-bebas text-6xl sm:text-7xl lg:text-8xl tracking-wider text-white distressed-text leading-none">
            BUZZKILL BOYZ
          </h2>

          <div className="space-y-4 text-xs sm:text-sm text-[#d4d4d8] leading-relaxed">
            <p>
              Com uma comunicação leve, espontânea e próxima da
              cena musical, <strong className="text-white">BUZZKILL BOYZ</strong> cria diferentes espaços
              para que nossos artistas possam apresentar seus
              trabalhos de uma maneira autêntica.
            </p>

            <p>
              Todos os artistas da nossa produtora são
              automaticamente convidados para o <span className="text-white font-semibold">SOFÁ SO GOOD</span>,
              um dos quadros do canal, que aposta em entrevistas
              descontraídas, leves e divertidas.
            </p>

            <p>
              A parceria também envolve a cobertura dos shows no
              quadro <span className="text-white font-semibold">SEM SCRIPT!</span>, registrando cada apresentação de
              forma espontânea e verdadeira, acompanhando a
              energia do palco e tudo aquilo que acontece ao redor
              dele, além da divulgação de novos álbuns e EPs através
              do quadro <span className="text-white font-semibold">ADMIRÁVEL DISCO NOVO</span>.
            </p>

            <p className="text-[#a1a1aa] italic pt-1 border-l-2 border-[#e11d24] pl-3">
              Essa parceria representa uma extensão do trabalho que
              fazemos com cada artista: criar oportunidades para que
              sua música circule, sua identidade seja percebida e sua
              história encontre novos públicos de uma maneira
              natural, criativa e verdadeira.
            </p>
          </div>

          {/* Social media handles exactly as in PDF */}
          <div className="pt-4 flex flex-wrap items-center gap-4 text-xs font-medium text-white border-t border-[#27272a]">
            <a
              href="https://instagram.com/buzzkillboyz"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#181820] hover:bg-[#27272a] border border-[#27272a] transition-colors"
            >
              <Instagram className="w-4 h-4 text-[#e11d24]" />
              <span>@buzzkillboyz</span>
            </a>

            <a
              href="https://tiktok.com/@buzzkillboyz"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#181820] hover:bg-[#27272a] border border-[#27272a] transition-colors"
            >
              {/* TikTok Icon */}
              <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z"/>
              </svg>
              <span>@buzzkillboyz</span>
            </a>

            <a
              href="https://youtube.com/@BUZZKILLBOYZ"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#181820] hover:bg-[#27272a] border border-[#27272a] transition-colors"
            >
              <Youtube className="w-4 h-4 text-[#dc2626]" />
              <span>@BUZZKILLBOYZ</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
