import React from 'react';
import { FaDiscord, FaWhatsapp } from 'react-icons/fa';

interface HeroSectionProps {
  discordLink: string;
  whatsappLink: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ discordLink, whatsappLink }) => {
  return (
    <section className="px-6 py-16 lg:py-28 flex flex-col items-center text-center gap-6 max-w-4xl mx-auto">
      <span className="inline-block px-4 py-1.5 rounded-full border border-pryva-slate/20 bg-pryva-surface/50 text-[10px] md:text-xs font-mono text-pryva-slate uppercase tracking-widest">
        # COMUNIDADE P2P DE TECNOLOGIA
      </span>
      
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
        Aprenda programação <span className="bg-gradient-to-r from-white to-pryva-slate bg-clip-text text-transparent">de dev para dev.</span>
      </h1>
      
      <p className="text-pryva-slate text-base md:text-lg leading-relaxed max-w-2xl mt-2">
        Um ecossistema colaborativo, 100% online. Evolua construindo projetos reais e trocando conhecimento direto no Discord e WhatsApp.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-6 w-full sm:w-auto">
        <a 
          href={discordLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full sm:w-auto py-3.5 px-8 rounded-full bg-gradient-to-r from-pryva-blue to-pryva-purple text-white font-semibold transition-transform hover:scale-[1.02] active:scale-[0.98]"
        >
          <FaDiscord className="text-xl" /> Entrar no Discord
        </a>
        <a 
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full sm:w-auto py-3.5 px-8 rounded-full border border-pryva-slate/20 bg-pryva-surface/30 hover:bg-pryva-surface/80 text-white font-semibold transition-all active:scale-[0.98]"
        >
          <FaWhatsapp className="text-xl" /> Grupo do WhatsApp
        </a>
      </div>
    </section>
  );
};