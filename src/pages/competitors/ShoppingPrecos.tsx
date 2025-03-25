
import React from 'react';
import Navbar from '@/components/Navbar';
import ComparisonHero from '@/components/ComparisonHero';
import ComparisonTable from '@/components/ComparisonTable';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

const shoppingPrecosData = {
  name: 'Shopping de Preços',
  logo: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&q=80',
  description: 'Compare a Anye com o Shopping de Preços. Descubra como nossa solução oferece análises mais profundas, automação inteligente e uma experiência superior para vendedores online.'
};

const featureGroups = [
  {
    title: 'Monitoramento e Dados',
    features: [
      {
        name: 'Monitoramento em tempo real',
        anye: true,
        competitor: true
      },
      {
        name: 'Histórico completo e ilimitado',
        anye: true,
        competitor: false
      },
      {
        name: 'Análise de variações de preço',
        anye: true,
        competitor: true
      },
      {
        name: 'Dados de múltiplos marketplaces',
        anye: true,
        competitor: false
      }
    ]
  },
  {
    title: 'Inteligência e Recomendações',
    features: [
      {
        name: 'Algoritmos de IA para insights',
        anye: true,
        competitor: false
      },
      {
        name: 'Sugestões inteligentes de preço',
        anye: true,
        competitor: false
      },
      {
        name: 'Análise de margem e rentabilidade',
        anye: true,
        competitor: true
      },
      {
        name: 'Detecção de oportunidades',
        anye: true,
        competitor: false
      }
    ]
  },
  {
    title: 'Usabilidade e Acesso',
    features: [
      {
        name: 'Interface simples e intuitiva',
        anye: true,
        competitor: false
      },
      {
        name: 'Acesso mobile completo',
        anye: true,
        competitor: false
      },
      {
        name: 'Dashboards personalizáveis',
        anye: true,
        competitor: false
      },
      {
        name: 'Alertas e notificações',
        anye: true,
        competitor: true
      }
    ]
  },
  {
    title: 'Automação e Gestão',
    features: [
      {
        name: 'Automação de ajustes de preço',
        anye: true,
        competitor: false
      },
      {
        name: 'Gestão de regras avançadas',
        anye: true,
        competitor: false
      },
      {
        name: 'Integração com ERPs',
        anye: true,
        competitor: false
      },
      {
        name: 'APIs para desenvolvedores',
        anye: true,
        competitor: false
      }
    ]
  }
];

const ShoppingPrecos = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <ComparisonHero competitor={shoppingPrecosData} />
        <ComparisonTable competitor={shoppingPrecosData.name} featureGroups={featureGroups} />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default ShoppingPrecos;
