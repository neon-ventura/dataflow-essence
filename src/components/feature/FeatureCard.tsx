
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronsUp, Plus, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { FeatureSectionType, FeatureType } from './featureData';

interface FeatureCardProps {
  feature: FeatureType;
  index: number;
  currentSection: FeatureSectionType;
  isHovered: boolean;
  isExpanded: boolean;
  onHover: (title: string | null) => void;
  onToggleExpand: (title: string) => void;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  feature,
  index,
  currentSection,
  isHovered,
  isExpanded,
  onHover,
  onToggleExpand,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        "relative rounded-xl border overflow-hidden",
        currentSection.borderColor,
        isHovered ? "shadow-lg" : "shadow-sm",
        "transition-all duration-300"
      )}
      onMouseEnter={() => onHover(feature.title)}
      onMouseLeave={() => onHover(null)}
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={feature.image} 
          alt={feature.title}
          className={cn(
            "w-full h-full object-cover transition-transform duration-500",
            isHovered ? "scale-110" : "scale-100"
          )}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80"></div>
        <div className={cn(
          "absolute top-4 left-4 rounded-full p-2",
          currentSection.bgColor
        )}>
          <currentSection.icon className={cn("h-5 w-5", currentSection.textColor)} />
        </div>
      </div>
      
      <div className="p-6 relative">
        <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
        <p className="text-neutral-dark mb-4">{feature.description}</p>
        
        <button 
          onClick={() => onToggleExpand(feature.title)}
          className={cn(
            "flex items-center gap-2 text-sm font-medium transition-colors",
            currentSection.textColor,
            "hover:opacity-80"
          )}
        >
          {isExpanded ? (
            <>
              <span>Ver menos</span>
              <ChevronsUp className="h-4 w-4" />
            </>
          ) : (
            <>
              <span>Ver benefícios</span>
              <Plus className="h-4 w-4" />
            </>
          )}
        </button>
        
        <FeatureBenefits 
          isExpanded={isExpanded}
          feature={feature}
          currentSection={currentSection} 
        />
      </div>
      
      <div 
        className={cn(
          "absolute bottom-0 left-0 h-1 bg-gradient-to-r transition-all duration-500",
          currentSection.color,
          isHovered ? "w-full" : "w-0"
        )}
      />
      
      {isHovered && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md"
        >
          <ArrowRight className={cn("h-4 w-4", currentSection.textColor)} />
        </motion.div>
      )}
    </motion.div>
  );
};

export default FeatureCard;
