
import React from 'react';
import { motion } from 'framer-motion';
import { Users, RefreshCw, Database, TrendingUp } from 'lucide-react';

const ImplementationSection = () => {
  const timelineSteps = [
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
  ];

  return (
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
        
        {timelineSteps.map((item, idx) => (
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
  );
};

export default ImplementationSection;
