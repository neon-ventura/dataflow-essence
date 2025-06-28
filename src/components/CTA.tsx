import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useScrollToTop } from '@/hooks/useScrollToTop';

const CTA = () => {
  const { navigateToTop } = useScrollToTop();

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-blue to-primary-light"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-sm font-medium text-white mb-6">
            <Sparkles size={16} />
            <span>Comece Agora</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Pronto para revolucionar seu <span className="text-white/90">e-commerce?</span>
          </h2>
          
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Junte-se a milhares de vendedores que já transformaram seus negócios com a Anye. 
            Comece sua jornada hoje mesmo.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => navigateToTop('/contato')}
              className="group px-8 py-4 bg-white text-primary-blue rounded-lg hover:bg-neutral-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2 font-medium"
            >
              <span>Começar Gratuitamente</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button
              onClick={() => navigateToTop('/contato')}
              className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-primary-blue transition-all duration-300 font-medium"
            >
              Falar com Especialista
            </button>
          </div>
          
          <div className="mt-8 flex flex-wrap justify-center items-center gap-6 text-sm text-white/80">
            <span>✓ 14 dias de teste grátis</span>
            <span>✓ Configuração em minutos</span>
            <span>✓ Suporte especializado</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
