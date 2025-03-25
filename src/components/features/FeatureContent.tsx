
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useToast } from "@/hooks/use-toast";
import FeatureOverview from './FeatureOverview';
import FeatureDetails from './FeatureDetails';

const FeatureContent = ({ features, activeFeature }) => {
  const { toast } = useToast();
  const [hovered, setHovered] = useState<number | null>(null);
  
  const activeFeatureData = features[activeFeature];

  const showFeatureDetails = (featureId: string) => {
    toast({
      title: "Função disponível em breve!",
      description: `Detalhes completos sobre ${featureId} estarão disponíveis em nossa próxima atualização.`,
      variant: "default",
    });
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={activeFeature}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16"
      >
        <FeatureOverview 
          activeFeatureData={activeFeatureData} 
          showFeatureDetails={showFeatureDetails} 
        />
        
        <FeatureDetails
          activeFeatureData={activeFeatureData}
          hovered={hovered}
          setHovered={setHovered}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default FeatureContent;
