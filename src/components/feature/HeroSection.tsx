
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Play } from 'lucide-react';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(37,99,235,0.15),_transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(124,58,237,0.15),_transparent_50%)]"></div>
      
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
            Soluções Que Transformam <br/> Seu Negócio
          </h1>
          
          <p className="text-lg text-neutral-300 mb-10 max-w-2xl mx-auto">
            Descubra como a Anye pode revolucionar sua operação nos marketplaces com ferramentas 
            intuitivas e poderosas projetadas para o crescimento real.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white border-none h-12 px-6">
              <span>Agendar Demonstração</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            
            <Button variant="outline" className="text-white border-white/20 hover:bg-white/10 h-12 px-6 gap-2">
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
