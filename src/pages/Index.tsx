
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
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
import BlogPreview from '@/components/BlogPreview';

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location.state]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <HomeFeatures />
        <CaseStudy />
        <Testimonials />
        <Awards />
        <div id="compare">
          <CompetitorComparison />
        </div>
        <div id="pricing">
          <PricingPlans />
        </div>
        <Careers />
        <BlogPreview />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
