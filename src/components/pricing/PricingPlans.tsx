import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, CircleDollarSign, Sparkles, X, HelpCircle, Plus, ChevronUp, ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const plans = [
  {
    id: 'basic',
    name: 'Starter',
    price: 'R$249,99',
    yearlyPrice: 'R$167,49',
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
    name: 'Padrão',
    price: 'R$399,99',
    yearlyPrice: 'R$267,99',
    description: 'Para vendedores que buscam resultados consistentes.',
    features: [
      'Todas funcionalidades do Plano Starter',
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
    id: 'enterprise',
    name: 'Enterprise',
    price: 'R$899,99',
    yearlyPrice: 'R$602,99',
    description: 'Solução completa para grandes operações.',
    features: [
      'Todas funcionalidades do Plano Padrão',
      'Dashboard Personalizado',
      'API Exclusiva',
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
      answer: 'O Anye é compatível com todos os principais marketplaces do Brasil, incluindo Mercado Livre, Amazon, Shopee, Magazine Luiza, Americanas, Casas Bahia, Olist e outros. Nossa plataforma é constantemente atualizada para incluir novas integrações conforme a demanda dos usuários.'
    },
    {
      id: 'faq-2',
      question: 'Quanto tempo leva para implementar o Anye na minha operação?',
      answer: 'A implementação básica do Anye pode ser feita em até 48 horas. Para operações maiores ou mais complexas, o tempo de implementação completa varia de 3 a 7 dias, incluindo a importação de dados históricos, configuração de alertas personalizados e treinamento da equipe. Nossa equipe de onboarding acompanha todo o processo para garantir uma transição suave.'
    },
    {
      id: 'faq-3',
      question: 'Como funcionam os créditos de anúncios incluídos nos planos?',
      answer: 'Os créditos de anúncios permitem impulsionar seus produtos diretamente dos painéis do Anye para os marketplaces. Você pode distribuir esses créditos entre diferentes plataformas de acordo com sua estratégia. O sistema de IA do Anye também sugere os melhores produtos para anunciar com base no histórico de conversão e tendências de mercado, maximizando o retorno sobre o investimento em publicidade.'
    },
    {
      id: 'faq-4',
      question: 'Preciso ter conhecimento técnico para usar o Anye?',
      answer: 'Não é necessário conhecimento técnico. A plataforma Anye foi projetada para ser intuitiva e fácil de usar, mesmo para quem está começando no e-commerce. Oferecemos treinamento completo incluído em todos os planos, além de uma biblioteca de vídeos tutoriais e documentação detalhada. Nossa equipe de suporte está disponível para ajudar com qualquer dúvida ou necessidade específica da sua operação.'
    },
    {
      id: 'faq-5',
      question: 'Posso cancelar ou mudar de plano a qualquer momento?',
      answer: 'Sim, não exigimos fidelidade em nossos planos. Você pode fazer upgrade, downgrade ou cancelar sua assinatura a qualquer momento através do painel administrativo. As mudanças são aplicadas imediatamente e os valores são ajustados proporcionalmente ao tempo restante do ciclo atual de faturamento. Seus dados ficam disponíveis para exportação por 30 dias após o cancelamento.'
    },
    {
      id: 'faq-6',
      question: 'O Anye oferece alguma garantia de resultados?',
      answer: 'Oferecemos uma garantia de satisfação de 30 dias para novos clientes. Se dentro desse período você não estiver satisfeito com a plataforma, cancelamos sua assinatura e devolvemos o valor investido. Além disso, para clientes dos planos Business e Enterprise, estabelecemos metas de performance em contrato, com compromissos de melhorias específicas em métricas como taxa de conversão, visibilidade nos marketplaces e otimização de custos operacionais.'
    }
  ];

  return (
    <section id="pricing" className="py-20 relative bg-gradient-to-b from-white to-blue-50">
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
          <div className="bg-white rounded-full p-1 inline-flex shadow-sm border border-neutral-light">
            <button
              onClick={() => setActiveTab('month')}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-medium transition-all",
                activeTab === 'month' 
                  ? "bg-primary-blue text-white shadow-sm" 
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
                  ? "bg-primary-blue text-white shadow-sm" 
                  : "text-neutral-dark hover:text-primary-blue"
              )}
            >
              Anual <span className="text-green-600 font-bold">(-33%)</span>
            </button>
          </div>
        </div>
        
        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, index) => (
            <motion.div 
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={cn(
                "relative rounded-xl border bg-white overflow-hidden p-6",
                plan.recommended ? "shadow-xl ring-2 ring-primary-blue" : "shadow-md",
              )}
            >
              {plan.recommended && (
                <div className="absolute top-0 right-0 bg-primary-blue text-white text-xs font-bold px-3 py-1 transform translate-x-2 -translate-y-0 rotate-45">
                  Recomendado
                </div>
              )}
              
              <div className="mb-5">
                <h3 className={cn("text-xl font-bold mb-2", plan.color)}>{plan.name}</h3>
                <div className="flex items-end gap-1 mb-3">
                  <span className="text-3xl font-extrabold">
                    {activeTab === 'year' && plan.yearlyPrice
                      ? plan.yearlyPrice
                      : plan.price}
                  </span>
                  <span className="text-neutral-dark">/mês</span>
                </div>
                <p className="text-neutral-dark text-sm mb-4">{plan.description}</p>
                
                {activeTab === 'year' && (
                  <div className="bg-green-50 text-green-700 text-xs font-medium rounded-md px-3 py-1 inline-block mb-3">
                    Economia de {plan.id === 'basic' ? 'R$989,88' : plan.id === 'pro' ? 'R$1.583,88' : 'R$3.563,88'} por ano
                  </div>
                )}
              </div>
              
              <div className="space-y-3 mb-6">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <Check className={cn("h-5 w-5 mt-0.5", plan.color)} />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
                
                {plan.notIncluded.length > 0 && (
                  <div className="pt-2 mt-2 border-t border-neutral-light">
                    {plan.notIncluded.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2 text-neutral-dark">
                        <X className="h-5 w-5 mt-0.5 text-neutral-dark/70" />
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
              
              <Button asChild className={cn(
                "w-full",
                plan.recommended ? "bg-primary-blue hover:bg-primary-blue/90" : "bg-neutral-100 text-foreground hover:bg-neutral-200"
              )}>
                <Link to="/contato">
                  {plan.id === 'enterprise' ? 'Fale Conosco' : 'Assinar Agora'}
                </Link>
              </Button>
            </motion.div>
          ))}
        </div>
        
        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-8 text-center">Perguntas Frequentes</h3>
          
          <div>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div 
                  key={faq.id} 
                  className={cn(
                    "border rounded-lg transition-all duration-200 bg-white",
                    activeFaq === faq.id ? "shadow-md" : ""
                  )}
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="flex justify-between items-start w-full text-left p-6"
                  >
                    <h4 className="font-medium pr-8">{faq.question}</h4>
                    <span className="flex-shrink-0">
                      {activeFaq === faq.id ? (
                        <ChevronUp className="h-5 w-5 text-primary-blue" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-neutral-dark" />
                      )}
                    </span>
                  </button>
                  
                  {activeFaq === faq.id && (
                    <div className="px-6 pb-6">
                      <div className="pt-2 border-t">
                        <p className="mt-4 text-neutral-dark">{faq.answer}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="mt-10 p-6 border border-primary-blue/20 rounded-lg bg-white">
              <div className="flex items-start gap-4">
                <div className="bg-primary-blue/10 p-2 rounded-full">
                  <Plus className="h-5 w-5 text-primary-blue" />
                </div>
                <div>
                  <h4 className="font-bold mb-2">Ainda tem dúvidas?</h4>
                  <p className="text-neutral-dark mb-4">
                    Agende uma conversa com nossos especialistas para entender como o Anye pode transformar sua operação de marketplace.
                  </p>
                  <Button asChild className="bg-primary-blue hover:bg-primary-blue/90">
                    <Link to="/contato">Agendar Demonstração</Link>
                  </Button>
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
