import React from 'react';
import { FaDiscord, FaWhatsapp } from 'react-icons/fa';

interface CommunityCtaSectionProps {
  discordLink: string;
  whatsappLink: string;
}

export const CommunityCtaSection: React.FC<CommunityCtaSectionProps> = ({ discordLink, whatsappLink }) => {
  return (
    <section id="comunidade" className="px-6 py-16 lg:py-24 w-full max-w-5xl mx-auto">
      <div className="relative rounded-3xl p-10 md:p-16 border border-pryva-blue/20 overflow-hidden text-center flex flex-col items-center gap-6 shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A] via-[#1E1B4B] to-[#0F172A] opacity-90 -z-10"></div>
        
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-2xl">
          Pronto para evoluir sem depender de aulas teóricas?
        </h2>
        
        <p className="text-pryva-slate text-sm md:text-base max-w-xl">
          Faça parte da Pryva Tech no Discord e WhatsApp. Aprenda na prática, receba feedbacks e colabore com outros desenvolvedores.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-2">
          <a 
            href={discordLink}
            target="_blank"
            rel="noopener noreferrer"
            className="py-3.5 px-8 rounded-full bg-gradient-to-r from-pryva-blue to-pryva-purple text-white font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
          >
            <FaDiscord className="text-xl" /> Entrar no Discord
          </a>
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="py-3.5 px-8 rounded-full border border-pryva-slate/20 bg-pryva-surface/30 hover:bg-pryva-surface/80 text-white font-semibold flex items-center justify-center gap-2 transition-all"
          >
            <FaWhatsapp className="text-xl" /> Grupo do WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};