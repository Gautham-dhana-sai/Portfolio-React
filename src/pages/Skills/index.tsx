import React, { useMemo } from 'react';
import { Sparkles, ShieldCheck } from 'lucide-react';
import { SEO } from '../../components/common/SEO';
import { Breadcrumbs } from '../../components/navigation/Breadcrumbs';
import { skillDomains } from '../../data/skills';
import { SkillDomainCard } from '../../components/cards/SkillDomainCard';
import styles from './Skills.module.css';

export const SkillsPage: React.FC = () => {
  // Compute total skills count
  const totalSkillCount = useMemo(() => {
    return skillDomains.reduce((acc, domain) => acc + domain.skills.length, 0);
  }, []);

  return (
    <div className={styles.page}>
      <SEO
        title="Technical Skills & Architecture"
        description="Comprehensive technical skills matrix of Pandiri Goutham Dhana Sai Reddy across full stack systems, event streaming, cloud infrastructure, and AI architectures."
      />

      <div className={styles.container}>
        <Breadcrumbs
          items={[
            { label: 'Home', path: '/' },
            { label: 'Skills' }
          ]}
        />

        {/* Section Header */}
        <header className={styles.header}>
          <div className={styles.eyebrowRow}>
            <span className={styles.eyebrow}>
              <span className={styles.eyebrowDot} />
              Technical Capabilities
            </span>
            <span className={styles.countBadge}>
              <Sparkles size={12} style={{ color: 'var(--color-signature-orange)' }} />
              {totalSkillCount} Production Technologies
            </span>
          </div>
          <h1 className={styles.title}>Skills & Architecture Stack</h1>
          <p className={styles.tagline}>
            Production-tested engineering competencies across full-stack applications, event streaming pipelines, cloud infrastructure, and AI systems.
          </p>
        </header>

        {/* Bento Grid Architecture Matrix */}
        <div className={styles.bentoGrid}>
          {skillDomains.map((domain, index) => {
            // Card 5 (ai-architecture) spans full width in 2-col desktop layout
            const isFullWidth = index === 4;

            return (
              <SkillDomainCard
                key={domain.id}
                domain={domain}
                isFullWidth={isFullWidth}
              />
            );
          })}
        </div>

        {/* Technical Quality Footnote */}
        <div className={styles.qualityFootnote}>
          <div className={styles.footnoteLeft}>
            <ShieldCheck size={20} className={styles.footnoteIcon} />
            <p className={styles.footnoteText}>
              <strong className={styles.footnoteHighlight}>Production Authenticity:</strong> All technologies listed are actively used in enterprise microservices, live client integrations, and production applications. No theoretical filler.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
