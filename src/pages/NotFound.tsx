import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound: React.FC = () => {
  return (
    <section className="px-6 py-32 text-center flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold bg-gradient-to-r from-pryva-blue to-pryva-purple bg-clip-text text-transparent mb-4">
        404
      </h1>
      <p className="text-xl text-white font-semibold mb-2">Página não encontrada</p>
      <p className="text-pryva-slate mb-8 max-w-md">
        O caminho que você tentou acessar não existe no ecossistema da Pryva Tech.
      </p>
      <Link 
        to="/" 
        className="px-6 py-3 rounded-full bg-gradient-to-r from-pryva-blue to-pryva-purple text-white font-semibold hover:opacity-90 transition-opacity"
      >
        Voltar para a Página Inicial
      </Link>
    </section>
  );
};