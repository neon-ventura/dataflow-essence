
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { FeatureSectionType, FeatureType } from './featureData';

interface FeatureBenefitsProps {
  isExpanded: boolean;
  feature: FeatureType;
  currentSection: FeatureSectionType;
}

const FeatureBenefits: React.FC<FeatureBenefitsProps> = ({
  isExpanded,
  feature,
  currentSection
}) => {
  return (
    <AnimatePresence>
      {isExpanded && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="pt-4 space-y-2">
            {feature.benefits.map((benefit, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                className="flex items-start gap-2"
              >
                <div className={cn(
                  "mt-0.5 rounded-full p-1",
                  currentSection.bgColor
                )}>
                  <Check className={cn("h-3 w-3", currentSection.textColor)} />
                </div>
                <span className="text-neutral-dark">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FeatureBenefits;
