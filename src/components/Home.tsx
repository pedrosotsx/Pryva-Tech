import React from 'react';
import { Header } from '../components/Header';
import { HeroSection } from '../components/HeroSection';
import { FeaturesSection } from '../components/FeaturesSection';
import { CommunityCtaSection } from '../components/CommunityCtaSection';
import { Footer } from '../components/Footer';
import { MethodologySection } from './MethodologySection';

export const Home: React.FC = () => {
  const discordLink = "https://discord.gg/seu-servidor";
  const whatsappLink = "https://wa.me/5585984542891";
  const instagramLink = "https://instagram.com/pryvatech";

  return (
    <div className="min-h-screen bg-pryva-background text-white font-sans selection:bg-pryva-blue/30 overflow-x-hidden flex flex-col">
      <Header discordLink={discordLink} />
      
      <main className="flex-1 flex flex-col items-center">
        <HeroSection discordLink={discordLink} whatsappLink={whatsappLink} />
        <FeaturesSection />
        <MethodologySection />
        <CommunityCtaSection discordLink={discordLink} whatsappLink={whatsappLink} />
      </main>

      <Footer 
        discordLink={discordLink} 
        whatsappLink={whatsappLink} 
        instagramLink={instagramLink} 
      />
    </div>
  );
};