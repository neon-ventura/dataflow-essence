
import React from 'react';
import { motion } from 'framer-motion';
import { Plus, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { FeatureType, FeatureSectionType } from './featureData';
import FeatureBenefitList from './FeatureBenefitList';
import FeatureImage from './FeatureImage';

interface FeatureCardItemProps {
  feature: FeatureType;
  currentSection: FeatureSectionType;
  index: number;
  expandedFeature: string | null;
  hoveredFeature: number | null;
  toggleFeature: (title: string) => void;
  setHoveredFeature: (index: number | null) => void;
}

const FeatureCardItem = ({ 
  feature, 
  currentSection, 
  index, 
  expandedFeature, 
  hoveredFeature, 
  toggleFeature, 
  setHoveredFeature 
}: FeatureCardItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className={cn(
        "relative rounded-xl overflow-hidden border shadow-sm bg-white",
        expandedFeature === feature.title ? "border-slate-300" : "border-slate-200"
      )}
      onMouseEnter={() => setHoveredFeature(index)}
      onMouseLeave={() => setHoveredFeature(null)}
    >
      <div className="flex flex-col md:flex-row">
        {/* Feature description */}
        <div className="p-6 md:p-8 md:w-1/2 flex flex-col">
          <h3 className="text-xl font-bold mb-3 text-slate-900">
            {feature.title}
          </h3>
          <p className="text-slate-700 mb-4">
            {feature.description}
          </p>
          
          <motion.button 
            onClick={() => toggleFeature(feature.title)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={cn(
              "flex items-center gap-2 text-sm font-medium w-fit",
              currentSection.textColor,
              "transition-all duration-300 hover:opacity-80"
            )}
          >
            {expandedFeature === feature.title ? (
              <>
                <span>Ver menos</span>
                <ChevronRight className="h-4 w-4 rotate-90" />
              </>
            ) : (
              <>
                <span>Ver benefícios</span>
                <Plus className="h-4 w-4" />
              </>
            )}
          </motion.button>
          
          <FeatureBenefitList 
            benefits={feature.benefits}
            expanded={expandedFeature === feature.title}
            sectionColor={currentSection.textColor}
            sectionBgColor={currentSection.bgColor}
          />
          
          <div className="mt-auto pt-6">
            <div className={cn(
              "inline-flex items-center gap-1.5 text-xs rounded-full",
              "py-1 px-2 border border-slate-200 bg-slate-50"
            )}>
              <currentSection.icon className={cn("h-3 w-3", currentSection.textColor)} />
              <span className="text-slate-700">Anye {currentSection.title}</span>
            </div>
          </div>
        </div>
        
        {/* Feature image with interactive overlay */}
        <FeatureImage 
          image={feature.image}
          title={feature.title}
          isHovered={hoveredFeature === index}
          sectionColor={currentSection.textColor}
        />
      </div>
    </motion.div>
  );
};

export default FeatureCardItem;
