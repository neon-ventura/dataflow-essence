
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const FeatureOverview = ({ activeFeatureData, showFeatureDetails }) => {
  return (
    <div className="md:col-span-5 flex flex-col justify-between">
      <div>
        <div className={cn(
          "inline-flex items-center gap-2 rounded-full bg-gradient-to-r px-4 py-1.5 mb-4",
          `${activeFeatureData.color} bg-opacity-10 text-white`
        )}>
          <activeFeatureData.icon size={16} />
          <span className="font-medium">{activeFeatureData.title}</span>
        </div>
        
        <h2 className="text-3xl font-bold mb-4">{activeFeatureData.description}</h2>
        
        <ul className="space-y-2 mb-6">
          {activeFeatureData.benefits.map((benefit, idx) => (
            <motion.li 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-center gap-2"
            >
              <div className={cn(
                "flex-shrink-0 rounded-full p-1 bg-gradient-to-r",
                activeFeatureData.color
              )}>
                <ChevronRight className="h-3 w-3 text-white" />
              </div>
              <span>{benefit}</span>
            </motion.li>
          ))}
        </ul>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          {activeFeatureData.metrics.map((metric, idx) => (
            <div key={idx} className="bg-muted/50 backdrop-blur-sm rounded-xl p-4 border border-border">
              <div className={cn(
                "text-2xl font-bold bg-gradient-to-r bg-clip-text text-transparent mb-1",
                activeFeatureData.color
              )}>
                {metric.value}
              </div>
              <div className="text-sm text-muted-foreground">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-auto">
        <Button 
          onClick={() => showFeatureDetails(activeFeatureData.id)}
          className={cn(
            "w-full md:w-auto text-white bg-gradient-to-r",
            activeFeatureData.color
          )}
        >
          <span>Explorar {activeFeatureData.title}</span>
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
        
        <Link to="/features" className="mt-2 text-sm text-muted-foreground inline-flex items-center hover:text-primary transition-colors">
          <span>Ver todas as funcionalidades</span>
          <ArrowRight className="ml-1 h-3 w-3" />
        </Link>
      </div>
    </div>
  );
};

export default FeatureOverview;
