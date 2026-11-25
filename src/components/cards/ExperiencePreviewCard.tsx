import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Calendar } from 'lucide-react';
import { CompanyExperience } from '../../data/experience';
import { useSpotlight } from '../../hooks/useSpotlight';
import styles from './ExperiencePreviewCard.module.css';

interface ExperiencePreviewCardProps {
  experience: CompanyExperience;
}

export const ExperiencePreviewCard: React.FC<ExperiencePreviewCardProps> = ({ experience }) => {
  const { elementRef, handleMouseMove, handleMouseLeave } = useSpotlight<HTMLElement>();
  const primaryRole = experience.roles[0]?.title || 'Engineer';

  return (
    <article
      ref={elementRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={styles.card}
    >
      <div className={styles.accentLine} aria-hidden="true" />

      <div className={styles.logoRow}>
        <div className={styles.logoContainer}>
          <img
            src={experience.logo}
            alt={`${experience.name} logo`}
            className={styles.logoImg}
            loading="lazy"
            onError={(e) => {
              (e.currentTarget as HTMLElement).style.display = 'none';
              const parent = e.currentTarget.parentElement;
              if (parent) {
                parent.innerText = experience.shortName[0];
              }
            }}
          />
        </div>
        <div className={styles.metaBadge}>
          <span className={styles.metaItem}>
            <Calendar size={13} /> {experience.period}
          </span>
          <span className={styles.metaItem}>
            <MapPin size={13} /> {experience.location.split(',')[0]}
          </span>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.companyInfo}>
          <h3 className={styles.companyName}>{experience.name}</h3>
          <p className={styles.roleTitle}>{primaryRole}</p>
        </div>

        <p className={styles.previewText}>{experience.summaryPreview}</p>

        <div className={styles.techPills}>
          {experience.technologies.slice(0, 4).map((tech) => (
            <span key={tech} className={styles.techPill}>{tech}</span>
          ))}
          {experience.technologies.length > 4 && (
            <span className={styles.techMore}>+{experience.technologies.length - 4} more</span>
          )}
        </div>
      </div>

      <div className={styles.cardFooter}>
        <Link to={`/experience/${experience.slug}`} className={styles.detailsLink}>
          <span>Read Full Experience Details</span>
          <ArrowRight size={15} />
        </Link>
      </div>
    </article>
  );
};
