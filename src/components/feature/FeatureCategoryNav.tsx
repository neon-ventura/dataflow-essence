
import React from 'react';
import { motion } from 'framer-motion';
import { FeatureSectionType } from './featureData';
import { cn } from '@/lib/utils';

interface FeatureCategoryNavProps {
  sections: FeatureSectionType[];
  activeSection: string;
  setActiveSection: (id: string) => void;
  isDark?: boolean;
}

const FeatureCategoryNav = ({ 
  sections, 
  activeSection, 
  setActiveSection,
  isDark = false
}: FeatureCategoryNavProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 mb-12">
      {sections.map((section, index) => (
        <motion.button
          key={section.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          onClick={() => setActiveSection(section.id)}
          className={cn(
            "px-4 py-3 rounded-lg flex items-center justify-center gap-2 font-medium transition-all duration-300",
            activeSection === section.id 
              ? `${section.bgColor} shadow-lg shadow-blue-900/20` 
              : `${isDark ? 'bg-slate-800/80 hover:bg-slate-700/80' : 'bg-white hover:bg-slate-50'} border`,
            isDark ? 'border-blue-900/20' : 'border-slate-200'
          )}
        >
          <section.icon className={cn(
            "h-5 w-5",
            activeSection === section.id ? section.textColor : (isDark ? 'text-blue-400' : 'text-slate-500')
          )} />
          <span className={
            activeSection === section.id 
              ? section.textColor 
              : (isDark ? 'text-blue-300' : 'text-slate-700')
          }>
            {section.title}
          </span>
        </motion.button>
      ))}
    </div>
  );
};

export default FeatureCategoryNav;
