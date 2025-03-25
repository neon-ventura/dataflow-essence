
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import FeatureGroup from './FeatureGroup';
import { featureSections } from './featureData';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const FeatureTabs = () => {
  const [activeSection, setActiveSection] = useState(featureSections[0].id);
  
  // Find the currently active section
  const currentSection = featureSections.find(section => section.id === activeSection);

  return (
    <div className="max-w-5xl mx-auto">
      <Tabs defaultValue={featureSections[0].id} onValueChange={setActiveSection} className="w-full">
        <TabsList className="w-full flex flex-wrap justify-center bg-background p-1 mb-10">
          {featureSections.map((section) => (
            <TabsTrigger 
              key={section.id} 
              value={section.id}
              className={cn(
                "data-[state=active]:shadow-none data-[state=active]:border-b-2 rounded-none px-6 py-3",
                activeSection === section.id ? section.textColor : ""
              )}
            >
              <div className="flex items-center gap-2">
                <section.icon className="h-5 w-5" />
                <span className="font-medium">{section.title}</span>
              </div>
            </TabsTrigger>
          ))}
        </TabsList>
        
        {featureSections.map((section) => (
          <TabsContent key={section.id} value={section.id} className="mt-8">
            <div className="text-center mb-10">
              <motion.h3 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={cn("text-2xl font-bold mb-3", section.textColor)}
              >
                {section.title}
              </motion.h3>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.1 } }}
                className="text-neutral-dark"
              >
                {section.description}
              </motion.p>
            </div>
            
            <FeatureGroup currentSection={section} />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default FeatureTabs;
