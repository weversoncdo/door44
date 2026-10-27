import React from 'react';
import { Filter, SlidersHorizontal, ArrowUpDown } from 'lucide-react';

interface AlphabetSortBarProps {
  selectedLetter: string | null;
  onSelectLetter: (letter: string | null) => void;
  sortBy: 'recent' | 'az' | 'za';
  onChangeSortBy: (sort: 'recent' | 'az' | 'za') => void;
  availableLetters: string[];
  totalCount: number;
}

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

export const AlphabetSortBar: React.FC<AlphabetSortBarProps> = ({
  selectedLetter,
  onSelectLetter,
  sortBy,
  onChangeSortBy,
  availableLetters,
  totalCount,
}) => {
  return (
    <div className="w-full bg-[#0c0c11] border-b border-[#27272a]/80 py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        {/* Left: Abecedário Clicável A-Z */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
          <span className="text-[11px] font-mono text-[#a1a1aa] uppercase tracking-wider shrink-0 flex items-center gap-1.5">
            <Filter className="w-3.5 h-3.5 text-[#e11d24]" />
            Índice de Artistas:
          </span>

          <div className="flex items-center gap-1 overflow-x-auto max-w-full py-1">
            {/* Botão TODOS */}
            <button
              onClick={() => onSelectLetter(null)}
              className={`px-2.5 py-1 text-xs font-bold rounded-md transition-all cursor-pointer shrink-0 ${
                selectedLetter === null
                  ? 'bg-[#e11d24] text-white shadow-sm'
                  : 'bg-[#181820] text-[#a1a1aa] hover:text-white hover:bg-[#27272a] border border-[#27272a]'
              }`}
            >
              TODOS
            </button>

            {/* Letras A-Z */}
            {ALPHABET.map((letter) => {
              const hasArtists = availableLetters.includes(letter);
              const isSelected = selectedLetter === letter;

              return (
                <button
                  key={letter}
                  onClick={() => onSelectLetter(isSelected ? null : letter)}
                  title={
                    hasArtists
                      ? `Filtrar artistas com a letra ${letter} (Disponível)`
                      : `Nenhum artista com a letra ${letter} no momento`
                  }
                  className={`relative min-w-[28px] h-7 px-1 text-xs font-bold rounded-md transition-all cursor-pointer flex items-center justify-center shrink-0 ${
                    isSelected
                      ? 'bg-[#e11d24] text-white shadow-[0_0_12px_rgba(225,29,36,0.4)] border border-[#e11d24]'
                      : hasArtists
                      ? 'bg-[#1e1e28] text-white hover:bg-[#e11d24]/20 border border-[#e11d24]/50 hover:border-[#e11d24]'
                      : 'bg-[#131319] text-[#71717a] hover:text-white hover:bg-[#202028] border border-[#27272a]/60'
                  }`}
                >
                  <span>{letter}</span>
                  {hasArtists && !isSelected && (
                    <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-[#e11d24]" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Right: Lista suspensa no canto para ordenar A-Z, Z-A, Mais Recentes */}
        <div className="flex items-center justify-between md:justify-end gap-3 shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-[#27272a]/50">
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-4 h-4 text-[#e11d24] shrink-0" />
            <label htmlFor="sort-dropdown" className="text-xs text-[#a1a1aa] font-medium whitespace-nowrap">
              Organizar por:
            </label>
          </div>

          <div className="relative">
            <select
              id="sort-dropdown"
              value={sortBy}
              onChange={(e) => onChangeSortBy(e.target.value as 'recent' | 'az' | 'za')}
              className="appearance-none bg-[#14141c] text-white text-xs font-semibold py-2 pl-3.5 pr-8 rounded-xl border border-[#27272a] hover:border-[#e11d24]/60 focus:border-[#e11d24] focus:outline-none cursor-pointer transition-colors"
            >
              <option value="recent">Mais Recentes (Ordem de Produção)</option>
              <option value="az">Ordem A-Z (Artistas)</option>
              <option value="za">Ordem Z-A (Artistas)</option>
            </select>
            <ArrowUpDown className="w-3.5 h-3.5 text-[#a1a1aa] pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2" />
          </div>
        </div>
      </div>

      {/* Feedback ativo de filtragem */}
      {selectedLetter && (
        <div className="max-w-7xl mx-auto pt-3 flex flex-wrap items-center justify-between gap-2 text-xs">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#e11d24]/10 border border-[#e11d24]/30 text-[#e11d24] font-medium">
            <span>
              Filtrando artistas com a letra <strong>"{selectedLetter}"</strong>
            </span>
            <span className="text-[#a1a1aa]">
              ({totalCount} {totalCount === 1 ? 'videoclipe' : 'videoclipes'})
            </span>
          </div>

          <button
            onClick={() => onSelectLetter(null)}
            className="text-xs text-[#a1a1aa] hover:text-white transition-colors underline cursor-pointer"
          >
            Limpar filtro (Ver todos)
          </button>
        </div>
      )}
    </div>
  );
};
