
import React from 'react';
import { motion } from 'framer-motion';

interface FeatureSectionHeaderProps {
  title: string;
  description: string;
  isDark?: boolean;
}

const FeatureSectionHeader = ({ title, description, isDark = false }: FeatureSectionHeaderProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-12 text-center"
    >
      <h2 className="text-3xl font-bold mb-4">
        <span className={`bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 ${isDark ? 'brightness-125' : ''}`}>
          {title}
        </span>
      </h2>
      <p className={`max-w-2xl mx-auto ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
        {description}
      </p>
    </motion.div>
  );
};

export default FeatureSectionHeader;
