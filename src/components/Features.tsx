
import React from 'react';
import FeatureCard from './FeatureCard';
import { Users, Puzzle, ShoppingCart, BrainCircuit, Bell, LineChart } from 'lucide-react';

const Features = () => {
  // Organization of features by section
  const featureSections = [
    {
      title: "Gestão de Fornecedores e Compras",
      description: "Otimize seu relacionamento com fornecedores e processo de compras",
      features: [
        {
          title: 'Painel de Fornecedores',
          description: 'Gerencie seus fornecedores de forma centralizada, com métricas de performance e confiabilidade.',
          icon: Users
        },
        {
          title: 'Painel de Compras',
          description: 'Visualize oportunidades de compra com comparativos de preços entre diferentes fornecedores.',
          icon: ShoppingCart
        }
      ]
    },
    {
      title: "Compatibilidade para Autopeças",
      description: "Soluções especializadas para o setor automotivo",
      features: [
        {
          title: 'Compatibilidade Autoparts',
          description: 'Sistema avançado de verificação de compatibilidade para o setor de autopeças.',
          icon: Puzzle
        }
      ]
    },
    {
      title: "Inteligência Artificial",
      description: "Recursos avançados com IA para impulsionar seu negócio",
      features: [
        {
          title: 'Respostas Automáticas com IA',
          description: 'Atenda seus clientes automaticamente com respostas inteligentes baseadas em IA, melhorando seu tempo de resposta.',
          icon: BrainCircuit
        },
        {
          title: 'Avisos Inteligentes',
          description: 'Saiba a hora certa de repor estoques do Full, FBA e muito mais com alertas personalizados baseados em dados.',
          icon: Bell
        },
        {
          title: 'Previsões de Demanda',
          description: 'Utilize modelos de IA para prever tendências de vendas e ajustar seu estoque de forma proativa.',
          icon: LineChart
        }
      ]
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
        
        {featureSections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-20">
            <div className="text-center max-w-2xl mx-auto mb-12 animate-fade-in-up scroll-animate">
              <h3 className="mb-4 text-gradient">{section.title}</h3>
              <p className="text-lg text-neutral-dark">
                {section.description}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                  index={index + (sectionIndex * 3)} // Adjust index for animation delay
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
