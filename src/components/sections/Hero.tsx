import React from 'react';
import { ArrowRight, Briefcase } from 'lucide-react';
import { personalInfo } from '../../data/personal';
import { Button } from '../common/Button';
import styles from './Hero.module.css';

export const Hero: React.FC = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left Text Column */}
          <div className={styles.textCol}>
            <div className={styles.roleBadge}>
              <span className={styles.roleDot} />
              <span className={styles.roleText}>{personalInfo.role}</span>
              <span className={styles.divider}>•</span>
              <span className={styles.expText}>{personalInfo.experienceYears} Years Experience</span>
            </div>

            <h1 className={styles.nameHeading}>
              {personalInfo.name}
            </h1>

            <p className={styles.introParagraph}>
              {personalInfo.bioFull}
            </p>

            {/* Primary Navigation Actions: Work Experience first, followed by Projects */}
            <div className={styles.ctaRow}>
              <Button to="/experience" variant="primary" size="md" icon={<Briefcase size={16} />}>
                Work Experience
              </Button>
              <Button to="/projects" variant="outline" size="md" icon={<ArrowRight size={16} />}>
                Explore Projects
              </Button>
            </div>
          </div>

          {/* Right Image Column (Uploaded photo) */}
          <div className={styles.imageCol}>
            <div className={styles.imageWrapper}>
              <div className={styles.imageFrame}>
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className={styles.profileImg}
                  loading="eager"
                />
              </div>
              <div className={styles.floatingBadge}>
                <span className={styles.badgeLabel}>Full-Stack & Systems</span>
                <span className={styles.badgeDetail}>Microservices • Integrations</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
