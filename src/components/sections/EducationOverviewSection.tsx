import React from 'react';
import { educationList } from '../../data/education';
import { EducationPreviewCard } from '../cards/EducationPreviewCard';
import { SectionHeading } from '../common/SectionHeading';
import styles from './EducationOverviewSection.module.css';

export const EducationOverviewSection: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <SectionHeading
          eyebrow="Academic Background"
          title="Education"
          subtitle="Formal academic progression in Computer Science, Mechanical Engineering, and foundational sciences."
          actionText="View Academic Details"
          actionLink="/education"
        />

        <div className={styles.grid}>
          {educationList.map((edu) => (
            <EducationPreviewCard key={edu.institution} education={edu} />
          ))}
        </div>
      </div>
    </section>
  );
};
