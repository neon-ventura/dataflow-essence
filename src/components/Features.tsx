
import React from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  ShoppingCart, 
  TrendingUp, 
  AlertCircle, 
  RefreshCw, 
  Users, 
  Shield, 
  Database, 
  ArrowRight 
} from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';
import SavingsCalculator from '@/components/calculator/SavingsCalculator';

const Features = () => {
  const benefitGroups = [
    {
      title: "Gestão de Produtos",
      color: "bg-blue-500",
      features: [
        {
          icon: ShoppingCart,
          title: "Compras Inteligentes",
          description: "Recomendações baseadas em demanda real para você nunca perder uma venda."
        },
        {
          icon: Database,
          title: "Gestão de Fornecedores",
          description: "Controle centralizado de todos seus fornecedores com histórico completo."
        },
        {
          icon: RefreshCw,
          title: "Sincronização Automática",
          description: "Integração instantânea com todos os principais marketplaces do Brasil."
        }
      ]
    },
    {
      title: "Automação & Análise",
      color: "bg-purple-500",
      features: [
        {
          icon: AlertCircle,
          title: "Alertas Inteligentes",
          description: "Seja notificado sobre oportunidades, problemas e tendências automaticamente."
        },
        {
          icon: TrendingUp,
          title: "Análise de Performance",
          description: "Dashboards personalizados para acompanhar cada aspecto do seu negócio."
        },
        {
          icon: Shield,
          title: "Proteção contra Fraudes",
          description: "Identificação automática de padrões suspeitos e proteção contra golpes."
        }
      ]
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Funcionalidades que <span className="text-gradient">Transformam</span> seu Negócio
          </h2>
          <p className="text-lg text-neutral-dark">
            Conheça os benefícios que vão automatizar sua operação e maximizar seus resultados nos marketplaces.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          {benefitGroups.map((group, groupIndex) => (
            <div key={group.title}>
              <div className="flex items-center gap-2 mb-8">
                <div className={cn("w-2 h-16", group.color)} />
                <h3 className="text-2xl font-bold">{group.title}</h3>
              </div>
              
              <div className="space-y-8">
                {group.features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 + groupIndex * 0.2 }}
                  >
                    <Card className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className={cn(
                            "flex-shrink-0 p-3 rounded-lg",
                            groupIndex === 0 ? "bg-blue-50 text-blue-600" : "bg-purple-50 text-purple-600"
                          )}>
                            <feature.icon className="h-6 w-6" />
                          </div>
                          
                          <div>
                            <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                            <p className="text-neutral-dark">{feature.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 mb-8">
          <h3 className="text-2xl font-bold mb-8 text-center">Os Benefícios que Você Pode Esperar</h3>
          
          {/* Calculator Component */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <SavingsCalculator />
          </motion.div>
          
          <div className="bg-gradient-to-r from-primary-blue/5 to-primary-blue/10 rounded-xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Outros Benefícios Esperados</h3>
                <div className="space-y-4">
                  {[
                    "Aumento de 30% a 70% nas vendas nos primeiros 3 meses",
                    "Redução média de 45% no tempo gasto com tarefas operacionais",
                    "Diminuição de até 60% em erros de preços e estoque",
                    "Crescimento de 25% na margem de lucro por produto",
                    "Resposta 5x mais rápida ao comportamento do mercado"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-600 mt-1" />
                      <p>{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col items-center md:items-end">
                <p className="text-xl font-medium mb-6 text-center md:text-right">
                  Mais de 1.500 vendedores já transformaram seus negócios com o Anye
                </p>
                <Button size="lg" className="bg-primary-blue hover:bg-primary-blue/90">
                  Agende uma Demonstração
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
