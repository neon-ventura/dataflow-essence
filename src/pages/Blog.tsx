
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BookOpen, Lightbulb, FileText, TrendingUp, GraduationCap, Video, Award } from 'lucide-react';

const categories = [
  { name: 'Artigos sobre e-commerce', icon: BookOpen },
  { name: 'Dicas de marketplace', icon: Lightbulb },
  { name: 'Cases de sucesso', icon: FileText },
  { name: 'Tendências do mercado', icon: TrendingUp },
  { name: 'Treinamentos', icon: GraduationCap },
  { name: 'Webinars', icon: Video },
  { name: 'Cursos online', icon: GraduationCap },
  { name: 'Tutoriais em vídeo', icon: Video },
  { name: 'Certificações', icon: Award },
];

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-light/20">
      <Navbar />
      <main className="flex-grow pt-24 md:pt-32">
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Explore nosso <span className="text-gradient">Conteúdo</span>
                </h1>
                <p className="text-lg text-neutral-dark">
                  Seu guia completo para dominar o e-commerce. Artigos, dicas, tendências e muito mais para impulsionar suas vendas.
                </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category) => (
                <div key={category.name} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center h-full cursor-pointer">
                    <div className="bg-primary-blue/10 p-4 rounded-full mb-4">
                        <category.icon className="w-8 h-8 text-primary-blue" />
                    </div>
                    <h3 className="text-xl font-semibold text-neutral-darker mb-2">{category.name}</h3>
                    <p className="text-primary-blue font-medium mt-auto">
                        Ver conteúdo &rarr;
                    </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
