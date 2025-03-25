
import React from 'react';
import { motion } from 'framer-motion';
import { Check, CircleDollarSign, Sparkles } from 'lucide-react';
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
    ],
    adCredits: 'Créditos de anúncios personalizados',
    recommended: false,
    color: 'text-amber-600',
    bgColor: 'bg-amber-50'
  }
];

const PricingPlans = () => {
  return (
    <section id="pricing" className="py-20 relative">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(26,115,232,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(26,115,232,0.02)_1px,transparent_1px)] bg-[size:30px_30px] -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
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
                  <span className="text-3xl font-extrabold">{plan.price}</span>
                  {plan.id !== 'enterprise' && <span className="text-neutral-dark">/mês</span>}
                </div>
                <p className="text-neutral-dark text-sm">{plan.description}</p>
              </div>
              
              <div className="space-y-3 mb-6">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <Check className={cn("h-4 w-4 mt-1", plan.color)} />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
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
        
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-center">Perguntas Frequentes</h3>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>O que são créditos de anúncios?</AccordionTrigger>
              <AccordionContent>
                Os créditos de anúncios permitem impulsionar seus produtos nos principais marketplaces. Você pode distribuir esses créditos entre diferentes plataformas como Mercado Livre, Amazon e Shopee para aumentar a visibilidade dos seus produtos.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger>Existe período de fidelidade?</AccordionTrigger>
              <AccordionContent>
                Não, todos os planos são sem fidelidade. Você pode cancelar a qualquer momento sem taxas adicionais. Os planos são renovados automaticamente a cada mês, mas você tem liberdade para cancelar quando desejar.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger>Como funciona o plano Enterprise?</AccordionTrigger>
              <AccordionContent>
                O plano Enterprise é personalizado para grandes operações. Nossa equipe realiza uma análise detalhada das suas necessidades e cria uma solução sob medida. Os créditos de anúncios, número de usuários e funcionalidades são definidos de acordo com as necessidades específicas do seu negócio.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger>Posso mudar de plano a qualquer momento?</AccordionTrigger>
              <AccordionContent>
                Sim, você pode fazer upgrade ou downgrade do seu plano quando desejar. As mudanças são aplicadas imediatamente e o valor é ajustado proporcionalmente ao tempo restante do ciclo atual de faturamento.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
