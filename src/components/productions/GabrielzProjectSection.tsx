import React from 'react';
import { 
  Play, 
  Music, 
  MapPin, 
  Clapperboard, 
  Flame, 
  ExternalLink, 
  Youtube, 
  Instagram 
} from 'lucide-react';
import { InstagramCard } from '../InstagramCard';
import { IMAGES } from '../../assets/images';

interface GabrielzProjectSectionProps {
  isActive: boolean;
  onToggleVideo: () => void;
  onOpenModal: (data: {
    isOpen: boolean;
    title: string;
    artist: string;
    coverImage?: string;
    youtubeId?: string;
  }) => void;
  credits: { role: string; name: string }[];
}

export const GabrielzProjectSection: React.FC<GabrielzProjectSectionProps> = ({
  isActive,
  onToggleVideo,
  onOpenModal,
  credits,
}) => {
  return (
    <section className="py-16 sm:py-24 border-b border-[#27272a]/60 paper-grunge-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Project Header Bar with Direct YouTube Link - Sem Numeração */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-[#27272a] pb-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#facc15]/10 border border-[#facc15]/30 flex items-center justify-center text-[#facc15] shrink-0">
              <Music className="w-5 h-5" />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#facc15]">
                <span className="w-2 h-2 rounded-full bg-[#facc15] animate-ping" />
                <span>Case Videoclipe Oficial · Rock Underground Paulistano</span>
              </div>
              <h2 className="font-bebas text-3xl sm:text-5xl text-white tracking-wide distressed-text mt-0.5">
                GABRIELZ — "RETOMADA (FEAT. LIZ SACRAMENTO)"
              </h2>
            </div>
          </div>

          {/* CTAs: YouTube & Instagram Reel */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://www.youtube.com/watch?v=t7SBNfqqpxs"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 bg-[#dc2626] hover:bg-[#b91c1c] text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-lg hover:shadow-[0_0_25px_rgba(220,38,38,0.5)] cursor-pointer"
            >
              <Youtube className="w-4 h-4 fill-white" />
              <span>Assistir no YouTube</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href="https://www.instagram.com/gabrielz._/reel/DZ8R1i-vQAQ/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 bg-gradient-to-r from-[#f58529] via-[#dd2a7b] to-[#8134af] hover:brightness-110 text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-lg hover:shadow-[0_0_25px_rgba(221,42,123,0.5)] cursor-pointer"
            >
              <Instagram className="w-4 h-4 text-white" />
              <span>Post no Instagram</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* 1. YouTube Video Showcase Player Frame (Embed Direto em 16:9) */}
        <div className="relative w-full aspect-video rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-2 sm:border-4 border-[#27272a] bg-black group transition-all hover:border-[#facc15]/60">
          {isActive ? (
            <iframe
              src="https://www.youtube-nocookie.com/embed/t7SBNfqqpxs?rel=0&modestbranding=1"
              title="Gabrielz - Retomada (Feat. Liz Sacramento)"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full border-0"
            />
          ) : (
            <div 
              onClick={onToggleVideo}
              className="relative w-full h-full cursor-pointer"
            >
              <img
                src={IMAGES.gabrielzCover}
                alt="Gabrielz Retomada videoclipe oficial"
                className="w-full h-full object-cover object-center grayscale contrast-125 opacity-90 group-hover:scale-[1.02] transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-[#dc2626] text-white flex items-center justify-center shadow-[0_0_40px_rgba(220,38,38,0.8)] group-hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 fill-white ml-1" />
                </div>
                <span className="mt-4 font-bebas text-xl text-white tracking-wider">
                  Clique para Reproduzir o Videoclipe Oficial
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Quick Video Meta Strip */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-[#111116] border border-[#27272a] text-xs text-[#a1a1aa]">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded bg-[#27272a] text-white font-mono text-[11px] font-bold">4K UHD</span>
            <span>Gravado na Vila Madalena & Avenida Paulista, São Paulo</span>
            <span aria-hidden="true">·</span>
            <span>Faixa do EP "Heisenberg"</span>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a 
              href="https://www.youtube.com/watch?v=t7SBNfqqpxs" 
              target="_blank" 
              rel="noreferrer"
              className="text-[#facc15] hover:underline inline-flex items-center gap-1 font-semibold"
            >
              <span>YouTube</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <span className="text-[#3f3f46]">·</span>
            <a 
              href="https://www.instagram.com/gabrielz._/reel/DZ8R1i-vQAQ/" 
              target="_blank" 
              rel="noreferrer"
              className="text-[#dd2a7b] hover:underline inline-flex items-center gap-1 font-semibold"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>Instagram Reel (@gabrielz._)</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* 2 DEDICATED QUADROS FOR GABRIELZ */}
        <div className="space-y-12">
          {/* QUADRO 1: GABRIELZ (With the Real Photo in Torn Paper Frame) */}
          <div className="relative rounded-3xl bg-[#0f0f14] border-2 border-[#27272a] overflow-hidden shadow-2xl p-6 sm:p-10 lg:p-12 paper-grunge-bg group hover:border-[#facc15]/50 transition-colors duration-300">
            {/* Ambient Yellow Glow */}
            <div className="absolute -top-12 -left-12 w-80 h-80 bg-[#facc15]/10 blur-3xl pointer-events-none" />

            <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
              {/* Left Column: Portrait with Newspaper Torn Paper Frame (Using REAL GABRIELZ PHOTO) */}
              <div className="lg:col-span-5 flex flex-col items-center justify-center">
                <div className="relative w-full max-w-sm aspect-[4/5] rounded-3xl overflow-hidden p-3 bg-[#e8e6df] shadow-2xl border-4 border-dashed border-[#e4e4e7]/80">
                  {/* Newspaper clipping textured layer behind Gabrielz */}
                  <div className="absolute inset-2 rounded-2xl bg-[#141419] overflow-hidden">
                    {/* Real Gabrielz Photo */}
                    <img
                      src={IMAGES.gabrielzPortrait}
                      alt="Gabrielz - Imagem Real Oficial"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top relative z-10"
                    />
                  </div>

                  {/* Torn paper deckled contour outline */}
                  <div className="absolute inset-0 border-8 border-[#f4f4f0] rounded-3xl pointer-events-none opacity-90" />
                </div>

                <span className="mt-4 font-mono text-xs text-[#a1a1aa] uppercase tracking-wider text-center">
                  Cantor & Compositor · Rock Underground Paulistano
                </span>
              </div>

              {/* Right Column: Artist Bio */}
              <div className="lg:col-span-7 space-y-6">
                <h3 className="font-bebas text-5xl sm:text-7xl text-white tracking-wider distressed-text leading-none">
                  GABRIELZ
                </h3>

                <div className="space-y-4 text-sm sm:text-base text-[#e4e4e7] leading-relaxed">
                  <p>
                    <strong className="text-white">Gabrielz</strong> é um cantor e compositor brasileiro natural de São Paulo que vem conquistando cada vez mais espaço no cenário underground paulistano. Suas músicas apresentam uma perspectiva inovadora e carregam a atitude visceral do rock, combinando intensidade, autenticidade e identidade própria.
                  </p>
                  <p>
                    Suas composições têm o propósito de encorajar a liberdade, questionar o que está estabelecido, idealizar sonhos e transformar o cotidiano em música. Com letras sinceras e marcantes e melodias carregadas de emoção, constrói canções que dialogam com inquietações, desejos e experiências reais.
                  </p>
                </div>

                {/* EP Heisenberg card */}
                <div className="p-4 sm:p-5 rounded-2xl bg-[#14141c] border-l-4 border-[#facc15] border-y border-r border-[#27272a] space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#facc15] uppercase font-bold tracking-wider">
                    <Flame className="w-4 h-4 text-[#facc15]" />
                    <span>Destaque do EP "Heisenberg"</span>
                  </div>
                  <p className="text-sm text-[#f4f4f5] italic font-serif leading-relaxed">
                    Faixa de destaque com participação vocal de Liz Sacramento e fotografia visceral pelas ruas de São Paulo.
                  </p>
                  <span className="text-xs text-[#a1a1aa] block font-mono">
                    Produção completa e direção cinematográfica por Door44 Studios
                  </span>
                </div>

                {/* Footer tag */}
                <div className="pt-2 flex items-center justify-between text-xs text-[#71717a] font-mono border-t border-[#27272a]">
                  <span>Case Histórico Door44 Studios</span>
                  <span className="text-[#a1a1aa] font-bold">Página 04</span>
                </div>
              </div>
            </div>
          </div>

          {/* QUADRO 2: SOBRE A PRODUÇÃO (GABRIELZ) */}
          <div className="relative rounded-3xl bg-[#0f0f14] border-2 border-[#27272a] overflow-hidden shadow-2xl p-6 sm:p-10 lg:p-12 paper-grunge-bg group hover:border-[#facc15]/50 transition-colors duration-300">
            <div className="space-y-8">
              {/* Header Title */}
              <div>
                <h3 className="font-bebas text-5xl sm:text-7xl text-white tracking-wider distressed-text leading-none">
                  SOBRE A PRODUÇÃO
                </h3>
              </div>

              {/* Synopsis Text */}
              <p className="text-sm sm:text-base text-[#e4e4e7] leading-relaxed max-w-4xl">
                Videoclipe gravado para o artista <strong className="text-white">Gabrielz</strong> da música <strong className="text-white">“Retomada”</strong>, faixa de seu EP <strong className="text-white">“Heisenberg”</strong>. Gravado na Vila Madalena e Avenida Paulista, em São Paulo, a música conta com a participação da artista <strong className="text-white">Liz Sacramento</strong>, que infelizmente não pôde estar presente durante as gravações.
              </p>

              {/* Two Column Layout: Ficha Técnica (Left) + Instagram & Backstage (Right) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-2">
                {/* Ficha Técnica */}
                <div className="lg:col-span-7 p-6 rounded-2xl bg-[#14141c] border border-[#27272a] space-y-4">
                  <div className="flex items-center justify-between border-b border-[#27272a] pb-3">
                    <div className="flex items-center gap-2">
                      <Clapperboard className="w-4 h-4 text-[#facc15]" />
                      <h4 className="font-bebas text-2xl text-white tracking-wide">
                        FICHA TÉCNICA OFICIAL
                      </h4>
                    </div>
                    <span className="font-mono text-[11px] text-[#71717a] uppercase">Equipe Técnica</span>
                  </div>

                  <div className="divide-y divide-[#27272a]/60 font-sans text-sm">
                    {credits.map((c, i) => (
                      <div key={i} className="py-2.5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                        <span className="text-[#a1a1aa] font-medium text-xs sm:text-sm">
                          {c.role}:
                        </span>
                        <span className="text-white font-bold text-xs sm:text-sm sm:text-right">
                          {c.name}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Direct YouTube button at bottom of Ficha Técnica */}
                  <div className="pt-4 border-t border-[#27272a] flex flex-wrap items-center gap-3">
                    <a
                      href="https://www.youtube.com/watch?v=t7SBNfqqpxs"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 bg-[#dc2626] hover:bg-[#b91c1c] text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-md cursor-pointer"
                    >
                      <Youtube className="w-4 h-4 fill-white" />
                      <span>Ver Clipe no YouTube</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    <button
                      onClick={() => onOpenModal({
                        isOpen: true,
                        title: 'Retomada (Feat. Liz Sacramento)',
                        artist: 'Gabrielz',
                        coverImage: IMAGES.gabrielzPortrait,
                        youtubeId: 't7SBNfqqpxs'
                      })}
                      className="inline-flex items-center gap-2 px-5 py-3 bg-[#1e1e28] hover:bg-[#272736] text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all border border-[#3f3f4e] cursor-pointer"
                    >
                      <Play className="w-4 h-4 fill-white" />
                      <span>Abrir em Tela Cheia</span>
                    </button>
                  </div>
                </div>

                {/* Right: Instagram Card & Location Badges */}
                <div className="lg:col-span-5 space-y-6 flex flex-col items-center">
                  <div className="w-full space-y-3">
                    <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#14141c] border border-[#27272a] text-xs">
                      <MapPin className="w-4 h-4 text-[#facc15] shrink-0" />
                      <div>
                        <span className="text-white font-bold block">Vila Madalena & Av. Paulista</span>
                        <span className="text-[#a1a1aa]">São Paulo · Locações Urbanas</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#14141c] border border-[#27272a] text-xs">
                      <Clapperboard className="w-4 h-4 text-[#facc15] shrink-0" />
                      <div>
                        <span className="text-white font-bold block">Direção & Fotografia</span>
                        <span className="text-[#a1a1aa]">Pedro Turra & Cauã Philipi</span>
                      </div>
                    </div>
                  </div>

                  <InstagramCard
                    artistName="Gabrielz"
                    songTitle="Retomada (Feat. Liz Sacramento)"
                    location="Vila Madalena, São Paulo"
                    credits={credits}
                    instagramUrl="https://www.instagram.com/gabrielz._/reel/DZ8R1i-vQAQ/"
                    username="gabrielz._"
                    imagePreview={IMAGES.gabrielzPortrait}
                    captionSnippet="EP Heisenberg na pista! Videoclipe da faixa 'Retomada' nas ruas de São Paulo. Produção pesada da @door44.studios!"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
