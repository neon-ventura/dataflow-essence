
import { 
  Zap,
  BarChart3,
  ShoppingCart,
  Rocket,
  RefreshCw,
  TrendingUp
} from 'lucide-react';

export const features = [
  {
    id: "inventory",
    title: "Gestão de Estoque",
    color: "from-blue-500 to-cyan-400",
    icon: ShoppingCart,
    primaryImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    description: "Automatize sua gestão de estoque com IA para prever demandas e eliminar rupturas",
    benefits: [
      "Previsão de demanda com IA",
      "Alerta de estoque baixo em tempo real",
      "Sincronização com todos os canais",
      "Rastreamento de lotes e validades"
    ],
    metrics: [
      { value: "94%", label: "redução em rupturas de estoque" },
      { value: "32%", label: "aumento na rotatividade de produtos" }
    ],
    featureItems: [
      {
        title: "Compras Inteligentes",
        description: "A IA analisa seu histórico de vendas e sazonalidades para sugerir o momento ideal para novas compras, evitando capital parado."
      },
      {
        title: "Gestão Multi-canal",
        description: "Sincronização automática de inventário entre todos os marketplaces, evitando vendas de produtos sem estoque."
      },
      {
        title: "Alerta de Validade",
        description: "Sistema de notificações para produtos próximos do vencimento, permitindo ações preventivas como promoções."
      }
    ]
  },
  {
    id: "analytics",
    title: "Analytics & BI",
    color: "from-purple-600 to-indigo-500",
    icon: BarChart3,
    primaryImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    description: "Transforme dados em decisões com analytics em tempo real e dashboards customizáveis",
    benefits: [
      "Dashboards personalizáveis",
      "Métricas em tempo real",
      "Comparativo com concorrentes",
      "Insights automatizados de IA"
    ],
    metrics: [
      { value: "41%", label: "aumento na taxa de conversão" },
      { value: "3.2x", label: "mais insights acionáveis" }
    ],
    featureItems: [
      {
        title: "Performance em Tempo Real",
        description: "Acompanhe vendas, custos e margens com atualização em segundos, permitindo ajustes imediatos em campanhas e preços."
      },
      {
        title: "Comparativo Competitivo",
        description: "Analise seu posicionamento em relação aos principais concorrentes em cada marketplace."
      },
      {
        title: "Relatórios Automatizados",
        description: "Receba relatórios periódicos por email com as principais métricas e oportunidades identificadas."
      }
    ]
  },
  {
    id: "marketing",
    title: "Marketing Integrado",
    color: "from-amber-500 to-orange-400",
    icon: Rocket,
    primaryImage: "https://images.unsplash.com/photo-1432888622747-4eb9a8f5a8ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    description: "Campanhas inteligentes e automatizadas para maximizar seu ROI em todos os canais",
    benefits: [
      "Campanhas cross-channel",
      "Email marketing automatizado",
      "Landing pages otimizadas",
      "Segmentação avançada de clientes"
    ],
    metrics: [
      { value: "68%", label: "aumento em taxa de engajamento" },
      { value: "2.7x", label: "melhor ROI em campanhas" }
    ],
    featureItems: [
      {
        title: "Automação Multicanal",
        description: "Configure uma única campanha que se adapta automaticamente para cada canal com copy e formato otimizados."
      },
      {
        title: "Email Marketing Inteligente",
        description: "Sequências automatizadas baseadas no comportamento do usuário, com testes A/B integrados."
      },
      {
        title: "Segmentação Avançada",
        description: "Divida sua base em micro-segmentos ultra-específicos baseados em comportamento e histórico de compras."
      }
    ]
  },
  {
    id: "integration",
    title: "Integrações Avançadas",
    color: "from-green-500 to-emerald-400",
    icon: RefreshCw,
    primaryImage: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    description: "Conecte-se a mais de 50 plataformas e serviços com nossa API robusta e webhooks personalizáveis",
    benefits: [
      "API RESTful documentada",
      "Webhooks customizáveis",
      "Integrações com ERPs",
      "Conectores para marketplaces"
    ],
    metrics: [
      { value: "87%", label: "menos tempo gasto em atarefas manuais" },
      { value: "99.9%", label: "uptime garantido por SLA" }
    ],
    featureItems: [
      {
        title: "API para Desenvolvedores",
        description: "API completa e documentada para criar integrações personalizadas com qualquer sistema interno."
      },
      {
        title: "Sincronização com ERPs",
        description: "Conectores prontos para os principais ERPs do mercado, incluindo SAP, Oracle e Totvs."
      },
      {
        title: "Webhooks em Tempo Real",
        description: "Receba notificações instantâneas de eventos como novas vendas, alterações de preço de concorrentes e mais."
      }
    ]
  }
];
