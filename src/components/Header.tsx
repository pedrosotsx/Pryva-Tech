import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaDiscord } from 'react-icons/fa';
import logoImg from '../assets/logo.png';

interface HeaderProps {
  discordLink: string;
}

export const Header: React.FC<HeaderProps> = ({ discordLink }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  return (
    <header className="relative flex items-center justify-between w-full px-6 py-6 lg:px-16 border-b border-pryva-slate/10 max-w-7xl mx-auto z-50">
      
      {/* 1. Extremidade Esquerda: Logo */}
      <div className="flex-1 flex items-center justify-start shrink-0 z-50">
        <img 
          src={logoImg} 
          alt="PRYVA TECH Logo" 
          className="h-8 md:h-10 w-auto object-contain relative z-50"
        />
      </div>

      {/* 2. Centro Absoluto: Navegação Desktop */}
      <nav className="hidden lg:flex items-center justify-center gap-6 xl:gap-8 text-sm font-medium text-pryva-slate">
        <a href="#como-funciona" className="hover:text-white transition-colors">Como Funciona</a>
        <a href="#metodologia" className="hover:text-white transition-colors">Metodologia P2P</a>
        <a href="#comunidade" className="hover:text-white transition-colors">Comunidade</a>
      </nav>

      {/* 3. Extremidade Direita: Botão Discord Desktop */}
      <div className="hidden lg:flex flex-1 items-center justify-end shrink-0">
        <a 
          href={discordLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-pryva-blue to-pryva-purple text-white text-sm font-semibold hover:opacity-90 transition-opacity shrink-0"
        >
          <FaDiscord className="text-lg" /> Entrar no Discord
        </a>
      </div>

      {/* Botão Menu Mobile (aparece apenas em telas menores) */}
      <button 
        className="lg:hidden text-pryva-slate hover:text-white transition-colors z-50 p-2 ml-auto"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Alternar Menu"
      >
        {isMobileMenuOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
      </button>

      {/* Dropdown Menu Mobile */}
      <div className={`
        absolute top-full left-0 w-full bg-[#020617]/95 backdrop-blur-2xl border-b border-pryva-slate/10 
        transition-all duration-300 ease-in-out lg:hidden shadow-2xl overflow-hidden
        ${isMobileMenuOpen 
          ? 'opacity-100 translate-y-0 visible max-h-[400px]' 
          : 'opacity-0 -translate-y-4 invisible max-h-0'}
      `}>
        <nav className="flex flex-col items-center gap-6 py-8 text-base font-medium text-pryva-slate">
          <a href="#como-funciona" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-white transition-colors">
            Como Funciona
          </a>
          <a href="#metodologia" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-white transition-colors">
            Metodologia P2P
          </a>
          <a href="#comunidade" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-white transition-colors">
            Comunidade
          </a>
          <a 
            href={discordLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-2 flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-pryva-blue to-pryva-purple text-white font-semibold shadow-lg hover:opacity-90 transition-all active:scale-95"
          >
            <FaDiscord className="text-lg" /> Entrar no Discord
          </a>
        </nav>
      </div>
    </header>
  );
};