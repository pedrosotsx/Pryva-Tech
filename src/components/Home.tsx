// src/pages/Home.tsx
import React, { useState } from 'react';
// Importando do react-icons
import { FiMenu, FiX, FiArrowRight, FiMonitor, FiLayout, FiMessageCircle } from 'react-icons/fi';
import { BsCloud, BsInstagram } from 'react-icons/bs';
import { LuBrain } from "react-icons/lu";
import { FaWhatsapp, FaLinkedin } from "react-icons/fa";




import logoImg from '../assets/logo.png'; 

export function Home() {
  // Estado para controlar a abertura/fechamento do menu mobile
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const whatsappLink = "https://wa.me/5585984542891";
  const instagramLink = "https://instagram.com/pryvatech";

  return (
    <div className="min-h-screen bg-pryva-background text-white font-sans selection:bg-pryva-blue/30 overflow-x-hidden">
      
      {/* HEADER */}
      <header className="relative flex items-center justify-between px-6 py-6 lg:px-16 border-b border-pryva-slate/10 max-w-7xl mx-auto z-50">
        
        {/* Logo Oficial */}
        <div className="flex items-center z-50">
          <img 
            src={logoImg} 
            alt="PRYVA TECH Logo" 
            className="h-8 md:h-10 object-contain relative z-50"
          />
        </div>
        
        {/* Navegação Desktop */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-pryva-slate">
          <a href="#" className="hover:text-white transition-colors">Soluções</a>
          <a href="#" className="hover:text-white transition-colors">Processo</a>
          <a href="#" className="text-white relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-0.5 after:bg-white">Sobre</a>
          <a href="#" className="hover:text-white transition-colors">Contato</a>
        </nav>

        {/* CTA Desktop - Link WhatsApp */}
        <a 
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-pryva-blue to-pryva-purple text-white text-sm font-semibold hover:opacity-90 transition-opacity"
        >
          Fale com a PRYVA <FiArrowRight className="text-lg" />
        </a>

        {/* Botão Menu Mobile */}
        <button 
          className="lg:hidden text-pryva-slate hover:text-white transition-colors z-50 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
        </button>

        {/* Dropdown Menu Mobile */}
        <div className={`
          absolute top-full left-0 w-full bg-[#020617]/95 backdrop-blur-xl border-b border-pryva-slate/10 transition-all duration-300 ease-in-out lg:hidden
          ${isMobileMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'}
        `}>
          {/* Dropdown Menu Mobile com Animação */}
<div className={`
  absolute top-full left-0 w-full bg-[#020617]/95 backdrop-blur-2xl border-b border-pryva-slate/10 
  transition-all duration-300 ease-in-out lg:hidden shadow-2xl overflow-hidden
  ${isMobileMenuOpen 
    ? 'opacity-100 translate-y-0 visible max-h-[400px]' 
    : 'opacity-0 -translate-y-4 invisible max-h-0'}
`}>
  <nav className="flex flex-col items-center gap-6 py-8 text-base font-medium text-pryva-slate">
    <a 
      href="#" 
      onClick={() => setIsMobileMenuOpen(false)} 
      className="hover:text-white transition-colors transform hover:scale-105"
    >
      Soluções
    </a>
    <a 
      href="#" 
      onClick={() => setIsMobileMenuOpen(false)} 
      className="hover:text-white transition-colors transform hover:scale-105"
    >
      Processo
    </a>
    <a 
      href="#" 
      onClick={() => setIsMobileMenuOpen(false)} 
      className="text-white transform hover:scale-105"
    >
      Sobre
    </a>
    <a 
      href="#" 
      onClick={() => setIsMobileMenuOpen(false)} 
      className="hover:text-white transition-colors transform hover:scale-105"
    >
      Contato
    </a>
    <a 
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => setIsMobileMenuOpen(false)}
      className="mt-2 flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-pryva-blue to-pryva-purple text-white font-semibold shadow-lg hover:opacity-90 transition-all transform active:scale-95"
    >
      Fale com a PRYVA <FiArrowRight className="text-lg" />
    </a>
  </nav>
</div>
        </div>
      </header>

      <main className="flex flex-col items-center">
        {/* HERO SECTION */}
        <section className="px-6 py-16 lg:py-28 flex flex-col items-center text-center gap-6 max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full border border-pryva-slate/20 bg-pryva-surface/50 text-[10px] md:text-xs font-mono text-pryva-slate uppercase tracking-widest">
            # EMPRESA DE TECNOLOGIA
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
            Tecnologia que <span className="bg-gradient-to-r from-white to-pryva-slate bg-clip-text text-transparent">impulsiona ideias.</span>
          </h1>
          
          <p className="text-pryva-slate text-base md:text-lg leading-relaxed max-w-2xl mt-2">
            Desenvolvemos software e soluções digitais sob medida para transformar negócios e acelerar resultados através da inovação.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-6 w-full sm:w-auto">
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full sm:w-auto py-3.5 px-8 rounded-full bg-gradient-to-r from-pryva-blue to-pryva-purple text-white font-semibold transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Iniciar Projeto <FiArrowRight />
            </a>
            <button className="flex items-center justify-center gap-2 w-full sm:w-auto py-3.5 px-8 rounded-full border border-pryva-slate/20 bg-pryva-surface/30 hover:bg-pryva-surface/80 text-white font-semibold transition-all active:scale-[0.98]">
              Conhecer Soluções
            </button>
          </div>
        </section>

        {/* NOSSAS SOLUÇÕES */}
        <section className="px-6 py-16 lg:py-24 w-full max-w-7xl mx-auto flex flex-col items-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-center">Nossas Soluções</h2>
          <p className="text-pryva-slate text-sm md:text-base text-center mb-12">
            Ecossistema completo de tecnologia para escalar sua operação.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {[
              { icon: FiMonitor, title: 'Desenvolvimento', desc: 'Sistemas web e mobile robustos, escaláveis e sob medida.' },
              { icon: LuBrain, title: 'Inteligência Artificial', desc: 'Automação inteligente e análise preditiva para o seu negócio.' },
              { icon: BsCloud, title: 'Cloud & DevOps', desc: 'Infraestrutura em nuvem segura, ágil e de alta performance.' },
              { icon: FiLayout, title: 'Produtos Digitais', desc: 'UI/UX Design e concepção completa de produtos focados no usuário.' }
            ].map((item, idx) => (
              <div key={idx} className="bg-pryva-surface/40 hover:bg-pryva-surface/70 transition-colors rounded-2xl p-6 md:p-8 border border-pryva-slate/10 flex flex-col gap-5">
                <div className="w-10 h-10 rounded-lg border border-pryva-slate/20 bg-pryva-background flex items-center justify-center">
                  <item.icon className="text-xl text-pryva-slate" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                  <p className="text-pryva-slate text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* METODOLOGIA */}
        <section className="px-6 py-16 lg:py-24 w-full max-w-6xl mx-auto flex flex-col items-center text-center">
          <h3 className="text-[10px] md:text-xs font-mono text-pryva-slate uppercase tracking-widest mb-3">
            METODOLOGIA
          </h3>
          <h2 className="text-2xl md:text-3xl font-bold mb-16">Da ideia à solução</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6 w-full relative">
            <div className="hidden lg:block absolute top-6 left-1/8 right-1/8 h-px bg-pryva-slate/20 -z-10 w-[75%] mx-auto"></div>

            {[
              { step: '01', title: 'Descoberta', desc: 'Entendimento profundo do desafio e objetivos do negócio.', active: false },
              { step: '02', title: 'Estratégia', desc: 'Desenho da arquitetura técnica e roadmap do produto.', active: false },
              { step: '03', title: 'Desenvolvimento', desc: 'Código limpo, sprints ágeis e entregas de valor contínuas.', active: false },
              { step: '04', title: 'Lançamento', desc: 'Deploy monitorado, escala e evolução sustentável.', active: true },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center gap-4 relative z-10">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-mono text-sm transition-colors ${
                  item.active 
                    ? 'bg-pryva-purple text-white shadow-[0_0_20px_rgba(124,58,237,0.4)]' 
                    : 'bg-pryva-background border border-pryva-slate/30 text-pryva-slate'
                }`}>
                  {item.step}
                </div>
                <div>
                  <h4 className="font-semibold text-base mb-1.5">{item.title}</h4>
                  <p className="text-pryva-slate text-xs md:text-sm max-w-[200px] mx-auto leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="px-6 py-16 lg:py-24 w-full max-w-5xl mx-auto">
          <div className="relative rounded-3xl p-10 md:p-16 border border-pryva-blue/20 overflow-hidden text-center flex flex-col items-center gap-6 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A] via-[#1E1B4B] to-[#0F172A] opacity-90 -z-10"></div>
            
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-2xl">
              Pronto para acelerar a sua transformação digital?
            </h2>
            
            <p className="text-pryva-slate text-sm md:text-base max-w-xl">
              Agende uma conversa com nossos especialistas e descubra como a PRYVA TECH pode impulsionar suas ideias.
            </p>

            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 py-3.5 px-8 rounded-full bg-gradient-to-r from-pryva-blue to-pryva-purple text-white font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
            >
              Falar com Especialista <FiMessageCircle className="text-lg" />
            </a>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="px-6 py-12 md:py-16 bg-[#010308] border-t border-pryva-slate/10 w-full mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 md:gap-4">
          
          <div className="max-w-xs">
            <div className="flex items-center mb-4 opacity-50 hover:opacity-100 transition-opacity cursor-pointer">
               <img 
                 src={logoImg} 
                 alt="PRYVA TECH Logo" 
                 className="h-6 md:h-8 object-contain"
               />
            </div>
            <p className="text-sm text-pryva-slate mt-4">
              Fortaleza, Ceará
            </p>
          </div>
          
         <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16 text-sm text-pryva-slate">
  <div className="flex flex-col gap-3">
    <a href="#" className="hover:text-white transition-colors">Soluções</a>
    <a href="#" className="hover:text-white transition-colors">Metodologia</a>
  </div>
  <div className="flex flex-col gap-3">
    {/* Instagram */}
    <a href={instagramLink} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
       <BsInstagram className="text-base" /> Instagram
    </a>
    {/* WhatsApp */}
    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
      <FaWhatsapp className="text-base" /> WhatsApp
    </a>
    {/* LinkedIn */}
    <a href="#" className="hover:text-white transition-colors flex items-center gap-2">
      <FaLinkedin className="text-base" /> LinkedIn
    </a>
  </div>
  <div className="flex flex-col gap-3 col-span-2 md:col-span-1">
    <a href="#" className="hover:text-white transition-colors">Políticas de Privacidade</a>
    <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
  </div>
</div>
        </div>
      </footer>

    </div>
  );
}