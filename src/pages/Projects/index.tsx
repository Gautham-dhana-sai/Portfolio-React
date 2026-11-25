import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Github, ExternalLink, CheckCircle2 } from 'lucide-react';
import { SEO } from '../../components/common/SEO';
import { Breadcrumbs } from '../../components/navigation/Breadcrumbs';
import { projects } from '../../data/projects';
import styles from './Projects.module.css';

export const ProjectsPage: React.FC = () => {
  return (
    <div className={styles.page}>
      <SEO
        title="Projects & Case Studies"
        description="Featured engineering projects by Pandiri Goutham Dhana Sai Reddy, including Find-It-Here (MERN local discovery) and Open-Bot (RAG AI platform)."
      />

      <div className={styles.container}>
        <Breadcrumbs
          items={[
            { label: 'Home', path: '/' },
            { label: 'Projects' }
          ]}
        />

        <header className={styles.header}>
          <span className={styles.eyebrow}>Software Engineering Projects</span>
          <h1 className={styles.title}>Featured Projects</h1>
          <p className={styles.tagline}>
            Production-oriented MVPs and AI applications solving concrete discovery and domain intelligence problems.
          </p>
        </header>

        <div className={styles.projectList}>
          {projects.map((project, index) => (
            <article key={project.slug} className={styles.projectCard}>
              <div className={styles.cardHeader}>
                <div className={styles.metaRow}>
                  <span className={styles.typeTag}>{project.type}</span>
                  <span className={styles.projectIndex}>Project 0{index + 1}</span>
                </div>
                <h2 className={styles.projectName}>
                  <Link to={`/projects/${project.slug}`}>{project.name}</Link>
                </h2>
                <p className={styles.taglineText}>{project.tagline}</p>
              </div>

              <div className={styles.cardBody}>
                <p className={styles.descriptionText}>{project.description}</p>

                <div className={styles.featuresPreview}>
                  <h4 className={styles.featuresTitle}>Core Engineering Highlights:</h4>
                  <ul className={styles.featureList}>
                    {project.keyFeatures.slice(0, 3).map((feat, fIdx) => (
                      <li key={fIdx} className={styles.featureItem}>
                        <CheckCircle2 size={15} className={styles.featureIcon} />
                        <div>
                          <strong>{feat.title}:</strong> {feat.description}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={styles.techStack}>
                  {project.technologies.map((tech) => (
                    <span key={tech} className={styles.techBadge}>{tech}</span>
                  ))}
                </div>
              </div>

              <div className={styles.cardFooter}>
                <div className={styles.externalLinks}>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.actionBtn}
                  >
                    <Github size={16} />
                    <span>View Repository</span>
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.actionBtn}
                  >
                    <ExternalLink size={16} />
                    <span>Live Deployment</span>
                  </a>
                </div>

                <Link to={`/projects/${project.slug}`} className={styles.caseStudyLink}>
                  <span>Explore In-Depth Case Study</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};
