
import React from 'react';
import { motion } from 'framer-motion';

interface FeatureSectionHeaderProps {
  title: string;
  description: string;
}

const FeatureSectionHeader = ({ title, description }: FeatureSectionHeaderProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-12 text-center"
    >
      <h2 className="text-3xl font-bold mb-4">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          {title}
        </span>
      </h2>
      <p className="text-slate-700 max-w-2xl mx-auto">
        {description}
      </p>
    </motion.div>
  );
};

export default FeatureSectionHeader;
