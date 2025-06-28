import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollToAnchor = () => {
  const location = useLocation();

  useEffect(() => {
    const scrollToElement = (elementId: string) => {
      console.log('Tentando scroll para elemento:', elementId);
      
      // Try multiple times with increasing delays
      const tryScroll = (attempts = 0) => {
        const element = document.getElementById(elementId);
        console.log('Elemento encontrado:', element);
        
        if (element) {
          // Add offset for navbar height
          const navbarHeight = 80;
          const elementPosition = element.offsetTop - navbarHeight;
          
          console.log('Fazendo scroll para posição:', elementPosition);
          
          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
          });
        } else if (attempts < 5) {
          // Retry after a delay if element not found
          console.log(`Tentativa ${attempts + 1} - elemento não encontrado, tentando novamente...`);
          setTimeout(() => tryScroll(attempts + 1), 200);
        } else {
          console.log('Elemento não encontrado após 5 tentativas');
        }
      };

      // Start trying to scroll
      setTimeout(() => tryScroll(), 100);
    };

    // Handle direct URL with hash (e.g., /#pricing)
    if (location.hash) {
      const anchor = location.hash.substring(1); // Remove the #
      console.log('Hash detectado:', anchor);
      scrollToElement(anchor);
    }
  }, [location.hash]);
}; 