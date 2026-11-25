import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  Github,
  ExternalLink,
  CheckCircle2,
  ArrowLeft,
  ArrowRight,
  Layers,
  Target,
  Cpu,
  Sparkles
} from 'lucide-react';
import { SEO } from '../../components/common/SEO';
import { Breadcrumbs } from '../../components/navigation/Breadcrumbs';
import { Button } from '../../components/common/Button';
import { projects } from '../../data/projects';
import styles from './ProjectDetail.module.css';

export const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <div className={styles.page}>
      <SEO
        title={`${project.name} | Project Case Study`}
        description={project.description}
      />

      <div className={styles.container}>
        <Breadcrumbs
          backPath="/projects"
          backLabel="All Projects"
          items={[
            { label: 'Home', path: '/' },
            { label: 'Projects', path: '/projects' },
            { label: project.name }
          ]}
        />

        {/* Header */}
        <header className={styles.header}>
          <div className={styles.typeBadgeRow}>
            <span className={styles.typeBadge}>{project.type}</span>
          </div>

          <h1 className={styles.title}>{project.name}</h1>
          <p className={styles.tagline}>{project.tagline}</p>

          <div className={styles.actionRow}>
            <Button
              href={project.liveUrl}
              target="_blank"
              variant="primary"
              size="md"
              icon={<ExternalLink size={16} />}
            >
              Open Live Application
            </Button>
            <Button
              href={project.githubUrl}
              target="_blank"
              variant="outline"
              size="md"
              icon={<Github size={16} />}
            >
              View GitHub Repository
            </Button>
          </div>
        </header>

        {/* Executive Summary / Full Narrative */}
        <section className={styles.section}>
          <h2 className={styles.sectionHeading}>
            <Sparkles size={20} className={styles.sectionIcon} />
            Project Overview & Narrative
          </h2>
          <div className={styles.narrativeBox}>
            <p className={styles.narrativeText}>{project.fullNarrative}</p>
          </div>
        </section>

        {/* Purpose & Problem Solved */}
        <section className={styles.section}>
          <h2 className={styles.sectionHeading}>
            <Target size={20} className={styles.sectionIcon} />
            Purpose & Problems Solved
          </h2>
          <div className={styles.purposeList}>
            {project.purposeList.map((item, idx) => (
              <div key={idx} className={styles.purposeItem}>
                <CheckCircle2 size={18} className={styles.purposeIcon} />
                <span className={styles.purposeText}>{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Architectural Features */}
        <section className={styles.section}>
          <h2 className={styles.sectionHeading}>
            <Layers size={20} className={styles.sectionIcon} />
            Key Engineering Features
          </h2>
          <div className={styles.featuresGrid}>
            {project.keyFeatures.map((feat, idx) => (
              <div key={idx} className={styles.featureCard}>
                <h3 className={styles.featTitle}>{feat.title}</h3>
                <p className={styles.featDesc}>{feat.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Technology Stack */}
        <section className={styles.section}>
          <h2 className={styles.sectionHeading}>
            <Cpu size={20} className={styles.sectionIcon} />
            Technologies & Tools
          </h2>
          <div className={styles.techPills}>
            {project.technologies.map((tech) => (
              <span key={tech} className={styles.techPill}>
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Pagination Navigation */}
        <nav className={styles.paginationNav} aria-label="Project Navigation">
          {prevProject ? (
            <Link to={`/projects/${prevProject.slug}`} className={styles.navLink}>
              <ArrowLeft size={16} />
              <div>
                <span className={styles.navMeta}>Previous Project</span>
                <span className={styles.navName}>{prevProject.name}</span>
              </div>
            </Link>
          ) : <div />}

          {nextProject ? (
            <Link to={`/projects/${nextProject.slug}`} className={`${styles.navLink} ${styles.navRight}`}>
              <div>
                <span className={styles.navMeta}>Next Project</span>
                <span className={styles.navName}>{nextProject.name}</span>
              </div>
              <ArrowRight size={16} />
            </Link>
          ) : <div />}
        </nav>
      </div>
    </div>
  );
};
