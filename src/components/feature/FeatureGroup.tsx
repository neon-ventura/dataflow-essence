
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FeatureSectionType } from './featureData';
import FeatureCard from './FeatureCard';

interface FeatureGroupProps {
  currentSection?: FeatureSectionType;
}

const FeatureGroup: React.FC<FeatureGroupProps> = ({ currentSection }) => {
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null);
  const [expandedFeature, setExpandedFeature] = useState<string | null>(null);
  
  if (!currentSection) return null;
  
  const toggleExpandFeature = (title: string) => {
    if (expandedFeature === title) {
      setExpandedFeature(null);
    } else {
      setExpandedFeature(title);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {currentSection.features.map((feature, index) => (
        <FeatureCard
          key={feature.title}
          feature={feature}
          index={index}
          currentSection={currentSection}
          isHovered={hoveredFeature === feature.title}
          isExpanded={expandedFeature === feature.title}
          onHover={setHoveredFeature}
          onToggleExpand={toggleExpandFeature}
        />
      ))}
    </div>
  );
};

export default FeatureGroup;
