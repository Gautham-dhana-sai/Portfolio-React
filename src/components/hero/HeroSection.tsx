import React from 'react';
import { ArrowDown, Download, Mail } from 'lucide-react';
import { portfolioData } from '../../data/portfolio';
import { Button } from '../common/Button';
import { ProfileImage } from './ProfileImage';
import { motion } from 'framer-motion';
import { GithubIcon, LinkedinIcon } from '../common/BrandSocialIcon';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 lg:py-24 bg-richBlack bg-grid-pattern overflow-hidden">
      {/* Subtle radial vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-richBlack/50 to-richBlack pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top Badge: Experience & Designation */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-charcoal border border-[#303030] text-xs font-mono"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF6B27] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF6B27]" />
              </span>
              <span className="text-white font-medium">{portfolioData.designation}</span>
              <span className="text-[#303030]">•</span>
              <span className="text-[#FF6B27]">{portfolioData.experienceYears} of Experience</span>
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-pureWhite tracking-tight leading-[1.08]">
                {portfolioData.name}
              </h1>
            </motion.div>

            {/* Headline & Supporting Description */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="space-y-3"
            >
              <p className="font-heading font-semibold text-xl sm:text-2xl text-[#E5E5E5] leading-snug">
                "{portfolioData.headline}"
              </p>
              <p className="font-mono text-sm sm:text-base text-[#FF6B27]">
                {portfolioData.supportingDescription}
              </p>
            </motion.div>

            {/* Short Professional Introduction */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="text-[#737373] text-base leading-relaxed max-w-2xl"
            >
              {portfolioData.aboutPreview}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4"
            >
              <Button
                variant="primary"
                size="md"
                href="#projects"
                onClick={(e) => {
                  e?.preventDefault();
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                icon={<ArrowDown className="w-4 h-4" />}
              >
                Explore My Work
              </Button>

              <Button
                variant="secondary"
                size="md"
                to="/resume"
                icon={<Download className="w-4 h-4 text-[#FF6B27]" />}
              >
                Download Resume
              </Button>

              <Button
                variant="outline"
                size="md"
                href="#contact"
                onClick={(e) => {
                  e?.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                icon={<Mail className="w-4 h-4" />}
              >
                Contact
              </Button>
            </motion.div>

            {/* Social Links & Technical Summary */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="pt-4 flex items-center gap-4 text-xs font-mono text-[#737373]"
            >
              <span className="text-[#303030]">CONNECT /</span>
              <a
                href="https://github.com/Gautham-dhana-sai"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-white hover:text-[#FF6B27] transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <span className="text-[#303030]">•</span>
              <a
                href="https://www.linkedin.com/in/goutham-pandiri-8b89021b1/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-white hover:text-[#FF6B27] transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            </motion.div>

          </div>

          {/* Right Column: Profile Image Placeholder / Frame (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <ProfileImage />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
