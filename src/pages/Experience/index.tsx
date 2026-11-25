import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { SEO } from '../../components/common/SEO';
import { Breadcrumbs } from '../../components/navigation/Breadcrumbs';
import { experiences } from '../../data/experience';
import styles from './Experience.module.css';

export const ExperiencePage: React.FC = () => {
  return (
    <div className={styles.page}>
      <SEO
        title="Professional Experience"
        description="Comprehensive career history and engineering contributions of Pandiri Goutham Dhana Sai Reddy across Akrivia HCM, Inncircles Technologies, and Motivity Labs."
      />

      <div className={styles.container}>
        <Breadcrumbs
          items={[
            { label: 'Home', path: '/' },
            { label: 'Experience' }
          ]}
        />

        <header className={styles.header}>
          <span className={styles.eyebrow}>Professional Journey</span>
          <h1 className={styles.title}>Work Experience</h1>
          <p className={styles.tagline}>
            4 years of engineering scalable microservices, automated cloud provisioning, and resilient enterprise applications.
          </p>
        </header>

        {/* Timeline List of Companies */}
        <div className={styles.timeline}>
          {experiences.map((exp) => (
            <div key={exp.slug} className={styles.timelineItem}>
              <div className={styles.timelineDot} aria-hidden="true" />
              
              <article className={styles.experienceCard}>
                <div className={styles.cardHeader}>
                  <div className={styles.logoAndTitle}>
                    <div className={styles.logoWrap}>
                      <img
                        src={exp.logo}
                        alt={`${exp.name} logo`}
                        className={styles.logoImg}
                        loading="lazy"
                        onError={(e) => {
                          (e.currentTarget as HTMLElement).style.display = 'none';
                        }}
                      />
                    </div>
                    <div>
                      <h2 className={styles.companyName}>
                        <Link to={`/experience/${exp.slug}`}>{exp.name}</Link>
                      </h2>
                      <div className={styles.roleSummary}>
                        {exp.roles.map((r, i) => (
                          <span key={i} className={styles.roleTag}>
                            {r.title} {r.type ? `(${r.type})` : ''}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className={styles.metaCol}>
                    <span className={styles.metaBadge}>
                      <Calendar size={13} /> {exp.period}
                    </span>
                    <span className={styles.metaBadge}>
                      <MapPin size={13} /> {exp.location}
                    </span>
                  </div>
                </div>

                <p className={styles.productContext}>
                  {exp.productContext}
                </p>

                {/* Key Contribution Highlights */}
                <div className={styles.contributions}>
                  <h4 className={styles.contributionsHeading}>Key Contributions & Engineering Impact:</h4>
                  <ul className={styles.contributionList}>
                    {exp.keyContributions.map((contrib, i) => (
                      <li key={i} className={styles.contributionItem}>
                        <CheckCircle2 size={16} className={styles.checkIcon} />
                        <div>
                          <strong>{contrib.title}:</strong> {contrib.description}
                          {contrib.impact && (
                            <span className={styles.impactHighlight}> — {contrib.impact}</span>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Tags */}
                <div className={styles.footerRow}>
                  <div className={styles.techTags}>
                    {exp.technologies.map((tech) => (
                      <span key={tech} className={styles.techBadge}>{tech}</span>
                    ))}
                  </div>

                  <Link to={`/experience/${exp.slug}`} className={styles.viewDetailLink}>
                    <span>Read Full Experience Details</span>
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
