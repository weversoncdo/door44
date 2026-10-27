import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Film, 
  Clapperboard, 
  MessageCircle,
  Clock
} from 'lucide-react';
import { VideoModal } from '../components/VideoModal';
import { AlphabetSortBar } from '../components/productions/AlphabetSortBar';
import { GleyfyProjectSection } from '../components/productions/GleyfyProjectSection';
import { GabrielzProjectSection } from '../components/productions/GabrielzProjectSection';

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
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<'recent' | 'az' | 'za'>('recent');
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

  // List of all artist projects / clips
  const projects = [
    {
      id: 'gleyfy',
      artist: 'Gleyfy Brauly',
      song: 'Another Brick in The Wall, Part 2',
      letter: 'G',
      order: 1, // Primeira produção
    },
    {
      id: 'gabrielz',
      artist: 'Gabrielz',
      song: 'Retomada (Feat. Liz Sacramento)',
      letter: 'G',
      order: 2, // Produção mais recente
    },
  ];

  const availableLetters = Array.from(new Set(projects.map((p) => p.letter.toUpperCase())));

  // Filter projects by letter (if selected)
  const filteredProjects = projects.filter((p) => {
    if (!selectedLetter) return true;
    return p.artist.toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').startsWith(selectedLetter);
  });

  // Sort projects by dropdown value
  const sortedProjects = [...filteredProjects].sort((a, b) => {
    if (sortBy === 'az') {
      return a.artist.localeCompare(b.artist, 'pt-BR');
    }
    if (sortBy === 'za') {
      return b.artist.localeCompare(a.artist, 'pt-BR');
    }
    // 'recent' (Ordem de produção - Mais recente primeiro: Gabrielz order 2, Gleyfy order 1)
    return b.order - a.order;
  });

  return (
    <div className="w-full max-w-full bg-[#08080a] text-white min-h-screen overflow-x-hidden">
      {/* Top Breadcrumb & Return bar */}
      <div className="bg-[#0e0e13] border-b border-[#27272a] sticky top-18 sm:top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#d4d4d8] hover:text-white transition-colors cursor-pointer group shrink-0"
          >
            <ArrowLeft className="w-4 h-4 text-[#e11d24] group-hover:-translate-x-1 transition-transform" />
            <span>Voltar ao Início</span>
          </button>

          <div className="hidden sm:flex items-center gap-3 text-xs text-[#a1a1aa]">
            <span>Navegação Rápida:</span>
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
      <section className="relative overflow-hidden max-w-full bg-gradient-to-b from-[#111117] via-[#09090c] to-[#08080a] py-16 sm:py-24 border-b border-[#27272a]/60">
        {/* Glow ambient background */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[600px] h-[350px] bg-[#e11d24]/10 blur-[100px] pointer-events-none max-w-full" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181822] border border-[#3f3f46] text-[#e11d24] text-xs font-mono tracking-widest uppercase backdrop-blur-md">
            <Film className="w-3.5 h-3.5" />
            <span>Produções Audiovisuais Door44 Studios</span>
          </div>

          <h1 className="font-bebas text-4xl sm:text-7xl lg:text-8xl tracking-wider text-white distressed-text leading-none max-w-5xl mx-auto break-words">
            PRODUÇÕES
          </h1>

          <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#d4d4d8] leading-relaxed">
            Especialistas em transformar canções e narrativas em experiências visuais memoráveis.
            Produção completa de videoclipes musicais para todos os gêneros artísticos.
          </p>

          {/* Capabilities unboxed metadata */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-6 text-xs text-[#a1a1aa] pt-2">
            <span>4K UHD & Câmeras Cinema</span>
            <span aria-hidden="true">·</span>
            <span>Direção Artística & Roteiro</span>
            <span aria-hidden="true">·</span>
            <span>Casting Profissional</span>
            <span aria-hidden="true">·</span>
            <span>Color Grading & Montagem</span>
          </div>

          {/* Filter Bar (Segmented Controls) */}
          <div className="pt-6 flex justify-center w-full max-w-full px-2">
            <div className="flex flex-wrap items-center justify-center gap-1.5 p-1.5 bg-[#121217] border border-[#27272a] rounded-xl max-w-full">
              <button
                onClick={() => setActiveFilter('all')}
                className={`px-3 sm:px-4 py-2 text-[11px] sm:text-xs font-semibold rounded-lg transition-all cursor-pointer text-center ${
                  activeFilter === 'all'
                    ? 'bg-[#e11d24] text-white shadow-md'
                    : 'text-[#a1a1aa] hover:text-white'
                }`}
              >
                Todos os Projetos
              </button>
              <button
                onClick={() => setActiveFilter('videoclipes')}
                className={`px-3 sm:px-4 py-2 text-[11px] sm:text-xs font-semibold rounded-lg transition-all cursor-pointer text-center ${
                  activeFilter === 'videoclipes'
                    ? 'bg-[#e11d24] text-white shadow-md'
                    : 'text-[#a1a1aa] hover:text-white'
                }`}
              >
                Videoclipes Musicais
              </button>
              <button
                onClick={() => setActiveFilter('cinema')}
                className={`px-3 sm:px-4 py-2 text-[11px] sm:text-xs font-semibold rounded-lg transition-all cursor-pointer text-center ${
                  activeFilter === 'cinema'
                    ? 'bg-[#e11d24] text-white shadow-md'
                    : 'text-[#a1a1aa] hover:text-white'
                }`}
              >
                Próximos Lançamentos
              </button>
              <button
                onClick={() => setActiveFilter('makingof')}
                className={`px-3 sm:px-4 py-2 text-[11px] sm:text-xs font-semibold rounded-lg transition-all cursor-pointer text-center ${
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

      {/* Abecedário Clicável & Lista Suspensa de Ordenação */}
      {(activeFilter === 'all' || activeFilter === 'videoclipes' || activeFilter === 'makingof') && (
        <AlphabetSortBar
          selectedLetter={selectedLetter}
          onSelectLetter={setSelectedLetter}
          sortBy={sortBy}
          onChangeSortBy={setSortBy}
          availableLetters={availableLetters}
          totalCount={sortedProjects.length}
        />
      )}

      {/* Renderização Dinâmica dos Videoclipes com Base no Abecedário e Ordenação */}
      {(activeFilter === 'all' || activeFilter === 'videoclipes' || activeFilter === 'makingof') && (
        <>
          {sortedProjects.length === 0 ? (
            <div className="py-24 px-4 text-center max-w-xl mx-auto space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-[#14141c] border border-[#27272a] text-[#e11d24] flex items-center justify-center mx-auto text-3xl font-bebas shadow-inner">
                {selectedLetter}
              </div>
              <h3 className="font-bebas text-3xl sm:text-4xl text-white tracking-wide">
                NENHUM ARTISTA ENCONTRADO COM A LETRA "{selectedLetter}"
              </h3>
              <p className="text-sm text-[#a1a1aa] leading-relaxed">
                Ainda não cadastramos clipes para artistas com a inicial <strong className="text-white">"{selectedLetter}"</strong>.
                No momento, você pode conferir as produções na letra <strong className="text-[#e11d24]">G</strong> (Gabrielz e Gleyfy Brauly) ou visualizar o catálogo completo.
              </p>
              <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                <button
                  onClick={() => setSelectedLetter('G')}
                  className="px-5 py-2.5 bg-[#e11d24] hover:bg-[#b91c1c] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all cursor-pointer shadow-lg hover:shadow-[0_0_20px_rgba(225,29,36,0.5)]"
                >
                  Ver Artistas na Letra G (Gabrielz & Gleyfy)
                </button>
                <button
                  onClick={() => setSelectedLetter(null)}
                  className="px-5 py-2.5 bg-[#181820] hover:bg-[#27272a] text-[#a1a1aa] hover:text-white text-xs font-bold uppercase tracking-wider rounded-xl border border-[#27272a] transition-all cursor-pointer"
                >
                  Ver Todos os Clipes
                </button>
              </div>
            </div>
          ) : (
            sortedProjects.map((project) => {
              if (project.id === 'gleyfy') {
                return (
                  <GleyfyProjectSection
                    key="gleyfy"
                    isActive={isGleyfyVideoActive}
                    onToggleVideo={() => setIsGleyfyVideoActive(true)}
                    onOpenModal={setSelectedVideo}
                    credits={gleyfyCredits}
                  />
                );
              }
              if (project.id === 'gabrielz') {
                return (
                  <GabrielzProjectSection
                    key="gabrielz"
                    isActive={isGabrielzVideoActive}
                    onToggleVideo={() => setIsGabrielzVideoActive(true)}
                    onOpenModal={setSelectedVideo}
                    credits={gabrielzCredits}
                  />
                );
              }
              return null;
            })
          )}
        </>
      )}

      {/* ADDITIONAL SECTION: PRÓXIMOS LANÇAMENTOS */}
      {(activeFilter === 'all' || activeFilter === 'cinema') && (
        <section className="py-16 sm:py-24 bg-[#0a0a0e] border-b border-[#27272a]/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <h2 className="font-bebas text-4xl sm:text-6xl text-white tracking-wide">
                PRÓXIMOS LANÇAMENTOS
              </h2>
              <p className="text-sm text-[#a1a1aa]">
                Novas produções de videoclipes musicais em desenvolvimento pela Door44 Studios com padrão visual de alta qualidade.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Card 1: Em Produção */}
              <div className="bg-[#121217] border border-[#27272a] hover:border-amber-500/50 rounded-2xl p-7 sm:p-9 transition-all flex flex-col justify-between relative overflow-hidden group shadow-xl">
                <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none group-hover:bg-amber-500/10 transition-colors" />

                <div className="space-y-6 relative z-10">
                  <div className="flex items-center justify-between gap-3 flex-wrap">
                    <span className="px-3 py-1 rounded bg-[#e11d24] text-xs font-bold uppercase tracking-wider text-white">
                      Vídeoclipe
                    </span>
                    <div className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/40 text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2 shadow-sm">
                      <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                      Em Produção
                    </div>
                  </div>

                  <div className="flex items-start gap-4 pt-1">
                    <div className="w-13 h-13 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0 shadow-inner">
                      <Clapperboard className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-[#a1a1aa] uppercase tracking-wider">Door44 Studios</span>
                      <h3 className="font-bebas text-3xl sm:text-4xl text-white tracking-wide">
                        EM PRODUÇÃO
                      </h3>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center gap-3.5 text-amber-200">
                    <Clock className="w-5 h-5 text-amber-400 shrink-0" />
                    <div>
                      <p className="text-sm font-bold text-white uppercase tracking-wider">Em Produção</p>
                      <p className="text-xs text-amber-300 font-medium">Em breve estará disponível</p>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#a1a1aa] leading-relaxed">
                    Projeto de vídeoclipe musical em desenvolvimento pela Door44 Studios. Roteiro original, direção de fotografia em 4K e pós-produção em andamento.
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#27272a] flex items-center justify-between text-xs relative z-10">
                  <span className="text-amber-400 font-semibold flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                    Em Produção
                  </span>
                  <span className="text-[#e4e4e7] font-mono text-xs">Em breve estará disponível</span>
                </div>
              </div>

              {/* Card 2: Em Produção */}
              <div className="bg-[#121217] border border-[#27272a] hover:border-amber-500/50 rounded-2xl p-7 sm:p-9 transition-all flex flex-col justify-between relative overflow-hidden group shadow-xl">
                <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none group-hover:bg-amber-500/10 transition-colors" />

                <div className="space-y-6 relative z-10">
                  <div className="flex items-center justify-between gap-3 flex-wrap">
                    <span className="px-3 py-1 rounded bg-[#3b82f6] text-xs font-bold uppercase tracking-wider text-white">
                      Vídeoclipe
                    </span>
                    <div className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/40 text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2 shadow-sm">
                      <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                      Em Produção
                    </div>
                  </div>

                  <div className="flex items-start gap-4 pt-1">
                    <div className="w-13 h-13 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0 shadow-inner">
                      <Film className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-[#a1a1aa] uppercase tracking-wider">Door44 Studios</span>
                      <h3 className="font-bebas text-3xl sm:text-4xl text-white tracking-wide">
                        EM PRODUÇÃO
                      </h3>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center gap-3.5 text-amber-200">
                    <Clock className="w-5 h-5 text-amber-400 shrink-0" />
                    <div>
                      <p className="text-sm font-bold text-white uppercase tracking-wider">Em Produção</p>
                      <p className="text-xs text-amber-300 font-medium">Em breve estará disponível</p>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#a1a1aa] leading-relaxed">
                    Projeto de vídeoclipe musical em desenvolvimento pela Door44 Studios. Produção executiva, captação e narrativa com padrão cinematográfico internacional.
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#27272a] flex items-center justify-between text-xs relative z-10">
                  <span className="text-amber-400 font-semibold flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                    Em Produção
                  </span>
                  <span className="text-[#e4e4e7] font-mono text-xs">Em breve estará disponível</span>
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
              COMO TRANSFORMAMOS SUA MÚSICA EM VÍDEOCLIPE
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
            PRONTO PARA PRODUZIR SEU PRÓXIMO CLIPE?
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
