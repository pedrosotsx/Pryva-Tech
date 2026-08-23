import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export const RootLayout: React.FC = () => {
  const discordLink = "/em-breve";
  const whatsappLink = "https://chat.whatsapp.com/BN4Z32juOO11Hk64f2JjhY";
  const instagramLink = "https://instagram.com/pryvatech";

  return (
    <div className="min-h-screen bg-pryva-background text-white font-sans selection:bg-pryva-blue/30 overflow-x-hidden flex flex-col">
      <Header discordLink={discordLink} />
      
      <main className="flex-1 flex flex-col items-center">
        <Outlet />
      </main>

      <Footer 
        discordLink={discordLink} 
        whatsappLink={whatsappLink} 
        instagramLink={instagramLink} 
      />
    </div>
  );
};