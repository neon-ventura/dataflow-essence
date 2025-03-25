
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeatureBenefitListProps {
  benefits: string[];
  expanded: boolean;
  sectionColor: string;
  sectionBgColor: string;
  isDark?: boolean;
  layout?: 'list' | 'grid';
}

const FeatureBenefitList = ({ 
  benefits, 
  expanded, 
  sectionColor, 
  sectionBgColor,
  isDark = false,
  layout = 'list'
}: FeatureBenefitListProps) => {
  return (
    <AnimatePresence>
      {expanded && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className={layout === 'grid' 
            ? "grid grid-cols-1 md:grid-cols-2 gap-4" 
            : "space-y-3"
          }>
            {benefits.map((benefit, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: i * 0.05 }}
                className="flex items-start gap-2"
              >
                <div className={cn(
                  "mt-1 rounded-full p-1",
                  sectionBgColor
                )}>
                  <Check className={cn("h-3 w-3", sectionColor)} />
                </div>
                <span className={isDark ? "text-slate-300" : "text-slate-700"}>
                  {benefit}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FeatureBenefitList;
