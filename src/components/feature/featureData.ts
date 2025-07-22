
import { 
  Users, 
  Search, 
  ShoppingCart, 
  BrainCircuit, 
  Bell, 
  ArrowRight,
  Check,
  ChevronsUp,
  Sparkles,
  Plus,
  Package,
  Target,
  FileBarChart,
  Upload,
  RefreshCw,
  Trash2,
  GraduationCap,
  Headphones
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
    id: 'opportunities',
    title: 'Pesquisa de Oportunidades',
    description: 'Encontre produtos com bom giro, visibilidade e pouca concorrência na Amazon.',
    icon: Search,
    color: 'from-blue-500/20 to-blue-700/20',
    textColor: 'text-blue-400',
    borderColor: 'border-blue-500/30',
    bgColor: 'bg-blue-500/10',
    features: [
      {
        title: 'Análise de Oportunidades',
        description: 'Identifique produtos com alto potencial de vendas e baixa concorrência na Amazon.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
        benefits: [
          'Análise de Volume de Vendas',
          'Índice de Concorrência',
          'Previsão de Demanda',
          'Histórico de Preços',
          'Sazonalidade de Produtos'
        ]
      }
    ]
  },
  {
    id: 'ads',
    title: 'Gerenciamento de Anúncios',
    description: 'Gerencie suas ofertas na Amazon com controle total de preços e estoque.',
    icon: Target,
    color: 'from-purple-500/20 to-purple-700/20',
    textColor: 'text-purple-400',
    borderColor: 'border-purple-500/30',
    bgColor: 'bg-purple-500/10',
    features: [
      {
        title: 'Controle de Ofertas',
        description: 'Gerencie preços, estoque e visibilidade das suas ofertas na Amazon.',
        image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=800&auto=format&fit=crop',
        benefits: [
          'Alteração de Preços em Tempo Real',
          'Controle de Estoque',
          'Otimização de Anúncios',
          'Relatórios de Performance',
          'Automação de Campanhas'
        ]
      }
    ]
  },
  {
    id: 'orders',
    title: 'Gerenciamento de Pedidos',
    description: 'Visualize seus pedidos recentes e acompanhe a lucratividade de cada venda.',
    icon: FileBarChart,
    color: 'from-green-500/20 to-green-700/20',
    textColor: 'text-green-400',
    borderColor: 'border-green-500/30', 
    bgColor: 'bg-green-500/10',
    features: [
      {
        title: 'Dashboard de Pedidos',
        description: 'Tenha uma visão completa dos seus pedidos e lucratividade na Amazon.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
        benefits: [
          'Pedidos em Tempo Real',
          'Cálculo de Lucro por Pedido',
          'Histórico de Vendas',
          'Análise de Margem',
          'Relatórios Financeiros'
        ]
      }
    ]
  },
  {
    id: 'catalog',
    title: 'Painel de Fornecedores',
    description: 'Acesse nosso catálogo premium de produtos pré-selecionados para venda na Amazon.',
    icon: Users,
    color: 'from-amber-500/20 to-amber-700/20',
    textColor: 'text-amber-400',
    borderColor: 'border-amber-500/30',
    bgColor: 'bg-amber-500/10',
    features: [
      {
        title: 'Catálogo Premium',
        description: 'Catálogo abrangente de produtos pré-selecionados de fornecedores confiáveis.',
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800&auto=format&fit=crop',
        benefits: [
          'Produtos Pré-selecionados',
          'Fornecedores Verificados',
          'Margens de Lucro Calculadas',
          'Histórico de Performance',
          'Disponibilidade em Tempo Real'
        ]
      }
    ]
  },
  {
    id: 'tools',
    title: 'Ferramentas de Gestão',
    description: 'Conjunto completo de ferramentas para otimizar sua operação na Amazon.',
    icon: Package,
    color: 'from-indigo-500/20 to-indigo-700/20',
    textColor: 'text-indigo-400',
    borderColor: 'border-indigo-500/30',
    bgColor: 'bg-indigo-500/10',
    features: [
      {
        title: 'Verificação de Ofertas',
        description: 'Verifique se produtos existem no catálogo Amazon através do código de barras.',
        image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?q=80&w=800&auto=format&fit=crop',
        benefits: [
          'Verificação por GTIN',
          'Busca por Código de Barras',
          'Validação de Catálogo',
          'Cadastro Rápido'
        ]
      },
      {
        title: 'Publicação em Massa',
        description: 'Publique múltiplos produtos na Amazon usando código de barras ou ASIN.',
        image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=800&auto=format&fit=crop',
        benefits: [
          'Upload por Planilha',
          'Publicação por ASIN',
          'Validação Automática',
          'Processamento em Lote'
        ]
      },
      {
        title: 'Atualização em Massa',
        description: 'Atualize preços e estoque de múltiplas ofertas simultaneamente.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
        benefits: [
          'Atualização de Preços',
          'Controle de Estoque',
          'Sincronização Automática',
          'Logs de Alterações'
        ]
      },
      {
        title: 'Exclusão em Massa',
        description: 'Remova múltiplas ofertas da Amazon de forma rápida e organizada.',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop',
        benefits: [
          'Exclusão Segura',
          'Backup Automático',
          'Confirmação de Ações',
          'Histórico de Exclusões'
        ]
      }
    ]
  },
  {
    id: 'support',
    title: 'Suporte e Treinamento',
    description: 'Treinamentos exclusivos e suporte premium para acelerar seu crescimento.',
    icon: GraduationCap,
    color: 'from-rose-500/20 to-rose-700/20',
    textColor: 'text-rose-400',
    borderColor: 'border-rose-500/30',
    bgColor: 'bg-rose-500/10',
    features: [
      {
        title: 'Treinamentos Exclusivos',
        description: 'Série de videoaulas sobre como usar a plataforma e acelerar seu crescimento.',
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop',
        benefits: [
          'Videoaulas Práticas',
          'Estratégias de Vendas',
          'Otimização de Operações',
          'Casos de Sucesso',
          'Atualizações Regulares'
        ]
      },
      {
        title: 'Suporte Premium',
        description: 'Atendimento especializado para tirar dúvidas e otimizar sua operação.',
        image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=800&auto=format&fit=crop',
        benefits: [
          'Suporte Prioritário',
          'Consultoria Especializada',
          'Chat em Tempo Real',
          'Análise Personalizada',
          'Atendimento Dedicado'
        ]
      }
    ]
  }
];
