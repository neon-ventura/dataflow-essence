
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, CircleDollarSign, Sparkles, X, HelpCircle, Plus, ChevronUp, ChevronDown } from 'lucide-react';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';

const plans = [
  {
    id: 'basic',
    name: 'Básico',
    price: 'R$97',
    description: 'Ideal para vendedores iniciantes no marketplace.',
    features: [
      'Painel de Fornecedores',
      'Compras Inteligentes',
      'Gestão de Autopeças',
      'Suporte por Email',
      '5 Usuários Inclusos',
      'Importação de até 1.000 produtos',
      'Alertas de preço básicos',
      'Relatórios semanais'
    ],
    notIncluded: [
      'Inteligência Artificial para Respostas',
      'Dashboard Personalizado',
      'API Exclusiva',
      'Gerente de Sucesso Dedicado'
    ],
    adCredits: 'R$100 em créditos de anúncios',
    recommended: false,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50'
  },
  {
    id: 'pro',
    name: 'Profissional',
    price: 'R$197',
    description: 'Para vendedores que buscam resultados consistentes.',
    features: [
      'Todas funcionalidades do Plano Básico',
      'Inteligência Artificial para Respostas',
      'Avisos Inteligentes',
      'Suporte Prioritário',
      '10 Usuários Inclusos',
      'Importação de até 10.000 produtos',
      'Alertas de preço avançados',
      'Relatórios diários',
      'Otimização de títulos com IA'
    ],
    notIncluded: [
      'Dashboard Personalizado',
      'API Exclusiva',
      'Gerente de Sucesso Dedicado'
    ],
    adCredits: 'R$300 em créditos de anúncios',
    recommended: true,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50'
  },
  {
    id: 'business',
    name: 'Business',
    price: 'R$397',
    description: 'Para negócios em expansão com grandes operações.',
    features: [
      'Todas funcionalidades do Plano Profissional',
      'Dashboard Personalizado',
      'API Exclusiva',
      'Suporte 24/7',
      '30 Usuários Inclusos',
      'Importação de produtos ilimitada',
      'Alertas em tempo real',
      'Relatórios personalizados',
      'Análise avançada de concorrentes',
      'Recomendações estratégicas automáticas'
    ],
    notIncluded: [
      'Gerente de Sucesso Dedicado',
      'Infraestrutura Dedicada',
      'Implementação Personalizada'
    ],
    adCredits: 'R$700 em créditos de anúncios',
    recommended: false,
    color: 'text-green-600',
    bgColor: 'bg-green-50'
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 'Personalizado',
    description: 'Solução completa para grandes operações.',
    features: [
      'Todas funcionalidades do Plano Business',
      'Infraestrutura Dedicada',
      'Implementação Personalizada',
      'Gerente de Sucesso Dedicado',
      'Usuários Ilimitados',
      'Integrações personalizadas',
      'Desenvolvimento de features exclusivas',
      'Treinamento presencial da equipe',
      'Consultoria estratégica mensal',
      'SLA garantido por contrato'
    ],
    notIncluded: [],
    adCredits: 'Créditos de anúncios personalizados',
    recommended: false,
    color: 'text-amber-600',
    bgColor: 'bg-amber-50'
  }
];

