
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles,
  ArrowRight, 
  ChevronRight,
  Zap,
  BarChart3,
  ShoppingCart,
  Rocket,
  RefreshCw,
  AlertCircle,
  TrendingUp,
  Users,
  Shield,
  Database
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Link } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";
import SavingsCalculator from '@/components/calculator/SavingsCalculator';

const Features = () => {
  const { toast } = useToast();
  const [activeFeature, setActiveFeature] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);
  
  const features = [
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

  const showFeatureDetails = (featureId: string) => {
    toast({
      title: "Função disponível em breve!",
      description: `Detalhes completos sobre ${featureId} estarão disponíveis em nossa próxima atualização.`,
      variant: "default",
    });
  };
  
  const featureContainerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };
  
  const featureItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const activeFeatureData = features[activeFeature];

  return (
    <section id="features" className="py-12 md:py-24 overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-900/20 via-background to-background -z-10"></div>
      
      <div className="container px-4 mx-auto relative max-w-7xl">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 px-4 py-1.5 text-sm font-medium text-blue-500 ring-1 ring-inset ring-blue-500/20 mb-4">
            <Sparkles size={16} className="animate-pulse" />
            <span>Potencialize seu negócio</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Ferramentas <span className="text-gradient bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">revolucionárias</span> para seu sucesso</h1>
          <p className="text-lg text-muted-foreground">
            Descubra como nossas soluções vão transformar sua operação e maximizar seus resultados nos marketplaces
          </p>
        </motion.div>

        {/* Feature Navigation */}
        <div className="flex overflow-x-auto py-2 mb-12 no-scrollbar justify-center gap-2 md:gap-4">
          {features.map((feature, idx) => (
            <motion.button 
              key={feature.id}
              onClick={() => setActiveFeature(idx)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={cn(
                "flex items-center gap-2 py-2 px-3 md:px-4 rounded-full transition-all whitespace-nowrap text-sm md:text-base",
                activeFeature === idx 
                  ? `bg-gradient-to-r ${feature.color} text-white shadow-lg`
                  : "bg-background/80 backdrop-blur-sm hover:bg-muted border border-border"
              )}
            >
              <feature.icon size={18} />
              <span>{feature.title}</span>
            </motion.button>
          ))}
        </div>

        {/* Active Feature Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFeature}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16"
          >
            {/* Feature Overview */}
            <div className="md:col-span-5 flex flex-col justify-between">
              <div>
                <div className={cn(
                  "inline-flex items-center gap-2 rounded-full bg-gradient-to-r px-4 py-1.5 mb-4",
                  `${activeFeatureData.color} bg-opacity-10 text-white`
                )}>
                  <activeFeatureData.icon size={16} />
                  <span className="font-medium">{activeFeatureData.title}</span>
                </div>
                
                <h2 className="text-3xl font-bold mb-4">{activeFeatureData.description}</h2>
                
                <ul className="space-y-2 mb-6">
                  {activeFeatureData.benefits.map((benefit, idx) => (
                    <motion.li 
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-center gap-2"
                    >
                      <div className={cn(
                        "flex-shrink-0 rounded-full p-1 bg-gradient-to-r",
                        activeFeatureData.color
                      )}>
                        <ChevronRight className="h-3 w-3 text-white" />
                      </div>
                      <span>{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {activeFeatureData.metrics.map((metric, idx) => (
                    <div key={idx} className="bg-muted/50 backdrop-blur-sm rounded-xl p-4 border border-border">
                      <div className={cn(
                        "text-2xl font-bold bg-gradient-to-r bg-clip-text text-transparent mb-1",
                        activeFeatureData.color
                      )}>
                        {metric.value}
                      </div>
                      <div className="text-sm text-muted-foreground">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-auto">
                <Button 
                  onClick={() => showFeatureDetails(activeFeatureData.id)}
                  className={cn(
                    "w-full md:w-auto text-white bg-gradient-to-r",
                    activeFeatureData.color
                  )}
                >
                  <span>Explorar {activeFeatureData.title}</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                
                <Link to="/features" className="mt-2 text-sm text-muted-foreground inline-flex items-center hover:text-primary transition-colors">
                  <span>Ver todas as funcionalidades</span>
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </div>
            </div>
            
            {/* Feature Image & Details */}
            <div className="md:col-span-7">
              <div className="relative rounded-2xl overflow-hidden h-64 md:h-80 mb-6 group">
                <img 
                  src={activeFeatureData.primaryImage} 
                  alt={activeFeatureData.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className={cn(
                    "inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md px-3 py-1 text-white text-sm mb-3"
                  )}>
                    <Zap size={14} className="text-yellow-400" />
                    <span>Aumente sua produtividade em até 10x</span>
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    {activeFeatureData.title}: Transforme sua operação
                  </h3>
                </div>
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                {activeFeatureData.featureItems.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + idx * 0.1 }}
                    className={cn(
                      "rounded-xl p-4 border border-border relative overflow-hidden group",
                      hovered === idx ? "bg-gradient-to-r from-muted/70 to-background shadow-md" : "bg-muted/30 hover:bg-muted/50"
                    )}
                    onMouseEnter={() => setHovered(idx)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    <div className="relative z-10">
                      <h4 className="text-lg font-semibold mb-1">{item.title}</h4>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                    
                    <div 
                      className={cn(
                        "absolute inset-0 bg-gradient-to-r opacity-0 transition-opacity duration-300",
                        activeFeatureData.color,
                        hovered === idx ? "opacity-5" : ""
                      )}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Implementation Timeline */}
        <div className="mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Implantação <span className="text-gradient bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">Simplificada</span></h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comece a utilizar a plataforma em menos de 48 horas, sem interromper suas operações
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto relative">
            {/* Timeline Connector */}
            <div className="absolute left-8 top-8 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>
            
            {[
              {
                step: "01",
                title: "Onboarding Personalizado",
                description: "Nossa equipe configura sua conta baseada nas necessidades específicas do seu negócio",
                icon: Users,
                delay: 0
              },
              {
                step: "02",
                title: "Integração com Marketplaces",
                description: "Conectamos automaticamente com todos os canais onde você já opera",
                icon: RefreshCw,
                delay: 0.1
              },
              {
                step: "03",
                title: "Importação de Dados",
                description: "Seus dados históricos são importados para fornecer insights imediatos",
                icon: Database,
                delay: 0.2
              },
              {
                step: "04",
                title: "Treinamento da Equipe",
                description: "Sessões de treinamento para garantir que todos aproveitem ao máximo a plataforma",
                icon: TrendingUp,
                delay: 0.3
              },
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: item.delay }}
                className="flex gap-8 mb-12 relative"
              >
                <div className="relative">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white font-bold z-10">
                    {item.step}
                  </div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 blur-lg opacity-40 scale-125"></div>
                </div>
                
                <div className="bg-muted/30 backdrop-blur-sm border border-border rounded-xl p-6 flex-1 group hover:bg-muted/50 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-background border border-border">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-blue-500 transition-colors">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ROI Calculator */}
        <div className="mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-green-500/10 to-emerald-500/10 px-4 py-1.5 text-sm font-medium text-green-500 ring-1 ring-inset ring-green-500/20 mb-4">
              <TrendingUp size={16} />
              <span>ROI Calculator</span>
            </div>
            <h2 className="text-3xl font-bold mb-4">
              Calcule seu <span className="text-gradient bg-gradient-to-r from-green-500 to-emerald-400">Potencial</span>
            </h2>
            <p className="text-muted-foreground">
              Descubra quanto você pode economizar e potencializar seus resultados ao utilizar nossa plataforma
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            <SavingsCalculator />
          </div>
        </div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 p-px">
            <div className="rounded-2xl bg-[linear-gradient(#000510_0%,#001253_100%)] p-8 md:p-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(37,99,235,0.2),_transparent_50%)] w-full h-full"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(124,58,237,0.2),_transparent_50%)] w-full h-full"></div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Pronto para revolucionar sua operação?</h2>
              <p className="text-blue-200 mb-8 max-w-xl mx-auto">
                Agende uma demonstração personalizada e descubra como nossos recursos podem transformar seu negócio nos marketplaces
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-blue-900 hover:bg-blue-50">
                  Solicitar demonstração
                </Button>
                <Button variant="outline" className="text-white border-white/30 hover:bg-white/10">
                  Falar com especialista
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
