
import React from 'react';
import Navbar from '@/components/Navbar';
import FeatureSection from '@/components/feature/FeatureSection';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import SavingsCalculator from '@/components/calculator/SavingsCalculator';
import { motion } from 'framer-motion';

const Features = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        {/* Hero Section for Features Page */}
        <section className="pt-32 pb-16 bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Funcionalidades que <span className="text-gradient">Transformam</span> seu Negócio
              </h1>
              <p className="text-lg text-neutral-dark mb-8">
                Descubra como a Anye pode ajudar você a maximizar seus resultados em marketplaces com ferramentas poderosas e intuitivas.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Detailed Feature Tabs */}
        <FeatureSection />

        {/* ROI Calculator Section */}
        <section className="py-20 bg-blue-50">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Calcule sua <span className="text-gradient">Economia</span>
              </h2>
              <p className="text-lg text-neutral-dark">
                Veja quanto você pode economizar e potencializar seus resultados ao utilizar a Anye em seu negócio.
              </p>
            </motion.div>
            
            <div className="max-w-4xl mx-auto">
              <SavingsCalculator />
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Features;
