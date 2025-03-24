
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: 'Produto',
      links: [
        { name: 'Funcionalidades', href: '#features' },
        { name: 'Preços', href: '#pricing' },
        { name: 'Casos de Uso', href: '#cases' },
        { name: 'Integrações', href: '#integrations' },
      ]
    },
    {
      title: 'Recursos',
      links: [
        { name: 'Blog', href: '#blog' },
        { name: 'Guias', href: '#guides' },
        { name: 'Webinars', href: '#webinars' },
        { name: 'Documentação', href: '#docs' },
      ]
    },
    {
      title: 'Empresa',
      links: [
        { name: 'Sobre', href: '#about' },
        { name: 'Carreiras', href: '#careers' },
        { name: 'Contato', href: '#contact' },
        { name: 'Parceiros', href: '#partners' },
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Termos', href: '#terms' },
        { name: 'Privacidade', href: '#privacy' },
        { name: 'Cookies', href: '#cookies' },
      ]
    }
  ];
  
  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
  ];

  return (
    <footer className="bg-white border-t border-neutral-light">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2">
            <div className="mb-6">
              <a href="/" className="text-2xl font-bold text-primary-blue">Anye</a>
            </div>
            <p className="text-neutral-dark mb-6 max-w-md">
              Plataforma completa para monitoramento e otimização de performance em marketplaces.
            </p>
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a 
                  key={social.name}
                  href={social.href}
                  className="text-neutral-dark hover:text-primary-blue transition-colors"
                  aria-label={social.name}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
          
          {footerLinks.map((column) => (
            <div key={column.title} className="col-span-1">
              <h4 className="font-bold text-lg mb-4">{column.title}</h4>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-neutral-dark hover:text-primary-blue transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-neutral-light">
          <p className="text-neutral-dark text-sm mb-4 md:mb-0">
            &copy; {currentYear} Anye. Todos os direitos reservados.
          </p>
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            <a href="mailto:contato@anye.com" className="text-neutral-dark hover:text-primary-blue transition-colors text-sm flex items-center">
              <Mail size={16} className="mr-2" /> contato@anye.com
            </a>
            <a href="tel:+551199999999" className="text-neutral-dark hover:text-primary-blue transition-colors text-sm flex items-center">
              <Phone size={16} className="mr-2" /> +55 11 9999-9999
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
