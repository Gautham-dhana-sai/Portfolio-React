import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, ArrowUpRight, Github, Linkedin, Instagram } from 'lucide-react';
import { LeetCodeIcon } from '../../components/common/Icons';
import { SEO } from '../../components/common/SEO';
import { Breadcrumbs } from '../../components/navigation/Breadcrumbs';
import { Button } from '../../components/common/Button';
import { personalInfo } from '../../data/personal';
import { activeSocialLinks } from '../../data/socials';
import styles from './Contact.module.css';

export const ContactPage: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Generate mailto link
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      formData.subject || `Inquiry from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
    setFormSubmitted(true);
  };

  return (
    <div className={styles.page}>
      <SEO
        title="Contact & Channels"
        description="Connect with Pandiri Goutham Dhana Sai Reddy for full-time engineering roles, software consulting, and microservice architecture."
      />

      <div className={styles.container}>
        <Breadcrumbs
          items={[
            { label: 'Home', path: '/' },
            { label: 'Contact' }
          ]}
        />

        <header className={styles.header}>
          <span className={styles.eyebrow}>Direct Inquiry</span>
          <h1 className={styles.title}>Get In Touch</h1>
          <p className={styles.tagline}>
            Available for full-time engineering opportunities, microservice architecture, and technical discussions.
          </p>
        </header>

        <div className={styles.grid}>
          {/* Left Column: Direct Contact & Verified Channels */}
          <div className={styles.contactDetails}>
            <div className={styles.directCards}>
              {/* Email Card with overflow-wrap: anywhere */}
              <a href={`mailto:${personalInfo.email}`} className={styles.card}>
                <div className={styles.iconWrap}>
                  <Mail size={22} />
                </div>
                <div className={styles.cardInfo}>
                  <span className={styles.cardLabel}>Direct Email</span>
                  <span className={styles.cardEmailText}>{personalInfo.email}</span>
                </div>
              </a>

              {/* Phone Card */}
              <a href={`tel:${personalInfo.phone.replace(/[^0-9]/g, '')}`} className={styles.card}>
                <div className={styles.iconWrap}>
                  <Phone size={22} />
                </div>
                <div className={styles.cardInfo}>
                  <span className={styles.cardLabel}>Phone Number</span>
                  <span className={styles.cardValue}>{personalInfo.phone}</span>
                </div>
              </a>

              {/* Location Card */}
              <div className={styles.card}>
                <div className={styles.iconWrap}>
                  <MapPin size={22} />
                </div>
                <div className={styles.cardInfo}>
                  <span className={styles.cardLabel}>Primary Location</span>
                  <span className={styles.cardValue}>{personalInfo.location}</span>
                </div>
              </div>
            </div>

            {/* Verified Platforms */}
            <div className={styles.socialSection}>
              <h3 className={styles.socialHeading}>Online Profiles & Code Repositories</h3>
              <div className={styles.socialGrid}>
                {activeSocialLinks.map((item) => (
                  <a
                    key={item.id}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialItem}
                  >
                    <div className={styles.socialItemLeft}>
                      <span className={styles.platformIcon}>
                        {item.id === 'github' && <Github size={18} />}
                        {item.id === 'linkedin' && <Linkedin size={18} />}
                        {item.id === 'leetcode' && <LeetCodeIcon size={18} />}
                        {item.id === 'instagram' && <Instagram size={18} />}
                      </span>
                      <div>
                        <span className={styles.platformName}>{item.name}</span>
                        <span className={styles.platformHandle}>{item.handle}</span>
                      </div>
                    </div>
                    <ArrowUpRight size={15} className={styles.arrowIcon} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Direct Message Form */}
          <div className={styles.formContainer}>
            <div className={styles.formCard}>
              <h3 className={styles.formTitle}>Send a Direct Message</h3>
              <p className={styles.formSub}>
                Fill out the form below to initiate an email draft directly to my inbox.
              </p>

              {formSubmitted ? (
                <div className={styles.successMessage}>
                  <CheckCircle2 size={32} className={styles.successIcon} />
                  <h4 className={styles.successTitle}>Draft Initialized</h4>
                  <p className={styles.successText}>
                    Your default email client has been opened with your message ready to send.
                  </p>
                  <Button
                    onClick={() => setFormSubmitted(false)}
                    variant="outline"
                    size="sm"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className={styles.form}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name" className={styles.label}>Full Name</label>
                    <input
                      type="text"
                      id="name"
                      required
                      placeholder="Your name"
                      className={styles.input}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.label}>Email Address</label>
                    <input
                      type="email"
                      id="email"
                      required
                      placeholder="your.email@example.com"
                      className={styles.input}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="subject" className={styles.label}>Subject</label>
                    <input
                      type="text"
                      id="subject"
                      required
                      placeholder="Engineering role / Architecture inquiry"
                      className={styles.input}
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="message" className={styles.label}>Message</label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      placeholder="Write your message here..."
                      className={styles.textarea}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    icon={<Send size={15} />}
                  >
                    Send Message via Email
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
