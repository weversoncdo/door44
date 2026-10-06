import React from 'react';
import { 
  BuzzkillBoyzBadge, 
  CenaClassBadge, 
  CristiniMakeupBadge, 
  YourBrandHereBadge 
} from '../PartnerBadges';
import { Users, Instagram, Youtube, Sparkles, MessageSquare, ArrowRight } from 'lucide-react';

export const PartnersSection: React.FC = () => {
  return (
    <section className="relative w-full py-20 lg:py-28 bg-[#09090c] paper-grunge-bg border-t border-[#27272a]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#e11d24]">
            <Users className="w-4 h-4" />
            <span>Rede Colaborativa & Ecossistema</span>
          </div>

          <h2 className="font-bebas text-5xl sm:text-7xl lg:text-8xl tracking-wider text-white distressed-text leading-none">
            NOSSOS PARCEIROS
          </h2>

          <p className="text-xs sm:text-sm text-[#d4d4d8] leading-relaxed max-w-2xl mx-auto">
            O audiovisual se constrói em conjunto. Conheça as parcerias estratégicas que fortalecem nossas produções em comunicação musical, casting de elenco e caracterização visual.
          </p>
        </div>

        {/* 3 Dedicated Quadros exactly matching the uploaded images */}
        <div className="space-y-12">
          {/* QUADRO 1: BUZZKILL BOYZ */}
          <div className="relative rounded-3xl bg-[#0f0f14] border-2 border-[#27272a] overflow-hidden shadow-2xl p-6 sm:p-10 lg:p-12 xl:p-14 paper-grunge-bg group hover:border-[#e11d24]/50 transition-colors duration-300">
            {/* Ambient Red Glow */}
            <div className="absolute -top-12 -left-12 w-80 h-80 bg-[#e11d24]/12 blur-3xl pointer-events-none" />

            <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-center">
              {/* Left Column: Logo Badge (+50% larger size) */}
              <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-center justify-center">
                <div className="w-full max-w-[480px] sm:max-w-[580px] md:max-w-[650px] lg:max-w-[720px] xl:max-w-[780px] aspect-square flex items-center justify-center shrink-0">
                  <BuzzkillBoyzBadge size={undefined} className="w-full h-full shadow-2xl hover:scale-105 transition-transform duration-300" />
                </div>
                <span className="mt-5 font-mono text-xs sm:text-sm text-[#a1a1aa] uppercase tracking-wider text-center">
                  Mídia & Comunicação Musical
                </span>
              </div>

              {/* Right Column: Title, Exact Text & Social Links */}
              <div className="lg:col-span-6 xl:col-span-6 space-y-5">
                <h3 className="font-bebas text-4xl sm:text-6xl text-white tracking-wide distressed-text leading-none">
                  BUZZKILL BOYZ
                </h3>

                <div className="space-y-3.5 text-xs sm:text-sm text-[#d4d4d8] leading-relaxed">
                  <p>
                    Com uma comunicação leve, espontânea e próxima da cena musical, <strong className="text-white">BUZZKILL BOYZ</strong> cria diferentes espaços para que nossos artistas possam apresentar seus trabalhos de uma maneira autêntica.
                  </p>
                  <p>
                    Todos os artistas da nossa produtora são automaticamente convidados para o <strong className="text-white">SOFÁ SO GOOD</strong>, um dos quadros do canal, que aposta em entrevistas descontraídas, leves e divertidas.
                  </p>
                  <p>
                    A parceria também envolve a cobertura dos shows no quadro <strong className="text-white">SEM SCRIPT!</strong>, registrando cada apresentação de forma espontânea e verdadeira, acompanhando a energia do palco e tudo aquilo que acontece ao redor dele, além da divulgação de novos álbuns e EPs através do quadro <strong className="text-white">ADMIRÁVEL DISCO NOVO</strong>.
                  </p>
                  <p className="text-[#a1a1aa] italic pt-1 border-l-2 border-[#e11d24] pl-3">
                    Essa parceria representa uma extensão do trabalho que fazemos com cada artista: criar oportunidades para que sua música circule, sua identidade seja percebida e sua história encontre novos públicos de uma maneira natural, criativa e verdadeira.
                  </p>
                </div>

                {/* Social Links Row */}
                <div className="pt-4 flex flex-wrap items-center gap-3 text-xs border-t border-[#27272a]">
                  <a
                    href="https://instagram.com/buzzkillboyz"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#181820] hover:bg-[#27272a] border border-[#27272a] text-white hover:text-[#e11d24] transition-colors"
                  >
                    <Instagram className="w-4 h-4 text-[#e11d24]" />
                    <span>@buzzkillboyz</span>
                  </a>

                  <a
                    href="https://tiktok.com/@buzzkillboyz"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#181820] hover:bg-[#27272a] border border-[#27272a] text-white hover:text-white transition-colors"
                  >
                    <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z"/>
                    </svg>
                    <span>@buzzkillboyz</span>
                  </a>

                  <a
                    href="https://youtube.com/@BUZZKILLBOYZ"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#181820] hover:bg-[#27272a] border border-[#27272a] text-white hover:text-[#dc2626] transition-colors"
                  >
                    <Youtube className="w-4 h-4 text-[#dc2626]" />
                    <span>@BUZZKILLBOYZ</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* QUADRO 2: CENA CLASS */}
          <div className="relative rounded-3xl bg-[#0f0f14] border-2 border-[#27272a] overflow-hidden shadow-2xl p-6 sm:p-10 lg:p-12 xl:p-14 paper-grunge-bg group hover:border-[#06b6d4]/50 transition-colors duration-300">
            {/* Ambient Cyan Glow */}
            <div className="absolute -top-12 -left-12 w-80 h-80 bg-[#06b6d4]/12 blur-3xl pointer-events-none" />

            <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-center">
              {/* Left Column: Logo Badge (+50% larger size) */}
              <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-center justify-center">
                <div className="w-full max-w-[480px] sm:max-w-[580px] md:max-w-[650px] lg:max-w-[720px] xl:max-w-[780px] aspect-square flex items-center justify-center shrink-0">
                  <CenaClassBadge size={undefined} className="w-full h-full shadow-2xl hover:scale-105 transition-transform duration-300" />
                </div>
                <span className="mt-5 font-mono text-xs sm:text-sm text-[#a1a1aa] uppercase tracking-wider text-center">
                  Casting & Elenco Audiovisual
                </span>
              </div>

              {/* Right Column: Title, Exact Text & Social Links */}
              <div className="lg:col-span-6 xl:col-span-6 space-y-5">
                <h3 className="font-bebas text-4xl sm:text-6xl text-white tracking-wide distressed-text leading-none">
                  CENA CLASS
                </h3>

                <div className="space-y-3.5 text-xs sm:text-sm text-[#d4d4d8] leading-relaxed">
                  <p>
                    Em nossas produções existe uma equipe inteira trabalhando para transformar uma ideia em realidade. E encontrar os profissionais certos para cada projeto faz parte desse processo. É nesse ponto que a parceria com a <strong className="text-white">CENA CLASS</strong> ganha importância, ampliando nossa busca por talentos e profissionais para diferentes etapas das nossas produções.
                  </p>
                  <p>
                    A parceria contribui na divulgação do nosso casting e na busca por atrizes, atores e figurantes, conectando nossos projetos a novos talentos e perfis que possam dar vida às histórias que nossos artistas queremos contar.
                  </p>
                  <p>
                    Além do elenco, também nos auxilia na busca por profissionais para a pré-produção, produção e pós-produção, fortalecendo nossas equipes e criando novas possibilidades de colaboração.
                  </p>
                  <p className="text-[#a1a1aa] italic pt-1 border-l-2 border-[#06b6d4] pl-3">
                    Para nós, essa parceria é uma forma de aproximar talentos, profissionais e projetos, construindo equipes mais completas e abrindo espaço para que novas pessoas façam parte das produções da nossa produtora.
                  </p>
                </div>

                {/* Social Links Row */}
                <div className="pt-4 flex flex-wrap items-center gap-3 text-xs border-t border-[#27272a]">
                  <a
                    href="https://instagram.com/cenaclass.br"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#181820] hover:bg-[#27272a] border border-[#27272a] text-white hover:text-[#06b6d4] transition-colors"
                  >
                    <Instagram className="w-4 h-4 text-[#06b6d4]" />
                    <span>@cenaclass.br</span>
                  </a>

                  <a
                    href="https://youtube.com/@CENACLASS"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#181820] hover:bg-[#27272a] border border-[#27272a] text-white hover:text-[#dc2626] transition-colors"
                  >
                    <Youtube className="w-4 h-4 text-[#dc2626]" />
                    <span>@CENACLASS</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* QUADRO 3: CRISTINI MAKEUP */}
          <div className="relative rounded-3xl bg-[#0f0f14] border-2 border-[#27272a] overflow-hidden shadow-2xl p-6 sm:p-10 lg:p-12 xl:p-14 paper-grunge-bg group hover:border-[#c084fc]/50 transition-colors duration-300">
            {/* Ambient Purple Glow */}
            <div className="absolute -top-12 -left-12 w-80 h-80 bg-[#c084fc]/12 blur-3xl pointer-events-none" />

            <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-center">
              {/* Left Column: Logo Badge (+50% larger size) */}
              <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-center justify-center">
                <div className="w-full max-w-[480px] sm:max-w-[580px] md:max-w-[650px] lg:max-w-[720px] xl:max-w-[780px] aspect-square flex items-center justify-center shrink-0">
                  <CristiniMakeupBadge size={undefined} className="w-full h-full shadow-2xl hover:scale-105 transition-transform duration-300" />
                </div>
                <span className="mt-5 font-mono text-xs sm:text-sm text-[#a1a1aa] uppercase tracking-wider text-center">
                  Caracterização & Visagismo
                </span>
              </div>

              {/* Right Column: Title, Exact Text & Social Links */}
              <div className="lg:col-span-6 xl:col-span-6 space-y-5">
                <h3 className="font-bebas text-4xl sm:text-6xl text-white tracking-wide distressed-text leading-none">
                  CRISTINI MAKEUP
                </h3>

                <div className="space-y-3.5 text-xs sm:text-sm text-[#d4d4d8] leading-relaxed">
                  <p>
                    Por trás de cada videoclipe existe um cuidado enorme com todos os detalhes que compõem a imagem. E a maquiagem tem um papel importante nessa construção, ajudando a traduzir ideias, criar atmosferas e dar ainda mais personalidade a cada produção. É nesse processo que se destaca o trabalho da <strong className="text-white">Cristini Makeup</strong>.
                  </p>
                  <p>
                    Com técnica, criatividade e um olhar muito atento para cada projeto, ela participa das produções entendendo que a maquiagem vai muito além da beleza. Ela faz parte da identidade visual do trabalho e precisa conversar com a fotografia, o figurino, a iluminação e, principalmente, com a proposta de cada artista.
                  </p>
                  <p className="text-[#a1a1aa] italic pt-1 border-l-2 border-[#c084fc] pl-3">
                    Seu trabalho é marcado pela sensibilidade de entender o que cada produção pede. Em alguns momentos, valoriza a beleza natural; em outros, cria uma estética mais forte e marcante. Em todos eles, existe o cuidado de fazer com que a maquiagem esteja integrada à imagem e à história que está sendo contada.
                  </p>
                </div>

                {/* Social Links Row */}
                <div className="pt-4 flex flex-wrap items-center gap-3 text-xs border-t border-[#27272a]">
                  <a
                    href="https://instagram.com/cristinimakeup"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#181820] hover:bg-[#27272a] border border-[#27272a] text-white hover:text-[#c084fc] transition-colors"
                  >
                    <Instagram className="w-4 h-4 text-[#c084fc]" />
                    <span>@cristinimakeup</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quadro Complementar: A Sua Marca Aqui */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-[#14141b] border border-[#27272a] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <YourBrandHereBadge size={100} />
            <div>
              <h4 className="font-bebas text-2xl sm:text-3xl text-white">A SUA MARCA AQUI</h4>
              <p className="text-xs text-[#a1a1aa] max-w-md mt-0.5">
                Conecte sua marca a artistas autênticos e produções musicais de alto engajamento. Product placement, patrocínios e ativações.
              </p>
            </div>
          </div>
          <a
            href="https://wa.me/5511999999999?text=Ol%C3%A1%20Door44%20Studios!%20Gostaria%20de%20conversar%20sobre%20parceria%20comercial%20para%20minha%20marca."
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 rounded-lg bg-[#e11d24] hover:bg-[#b91c1c] text-white text-xs font-bold uppercase tracking-wider transition-colors shrink-0 inline-flex items-center gap-2"
          >
            <span>Seja um Parceiro</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
