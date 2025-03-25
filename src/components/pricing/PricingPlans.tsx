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
          
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="border rounded-lg px-6">
              <AccordionTrigger className="py-4 hover:no-underline">
                <span className="text-left font-medium">Quais marketplaces são compatíveis com o Anye?</span>
              </AccordionTrigger>
              <AccordionContent className="pb-4 pt-2">
                <p className="text-neutral-dark">
                  O Anye é compatível com todos os principais marketplaces do Brasil, incluindo Mercado Livre, Amazon, Shopee, Magazine Luiza, Americanas, Casas Bahia, Olist e outros. Nossa plataforma é constantemente atualizada para incluir novas integrações conforme a demanda dos usuários.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="border rounded-lg px-6">
              <AccordionTrigger className="py-4 hover:no-underline">
                <span className="text-left font-medium">Quanto tempo leva para implementar o Anye na minha operação?</span>
              </AccordionTrigger>
              <AccordionContent className="pb-4 pt-2">
                <p className="text-neutral-dark">
                  A implementação básica do Anye pode ser feita em até 48 horas. Para operações maiores ou mais complexas, o tempo de implementação completa varia de 3 a 7 dias, incluindo a importação de dados históricos, configuração de alertas personalizados e treinamento da equipe. Nossa equipe de onboarding acompanha todo o processo para garantir uma transição suave.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3" className="border rounded-lg px-6">
              <AccordionTrigger className="py-4 hover:no-underline">
                <span className="text-left font-medium">Como funcionam os créditos de anúncios incluídos nos planos?</span>
              </AccordionTrigger>
              <AccordionContent className="pb-4 pt-2">
                <p className="text-neutral-dark">
                  Os créditos de anúncios permitem impulsionar seus produtos diretamente dos painéis do Anye para os marketplaces. Você pode distribuir esses créditos entre diferentes plataformas de acordo com sua estratégia. O sistema de IA do Anye também sugere os melhores produtos para anunciar com base no histórico de conversão e tendências de mercado, maximizando o retorno sobre o investimento em publicidade.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4" className="border rounded-lg px-6">
              <AccordionTrigger className="py-4 hover:no-underline">
                <span className="text-left font-medium">Preciso ter conhecimento técnico para usar o Anye?</span>
              </AccordionTrigger>
              <AccordionContent className="pb-4 pt-2">
                <p className="text-neutral-dark">
                  Não é necessário conhecimento técnico. A plataforma Anye foi projetada para ser intuitiva e fácil de usar, mesmo para quem está começando no e-commerce. Oferecemos treinamento completo incluído em todos os planos, além de uma biblioteca de vídeos tutoriais e documentação detalhada. Nossa equipe de suporte está disponível para ajudar com qualquer dúvida ou necessidade específica da sua operação.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5" className="border rounded-lg px-6">
              <AccordionTrigger className="py-4 hover:no-underline">
                <span className="text-left font-medium">O Anye funciona para qualquer segmento de produtos?</span>
              </AccordionTrigger>
              <AccordionContent className="pb-4 pt-2">
                <p className="text-neutral-dark">
                  Sim, o Anye é versátil e funciona para praticamente qualquer segmento de produtos. Temos recursos específicos para setores como autopeças, moda, eletrônicos, casa e decoração, entre outros. Cada segmento tem funcionalidades personalizadas que atendem às particularidades do mercado. Para segmentos muito específicos, nosso time de produto pode desenvolver adaptações exclusivas para o seu negócio no plano Enterprise.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-6" className="border rounded-lg px-6">
              <AccordionTrigger className="py-4 hover:no-underline">
                <span className="text-left font-medium">Posso cancelar ou mudar de plano a qualquer momento?</span>
              </AccordionTrigger>
              <AccordionContent className="pb-4 pt-2">
                <p className="text-neutral-dark">
                  Sim, não exigimos fidelidade em nossos planos. Você pode fazer upgrade, downgrade ou cancelar sua assinatura a qualquer momento através do painel administrativo. As mudanças são aplicadas imediatamente e os valores são ajustados proporcionalmente ao tempo restante do ciclo atual de faturamento. Seus dados ficam disponíveis para exportação por 30 dias após o cancelamento.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
