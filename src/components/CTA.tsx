
import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-blue/10 to-primary-light/10 -z-10"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent-orange/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary-blue/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative glassmorphism rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-blue/5 to-accent-orange/5"></div>
          
          <div className="relative p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1 text-center md:text-left space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                Pronto para revolucionar sua <span className="text-gradient">competitividade</span>?
              </h2>
              <p className="text-lg text-neutral-dark max-w-xl">
                Comece hoje mesmo e tenha acesso a todas as ferramentas para se destacar no marketplace.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#trial" className="btn-primary whitespace-nowrap flex items-center justify-center">
                Teste Grátis por 14 dias
              </a>
              <a href="#demo" className="btn-accent whitespace-nowrap flex items-center justify-center">
                Solicitar Demo <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
