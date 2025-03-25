
import React from 'react';
import { motion } from 'framer-motion';
import { Plus, ChevronRight, PlusCircle, Check, Play, Video } from 'lucide-react';
import { cn } from '@/lib/utils';
import { FeatureType, FeatureSectionType } from './featureData';
import FeatureBenefitList from './FeatureBenefitList';

interface FeatureCardItemProps {
  feature: FeatureType;
  currentSection: FeatureSectionType;
  index: number;
  expandedFeature: string | null;
  hoveredFeature: number | null;
  toggleFeature: (title: string) => void;
  setHoveredFeature: (index: number | null) => void;
  isDark?: boolean;
}

const FeatureCardItem = ({ 
  feature, 
  currentSection, 
  index, 
  expandedFeature, 
  hoveredFeature, 
  toggleFeature, 
  setHoveredFeature,
  isDark = false
}: FeatureCardItemProps) => {
  const isExpanded = expandedFeature === feature.title;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className={cn(
        "relative rounded-xl overflow-hidden border shadow-md",
        isDark 
          ? isExpanded ? "bg-slate-800/80 border-blue-900/30" : "bg-slate-800/60 border-slate-700"
          : isExpanded ? "bg-white border-slate-300" : "bg-white border-slate-200"
      )}
      onMouseEnter={() => setHoveredFeature(index)}
      onMouseLeave={() => setHoveredFeature(null)}
    >
      <div className="p-6">
        <div className="flex items-start gap-4 mb-4">
          <div className={cn(
            "p-3 rounded-lg",
            currentSection.bgColor,
            "flex-shrink-0"
          )}>
            <currentSection.icon className={cn("h-6 w-6", currentSection.textColor)} />
          </div>
          
          <div>
            <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              {feature.title}
            </h3>
            <div className={cn(
              "inline-flex items-center gap-1.5 text-xs rounded-full",
              "py-1 px-2 mb-3",
              isDark ? "border-slate-700 bg-slate-700/70" : "border-slate-200 bg-slate-50",
              isDark ? "border" : "border"
            )}>
              <currentSection.icon className={cn("h-3 w-3", currentSection.textColor)} />
              <span className={isDark ? "text-slate-300" : "text-slate-700"}>Anye {currentSection.title}</span>
            </div>
          </div>
        </div>
        
        <p className={`mb-4 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
          {feature.description}
        </p>
        
        {/* Key capabilities section */}
        <div className="mb-4">
          <h4 className={`text-sm font-semibold mb-2 ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
            Principais recursos:
          </h4>
          <ul className="grid grid-cols-1 gap-2">
            {feature.benefits.slice(0, isExpanded ? undefined : 3).map((benefit, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <Check className={cn("h-4 w-4 mt-0.5", currentSection.textColor)} />
                <span className={isDark ? "text-slate-300" : "text-slate-700"}>
                  {benefit}
                </span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Action buttons - Add the "Veja na Prática" button */}
        <div className="grid grid-cols-2 gap-3 mt-4">
          <motion.button 
            onClick={() => toggleFeature(feature.title)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={cn(
              "flex items-center justify-center gap-2 text-sm font-medium px-4 py-2 rounded-lg",
              isExpanded ? 
                (isDark ? "bg-slate-700 text-white" : "bg-slate-100 text-slate-800") : 
                (isDark ? `${currentSection.bgColor} ${currentSection.textColor}` : `${currentSection.bgColor} ${currentSection.textColor}`),
              "transition-all duration-300 hover:opacity-90"
            )}
          >
            {isExpanded ? (
              <>
                <span>Ver menos</span>
                <ChevronRight className="h-4 w-4 rotate-90" />
              </>
            ) : (
              <>
                <span>Ver benefícios</span>
                <PlusCircle className="h-4 w-4" />
              </>
            )}
          </motion.button>
          
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={cn(
              "flex items-center justify-center gap-2 text-sm font-medium px-4 py-2 rounded-lg",
              isDark ? 
                "bg-blue-600/30 text-blue-300 border border-blue-500/30" : 
                "bg-blue-50 text-blue-600 border border-blue-200",
              "transition-all duration-300 hover:opacity-90"
            )}
          >
            <Play className="h-4 w-4" />
            <span>Veja na Prática</span>
          </motion.button>
        </div>
      </div>
      
      {/* Expanded benefits display */}
      {isExpanded && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className={cn(
            "p-6 border-t",
            isDark ? "border-blue-900/30 bg-gradient-to-br from-slate-800 to-slate-800/50" : "border-slate-200 bg-slate-50/50"
          )}
        >
          <h4 className={`font-semibold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Todos os benefícios:
          </h4>
          <FeatureBenefitList 
            benefits={feature.benefits}
            expanded={true}
            sectionColor={currentSection.textColor}
            sectionBgColor={currentSection.bgColor}
            isDark={isDark}
            layout="grid"
          />
        </motion.div>
      )}
    </motion.div>
  );
};

export default FeatureCardItem;
