
import React, { useState, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { featureSections } from './featureData';
import FeatureSectionHeader from './FeatureSectionHeader';
import FeatureCategoryNav from './FeatureCategoryNav';
import FeatureActiveSection from './FeatureActiveSection';
import FeatureCardItem from './FeatureCardItem';

const FeatureExplorer = () => {
  const [activeSection, setActiveSection] = useState(featureSections[0].id);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const [expandedFeature, setExpandedFeature] = useState<string | null>(null);
  
  // Find active section data
  const currentSection = featureSections.find(section => section.id === activeSection);
  
  // Toggle feature expansion - memoized for better performance
  const toggleFeature = useCallback((title: string) => {
    setExpandedFeature(prev => prev === title ? null : title);
  }, []);

  // Handle category change with animation reset
  const handleCategoryChange = (sectionId: string) => {
    setActiveSection(sectionId);
    setExpandedFeature(null); // Reset expanded state when changing category
  };

  return (
    <section ref={React.useRef(null)} className="py-16 relative bg-slate-900">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-800 z-0"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <FeatureSectionHeader 
          title="Explore Nossas Soluções"
          description="Selecione uma categoria para explorar as funcionalidades que impulsionam o crescimento do seu negócio"
          isDark={true}
        />
        
        {/* Category Navigation */}
        <FeatureCategoryNav 
          sections={featureSections}
          activeSection={activeSection}
          setActiveSection={handleCategoryChange}
          isDark={true}
        />
        
        {/* Active Section Features */}
        <AnimatePresence mode="wait">
          {currentSection && (
            <motion.div
              key={currentSection.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <FeatureActiveSection section={currentSection} isDark={true} />
              
              <div className="space-y-8">
                <AnimatePresence>
                  {currentSection.features.map((feature, index) => (
                    <FeatureCardItem
                      key={`${currentSection.id}-${feature.title}`}
                      feature={feature}
                      currentSection={currentSection}
                      index={index}
                      expandedFeature={expandedFeature}
                      hoveredFeature={hoveredFeature}
                      toggleFeature={toggleFeature}
                      setHoveredFeature={setHoveredFeature}
                      isDark={true}
                    />
                  ))}
                </AnimatePresence>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default FeatureExplorer;
