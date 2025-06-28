import React from 'react';
import { Link, LinkProps } from 'react-router-dom';

interface ScrollToTopLinkProps extends LinkProps {
  children: React.ReactNode;
  className?: string;
}

export const ScrollToTopLink: React.FC<ScrollToTopLinkProps> = ({ 
  children, 
  className, 
  onClick,
  to,
  ...props 
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Call the original onClick if provided
    if (onClick) {
      onClick(e);
    }
    
    // Scroll to top after navigation
    setTimeout(() => {
      window.scrollTo({ 
        top: 0, 
        left: 0, 
        behavior: 'smooth' 
      });
    }, 100);
  };

  return (
    <Link 
      {...props} 
      to={to}
      className={className}
      onClick={handleClick}
    >
      {children}
    </Link>
  );
}; 