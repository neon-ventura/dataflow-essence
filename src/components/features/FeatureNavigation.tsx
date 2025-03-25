
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const FeatureNavigation = ({ features, activeFeature, setActiveFeature }) => {
  return (
    <div className="flex overflow-x-auto py-2 mb-12 no-scrollbar justify-center gap-2 md:gap-4">
      {features.map((feature, idx) => (
        <motion.button 
          key={feature.id}
          onClick={() => setActiveFeature(idx)}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1 }}
          className={cn(
            "flex items-center gap-2 py-2 px-3 md:px-4 rounded-full transition-all whitespace-nowrap text-sm md:text-base",
            activeFeature === idx 
              ? `bg-gradient-to-r ${feature.color} text-white shadow-lg`
              : "bg-background/80 backdrop-blur-sm hover:bg-muted border border-border"
          )}
        >
          <feature.icon size={18} />
          <span>{feature.title}</span>
        </motion.button>
      ))}
    </div>
  );
};

export default FeatureNavigation;
