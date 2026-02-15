import React from 'react';

export function Card({ 
  children, 
  className = '',
  variant = 'default',
  ...props 
}) {
  const variants = {
    default: 'border border-gray-100 hover:shadow-xl',
    filled: 'bg-gray-50 hover:bg-gray-100',
    elevated: 'shadow-lg hover:shadow-xl',
  };

  return (
    <div 
      className={`p-6 rounded-xl transition-all duration-300 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export default Card;