const PricingPlans = () => {
  const [activeTab, setActiveTab] = useState<'month' | 'year'>('month');
  const [activeFaq, setActiveFaq] = useState<string | null>(null);
  
  const toggleFaq = (id: string) => {
    if (activeFaq === id) {
      setActiveFaq(null);
    } else {
      setActiveFaq(id);
    }
  };
  
  const faqs = [
    {
      id: 'faq-1',
      question: 'Quais marketplaces são compatíveis com o Anye?',
      answer: 'O Anye é compatível com todos os principais marketplaces do Brasil, incluindo Mercado Livre, Amazon, Shopee, Magazine Luiza, Americanas, Casas Bahia, Olist e outros. Nossa plataforma é constantemente atualizada para incluir novas integrações conforme a demanda dos usuários.',
      tags: ['Integração', 'Marketplaces']
    },
    {
      id: 'faq-2',
      question: 'Quanto tempo leva para implementar o Anye na minha operação?',
      answer: 'A implementação básica do Anye pode ser feita em até 48 horas. Para operações maiores ou mais complexas, o tempo de implementação completa varia de 3 a 7 dias, incluindo a importação de dados históricos, configuração de alertas personalizados e treinamento da equipe. Nossa equipe de onboarding acompanha todo o processo para garantir uma transição suave.',
      tags: ['Implementação', 'Onboarding']
    },
    {
      id: 'faq-3',
      question: 'Como funcionam os créditos de anúncios incluídos nos planos?',
      answer: 'Os créditos de anúncios permitem impulsionar seus produtos diretamente dos painéis do Anye para os marketplaces. Você pode distribuir esses créditos entre diferentes plataformas de acordo com sua estratégia. O sistema de IA do Anye também sugere os melhores produtos para anunciar com base no histórico de conversão e tendências de mercado, maximizando o retorno sobre o investimento em publicidade.',
      tags: ['Anúncios', 'Créditos', 'Marketing']
    },
    {
      id: 'faq-4',
      question: 'Preciso ter conhecimento técnico para usar o Anye?',
      answer: 'Não é necessário conhecimento técnico. A plataforma Anye foi projetada para ser intuitiva e fácil de usar, mesmo para quem está começando no e-commerce. Oferecemos treinamento completo incluído em todos os planos, além de uma biblioteca de vídeos tutoriais e documentação detalhada. Nossa equipe de suporte está disponível para ajudar com qualquer dúvida ou necessidade específica da sua operação.',
      tags: ['Usabilidade', 'Suporte', 'Treinamento']
    },
    {
      id: 'faq-5',
      question: 'O Anye funciona para qualquer segmento de produtos?',
      answer: 'Sim, o Anye é versátil e funciona para praticamente qualquer segmento de produtos. Temos recursos específicos para setores como autopeças, moda, eletrônicos, casa e decoração, entre outros. Cada segmento tem funcionalidades personalizadas que atendem às particularidades do mercado. Para segmentos muito específicos, nosso time de produto pode desenvolver adaptações exclusivas para o seu negócio no plano Enterprise.',
      tags: ['Segmentos', 'Personalização']
    },
    {
      id: 'faq-6',
      question: 'Posso cancelar ou mudar de plano a qualquer momento?',
      answer: 'Sim, não exigimos fidelidade em nossos planos. Você pode fazer upgrade, downgrade ou cancelar sua assinatura a qualquer momento através do painel administrativo. As mudanças são aplicadas imediatamente e os valores são ajustados proporcionalmente ao tempo restante do ciclo atual de faturamento. Seus dados ficam disponíveis para exportação por 30 dias após o cancelamento.',
      tags: ['Assinatura', 'Cancelamento', 'Flexibilidade']
    },
    {
      id: 'faq-7',
      question: 'Como é feita a migração dos meus dados atuais para o Anye?',
      answer: 'O processo de migração é simplificado e automatizado na maioria dos casos. O Anye possui conectores para os principais sistemas de gestão e marketplaces, o que permite importar automaticamente seu catálogo de produtos, histórico de vendas, avaliações e outros dados relevantes. Para sistemas mais específicos, nossa equipe técnica desenvolve integrações customizadas. Todo o processo é acompanhado pela nossa equipe de onboarding, garantindo que seus dados sejam migrados com precisão e segurança.',
      tags: ['Migração', 'Dados', 'Integração']
    },
    {
      id: 'faq-8',
      question: 'O Anye oferece alguma garantia de resultados?',
      answer: 'Oferecemos uma garantia de satisfação de 30 dias para novos clientes. Se dentro desse período você não estiver satisfeito com a plataforma, cancelamos sua assinatura e devolvemos o valor investido. Além disso, para clientes dos planos Business e Enterprise, estabelecemos metas de performance em contrato, com compromissos de melhorias específicas em métricas como taxa de conversão, visibilidade nos marketplaces e otimização de custos operacionais.',
      tags: ['Garantia', 'Resultados', 'Satisfação']
    },
    {
      id: 'faq-9',
      question: 'Quais métricas e KPIs o Anye monitora?',
      answer: 'O Anye monitora mais de 80 métricas importantes para seu negócio, incluindo conversão por produto, margem de contribuição, ROI de campanhas, velocidade de vendas, disponibilidade de estoque, preço médio de mercado, market share por categoria, tempo médio de resposta, taxa de devoluções, NPS, posicionamento em busca orgânica, custo de aquisição de cliente, e muito mais. Todos esses indicadores são apresentados em dashboards personalizáveis e podem ser exportados em diferentes formatos de relatório.',
      tags: ['Métricas', 'Analytics', 'Dashboards']
    },
    {
      id: 'faq-10',
      question: 'Como funciona o suporte técnico do Anye?',
      answer: 'Oferecemos diferentes níveis de suporte conforme o plano contratado. No plano Básico, o suporte é por email com tempo de resposta de até 24 horas. No plano Profissional, além do email, oferecemos chat em tempo real durante horário comercial. No plano Business, adicionamos suporte telefônico 24/7. E no plano Enterprise, você conta com um gerente de sucesso dedicado e suporte premium com acesso direto à equipe técnica especializada. Todos os clientes têm acesso à nossa extensa base de conhecimento e tutoriais em vídeo.',
      tags: ['Suporte', 'Atendimento', 'Help Desk']
    }
  ];

  return (
    <section id="pricing" className="py-20 relative">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(26,115,232,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(26,115,232,0.02)_1px,transparent_1px)] bg-[size:30px_30px] -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-primary-blue/10 px-4 py-1.5 text-sm font-medium text-primary-blue mb-4">
            <CircleDollarSign size={16} />
            <span>Nossos Planos</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Escolha o Plano <span className="text-gradient">Ideal</span> para Seu Negócio
          </h2>
          <p className="text-lg text-neutral-dark">
            Soluções flexíveis que crescem com sua operação no marketplace.
          </p>
        </motion.div>
        
        {/* Billing Period Toggle */}
        <div className="flex justify-center mb-10">
          <div className="bg-neutral-light rounded-full p-1 inline-flex">
            <button
              onClick={() => setActiveTab('month')}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-medium transition-all",
                activeTab === 'month' 
                  ? "bg-white shadow-sm text-primary-blue" 
                  : "text-neutral-dark hover:text-primary-blue"
              )}
            >
              Mensal
            </button>
            <button
              onClick={() => setActiveTab('year')}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-medium transition-all",
                activeTab === 'year' 
                  ? "bg-white shadow-sm text-primary-blue" 
                  : "text-neutral-dark hover:text-primary-blue"
              )}
            >
              Anual <span className="text-green-600 font-bold">(-20%)</span>
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {plans.map((plan, index) => (
            <motion.div 
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={cn(
                "relative rounded-xl border overflow-hidden p-6",
                plan.recommended ? "shadow-xl ring-2 ring-primary-blue" : "shadow-md",
              )}
            >
              {plan.recommended && (
                <div className="absolute top-0 right-0 bg-primary-blue text-white text-xs font-bold px-3 py-1 transform translate-x-2 -translate-y-1/2 rotate-45">
                  Recomendado
                </div>
              )}
              
              <div className="mb-5">
                <h3 className={cn("text-xl font-bold mb-1", plan.color)}>{plan.name}</h3>
                <div className="flex items-end gap-1 mb-3">
                  <span className="text-3xl font-extrabold">
                    {activeTab === 'year' && plan.id !== 'enterprise' 
                      ? plan.price.replace('R$', 'R$') + '/mês'
                      : plan.price}
                  </span>
                  {plan.id !== 'enterprise' && activeTab === 'month' && <span className="text-neutral-dark">/mês</span>}
                </div>
                <p className="text-neutral-dark text-sm mb-4">{plan.description}</p>
                
                {activeTab === 'year' && plan.id !== 'enterprise' && (
                  <div className="bg-green-50 text-green-700 text-xs font-medium rounded-md px-3 py-1 inline-block mb-3">
                    Economia de {plan.id === 'basic' ? 'R$232' : plan.id === 'pro' ? 'R$472' : 'R$952'} por ano
                  </div>
                )}
              </div>
              
              <div className="space-y-3 mb-6">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <Check className={cn("h-4 w-4 mt-1", plan.color)} />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
                
                {plan.notIncluded.length > 0 && (
                  <div className="pt-2 mt-2 border-t border-neutral-light">
                    {plan.notIncluded.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2 text-neutral-dark">
                        <X className="h-4 w-4 mt-1 text-neutral-dark/70" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              <div className={cn(
                "rounded-lg p-3 text-sm mb-6",
                plan.bgColor
              )}>
                <div className="flex items-center gap-2">
                  <Sparkles className={cn("h-4 w-4", plan.color)} />
                  <span className="font-medium">{plan.adCredits}</span>
                </div>
              </div>
              
              <Button 
                className={cn(
                  "w-full",
                  plan.recommended ? "bg-primary-blue hover:bg-primary-blue/90" : "bg-neutral-100 text-foreground hover:bg-neutral-200"
                )}
              >
                {plan.id === 'enterprise' ? 'Fale Conosco' : 'Assinar Agora'}
              </Button>
            </motion.div>
          ))}
        </div>
        
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold mb-8 text-center">Perguntas Frequentes</h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 border-r border-neutral-light pr-8 hidden lg:block">
              <div className="sticky top-24">
                <h4 className="text-lg font-bold mb-4">Categorias</h4>
                <div className="space-y-2">
                  {[...new Set(faqs.flatMap(faq => faq.tags))].map((tag) => (
                    <div key={tag} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary-blue/60"></div>
                      <span className="text-sm">{tag}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 p-4 bg-neutral-light/50 rounded-lg">
                  <h5 className="font-medium mb-2 flex items-center gap-2">
                    <HelpCircle className="h-4 w-4 text-primary-blue" />
                    Precisa de ajuda?
                  </h5>
                  <p className="text-sm text-neutral-dark mb-3">
                    Não encontrou a resposta que procurava? Entre em contato com nossa equipe.
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    Falar com Especialista
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <div className="space-y-4">
                {faqs.map((faq) => (
                  <div 
                    key={faq.id} 
                    className={cn(
                      "border rounded-lg transition-all duration-200",
                      activeFaq === faq.id ? "shadow-md" : ""
                    )}
                  >
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="flex justify-between items-start w-full text-left p-6"
                    >
                      <h4 className="font-medium pr-8">{faq.question}</h4>
                      <span>
                        {activeFaq === faq.id ? (
                          <ChevronUp className="h-5 w-5 text-primary-blue flex-shrink-0" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-neutral-dark flex-shrink-0" />
                        )}
                      </span>
                    </button>
                    
                    {activeFaq === faq.id && (
                      <div className="px-6 pb-6">
                        <div className="pt-2 border-t">
                          <p className="mt-4 text-neutral-dark">{faq.answer}</p>
                          
                          <div className="flex flex-wrap gap-2 mt-4">
                            {faq.tags.map((tag) => (
                              <span 
                                key={tag} 
                                className="inline-flex items-center rounded-full bg-neutral-light px-2.5 py-0.5 text-xs font-medium text-neutral-dark"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-5 border border-neutral-light rounded-lg bg-neutral-light/20">
                <div className="flex items-start gap-4">
                  <div className="bg-primary-blue/10 p-2 rounded-full">
                    <Plus className="h-5 w-5 text-primary-blue" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Ainda tem dúvidas?</h4>
                    <p className="text-sm text-neutral-dark mb-3">
                      Agende uma conversa com nossos especialistas para entender como o Anye pode transformar sua operação de marketplace.
                    </p>
                    <Button size="sm" className="bg-primary-blue hover:bg-primary-blue/90">
                      Agendar Demonstração
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
