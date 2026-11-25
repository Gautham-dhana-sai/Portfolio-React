import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Github, ExternalLink } from 'lucide-react';
import { Project } from '../../data/projects';
import { useSpotlight } from '../../hooks/useSpotlight';
import styles from './ProjectPreviewCard.module.css';

interface ProjectPreviewCardProps {
  project: Project;
}

const MAX_VISIBLE_TECH = 3;

export const ProjectPreviewCard: React.FC<ProjectPreviewCardProps> = ({ project }) => {
  const { elementRef, handleMouseMove, handleMouseLeave } = useSpotlight<HTMLElement>();

  const hasOverflow = project.technologies.length > MAX_VISIBLE_TECH;
  const visibleTech = hasOverflow
    ? project.technologies.slice(0, MAX_VISIBLE_TECH)
    : project.technologies;
  const remainingTech = hasOverflow
    ? project.technologies.slice(MAX_VISIBLE_TECH)
    : [];
  const remainingCount = remainingTech.length;

  return (
    <article
      ref={elementRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={styles.card}
    >
      <div className={styles.accentLine} aria-hidden="true" />

      <div className={styles.topRow}>
        <span className={styles.typeTag}>{project.type}</span>
        <div className={styles.externalLinks}>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.iconBtn}
            aria-label={`${project.name} GitHub Repository`}
            title="GitHub Repository"
          >
            <Github size={16} />
          </a>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.iconBtn}
            aria-label={`${project.name} Live Demo`}
            title="Live Demo"
          >
            <ExternalLink size={16} />
          </a>
        </div>
      </div>

      <div className={styles.body}>
        <h3 className={styles.title}>
          <Link to={`/projects/${project.slug}`}>{project.name}</Link>
        </h3>
        <p className={styles.tagline}>{project.tagline}</p>
        <p className={styles.description}>{project.description}</p>
      </div>

      <div className={styles.footer}>
        <div className={styles.techList}>
          {visibleTech.map((tech) => (
            <span key={tech} className={styles.techBadge}>{tech}</span>
          ))}
          {hasOverflow && (
            <span
              className={styles.moreBadge}
              title={`Also built with: ${remainingTech.join(', ')}`}
            >
              +{remainingCount} more
            </span>
          )}
        </div>

        <Link to={`/projects/${project.slug}`} className={styles.exploreBtn}>
          <span>Explore Project</span>
          <ArrowRight size={14} />
        </Link>
      </div>
    </article>
  );
};
