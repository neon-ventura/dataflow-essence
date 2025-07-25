import React from 'react';
import Navbar from '@/components/Navbar';
import ComparisonHero from '@/components/ComparisonHero';
import ComparisonTable from '@/components/ComparisonTable';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

const nubimetricsData = {
  name: 'Nubimetrics',
  logo: '/lovable-uploads/7f13d4c3-d1e8-492d-9b58-eb29629044bd.png',
  description: 'Entenda por que a Anye supera a Nubimetrics em automação inteligente, insights acionáveis e integração completa para marketplaces.'
};

const featureGroups = [
  {
    title: 'Coleta e Qualidade de Dados',
    features: [
      {
        name: 'Precisão de dados',
        anye: true,
        competitor: true
      },
      {
        name: 'Frequência de atualização',
        anye: true,
        competitor: true
      },
      {
        name: 'Amplitude de marketplaces',
        anye: true,
        competitor: false
      },
      {
        name: 'Histórico de preços ilimitado',
        anye: true,
        competitor: false
      }
    ]
  },
  {
    title: 'Inteligência e Automação',
    features: [
      {
        name: 'Algoritmos de IA para sugestões',
        anye: true,
        competitor: false
      },
      {
        name: 'Automatização de decisões',
        anye: true,
        competitor: false
      },
      {
        name: 'Alertas personalizáveis',
        anye: true,
        competitor: true
      },
      {
        name: 'Previsão de demanda',
        anye: true,
        competitor: false
      }
    ]
  },
  {
    title: 'Usabilidade',
    features: [
      {
        name: 'Facilidade de uso sem treinamento',
        anye: true,
        competitor: false
      },
      {
        name: 'Dashboards personalizáveis',
        anye: true,
        competitor: true
      },
      {
        name: 'App mobile completo',
        anye: true,
        competitor: false
      },
      {
        name: 'Exportação de relatórios',
        anye: true,
        competitor: true
      }
    ]
  },
  {
    title: 'Integração e Implementação',
    features: [
      {
        name: 'Implementação rápida (menos de 24h)',
        anye: true,
        competitor: false
      },
      {
        name: 'Integração com ERPs populares',
        anye: true,
        competitor: false
      },
      {
        name: 'API aberta para desenvolvedores',
        anye: true,
        competitor: false
      },
      {
        name: 'Atualizações automáticas',
        anye: true,
        competitor: true
      }
    ]
  }
];

const Nubimetrics = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <ComparisonHero competitor={nubimetricsData} />
        <ComparisonTable competitor={nubimetricsData.name} featureGroups={featureGroups} />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Nubimetrics;
