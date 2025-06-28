
import React from 'react';
import { Check, Star, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollToTop } from '@/hooks/useScrollToTop';

const PricingPlans = () => {
  const { navigateToTop } = useScrollToTop();

  const plans = [
    {
      name: 'Starter',
      price: 'R$ 97',
      period: '/mês',
      description: 'Ideal para iniciantes que querem começar a analisar dados',
      features: [
        'Dashboard básico',
        'Análise de até 100 produtos',
        'Relatórios semanais',
        'Suporte por email',
        'Integração com 1 marketplace'
      ],
      popular: false,
      cta: 'Começar Agora'
    },
    {
      name: 'Pro',
      price: 'R$ 197',
      period: '/mês',
      description: 'Para vendedores que querem maximizar resultados',
      features: [
        'Dashboard completo',
        'Análise ilimitada de produtos',
        'Relatórios diários',
        'Suporte prioritário',
        'Integração com todos marketplaces',
        'Alertas automáticos',
        'API access'
      ],
      popular: true,
      cta: 'Assinar Agora'
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Solução personalizada para grandes empresas',
      features: [
        'Tudo do plano Pro',
        'Análise personalizada',
        'Gerente de conta dedicado',
        'Integração customizada',
        'Treinamento da equipe',
        'SLA garantido'
      ],
      popular: false,
      cta: 'Fale Conosco'
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-neutral-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full bg-primary-blue/10 px-4 py-1.5 text-sm font-medium text-primary-blue mb-4"
          >
            <Zap size={16} />
            <span>Planos</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Escolha o plano ideal para <span className="text-gradient">seu negócio</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-neutral-dark max-w-2xl mx-auto"
          >
            Comece gratuitamente e escale conforme sua necessidade. Todos os planos incluem 14 dias de teste grátis.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative bg-white rounded-2xl shadow-lg overflow-hidden ${
                plan.popular ? 'ring-2 ring-primary-blue transform scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-primary-blue to-primary-light text-white text-center py-2 text-sm font-medium">
                  <Star className="inline-block w-4 h-4 mr-1" />
                  Mais Popular
                </div>
              )}
              
              <div className={`p-8 ${plan.popular ? 'pt-12' : ''}`}>
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-neutral-dark mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-neutral-dark ml-1">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="text-green-500 w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button
                  onClick={() => navigateToTop('/contato')}
                  className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-200 ${
                    plan.popular
                      ? 'bg-primary-blue text-white hover:bg-primary-light'
                      : 'bg-neutral-100 text-neutral-dark hover:bg-neutral-200'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-neutral-dark mb-4">
            Precisa de algo personalizado? 
          </p>
          <button
            onClick={() => navigateToTop('/contato')}
            className="text-primary-blue hover:text-primary-light font-medium"
          >
            Fale conosco para um plano customizado
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingPlans;
