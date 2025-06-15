
import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import ContactForm from './ContactForm';

const Contact = () => {
  const locations = [
    {
      name: 'Estados Unidos',
      address: '2570 N. First Street, 2nd Floor San Jose, CA 95131',
    },
    {
      name: 'Brasil',
      address: 'Rua Castelo de Alcázar, 125 - Castelo Belo Horizonte - MG, 31330-310',
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.288219973273!2d-43.99042188562386!3d-19.87019794220313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa690f0a35b9183%3A0x6545b80a390a3e9c!2sR.%20Castelo%20de%20Alc%C3%A1zar%2C%20125%20-%20Castelo%2C%20Belo%20Horizonte%20-%20MG%2C%2031330-310%2C%20Brazil!5e0!3m2!1sen!2sus!4v1678886400000!5m2!1sen!2sus"
    },
  ];

  const contactInfo = [
      { icon: Mail, text: 'contato@anye.com', href: 'mailto:contato@anye.com' },
      { icon: Phone, text: '+55 11 9999-9999', href: 'tel:+551199999999' },
  ];

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient">Fale Conosco</h2>
          <p className="mt-4 text-lg text-neutral-dark max-w-3xl mx-auto">
            Tem alguma dúvida, sugestão ou quer saber mais sobre nossos planos? Nossa equipe está pronta para te ajudar. Preencha o formulário ou utilize um de nossos canais de atendimento.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 xl:gap-16 items-start">
          <div className="lg:col-span-3 bg-neutral-light/30 p-8 rounded-lg">
            <ContactForm />
          </div>

          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-neutral-dark">Dados de Contato</h3>
                <div className="space-y-4">
                    {contactInfo.map((item, index) => (
                        <a key={index} href={item.href} className="flex items-center space-x-3 text-neutral-dark hover:text-primary-blue transition-colors group">
                            <item.icon className="w-5 h-5 text-primary-blue flex-shrink-0" />
                            <span>{item.text}</span>
                        </a>
                    ))}
                    {locations.map(location => (
                    <div key={location.name} className="flex items-start space-x-3 pt-4">
                        <MapPin className="w-5 h-5 text-primary-blue mt-1 flex-shrink-0" />
                        <div>
                        <p className="font-semibold text-neutral-dark">{location.name}</p>
                        <p className="text-neutral-dark text-sm">{location.address}</p>
                        </div>
                    </div>
                    ))}
                </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-neutral-dark">Mapa com Localização</h3>
               <div className="aspect-video rounded-lg overflow-hidden shadow-lg border border-neutral-light">
                <iframe
                    src={locations[1].mapUrl}
                    className="w-full h-full"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Anye Brasil Office Location"
                ></iframe>
               </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-neutral-dark">Horário de Atendimento</h3>
              <div className="flex items-center space-x-3 text-neutral-dark">
                <Clock className="w-5 h-5 text-primary-blue" />
                <span>Segunda a Sexta: 9:00 - 18:00 (BRT)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
