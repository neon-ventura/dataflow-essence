
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // Se há um hash na URL, tentar fazer scroll para o elemento
    if (location.hash) {
      const elementId = location.hash.replace('#', '');
      const element = document.getElementById(elementId);
      
      if (element) {
        // Pequeno delay para garantir que a página foi renderizada
        setTimeout(() => {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }, 100);
        return;
      }
    }

    // Se há estado com scrollTo (para navegação programática)
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }, 100);
        return;
      }
    }

    // Caso padrão: scroll para o topo em mudanças de rota
    window.scrollTo(0, 0);
  }, [location.pathname, location.hash, location.state]);

  return null;
};

export default ScrollToTop;
