import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import styles from './SectionHeading.module.css';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  actionText?: string;
  actionLink?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  actionText,
  actionLink,
  align = 'left',
  className = ''
}) => {
  return (
    <div className={`${styles.wrapper} ${styles[align]} ${className}`}>
      <div className={styles.textGroup}>
        {eyebrow && (
          <div className={styles.eyebrowBadge}>
            <span className={styles.eyebrowDot} />
            <span className={styles.eyebrowText}>{eyebrow}</span>
          </div>
        )}
        <h2 className={styles.title}>{title}</h2>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>

      {actionText && actionLink && (
        <div className={styles.action}>
          <Link to={actionLink} className={styles.actionLink}>
            <span>{actionText}</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      )}
    </div>
  );
};
