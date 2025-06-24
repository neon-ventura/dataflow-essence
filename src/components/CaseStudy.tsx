import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star, Users, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
const CaseStudy = () => {
  return <section id="case-study" className="py-20 bg-gradient-to-r from-primary-blue/5 to-primary-blue/10">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 rounded-full bg-green-500/10 px-4 py-1.5 text-sm font-medium text-green-600 mb-4">
                <Star size={16} />
                <span>Case de Sucesso</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Como a <span className="text-gradient">AutoParts BR</span> aumentou suas vendas em 347%
              </h2>
              
              <div className="relative mb-8 pl-6 border-l-4 border-green-500">
                <Quote className="absolute -left-6 -top-2 text-green-500 h-12 w-12 opacity-20" />
                <p className="text-lg italic text-neutral-dark">
                  "Antes do Anye, era impossível manter o controle de 15.000 SKUs em 6 marketplaces diferentes. Agora, temos uma visão clara da nossa operação e aumentamos nossa eficiência em mais de 80%."
                </p>
                
                <div className="mt-4 flex items-center">
                  <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Ricardo Mendes" className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <h4 className="font-bold">Ricardo Mendes</h4>
                    <p className="text-sm text-neutral-dark">CEO da AutoParts BR</p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <p className="text-2xl font-bold text-green-600">347%</p>
                  <p className="text-sm text-neutral-dark">Aumento em vendas</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <p className="text-2xl font-bold text-primary-blue">80%</p>
                  <p className="text-sm text-neutral-dark">Mais eficiência</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <p className="text-2xl font-bold text-amber-600">-65%</p>
                  <p className="text-sm text-neutral-dark">Custos operacionais</p>
                </div>
              </div>
              
              
            </div>
            
            <div className="order-1 lg:order-2 relative">
              <div className="relative z-10 rounded-xl overflow-hidden shadow-xl">
                <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000&auto=format&fit=crop" alt="Equipe AutoParts BR" className="w-full h-auto" />
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-white rounded-lg p-4 shadow-lg z-20">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary-blue" />
                  <span className="font-medium">Equipe de 28 pessoas</span>
                </div>
              </div>
              
              <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 bg-green-500/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>;
};
export default CaseStudy;