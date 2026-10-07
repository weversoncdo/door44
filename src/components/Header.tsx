import React, { useState } from 'react';
import { NavSection, ActiveView } from '../types';
import { HeaderBrand } from './Logo44';
import { X, Play, Users, Send, Info, Home, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  currentSection: NavSection;
  activeView: ActiveView;
  onNavigateHomeSection: (section: 'INÍCIO' | 'SOBRE' | 'PARCEIROS' | 'ORÇAMENTO') => void;
  onGoToProductions: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentSection,
  activeView,
  onNavigateHomeSection,
  onGoToProductions,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { label: NavSection; icon: React.ReactNode; isPage?: boolean }[] = [
    { label: 'INÍCIO', icon: <Home className="w-4 h-4" /> },
    { label: 'SOBRE', icon: <Info className="w-4 h-4" /> },
    { label: 'PRODUÇÕES', icon: <Play className="w-4 h-4" />, isPage: true },
    { label: 'PARCEIROS', icon: <Users className="w-4 h-4" /> },
    { label: 'ORÇAMENTO', icon: <Send className="w-4 h-4" /> },
  ];

  const handleNavClick = (label: NavSection) => {
    if (label === 'PRODUÇÕES') {
      onGoToProductions();
    } else {
      onNavigateHomeSection(label as 'INÍCIO' | 'SOBRE' | 'PARCEIROS' | 'ORÇAMENTO');
    }
    setMobileMenuOpen(false);
  };

  const isItemActive = (label: NavSection) => {
    if (activeView === 'producoes') {
      return label === 'PRODUÇÕES';
    }
    return currentSection === label;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#09090b]/92 backdrop-blur-md border-b border-[#27272a]/70 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between">
        {/* Brand Zone */}
        <div className="flex items-center gap-4">
          <HeaderBrand onClick={() => handleNavClick('INÍCIO')} />
          
          <div className="hidden xl:flex items-center text-[11px] text-[#71717a] font-mono pl-3 border-l border-[#27272a] tracking-wider uppercase">
            <span>Produtora Audiovisual</span>
          </div>
        </div>

        {/* Center Nav Zone - exact PDF structure */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-10">
          {navItems.map((item) => {
            const isActive = isItemActive(item.label);
            return (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.label)}
                className="relative py-2 text-xs lg:text-sm font-semibold tracking-[0.16em] uppercase transition-colors group cursor-pointer flex items-center gap-1.5"
              >
                <span className={isActive ? 'text-white font-bold' : 'text-[#a1a1aa] hover:text-white'}>
                  {item.label}
                </span>

                {/* Red active underline indicator as seen in PDF */}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#e11d24] rounded-full shadow-[0_0_8px_#e11d24]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Zone: CTA Button + Mobile Hamburger */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleNavClick('ORÇAMENTO')}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-[#e11d24] hover:bg-[#b91c1c] rounded-lg transition-all shadow-[0_0_15px_rgba(225,29,36,0.3)] cursor-pointer"
          >
            <span>Orçamento</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* Hamburger button (visible only on mobile / small screens, hidden on desktop) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menu de navegação"
            className="md:hidden p-2 text-[#e4e4e7] hover:text-white rounded-md hover:bg-[#18181b] transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-[#e11d24]" />
            ) : (
              <div className="w-6 h-5 flex flex-col justify-between items-end">
                <span className="w-6 h-[2.5px] bg-white rounded-full" />
                <span className="w-6 h-[2.5px] bg-white rounded-full" />
                <span className="w-6 h-[2.5px] bg-white rounded-full" />
              </div>
            )}
          </button>
        </div>
      </div>

      {/* Red accent line across header with glow */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#e11d24]/40 to-transparent" />

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#09090b]/98 border-b border-[#27272a] px-6 py-6 animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive = isItemActive(item.label);
              return (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.label)}
                  className={`flex items-center justify-between p-3.5 rounded-lg text-sm font-semibold tracking-wider text-left transition-colors cursor-pointer ${
                    isActive 
                      ? 'bg-[#18181b] text-white border-l-4 border-[#e11d24]' 
                      : 'text-[#a1a1aa] hover:bg-[#18181b] hover:text-white'
                  }`}
                >
                  <span className="flex items-center gap-3">
                    {item.icon}
                    {item.label}
                  </span>
                  {item.label === 'PRODUÇÕES' && (
                    <span className="text-[10px] font-mono text-[#e11d24] font-bold px-1.5 py-0.5 rounded bg-[#e11d24]/10 border border-[#e11d24]/30">
                      PÁGINA DEDICADA
                    </span>
                  )}
                </button>
              );
            })}

            <div className="pt-4 mt-2 border-t border-[#27272a]">
              <button
                onClick={() => handleNavClick('ORÇAMENTO')}
                className="w-full py-3 text-center text-xs font-bold uppercase tracking-wider text-white bg-[#e11d24] rounded-lg shadow-lg cursor-pointer"
              >
                Solicitar Orçamento
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

