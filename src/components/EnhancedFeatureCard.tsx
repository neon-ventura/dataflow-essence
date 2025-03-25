
import React, { useState } from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FeaturePoint {
  title: string;
  description: string;
}

interface EnhancedFeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  imageSrc?: string;
  index: number;
  featurePoints?: FeaturePoint[];
}

const EnhancedFeatureCard: React.FC<EnhancedFeatureCardProps> = ({
  title,
  description,
  icon: Icon,
  imageSrc,
  index,
  featurePoints = []
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className={cn(
        "relative rounded-xl border border-neutral-light bg-white p-6 shadow-sm transition-all duration-300",
        "scroll-animate animate-fade-in-up hover:shadow-md hover:shadow-primary-blue/10 hover:-translate-y-1"
      )}
      style={{ animationDelay: `${0.2 * (index + 1)}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className={cn(
            "inline-flex items-center justify-center rounded-lg p-3 transition-all duration-300",
            isHovered ? "bg-primary-blue text-white" : "bg-primary-blue/10 text-primary-blue"
          )}>
            <Icon className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
        
        {imageSrc && (
          <div className="relative w-full h-40 overflow-hidden rounded-lg mb-4 group">
            <img 
              src={imageSrc} 
              alt={title} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        )}
        
        <p className="text-neutral-dark">{description}</p>
        
        {featurePoints.length > 0 && (
          <Collapsible
            open={isOpen}
            onOpenChange={setIsOpen}
            className="w-full"
          >
            <CollapsibleTrigger className="flex items-center justify-between w-full py-2 text-primary-blue font-medium hover:text-primary-light transition-colors">
              <span>Ver detalhes</span>
              {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </CollapsibleTrigger>
            <CollapsibleContent className="space-y-3 pt-3">
              {featurePoints.map((point, i) => (
                <div key={i} className="pl-4 border-l-2 border-primary-blue/20">
                  <h4 className="font-semibold text-primary-blue">{point.title}</h4>
                  <p className="text-sm text-neutral-dark">{point.description}</p>
                </div>
              ))}
            </CollapsibleContent>
          </Collapsible>
        )}
      </div>
      
      <div className="absolute top-0 right-0 h-24 w-24 translate-x-1/4 -translate-y-1/4 bg-gradient-to-br from-primary-blue/20 to-primary-light/5 rounded-full blur-3xl opacity-50" />
    </div>
  );
};

export default EnhancedFeatureCard;
