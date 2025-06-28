import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Play } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { ScrollToTopLink } from '../ui/ScrollToTopLink';

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(26,115,232,0.15),_transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(67,97,238,0.15),_transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-blue-300 mb-6">
            <Sparkles size={16} className="text-blue-400" />
            <span>Funcionalidades Anye</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
            Bem Vindo ao Lado <motion.span
              initial={{ opacity: 1, scale: 1 }}
              animate={{ 
                opacity: [1, 1, 1],
                scale: [1, 1.05, 1]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "loop"
              }}
              className="relative inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-cyan-300"
            >
              Anye
              <motion.div 
                className="absolute -z-10 inset-0 blur-md bg-blue-500/30 rounded-full"
                animate={{ 
                  boxShadow: ['0 0 5px 2px rgba(59, 130, 246, 0.5)', '0 0 20px 10px rgba(59, 130, 246, 0.7)', '0 0 5px 2px rgba(59, 130, 246, 0.5)']
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.span> <br/> da Força
          </h1>
          
          <p className="text-lg text-neutral-300 mb-10 max-w-2xl mx-auto">
            Descubra de maneira guiada, como a Anye pode revolucionar sua operação nos marketplaces, 
            com ferramentas intuitivas poderosas, para crescimento real.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white border-none h-12 px-6">
              <ScrollToTopLink to="/contato">
                <span>Agendar Demonstração</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </ScrollToTopLink>
            </Button>
            
            <Button variant="outline" className="bg-white/10 text-blue-300 border-blue-400/30 hover:bg-white/20 h-12 px-6 gap-2">
              <Play size={14} />
              <span>Ver em ação</span>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
