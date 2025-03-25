
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

const ImplementationTimeline = () => {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(37,99,235,0.1),_transparent_70%)]"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-green-500/10 px-4 py-1.5 text-sm font-medium text-green-400 mb-4">
            <Sparkles size={16} />
            <span>Implementação</span>
          </div>
          <h2 className="text-3xl font-bold mb-4 text-white">
            Implantação <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-400">Descomplicada</span>
          </h2>
          <p className="text-neutral-300">
            Comece a utilizar a Anye em menos de 48 horas, sem interrupções ao seu negócio.
          </p>
        </div>
        
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500/70 via-green-500/30 to-transparent"></div>
          
          {[
            {
              step: 1,
              title: "Onboarding Personalizado",
              description: "Equipe dedicada para configurar sua conta de acordo com suas necessidades específicas."
            },
            {
              step: 2,
              title: "Integração com Marketplaces",
              description: "Conexão rápida com todos os marketplaces onde você opera, sem necessidade de código."
            },
            {
              step: 3,
              title: "Importação de Dados",
              description: "Seus dados históricos são importados e organizados para fornecer insights imediatos."
            },
            {
              step: 4,
              title: "Treinamento da Equipe",
              description: "Sessões de treinamento para garantir que toda sua equipe aproveite ao máximo as funcionalidades."
            }
          ].map((item, index) => (
            <motion.div 
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative ml-16 mb-12"
            >
              <div className="absolute -left-24 top-0 flex items-center justify-center w-16 h-16 rounded-full bg-black/40 border border-green-500/30">
                <span className="text-green-400 font-bold text-xl">{item.step}</span>
              </div>
              <div className="p-6 rounded-lg bg-black/20 backdrop-blur-sm border border-white/10">
                <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                <p className="text-neutral-300">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImplementationTimeline;
