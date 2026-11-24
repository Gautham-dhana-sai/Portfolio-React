import React from 'react';
import { Link } from 'react-router-dom';

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  to?: string;
  href?: string;
  onClick?: (e?: React.MouseEvent) => void;
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  target?: string;
  rel?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  download?: boolean | string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  onClick,
  className = '',
  icon,
  iconPosition = 'right',
  target,
  rel,
  disabled = false,
  type = 'button',
  download
}) => {
  const sizeClasses = {
    sm: 'px-3.5 py-1.5 text-xs gap-1.5',
    md: 'px-5 py-2.5 text-sm gap-2',
    lg: 'px-7 py-3.5 text-base gap-2.5'
  }[size];

  const variantClasses = {
    primary:
      'bg-[#FF6B27] text-white hover:bg-[#E05514] active:scale-[0.98] shadow-sm hover:shadow-[0_8px_25px_-5px_rgba(255,107,39,0.35)] border border-transparent font-medium',
    secondary:
      'bg-[#171717] text-[#F5F5F5] hover:text-white hover:bg-[#202020] hover:border-[#FF6B27] active:scale-[0.98] border border-[#303030]',
    outline:
      'bg-transparent text-white border border-[#303030] hover:border-[#FF6B27] hover:text-[#FF6B27] active:scale-[0.98]',
    ghost:
      'bg-transparent text-[#737373] hover:text-white hover:bg-[#171717]',
    dark:
      'bg-[#0A0A0A] text-white hover:bg-[#171717] border border-[#303030] hover:border-[#FF6B27]'
  }[variant];

  const baseClasses = `inline-flex items-center justify-center font-heading rounded-lg transition-all duration-200 select-none ${sizeClasses} ${variantClasses} ${
    disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : 'cursor-pointer'
  } ${className}`;

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={baseClasses} onClick={onClick}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={baseClasses}
        onClick={onClick}
        target={target || (href.startsWith('http') ? '_blank' : undefined)}
        rel={rel || (href.startsWith('http') ? 'noopener noreferrer' : undefined)}
        download={download}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={baseClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </button>
  );
};
