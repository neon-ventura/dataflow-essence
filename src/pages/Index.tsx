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
import { useScrollToAnchor } from '@/hooks/useScrollToAnchor';

const Index = () => {
  const location = useLocation();
  
  // Use the custom hook for hash-based scrolling
  useScrollToAnchor();

  useEffect(() => {
    const scrollToElement = (elementId: string) => {
      const element = document.getElementById(elementId);
      if (element) {
        // Add offset for navbar height
        const navbarHeight = 80;
        const elementPosition = element.offsetTop - navbarHeight;
        
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }
    };

    // Handle scroll to anchor from navigation state
    if (location.state?.scrollTo) {
      setTimeout(() => {
        scrollToElement(location.state.scrollTo);
      }, 100);
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
        <PricingPlans />
        <Careers />
        <BlogPreview />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
