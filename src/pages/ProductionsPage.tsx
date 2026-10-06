import React, { useState } from 'react';
import { 
  Play, 
  ArrowLeft, 
  Film, 
  Music, 
  Sparkles, 
  Calendar, 
  MapPin, 
  Clapperboard, 
  Share2, 
  ExternalLink, 
  SlidersHorizontal,
  Flame,
  Camera,
  Layers,
  CheckCircle2,
  Tv,
  MessageCircle,
  Youtube,
  Instagram
} from 'lucide-react';
import { HeaderBrand } from '../components/Logo44';
import { InstagramCard } from '../components/InstagramCard';
import { VideoModal } from '../components/VideoModal';
import { IMAGES } from '../assets/images';

interface ProductionsPageProps {
  onBackToHome: () => void;
  onNavigateSection: (section: 'INÍCIO' | 'SOBRE' | 'PARCEIROS' | 'CONTATO') => void;
}

type ProjectFilter = 'all' | 'videoclipes' | 'cinema' | 'makingof';

export const ProductionsPage: React.FC<ProductionsPageProps> = ({ 
  onBackToHome,
  onNavigateSection
}) => {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>('all');
  const [isGleyfyVideoActive, setIsGleyfyVideoActive] = useState<boolean>(true);
  const [isGabrielzVideoActive, setIsGabrielzVideoActive] = useState<boolean>(true);
  const [selectedVideo, setSelectedVideo] = useState<{
    isOpen: boolean;
    title: string;
    artist: string;
    coverImage?: string;
    youtubeId?: string;
  }>({
    isOpen: false,
    title: '',
    artist: '',
    youtubeId: undefined,
  });

  // Credits data exactly from the PDF
  const gleyfyCredits = [
    { role: 'Produtor Executivo', name: 'Weverson Duarte' },
    { role: 'Diretor', name: 'Pedro Turra' },
    { role: '1ª Assistente de Direção', name: 'Stephanie Cristini' },
    { role: 'Roteiro', name: 'Weverson Duarte e Gleyfy Brauly' },
    { role: 'Operador de Câmera', name: 'Eric Griecco' },
    { role: 'Montador', name: 'Eric Griecco' },
    { role: 'Colorista', name: 'Eric Griecco' },
    { role: 'Maquiagem', name: 'Stephanie Cristini' },
    { role: 'Making Of', name: 'Stephanie Cristini' },
    { role: 'Coordenador de Transportes', name: 'Diogo Travagin' },
  ];

  const gabrielzCredits = [
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
    <div className="w-full bg-[#08080a] text-white min-h-screen">
      {/* Top Breadcrumb & Return bar */}
      <div className="bg-[#0e0e13] border-b border-[#27272a] sticky top-18 sm:top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#d4d4d8] hover:text-white transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 text-[#e11d24] group-hover:-translate-x-1 transition-transform" />
            <span>Voltar ao Início</span>
          </button>

          <div className="flex items-center gap-3 text-xs text-[#a1a1aa]">
            <span className="hidden sm:inline">Navegação Rápida:</span>
            <button 
              onClick={() => onNavigateSection('SOBRE')} 
              className="hover:text-white transition-colors cursor-pointer"
            >
              Sobre Nós
            </button>
            <span>·</span>
            <button 
              onClick={() => onNavigateSection('PARCEIROS')} 
              className="hover:text-white transition-colors cursor-pointer"
            >
              Parceiros
            </button>
            <span>·</span>
            <button 
              onClick={() => onNavigateSection('CONTATO')} 
              className="hover:text-white transition-colors cursor-pointer text-[#e11d24]"
            >
              Solicitar Orçamento
            </button>
          </div>
        </div>
      </div>

      {/* Hero Banner da Página de Produções */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#111117] via-[#09090c] to-[#08080a] py-16 sm:py-24 border-b border-[#27272a]/60">
        {/* Glow ambient background */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#e11d24]/10 blur-[120px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181822] border border-[#3f3f46] text-[#e11d24] text-xs font-mono tracking-widest uppercase backdrop-blur-md">
            <Film className="w-3.5 h-3.5" />
            <span>Produções Audiovisuais Door44 Studios</span>
          </div>

          <h1 className="font-bebas text-5xl sm:text-7xl lg:text-8xl tracking-wider text-white distressed-text leading-none max-w-5xl mx-auto">
            PRODUÇÕES & OBRAS AUDIOVISUAIS
          </h1>

          <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#d4d4d8] leading-relaxed">
            Especialistas em transformar canções e narrativas em experiências visuais memoráveis.
            Produção completa de videoclipes musicais, curta e longa-metragem para todos os gêneros artísticos.
          </p>

          {/* Capabilities unboxed metadata */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-[#a1a1aa] pt-2">
            <span>4K UHD & Câmeras Cinema</span>
            <span aria-hidden="true">·</span>
            <span>Direção Artística & Roteiro</span>
            <span aria-hidden="true">·</span>
            <span>Casting Profissional</span>
            <span aria-hidden="true">·</span>
            <span>Color Grading & Montagem</span>
          </div>

          {/* Filter Bar (Segmented Controls) */}
          <div className="pt-6 flex justify-center">
            <div className="inline-flex items-center gap-1.5 p-1.5 bg-[#121217] border border-[#27272a] rounded-xl">
              <button
                onClick={() => setActiveFilter('all')}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  activeFilter === 'all'
                    ? 'bg-[#e11d24] text-white shadow-md'
                    : 'text-[#a1a1aa] hover:text-white'
                }`}
              >
                Todos os Projetos
              </button>
              <button
                onClick={() => setActiveFilter('videoclipes')}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  activeFilter === 'videoclipes'
                    ? 'bg-[#e11d24] text-white shadow-md'
                    : 'text-[#a1a1aa] hover:text-white'
                }`}
              >
                Videoclipes Musicais
              </button>
              <button
                onClick={() => setActiveFilter('cinema')}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  activeFilter === 'cinema'
                    ? 'bg-[#e11d24] text-white shadow-md'
                    : 'text-[#a1a1aa] hover:text-white'
                }`}
              >
                Curta & Longa-Metragem
              </button>
              <button
                onClick={() => setActiveFilter('makingof')}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  activeFilter === 'makingof'
                    ? 'bg-[#e11d24] text-white shadow-md'
                    : 'text-[#a1a1aa] hover:text-white'
                }`}
              >
                Fichas Técnicas & Bastidores
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT 01: GLEYFY BRAULY - ANOTHER BRICK IN THE WALL */}
      {(activeFilter === 'all' || activeFilter === 'videoclipes' || activeFilter === 'makingof') && (
        <section className="py-16 sm:py-24 border-b border-[#27272a]/60 paper-grunge-bg relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            {/* Project Header Bar with Direct YouTube Link */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-[#27272a] pb-5">
              <div className="flex items-center gap-3">
                <span className="font-bebas text-3xl text-[#e11d24]">01</span>
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
              {isGleyfyVideoActive ? (
                <iframe
                  src="https://www.youtube-nocookie.com/embed/GqgEWBzCh64?rel=0&modestbranding=1"
                  title="Gleyfy Brauly - Another Brick In The Wall, Part 2 (Pink Floyd Cover)"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              ) : (
                <div 
                  onClick={() => setIsGleyfyVideoActive(true)}
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

            {/* 2 DEDICATED QUADROS EXACTLY MATCHING THE USER'S ATTACHED IMAGES */}
            <div className="space-y-12">
              {/* QUADRO 1: GLEYFY BRAULY (Exact Match to Image 1 / Página 03) */}
              <div className="relative rounded-3xl bg-[#0f0f14] border-2 border-[#27272a] overflow-hidden shadow-2xl p-6 sm:p-10 lg:p-12 paper-grunge-bg group hover:border-[#e11d24]/50 transition-colors duration-300">
                {/* Ambient Warm Glow */}
                <div className="absolute -top-12 -left-12 w-80 h-80 bg-[#e11d24]/10 blur-3xl pointer-events-none" />

                <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
                  {/* Left Column: Portrait with Newspaper Torn Paper Frame (Exact style from Image 1) */}
                  <div className="lg:col-span-5 flex flex-col items-center justify-center">
                    <div className="relative w-full max-w-sm aspect-[4/5] rounded-3xl overflow-hidden p-3 bg-[#e8e6df] shadow-2xl border-4 border-dashed border-[#e4e4e7]/80">
                      {/* Newspaper clipping textured layer behind Gleyfy */}
                      <div className="absolute inset-2 rounded-2xl bg-[#f2efe9] overflow-hidden">
                        {/* Faint newspaper print columns */}
                        <div className="absolute inset-0 p-3 opacity-25 text-[7px] font-serif leading-tight text-black select-none pointer-events-none overflow-hidden">
                          <p className="font-bold text-[11px] mb-1 uppercase tracking-wider">INTERNATIONAL MUSIC SCENE</p>
                          <p className="mb-2">Viral sensation takes over internet with unforgettable classic rock renditions. Fans from all around celebrate the unique charm and energy of Brazilian entertainer.</p>
                          <p>Pink Floyd members acknowledge performance as global homage to legendary 1979 album The Wall.</p>
                        </div>

                        {/* Gleyfy Brauly Cutout Photo with thumbs up and red glasses */}
                        <img
                          src={IMAGES.gleyfyPortrait}
                          alt="Gleyfy Brauly"
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover object-top relative z-10"
                        />
                      </div>

                      {/* Torn paper white contour outline */}
                      <div className="absolute inset-0 border-8 border-[#f4f4f0] rounded-3xl pointer-events-none opacity-90" />
                    </div>

                    <span className="mt-4 font-mono text-xs text-[#a1a1aa] uppercase tracking-wider text-center">
                      Artista & Humorista · Piauí
                    </span>
                  </div>

                  {/* Right Column: Exact Text from Image 1 */}
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

                    {/* Footer tag matching Image 1 */}
                    <div className="pt-2 flex items-center justify-between text-xs text-[#71717a] font-mono border-t border-[#27272a]">
                      <span>Case Histórico Door44 Studios</span>
                      <span className="text-[#a1a1aa] font-bold">Página 03</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* QUADRO 2: SOBRE A PRODUÇÃO (Exact Match to Image 2) */}
              <div className="relative rounded-3xl bg-[#0f0f14] border-2 border-[#27272a] overflow-hidden shadow-2xl p-6 sm:p-10 lg:p-12 paper-grunge-bg group hover:border-[#e11d24]/50 transition-colors duration-300">
                <div className="space-y-8">
                  {/* Header Title from Image 2 */}
                  <div>
                    <h3 className="font-bebas text-5xl sm:text-7xl text-white tracking-wider distressed-text leading-none">
                      SOBRE A PRODUÇÃO
                    </h3>
                  </div>

                  {/* Synopsis Text from Image 2 */}
                  <p className="text-sm sm:text-base text-[#e4e4e7] leading-relaxed max-w-4xl">
                    Videoclipe gravado para o artista <strong className="text-white">Gleyfy Brauly</strong> da música <strong className="text-white">“Another Brick In The Wall, Part 2”</strong> cover da banda Pink Floyd. Lançado dia 29/11 em homenagem aos 45 anos do álbum <strong className="text-white">“The Wall”</strong> (30 de Dezembro de 1979), gravado no <strong className="text-white">Skina Mooca Bar</strong>, na Mooca em São Paulo.
                  </p>

                  {/* Two Column Layout: Ficha Técnica (Left) + Instagram & Backstage (Right) */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-2">
                    {/* Ficha Técnica exactly from Image 2 */}
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
                        {gleyfyCredits.map((c, i) => (
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
                          onClick={() => setSelectedVideo({
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
                        credits={gleyfyCredits}
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
      )}

      {/* PROJECT 02: GABRIELZ - RETOMADA */}
      {(activeFilter === 'all' || activeFilter === 'videoclipes' || activeFilter === 'makingof') && (
        <section className="py-16 sm:py-24 border-b border-[#27272a]/60 paper-grunge-bg relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            {/* Project Header Bar with Direct YouTube Link */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-[#27272a] pb-5">
              <div className="flex items-center gap-3">
                <span className="font-bebas text-3xl text-[#facc15]">02</span>
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
              {isGabrielzVideoActive ? (
                <iframe
                  src="https://www.youtube-nocookie.com/embed/t7SBNfqqpxs?rel=0&modestbranding=1"
                  title="Gabrielz - Retomada (Feat. Liz Sacramento)"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              ) : (
                <div 
                  onClick={() => setIsGabrielzVideoActive(true)}
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
                        {gabrielzCredits.map((c, i) => (
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
                          onClick={() => setSelectedVideo({
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
                        credits={gabrielzCredits}
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
      )}

      {/* ADDITIONAL CINEMA SECTION: CURTAS & LONGAS-METRAGENS */}
      {(activeFilter === 'all' || activeFilter === 'cinema') && (
        <section className="py-16 sm:py-24 bg-[#0a0a0e] border-b border-[#27272a]/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-[#e11d24]">
                Cinema Narrativo & Documental
              </span>
              <h2 className="font-bebas text-4xl sm:text-6xl text-white tracking-wide">
                CURTA & LONGA-METRAGEM
              </h2>
              <p className="text-sm text-[#a1a1aa]">
                Além da excelência em videoclipes musicais, a Door44 Studios desenvolve roteiros originais, curtas e longas ficcionais e documentais com padrão cinematográfico internacional.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Project Card 1 */}
              <div className="bg-[#121217] border border-[#27272a] rounded-2xl overflow-hidden hover:border-[#e11d24]/60 transition-all group flex flex-col">
                <div className="relative aspect-video bg-[#1a1a24] overflow-hidden">
                  <img
                    src={IMAGES.doorLightHero}
                    alt="Entre Portas"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-70"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  <div className="absolute top-4 left-4 px-2.5 py-1 rounded bg-[#e11d24] text-[10px] font-bold uppercase tracking-wider text-white">
                    Curta-Metragem
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-xs font-mono text-[#a1a1aa]">Ficção & Suspense · 4K Anamórfico</span>
                    <h3 className="font-bebas text-3xl text-white">ENTRE PORTAS</h3>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <p className="text-xs sm:text-sm text-[#d4d4d8] leading-relaxed">
                    Obra narrativa que explora a tênue linha entre a memória e a realidade de um fotógrafo recluso. Direção visual com lentes anamórficas e iluminação dramática de alto contraste.
                  </p>
                  <div className="pt-3 border-t border-[#27272a] flex items-center justify-between text-xs text-[#a1a1aa]">
                    <span>Circuito de Festivais</span>
                    <span className="text-white font-mono">18 min · 4K 2.39:1</span>
                  </div>
                </div>
              </div>

              {/* Project Card 2 */}
              <div className="bg-[#121217] border border-[#27272a] rounded-2xl overflow-hidden hover:border-[#e11d24]/60 transition-all group flex flex-col">
                <div className="relative aspect-video bg-[#1a1a24] overflow-hidden">
                  <img
                    src={IMAGES.gabrielzCover}
                    alt="Vozes da Cena"
                    className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-500 opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  <div className="absolute top-4 left-4 px-2.5 py-1 rounded bg-[#3b82f6] text-[10px] font-bold uppercase tracking-wider text-white">
                    Documentário / Longa
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-xs font-mono text-[#a1a1aa]">Música & Cultura · São Paulo</span>
                    <h3 className="font-bebas text-3xl text-white">VOZES DA CENA</h3>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <p className="text-xs sm:text-sm text-[#d4d4d8] leading-relaxed">
                    Série documental investigativa que mergulha na efervescência musical independente paulistana. Depoimentos viscerais de artistas, produtores e os bastidores das gravações.
                  </p>
                  <div className="pt-3 border-t border-[#27272a] flex items-center justify-between text-xs text-[#a1a1aa]">
                    <span>Em Pós-Produção</span>
                    <span className="text-white font-mono">75 min · 4K UHD</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Audiovisual Workflow / Como Trabalhamos */}
      <section className="py-16 sm:py-20 border-b border-[#27272a]/60 bg-[#08080a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#e11d24]">
              Workflow Cinematográfico Door44
            </span>
            <h2 className="font-bebas text-4xl sm:text-5xl text-white">
              COMO TRANSFORMAMOS SUA MÚSICA EM FILME
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-[#111116] border border-[#27272a] space-y-3">
              <span className="font-bebas text-3xl text-[#e11d24]">01</span>
              <h3 className="font-bebas text-xl text-white">CONCEITO & ROTEIRO</h3>
              <p className="text-xs text-[#a1a1aa] leading-relaxed">
                Reunião de alinhamento com o artista, desenvolvimento de roteiro narrativo ou conceitual, decupagem plano a plano e storyboard.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#111116] border border-[#27272a] space-y-3">
              <span className="font-bebas text-3xl text-[#e11d24]">02</span>
              <h3 className="font-bebas text-xl text-white">CASTING & CARACTERIZAÇÃO</h3>
              <p className="text-xs text-[#a1a1aa] leading-relaxed">
                Seleção de elenco com a parceira Cena Class, figurino, locações exclusivas e visagismo artístico com a Cristini Makeup.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#111116] border border-[#27272a] space-y-3">
              <span className="font-bebas text-3xl text-[#e11d24]">03</span>
              <h3 className="font-bebas text-xl text-white">GRAVAÇÃO EM 4K / CINEMA</h3>
              <p className="text-xs text-[#a1a1aa] leading-relaxed">
                Equipamentos de ponta, direção de cena especializada, equipe técnica completa e captação de bastidores e making-of simultâneo.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#111116] border border-[#27272a] space-y-3">
              <span className="font-bebas text-3xl text-[#e11d24]">04</span>
              <h3 className="font-bebas text-xl text-white">MONTAGEM & COLOR GRADING</h3>
              <p className="text-xs text-[#a1a1aa] leading-relaxed">
                Edição rítmica alinhada aos beats da música, color grading cinematográfico para criar a atmosfera visual perfeita e master 4K.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 sm:py-20 bg-gradient-to-t from-[#111117] to-[#08080a] text-center px-4">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="w-12 h-12 rounded-full bg-[#e11d24]/20 border border-[#e11d24] flex items-center justify-center mx-auto text-[#e11d24]">
            <Film className="w-6 h-6" />
          </div>
          <h2 className="font-bebas text-4xl sm:text-6xl text-white tracking-wide">
            PRONTO PARA PRODUZIR SEU PRÓXIMO CLIPE OU FILME?
          </h2>
          <p className="text-sm text-[#d4d4d8]">
            Entre em contato com a Door44 Studios. Desenvolvemos propostas sob medida para artistas independentes, gravadoras e marcas.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onNavigateSection('CONTATO')}
              className="px-6 py-3.5 bg-[#e11d24] hover:bg-[#b91c1c] text-white font-bold tracking-wider uppercase text-xs rounded-lg transition-all shadow-[0_0_30px_rgba(225,29,36,0.4)] cursor-pointer"
            >
              Solicitar Orçamento Agora
            </button>
            <a
              href="https://wa.me/5511999999999?text=Ol%C3%A1%20Door44%20Studios!%20Vi%20a%20p%C3%A1gina%20de%20produ%C3%A7%C3%B5es%20e%20gostaria%20de%20or%C3%A7ar%20um%20videoclipe."
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3.5 bg-[#181820] hover:bg-[#27272a] text-white font-bold tracking-wider uppercase text-xs rounded-lg border border-[#3f3f46] hover:border-white transition-all inline-flex items-center gap-2 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-[#22c55e]" />
              <span>Chamar no WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <VideoModal
        isOpen={selectedVideo.isOpen}
        onClose={() => setSelectedVideo({ isOpen: false, title: '', artist: '' })}
        title={selectedVideo.title}
        artist={selectedVideo.artist}
        coverImage={selectedVideo.coverImage}
        youtubeId={selectedVideo.youtubeId}
      />
    </div>
  );
};
