
import React from 'react';
import { cn } from '@/lib/utils';

interface AnimatedBackgroundProps {
  className?: string;
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ className }) => {
  return (
    <div className={cn('absolute inset-0 overflow-hidden -z-10', className)}>
      {/* Grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(26,115,232,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(26,115,232,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      {/* Floating elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary-blue/5 animate-float"></div>
      <div className="absolute top-3/4 right-1/4 w-96 h-96 rounded-full bg-primary-light/5 animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/4 left-1/2 w-48 h-48 rounded-full bg-accent-orange/5 animate-float" style={{ animationDelay: '2s' }}></div>
      
      {/* Gradient orbs */}
      <div className="absolute top-1/3 right-1/3 w-[30vw] h-[30vw] rounded-full bg-gradient-to-r from-primary-blue/10 to-primary-light/10 blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/3 left-1/3 w-[25vw] h-[25vw] rounded-full bg-gradient-to-r from-accent-orange/10 to-primary-light/10 blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      
      {/* Dots pattern */}
      <div className="absolute inset-0 opacity-20" style={{ background: 'radial-gradient(#1A73E8 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
    </div>
  );
};

export default AnimatedBackground;
