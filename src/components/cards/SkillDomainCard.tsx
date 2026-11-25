import React from 'react';
import {
  Code2,
  Server,
  Database,
  Cloud,
  Cpu,
  Layers,
  Sparkles
} from 'lucide-react';
import { SkillDomain } from '../../data/skills';
import { useSpotlight } from '../../hooks/useSpotlight';
import styles from './SkillDomainCard.module.css';

interface SkillDomainCardProps {
  domain: SkillDomain;
  isFullWidth?: boolean;
  highlightedSkillSet?: Set<string>;
  hasActiveFilter?: boolean;
}

const domainIcons: Record<string, React.ReactNode> = {
  'frontend-languages': <Code2 size={22} />,
  'backend-microservices': <Server size={22} />,
  'databases-streaming': <Database size={22} />,
  'cloud-devops': <Cloud size={22} />,
  'ai-architecture': <Cpu size={22} />
};

export const SkillDomainCard: React.FC<SkillDomainCardProps> = ({
  domain,
  isFullWidth = false,
  highlightedSkillSet,
  hasActiveFilter = false,
}) => {
  const { elementRef, handleMouseMove, handleMouseLeave } = useSpotlight<HTMLDivElement>();

  return (
    <div
      ref={elementRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`${styles.domainCard} ${isFullWidth ? styles.fullWidth : ''}`}
    >
      <div className={styles.accentLine} aria-hidden="true" />

      {/* Header */}
      <div className={styles.cardHeader}>
        <div className={styles.titleArea}>
          <div className={styles.iconWrap} aria-hidden="true">
            {domainIcons[domain.id] || <Layers size={22} />}
          </div>
          <div className={styles.titleText}>
            <h3 className={styles.domainTitle}>{domain.title}</h3>
            <span className={styles.domainTag}>{domain.tag}</span>
          </div>
        </div>

        <div className={styles.headerBadges}>
          <span className={styles.countBadge}>
            <Sparkles size={11} style={{ display: 'inline', marginRight: '4px' }} />
            {domain.skills.length} Skills
          </span>
        </div>
      </div>

      {/* Skills Chip Cloud with Highlighting States */}
      <div className={styles.skillsCloud}>
        {domain.skills.map((skillName) => {
          const isCore = domain.coreSkills.includes(skillName);
          const isHighlighted = highlightedSkillSet?.has(skillName.toLowerCase());
          const isDimmed = hasActiveFilter && !isHighlighted;

          return (
            <div
              key={skillName}
              className={`
                ${styles.skillChip}
                ${isCore ? styles.coreChip : ''}
                ${isHighlighted ? styles.highlightedChip : ''}
                ${isDimmed ? styles.dimmedChip : ''}
              `}
              title={isCore ? `${skillName} (Core Production Competency)` : skillName}
            >
              <span className={styles.skillDot} aria-hidden="true" />
              <span>{skillName}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
