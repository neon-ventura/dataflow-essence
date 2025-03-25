
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import HeroSection from '@/components/feature/HeroSection';
import FeatureExplorer from '@/components/feature/FeatureExplorer';
import ImplementationTimeline from '@/components/feature/ImplementationTimeline';
import ROICalculatorSection from '@/components/feature/ROICalculatorSection';

const Features = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-neutral-950 to-neutral-900 text-white">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection />

        {/* Interactive Feature Explorer */}
        <FeatureExplorer />

        {/* Implementation Steps - Clean, Simplified Timeline */}
        <ImplementationTimeline />

        {/* Interactive Value Calculator Section */}
        <ROICalculatorSection />

        {/* CTA Section */}
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Features;
