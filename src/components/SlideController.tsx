import React from 'react';
import { ChevronLeft, ChevronRight, Grid } from 'lucide-react';
import { PAGES_META } from '../types';

interface SlideControllerProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (newPage: number) => void;
  onOpenDeckOverview?: () => void;
}

export const SlideController: React.FC<SlideControllerProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  onOpenDeckOverview,
}) => {
  const formattedPage = String(currentPage).padStart(2, '0');

  const handlePrev = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 pointer-events-none p-4 sm:p-6 flex items-center justify-between">
      {/* Left side: Navigation arrows & slide jumper */}
      <div className="pointer-events-auto flex items-center gap-2 bg-[#121217]/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#27272a] shadow-xl">
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          aria-label="Página anterior"
          className="p-1.5 rounded-full text-[#e4e4e7] hover:text-white hover:bg-[#27272a] disabled:opacity-30 disabled:hover:bg-transparent transition-colors cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <span className="text-xs font-mono text-[#a1a1aa] px-1 select-none">
          <strong className="text-white font-bold">{formattedPage}</strong>
          <span className="mx-1 text-[#52525b]">/</span>
          {String(totalPages).padStart(2, '0')}
        </span>

        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          aria-label="Próxima página"
          className="p-1.5 rounded-full text-[#e4e4e7] hover:text-white hover:bg-[#27272a] disabled:opacity-30 disabled:hover:bg-transparent transition-colors cursor-pointer"
        >
          <ChevronRight className="w-4 h-4" />
        </button>

        {onOpenDeckOverview && (
          <button
            onClick={onOpenDeckOverview}
            title="Ver todas as 14 páginas do arquivo"
            className="ml-1 pl-2 border-l border-[#27272a] p-1 text-[#a1a1aa] hover:text-white transition-colors cursor-pointer"
          >
            <Grid className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* Right side: Exact "Página XX ──" indicator as in the PDF */}
      <div className="pointer-events-auto flex items-center gap-2 text-xs font-mono tracking-wider text-[#a1a1aa] select-none bg-[#09090b]/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-[#27272a]/50">
        <span>Página {formattedPage}</span>
        <span className="w-6 h-[1.5px] bg-[#e11d24]" />
      </div>
    </div>
  );
};
