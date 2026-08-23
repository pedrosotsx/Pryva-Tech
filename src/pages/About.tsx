import React from 'react';
import { FiTarget, FiZap, FiHeart, FiCompass } from 'react-icons/fi';
import { FaDiscord } from 'react-icons/fa';

interface Pillar {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
}

export const About: React.FC = () => {
  const discordLink = "https://discord.gg/seu-servidor";

  const pillars: Pillar[] = [
    {
      icon: FiTarget,
      title: 'Prática & Mão na Massa',
      desc: 'Um ambiente dinâmico focado em criar soluções reais, onde o aprendizado acontece diretamente na construção de projetos.'
    },
    {
      icon: FiZap,
      title: 'Autonomia & Investigação',
      desc: 'Desenvolva a capacidade de pesquisar, testar hipóteses e encontrar soluções por conta própria, fortalecendo sua confiança técnica.'
    },
    {
      icon: FiHeart,
      title: 'Colaboração P2P',
      desc: 'Na Pryva, a troca é mútua: membros ajudam uns aos outros, fazem revisões de código e crescem juntos na comunidade.'
    },
    {
      icon: FiCompass,
      title: 'Vivência de Mercado',
      desc: 'Simulamos o dia a dia de times de engenharia de software com versionamento de código, code review e comunicação ágil.'
    }
  ];

  return (
    <div className="w-full flex flex-col items-center">
      {/* Hero da Página Sobre */}
      <section className="px-6 py-16 lg:py-24 max-w-5xl mx-auto text-center flex flex-col items-center">
        <span className="inline-block px-4 py-1.5 rounded-full border border-pryva-slate/20 bg-pryva-surface/50 text-[10px] md:text-xs font-mono text-pryva-slate uppercase tracking-widest mb-4">
          # SOBRE A PRYVA TECH
        </span>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-3xl leading-tight">
          Uma nova forma de acelerar sua <span className="bg-gradient-to-r from-pryva-blue to-pryva-purple bg-clip-text text-transparent">jornada em tecnologia</span>
        </h1>
        <p className="text-pryva-slate text-base md:text-lg leading-relaxed max-w-2xl">
          Conectamos desenvolvedores em um ecossistema colaborativo peer-to-peer para transformar conhecimento teórico em prática real.
        </p>
      </section>

      {/* Nossa História / Propósito */}
      <section className="px-6 py-8 w-full max-w-4xl mx-auto">
        <div className="bg-pryva-surface/30 border border-pryva-slate/10 rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-pryva-purple/10 rounded-full blur-3xl -z-10" />
          <h2 className="text-2xl font-bold text-white mb-6">Como a Pryva nasceu?</h2>
          <p className="text-pryva-slate text-base md:text-lg leading-relaxed mb-6">
            A Pryva nasceu originalmente como uma empresa de tecnologia e evoluiu para acompanhar as novas formas de aprender e colaborar do mercado dev. Entendemos que a base teórica e o ensino presencial têm um papel fundamental na formação, mas o ritmo acelerado da tecnologia exige também um novo espaço de prática contínua.
          </p>
          <p className="text-pryva-slate text-base md:text-lg leading-relaxed">
            Criamos a Pryva Tech como um <strong className="text-white font-semibold">novo modelo de aprendizado peer-to-peer (P2P)</strong>, 100% online via Discord e WhatsApp. Um ambiente prático e complementar onde você aplica o que estuda, colabora com outros devs em tempo real, faz revisões de código e simula a rotina de um time de tecnologia de alta performance.
          </p>
        </div>
      </section>

      {/* Pilares */}
      <section className="px-6 py-16 w-full max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          Nossos Pilares de Aprendizado
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {pillars.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={idx} 
                className="bg-pryva-surface/40 hover:bg-pryva-surface/70 transition-colors rounded-2xl p-6 border border-pryva-slate/10 flex flex-col gap-4"
              >
                <div className="w-10 h-10 rounded-lg border border-pryva-slate/20 bg-pryva-background flex items-center justify-center">
                  <IconComponent className="text-xl text-pryva-purple" />
                </div>
                <h3 className="font-semibold text-lg text-white">{item.title}</h3>
                <p className="text-pryva-slate text-sm leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Final */}
      <section className="px-6 py-12 mb-12 w-full max-w-4xl mx-auto text-center">
        <div className="p-10 rounded-3xl border border-pryva-blue/20 bg-gradient-to-r from-pryva-surface/50 to-pryva-background flex flex-col items-center gap-6 shadow-2xl">
          <h2 className="text-2xl md:text-3xl font-bold">Faça parte desse novo ecossistema</h2>
          <p className="text-pryva-slate text-sm md:text-base max-w-lg">
            Junte-se a outros desenvolvedores e acelere seu aprendizado em comunidade.
          </p>
          <a 
            href={discordLink}
            target="_blank"
            rel="noopener noreferrer"
            className="py-3.5 px-8 rounded-full bg-gradient-to-r from-pryva-blue to-pryva-purple text-white font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity"
          >
            <FaDiscord className="text-xl" /> Entrar na Comunidade
          </a>
        </div>
      </section>
    </div>
  );
};