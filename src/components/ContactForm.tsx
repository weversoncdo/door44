import React, { useState } from 'react';
import { Send, CheckCircle2, MessageSquare, Sparkles } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    artistOrBand: '',
    email: '',
    phone: '',
    projectType: 'Videoclipe',
    budgetRange: 'R$ 5.000 a R$ 15.000',
    description: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleWhatsAppRedirect = () => {
    const text = encodeURIComponent(
      `Olá Door44 Studios! Gostaria de um orçamento para um projeto de ${formData.projectType}.\n\nNome/Artista: ${formData.name || formData.artistOrBand}\nTelefone: ${formData.phone}\nIdeia: ${formData.description || 'Videoclipe musical com produção completa.'}`
    );
    window.open(`https://wa.me/5511999999999?text=${text}`, '_blank');
  };

  return (
    <div className="w-full max-w-xl mx-auto bg-[#101015]/90 border border-[#27272a] rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-2xl">
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-1">
          <Sparkles className="w-4 h-4 text-[#e11d24]" />
          <span className="text-xs uppercase font-bold tracking-widest text-[#e11d24]">
            Vamos Criar Juntos
          </span>
        </div>
        <h3 className="font-bebas text-2xl sm:text-3xl text-white tracking-wide">
          SOLICITE SEU ORÇAMENTO
        </h3>
        <p className="text-xs text-[#a1a1aa] mt-1">
          Conte sobre seu clipe, curta ou longa-metragem. Retornamos em até 24h.
        </p>
      </div>

      {submitted ? (
        <div className="p-6 bg-[#181820] border border-[#27272a] rounded-xl text-center space-y-4 animate-in zoom-in-95 duration-200">
          <CheckCircle2 className="w-12 h-12 text-[#e11d24] mx-auto" />
          <h4 className="font-bebas text-2xl text-white">PROPOSTA ENVIADA COM SUCESSO!</h4>
          <p className="text-xs text-[#a1a1aa] max-w-md mx-auto">
            A equipe Door44 Studios já recebeu suas informações e entrará em contato para alinhar roteiro, cronograma e direção artística.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={handleWhatsAppRedirect}
              className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#22c55e] hover:bg-[#16a34a] rounded-lg transition-colors inline-flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              Falar direto pelo WhatsApp
            </button>
            <button
              onClick={() => setSubmitted(false)}
              className="px-4 py-2 text-xs font-semibold text-[#a1a1aa] hover:text-white transition-colors cursor-pointer"
            >
              Enviar outra mensagem
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-[#d4d4d8] mb-1">
                Seu Nome *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Ex: Pedro Henrique"
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#181820] border border-[#27272a] text-sm text-white focus:outline-none focus:border-[#e11d24] placeholder:text-[#52525b] transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-[#d4d4d8] mb-1">
                Artista ou Banda
              </label>
              <input
                type="text"
                value={formData.artistOrBand}
                onChange={(e) => setFormData({ ...formData, artistOrBand: e.target.value })}
                placeholder="Ex: Gabrielz / Pink Floyd Cover"
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#181820] border border-[#27272a] text-sm text-white focus:outline-none focus:border-[#e11d24] placeholder:text-[#52525b] transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-[#d4d4d8] mb-1">
                E-mail *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="seuemail@exemplo.com"
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#181820] border border-[#27272a] text-sm text-white focus:outline-none focus:border-[#e11d24] placeholder:text-[#52525b] transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-[#d4d4d8] mb-1">
                WhatsApp / Telefone *
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="(11) 98765-4321"
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#181820] border border-[#27272a] text-sm text-white focus:outline-none focus:border-[#e11d24] placeholder:text-[#52525b] transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-[#d4d4d8] mb-1">
                Tipo de Produção
              </label>
              <select
                value={formData.projectType}
                onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#181820] border border-[#27272a] text-sm text-white focus:outline-none focus:border-[#e11d24] transition-colors"
              >
                <option value="Videoclipe">Videoclipe Musical</option>
                <option value="Curta-metragem">Curta-metragem</option>
                <option value="Longa-metragem">Longa-metragem</option>
                <option value="Cobertura / Live Session">Cobertura / Live Session</option>
                <option value="Parceria Comercial">Parceria Comercial / Casting</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-[#d4d4d8] mb-1">
                Previsão de Produção
              </label>
              <select
                value={formData.budgetRange}
                onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#181820] border border-[#27272a] text-sm text-white focus:outline-none focus:border-[#e11d24] transition-colors"
              >
                <option value="Urgente (Este mês)">Urgente (Este mês)</option>
                <option value="Próximos 2 a 3 meses">Próximos 2 a 3 meses</option>
                <option value="Planejamento / Segundo Semestre">Planejamento / Futuro</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-[#d4d4d8] mb-1">
              Descreva a ideia ou conceito do projeto
            </label>
            <textarea
              rows={3}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Gênero musical, locações desejadas, referências visuais ou roteiro..."
              className="w-full px-3.5 py-2.5 rounded-lg bg-[#181820] border border-[#27272a] text-sm text-white focus:outline-none focus:border-[#e11d24] placeholder:text-[#52525b] transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 px-5 rounded-lg bg-[#e11d24] hover:bg-[#b91c1c] text-white font-bold tracking-wider uppercase text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(225,29,36,0.3)] disabled:opacity-50"
          >
            {loading ? (
              <span>Enviando proposta...</span>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Enviar Solicitação de Orçamento</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
};
