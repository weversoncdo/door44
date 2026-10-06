import React from 'react';
import { CristiniMakeupBadge } from '../PartnerBadges';
import { Instagram, Sparkles } from 'lucide-react';

export const Page12CristiniMakeup: React.FC = () => {
  return (
    <section className="relative w-full min-h-[calc(100vh-5rem)] flex items-center justify-between overflow-hidden bg-[#09090c] paper-grunge-bg px-6 sm:px-12 lg:px-20 py-12">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Column: Large circular badge */}
        <div className="lg:col-span-5 flex items-center justify-center">
          <div className="relative flex items-center justify-center">
            {/* Ambient purple backlight */}
            <div className="absolute w-64 h-64 rounded-full bg-[#c084fc]/15 blur-3xl pointer-events-none" />
            <CristiniMakeupBadge size={280} className="shadow-2xl" />
          </div>
        </div>

        {/* Right Column: Detail Content */}
        <div className="lg:col-span-7 z-10 space-y-5">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#c084fc]">
            <Sparkles className="w-4 h-4" />
            <span>Parceria Estratégica · Caracterização & Beleza</span>
          </div>

          <h2 className="font-bebas text-6xl sm:text-7xl lg:text-8xl tracking-wider text-white distressed-text leading-none">
            CRISTINI MAKEUP
          </h2>

          <div className="space-y-4 text-xs sm:text-sm text-[#d4d4d8] leading-relaxed">
            <p>
              Por trás de cada videoclipe existe um cuidado enorme
              com todos os detalhes que compõem a imagem. E a
              maquiagem tem um papel importante nessa construção,
              ajudando a traduzir ideias, criar atmosferas e dar ainda
              mais personalidade a cada produção. É nesse processo
              que se destaca o trabalho da <strong className="text-white">Cristini Makeup</strong>.
            </p>

            <p>
              Com técnica, criatividade e um olhar muito atento para
              cada projeto, ela participa das produções entendendo
              que a maquiagem vai muito além da beleza. Ela faz
              parte da identidade visual do trabalho e precisa
              conversar com a fotografia, o figurino, a iluminação e,
              principalmente, com a proposta de cada artista.
            </p>

            <p className="text-[#a1a1aa] italic pt-1 border-l-2 border-[#c084fc] pl-3">
              Seu trabalho é marcado pela sensibilidade de entender o
              que cada produção pede. Em alguns momentos, valoriza
              a beleza natural; em outros, cria uma estética mais forte
              e marcante. Em todos eles, existe o cuidado de fazer com
              que a maquiagem esteja integrada à imagem e à história
              que está sendo contada.
            </p>
          </div>

          {/* Social media handles */}
          <div className="pt-4 flex flex-wrap items-center gap-4 text-xs font-medium text-white border-t border-[#27272a]">
            <a
              href="https://instagram.com/cristinimakeup"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#181820] hover:bg-[#27272a] border border-[#27272a] transition-colors"
            >
              <Instagram className="w-4 h-4 text-[#c084fc]" />
              <span>@cristinimakeup</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
