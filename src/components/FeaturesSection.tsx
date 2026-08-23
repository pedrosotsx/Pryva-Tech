import React from 'react';
import { FiUsers, FiCode } from 'react-icons/fi';
import { FaDiscord, FaWhatsapp } from 'react-icons/fa';

interface FeatureItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
}

export const FeaturesSection: React.FC = () => {
  const features: FeatureItem[] = [
    { icon: FiUsers, title: 'Aprendizado P2P', desc: 'Code review e avaliações cruzadas entre membros. Você aprende ensinando e revisando.' },
    { icon: FiCode, title: 'Projetos Práticos', desc: 'Desafios mão na massa alinhados ao mercado real para você construir seu portfólio.' },
    { icon: FaDiscord, title: 'QG no Discord', desc: 'Salas de estudo ao vivo, suporte síncrono, eventos e trocas técnicas diárias.' },
    { icon: FaWhatsapp, title: 'Conexão WhatsApp', desc: 'Comunicação ágil do dia a dia, avisos da comunidade e networking no bolso.' }
  ];

  return (
    <section id="como-funciona" className="px-6 py-16 lg:py-24 w-full max-w-7xl mx-auto flex flex-col items-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-3 text-center">Como a Pryva Funciona</h2>
      <p className="text-pryva-slate text-sm md:text-base text-center mb-12">
        Aprenda no modelo peer-to-peer focado em autonomia e comunidade.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        {features.map((item, idx) => {
          const IconComponent = item.icon;
          return (
            <div key={idx} className="bg-pryva-surface/40 hover:bg-pryva-surface/70 transition-colors rounded-2xl p-6 md:p-8 border border-pryva-slate/10 flex flex-col gap-5">
              <div className="w-10 h-10 rounded-lg border border-pryva-slate/20 bg-pryva-background flex items-center justify-center">
                <IconComponent className="text-xl text-pryva-slate" />
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                <p className="text-pryva-slate text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};