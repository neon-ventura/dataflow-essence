
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Ana Clara',
    position: 'CEO da Loja Virtual',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=250&q=80',
    text: 'A Anye transformou completamente a forma como gerenciamos nosso catálogo e monitoramos a concorrência. Aumentamos nossas vendas em 35% em apenas 3 meses!',
    stars: 5
  },
  {
    id: 2,
    name: 'Ricardo Mendes',
    position: 'Diretor de E-commerce',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=250&q=80',
    text: 'As ferramentas de IA da Anye nos permitem entender melhor nossos clientes e otimizar nossa estratégia de preços. É simplesmente revolucionário!',
    stars: 5
  },
  {
    id: 3,
    name: 'Carolina Souza',
    position: 'Gerente de Marketing',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=250&q=80',
    text: 'A facilidade de uso e os insights precisos da plataforma mudaram completamente nossa abordagem de vendas online. Recomendo fortemente!',
    stars: 4
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-neutral-light/30 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(26,115,232,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(26,115,232,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>
      
      <motion.div 
        className="absolute -right-40 -top-40 w-80 h-80 rounded-full bg-primary-blue/5 blur-3xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute -left-40 -bottom-40 w-80 h-80 rounded-full bg-accent-orange/5 blur-3xl"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full bg-primary-blue/10 px-4 py-1.5 text-sm font-medium text-primary-blue mb-4"
          >
            <Quote size={16} />
            <span>Depoimentos</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Clientes que <span className="text-gradient">amam</span> a Anye
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-neutral-dark"
          >
            Descubra como nossos clientes transformaram seus negócios com nossa plataforma
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl p-6 shadow-lg flex flex-col h-full relative"
            >
              <div className="absolute -top-5 -right-5">
                <div className="bg-primary-blue text-white p-2 rounded-full shadow-lg">
                  <Quote size={20} />
                </div>
              </div>
              
              <div className="flex-grow">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={18} 
                      className={i < testimonial.stars ? "fill-yellow-400 text-yellow-400" : "text-gray-300"} 
                    />
                  ))}
                </div>
                
                <p className="italic text-neutral-dark mb-6">"{testimonial.text}"</p>
              </div>
              
              <div className="flex items-center mt-4 pt-4 border-t border-neutral-light">
                <div className="w-14 h-14 rounded-full overflow-hidden mr-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-neutral-dark">{testimonial.position}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
