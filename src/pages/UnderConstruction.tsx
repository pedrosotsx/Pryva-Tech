import { Link } from 'react-router-dom';
import { FiClock, FiArrowLeft } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

export function UnderConstruction() {
  const whatsappLink = "https://wa.me/5585984542891";

  return (
    <div className="w-full min-h-[75vh] flex flex-col items-center justify-center px-6 py-16 text-center">
      <div className="max-w-2xl mx-auto flex flex-col items-center gap-6">
        
        {/* Tag / Badge */}
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-pryva-purple/30 bg-pryva-purple/10 text-xs font-mono text-pryva-purple uppercase tracking-widest">
          <FiClock className="text-sm" /> Em Construção
        </span>

        {/* Título Principal */}
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          O nosso QG no Discord está <span className="bg-gradient-to-r from-pryva-blue to-pryva-purple bg-clip-text text-transparent">sendo preparado</span>
        </h1>

        {/* Descrição */}
        <p className="text-pryva-slate text-base md:text-lg leading-relaxed max-w-lg">
          Estamos ajustando a estrutura dos canais, bots de verificação e os primeiros desafios P2P para garantir a melhor experiência para a comunidade.
        </p>

        {/* Card de Aviso / Status */}
        <div className="w-full bg-pryva-surface/30 border border-pryva-slate/10 rounded-2xl p-6 my-2 flex flex-col items-center gap-2 backdrop-blur-sm">
          <p className="text-sm text-white font-medium">
            Quer garantir seu acesso antecipado?
          </p>
          <p className="text-xs text-pryva-slate">
            Entre no nosso grupo de avisos no WhatsApp enquanto preparamos o servidor oficial.
          </p>
        </div>

        {/* Ações / Botões */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-2 w-full sm:w-auto">
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full sm:w-auto py-3.5 px-8 rounded-full bg-gradient-to-r from-pryva-blue to-pryva-purple text-white font-semibold transition-transform hover:scale-[1.02] active:scale-[0.98] shadow-lg"
          >
            <FaWhatsapp className="text-xl" /> Entrar no Grupo do WhatsApp
          </a>

          <Link 
            to="/" 
            className="flex items-center justify-center gap-2 w-full sm:w-auto py-3.5 px-8 rounded-full border border-pryva-slate/20 bg-pryva-surface/30 hover:bg-pryva-surface/80 text-white font-semibold transition-all active:scale-[0.98]"
          >
            <FiArrowLeft className="text-lg" /> Voltar ao Início
          </Link>
        </div>

      </div>
    </div>
  );
}