
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

        <div className="grid md:grid-cols-5 gap-12 lg:gap-16 mb-16">
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
          </div>

          <div className="md:col-span-3 bg-white p-8 sm:p-10 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-6">Envie-nos uma Mensagem</h2>
            <ContactForm />
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-8 text-center">Nossas Localizações</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-primary-blue">Estados Unidos - San Jose, CA</h3>
              <div className="aspect-video rounded-lg overflow-hidden shadow-md">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3170.1914670811148!2d-121.92740652359413!3d37.385304034498695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fcbdfe0a2f967%3A0x8f7541ae937457c!2s2570%20N%20First%20St%20%232nd%2C%20San%20Jose%2C%20CA%2095131%2C%20EUA!5e0!3m2!1spt-BR!2sbr!4v1750773258021!5m2!1spt-BR!2sbr" 
                  width="100%" 
                  height="100%" 
                  style={{border:0}} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3 text-primary-blue">Brasil - Belo Horizonte, MG</h3>
              <div className="aspect-video rounded-lg overflow-hidden shadow-md">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.12319268375!2d-44.00086422387911!3d-19.877019336662713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6913ede58eabf%3A0x87ed290023d22704!2sRua%20Castelo%20de%20Alc%C3%A1zar%2C%20125%20-%20Castelo%2C%20Belo%20Horizonte%20-%20MG%2C%2031330-310!5e0!3m2!1spt-BR!2sbr!4v1750773337135!5m2!1spt-BR!2sbr" 
                  width="100%" 
                  height="100%" 
                  style={{border:0}} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
