
import React from 'react';
import { motion } from 'framer-motion';
import { Award, TrendingUp, Zap } from 'lucide-react';

const Awards = () => {
  const awards = [
    {
      id: 1,
      title: "Melhor Plataforma de Analytics 2023",
      organization: "E-commerce Brasil",
      icon: TrendingUp,
      color: "bg-blue-50 text-blue-600 border-blue-200",
      gradient: "from-blue-500/20 to-blue-700/20"
    },
    {
      id: 2,
      title: "Top 10 Startups Inovadoras",
      organization: "Startup Awards Brasil",
      icon: Zap,
      color: "bg-purple-50 text-purple-600 border-purple-200",
      gradient: "from-purple-500/20 to-purple-700/20"
    },
    {
      id: 3,
      title: "Destaque Tecnologia para Varejo",
      organization: "Retail Tech Conference",
      icon: Award,
      color: "bg-amber-50 text-amber-600 border-amber-200",
      gradient: "from-amber-500/20 to-amber-700/20"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full bg-primary-blue/10 px-4 py-1.5 text-sm font-medium text-primary-blue mb-4"
          >
            <Award size={16} />
            <span>Reconhecimento</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Premiações e <span className="text-gradient">Reconhecimentos</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-neutral-dark"
          >
            Nossa excelência reconhecida pela indústria
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <motion.div
              key={award.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`rounded-xl p-6 shadow-lg border ${award.color} relative overflow-hidden`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${award.gradient} opacity-10`}></div>
              
              <div className="relative z-10">
                <div className={`w-12 h-12 rounded-xl ${award.color} flex items-center justify-center mb-4`}>
                  <award.icon size={24} />
                </div>
                
                <h3 className="text-xl font-bold mb-2">{award.title}</h3>
                <p className="text-neutral-dark">{award.organization}</p>
              </div>
              
              <div className="absolute -bottom-4 -right-4 w-24 h-24 opacity-10">
                <Award size={96} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
