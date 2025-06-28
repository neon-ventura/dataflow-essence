import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, CheckCircle } from 'lucide-react';
import { useScrollToTop } from '@/hooks/useScrollToTop';

const Hero = () => {
  const { navigateToTop } = useScrollToTop();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-neutral-50 via-white to-primary-blue/5">
      
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(26,115,232,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(26,115,232,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-light/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 pt-24 md:pt-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full bg-primary-blue/10 px-4 py-1.5 text-sm font-medium text-primary-blue mb-6"
          >
            <CheckCircle size={16} />
            <span>Plataforma de Inteligência para E-commerce</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            Transforme dados em
            <span className="text-gradient block">decisões inteligentes</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-neutral-dark mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            A Anye oferece insights avançados de mercado e automação inteligente para maximizar seus resultados nos principais marketplaces do Brasil.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <button
              onClick={() => navigateToTop('/contato')}
              className="group px-8 py-4 bg-primary-blue text-white rounded-lg hover:bg-primary-light transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              <span className="font-medium">Começar Agora</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="group px-8 py-4 bg-white text-neutral-dark rounded-lg hover:bg-neutral-50 transition-all duration-300 border border-neutral-light flex items-center gap-2">
              <Play size={20} className="text-primary-blue" />
              <span className="font-medium">Ver Demo</span>
            </button>
          </motion.div>
          
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center items-center gap-8 text-sm text-neutral-dark"
          >
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-green-500" />
              <span>14 dias grátis</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-green-500" />
              <span>Sem cartão de crédito</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-green-500" />
              <span>Suporte especializado</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
