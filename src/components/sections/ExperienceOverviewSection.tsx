import React from 'react';
import { experiences } from '../../data/experience';
import { ExperiencePreviewCard } from '../cards/ExperiencePreviewCard';
import { SectionHeading } from '../common/SectionHeading';
import styles from './ExperienceOverviewSection.module.css';

export const ExperienceOverviewSection: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <SectionHeading
          eyebrow="Career Journey"
          title="Professional Experience"
          subtitle="Organizations and engineering environments where I have designed and delivered scalable software."
          actionText="View Detailed Experience Timeline"
          actionLink="/experience"
        />

        <div className={styles.grid}>
          {experiences.map((exp) => (
            <ExperiencePreviewCard key={exp.slug} experience={exp} />
          ))}
        </div>
      </div>
    </section>
  );
};
