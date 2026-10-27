import React from 'react';
import { 
  Play, 
  Film, 
  Calendar, 
  MapPin, 
  Clapperboard, 
  ExternalLink, 
  Youtube, 
  Instagram 
} from 'lucide-react';
import { InstagramCard } from '../InstagramCard';
import { IMAGES } from '../../assets/images';

interface GleyfyProjectSectionProps {
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

export const GleyfyProjectSection: React.FC<GleyfyProjectSectionProps> = ({
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
            <div className="w-10 h-10 rounded-xl bg-[#e11d24]/10 border border-[#e11d24]/30 flex items-center justify-center text-[#e11d24] shrink-0">
              <Film className="w-5 h-5" />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#e11d24]">
                <span className="w-2 h-2 rounded-full bg-[#e11d24] animate-ping" />
                <span>Case Videoclipe Oficial · Pink Floyd Tribute</span>
              </div>
              <h2 className="font-bebas text-3xl sm:text-5xl text-white tracking-wide distressed-text mt-0.5">
                GLEYFY BRAULY — "ANOTHER BRICK IN THE WALL, PART 2"
              </h2>
            </div>
          </div>

          {/* CTAs: YouTube & Instagram Reel */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://www.youtube.com/watch?v=GqgEWBzCh64"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 bg-[#dc2626] hover:bg-[#b91c1c] text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-lg hover:shadow-[0_0_25px_rgba(220,38,38,0.5)] cursor-pointer"
            >
              <Youtube className="w-4 h-4 fill-white" />
              <span>Assistir no YouTube</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href="https://www.instagram.com/gleyfybraulyy/reel/DC-fxphv1xc/"
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
        <div className="relative w-full aspect-video rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-2 sm:border-4 border-[#27272a] bg-black group transition-all hover:border-[#e11d24]/60">
          {isActive ? (
            <iframe
              src="https://www.youtube-nocookie.com/embed/GqgEWBzCh64?rel=0&modestbranding=1"
              title="Gleyfy Brauly - Another Brick In The Wall, Part 2 (Pink Floyd Cover)"
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
                src={IMAGES.brickWallCover}
                alt="Muro de tijolos brancos - Another Brick in the Wall"
                className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
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
            <span>Gravado no Skina Mooca Bar, São Paulo</span>
            <span aria-hidden="true">·</span>
            <span>Homenagem aos 45 anos do álbum "The Wall"</span>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a 
              href="https://www.youtube.com/watch?v=GqgEWBzCh64" 
              target="_blank" 
              rel="noreferrer"
              className="text-[#e11d24] hover:underline inline-flex items-center gap-1 font-semibold"
            >
              <span>YouTube</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <span className="text-[#3f3f46]">·</span>
            <a 
              href="https://www.instagram.com/gleyfybraulyy/reel/DC-fxphv1xc/" 
              target="_blank" 
              rel="noreferrer"
              className="text-[#dd2a7b] hover:underline inline-flex items-center gap-1 font-semibold"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>Instagram Reel (@gleyfybraulyy)</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* 2 DEDICATED QUADROS */}
        <div className="space-y-12">
          {/* QUADRO 1: GLEYFY BRAULY */}
          <div className="relative rounded-3xl bg-[#0f0f14] border-2 border-[#27272a] overflow-hidden shadow-2xl p-6 sm:p-10 lg:p-12 paper-grunge-bg group hover:border-[#e11d24]/50 transition-colors duration-300">
            {/* Ambient Warm Glow */}
            <div className="absolute -top-12 -left-12 w-80 h-80 bg-[#e11d24]/10 blur-3xl pointer-events-none" />

            <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
              {/* Left Column: Portrait with Newspaper Torn Paper Frame */}
              <div className="lg:col-span-5 flex flex-col items-center justify-center">
                <div className="relative w-full max-w-sm aspect-[4/5] rounded-3xl overflow-hidden p-3 bg-[#e8e6df] shadow-2xl border-4 border-dashed border-[#e4e4e7]/80">
                  {/* Newspaper clipping textured layer behind Gleyfy */}
                  <div className="absolute inset-2 rounded-2xl bg-[#f2efe9] overflow-hidden">
                    <div className="absolute inset-0 p-3 opacity-25 text-[7px] font-serif leading-tight text-black select-none pointer-events-none overflow-hidden">
                      <p className="font-bold text-[11px] mb-1 uppercase tracking-wider">INTERNATIONAL MUSIC SCENE</p>
                      <p className="mb-2">Viral sensation takes over internet with unforgettable classic rock renditions. Fans from all around celebrate the unique charm and energy of Brazilian entertainer.</p>
                      <p>Pink Floyd members acknowledge performance as global homage to legendary 1979 album The Wall.</p>
                    </div>

                    <img
                      src={IMAGES.gleyfyPortrait}
                      alt="Gleyfy Brauly"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top relative z-10"
                    />
                  </div>

                  <div className="absolute inset-0 border-8 border-[#f4f4f0] rounded-3xl pointer-events-none opacity-90" />
                </div>

                <span className="mt-4 font-mono text-xs text-[#a1a1aa] uppercase tracking-wider text-center">
                  Artista & Humorista · Piauí
                </span>
              </div>

              {/* Right Column: Exact Text */}
              <div className="lg:col-span-7 space-y-6">
                <h3 className="font-bebas text-5xl sm:text-7xl text-white tracking-wider distressed-text leading-none">
                  GLEYFY BRAULY
                </h3>

                <div className="space-y-4 text-sm sm:text-base text-[#e4e4e7] leading-relaxed">
                  <p>
                    <strong className="text-white">Gleyfy Brauly</strong> é um cantor e humorista brasileiro natural do Piauí. Ele alcançou fama nacional e internacional na internet por suas versões bem-humoradas, no estilo <em>“embromation”</em> de clássicos da música internacional.
                  </p>
                  <p>
                    O artista viralizou em 2017 ao interpretar a música <strong className="text-white">“Another Brick in The Wall, Part. 2”</strong>, da banda Pink Floyd. O vídeo chamou tanto a atenção que foi compartilhado nas redes sociais por <strong className="text-white">Nick Mason</strong>, baterista oficial da banda, e elogiado pelo tecladista <strong className="text-white">Jon Carin</strong>.
                  </p>
                </div>

                {/* Nick Mason quote card */}
                <div className="p-4 sm:p-5 rounded-2xl bg-[#14141c] border-l-4 border-[#e11d24] border-y border-r border-[#27272a] space-y-2">
                  <span className="text-xs font-mono text-[#e11d24] uppercase font-bold tracking-wider">
                    Reconhecimento Internacional
                  </span>
                  <p className="text-sm text-[#f4f4f5] italic font-serif leading-relaxed">
                    “When you sound this good you don't need all the words!”
                  </p>
                  <span className="text-xs text-[#a1a1aa] block font-mono">
                    — Nick Mason, baterista e cofundador do Pink Floyd
                  </span>
                </div>

                <div className="pt-2 flex items-center justify-between text-xs text-[#71717a] font-mono border-t border-[#27272a]">
                  <span>Case Histórico Door44 Studios</span>
                  <span className="text-[#a1a1aa] font-bold">Página 03</span>
                </div>
              </div>
            </div>
          </div>

          {/* QUADRO 2: SOBRE A PRODUÇÃO */}
          <div className="relative rounded-3xl bg-[#0f0f14] border-2 border-[#27272a] overflow-hidden shadow-2xl p-6 sm:p-10 lg:p-12 paper-grunge-bg group hover:border-[#e11d24]/50 transition-colors duration-300">
            <div className="space-y-8">
              <div>
                <h3 className="font-bebas text-5xl sm:text-7xl text-white tracking-wider distressed-text leading-none">
                  SOBRE A PRODUÇÃO
                </h3>
              </div>

              <p className="text-sm sm:text-base text-[#e4e4e7] leading-relaxed max-w-4xl">
                Videoclipe gravado para o artista <strong className="text-white">Gleyfy Brauly</strong> da música <strong className="text-white">“Another Brick In The Wall, Part 2”</strong> cover da banda Pink Floyd. Lançado dia 29/11 em homenagem aos 45 anos do álbum <strong className="text-white">“The Wall”</strong> (30 de Dezembro de 1979), gravado no <strong className="text-white">Skina Mooca Bar</strong>, na Mooca em São Paulo.
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-2">
                {/* Ficha Técnica */}
                <div className="lg:col-span-7 p-6 rounded-2xl bg-[#14141c] border border-[#27272a] space-y-4">
                  <div className="flex items-center justify-between border-b border-[#27272a] pb-3">
                    <div className="flex items-center gap-2">
                      <Clapperboard className="w-4 h-4 text-[#e11d24]" />
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

                  <div className="pt-4 border-t border-[#27272a] flex flex-wrap items-center gap-3">
                    <a
                      href="https://www.youtube.com/watch?v=GqgEWBzCh64"
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
                        title: 'Another Brick In The Wall, Part 2 (Pink Floyd Cover)',
                        artist: 'Gleyfy Brauly',
                        coverImage: IMAGES.brickWallCover,
                        youtubeId: 'GqgEWBzCh64'
                      })}
                      className="inline-flex items-center gap-2 px-5 py-3 bg-[#1e1e28] hover:bg-[#272736] text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all border border-[#3f3f4e] cursor-pointer"
                    >
                      <Play className="w-4 h-4 fill-white" />
                      <span>Abrir em Tela Cheia</span>
                    </button>
                  </div>
                </div>

                {/* Right: Instagram Card & Location Badge */}
                <div className="lg:col-span-5 space-y-6 flex flex-col items-center">
                  <div className="w-full space-y-3">
                    <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#14141c] border border-[#27272a] text-xs">
                      <MapPin className="w-4 h-4 text-[#e11d24] shrink-0" />
                      <div>
                        <span className="text-white font-bold block">Skina Mooca Bar</span>
                        <span className="text-[#a1a1aa]">Mooca, São Paulo · Cenário do Videoclipe</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#14141c] border border-[#27272a] text-xs">
                      <Calendar className="w-4 h-4 text-[#e11d24] shrink-0" />
                      <div>
                        <span className="text-white font-bold block">Lançado dia 29/11</span>
                        <span className="text-[#a1a1aa]">Homenagem aos 45 anos do álbum "The Wall"</span>
                      </div>
                    </div>
                  </div>

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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
