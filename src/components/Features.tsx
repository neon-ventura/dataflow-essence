
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FeatureHeader from '@/components/features/FeatureHeader';
import FeatureNavigation from '@/components/features/FeatureNavigation';
import FeatureContent from '@/components/features/FeatureContent';
import ImplementationSection from '@/components/features/ImplementationSection';
import ROISection from '@/components/features/ROISection';
import FeatureCTA from '@/components/features/FeatureCTA';
import { features } from '@/components/features/featuresData';

const Features = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  
  return (
    <section id="features" className="py-12 md:py-24 overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-900/20 via-background to-background -z-10"></div>
      
      <div className="container px-4 mx-auto relative max-w-7xl">
        <FeatureHeader />

        {/* Feature Navigation */}
        <FeatureNavigation 
          features={features} 
          activeFeature={activeFeature} 
          setActiveFeature={setActiveFeature} 
        />

        {/* Active Feature Content */}
        <FeatureContent 
          features={features} 
          activeFeature={activeFeature} 
        />

        {/* Implementation Timeline */}
        <ImplementationSection />

        {/* ROI Calculator */}
        <ROISection />

        {/* CTA */}
        <FeatureCTA />
      </div>
    </section>
  );
};

export default Features;
