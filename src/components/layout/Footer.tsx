import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Github, Linkedin, Mail, Phone, ChevronRight, Instagram } from 'lucide-react';
import { personalInfo } from '../../data/personal';
import { LeetCodeIcon } from '../common/Icons';
import styles from './Footer.module.css';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Top bar: Availability & Call to Action */}
        <div className={styles.topSection}>
          <div className={styles.statusBlock}>
            <span className={styles.statusPulse} aria-hidden="true" />
            <span className={styles.statusText}>
              Available for full-time engineering roles & system architecture
            </span>
          </div>
          <div className={styles.ctaBlock}>
            <Link to="/contact" className={styles.ctaButton}>
              <span>Start a Conversation</span>
              <ChevronRight size={16} />
            </Link>
          </div>
        </div>

        {/* Middle grid */}
        <div className={styles.grid}>
          {/* Identity col */}
          <div className={styles.identityCol}>
            <div className={styles.brandTitle}>
              {personalInfo.name}
            </div>
            <p className={styles.roleTitle}>{personalInfo.role}</p>
            <p className={styles.identityBio}>
              Architecting scalable web applications, robust microservices, and reliable automated workflows.
            </p>
            <div className={styles.socialRow}>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={personalInfo.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
                aria-label="LeetCode"
              >
                <LeetCodeIcon size={18} />
              </a>
              <a
                href={personalInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className={styles.socialIcon}
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
              <a
                href={`tel:${personalInfo.phone.replace(/[^0-9]/g, '')}`}
                className={styles.socialIcon}
                aria-label="Phone"
              >
                <Phone size={18} />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className={styles.linkCol}>
            <h4 className={styles.colHeading}>Explore</h4>
            <ul className={styles.colList}>
              <li><Link to="/about">About Me</Link></li>
              <li><Link to="/experience">Experience Timeline</Link></li>
              <li><Link to="/projects">Selected Projects</Link></li>
              <li><Link to="/skills">Skills & Stack</Link></li>
              <li><Link to="/education">Education</Link></li>
              <li><Link to="/resume">Resume / CV</Link></li>
            </ul>
          </div>

          {/* Companies Detailed */}
          <div className={styles.linkCol}>
            <h4 className={styles.colHeading}>Companies</h4>
            <ul className={styles.colList}>
              <li>
                <Link to="/experience/akrivia">
                  Akrivia HCM <ArrowUpRight size={12} className={styles.linkArrow} />
                </Link>
              </li>
              <li>
                <Link to="/experience/inncircles">
                  Inncircles Technologies <ArrowUpRight size={12} className={styles.linkArrow} />
                </Link>
              </li>
              <li>
                <Link to="/experience/motivity">
                  Motivity Labs <ArrowUpRight size={12} className={styles.linkArrow} />
                </Link>
              </li>
            </ul>

            <h4 className={`${styles.colHeading} ${styles.subHeadingMargin}`}>Projects</h4>
            <ul className={styles.colList}>
              <li>
                <Link to="/projects/find-it-here">
                  Find-It-Here (MVP) <ArrowUpRight size={12} className={styles.linkArrow} />
                </Link>
              </li>
              <li>
                <Link to="/projects/open-bot">
                  Open-Bot (RAG) <ArrowUpRight size={12} className={styles.linkArrow} />
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Contact */}
          <div className={styles.linkCol}>
            <h4 className={styles.colHeading}>Direct Contact</h4>
            <div className={styles.contactItem}>
              <span className={styles.contactLabel}>Email Address</span>
              <a href={`mailto:${personalInfo.email}`} className={styles.contactValue}>
                {personalInfo.email}
              </a>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactLabel}>Phone</span>
              <a href={`tel:${personalInfo.phone.replace(/[^0-9]/g, '')}`} className={styles.contactValue}>
                {personalInfo.phone}
              </a>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactLabel}>Location</span>
              <span className={styles.locationText}>{personalInfo.location}</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className={styles.bottomBar}>
          <div className={styles.copyright}>
            © {currentYear} {personalInfo.name}. All rights reserved.
          </div>
          <div className={styles.paletteNotice}>
            <span className={styles.colorIndicator} />
            Built with React, TypeScript & Strict Monochrome/Orange System
          </div>
        </div>
      </div>
    </footer>
  );
};
