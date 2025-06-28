import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, Shield, Zap, Award } from 'lucide-react';
import { ScrollToTopLink } from './ui/ScrollToTopLink';

interface ComparisonHeroProps {
  competitor: {
    name: string;
    logo: string;
    description: string;
  };
}

const ComparisonHero: React.FC<ComparisonHeroProps> = ({ competitor }) => {
  return (
    <section className="pt-32 pb-16 md:pb-20 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(26,115,232,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(26,115,232,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>
      
      <motion.div 
        className="absolute -right-40 -bottom-40 w-80 h-80 rounded-full bg-primary-blue/5 blur-3xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute -left-40 top-40 w-80 h-80 rounded-full bg-accent-orange/5 blur-3xl"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="container mx-auto px-4 md:px-6">
        <ScrollToTopLink to="/" className="inline-flex items-center gap-1 text-neutral-dark hover:text-primary-blue transition-colors mb-8">
          <ArrowLeft size={16} />
          <span>Voltar para a página inicial</span>
        </ScrollToTopLink>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full bg-primary-blue/10 px-4 py-1.5 text-sm font-medium text-primary-blue mb-4"
            >
              <Shield size={16} />
              <span>Comparativo Anye</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              Anye vs <span className="text-gradient">{competitor.name}</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-neutral-dark mb-8 max-w-xl"
            >
              {competitor.description}
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4"
            >
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-green-100 rounded-full p-1">
                  <Check className="h-4 w-4 text-green-600" />
                </div>
                <p>Interface mais intuitiva e moderna, sem necessidade de treinamento extensivo</p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-green-100 rounded-full p-1">
                  <Check className="h-4 w-4 text-green-600" />
                </div>
                <p>Custo mais acessível e transparente, sem taxas ocultas</p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-green-100 rounded-full p-1">
                  <Check className="h-4 w-4 text-green-600" />
                </div>
                <p>Algoritmos de IA avançados para recomendações estratégicas</p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <a href="#compare" className="btn-primary flex items-center justify-center gap-2">
                <Zap size={18} />
                <span>Ver comparativo detalhado</span>
              </a>
              
              <a 
                href="https://app.anye.com.br/" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent flex items-center justify-center gap-2"
              >
                <Award size={18} />
                <span>Experimentar a Anye grátis</span>
              </a>
            </motion.div>
          </div>
          
          <div className="flex justify-center items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative"
            >
              <div className="relative glassmorphism p-8 md:p-12 rounded-2xl">
                <div className="flex items-center justify-between border-b border-neutral-light pb-6 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center">
                      <img 
                        src="/lovable-uploads/02c626f9-ffc4-4912-b986-0c6c452801fc.png" 
                        alt="Anye Logo" 
                        className="w-12 h-12 object-contain" 
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary-blue">Anye</h3>
                      <p className="text-neutral-dark">Plataforma preferida</p>
                    </div>
                  </div>
                  <div className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium">
                    Recomendado
                  </div>
                </div>
                
                <div className="flex items-center justify-between border-b border-neutral-light pb-6 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center p-2">
                      <img 
                        src={competitor.logo} 
                        alt={`${competitor.name} Logo`} 
                        className="w-full h-full object-contain" 
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{competitor.name}</h3>
                      <p className="text-neutral-dark">Alternativa</p>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 rounded-lg bg-primary-blue/10">
                    <div className="text-2xl font-bold text-primary-blue">R$ 197</div>
                    <p className="text-sm text-neutral-dark">Anye - Plano Inicial</p>
                  </div>
                  
                  <div className="text-center p-4 rounded-lg bg-neutral-light/50">
                    <div className="text-2xl font-bold">R$ 397</div>
                    <p className="text-sm text-neutral-dark">{competitor.name} - Plano Inicial</p>
                  </div>
                </div>
              </div>
              
              <motion.div
                className="absolute -z-10 -bottom-5 -right-5 w-full h-full rounded-2xl bg-accent-orange/20 blur-md"
                animate={{ rotate: [0, 5, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonHero;
