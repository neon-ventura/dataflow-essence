
import React from 'react';
import { motion } from 'framer-motion';
import { Check, Plus, ArrowRight, Play } from 'lucide-react';
import { cn } from '@/lib/utils';
import { FeatureSectionType, FeatureType } from './featureData';
import FeatureBenefits from './FeatureBenefits';
import { Card, CardContent, CardFooter } from "@/components/ui/card";

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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => onHover(feature.title)}
      onMouseLeave={() => onHover(null)}
    >
      <Card className={cn(
        "overflow-hidden transition-all duration-300",
        isHovered ? "shadow-lg" : "shadow-sm",
      )}>
        <div className="h-48 overflow-hidden relative">
          <img 
            src={feature.image} 
            alt={feature.title}
            className={cn(
              "w-full h-full object-cover transition-transform duration-500",
              isHovered ? "scale-105" : "scale-100"
            )}
          />
          <div className="absolute inset-0 bg-black/20"></div>
          <div className={cn(
            "absolute top-4 left-4 rounded-full p-2",
            "bg-white/90 backdrop-blur-sm"
          )}>
            <currentSection.icon className={cn("h-5 w-5", currentSection.textColor)} />
          </div>
          
          {isHovered && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-md"
            >
              <ArrowRight className={cn("h-4 w-4", currentSection.textColor)} />
            </motion.div>
          )}
        </div>
        
        <CardContent className="p-6">
          <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
          <p className="text-neutral-dark mb-4">{feature.description}</p>
          
          <div className="grid grid-cols-2 gap-3 mt-4">
            <button 
              onClick={() => onToggleExpand(feature.title)}
              className={cn(
                "flex items-center justify-center gap-2 text-sm font-medium transition-colors rounded-lg px-4 py-2",
                currentSection.textColor,
                "hover:opacity-80",
                isExpanded ? "bg-slate-100" : `${currentSection.bgColor}`
              )}
            >
              {isExpanded ? (
                <>
                  <span>Ver menos</span>
                  <ArrowRight className="h-4 w-4 rotate-90" />
                </>
              ) : (
                <>
                  <span>Ver benefícios</span>
                  <Plus className="h-4 w-4" />
                </>
              )}
            </button>
            
            <button 
              className="flex items-center justify-center gap-2 text-sm font-medium px-4 py-2 rounded-lg bg-blue-50 text-blue-600 border border-blue-200 transition-all duration-300 hover:opacity-90"
            >
              <Play className="h-4 w-4" />
              <span>Veja na Prática</span>
            </button>
          </div>
          
          <FeatureBenefits 
            isExpanded={isExpanded}
            feature={feature}
            currentSection={currentSection} 
          />
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default FeatureCard;
