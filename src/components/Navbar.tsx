import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ScrollToTopLink } from './ui/ScrollToTopLink';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleHomeClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
    setIsOpen(false);
  };

  const handleComparativosClick = () => {
    if (location.pathname === '/') {
      const element = document.getElementById('compare');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/', { state: { scrollTo: 'compare' } });
    }
    setIsOpen(false);
  };

  const navItems = [{
    name: 'Home',
    action: handleHomeClick
  }, {
    name: 'Preços',
    href: '#pricing'
  }, {
    name: 'Comparativos',
    action: handleComparativosClick
  }, {
    name: 'Blog',
    href: '/blog'
  }, {
    name: 'Funcionalidades',
    href: '/features'
  }, {
    name: 'Contato',
    href: '/contato'
  }];

  return (
    <nav className={cn('fixed top-0 left-0 right-0 z-50 transition-all duration-300', isScrolled ? 'glassmorphism py-3 shadow-lg' : 'bg-transparent py-5')}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <button onClick={handleHomeClick} className="flex items-center">
              <img alt="Anye Logo" className="h-16 md:h-20" src="/lovable-uploads/235271d7-533d-4ed6-b58a-03c7ab7b4a3b.png" />
            </button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item => {
              if (item.action) {
                return (
                  <button 
                    key={item.name} 
                    onClick={item.action}
                    className="text-neutral-dark hover:text-primary-blue transition-colors duration-300 animated-border py-1"
                  >
                    {item.name}
                  </button>
                );
              }
              return item.href.startsWith('/') ? (
                <ScrollToTopLink key={item.name} to={item.href} className="text-neutral-dark hover:text-primary-blue transition-colors duration-300 animated-border py-1">
                  {item.name}
                </ScrollToTopLink>
              ) : (
                <a key={item.name} href={item.href} className="text-neutral-dark hover:text-primary-blue transition-colors duration-300 animated-border py-1">
                  {item.name}
                </a>
              );
            })}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a 
              href="https://app.anye.com.br/" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-lg bg-primary-blue text-white hover:bg-primary-light transition-colors duration-300"
            >
              Começar Agora
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-neutral-dark hover:text-primary-blue transition-colors p-2" aria-label={isOpen ? "Fechar menu" : "Abrir menu"}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile navigation */}
        <div className={cn('md:hidden overflow-hidden transition-all duration-300 ease-in-out', isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0')}>
          <div className="flex flex-col space-y-4 py-4 bg-white rounded-lg shadow-lg">
            {navItems.map(item => {
              if (item.action) {
                return (
                  <button 
                    key={item.name} 
                    onClick={item.action}
                    className="text-neutral-dark hover:text-primary-blue transition-colors px-4 py-2 text-left"
                  >
                    {item.name}
                  </button>
                );
              }
              return item.href.startsWith('/') ? (
                <ScrollToTopLink key={item.name} to={item.href} className="text-neutral-dark hover:text-primary-blue transition-colors px-4 py-2" onClick={() => setIsOpen(false)}>
                  {item.name}
                </ScrollToTopLink>
              ) : (
                <a key={item.name} href={item.href} className="text-neutral-dark hover:text-primary-blue transition-colors px-4 py-2" onClick={() => setIsOpen(false)}>
                  {item.name}
                </a>
              );
            })}
            <div className="flex flex-col space-y-3 px-4 pt-4 border-t border-neutral-light">
              <a 
                href="https://app.anye.com.br/" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-blue text-white hover:bg-primary-light transition-colors py-2 px-4 rounded-lg text-center"
                onClick={() => setIsOpen(false)}
              >
                Começar Agora
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
