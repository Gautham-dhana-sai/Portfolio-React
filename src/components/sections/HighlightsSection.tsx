import React from 'react';
import { highlightCards } from '../../data/highlights';
import { HighlightCard } from '../cards/HighlightCard';
import { SectionHeading } from '../common/SectionHeading';
import styles from './HighlightsSection.module.css';

export const HighlightsSection: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <SectionHeading
          eyebrow="Core Capabilities"
          title="Engineering Focus & Capabilities"
          subtitle="Key problem domains and architectural areas I specialize in across modern web platforms."
        />

        <div className={styles.grid}>
          {highlightCards.map((card, index) => (
            <HighlightCard key={card.id} data={card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
