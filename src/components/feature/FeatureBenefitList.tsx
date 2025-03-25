
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeatureBenefitListProps {
  benefits: string[];
  expanded: boolean;
  sectionColor: string;
  sectionBgColor: string;
}

const FeatureBenefitList = ({ benefits, expanded, sectionColor, sectionBgColor }: FeatureBenefitListProps) => {
  return (
    <AnimatePresence>
      {expanded && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden pt-4"
        >
          <ul className="space-y-3">
            {benefits.map((benefit, i) => (
              <motion.li 
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
                <span className="text-slate-700">{benefit}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FeatureBenefitList;
