
import React from 'react';
import { ChevronRight } from 'lucide-react';
import AnimatedBackground from './AnimatedBackground';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-20">
      <AnimatedBackground />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="inline-block rounded-full bg-primary-blue/10 px-4 py-1.5 text-sm font-medium text-primary-blue mb-4">
              Inteligência para seu negócio
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="text-gradient">Vendas mais lucrativas</span>
              <br />
              <span className="text-gradient">começam com dados confiáveis</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-dark max-w-xl">
              Monitore concorrentes, acompanhe catálogos e otimize suas vendas com a mais avançada plataforma de gestão para marketplaces.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 pt-4">
              <a href="#signup" className="btn-accent">
                Começar Grátis <ChevronRight className="inline-block ml-1 h-4 w-4" />
              </a>
              <a href="#demo" className="group flex items-center gap-2 py-3 text-primary-blue transition-colors hover:text-primary-light">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-blue/10 group-hover:bg-primary-blue/20 transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 5V19L19 12L8 5Z" fill="currentColor" />
                  </svg>
                </span>
                <span>Ver demonstração</span>
              </a>
            </div>
          </div>
          
          <div className="relative w-full max-w-xl mx-auto lg:mx-0 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/40 to-purple-500/40 opacity-30"></div>
              <img 
                src="https://placehold.co/1200x800/F1F3F4/5F6368?text=Dashboard+Preview" 
                alt="Dashboard Anye"
                className="w-full h-auto rounded-xl"
                loading="lazy"
              />
            </div>
            <div className="absolute -z-10 -bottom-6 -right-6 w-72 h-72 rounded-full bg-primary-blue/10 blur-3xl"></div>
            <div className="absolute -z-10 -top-6 -left-6 w-72 h-72 rounded-full bg-accent-orange/10 blur-3xl"></div>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 mt-20 animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
          <p className="text-neutral-dark font-medium">Confiado por grandes marcas:</p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {['Brand 1', 'Brand 2', 'Brand 3', 'Brand 4'].map((brand, index) => (
              <div key={index} className="text-neutral-dark/50 font-bold text-lg">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
