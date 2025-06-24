import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: 'Produto',
      links: [
        { name: 'Funcionalidades', href: '/features' },
        { name: 'Preços', href: '/#pricing' },
        { name: 'Casos de Uso', href: '/' },
        { name: 'Integrações', href: '/' },
      ]
    },
    {
      title: 'Recursos',
      links: [
        { name: 'Blog', href: '/blog' },
        { name: 'Guias', href: '/blog' },
        { name: 'Webinars', href: '/blog' },
        { name: 'API e Documentação', href: '/api-docs' },
      ]
    },
    {
      title: 'Empresa',
      links: [
        { name: 'Sobre', href: '/' },
        { name: 'Carreiras', href: '/' },
        { name: 'Contato', href: '/contato' },
        { name: 'Parceiros', href: '/' },
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Termos', href: '/' },
        { name: 'Privacidade', href: '/' },
        { name: 'Cookies', href: '/' },
      ]
    }
  ];
  
  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
  ];

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

  return (
    <footer className="bg-white border-t border-neutral-light">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2">
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
            <div className="mt-8">
              <h4 className="font-bold text-lg mb-4">Escritórios</h4>
              <div className="space-y-4">
                {locations.map(location => (
                  <div key={location.name}>
                    <p className="font-semibold text-neutral-dark">{location.name}</p>
                    <p className="text-neutral-dark text-sm">{location.address}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {footerLinks.map((column) => (
            <div key={column.title} className="col-span-1">
              <h4 className="font-bold text-lg mb-4">{column.title}</h4>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.name}>
                    {link.href.startsWith('/') ? (
                       <Link
                         to={link.href}
                         className="text-neutral-dark hover:text-primary-blue transition-colors"
                       >
                         {link.name}
                       </Link>
                     ) : (
                       <a 
                         href={link.href}
                         className="text-neutral-dark hover:text-primary-blue transition-colors"
                       >
                         {link.name}
                       </a>
                     )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8 border-t border-neutral-light">
          <div className="flex items-center">
            <p className="text-neutral-dark text-sm">
              &copy; {currentYear} Anye. Todos os direitos reservados.
            </p>
          </div>
          
          <div className="flex md:justify-end">
            <div className="flex items-start md:items-center space-y-0 md:space-x-6">
              <a href="mailto:contato@anye.com" className="text-neutral-dark hover:text-primary-blue transition-colors text-sm flex items-center">
                <Mail size={16} className="mr-2" /> contato@anye.com
              </a>
              <a href="tel:+5533988980067" className="text-neutral-dark hover:text-primary-blue transition-colors text-sm flex items-center">
                <Phone size={16} className="mr-2" /> +55 33 98898-0067
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
