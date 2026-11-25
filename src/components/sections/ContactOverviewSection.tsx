import React from 'react';
import { Mail, Phone, Github, Linkedin, MapPin, Instagram } from 'lucide-react';
import { LeetCodeIcon } from '../common/Icons';
import { personalInfo } from '../../data/personal';
import { activeSocialLinks } from '../../data/socials';
import { SectionHeading } from '../common/SectionHeading';
import styles from './ContactOverviewSection.module.css';

const iconLookup: Record<string, React.ReactNode> = {
  Github: <Github size={20} />,
  Linkedin: <Linkedin size={20} />,
  LeetCode: <LeetCodeIcon size={20} />,
  Instagram: <Instagram size={20} />,
  Mail: <Mail size={20} />,
  Phone: <Phone size={20} />
};

export const ContactOverviewSection: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's Connect"
          subtitle="Reach out directly for engineering roles, technical collaboration, or architecture inquiries."
          actionText="Full Contact & Channels"
          actionLink="/contact"
        />

        <div className={styles.grid}>
          {/* Email card */}
          <a href={`mailto:${personalInfo.email}`} className={styles.contactCard}>
            <div className={styles.iconWrap}>
              <Mail size={22} />
            </div>
            <div className={styles.cardContent}>
              <span className={styles.cardLabel}>Direct Email</span>
              <span className={styles.cardValue}>{personalInfo.email}</span>
            </div>
          </a>

          {/* Phone card */}
          <a href={`tel:${personalInfo.phone.replace(/[^0-9]/g, '')}`} className={styles.contactCard}>
            <div className={styles.iconWrap}>
              <Phone size={22} />
            </div>
            <div className={styles.cardContent}>
              <span className={styles.cardLabel}>Direct Phone</span>
              <span className={styles.cardValue}>{personalInfo.phone}</span>
            </div>
          </a>

          {/* Location card */}
          <div className={styles.contactCard}>
            <div className={styles.iconWrap}>
              <MapPin size={22} />
            </div>
            <div className={styles.cardContent}>
              <span className={styles.cardLabel}>Location</span>
              <span className={styles.cardValue}>{personalInfo.location}</span>
            </div>
          </div>
        </div>

        {/* Dynamic Social Grid */}
        <div className={styles.socialBar}>
          <span className={styles.socialHeading}>Verified Platforms:</span>
          <div className={styles.socialList}>
            {activeSocialLinks.map((item) => (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialChip}
              >
                {iconLookup[item.iconName] || <Github size={16} />}
                <span>{item.name}</span>
                <span className={styles.handle}>({item.handle})</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
