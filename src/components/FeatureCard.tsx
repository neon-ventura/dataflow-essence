
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon: Icon,
  className,
  index
}) => {
  return (
    <div 
      className={cn(
        "relative rounded-xl border border-neutral-light bg-white p-6 shadow-sm card-hover animate-fade-in-up",
        className
      )}
      style={{ animationDelay: `${0.2 * (index + 1)}s` }}
    >
      <div className="space-y-4">
        <div className="inline-flex items-center justify-center rounded-lg bg-primary-blue/10 p-3 text-primary-blue">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-neutral-dark">{description}</p>
      </div>
      
      <div className="absolute top-0 right-0 h-24 w-24 translate-x-1/4 -translate-y-1/4 bg-gradient-to-br from-primary-blue/20 to-primary-light/5 rounded-full blur-3xl opacity-50" />
    </div>
  );
};

export default FeatureCard;
