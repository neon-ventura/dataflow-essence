
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { FeatureSectionType } from './featureData';

interface FeatureCategoryNavProps {
  sections: FeatureSectionType[];
  activeSection: string;
  setActiveSection: (id: string) => void;
}

const FeatureCategoryNav = ({ sections, activeSection, setActiveSection }: FeatureCategoryNavProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
      {sections.map((section) => (
        <motion.button
          key={section.id}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setActiveSection(section.id)}
          className={cn(
            "p-4 rounded-xl shadow-sm backdrop-blur-sm border transition-all duration-300",
            "flex flex-col items-center text-center gap-2 h-full",
            activeSection === section.id 
              ? `border-${section.textColor.replace('text-', '')} bg-${section.textColor.replace('text-', '')}/10` 
              : "border-slate-200 hover:border-slate-300 bg-white"
          )}
        >
          <div className={cn(
            "rounded-full p-3 mb-2",
            activeSection === section.id 
              ? section.bgColor
              : "bg-slate-100"
          )}>
            <section.icon className={cn(
              "h-6 w-6",
              activeSection === section.id 
                ? section.textColor
                : "text-slate-700"
            )} />
          </div>
          <h3 className="text-sm font-medium text-slate-900">
            {section.title}
          </h3>
        </motion.button>
      ))}
    </div>
  );
};

export default FeatureCategoryNav;
