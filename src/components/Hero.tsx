import React, { useState } from 'react';
import { ChevronRight, ArrowRight, MousePointer, BarChart4, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(26,115,232,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(26,115,232,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        
        {/* Floating elements */}
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
        
        {/* Gradient orbs */}
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
              <div className="mb-2">
                <span className="text-gradient">Dados Confiáveis</span>
              </div>
              <span className="text-gradient">Vendas Lucrativas</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-neutral-dark max-w-xl"
            >
              Transforme dados em decisões estratégicas. Nossa plataforma combina monitoramento de concorrentes, gestão de catálogos e insights de IA para maximizar seus resultados.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 pt-4"
            >
              <motion.a 
                href="#signup" 
                className="group relative overflow-hidden rounded-lg btn-accent flex items-center gap-2 px-6 py-3 w-full sm:w-auto"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <span>Começar Grátis</span>
                  <motion.div
                    animate={{ x: isHovered ? 5 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronRight className="inline-block h-4 w-4" />
                  </motion.div>
                </span>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-accent-orange to-accent-orange/80"
                  initial={{ x: '-100%' }}
                  animate={{ x: isHovered ? '0%' : '-100%' }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
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
              {/* Interactive Dashboard Mockup */}
              <div className="relative bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-neutral-light h-8 flex items-center px-4 gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  <div className="ml-4 h-5 w-40 bg-neutral-dark/10 rounded-md"></div>
                </div>
                <div className="p-6 relative">
                  <div className="flex items-center justify-between mb-6">
                    <div className="h-6 w-32 bg-primary-blue/20 rounded-md"></div>
                    <div className="flex gap-2">
                      <div className="h-8 w-8 rounded-md bg-neutral-light flex items-center justify-center text-primary-blue">
                        <MousePointer size={16} />
                      </div>
                      <div className="h-8 w-8 rounded-md bg-neutral-light flex items-center justify-center text-primary-blue">
                        <BarChart4 size={16} />
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <motion.div 
                      className="h-24 bg-gradient-to-br from-primary-blue/10 to-primary-light/10 rounded-lg p-4"
                      whileHover={{ y: -5, boxShadow: "0 4px 20px rgba(0,0,0,0.1)" }}
                    >
                      <div className="h-4 w-16 bg-white/60 rounded-md mb-2"></div>
                      <div className="h-6 w-24 bg-white/80 rounded-md"></div>
                      <motion.div 
                        className="absolute bottom-3 right-3 text-primary-blue"
                        animate={{ rotate: [0, 5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <ArrowRight size={16} />
                      </motion.div>
                    </motion.div>
                    <motion.div 
                      className="h-24 bg-gradient-to-br from-accent-orange/10 to-accent-orange/20 rounded-lg p-4"
                      whileHover={{ y: -5, boxShadow: "0 4px 20px rgba(0,0,0,0.1)" }}
                    >
                      <div className="h-4 w-16 bg-white/60 rounded-md mb-2"></div>
                      <div className="h-6 w-24 bg-white/80 rounded-md"></div>
                      <motion.div 
                        className="absolute bottom-3 right-3 text-accent-orange"
                        animate={{ rotate: [0, 5, 0] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                      >
                        <ArrowRight size={16} />
                      </motion.div>
                    </motion.div>
                  </div>
                  
                  <div className="h-32 bg-neutral-light/50 rounded-lg w-full mb-4 flex items-center justify-center">
                    <motion.div 
                      className="h-24 w-2/3 bg-primary-blue/10 rounded-md"
                      animate={{ 
                        height: ['6rem', '5rem', '7rem', '6rem'],
                      }}
                      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <div className="flex h-full items-end p-2 gap-2">
                        <motion.div 
                          className="bg-primary-blue/40 w-1/6 rounded-t-md"
                          animate={{ height: ['40%', '60%', '50%'] }}
                          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <motion.div 
                          className="bg-primary-blue/60 w-1/6 rounded-t-md"
                          animate={{ height: ['60%', '40%', '70%'] }}
                          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                        />
                        <motion.div 
                          className="bg-primary-blue/80 w-1/6 rounded-t-md"
                          animate={{ height: ['50%', '80%', '40%'] }}
                          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        />
                        <motion.div 
                          className="bg-primary-blue w-1/6 rounded-t-md"
                          animate={{ height: ['70%', '50%', '90%'] }}
                          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                        />
                        <motion.div 
                          className="bg-primary-light w-1/6 rounded-t-md"
                          animate={{ height: ['40%', '70%', '60%'] }}
                          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                        />
                        <motion.div 
                          className="bg-primary-light/80 w-1/6 rounded-t-md"
                          animate={{ height: ['60%', '30%', '50%'] }}
                          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
                        />
                      </div>
                    </motion.div>
                  </div>
                  
                  <div className="flex gap-2">
                    <div className="h-6 w-6 rounded-full bg-primary-blue/20"></div>
                    <div className="h-6 w-20 bg-neutral-light rounded-md"></div>
                  </div>
                </div>
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
