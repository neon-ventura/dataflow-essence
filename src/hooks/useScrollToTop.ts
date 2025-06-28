
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export const useScrollToTop = () => {
  const navigate = useNavigate();

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  const scrollToElement = useCallback((elementId: string, smooth: boolean = true) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ 
        behavior: smooth ? 'smooth' : 'auto',
        block: 'start'
      });
      return true;
    }
    return false;
  }, []);

  const navigateAndScroll = useCallback((path: string, elementId?: string) => {
    if (elementId) {
      navigate(path, { state: { scrollTo: elementId } });
    } else {
      navigate(path);
    }
  }, [navigate]);

  const instantScrollToTop = useCallback(() => {
    window.scrollTo(0, 0);
  }, []);

  return {
    scrollToTop,
    scrollToElement,
    navigateAndScroll,
    instantScrollToTop
  };
};
