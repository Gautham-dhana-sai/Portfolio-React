import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  Calendar,
  MapPin,
  CheckCircle2,
  ArrowLeft,
  ArrowRight,
  Cpu,
  Layers,
  TrendingUp
} from 'lucide-react';
import { SEO } from '../../components/common/SEO';
import { Breadcrumbs } from '../../components/navigation/Breadcrumbs';
import { experiences } from '../../data/experience';
import styles from './CompanyDetail.module.css';

export const CompanyDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const experience = experiences.find((e) => e.slug === slug);

  if (!experience) {
    return <Navigate to="/experience" replace />;
  }

  // Find next and previous companies for clean navigation
  const currentIndex = experiences.findIndex((e) => e.slug === slug);
  const prevCompany = currentIndex > 0 ? experiences[currentIndex - 1] : null;
  const nextCompany = currentIndex < experiences.length - 1 ? experiences[currentIndex + 1] : null;

  return (
    <div className={styles.page}>
      <SEO
        title={`${experience.name} | Experience Details`}
        description={`Detailed engineering contributions, architecture decisions, and accomplishments at ${experience.name}.`}
      />

      <div className={styles.container}>
        <Breadcrumbs
          backPath="/experience"
          backLabel="All Experience"
          items={[
            { label: 'Home', path: '/' },
            { label: 'Experience', path: '/experience' },
            { label: experience.shortName }
          ]}
        />

        {/* Hero Header */}
        <header className={styles.header}>
          <div className={styles.headerTop}>
            <div className={styles.logoBox}>
              <img
                src={experience.logo}
                alt={`${experience.name} logo`}
                className={styles.logoImg}
                loading="eager"
                onError={(e) => {
                  (e.currentTarget as HTMLElement).style.display = 'none';
                }}
              />
            </div>
            <div className={styles.headerMeta}>
              <span className={styles.metaPill}>
                <Calendar size={13} /> {experience.period}
              </span>
              <span className={styles.metaPill}>
                <MapPin size={13} /> {experience.location}
              </span>
            </div>
          </div>

          <h1 className={styles.companyTitle}>{experience.name}</h1>
          <p className={styles.companySummary}>{experience.productContext}</p>
        </header>

        {/* Roles Breakdown */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <Layers size={22} className={styles.sectionIcon} />
            Roles & Responsibilities
          </h2>

          <div className={styles.rolesStack}>
            {experience.roles.map((role, idx) => (
              <div key={idx} className={styles.roleCard}>
                <div className={styles.roleHeader}>
                  <div>
                    <h3 className={styles.roleTitle}>{role.title}</h3>
                    {role.type && <span className={styles.roleTypeBadge}>{role.type}</span>}
                  </div>
                  <span className={styles.rolePeriod}>{role.period}</span>
                </div>

                <p className={styles.roleSummaryText}>{role.summary}</p>

                <div className={styles.highlightsBlock}>
                  <h4 className={styles.highlightsHeading}>Key Contributions & Responsibilities:</h4>
                  <ul className={styles.bulletList}>
                    {role.highlights.map((item, hIdx) => (
                      <li key={hIdx} className={styles.bulletItem}>
                        <CheckCircle2 size={16} className={styles.bulletCheck} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Major Architectural Contributions & Outcomes */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <TrendingUp size={22} className={styles.sectionIcon} />
            Major Technical Contributions & Outcomes
          </h2>

          <div className={styles.contributionsGrid}>
            {experience.keyContributions.map((item, idx) => (
              <div key={idx} className={styles.contributionCard}>
                <h3 className={styles.contribTitle}>{item.title}</h3>
                <p className={styles.contribDesc}>{item.description}</p>
                {item.impact && (
                  <div className={styles.impactBox}>
                    <span className={styles.impactLabel}>Measurable Outcome / Impact:</span>
                    <span className={styles.impactText}>{item.impact}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Technology Stack Details */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <Cpu size={22} className={styles.sectionIcon} />
            Technologies Used
          </h2>

          <div className={styles.techContainer}>
            {experience.technologies.map((tech) => (
              <span key={tech} className={styles.techTag}>
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Bottom Pagination */}
        <nav className={styles.paginationNav} aria-label="Company Experience Navigation">
          {prevCompany ? (
            <Link to={`/experience/${prevCompany.slug}`} className={styles.pageNavLink}>
              <ArrowLeft size={16} />
              <div>
                <span className={styles.navLabel}>Previous Experience</span>
                <span className={styles.navTitle}>{prevCompany.shortName}</span>
              </div>
            </Link>
          ) : <div />}

          {nextCompany ? (
            <Link to={`/experience/${nextCompany.slug}`} className={`${styles.pageNavLink} ${styles.navRight}`}>
              <div>
                <span className={styles.navLabel}>Next Experience</span>
                <span className={styles.navTitle}>{nextCompany.shortName}</span>
              </div>
              <ArrowRight size={16} />
            </Link>
          ) : <div />}
        </nav>
      </div>
    </div>
  );
};
