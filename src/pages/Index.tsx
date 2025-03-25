
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import CaseStudy from '@/components/CaseStudy';
import Awards from '@/components/Awards';
import PricingPlans from '@/components/pricing/PricingPlans';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

// Removi BlogPreview e CompetitorComparison pois não são tão focados em conversão

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <CaseStudy />
        <Testimonials />
        <Awards />
        <PricingPlans />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
