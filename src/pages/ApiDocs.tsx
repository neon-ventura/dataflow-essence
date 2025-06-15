
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { HardHat } from 'lucide-react';

const ApiDocs = () => {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-light/20">
      <Navbar />
      <main className="flex-grow flex items-center justify-center pt-24 md:pt-32">
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto">
                <div className="flex justify-center mb-8">
                    <div className="bg-primary-blue/10 p-6 rounded-full">
                        <HardHat className="w-16 h-16 text-primary-blue" />
                    </div>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  <span className="text-gradient">Em Breve</span>
                </h1>
                <p className="text-lg text-neutral-dark">
                  Nossa página de API e Documentação está em construção. Estamos trabalhando para trazer a você a melhor experiência. Volte em breve!
                </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ApiDocs;
