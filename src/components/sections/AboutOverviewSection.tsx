import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';
import styles from './AboutOverviewSection.module.css';

export const AboutOverviewSection: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.textCol}>
            <SectionHeading
              eyebrow="Professional Narrative"
              title="Translating Complex Needs into Resilient Software"
              subtitle="Engineering high-availability systems with pragmatic design and disciplined execution."
            />

            <p className={styles.paragraph}>
              As a Full Stack Developer with 4 years of experience, my work centers on bridging complex business logic with performant, maintainable software architectures. I focus on developing modular microservices, resilient data synchronization pipelines, and intuitive user experiences for enterprise platforms.
            </p>

            <p className={styles.paragraph}>
              From streamlining bulk data ingestion pipelines at Akrivia HCM to engineering client-side cloud provisioning at Inncircles, I approach engineering problems with an emphasis on system decoupling, operational stability, and developer ergonomics.
            </p>

            <div className={styles.actionRow}>
              <Button to="/about" variant="secondary" size="md" icon={<ArrowRight size={15} />}>
                Read Full Professional Background
              </Button>
            </div>
          </div>

          <div className={styles.pillarsCol}>
            <div className={styles.pillarCard}>
              <div className={styles.pillarHeader}>
                <CheckCircle2 size={18} className={styles.pillarIcon} />
                <h4 className={styles.pillarTitle}>Architecture Mindset</h4>
              </div>
              <p className={styles.pillarDesc}>
                Architecting decoupled microservices and event-driven patterns that scale predictably without operational fragility.
              </p>
            </div>

            <div className={styles.pillarCard}>
              <div className={styles.pillarHeader}>
                <CheckCircle2 size={18} className={styles.pillarIcon} />
                <h4 className={styles.pillarTitle}>System Integrations</h4>
              </div>
              <p className={styles.pillarDesc}>
                Seamlessly connecting third-party APIs, banking gateways, cloud infrastructure, and document engines.
              </p>
            </div>

            <div className={styles.pillarCard}>
              <div className={styles.pillarHeader}>
                <CheckCircle2 size={18} className={styles.pillarIcon} />
                <h4 className={styles.pillarTitle}>Production Reliability</h4>
              </div>
              <p className={styles.pillarDesc}>
                Diagnosing live incidents to deliver permanent architectural resolutions and data consistency guarantees.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
