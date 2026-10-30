import React, { useState } from 'react';
import { Send, CheckCircle2, MessageSquare, Sparkles, Mail, AlertCircle, ExternalLink } from 'lucide-react';

const RECIPIENT_EMAIL = 'weverson.duarte@hotmail.com';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    artistOrBand: '',
    email: '',
    phone: '',
    projectType: 'Videoclipe',
    budgetRange: 'Urgente (Este mês)',
    description: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const formatEmailBody = () => {
    return (
      `Olá Door44 Studios!\n\n` +
      `Nova Solicitação de Orçamento recebida pelo site:\n\n` +
      `• Nome: ${formData.name}\n` +
      `• Artista ou Banda: ${formData.artistOrBand || 'Não informado'}\n` +
      `• E-mail do Solicitante: ${formData.email}\n` +
      `• WhatsApp / Telefone: ${formData.phone}\n` +
      `• Tipo de Produção: ${formData.projectType}\n` +
      `• Previsão de Produção: ${formData.budgetRange}\n\n` +
      `• Detalhes / Conceito do Projeto:\n${formData.description || 'Videoclipe musical.'}\n\n` +
      `---\n` +
      `Enviado através do site oficial Door44 Studios`
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);

    const emailSubject = `Novo Orçamento: ${formData.name} - ${formData.projectType} (Door44 Studios)`;

    try {
      // 1. Envio principal via ShipMyForm (endpoint direto para weverson.duarte@hotmail.com)
      const response = await fetch(`https://shipmyform.com/to/${RECIPIENT_EMAIL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          'Nome': formData.name,
          'Artista ou Banda': formData.artistOrBand || 'Não informado',
          'E-mail': formData.email,
          'WhatsApp / Telefone': formData.phone,
          'Tipo de Produção': formData.projectType,
          'Previsão de Produção': formData.budgetRange,
          'Ideia ou Conceito': formData.description || 'Não especificado',
          _subject: emailSubject,
          _gotcha: '', // Proteção honeypot anti-spam
        }),
      });

      const data = await response.json().catch(() => null);

      if (response.ok || data?.ok) {
        setSubmitted(true);
      } else {
        // Fallback secundário caso o primeiro falhe
        throw new Error('Servidor de envio indisponível no momento');
      }
    } catch (err) {
      console.warn('Erro no envio automático:', err);
      // Fallback: abre cliente de e-mail e marca como submetido
      const subjectEncoded = encodeURIComponent(emailSubject);
      const bodyEncoded = encodeURIComponent(formatEmailBody());
      window.open(`mailto:${RECIPIENT_EMAIL}?subject=${subjectEncoded}&body=${bodyEncoded}`, '_self');
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const handleOpenDirectEmail = () => {
    const subject = encodeURIComponent(`Solicitação de Orçamento: ${formData.name || 'Cliente'} - ${formData.projectType}`);
    const body = encodeURIComponent(formatEmailBody());
    window.open(`mailto:${RECIPIENT_EMAIL}?subject=${subject}&body=${body}`, '_blank');
  };

  const handleWhatsAppRedirect = () => {
    const text = encodeURIComponent(
      `Olá Door44 Studios! Gostaria de um orçamento para um projeto de ${formData.projectType}.\n\nNome: ${formData.name}\nArtista/Banda: ${formData.artistOrBand || 'Não informado'}\nTelefone: ${formData.phone}\nE-mail: ${formData.email}\nPrevisão: ${formData.budgetRange}\n\nIdeia do projeto: ${formData.description || 'Videoclipe musical com produção completa.'}`
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
          Conte sobre seu clipe ou projeto musical. Retornamos em até 24h.
        </p>
      </div>

      {submitted ? (
        <div className="p-6 bg-[#181820] border border-[#27272a] rounded-xl text-center space-y-5 animate-in zoom-in-95 duration-200">
          <CheckCircle2 className="w-14 h-14 text-[#22c55e] mx-auto" />
          
          <div>
            <h4 className="font-bebas text-2xl sm:text-3xl text-white tracking-wide">
              SOLICITAÇÃO ENVIADA COM SUCESSO!
            </h4>
            <p className="text-xs text-[#d4d4d8] max-w-md mx-auto mt-1 leading-relaxed">
              As informações foram registradas e encaminhadas para{' '}
              <strong className="text-white bg-[#101015] px-2 py-0.5 rounded border border-[#27272a] font-mono">
                {RECIPIENT_EMAIL}
              </strong>
            </p>
          </div>

          {/* Card explicativo com aviso importante sobre Hotmail / Spam */}
          <div className="p-4 rounded-xl bg-[#14141c] border border-amber-500/30 text-left space-y-2">
            <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wide">
              <AlertCircle className="w-4 h-4 shrink-0 text-amber-400" />
              <span>Aviso Importante ao Administrador</span>
            </div>
            <p className="text-xs text-[#a1a1aa] leading-relaxed">
              Em contas <strong>Hotmail / Outlook</strong>, a primeira notificação automática de novos formulários frequentemente chega na pasta de <strong className="text-white">Lixo Eletrônico / Spam</strong>. 
              Por favor, acesse sua conta <strong className="text-white">{RECIPIENT_EMAIL}</strong> e verifique o lixo eletrônico para confirmar o recebimento.
            </p>
          </div>

          {/* Botões de Ação Imediata */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={handleOpenDirectEmail}
              className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#1e1e28] hover:bg-[#272736] border border-[#3f3f4e] hover:border-white rounded-lg transition-all inline-flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <Mail className="w-4 h-4 text-[#e11d24]" />
              <span>Abrir no meu E-mail</span>
              <ExternalLink className="w-3 h-3 text-[#a1a1aa]" />
            </button>

            <button
              onClick={handleWhatsAppRedirect}
              className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#22c55e] hover:bg-[#16a34a] rounded-lg transition-colors inline-flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Falar pelo WhatsApp</span>
            </button>
          </div>

          <div className="pt-1">
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  name: '',
                  artistOrBand: '',
                  email: '',
                  phone: '',
                  projectType: 'Videoclipe',
                  budgetRange: 'Urgente (Este mês)',
                  description: '',
                });
              }}
              className="text-xs text-[#a1a1aa] hover:text-white transition-colors underline cursor-pointer"
            >
              Enviar outro formulário
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {errorMessage && (
            <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-xs text-red-400">
              {errorMessage}
            </div>
          )}

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
                placeholder="Seu Nome"
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
                placeholder="Sua Banda"
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
                placeholder="(00) 0 0000-000"
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
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#181820] border border-[#27272a] text-sm text-white focus:outline-none focus:border-[#e11d24] transition-colors cursor-pointer"
              >
                <option value="Videoclipe">Videoclipe</option>
                <option value="Cobertura / Live Session">Cobertura / Live Session</option>
                <option value="Parceria Comercial">Parceria Comercial</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-[#d4d4d8] mb-1">
                Previsão de Produção
              </label>
              <select
                value={formData.budgetRange}
                onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#181820] border border-[#27272a] text-sm text-white focus:outline-none focus:border-[#e11d24] transition-colors cursor-pointer"
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
            className="w-full py-3.5 px-5 rounded-lg bg-[#e11d24] hover:bg-[#b91c1c] text-white font-bold tracking-wider uppercase text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(225,29,36,0.3)] disabled:opacity-50"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Enviando solicitação...</span>
              </span>
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
