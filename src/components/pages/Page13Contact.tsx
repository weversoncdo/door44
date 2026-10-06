import React from 'react';
import { Sparkles, MessageCircle, ExternalLink } from 'lucide-react';

export const Page13Contact: React.FC = () => {
  return (
    <section className="relative w-full py-20 lg:py-28 overflow-hidden bg-[#09090c] paper-grunge-bg px-6 sm:px-12 lg:px-20 border-t border-[#27272a]/60">
      <div className="max-w-5xl mx-auto w-full space-y-12 text-center">
        {/* Section Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#e11d24]">
            <Sparkles className="w-4 h-4" />
            <span>Canais Oficiais de Contato</span>
          </div>

          <h2 className="font-bebas text-6xl sm:text-7xl lg:text-8xl tracking-wider text-white distressed-text leading-none">
            CONTATO
          </h2>

          <p className="text-sm text-[#d4d4d8] max-w-xl mx-auto leading-relaxed">
            Conecte-se com a Door44 Studios através das nossas redes e canais oficiais.
            Acompanhe nossas produções, bastidores e novidades diárias.
          </p>
        </div>

        {/* 4 Official Channels with red starburst badges as seen in PDF page 13 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {/* INSTAGRAM */}
          <a
            href="https://instagram.com/door44.studios"
            target="_blank"
            rel="noreferrer"
            className="p-6 rounded-2xl bg-[#121217] border border-[#27272a] hover:border-[#e11d24] transition-all group flex flex-col justify-between shadow-xl cursor-pointer"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[#e11d24] font-bold text-sm">✦</span>
              <span className="text-xs font-mono tracking-[0.2em] uppercase font-bold text-[#a1a1aa] group-hover:text-white transition-colors">
                I N S T A G R A M
              </span>
            </div>
            <span className="text-base font-semibold text-white group-hover:text-[#e11d24] transition-colors">
              @door44.studios
            </span>
          </a>

          {/* YOUTUBE */}
          <a
            href="https://youtube.com/@Door44.Studios"
            target="_blank"
            rel="noreferrer"
            className="p-6 rounded-2xl bg-[#121217] border border-[#27272a] hover:border-[#e11d24] transition-all group flex flex-col justify-between shadow-xl cursor-pointer"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[#e11d24] font-bold text-sm">✦</span>
              <span className="text-xs font-mono tracking-[0.2em] uppercase font-bold text-[#a1a1aa] group-hover:text-white transition-colors">
                Y O U T U B E
              </span>
            </div>
            <span className="text-base font-semibold text-white group-hover:text-[#e11d24] transition-colors">
              @Door44.Studios
            </span>
          </a>

          {/* TIKTOK */}
          <a
            href="https://tiktok.com/@door44studios"
            target="_blank"
            rel="noreferrer"
            className="p-6 rounded-2xl bg-[#121217] border border-[#27272a] hover:border-[#e11d24] transition-all group flex flex-col justify-between shadow-xl cursor-pointer"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[#e11d24] font-bold text-sm">✦</span>
              <span className="text-xs font-mono tracking-[0.2em] uppercase font-bold text-[#a1a1aa] group-hover:text-white transition-colors">
                T I K T O K
              </span>
            </div>
            <span className="text-base font-semibold text-white group-hover:text-[#e11d24] transition-colors">
              @door44studios
            </span>
          </a>

          {/* EMAIL */}
          <a
            href="mailto:studios.door44@gmail.com"
            className="p-6 rounded-2xl bg-[#121217] border border-[#27272a] hover:border-[#e11d24] transition-all group flex flex-col justify-between shadow-xl cursor-pointer"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[#e11d24] font-bold text-sm">✦</span>
              <span className="text-xs font-mono tracking-[0.2em] uppercase font-bold text-[#a1a1aa] group-hover:text-white transition-colors">
                E M A I L
              </span>
            </div>
            <span className="text-xs sm:text-sm font-semibold text-white group-hover:text-[#e11d24] transition-colors break-all">
              studios.door44@gmail.com
            </span>
          </a>
        </div>

        {/* WhatsApp Fast Trigger */}
        <div className="pt-2 flex justify-center">
          <a
            href="https://wa.me/5511999999999?text=Ol%C3%A1%20Door44%20Studios!%20Vim%20pelo%20site%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto."
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold tracking-wider uppercase text-xs transition-colors shadow-[0_0_25px_rgba(34,197,94,0.3)] cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Falar com a Produção no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};

