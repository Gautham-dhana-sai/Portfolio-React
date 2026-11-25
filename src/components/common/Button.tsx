import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.css';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  to?: string;
  href?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  download?: boolean | string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  target,
  rel,
  onClick,
  className = '',
  icon,
  iconPosition = 'right',
  download,
  type = 'button',
  disabled = false
}) => {
  const buttonClasses = `${styles.button} ${styles[variant]} ${styles[size]} ${className}`;

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className={styles.icon}>{icon}</span>}
      <span className={styles.text}>{children}</span>
      {icon && iconPosition === 'right' && <span className={styles.icon}>{icon}</span>}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={buttonClasses} onClick={onClick}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : rel}
        className={buttonClasses}
        download={download}
        onClick={onClick}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </button>
  );
};
