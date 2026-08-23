import React from 'react';

interface MethodologyStep {
  step: string;
  title: string;
  desc: string;
  details: string;
  active: boolean;
}

export const MethodologySection: React.FC = () => {
  const steps: MethodologyStep[] = [
    { 
      step: '01', 
      title: 'Onboarding', 
      desc: 'Entrada na comunidade, escolha da trilha e acesso aos canais.',
      details: 'Apresentação da dinâmica P2P, recepção nos canais do Discord e WhatsApp, e nivelamento para alinhamento de expectativas.',
      active: false 
    },
    { 
      step: '02', 
      title: 'Desafios Hands-On', 
      desc: 'Resolução de tarefas práticas baseadas em problemas reais.',
      details: 'Sem aulas teóricas genéricas: você recebe o briefing e desenvolve o código na prática resolvendo desafios reais.',
      active: false 
    },
    { 
      step: '03', 
      title: 'Peer Evaluation', 
      desc: 'Feedback cruzado e revisão de código com outros membros.',
      details: 'Seu código é avaliado por colegas da comunidade e você também revisa o código de outros membros.',
      active: false 
    },
    { 
      step: '04', 
      title: 'Portfólio & Level Up', 
      desc: 'Evolução na comunidade e projetos prontos para o mercado.',
      details: 'Acumule projetos validados em seu repositório, evolua no ranking da comunidade e prepare-se para oportunidades reais.',
      active: true 
    },
  ];

  return (
    <section id="metodologia" className="px-6 py-16 lg:py-24 w-full max-w-6xl mx-auto flex flex-col items-center text-center">
      <h3 className="text-[10px] md:text-xs font-mono text-pryva-slate uppercase tracking-widest mb-3">
        JORNADA DE APRENDIZADO
      </h3>
      <h2 className="text-2xl md:text-3xl font-bold mb-16">O fluxo de evolução do membro</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6 w-full relative">
        <div className="hidden lg:block absolute top-6 left-1/8 right-1/8 h-px bg-pryva-slate/20 -z-10 w-[75%] mx-auto"></div>

        {steps.map((item, idx) => (
          <div key={idx} className="group flex flex-col items-center gap-4 relative z-10 cursor-pointer">
            
            {/* Balão Explicativo (Hover Tooltip/Modal) */}
            <div className="absolute bottom-full mb-4 left-1/2 -translate-x-1/2 w-64 p-4 rounded-xl bg-[#090D16] border border-pryva-purple/40 shadow-[0_10px_25px_rgba(0,0,0,0.6)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-30 pointer-events-none transform translate-y-2 group-hover:translate-y-0">
              <p className="text-xs text-white/90 leading-relaxed text-left font-normal">
                {item.details}
              </p>
              {/* Seta do balão */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-[#090D16]" />
            </div>

            {/* Ícone do Step */}
            <div className={`w-12 h-12 rounded-full flex items-center justify-center font-mono text-sm transition-all duration-300 group-hover:scale-110 ${
              item.active 
                ? 'bg-pryva-purple text-white shadow-[0_0_20px_rgba(124,58,237,0.4)]' 
                : 'bg-pryva-background border border-pryva-slate/30 text-pryva-slate group-hover:border-pryva-purple group-hover:text-white'
            }`}>
              {item.step}
            </div>

            {/* Conteúdo Visível */}
            <div>
              <h4 className="font-semibold text-base mb-1.5 transition-colors group-hover:text-pryva-purple">{item.title}</h4>
              <p className="text-pryva-slate text-xs md:text-sm max-w-[200px] mx-auto leading-relaxed">{item.desc}</p>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};