
import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';
import SavingsCalculator from '@/components/calculator/SavingsCalculator';

const ROISection = () => {
  return (
    <div className="mb-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto mb-12"
      >
        <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-green-500/10 to-emerald-500/10 px-4 py-1.5 text-sm font-medium text-green-500 ring-1 ring-inset ring-green-500/20 mb-4">
          <TrendingUp size={16} />
          <span>ROI Calculator</span>
        </div>
        <h2 className="text-3xl font-bold mb-4">
          Calcule seu <span className="text-gradient bg-gradient-to-r from-green-500 to-emerald-400">Potencial</span>
        </h2>
        <p className="text-muted-foreground">
          Descubra quanto você pode economizar e potencializar seus resultados ao utilizar nossa plataforma
        </p>
      </motion.div>
      
      <div className="max-w-4xl mx-auto">
        <SavingsCalculator />
      </div>
    </div>
  );
};

export default ROISection;
