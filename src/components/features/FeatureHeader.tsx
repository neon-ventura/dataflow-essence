
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const FeatureHeader = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="text-center max-w-2xl mx-auto mb-16"
    >
      <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 px-4 py-1.5 text-sm font-medium text-blue-500 ring-1 ring-inset ring-blue-500/20 mb-4">
        <Sparkles size={16} className="animate-pulse" />
        <span>Potencialize seu negócio</span>
      </div>
      <h1 className="text-4xl md:text-5xl font-bold mb-6">Ferramentas <span className="text-gradient bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">revolucionárias</span> para seu sucesso</h1>
      <p className="text-lg text-muted-foreground">
        Descubra como nossas soluções vão transformar sua operação e maximizar seus resultados nos marketplaces
      </p>
    </motion.div>
  );
};

export default FeatureHeader;
