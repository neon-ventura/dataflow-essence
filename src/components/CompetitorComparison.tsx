
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, XCircle, LineChart } from 'lucide-react';
import { Link } from 'react-router-dom';

const competitors = [
  {
    id: 'avant-pro',
    name: 'Avant Pro',
    logo: 'https://images.unsplash.com/photo-1490810194309-344b3661ba39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&q=80',
    shortDescription: 'Plataforma completa mas com interface complexa e alto custo',
    path: '/anye-vs-avant-pro'
  },
  {
    id: 'nubimetrics',
    name: 'Nubimetrics',
    logo: 'https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&q=80',
    shortDescription: 'Bons dados, mas sem automação inteligente e integração limitada',
    path: '/anye-vs-nubimetrics'
  },
  {
    id: 'mercado-turbo',
    name: 'Mercado Turbo',
    logo: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&q=80',
    shortDescription: 'Foco em Mercado Livre, falta suporte para outros marketplaces',
    path: '/anye-vs-mercado-turbo'
  }
];

const CompetitorComparison = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-blue/5 to-primary-light/5 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(26,115,232,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(26,115,232,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full bg-primary-blue/10 px-4 py-1.5 text-sm font-medium text-primary-blue mb-4"
          >
            <LineChart size={16} />
            <span>Comparativos</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Por que a <span className="text-gradient">Anye</span> é melhor?
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-neutral-dark"
          >
            Compare nossas soluções com as principais alternativas do mercado
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {competitors.map((competitor, index) => (
            <motion.div
              key={competitor.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-white rounded-xl p-6 shadow-lg relative overflow-hidden"
            >
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-neutral-light flex items-center justify-center">
                  <img 
                    src={competitor.logo} 
                    alt={competitor.name}
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold">Anye vs</h3>
                  <p className="text-lg text-neutral-dark">{competitor.name}</p>
                </div>
              </div>
              
              <div className="mb-4">
                <p className="text-neutral-dark mb-6">
                  {competitor.shortDescription}
                </p>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="text-green-500 mt-1 h-5 w-5 flex-shrink-0" />
                    <p className="text-sm">Interface intuitiva e moderna</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="text-green-500 mt-1 h-5 w-5 flex-shrink-0" />
                    <p className="text-sm">Preço mais competitivo e transparente</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <XCircle className="text-red-500 mt-1 h-5 w-5 flex-shrink-0" />
                    <p className="text-sm">Sem funcionalidades desnecessárias e complexas</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-auto">
                <Link 
                  to={competitor.path}
                  className="flex items-center text-primary-blue hover:text-primary-light transition-colors"
                >
                  <span>Ver comparativo completo</span>
                  <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Link 
            to="/comparisons"
            className="inline-flex items-center gap-2 text-primary-blue hover:text-primary-light transition-colors"
          >
            Ver todos os comparativos
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CompetitorComparison;
