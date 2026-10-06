import React from 'react';
import { X } from 'lucide-react';
import { PAGES_META } from '../types';

interface DeckOverviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentPage: number;
  onSelectPage: (page: number) => void;
}

export const DeckOverviewModal: React.FC<DeckOverviewModalProps> = ({
  isOpen,
  onClose,
  currentPage,
  onSelectPage,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl max-h-[85vh] bg-[#0f0f14] border border-[#27272a] rounded-2xl flex flex-col overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#27272a] bg-[#09090b]">
          <div>
            <h3 className="font-bebas text-2xl text-white tracking-wider">
              ÍNDICE GERAL DE PÁGINAS (1 - 14)
            </h3>
            <p className="text-xs text-[#a1a1aa]">
              Estrutura idêntica ao arquivo original de apresentação da Door44 Studios
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#a1a1aa] hover:text-white rounded-lg hover:bg-[#27272a] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Grid of 14 slides */}
        <div className="flex-1 overflow-y-auto p-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {PAGES_META.map((p) => {
            const isSelected = p.id === currentPage;
            return (
              <button
                key={p.id}
                onClick={() => {
                  onSelectPage(p.id);
                  onClose();
                }}
                className={`flex flex-col text-left p-3.5 rounded-xl border transition-all cursor-pointer group ${
                  isSelected
                    ? 'bg-[#18181b] border-[#e11d24] ring-1 ring-[#e11d24]'
                    : 'bg-[#121217] border-[#27272a] hover:border-[#52525b] hover:bg-[#18181f]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs font-bold text-[#e11d24]">
                    Pg. {String(p.id).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] uppercase font-semibold text-[#71717a] bg-[#1f1f26] px-1.5 py-0.5 rounded">
                    {p.section}
                  </span>
                </div>
                <h4 className="font-bebas text-lg text-white group-hover:text-[#e11d24] transition-colors line-clamp-1">
                  {p.title}
                </h4>
                {p.subtitle && (
                  <p className="text-[11px] text-[#a1a1aa] line-clamp-1 mt-0.5">
                    {p.subtitle}
                  </p>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
