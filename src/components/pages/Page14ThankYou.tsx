import React from 'react';
import { Geometric44Emblem } from '../Logo44';
import { RotateCcw, MessageCircle, Play } from 'lucide-react';

interface Page14Props {
  onRestart: () => void;
  onGoToProductions: () => void;
  onGoToContact: () => void;
}

export const Page14ThankYou: React.FC<Page14Props> = ({
  onRestart,
  onGoToProductions,
  onGoToContact,
}) => {
  return (
    <section className="relative w-full min-h-[calc(100vh-5rem)] flex flex-col justify-center items-center overflow-hidden bg-[#09090c] paper-grunge-bg px-6 sm:px-12 py-12 text-center">
      {/* Background Stylized 44 Emblem Watermark as seen on Page 14 */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <Geometric44Emblem className="w-[320px] sm:w-[480px] lg:w-[600px] text-white/5" opacity={0.6} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        {/* Giant distressed stamped typography */}
        <h2 className="font-bebas text-6xl sm:text-8xl md:text-9xl tracking-wider text-white distressed-text leading-none drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)]">
          MUITO OBRIGADO
        </h2>

        {/* Subtitle quote exactly as in PDF page 14 */}
        <p className="mt-6 text-sm sm:text-base md:text-lg font-semibold tracking-wide text-[#e4e4e7] uppercase max-w-2xl leading-relaxed">
          NÃO CRIAMOS APENAS PROJETOS E PARCERIAS. CRIAMOS CONEXÕES E AMIZADES AO LONGO DO CAMINHO.
        </p>

        {/* Door44 Signoff */}
        <div className="mt-4 flex items-center gap-2">
          <span className="w-8 h-[2px] bg-[#e11d24]" />
          <span className="font-bebas text-lg tracking-widest text-[#a1a1aa]">
            DOOR44 STUDIOS · 2026
          </span>
          <span className="w-8 h-[2px] bg-[#e11d24]" />
        </div>

        {/* Interactive Action Triggers */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onRestart}
            className="px-6 py-3 rounded-lg bg-[#181820] hover:bg-[#27272a] text-white text-xs font-bold tracking-wider uppercase border border-[#3f3f46] hover:border-white transition-all inline-flex items-center gap-2 cursor-pointer shadow-lg"
          >
            <RotateCcw className="w-4 h-4 text-[#e11d24]" />
            <span>Voltar ao Início (Página 01)</span>
          </button>

          <button
            onClick={onGoToProductions}
            className="px-6 py-3 rounded-lg bg-[#181820] hover:bg-[#27272a] text-white text-xs font-bold tracking-wider uppercase border border-[#3f3f46] hover:border-white transition-all inline-flex items-center gap-2 cursor-pointer shadow-lg"
          >
            <Play className="w-4 h-4 text-[#e11d24]" />
            <span>Rever Produções</span>
          </button>

          <button
            onClick={onGoToContact}
            className="px-6 py-3 rounded-lg bg-[#e11d24] hover:bg-[#b91c1c] text-white text-xs font-bold tracking-wider uppercase transition-all inline-flex items-center gap-2 cursor-pointer shadow-[0_0_25px_rgba(225,29,36,0.4)]"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Iniciar um Projeto Conosco</span>
          </button>
        </div>
      </div>
    </section>
  );
};
