
import React from 'react';
import EnhancedFeatureCard from './EnhancedFeatureCard';
import { 
  Users, 
  Puzzle, 
  ShoppingCart, 
  BrainCircuit, 
  Bell, 
  LineChart,
  Database,
  BarChart4,
  TrendingUp,
  Package,
  Truck,
  Check
} from 'lucide-react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
          icon: Users,
          imageSrc: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
          featurePoints: [
            {
              title: 'Análise de Desempenho',
              description: 'Compare fornecedores por tempo de entrega, qualidade e preço.'
            },
            {
              title: 'Gestão de Contratos',
              description: 'Armazene e acompanhe todos os contratos de fornecimento em um só lugar.'
            },
            {
              title: 'Histórico de Pedidos',
              description: 'Visualize o histórico completo de pedidos por fornecedor.'
            }
          ]
        },
        {
          title: 'Painel de Compras',
          description: 'Visualize oportunidades de compra com comparativos de preços entre diferentes fornecedores.',
          icon: ShoppingCart,
          imageSrc: "https://images.unsplash.com/photo-1556742031-c6961e8560b0?q=80&w=800&auto=format&fit=crop",
          featurePoints: [
            {
              title: 'Recomendações de Compra',
              description: 'Receba sugestões inteligentes sobre o que comprar e quando.'
            },
            {
              title: 'Comparativo de Preços',
              description: 'Compare preços entre fornecedores para maximizar lucros.'
            },
            {
              title: 'Previsão de Demanda',
              description: 'Planeje suas compras com base em previsões de demanda.'
            }
          ]
        },
        {
          title: 'Gestão de Estoque',
          description: 'Controle seu inventário e evite rupturas ou excessos de estoque.',
          icon: Package,
          imageSrc: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?q=80&w=800&auto=format&fit=crop",
          featurePoints: [
            {
              title: 'Níveis de Estoque em Tempo Real',
              description: 'Monitore seus níveis de estoque em todos os canais e depósitos.'
            },
            {
              title: 'Alertas de Reposição',
              description: 'Receba notificações quando for hora de reabastecer produtos.'
            },
            {
              title: 'Relatórios de Giro',
              description: 'Analise quais produtos têm melhor e pior giro de estoque.'
            }
          ]
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
          icon: Puzzle,
          imageSrc: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=800&auto=format&fit=crop",
          featurePoints: [
            {
              title: 'Banco de Dados de Veículos',
              description: 'Acesse uma base completa de modelos e anos de veículos.'
            },
            {
              title: 'Verificação de Compatibilidade',
              description: 'Garanta que as peças sejam compatíveis com os veículos dos clientes.'
            },
            {
              title: 'Importação de Catálogos',
              description: 'Importe facilmente catálogos de compatibilidade dos fornecedores.'
            },
            {
              title: 'Integração com Marketplaces',
              description: 'Exporte dados de compatibilidade para todas as plataformas de venda.'
            }
          ]
        },
        {
          title: 'Gestão de Catálogos',
          description: 'Organize e mantenha seus catálogos de produtos atualizados e completos.',
          icon: Database,
          imageSrc: "https://images.unsplash.com/photo-1581094788433-cdded13278f0?q=80&w=800&auto=format&fit=crop",
          featurePoints: [
            {
              title: 'Editor de Fichas Técnicas',
              description: 'Crie e edite fichas técnicas detalhadas para seus produtos.'
            },
            {
              title: 'Importação em Massa',
              description: 'Importe dados de produtos em lote de planilhas ou arquivos CSV.'
            },
            {
              title: 'Gestão de Imagens',
              description: 'Organize e otimize imagens de produtos para todos os canais de venda.'
            }
          ]
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
          icon: BrainCircuit,
          imageSrc: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
          featurePoints: [
            {
              title: 'Chatbot Inteligente',
              description: 'Atenda perguntas frequentes automaticamente com IA treinada para seu negócio.'
            },
            {
              title: 'Sugestão de Respostas',
              description: 'Receba sugestões de respostas para acelerar seu atendimento humano.'
            },
            {
              title: 'Personalização por Cliente',
              description: 'A IA aprende com o histórico de cada cliente para respostas mais personalizadas.'
            }
          ]
        },
        {
          title: 'Avisos Inteligentes',
          description: 'Saiba a hora certa de repor estoques do Full, FBA e muito mais com alertas personalizados baseados em dados.',
          icon: Bell,
          imageSrc: "https://images.unsplash.com/photo-1594980596870-8aa52a78d8cd?q=80&w=800&auto=format&fit=crop",
          featurePoints: [
            {
              title: 'Alertas de Reposição',
              description: 'Seja notificado quando o estoque estiver baixo em qualquer marketplace.'
            },
            {
              title: 'Previsão de Ruptura',
              description: 'A IA prevê quando um produto ficará sem estoque com base no histórico de vendas.'
            },
            {
              title: 'Alertas de Performance',
              description: 'Receba notificações sobre quedas de desempenho em métricas importantes.'
            }
          ]
        },
        {
          title: 'Previsões de Demanda',
          description: 'Utilize modelos de IA para prever tendências de vendas e ajustar seu estoque de forma proativa.',
          icon: LineChart,
          imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
          featurePoints: [
            {
              title: 'Previsão de Vendas',
              description: 'Receba previsões precisas de vendas futuras com base em dados históricos.'
            },
            {
              title: 'Análise de Sazonalidade',
              description: 'Identifique padrões sazonais para planejar estoques com antecedência.'
            },
            {
              title: 'Sugestões de Compra',
              description: 'Receba recomendações sobre quanto comprar de cada produto.'
            }
          ]
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
          <div key={sectionIndex} className="mb-24">
            <div className="text-center max-w-2xl mx-auto mb-12 animate-fade-in-up scroll-animate">
              <h3 className="mb-4 text-gradient">{section.title}</h3>
              <p className="text-lg text-neutral-dark">
                {section.description}
              </p>
            </div>
            
            <div className="hidden md:block">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {section.features.map((feature, index) => (
                  <EnhancedFeatureCard
                    key={index}
                    title={feature.title}
                    description={feature.description}
                    icon={feature.icon}
                    imageSrc={feature.imageSrc}
                    index={index + (sectionIndex * 3)}
                    featurePoints={feature.featurePoints}
                  />
                ))}
              </div>
            </div>

            {/* Mobile carousel for small screens */}
            <div className="md:hidden">
              <Carousel className="w-full">
                <CarouselContent>
                  {section.features.map((feature, index) => (
                    <CarouselItem key={index}>
                      <EnhancedFeatureCard
                        title={feature.title}
                        description={feature.description}
                        icon={feature.icon}
                        imageSrc={feature.imageSrc}
                        index={index + (sectionIndex * 3)}
                        featurePoints={feature.featurePoints}
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="hidden lg:flex absolute left-0" />
                <CarouselNext className="hidden lg:flex absolute right-0" />
              </Carousel>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
