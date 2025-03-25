
import React, { useState, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
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

  return (
    <section ref={React.useRef(null)} className="py-16 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white z-0"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <FeatureSectionHeader 
          title="Explore Nossas Soluções"
          description="Selecione uma categoria para explorar as funcionalidades que impulsionam o crescimento do seu negócio"
        />
        
        {/* Category Navigation */}
        <FeatureCategoryNav 
          sections={featureSections}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
        
        {/* Active Section Features */}
        {currentSection && (
          <div>
            <FeatureActiveSection section={currentSection} />
            
            <div className="space-y-8">
              <AnimatePresence mode="wait">
                {currentSection.features.map((feature, index) => (
                  <FeatureCardItem
                    key={feature.title}
                    feature={feature}
                    currentSection={currentSection}
                    index={index}
                    expandedFeature={expandedFeature}
                    hoveredFeature={hoveredFeature}
                    toggleFeature={toggleFeature}
                    setHoveredFeature={setHoveredFeature}
                  />
                ))}
              </AnimatePresence>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeatureExplorer;
