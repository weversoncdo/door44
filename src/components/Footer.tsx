import React from 'react';
import { HeaderBrand } from './Logo44';
import { Instagram, Youtube, Mail, MessageCircle, MapPin, ExternalLink } from 'lucide-react';

interface FooterProps {
  onNavigateHomeSection: (section: 'INÍCIO' | 'SOBRE' | 'PARCEIROS' | 'ORÇAMENTO' | 'CONTATO') => void;
  onGoToProductions: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigateHomeSection,
  onGoToProductions,
}) => {
  return (
    <footer className="w-full bg-[#050507] border-t border-[#27272a]/80 text-[#a1a1aa] text-xs">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Column 1: Logo & Slogan */}
          <div className="lg:col-span-5 space-y-4">
            <HeaderBrand onClick={() => onNavigateHomeSection('INÍCIO')} />
            
            <p className="text-sm text-[#d4d4d8] max-w-sm leading-relaxed">
              Produtora audiovisual especializada em videoclipes musicais, curta e longa-metragem para todos os gêneros artísticos.
            </p>

            <p className="text-xs text-[#71717a] italic">
              "Door44 Studios – Entre, fique à vontade e surpreenda-se."
            </p>
          </div>

          {/* Column 2: Endereço & Localização */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-bebas text-lg tracking-wider text-white">
              ENDEREÇO & BASE DE PRODUÇÃO
            </h4>

            <div className="space-y-2 text-xs text-[#d4d4d8]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#e11d24] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">São Paulo — SP, Brasil</span>
                  <span className="text-[#a1a1aa]">Mooca, Vila Madalena & Avenida Paulista</span>
                </div>
              </div>
              <p className="text-[11px] text-[#71717a] pl-6.5">
                Produções em estúdio e externas em todo o território nacional.
              </p>
            </div>
          </div>

          {/* Column 3: Redes Sociais com Ícones */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-bebas text-lg tracking-wider text-white">
              REDES SOCIAIS OFICIAIS
            </h4>

            <p className="text-xs text-[#71717a]">
              Acompanhe lançamentos, clipes e bastidores:
            </p>

            {/* Social Icons row */}
            <div className="flex items-center gap-3 pt-1">
              {/* Instagram */}
              <a
                href="https://instagram.com/door44.studios"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram @door44.studios"
                className="w-10 h-10 rounded-xl bg-[#14141a] hover:bg-[#e11d24] border border-[#27272a] hover:border-[#e11d24] text-white flex items-center justify-center transition-all group shadow-md"
              >
                <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com/@Door44.Studios"
                target="_blank"
                rel="noopener noreferrer"
                title="YouTube @Door44.Studios"
                className="w-10 h-10 rounded-xl bg-[#14141a] hover:bg-[#dc2626] border border-[#27272a] hover:border-[#dc2626] text-white flex items-center justify-center transition-all group shadow-md"
              >
                <Youtube className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>

              {/* TikTok */}
              <a
                href="https://tiktok.com/@door44studios"
                target="_blank"
                rel="noopener noreferrer"
                title="TikTok @door44studios"
                className="w-10 h-10 rounded-xl bg-[#14141a] hover:bg-black border border-[#27272a] hover:border-white/40 text-white flex items-center justify-center transition-all group shadow-md"
              >
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z"/>
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/5511999999999?text=Ol%C3%A1%20Door44%20Studios!%20Vim%20pelo%20site%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto."
                target="_blank"
                rel="noopener noreferrer"
                title="WhatsApp Door44"
                className="w-10 h-10 rounded-xl bg-[#14141a] hover:bg-[#22c55e] border border-[#27272a] hover:border-[#22c55e] text-white flex items-center justify-center transition-all group shadow-md"
              >
                <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>

              {/* Email */}
              <a
                href="mailto:studios.door44@gmail.com"
                title="E-mail studios.door44@gmail.com"
                className="w-10 h-10 rounded-xl bg-[#14141a] hover:bg-[#e11d24] border border-[#27272a] hover:border-[#e11d24] text-white flex items-center justify-center transition-all group shadow-md"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Centralizado ao final da página "Desenvolvido pela Agência WKA" linkado com o site www.agenciawka.com.br */}
      <div className="w-full bg-[#030304] border-t border-[#1a1a22] py-5 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 text-center text-xs text-[#71717a]">
          <span>© {new Date().getFullYear()} Door44 Studios. Todos os direitos reservados.</span>
          <span className="hidden sm:inline">·</span>
          <p className="text-center text-xs text-[#d4d4d8]">
            Desenvolvido pela{' '}
            <a
              href="https://www.agenciawka.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-white hover:text-[#e11d24] transition-colors underline decoration-[#e11d24] decoration-2 underline-offset-4"
            >
              Agência WKA
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
