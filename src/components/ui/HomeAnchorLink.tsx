import React from 'react';
import { useNavigate } from 'react-router-dom';

interface HomeAnchorLinkProps {
  to: string; // formato: "/#anchor"
  children: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export const HomeAnchorLink: React.FC<HomeAnchorLinkProps> = ({ 
  to, 
  children, 
  className,
  onClick,
  ...props 
}) => {
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    // Call the original onClick if provided
    if (onClick) {
      onClick(e);
    }
    
    // Extract anchor from the path (e.g., "/#pricing" -> "pricing")
    const anchor = to.split('#')[1];
    
    if (anchor) {
      // Navigate to home first
      navigate('/');
      
      // Then force scroll to element after navigation
      setTimeout(() => {
        const element = document.getElementById(anchor);
        if (element) {
          const navbarHeight = 80;
          const elementPosition = element.offsetTop - navbarHeight;
          
          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
          });
        }
      }, 500);
    } else {
      // Just navigate to home
      navigate('/');
    }
  };

  return (
    <a 
      href={to}
      className={className}
      onClick={handleClick}
      {...props}
    >
      {children}
    </a>
  );
}; 