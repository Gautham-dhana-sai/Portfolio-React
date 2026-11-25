import React, { useState } from 'react';
import { Download, ExternalLink, AlertCircle } from 'lucide-react';
import { SEO } from '../../components/common/SEO';
import { Breadcrumbs } from '../../components/navigation/Breadcrumbs';
import { Button } from '../../components/common/Button';
import { personalInfo } from '../../data/personal';
import styles from './Resume.module.css';

export const ResumePage: React.FC = () => {
  const [loadError, setLoadError] = useState(false);

  return (
    <div className={styles.page}>
      <SEO
        title="Resume & Curriculum Vitae"
        description="Official professional resume of Pandiri Goutham Dhana Sai Reddy - Full Stack Developer."
      />

      <div className={styles.container}>
        <Breadcrumbs
          items={[
            { label: 'Home', path: '/' },
            { label: 'Resume' }
          ]}
        />

        <header className={styles.header}>
          <div className={styles.headerText}>
            <span className={styles.eyebrow}>Curriculum Vitae</span>
            <h1 className={styles.title}>Resume</h1>
            <p className={styles.tagline}>
              Download or inspect the official PDF resume highlighting 4 years of full-stack engineering, microservices, and system integrations.
            </p>
          </div>

          <div className={styles.headerActions}>
            <Button
              href={personalInfo.resumeUrl}
              download="Goutham_Pandiri_Resume.pdf"
              variant="primary"
              size="md"
              icon={<Download size={16} />}
            >
              Download PDF
            </Button>
            <Button
              href={personalInfo.resumeUrl}
              target="_blank"
              variant="outline"
              size="md"
              icon={<ExternalLink size={16} />}
            >
              Open in New Tab
            </Button>
          </div>
        </header>

        {/* Viewer or graceful placeholder */}
        <div className={styles.viewerContainer}>
          {!loadError ? (
            <div className={styles.iframeWrapper}>
              <iframe
                src={`${personalInfo.resumeUrl}#toolbar=0&navpanes=0`}
                title="Goutham Pandiri Resume Preview"
                className={styles.pdfFrame}
                onError={() => setLoadError(true)}
              />
            </div>
          ) : (
            <div className={styles.fallbackBox}>
              <AlertCircle size={40} className={styles.fallbackIcon} />
              <h3 className={styles.fallbackTitle}>Resume Preview Unavailable in Browser</h3>
              <p className={styles.fallbackDesc}>
                Your browser may not support inline PDF preview. You can download or view the file directly:
              </p>
              <div className={styles.fallbackActions}>
                <Button
                  href={personalInfo.resumeUrl}
                  download="Goutham_Pandiri_Resume.pdf"
                  variant="primary"
                  size="md"
                  icon={<Download size={16} />}
                >
                  Download PDF Resume
                </Button>
                <Button
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  variant="outline"
                  size="md"
                  icon={<ExternalLink size={16} />}
                >
                  Open Direct Link
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Executive summary block below viewer */}
        <div className={styles.summarySection}>
          <h2 className={styles.summaryTitle}>Quick Profile Summary</h2>
          <div className={styles.summaryGrid}>
            <div className={styles.summaryCol}>
              <h4 className={styles.colTitle}>Core Competencies</h4>
              <ul className={styles.summaryList}>
                <li>Full-stack TypeScript / JavaScript (Node.js, Express, Nest, React, Angular)</li>
                <li>Event-driven microservice synchronization with Kafka.js & Redis</li>
                <li>Database modeling & migrations (SQL, MongoDB, PostgreSQL, pgvector)</li>
                <li>AWS cloud compute (Lambda, EC2, S3, SQS, SNS, EventBridge)</li>
              </ul>
            </div>
            <div className={styles.summaryCol}>
              <h4 className={styles.colTitle}>Career Highlights</h4>
              <ul className={styles.summaryList}>
                <li>100% automated daily expense-to-payroll reimbursement integration with zero HR/FM intervention</li>
                <li>70% bulk upload processing acceleration handling 70k rec/min at Akrivia HCM</li>
                <li>100% data consistency Kafka.js synchronization layer across microservices</li>
                <li>Automated client provisioning control center across AWS, DNS, and CertBot</li>
                <li>REMPe medical prescription embedded integration for Limina healthcare</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
