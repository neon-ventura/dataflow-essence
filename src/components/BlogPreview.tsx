
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, User, BookOpen } from 'lucide-react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const blogs = [
  {
    id: 1,
    title: "Como o monitoramento de preços pode aumentar suas vendas em 40%",
    excerpt: "Descubra estratégias eficazes para utilizar dados de monitoramento de preços e impulsionar seus resultados.",
    author: "João Silva",
    date: "12 Ago 2023",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    category: "Estratégia"
  },
  {
    id: 2,
    title: "Inteligência Artificial no E-commerce: O Guia Definitivo",
    excerpt: "Como utilizar IA para otimizar seu catálogo, precificação e atendimento ao cliente no seu e-commerce.",
    author: "Maria Costa",
    date: "25 Jul 2023",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    category: "Tecnologia"
  },
  {
    id: 3,
    title: "Gestão de Catálogo: Boas práticas para marketplaces",
    excerpt: "Aprenda a organizar seu catálogo de produtos para maximizar a visibilidade e as vendas em marketplaces.",
    author: "Pedro Alves",
    date: "03 Set 2023",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    category: "Marketplaces"
  }
];

const BlogPreview = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(26,115,232,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(26,115,232,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full bg-primary-blue/10 px-4 py-1.5 text-sm font-medium text-primary-blue mb-4"
            >
              <BookOpen size={16} />
              <span>Blog</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Conteúdos <span className="text-gradient">Exclusivos</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-neutral-dark"
            >
              Dicas, estratégias e insights para impulsionar seu negócio
            </motion.p>
          </div>
          
          <motion.a
            href="/blog"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 text-primary-blue hover:text-primary-light transition-colors mt-4 md:mt-0"
          >
            Ver todos os artigos
            <ArrowRight size={16} />
          </motion.a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="h-full"
            >
              <Card className="overflow-hidden h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={blog.image} 
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-0 right-0 bg-primary-blue text-white text-xs font-medium px-3 py-1 m-2 rounded-full">
                    {blog.category}
                  </div>
                </div>
                
                <CardContent className="p-5">
                  <h3 className="text-xl font-bold mb-3 line-clamp-2 hover:text-primary-blue transition-colors">
                    {blog.title}
                  </h3>
                  <p className="text-neutral-dark mb-4 line-clamp-3">
                    {blog.excerpt}
                  </p>
                </CardContent>
                
                <CardFooter className="p-5 pt-0 flex justify-between items-center border-t border-neutral-light">
                  <div className="flex items-center gap-2 text-sm text-neutral-dark">
                    <div className="flex items-center gap-1">
                      <User size={14} />
                      <span>{blog.author}</span>
                    </div>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{blog.date}</span>
                    </div>
                  </div>
                  
                  <div className="text-xs bg-neutral-light/50 px-2 py-1 rounded-full">
                    {blog.readTime} leitura
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
