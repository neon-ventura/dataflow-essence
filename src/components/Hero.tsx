
import React from 'react';
import { ChevronRight } from 'lucide-react';
import AnimatedBackground from './AnimatedBackground';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 pb-20">
      <AnimatedBackground />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8 md:space-y-12 max-w-4xl mx-auto">
          <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="inline-block rounded-full bg-primary-blue/10 px-4 py-1.5 text-sm font-medium text-primary-blue mb-6">
              Inteligência para seu negócio
            </div>
            <h1 className="font-black tracking-tight">
              <span className="text-gradient">Vendas mais lucrativas</span>
              <br />
              <span className="text-gradient">começam com dados confiáveis</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-dark max-w-2xl mx-auto">
              Monitore concorrentes, acompanhe catálogos e otimize suas vendas com a mais avançada plataforma de gestão para marketplaces.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
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
          
          <div className="w-full flex justify-center animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
            <div className="relative mt-8 w-full max-w-3xl overflow-hidden rounded-xl border border-neutral-light shadow-xl animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/40 to-purple-500/40 opacity-30"></div>
              <img 
                src="https://placehold.co/1200x600/F1F3F4/5F6368?text=Dashboard+Preview" 
                alt="Dashboard Anye"
                className="w-full h-auto rounded-xl"
                loading="lazy"
              />
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 mt-10 animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
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
      </div>
    </section>
  );
};

export default Hero;
