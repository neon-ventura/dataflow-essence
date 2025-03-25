
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronsUp } from 'lucide-react';
import SavingsCalculator from '@/components/calculator/SavingsCalculator';

const ROICalculatorSection = () => {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-900 to-neutral-950"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(124,58,237,0.1),_transparent_70%)]"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-purple-500/10 px-4 py-1.5 text-sm font-medium text-purple-400 mb-4">
            <ChevronsUp size={16} />
            <span>ROI Calculator</span>
          </div>
          <h2 className="text-3xl font-bold mb-4 text-white">
            Calcule seu <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">Potencial</span>
          </h2>
          <p className="text-neutral-300">
            Descubra quanto você pode economizar e potencializar seus resultados ao utilizar a Anye.
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto bg-black/20 backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-8">
          <SavingsCalculator />
        </div>
      </div>
    </section>
  );
};

export default ROICalculatorSection;
