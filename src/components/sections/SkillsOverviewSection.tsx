import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Terminal, Cloud } from 'lucide-react';
import styles from './SkillsOverviewSection.module.css';

// User's exact core main stack (Top-focused, non-bubble architectural layout)
const mainStack = [
  {
    index: "01",
    name: "Node.js",
    category: "Server Runtime",
    role: "Backend & RESTful APIs"
  },
  {
    index: "02",
    name: "Angular",
    category: "Web Framework",
    role: "Enterprise Web Applications"
  },
  {
    index: "03",
    name: "React",
    category: "UI Architecture",
    role: "Component Interfaces & SPAs"
  },
  {
    index: "04",
    name: "MySQL",
    category: "Relational RDBMS",
    role: "Structured Data & Schemas"
  },
  {
    index: "05",
    name: "MongoDB",
    category: "Document NoSQL",
    role: "Flexible Schema & Aggregations"
  }
];

// Extended cloud services, streaming, databases & ecosystem for kinetic marquee
const cloudAndServices = [
  "Kafka.js",
  "AWS (Lambda, SQS, SNS, SSM, STS, EventBridge)",
  "Docker",
  "TypeScript",
  "PostgreSQL",
  "Redis",
  "pgvector",
  "RAG Systems",
  "Nest.js",
  "Express.js",
  "Microservices",
  "GraphQL",
  "gRPC",
  "Socket.io",
  "Python",
  "Vercel",
  "Git & GitHub",
  "Sentry",
  "Grafana"
];

export const SkillsOverviewSection: React.FC = () => {
  return (
    <section className={styles.section} aria-label="Core Engineering Stack">
      <div className={styles.container}>
        {/* Header Bar */}
        <div className={styles.headerRow}>
          <div className={styles.titleArea}>
            <span className={styles.pulseDot} aria-hidden="true" />
            <h2 className={styles.title}>Core Tech Stack</h2>
            <span className={styles.metaBadge}>Primary Architecture</span>
          </div>

          <Link to="/skills" className={styles.dirLink}>
            <span>Complete Architecture Matrix (35+)</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* 1. Architectural Spec Grid (Top-Focused: Tech names lead at the very top) */}
        <div className={styles.specMatrixWrapper}>
          <div className={styles.sectionSublabel}>
            <Terminal size={13} className={styles.sublabelIcon} />
            <span>Foundational Core Stack:</span>
          </div>

          <div className={styles.specGrid}>
            {mainStack.map((item) => (
              <div key={item.name} className={styles.specCell}>
                <div className={styles.cellTopLine} aria-hidden="true" />

                {/* Primary Top Focus: Technology Name & Index */}
                <div className={styles.cellTopRow}>
                  <h3 className={styles.cellName}>{item.name}</h3>
                  <span className={styles.cellIndex}>{item.index}</span>
                </div>

                {/* Context & Role directly below the Name */}
                <div className={styles.cellMetaRow}>
                  <span className={styles.cellCategory}>{item.category}</span>
                  <span className={styles.metaDot}>•</span>
                  <span className={styles.cellRole}>{item.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Kinetic Marquee: Cloud, infrastructure, streaming & tooling */}
        <div className={styles.marqueeSection}>
          <div className={styles.sectionSublabel}>
            <Cloud size={13} className={styles.sublabelIcon} />
            <span>Cloud, Event Streaming & Extended Tooling:</span>
          </div>

          <div className={styles.marqueeContainer}>
            <div className={styles.marqueeTrack}>
              {[...cloudAndServices, ...cloudAndServices].map((service, idx) => (
                <div key={`${service}-${idx}`} className={styles.techTag}>
                  <span className={styles.tagIndicator} aria-hidden="true" />
                  <span className={styles.tagText}>{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
