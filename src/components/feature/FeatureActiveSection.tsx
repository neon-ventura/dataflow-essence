
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { FeatureSectionType } from './featureData';

interface FeatureActiveSectionProps {
  section: FeatureSectionType;
  isDark?: boolean;
}

const FeatureActiveSection = ({ section, isDark = false }: FeatureActiveSectionProps) => {
  return (
    <motion.div
      key={section.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="mb-10 text-center"
    >
      <h3 className={cn("text-2xl font-bold mb-3", section.textColor)}>
        {section.title}
      </h3>
      <p className={`max-w-2xl mx-auto ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
        {section.description}
      </p>
      <motion.div 
        className="w-16 h-1 mx-auto mt-4 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400"
        initial={{ width: 0 }}
        animate={{ width: "4rem" }}
        transition={{ duration: 0.5, delay: 0.2 }}
      />
    </motion.div>
  );
};

export default FeatureActiveSection;
