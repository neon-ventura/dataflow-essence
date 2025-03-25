
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import FeatureTabs from './feature/FeatureTabs';

const HomeFeatures = () => {
  return (
    <section id="features" className="py-20 relative">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(26,115,232,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(26,115,232,0.03)_1px,transparent_1px)] bg-[size:30px_30px] -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-primary-blue/10 px-4 py-1.5 text-sm font-medium text-primary-blue mb-4">
            <Sparkles size={16} />
            <span>Nossas Soluções</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Funcionalidades <span className="text-gradient">Poderosas</span>
          </h2>
          <p className="text-lg text-neutral-dark">
            Ferramentas avançadas que transformam dados em decisões estratégicas para seu negócio.
          </p>
        </motion.div>
        
        <FeatureTabs />
      </div>
    </section>
  );
};

export default HomeFeatures;
