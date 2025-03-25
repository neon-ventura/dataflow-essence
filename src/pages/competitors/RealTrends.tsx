
import React from 'react';
import Navbar from '@/components/Navbar';
import ComparisonHero from '@/components/ComparisonHero';
import ComparisonTable from '@/components/ComparisonTable';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

const realTrendsData = {
  name: 'Real Trends',
  logo: 'https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&q=80',
  description: 'Veja como a Anye supera a Real Trends em recursos de IA, facilidade de uso, e integração completa com múltiplos marketplaces brasileiros.'
};

const featureGroups = [
  {
    title: 'Análise de Mercado',
    features: [
      {
        name: 'Monitoramento em tempo real',
        anye: true,
        competitor: true
      },
      {
        name: 'Análise de tendências com IA',
        anye: true,
        competitor: false
      },
      {
        name: 'Identificação de oportunidades',
        anye: true,
        competitor: true
      },
      {
        name: 'Insights de sazonalidade',
        anye: true,
        competitor: false
      }
    ]
  },
  {
    title: 'Automação e Precificação',
    features: [
      {
        name: 'Precificação dinâmica',
        anye: true,
        competitor: true
      },
      {
        name: 'Regras de precificação avançadas',
        anye: true,
        competitor: false
      },
      {
        name: 'Automação de ajustes',
        anye: true,
        competitor: true
      },
      {
        name: 'Simulações de cenários de preço',
        anye: true,
        competitor: false
      }
    ]
  },
  {
    title: 'Experiência do Usuário',
    features: [
      {
        name: 'Interface intuitiva',
        anye: true,
        competitor: false
      },
      {
        name: 'Dashboards personalizáveis',
        anye: true,
        competitor: true
      },
      {
        name: 'Alertas personalizados',
        anye: true,
        competitor: true
      },
      {
        name: 'Aplicativo mobile completo',
        anye: true,
        competitor: false
      }
    ]
  },
  {
    title: 'Suporte e Implantação',
    features: [
      {
        name: 'Implementação rápida',
        anye: true,
        competitor: false
      },
      {
        name: 'Suporte técnico dedicado',
        anye: true,
        competitor: true
      },
      {
        name: 'Consultoria estratégica',
        anye: true,
        competitor: false
      },
      {
        name: 'Treinamento personalizado',
        anye: true,
        competitor: false
      }
    ]
  }
];

const RealTrends = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <ComparisonHero competitor={realTrendsData} />
        <ComparisonTable competitor={realTrendsData.name} featureGroups={featureGroups} />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default RealTrends;
