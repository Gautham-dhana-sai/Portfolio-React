import React from 'react';
import { MapPin, Calendar, Award } from 'lucide-react';
import { EducationItem } from '../../data/education';
import styles from './EducationPreviewCard.module.css';

interface EducationPreviewCardProps {
  education: EducationItem;
}

export const EducationPreviewCard: React.FC<EducationPreviewCardProps> = ({ education }) => {
  return (
    <article className={styles.card}>
      <div className={styles.header}>
        <div className={styles.logoContainer}>
          <img
            src={education.logo}
            alt={`${education.institution} crest`}
            className={styles.logoImg}
            loading="lazy"
            onError={(e) => {
              (e.currentTarget as HTMLElement).style.display = 'none';
              const parent = e.currentTarget.parentElement;
              if (parent) {
                parent.innerText = education.institution[0];
              }
            }}
          />
        </div>
        <div className={styles.scoreBadge}>
          <Award size={13} />
          <span>{education.score}</span>
        </div>
      </div>

      <div className={styles.content}>
        <h3 className={styles.institution}>{education.institution}</h3>
        <p className={styles.qualification}>{education.qualification}</p>
        <p className={styles.major}>{education.major}</p>
      </div>

      <div className={styles.footer}>
        <span className={styles.metaItem}>
          <Calendar size={13} /> {education.period}
        </span>
        <span className={styles.metaItem}>
          <MapPin size={13} /> {education.location.split(',')[0]}
        </span>
      </div>
    </article>
  );
};
