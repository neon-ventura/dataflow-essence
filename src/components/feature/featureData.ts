
import { 
  Users, 
  Puzzle, 
  ShoppingCart, 
  BrainCircuit, 
  Bell, 
  ArrowRight,
  Check,
  ChevronsUp,
  Sparkles,
  Plus
} from 'lucide-react';
import { LucideIcon } from 'lucide-react';

export interface FeatureType {
  title: string;
  description: string;
  image: string;
  benefits: string[];
}

export interface FeatureSectionType {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  textColor: string;
  borderColor: string;
  bgColor: string;
  features: FeatureType[];
}

export const featureSections: FeatureSectionType[] = [
  {
    id: 'suppliers',
    title: 'Gestão de Fornecedores',
    description: 'Otimize sua cadeia de suprimentos com dados confiáveis e insights valiosos.',
    icon: Users,
    color: 'from-blue-500/20 to-blue-700/20',
    textColor: 'text-blue-600',
    borderColor: 'border-blue-200',
    bgColor: 'bg-blue-50',
    features: [
      {
        title: 'Painel de Fornecedores',
        description: 'Gerencie seus fornecedores de forma centralizada, com métricas de performance e confiabilidade.',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop',
        benefits: [
          'Análise de Desempenho',
          'Gestão de Contratos',
          'Histórico de Pedidos',
          'Alertas de Atrasos'
        ]
      }
    ]
  },
  {
    id: 'purchasing',
    title: 'Compras Inteligentes',
    description: 'Tome decisões baseadas em dados para compras mais rentáveis e estratégicas.',
    icon: ShoppingCart,
    color: 'from-purple-500/20 to-purple-700/20',
    textColor: 'text-purple-600',
    borderColor: 'border-purple-200',
    bgColor: 'bg-purple-50',
    features: [
      {
        title: 'Painel de Compras',
        description: 'Visualize oportunidades de compra com comparativos de preços entre diferentes fornecedores.',
        image: 'https://images.unsplash.com/photo-1556742031-c6961e8560b0?q=80&w=800&auto=format&fit=crop',
        benefits: [
          'Recomendações de Compra',
          'Comparativo de Preços',
          'Previsão de Demanda',
          'Alertas de Oportunidades'
        ]
      }
    ]
  },
  {
    id: 'auto',
    title: 'Autopeças & Compatibilidade',
    description: 'Soluções especializadas para o setor automotivo com gestão avançada de compatibilidade.',
    icon: Puzzle,
    color: 'from-green-500/20 to-green-700/20',
    textColor: 'text-green-600', 
    borderColor: 'border-green-200',
    bgColor: 'bg-green-50',
    features: [
      {
        title: 'Compatibilidade Autoparts',
        description: 'Sistema avançado de verificação de compatibilidade para o setor de autopeças.',
        image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=800&auto=format&fit=crop',
        benefits: [
          'Banco de Dados de Veículos',
          'Verificação de Compatibilidade',
          'Importação de Catálogos',
          'Integração com Marketplaces'
        ]
      }
    ]
  },
  {
    id: 'ai',
    title: 'Inteligência Artificial',
    description: 'Recursos avançados com IA para impulsionar seu negócio e automatizar tarefas.',
    icon: BrainCircuit,
    color: 'from-amber-500/20 to-amber-700/20',
    textColor: 'text-amber-600',
    borderColor: 'border-amber-200',
    bgColor: 'bg-amber-50',
    features: [
      {
        title: 'Respostas Automáticas com IA',
        description: 'Atenda seus clientes automaticamente com respostas inteligentes baseadas em IA.',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop',
        benefits: [
          'Chatbot Inteligente',
          'Sugestão de Respostas',
          'Personalização por Cliente',
          'Análise de Sentimento'
        ]
      },
      {
        title: 'Avisos Inteligentes',
        description: 'Saiba a hora certa de repor estoques do Full, FBA e muito mais com alertas personalizados.',
        image: 'https://images.unsplash.com/photo-1594980596870-8aa52a78d8cd?q=80&w=800&auto=format&fit=crop',
        benefits: [
          'Alertas de Reposição',
          'Previsão de Ruptura',
          'Alertas de Performance',
          'Notificações Personalizáveis'
        ]
      }
    ]
  }
];
