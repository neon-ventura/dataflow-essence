import React from 'react';
import Navbar from '@/components/Navbar';
import ComparisonHero from '@/components/ComparisonHero';
import ComparisonTable from '@/components/ComparisonTable';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

const mercadoTurboData = {
  name: 'Mercado Turbo',
  logo: '/lovable-uploads/06944e6f-3c83-4561-92bf-c539a1999282.png',
  description: 'Compare a Anye com o Mercado Turbo e descubra como nossa solução oferece cobertura multi-marketplace, análises mais avançadas e mais recursos por um preço justo.'
};

const featureGroups = [
  {
    title: 'Cobertura de Marketplaces',
    features: [
      {
        name: 'Mercado Livre',
        anye: true,
        competitor: true
      },
      {
        name: 'Amazon Brasil',
        anye: true,
        competitor: false
      },
      {
        name: 'Shopee',
        anye: true,
        competitor: false
      },
      {
        name: 'Magalu',
        anye: true,
        competitor: false
      }
    ]
  },
  {
    title: 'Gestão de Produtos',
    features: [
      {
        name: 'Gestão centralizada de catálogo',
        anye: true,
        competitor: true
      },
      {
        name: 'Otimização de fichas de produto',
        anye: true,
        competitor: true
      },
      {
        name: 'Análise de qualidade de listagem',
        anye: true,
        competitor: false
      },
      {
        name: 'Recomendações para otimização SEO',
        anye: true,
        competitor: false
      }
    ]
  },
  {
    title: 'Inteligência de Mercado',
    features: [
      {
        name: 'Análise de concorrentes',
        anye: true,
        competitor: true
      },
      {
        name: 'Sugestões de preço com IA',
        anye: true,
        competitor: false
      },
      {
        name: 'Insights de tendências',
        anye: true,
        competitor: false
      },
      {
        name: 'Monitoramento de reputação',
        anye: true,
        competitor: true
      }
    ]
  },
  {
    title: 'Suporte e Valor',
    features: [
      {
        name: 'Onboarding personalizado',
        anye: true,
        competitor: true
      },
      {
        name: 'Suporte técnico ágil',
        anye: true,
        competitor: false
      },
      {
        name: 'Treinamentos inclusos',
        anye: true,
        competitor: false
      },
      {
        name: 'Melhor custo-benefício',
        anye: true,
        competitor: false
      }
    ]
  }
];

const MercadoTurbo = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <ComparisonHero competitor={mercadoTurboData} />
        <ComparisonTable competitor={mercadoTurboData.name} featureGroups={featureGroups} />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default MercadoTurbo;
