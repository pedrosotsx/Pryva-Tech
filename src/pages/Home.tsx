import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { FeaturesSection } from '../components/FeaturesSection';
import { MethodologySection } from '../components/MethodologySection';
import { BenefitsSection } from '../components/BenefitsSection'; // Importado
import { CommunityCtaSection } from '../components/CommunityCtaSection';

export const Home: React.FC = () => {
  const discordLink = "/em-breve";
  const whatsappLink = "https://chat.whatsapp.com/BN4Z32juOO11Hk64f2JjhY";

  return (
    <div className="min-h-screen bg-pryva-background text-white font-sans selection:bg-pryva-blue/30 overflow-x-hidden flex flex-col">
      
      <main className="flex-1 flex flex-col items-center">
        <HeroSection discordLink={discordLink} whatsappLink={whatsappLink} />
        <FeaturesSection />
        <BenefitsSection /> {/* Nova seção adicionada */}
        <MethodologySection />
        <CommunityCtaSection discordLink={discordLink} whatsappLink={whatsappLink} />
      </main>
    </div>
  );
};