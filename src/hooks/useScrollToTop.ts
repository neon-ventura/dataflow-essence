import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top when pathname changes
    const scrollToTop = () => {
      window.scrollTo({ 
        top: 0, 
        left: 0, 
        behavior: 'smooth' 
      });
    };

    // Small delay to ensure the page has loaded
    const timeoutId = setTimeout(scrollToTop, 100);
    
    return () => clearTimeout(timeoutId);
  }, [pathname]);
}; 