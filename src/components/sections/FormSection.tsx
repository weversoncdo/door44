import React from 'react';
import { ContactForm } from '../ContactForm';
import { Send, Sparkles } from 'lucide-react';

export const FormSection: React.FC = () => {
  return (
    <section className="relative w-full py-20 lg:py-28 bg-[#0b0b10] border-t border-[#27272a]/60 px-4 sm:px-6 lg:px-8">
      {/* Glow ambient background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#e11d24]/5 blur-[120px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto space-y-10">
        {/* Section Heading strictly for the Form DIV */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181822] border border-[#3f3f46] text-[#e11d24] text-xs font-mono tracking-widest uppercase">
            <Send className="w-3.5 h-3.5" />
            <span>Atendimento Personalizado</span>
          </div>

          <h2 className="font-bebas text-5xl sm:text-6xl lg:text-7xl tracking-wider text-white distressed-text leading-none">
            SOLICITE SEU ORÇAMENTO
          </h2>

          <p className="text-sm text-[#a1a1aa] max-w-lg mx-auto">
            Preencha o formulário abaixo com os detalhes da sua música, curta ou longa-metragem. Retornamos com proposta personalizada em até 24 horas.
          </p>
        </div>

        {/* The Form in its own dedicated space */}
        <div className="flex justify-center">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};
