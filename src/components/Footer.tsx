import React from 'react';
import { BsInstagram } from 'react-icons/bs';
import { FaWhatsapp, FaLinkedin, FaDiscord } from 'react-icons/fa';
import logoImg from '../assets/logo.png';

interface FooterProps {
  discordLink: string;
  whatsappLink: string;
  instagramLink: string;
}

export const Footer: React.FC<FooterProps> = ({ discordLink, whatsappLink, instagramLink }) => {
  return (
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
          <p className="text-sm text-pryva-slate mt-2">
            Comunidade Peer-to-Peer de Aprendizado em Tecnologia.
          </p>
          <p className="text-xs text-pryva-slate/60 mt-2">
            Fortaleza, Ceará
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16 text-sm text-pryva-slate">
          <div className="flex flex-col gap-3">
            <a href="#como-funciona" className="hover:text-white transition-colors">Como Funciona</a>
            <a href="#metodologia" className="hover:text-white transition-colors">Metodologia P2P</a>
          </div>
          <div className="flex flex-col gap-3">
            <a href={discordLink} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
              <FaDiscord className="text-base" /> Discord
            </a>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
              <FaWhatsapp className="text-base" /> WhatsApp
            </a>
            <a href={instagramLink} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
              <BsInstagram className="text-base" /> Instagram
            </a>
            <a href="#" className="hover:text-white transition-colors flex items-center gap-2">
              <FaLinkedin className="text-base" /> LinkedIn
            </a>
          </div>
          <div className="flex flex-col gap-3 col-span-2 md:col-span-1">
            <a href="#" className="hover:text-white transition-colors">Código de Conduta</a>
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};