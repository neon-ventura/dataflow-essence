
import React from 'react';
import FeatureCard from './FeatureCard';
import { Copy, LineChart, Search, ShoppingCart, Users, Puzzle, Tag } from 'lucide-react';

const Features = () => {
  const features = [
    {
      title: 'Clonagem de Anúncios',
      description: 'Clone anúncios de seus concorrentes com precisão, mantendo-se sempre competitivo no mercado.',
      icon: Copy
    },
    {
      title: 'Acompanhamento de Catálogo',
      description: 'Monitore seu catálogo e o de seus concorrentes em tempo real, com alertas automáticos.',
      icon: LineChart
    },
    {
      title: 'Consulta em Massa',
      description: 'Faça consultas simultâneas de múltiplos produtos para análise comparativa avançada.',
      icon: Search
    },
    {
      title: 'Painel de Compras',
      description: 'Visualize oportunidades de compra com comparativos de preços entre diferentes fornecedores.',
      icon: ShoppingCart
    },
    {
      title: 'Painel de Fornecedores',
      description: 'Gerencie seus fornecedores de forma centralizada, com métricas de performance e confiabilidade.',
      icon: Users
    },
    {
      title: 'Compatibilidade Autoparts',
      description: 'Sistema avançado de verificação de compatibilidade para o setor de autopeças.',
      icon: Puzzle
    },
    {
      title: 'Central de Promoções',
      description: 'Crie e gerencie promoções de forma automática, reagindo às mudanças do mercado.',
      icon: Tag
    }
  ];

  return (
    <section id="features" className="py-20 bg-neutral-light/50 relative">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(26,115,232,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(26,115,232,0.03)_1px,transparent_1px)] bg-[size:30px_30px] -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-in-up">
          <div className="inline-block rounded-full bg-primary-blue/10 px-4 py-1.5 text-sm font-medium text-primary-blue mb-4">
            Funcionalidades
          </div>
          <h2 className="mb-4">Ferramentas <span className="text-gradient">Poderosas</span></h2>
          <p className="text-lg text-neutral-dark">
            Nossa plataforma oferece um conjunto completo de ferramentas para impulsionar seu desempenho nos marketplaces.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
