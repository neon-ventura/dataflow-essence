
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ContactForm } from '@/components/ContactForm';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

const locations = [
  {
    name: 'Estados Unidos',
    address: '2570 N. First Street, 2nd Floor San Jose, CA 95131',
  },
  {
    name: 'Brasil',
    address: 'Rua Castelo de Alcázar, 125 - Castelo Belo Horizonte - MG, 31330-310',
  },
];

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 md:px-6 py-24 md:py-32">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-dark mb-4">Fale Conosco</h1>
          <p className="text-lg text-neutral-dark max-w-3xl mx-auto">
            Tem alguma pergunta ou quer saber mais sobre a Anye? Preencha o formulário abaixo ou entre em contato conosco através dos nossos canais.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-12 lg:gap-16">
          <div className="md:col-span-2 space-y-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Informações de Contato</h2>
              <div className="space-y-6">
                {locations.map((location) => (
                  <div key={location.name} className="flex items-start">
                    <MapPin className="text-primary-blue w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-xl">{location.name}</h3>
                      <p className="text-neutral-dark">{location.address}</p>
                    </div>
                  </div>
                ))}
                <div className="flex items-center pt-4">
                    <Mail className="text-primary-blue w-5 h-5 mr-4" />
                    <a href="mailto:contato@anye.com" className="text-neutral-dark hover:text-primary-blue transition-colors">contato@anye.com</a>
                </div>
                <div className="flex items-center">
                    <Phone className="text-primary-blue w-5 h-5 mr-4" />
                    <a href="tel:+5533988980067" className="text-neutral-dark hover:text-primary-blue transition-colors">+55 33 98898-0067</a>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Horário de Atendimento</h2>
              <div className="flex items-center">
                <Clock className="text-primary-blue w-5 h-5 mr-4" />
                <div>
                  <p className="font-semibold text-lg">Segunda a Sexta</p>
                  <p className="text-neutral-dark">9:00 - 18:00 (BRT)</p>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6">Nossas Localizações</h2>
              <div className="aspect-video rounded-lg overflow-hidden bg-neutral-light shadow-md">
                <div className="w-full h-full flex items-center justify-center bg-gray-200">
                  <p className="text-neutral-dark italic">Mapa interativo em breve</p>
                </div>
              </div>
               <p className="text-sm text-muted-foreground mt-2">Para um mapa interativo do Google, é necessária uma chave de API.</p>
            </div>
          </div>

          <div className="md:col-span-3 bg-white p-8 sm:p-10 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-6">Envie-nos uma Mensagem</h2>
            <ContactForm />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
