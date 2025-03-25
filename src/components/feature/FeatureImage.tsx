
import React from 'react';
import { motion } from 'framer-motion';
import { Zap, MousePointer } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeatureImageProps {
  image: string;
  title: string;
  isHovered: boolean;
  sectionColor: string;
}

const FeatureImage = ({ image, title, isHovered, sectionColor }: FeatureImageProps) => {
  return (
    <div className="md:w-1/2 relative h-56 md:h-auto group">
      <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-transparent to-transparent md:bg-gradient-to-l md:via-white/20 md:from-transparent md:to-white/80 z-10"></div>
      
      <img 
        src={image} 
        alt={title}
        className={cn(
          "w-full h-full object-cover",
          "transition-transform duration-700",
          isHovered ? "scale-105" : "scale-100"
        )}
        loading="lazy"
      />
      
      {isHovered && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={cn(
            "absolute bottom-6 right-6 rounded-lg",
            "bg-white/80 backdrop-blur-sm p-3 z-20 shadow-md"
          )}
        >
          <Zap className={cn("h-5 w-5", sectionColor)} />
        </motion.div>
      )}
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1 : 0.8
        }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
      >
        <div className={cn(
          "flex items-center gap-2 rounded-full",
          "py-2 px-4 bg-white/80 backdrop-blur-sm shadow-md",
          "border border-slate-200"
        )}>
          <MousePointer className="h-4 w-4 text-slate-700" />
          <span className="text-sm font-medium text-slate-900">Interagir</span>
        </div>
      </motion.div>
    </div>
  );
};

export default FeatureImage;
