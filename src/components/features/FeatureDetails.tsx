
import React from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

const FeatureDetails = ({ activeFeatureData, hovered, setHovered }) => {
  return (
    <div className="md:col-span-7">
      <div className="relative rounded-2xl overflow-hidden h-64 md:h-80 mb-6 group">
        <img 
          src={activeFeatureData.primaryImage} 
          alt={activeFeatureData.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
        
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className={cn(
            "inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md px-3 py-1 text-white text-sm mb-3"
          )}>
            <Zap size={14} className="text-yellow-400" />
            <span>Aumente sua produtividade em até 10x</span>
          </div>
          
          <h3 className="text-xl md:text-2xl font-bold text-white">
            {activeFeatureData.title}: Transforme sua operação
          </h3>
        </div>
      </div>
      
      <div className="grid grid-cols-1 gap-4">
        {activeFeatureData.featureItems.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + idx * 0.1 }}
            className={cn(
              "rounded-xl p-4 border border-border relative overflow-hidden group",
              hovered === idx ? "bg-gradient-to-r from-muted/70 to-background shadow-md" : "bg-muted/30 hover:bg-muted/50"
            )}
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="relative z-10">
              <h4 className="text-lg font-semibold mb-1">{item.title}</h4>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
            
            <div 
              className={cn(
                "absolute inset-0 bg-gradient-to-r opacity-0 transition-opacity duration-300",
                activeFeatureData.color,
                hovered === idx ? "opacity-5" : ""
              )}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FeatureDetails;
