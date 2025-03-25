
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import FeatureGroup from './FeatureGroup';
import { featureSections } from './featureData';

const FeatureTabs = () => {
  const [activeSection, setActiveSection] = useState(featureSections[0].id);
  
  // Find the currently active section
  const currentSection = featureSections.find(section => section.id === activeSection);

  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {featureSections.map((section) => (
          <motion.button
            key={section.id}
            onClick={() => setActiveSection(section.id)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={cn(
              "group relative px-5 py-3 rounded-full border transition-all duration-300",
              activeSection === section.id 
                ? `${section.borderColor} ${section.bgColor} ${section.textColor}`
                : "border-neutral-light hover:border-neutral-dark text-neutral-dark hover:text-foreground"
            )}
          >
            <div className="flex items-center gap-2">
              <section.icon className="h-5 w-5" />
              <span className="font-medium">{section.title}</span>
            </div>
            {activeSection === section.id && (
              <motion.div 
                layoutId="activeSectionIndicator"
                className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r opacity-10"
                initial={false}
              />
            )}
          </motion.button>
        ))}
      </div>
      
      {/* Current section content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="text-center mb-10">
            <motion.h3 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={cn("text-2xl font-bold mb-3", currentSection?.textColor)}
            >
              {currentSection?.title}
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.1 } }}
              className="text-neutral-dark"
            >
              {currentSection?.description}
            </motion.p>
          </div>
          
          <FeatureGroup currentSection={currentSection} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default FeatureTabs;
