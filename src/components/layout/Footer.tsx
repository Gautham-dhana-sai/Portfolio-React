import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, Mail, Phone } from 'lucide-react';
import { portfolioData } from '../../data/portfolio';
import { GithubIcon, LinkedinIcon } from '../common/BrandSocialIcon';

const CURRENT_YEAR = 2026;

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Akrivia Experience', to: '/experience/akrivia' },
    { label: 'Inncircles Experience', to: '/experience/inncircles' },
    { label: 'Motivity Labs Experience', to: '/experience/motivity' },
    { label: 'Open-Bot Case Study', to: '/projects/open-bot' },
    { label: 'Find-It-Here Case Study', to: '/projects/find-it-here' },
    { label: 'Education', to: '/education' },
    { label: 'Resume', to: '/resume' },
  ];

  return (
    <footer className="bg-richBlack border-t border-[#303030] text-[#737373] text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Identity & Short Bio */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-charcoal border border-[#303030] flex items-center justify-center font-heading font-black text-white">
                <span>P</span>
                <span className="text-[#FF6B27]">G</span>
              </div>
              <div>
                <span className="font-heading font-bold text-white tracking-tight block">
                  {portfolioData.name}
                </span>
                <span className="font-mono text-xs text-[#FF6B27]">
                  {portfolioData.designation} — 4 Years Experience
                </span>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-[#737373] max-w-md">
              Building scalable web applications, microservices, and AI-powered workflows with clean architectural discipline.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://github.com/Gautham-dhana-sai"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-charcoal border border-[#303030] text-[#737373] hover:text-white hover:border-[#FF6B27] transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/goutham-pandiri-8b89021b1/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-charcoal border border-[#303030] text-[#737373] hover:text-white hover:border-[#FF6B27] transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${portfolioData.contact.email}`}
                className="p-2 rounded-lg bg-charcoal border border-[#303030] text-[#737373] hover:text-white hover:border-[#FF6B27] transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={`tel:${portfolioData.contact.phone}`}
                className="p-2 rounded-lg bg-charcoal border border-[#303030] text-[#737373] hover:text-white hover:border-[#FF6B27] transition-colors"
                aria-label="Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Deep-Dive Links */}
          <div>
            <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Explore Portfolio
            </h4>
            <ul className="space-y-2.5">
              {navLinks.slice(0, 5).map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="hover:text-[#FF6B27] transition-colors inline-block text-xs"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Projects & Details
            </h4>
            <ul className="space-y-2.5">
              {navLinks.slice(5).map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="hover:text-[#FF6B27] transition-colors inline-block text-xs"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-12 pt-8 border-t border-[#303030] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <p className="text-[#737373]">
            © {CURRENT_YEAR} Pandiri Goutham Dhana Sai Reddy. Crafted with Black, White & Orange design system.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-[#737373] hover:text-white hover:text-[#FF6B27] transition-colors p-1"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#FF6B27]" />
          </button>
        </div>
      </div>
    </footer>
  );
};
