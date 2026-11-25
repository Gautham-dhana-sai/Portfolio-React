import React from 'react';
import { projects } from '../../data/projects';
import { ProjectPreviewCard } from '../cards/ProjectPreviewCard';
import { SectionHeading } from '../common/SectionHeading';
import styles from './ProjectsOverviewSection.module.css';

export const ProjectsOverviewSection: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <SectionHeading
          eyebrow="Portfolio Projects"
          title="Selected Projects"
          subtitle="Independent full-stack and AI applications engineered to solve distinct real-world problems."
        />

        <div className={styles.grid}>
          {projects.map((project) => (
            <ProjectPreviewCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
