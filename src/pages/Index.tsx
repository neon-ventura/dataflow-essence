
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import Awards from '@/components/Awards';
import BlogPreview from '@/components/BlogPreview';
import CompetitorComparison from '@/components/CompetitorComparison';
import PricingPlans from '@/components/pricing/PricingPlans';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Testimonials />
        <Awards />
        <PricingPlans />
        <CompetitorComparison />
        <BlogPreview />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
