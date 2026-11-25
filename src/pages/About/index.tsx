import React from 'react';
import { ArrowRight, Server, Database, GitBranch, ShieldCheck, Terminal } from 'lucide-react';
import { SEO } from '../../components/common/SEO';
import { Button } from '../../components/common/Button';
import { Breadcrumbs } from '../../components/navigation/Breadcrumbs';
import { personalInfo } from '../../data/personal';
import styles from './About.module.css';

export const AboutPage: React.FC = () => {
  return (
    <div className={styles.page}>
      <SEO
        title="About Me"
        description="Professional background, engineering philosophy, and architectural approach of Pandiri Goutham Dhana Sai Reddy."
      />

      <div className={styles.container}>
        <Breadcrumbs
          items={[
            { label: 'Home', path: '/' },
            { label: 'About' }
          ]}
        />

        {/* Header */}
        <header className={styles.header}>
          <span className={styles.eyebrow}>Professional Background</span>
          <h1 className={styles.title}>About Me</h1>
          <p className={styles.tagline}>
            Full Stack Developer specializing in distributed web systems, enterprise microservices, and reliable cloud workflows.
          </p>
        </header>

        {/* Main narrative grid */}
        <div className={styles.narrativeGrid}>
          <div className={styles.mainContent}>
            <section className={styles.sectionBlock}>
              <h2 className={styles.sectionHeading}>Engineering Overview</h2>
              <p className={styles.bodyText}>
                I am a Full Stack Developer with 4 years of experience engineering scalable web applications within fast-paced agile environments. My background bridges frontend user interfaces, backend services, high-throughput message brokers, and automated infrastructure provisioning.
              </p>
              <p className={styles.bodyText}>
                Throughout my career at organizations such as Akrivia Automation, Inncircles Technologies, and Motivity Labs, I have specialized in building robust software solutions for complex business domains—ranging from human capital management and payroll to construction ERPs and serverless healthcare applications.
              </p>
            </section>

            <section className={styles.sectionBlock}>
              <h2 className={styles.sectionHeading}>Approach to Solving Technical Challenges</h2>
              <p className={styles.bodyText}>
                My engineering approach is grounded in deep technical curiosity, pragmatic architecture, and operational rigor. When faced with complex system requirements, I prioritize:
              </p>
              <ul className={styles.list}>
                <li>
                  <strong>Decoupled Microservice Boundaries:</strong> Designing services with clear domain ownership, idempotent operations, and asynchronous event streams (such as Kafka.js and EventBridge) to eliminate cascading failures.
                </li>
                <li>
                  <strong>Data Integrity & Modernization:</strong> Migrating legacy data systems cleanly—such as restructuring SQL workloads to MongoDB or indexing vector embeddings with pgvector—while ensuring 100% data consistency and zero regression.
                </li>
                <li>
                  <strong>Root-Cause Issue Elimination:</strong> Diagnosing recurring live incidents to implement permanent code and infrastructure fixes rather than superficial patches.
                </li>
                <li>
                  <strong>Automated Developer Ergonomics:</strong> Automating repetitive setup and deployment tasks through scripted control centers, CI/CD webhooks, and cloud infrastructure pipelines.
                </li>
              </ul>
            </section>

            <section className={styles.sectionBlock}>
              <h2 className={styles.sectionHeading}>Complex Business Systems & Integrations</h2>
              <p className={styles.bodyText}>
                Enterprise software lives and dies by its integrations. Over 4 years, I have engineered critical integrations spanning:
              </p>
              <div className={styles.integrationGrid}>
                <div className={styles.integrationCard}>
                  <Server size={20} className={styles.intIcon} />
                  <h4 className={styles.intTitle}>Financial & Banking</h4>
                  <p className={styles.intDesc}>
                    HDFC Bank reverse-debit automation for cheque bounces and Surepass asymmetric encryption for real-time CIBIL rating retrieval.
                  </p>
                </div>
                <div className={styles.integrationCard}>
                  <Database size={20} className={styles.intIcon} />
                  <h4 className={styles.intTitle}>Automated Payroll</h4>
                  <p className={styles.intDesc}>
                    Zero-touch expense-to-payroll reimbursements and automated monthly tax slab categorizations.
                  </p>
                </div>
                <div className={styles.integrationCard}>
                  <GitBranch size={20} className={styles.intIcon} />
                  <h4 className={styles.intTitle}>Cloud Infrastructure</h4>
                  <p className={styles.intDesc}>
                    Automated client onboarding orchestrating AWS EC2, GoDaddy DNS, and CertBot SSL certificate provisioning.
                  </p>
                </div>
                <div className={styles.integrationCard}>
                  <ShieldCheck size={20} className={styles.intIcon} />
                  <h4 className={styles.intTitle}>Healthcare Regulatory</h4>
                  <p className={styles.intDesc}>
                    Native embedded session integration with Spain's official REMPe medical prescription platform.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar Info */}
          <aside className={styles.sidebar}>
            <div className={styles.sidebarCard}>
              <h3 className={styles.sidebarTitle}>Key Quick Facts</h3>
              <dl className={styles.factList}>
                <div className={styles.factItem}>
                  <dt>Current Role</dt>
                  <dd>Full Stack Developer</dd>
                </div>
                <div className={styles.factItem}>
                  <dt>Experience</dt>
                  <dd>{personalInfo.experienceYears} Years (Agile Environments)</dd>
                </div>
                <div className={styles.factItem}>
                  <dt>Core Tech</dt>
                  <dd>Node.js, TypeScript, React, Angular, Kafka.js, AWS, MongoDB, SQL</dd>
                </div>
                <div className={styles.factItem}>
                  <dt>Location</dt>
                  <dd>{personalInfo.location}</dd>
                </div>
                <div className={styles.factItem}>
                  <dt>Education</dt>
                  <dd>B.Tech in Computer Science (8.6 CGPA)</dd>
                </div>
              </dl>

              <div className={styles.sidebarActions}>
                <Button to="/experience" variant="primary" size="md" icon={<ArrowRight size={15} />}>
                  Explore Experience
                </Button>
              </div>
            </div>

            <div className={`${styles.sidebarCard} ${styles.aiCard}`}>
              <div className={styles.aiHeader}>
                <Terminal size={18} className={styles.aiIcon} />
                <h4 className={styles.aiTitle}>AI-Assisted Workflow</h4>
              </div>
              <p className={styles.aiDesc}>
                I actively utilize tools like Claude, Cursor, and Antigravity to accelerate architectural validation, test generation, and development velocity without sacrificing engineering scrutiny.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};
