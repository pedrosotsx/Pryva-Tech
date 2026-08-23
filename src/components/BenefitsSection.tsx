import React from 'react';
import { FiUsers, FiCheckSquare, FiCode, FiShield, FiMessageSquare, FiLayers } from 'react-icons/fi';

interface BenefitItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  tag: string;
  desc: string;
}

export const BenefitsSection: React.FC = () => {
  const benefits: BenefitItem[] = [
    {
      icon: FiCode,
      tag: 'Agnóstico a Stack',
      title: 'Qualquer Linguagem',
      desc: 'C, Rust, Go, Python, JavaScript ou Java. O foco é a lógica de programação, arquitetura e solução do problema — escolha a ferramenta que quiser.'
    },
    {
      icon: FiShield,
      tag: 'Qualidade de Código',
      title: 'QA & Testes Automatizados',
      desc: 'Aprenda a escrever testes unitários, de integração e criar códigos robustos. A qualidade do seu código é testada de verdade.'
    },
    {
      icon: FiUsers,
      tag: 'Soft Skills',
      title: 'Trabalho em Equipe',
      desc: 'Desenvolva a habilidade de colaborar em grupo, dividir tarefas de forma ágil e resolver conflitos técnicos em conjunto.'
    },
    {
      icon: FiMessageSquare,
      tag: 'Feedback Contínuo',
      title: 'Code Review & Avaliação',
      desc: 'Aprenda a ler código alheio, dar feedbacks construtivos e aplicar melhorias sugeridas por outros membros em suas PRs.'
    },
    {
      icon: FiLayers,
      tag: 'Prática de Mercado',
      title: 'Arquitetura & Design',
      desc: 'Enfrente desafios que exigem organização de pastas, boas práticas (Clean Code, SOLID) e padrões de projeto reais.'
    },
    {
      icon: FiCheckSquare,
      tag: 'Inovação',
      title: 'Projetos de Portfólio',
      desc: 'Transforme a resolução dos desafios em projetos reais no seu GitHub que chamam a atenção de recrutadores de tech.'
    }
  ];

  return (
    <section id="beneficios" className="px-6 py-16 lg:py-24 w-full max-w-7xl mx-auto flex flex-col items-center">
      <span className="inline-block px-4 py-1.5 rounded-full border border-pryva-slate/20 bg-pryva-surface/50 text-[10px] md:text-xs font-mono text-pryva-slate uppercase tracking-widest mb-3">
        # BENEFÍCIOS DOS DESAFIOS
      </span>

      <h2 className="text-2xl md:text-4xl font-bold mb-4 text-center">
        O que você desenvolve <span className="bg-gradient-to-r from-pryva-blue to-pryva-purple bg-clip-text text-transparent">na prática</span>
      </h2>

      <p className="text-pryva-slate text-sm md:text-base text-center max-w-2xl mb-12">
        Mais do que aprender sintaxe, os desafios P2P simulam a rotina real de um time de engenharia de software de alta performance.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {benefits.map((item, idx) => {
          const IconComponent = item.icon;
          return (
            <div 
              key={idx} 
              className="group bg-pryva-surface/40 hover:bg-pryva-surface/70 transition-all duration-300 rounded-2xl p-6 md:p-8 border border-pryva-slate/10 hover:border-pryva-blue/40 flex flex-col justify-between gap-6 relative overflow-hidden"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-lg border border-pryva-slate/20 bg-pryva-background flex items-center justify-center group-hover:border-pryva-blue/50 transition-colors">
                    <IconComponent className="text-xl text-pryva-slate group-hover:text-pryva-blue transition-colors" />
                  </div>
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-pryva-slate/10 text-pryva-slate border border-pryva-slate/20">
                    {item.tag}
                  </span>
                </div>

                <div>
                  <h3 className="font-semibold text-lg text-white mb-2 group-hover:text-pryva-blue transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-pryva-slate text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};