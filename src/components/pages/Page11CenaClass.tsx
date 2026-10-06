import React from 'react';
import { CenaClassBadge } from '../PartnerBadges';
import { Instagram, Youtube, Clapperboard } from 'lucide-react';

export const Page11CenaClass: React.FC = () => {
  return (
    <section className="relative w-full min-h-[calc(100vh-5rem)] flex items-center justify-between overflow-hidden bg-[#09090c] paper-grunge-bg px-6 sm:px-12 lg:px-20 py-12">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Column: Large circular badge */}
        <div className="lg:col-span-5 flex items-center justify-center">
          <div className="relative flex items-center justify-center">
            {/* Ambient blue/teal backlight */}
            <div className="absolute w-64 h-64 rounded-full bg-[#06b6d4]/15 blur-3xl pointer-events-none" />
            <CenaClassBadge size={280} className="shadow-2xl" />
          </div>
        </div>

        {/* Right Column: Detail Content */}
        <div className="lg:col-span-7 z-10 space-y-5">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#06b6d4]">
            <Clapperboard className="w-4 h-4" />
            <span>Parceria Estratégica · Casting & Elenco Audiovisual</span>
          </div>

          <h2 className="font-bebas text-6xl sm:text-7xl lg:text-8xl tracking-wider text-white distressed-text leading-none">
            CENA CLASS
          </h2>

          <div className="space-y-4 text-xs sm:text-sm text-[#d4d4d8] leading-relaxed">
            <p>
              Em nossas produções existe uma equipe inteira
              trabalhando para transformar uma ideia em realidade.
              E encontrar os profissionais certos para cada projeto faz
              parte desse processo. É nesse ponto que a parceria com
              a <strong className="text-white">CENA CLASS</strong> ganha importância, ampliando nossa
              busca por talentos e profissionais para diferentes etapas
              das nossas produções.
            </p>

            <p>
              A parceria contribui na divulgação do nosso casting e na
              busca por atrizes, atores e figurantes, conectando nossos
              projetos a novos talentos e perfis que possam dar vida às
              histórias que nossos artistas queremos contar.
            </p>

            <p>
              Além do elenco, também nos auxilia na busca por
              profissionais para a pré-produção, produção e
              pós-produção, fortalecendo nossas equipes e criando
              novas possibilidades de colaboração.
            </p>

            <p className="text-[#a1a1aa] italic pt-1 border-l-2 border-[#06b6d4] pl-3">
              Para nós, essa parceria é uma forma de aproximar
              talentos, profissionais e projetos, construindo equipes
              mais completas e abrindo espaço para que novas
              pessoas façam parte das produções da nossa produtora.
            </p>
          </div>

          {/* Social media handles */}
          <div className="pt-4 flex flex-wrap items-center gap-4 text-xs font-medium text-white border-t border-[#27272a]">
            <a
              href="https://instagram.com/cenaclass.br"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#181820] hover:bg-[#27272a] border border-[#27272a] transition-colors"
            >
              <Instagram className="w-4 h-4 text-[#06b6d4]" />
              <span>@cenaclass.br</span>
            </a>

            <a
              href="https://youtube.com/@CENACLASS"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#181820] hover:bg-[#27272a] border border-[#27272a] transition-colors"
            >
              <Youtube className="w-4 h-4 text-[#dc2626]" />
              <span>@CENACLASS</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
