import React from 'react';
import Navbar from '@/components/Navbar';
import ComparisonHero from '@/components/ComparisonHero';
import ComparisonTable from '@/components/ComparisonTable';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

const avantProData = {
  name: 'Avant Pro',
  logo: '/lovable-uploads/a6a0c105-5b60-4b29-8594-ead1eb1e5048.png',
  description: 'Compare a Anye com a Avant Pro. Descubra como nossa plataforma oferece funcionalidades mais intuitivas, preços mais acessíveis e resultados superiores sem a complexidade desnecessária.'
};

const featureGroups = [
  {
    title: 'Interface e Usabilidade',
    features: [
      {
        name: 'Interface moderna e intuitiva',
        anye: true,
        competitor: false,
        anyeDetail: 'Design clean e fácil de usar desde o primeiro acesso'
      },
      {
        name: 'Onboarding simplificado',
        anye: true,
        competitor: false
      },
      {
        name: 'Acesso mobile responsivo',
        anye: true,
        competitor: true
      },
      {
        name: 'Personalização de dashboards',
        anye: true,
        competitor: true
      }
    ]
  },
  {
    title: 'Funcionalidades de Análise',
    features: [
      {
        name: 'Monitoramento de preços em tempo real',
        anye: true,
        competitor: true
      },
      {
        name: 'Análise de concorrentes',
        anye: true,
        competitor: true
      },
      {
        name: 'Sugestões de preço inteligentes com IA',
        anye: true,
        competitor: false
      },
      {
        name: 'Automação de ajustes de preço',
        anye: true,
        competitor: true
      }
    ]
  },
  {
    title: 'Integrações',
    features: [
      {
        name: 'Integração com Mercado Livre',
        anye: true,
        competitor: true
      },
      {
        name: 'Integração com Shopee',
        anye: true,
        competitor: true
      },
      {
        name: 'Integração com Amazon',
        anye: true,
        competitor: true
      },
      {
        name: 'API aberta para customizações',
        anye: true,
        competitor: false
      }
    ]
  },
  {
    title: 'Suporte e Custos',
    features: [
      {
        name: 'Suporte técnico dedicado',
        anye: true,
        competitor: true
      },
      {
        name: 'Preço acessível',
        anye: true,
        competitor: false
      },
      {
        name: 'Período de teste gratuito',
        anye: true,
        competitor: false
      },
      {
        name: 'Sem taxas ocultas',
        anye: true,
        competitor: false
      }
    ]
  }
];

const AvantPro = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <ComparisonHero competitor={avantProData} />
        <ComparisonTable competitor={avantProData.name} featureGroups={featureGroups} />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default AvantPro;
