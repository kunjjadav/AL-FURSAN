import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  to?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  to, 
  onClick, 
  className = '', 
  type = 'button',
  fullWidth = false,
  disabled = false
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-brand-gold text-brand-navy hover:bg-[#b08d3b] focus:ring-brand-gold shadow-lg hover:shadow-xl",
    secondary: "bg-brand-navy text-white hover:bg-[#0a1630] focus:ring-brand-navy shadow-md",
    outline: "border-2 border-white/80 text-white hover:bg-white hover:text-brand-navy focus:ring-white",
    ghost: "text-brand-navy hover:bg-brand-navy/5",
  };

  const sizes = "px-8 py-3 rounded-xl text-base";
  
  const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes} ${fullWidth ? 'w-full' : ''} ${className}`;

  // Hover animation
  const hoverAnimation = {
    y: -3,
  };

  if (to && !disabled) {
    return (
      <Link to={to} onClick={onClick}>
        <motion.button 
          whileHover={hoverAnimation}
          className={combinedClassName}
          tabIndex={-1} // Prevent double focus since Link handles it
        >
          {children}
        </motion.button>
      </Link>
    );
  }

  return (
    <motion.button 
      whileHover={variant !== 'ghost' && !disabled ? hoverAnimation : {}}
      className={combinedClassName}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </motion.button>
  );
};

export default Button;