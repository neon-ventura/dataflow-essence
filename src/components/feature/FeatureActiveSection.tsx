
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { FeatureSectionType } from './featureData';

interface FeatureActiveSectionProps {
  section: FeatureSectionType;
}

const FeatureActiveSection = ({ section }: FeatureActiveSectionProps) => {
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
      <p className="text-slate-700 max-w-2xl mx-auto">
        {section.description}
      </p>
    </motion.div>
  );
};

export default FeatureActiveSection;
