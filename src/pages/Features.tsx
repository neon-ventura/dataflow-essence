
import React from 'react';
import { motion } from 'framer-motion';
import { Check, ShoppingCart, TrendingUp, Users, Shield, Database, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { cn } from '@/lib/utils';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import SavingsCalculator from '@/components/calculator/SavingsCalculator';

const Features = () => {
  const featureCategories = [
    {
      id: "inventory",
      title: "Gestão de Estoque",
      icon: Database,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
      description: "Controle completo do seu estoque com integração a marketplaces.",
      features: [
        {
          title: "Controle Multicanal",
          description: "Gerencie seu estoque em todos os marketplaces de forma centralizada.",
          benefits: [
            "Sincronização automática entre canais",
            "Prevenção de vendas sem estoque",
            "Visibilidade em tempo real do estoque",
            "Redução de erros operacionais",
          ],
          image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000&auto=format&fit=crop"
        },
        {
          title: "Alertas de Reposição",
          description: "Seja notificado automaticamente quando seu estoque atingir níveis críticos.",
          benefits: [
            "Definição de níveis mínimos personalizados",
            "Notificações por e-mail e app",
            "Previsão inteligente de demanda",
            "Recomendações de quantidade para reposição",
          ],
          image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=1000&auto=format&fit=crop"
        },
        {
          title: "Gestão de Fornecedores",
          description: "Cadastre e gerencie seus fornecedores com dados completos e histórico de compras.",
          benefits: [
            "Comparativo de preços entre fornecedores",
            "Histórico de lead time por produto",
            "Avaliação de desempenho de fornecedores",
            "Automação de pedidos de compra",
          ],
          image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1000&auto=format&fit=crop"
        }
      ]
    },
    {
      id: "analytics",
      title: "Análise de Dados",
      icon: TrendingUp,
      color: "text-purple-600",
      bgColor: "bg-purple-100",
      description: "Insights poderosos para tomar decisões baseadas em dados reais.",
      features: [
        {
          title: "Dashboards Personalizados",
          description: "Visualize seus dados de vendas, estoque e performance em painéis intuitivos.",
          benefits: [
            "Visão consolidada de todos os marketplaces",
            "Métricas personalizáveis por objetivo",
            "Acompanhamento de tendências de vendas",
            "Identificação rápida de problemas",
          ],
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop"
        },
        {
          title: "Análise de Rentabilidade",
          description: "Entenda a rentabilidade real de cada produto considerando todos os custos.",
          benefits: [
            "Cálculo automático de margens",
            "Análise de custos ocultos",
            "Segmentação por categoria e marketplace",
            "Identificação de produtos mais rentáveis",
          ],
          image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=1000&auto=format&fit=crop"
        },
        {
          title: "Relatórios Avançados",
          description: "Gere relatórios detalhados para qualquer aspecto do seu negócio.",
          benefits: [
            "Exportação em múltiplos formatos",
            "Agendamento de relatórios periódicos",
            "Compartilhamento seguro com equipe",
            "Visualizações personalizáveis",
          ],
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop"
        }
      ]
    },
    {
      id: "pricing",
      title: "Precificação Inteligente",
      icon: ShoppingCart,
      color: "text-green-600",
      bgColor: "bg-green-100",
      description: "Estratégias de precificação dinâmica para maximizar suas vendas e margens.",
      features: [
        {
          title: "Monitoramento de Concorrentes",
          description: "Acompanhe os preços dos seus concorrentes em tempo real e reaja rapidamente.",
          benefits: [
            "Monitoramento automático de concorrentes",
            "Alertas de mudanças de preço",
            "Análise de posicionamento competitivo",
            "Histórico de variações de preço",
          ],
          image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=1000&auto=format&fit=crop"
        },
        {
          title: "Regras de Precificação",
          description: "Crie regras personalizadas para ajustar preços automaticamente baseado em múltiplos fatores.",
          benefits: [
            "Precificação dinâmica por canal",
            "Regras baseadas em estoque e sazonalidade",
            "Proteção de margens mínimas",
            "Testes A/B de estratégias",
          ],
          image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=1000&auto=format&fit=crop"
        },
        {
          title: "Otimização de Promoções",
          description: "Gerencie campanhas promocionais com análise de impacto e ROI.",
          benefits: [
            "Simulação de resultados",
            "Agendamento de promoções",
            "Análise de performance pós-campanha",
            "Segmentação por categoria e sazonalidade",
          ],
          image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1000&auto=format&fit=crop"
        }
      ]
    },
    {
      id: "automation",
      title: "Automação de Processos",
      icon: Shield,
      color: "text-amber-600",
      bgColor: "bg-amber-100",
      description: "Automatize tarefas repetitivas e libere tempo para o que realmente importa.",
      features: [
        {
          title: "Atendimento ao Cliente",
          description: "Automatize respostas para perguntas frequentes e gerencie avaliações.",
          benefits: [
            "Respostas automáticas inteligentes",
            "Gestão centralizada de mensagens",
            "Modelos personalizáveis",
            "Monitoramento de métricas de satisfação",
          ],
          image: "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?q=80&w=1000&auto=format&fit=crop"
        },
        {
          title: "Atualizações de Catálogo",
          description: "Mantenha seu catálogo sempre atualizado em todos os canais.",
          benefits: [
            "Sincronização automática de produtos",
            "Verificação de qualidade de listing",
            "Otimização para SEO de marketplace",
            "Bulk update de informações",
          ],
          image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1000&auto=format&fit=crop"
        },
        {
          title: "Fluxos de Trabalho Personalizados",
          description: "Crie workflows automáticos para qualquer processo do seu e-commerce.",
          benefits: [
            "Criação de regras sem código",
            "Integrações com sistemas externos",
            "Ações condicionais avançadas",
            "Automação de etapas pós-venda",
          ],
          image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1000&auto=format&fit=crop"
        }
      ]
    },
    {
      id: "team",
      title: "Gestão de Equipe",
      icon: Users,
      color: "text-rose-600",
      bgColor: "bg-rose-100",
      description: "Ferramentas para gerenciar sua equipe com controle de acesso e métricas de desempenho.",
      features: [
        {
          title: "Controle de Acesso",
          description: "Defina permissões específicas para cada membro da equipe.",
          benefits: [
            "Níveis de acesso personalizáveis",
            "Gestão granular de permissões",
            "Segurança avançada",
            "Auditoria de ações realizadas",
          ],
          image: "https://images.unsplash.com/photo-1576267423048-15c0030e2605?q=80&w=1000&auto=format&fit=crop"
        },
        {
          title: "Métricas de Desempenho",
          description: "Acompanhe a produtividade e eficiência da sua equipe.",
          benefits: [
            "Dashboards por operador",
            "Metas individuais e de equipe",
            "Análise de tempo de resolução",
            "Feedback automatizado",
          ],
          image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=1000&auto=format&fit=crop"
        },
        {
          title: "Colaboração em Tempo Real",
          description: "Ferramentas para sua equipe trabalhar em conjunto, mesmo remotamente.",
          benefits: [
            "Chat interno integrado",
            "Atribuição de tarefas",
            "Histórico de interações",
            "Notificações personalizáveis",
          ],
          image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop"
        }
      ]
    }
  ];

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUpVariants}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Funcionalidades que <span className="text-gradient">Transformam</span> seu Negócio
              </h1>
              <p className="text-lg text-neutral-dark mb-8">
                Descubra como a Anye pode ajudar você a maximizar seus resultados em marketplaces com ferramentas poderosas e intuitivas.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Feature Categories Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <Tabs defaultValue={featureCategories[0].id} className="w-full">
              <div className="flex justify-center mb-10">
                <TabsList className="grid grid-flow-col auto-cols-fr gap-2 p-1 rounded-lg bg-neutral-100 max-w-4xl overflow-x-auto">
                  {featureCategories.map((category) => (
                    <TabsTrigger 
                      key={category.id} 
                      value={category.id}
                      className="data-[state=active]:shadow py-2 px-4 rounded-md data-[state=active]:bg-white min-w-40"
                    >
                      <div className="flex items-center gap-2">
                        <category.icon className={cn("h-5 w-5", category.color)} />
                        <span>{category.title}</span>
                      </div>
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              {featureCategories.map((category) => (
                <TabsContent key={category.id} value={category.id} className="mt-8 animate-in fade-in-50 zoom-in-95">
                  <div className="text-center mb-12 max-w-3xl mx-auto">
                    <div className={cn("inline-flex rounded-full p-2 mb-4", category.bgColor)}>
                      <category.icon className={cn("h-6 w-6", category.color)} />
                    </div>
                    <h2 className={cn("text-3xl font-bold mb-3", category.color)}>
                      {category.title}
                    </h2>
                    <p className="text-lg text-neutral-dark">
                      {category.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {category.features.map((feature, index) => (
                      <motion.div
                        key={`${category.id}-${index}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <Card className="overflow-hidden h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
                          <div className="h-48 overflow-hidden relative">
                            <img 
                              src={feature.image} 
                              alt={feature.title}
                              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <h3 className="absolute bottom-4 left-4 text-white font-bold text-xl">{feature.title}</h3>
                          </div>
                          
                          <CardContent className="p-6 flex-grow">
                            <p className="text-neutral-dark mb-6">{feature.description}</p>
                            
                            <h4 className={cn("font-semibold mb-3", category.color)}>Benefícios:</h4>
                            <ul className="space-y-2">
                              {feature.benefits.map((benefit, i) => (
                                <li key={i} className="flex items-start gap-2">
                                  <div className={cn("mt-1 rounded-full p-1", category.bgColor)}>
                                    <Check className={cn("h-3 w-3", category.color)} />
                                  </div>
                                  <span className="text-neutral-dark text-sm">{benefit}</span>
                                </li>
                              ))}
                            </ul>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* ROI Calculator Section */}
        <section className="py-20 bg-blue-50">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Calcule sua <span className="text-gradient">Economia</span>
              </h2>
              <p className="text-lg text-neutral-dark">
                Veja quanto você pode economizar e potencializar seus resultados ao utilizar a Anye em seu negócio.
              </p>
            </motion.div>
            
            <div className="max-w-4xl mx-auto">
              <SavingsCalculator />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Features;
