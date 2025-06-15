
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import HomeFeatures from '@/components/HomeFeatures';
import Testimonials from '@/components/Testimonials';
import CaseStudy from '@/components/CaseStudy';
import Awards from '@/components/Awards';
import PricingPlans from '@/components/pricing/PricingPlans';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import CompetitorComparison from '@/components/CompetitorComparison';
import Careers from '@/components/Careers';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <HomeFeatures />
        <CaseStudy />
        <Testimonials />
        <Awards />
        <CompetitorComparison />
        <PricingPlans />
        <Careers />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
