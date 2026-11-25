import React from 'react';
import { Layers, GitMerge, Database, Network, Cpu } from 'lucide-react';
import { HighlightCardData } from '../../data/highlights';
import { useSpotlight } from '../../hooks/useSpotlight';
import styles from './HighlightCard.module.css';

interface HighlightCardProps {
  data: HighlightCardData;
  index: number;
}

const iconMap: Record<string, React.ReactNode> = {
  Layers: <Layers size={22} />,
  GitMerge: <GitMerge size={22} />,
  Database: <Database size={22} />,
  Network: <Network size={22} />,
  Cpu: <Cpu size={22} />
};

export const HighlightCard: React.FC<HighlightCardProps> = ({ data, index }) => {
  const { elementRef, handleMouseMove, handleMouseLeave } = useSpotlight<HTMLDivElement>();

  return (
    <div
      ref={elementRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={styles.card}
    >
      <div className={styles.accentLine} aria-hidden="true" />

      <div className={styles.header}>
        <div className={styles.iconContainer} aria-hidden="true">
          {iconMap[data.iconName] || <Layers size={22} />}
        </div>
        <div className={styles.metaRow}>
          <span className={styles.domainTag}>{data.domainTag}</span>
          <span className={styles.indexNum}>0{index + 1}</span>
        </div>
      </div>

      <h3 className={styles.title}>{data.title}</h3>
      <p className={styles.statement}>{data.statement}</p>
    </div>
  );
};
