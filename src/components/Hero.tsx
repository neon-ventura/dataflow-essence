import React, { useState } from 'react';
import { ChevronRight, ArrowRight, MousePointer, BarChart4, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(26,115,232,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(26,115,232,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        
        <motion.div 
          initial={{ y: 0 }}
          animate={{ y: [-20, 0, -20] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary-blue/5"
        />
        <motion.div 
          initial={{ y: 0 }}
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-3/4 right-1/4 w-96 h-96 rounded-full bg-primary-light/5"
        />
        
        <motion.div 
          initial={{ opacity: 0.7 }}
          animate={{ opacity: [0.7, 0.9, 0.7] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 right-1/3 w-[30vw] h-[30vw] rounded-full bg-gradient-to-r from-primary-blue/10 to-primary-light/10 blur-3xl"
        />
      </div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block rounded-full bg-primary-blue/10 px-4 py-1.5 text-sm font-medium text-primary-blue mb-4"
            >
              <span className="flex items-center gap-1">
                <Sparkles size={16} />
                <span>Potencialize seu negócio</span>
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
            >
              Transforme sua operação de marketplace em uma máquina de vendas
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-neutral-dark max-w-xl"
            >
              Análise inteligente de dados para Amazon e Mercado Livre
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 pt-4"
            >
              <motion.a 
                href="#signup" 
                className="group relative overflow-hidden rounded-lg flex items-center gap-2 px-6 py-3 w-full sm:w-auto bg-primary-blue text-white font-medium transition-colors duration-200 hover:bg-primary-blue/90 focus-visible:ring-2 focus-visible:ring-primary-blue focus-visible:ring-offset-2"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <span className="flex items-center justify-center gap-2">
                  <span>Começar Grátis</span>
                  <motion.div
                    animate={{ x: isHovered ? 5 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronRight className="inline-block h-4 w-4" />
                  </motion.div>
                </span>
              </motion.a>
              
              <motion.a 
                href="#demo" 
                className="group flex items-center gap-2 py-3 text-primary-blue transition-colors hover:text-primary-light w-full sm:w-auto justify-center sm:justify-start"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <motion.span 
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-blue/10 group-hover:bg-primary-blue/20 transition-colors"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 5V19L19 12L8 5Z" fill="currentColor" />
                  </svg>
                </motion.span>
                <span>Ver demonstração</span>
              </motion.a>
            </motion.div>
          </div>
          
          <div className="relative w-full max-w-xl mx-auto lg:mx-0">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <div className="relative bg-white rounded-xl shadow-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/dfa81c44-1063-45b7-8144-fa5c9675e87e.png" 
                  alt="Dashboard Anye - Visão geral dos indicadores do seu negócio"
                  className="w-full h-auto object-cover"
                />
              </div>
              
              <motion.div 
                className="absolute -z-10 -top-5 -right-5 w-24 h-24 rounded-full bg-accent-orange/30 blur-xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div 
                className="absolute -z-10 -bottom-8 -left-8 w-32 h-32 rounded-full bg-primary-blue/30 blur-xl"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />
            </motion.div>
          </div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-wrap justify-center items-center gap-6 md:gap-10 mt-20"
        >
          <p className="text-neutral-dark font-medium">Confiado por grandes marcas:</p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {['Brand 1', 'Brand 2', 'Brand 3', 'Brand 4'].map((brand, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 1 + (index * 0.2) }}
                className="text-neutral-dark/50 font-bold text-lg"
              >
                {brand}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
