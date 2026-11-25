import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowLeft } from 'lucide-react';
import styles from './Breadcrumbs.module.css';

export interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  backPath?: string;
  backLabel?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  items,
  backPath,
  backLabel = 'Back'
}) => {
  return (
    <nav className={styles.nav} aria-label="Breadcrumb">
      {backPath && (
        <Link to={backPath} className={styles.backLink}>
          <ArrowLeft size={14} />
          <span>{backLabel}</span>
        </Link>
      )}

      <ol className={styles.list}>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className={styles.item}>
              {item.path && !isLast ? (
                <Link to={item.path} className={styles.link}>
                  {item.label}
                </Link>
              ) : (
                <span className={styles.current} aria-current={isLast ? 'page' : undefined}>
                  {item.label}
                </span>
              )}
              {!isLast && <ChevronRight size={13} className={styles.separator} aria-hidden="true" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
