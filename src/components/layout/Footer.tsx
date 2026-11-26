import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Phone, Instagram, MapPin } from 'lucide-react';
import { personalInfo } from '../../data/personal';
import { LeetCodeIcon } from '../common/Icons';
import styles from './Footer.module.css';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Compact Main Row: Identity & Socials */}
        <div className={styles.mainRow}>
          <div className={styles.identityBlock}>
            <div className={styles.brandTitle}>{personalInfo.name}</div>
            <div className={styles.metaRow}>
              <span className={styles.roleTitle}>{personalInfo.role}</span>
              <span className={styles.dotSeparator} aria-hidden="true">•</span>
              <span className={styles.locationText}>
                <MapPin size={13} className={styles.locationIcon} />
                {personalInfo.location}
              </span>
            </div>
          </div>

          <div className={styles.socialRow}>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
              aria-label="GitHub"
              title="GitHub"
            >
              <Github size={17} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <Linkedin size={17} />
            </a>
            <a
              href={personalInfo.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
              aria-label="LeetCode"
              title="LeetCode"
            >
              <LeetCodeIcon size={17} />
            </a>
            <a
              href={personalInfo.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
              aria-label="Instagram"
              title="Instagram"
            >
              <Instagram size={17} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className={styles.socialIcon}
              aria-label="Email"
              title={personalInfo.email}
            >
              <Mail size={17} />
            </a>
            <a
              href={`tel:${personalInfo.phone.replace(/[^0-9]/g, '')}`}
              className={styles.socialIcon}
              aria-label="Phone"
              title={personalInfo.phone}
            >
              <Phone size={17} />
            </a>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Inline Nav */}
        <div className={styles.bottomBar}>
          <div className={styles.copyright}>
            © {currentYear} {personalInfo.name}. All rights reserved.
          </div>

          <nav className={styles.inlineNav} aria-label="Footer Navigation">
            <Link to="/about">About</Link>
            <Link to="/experience">Experience</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/skills">Skills</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};
