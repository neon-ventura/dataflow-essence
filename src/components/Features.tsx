import React, { useState } from 'react';
import { ScrollToTopLink } from './ui/ScrollToTopLink';
import FeatureHeader from '@/components/features/FeatureHeader';
import FeatureNavigation from '@/components/features/FeatureNavigation';
import FeatureContent from '@/components/features/FeatureContent';
import ImplementationSection from '@/components/features/ImplementationSection';
import ROISection from '@/components/features/ROISection';
import FeatureCTA from '@/components/features/FeatureCTA';
import { features } from '@/components/features/featuresData';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

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
        
        {/* Start CTA */}
        <div className="flex justify-center mt-16 mb-20">
          <Button 
            asChild
            className="bg-gradient-to-r from-blue-600 to-purple-500 hover:opacity-90 text-white border-none h-12 px-8 text-base rounded-xl"
          >
            <ScrollToTopLink to="/contato">
              Vamos começar? <ArrowRight className="ml-2 h-4 w-4" />
            </ScrollToTopLink>
          </Button>
        </div>

        {/* ROI Calculator */}
        <ROISection />

        {/* CTA */}
        <FeatureCTA />
      </div>
    </section>
  );
};

export default Features;
