import React from 'react';
import { Calendar, MapPin, Award } from 'lucide-react';
import { SEO } from '../../components/common/SEO';
import { Breadcrumbs } from '../../components/navigation/Breadcrumbs';
import { educationList } from '../../data/education';
import styles from './Education.module.css';

export const EducationPage: React.FC = () => {
  return (
    <div className={styles.page}>
      <SEO
        title="Education & Academic Qualifications"
        description="Academic background of Pandiri Goutham Dhana Sai Reddy: B.Tech in CSE (Raghu Engineering College), Diploma in Mechanical Engineering, and SSC."
      />

      <div className={styles.container}>
        <Breadcrumbs
          items={[
            { label: 'Home', path: '/' },
            { label: 'Education' }
          ]}
        />

        <header className={styles.header}>
          <span className={styles.eyebrow}>Academic Qualifications</span>
          <h1 className={styles.title}>Education & Credentials</h1>
          <p className={styles.tagline}>
            A rigorous technical foundation spanning Computer Science, Mechanical Engineering, and foundational sciences.
          </p>
        </header>

        {/* Education Timeline */}
        <div className={styles.timeline}>
          {educationList.map((edu) => (
            <div key={edu.institution} className={styles.timelineItem}>
              <div className={styles.timelineDot} aria-hidden="true" />

              <article className={styles.card}>
                <div className={styles.cardHeader}>
                  <div className={styles.institutionGroup}>
                    <div className={styles.logoWrap}>
                      <img
                        src={edu.logo}
                        alt={`${edu.institution} crest`}
                        className={styles.logoImg}
                        loading="lazy"
                        onError={(e) => {
                          (e.currentTarget as HTMLElement).style.display = 'none';
                        }}
                      />
                    </div>
                    <div>
                      <h2 className={styles.institutionName}>{edu.institution}</h2>
                      <p className={styles.qualification}>{edu.qualification}</p>
                      <p className={styles.major}>{edu.major}</p>
                    </div>
                  </div>

                  <div className={styles.scorePill}>
                    <Award size={15} className={styles.scoreIcon} />
                    <div>
                      <span className={styles.scoreLabel}>{edu.scoreLabel}</span>
                      <span className={styles.scoreValue}>{edu.score}</span>
                    </div>
                  </div>
                </div>

                <p className={styles.description}>{edu.description}</p>

                <div className={styles.cardFooter}>
                  <span className={styles.metaBadge}>
                    <Calendar size={13} /> {edu.period}
                  </span>
                  <span className={styles.metaBadge}>
                    <MapPin size={13} /> {edu.location}
                  </span>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
