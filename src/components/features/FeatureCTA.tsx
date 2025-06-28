
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const FeatureCTA = () => {
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center max-w-2xl mx-auto"
    >
      <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 p-px">
        <div className="rounded-2xl bg-[linear-gradient(#000510_0%,#001253_100%)] p-8 md:p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(37,99,235,0.2),_transparent_50%)] w-full h-full"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(124,58,237,0.2),_transparent_50%)] w-full h-full"></div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Pronto para revolucionar sua operação?</h2>
          <p className="text-blue-200 mb-8 max-w-xl mx-auto">
            Agende uma demonstração personalizada e descubra como nossos recursos podem transformar seu negócio nos marketplaces
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-white text-blue-900 hover:bg-blue-50">
              <Link to="/contato" onClick={handleLinkClick}>Solicitar demonstração</Link>
            </Button>
            <Button asChild variant="outline" className="text-white border-white/30 hover:bg-white/10">
              <Link to="/contato" onClick={handleLinkClick}>Falar com especialista</Link>
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FeatureCTA;
