import React, { useState } from 'react';
import { Mail, Phone, Copy, Check, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../../data/portfolio';
import { SectionHeading } from '../common/SectionHeading';
import { AnimatedSection } from '../common/AnimatedSection';
import { Button } from '../common/Button';
import { SocialLinks } from '../common/SocialLinks';

export const ContactSection: React.FC = () => {
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const handleCopy = (type: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-richBlack text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <AnimatedSection>
          <SectionHeading
            label="Initiate Conversation"
            title="Let's Build Something High-Impact"
            highlightedWord="High-Impact"
            subtitle="Available for full stack engineering roles, distributed architecture consultation, and technical collaborations."
            theme="dark"
            align="center"
          />
        </AnimatedSection>

        {/* Primary Contact Channels */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          
          {/* Email Card */}
          <AnimatedSection delay={0.1}>
            <div className="bg-charcoal p-8 rounded-2xl border border-[#303030] hover:border-[#FF6B27] transition-all duration-300 flex flex-col justify-between h-full group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-richBlack border border-[#303030] flex items-center justify-center text-[#FF6B27] mb-6 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>

                <span className="font-mono text-xs uppercase tracking-wider text-[#737373] block mb-1">
                  Electronic Mail
                </span>
                
                <h3 className="font-heading font-bold text-xl text-white mb-2 break-all">
                  {portfolioData.contact.email}
                </h3>
                
                <p className="text-xs text-[#737373] leading-relaxed">
                  Direct communication for technical inquiries, interviews, and project discussions.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-[#303030] flex items-center gap-3">
                <Button
                  href={`mailto:${portfolioData.contact.email}`}
                  variant="primary"
                  size="sm"
                  className="flex-grow"
                  icon={<ArrowUpRight className="w-3.5 h-3.5" />}
                >
                  Send Email
                </Button>

                <button
                  onClick={() => handleCopy('email', portfolioData.contact.email)}
                  className="p-2 rounded-lg bg-richBlack border border-[#303030] text-[#737373] hover:text-white hover:border-[#FF6B27] transition-colors"
                  title="Copy email to clipboard"
                >
                  {copiedType === 'email' ? (
                    <Check className="w-4 h-4 text-[#FF6B27]" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>
          </AnimatedSection>

          {/* Phone Card */}
          <AnimatedSection delay={0.2}>
            <div className="bg-charcoal p-8 rounded-2xl border border-[#303030] hover:border-[#FF6B27] transition-all duration-300 flex flex-col justify-between h-full group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-richBlack border border-[#303030] flex items-center justify-center text-[#FF6B27] mb-6 group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>

                <span className="font-mono text-xs uppercase tracking-wider text-[#737373] block mb-1">
                  Direct Telephone
                </span>
                
                <h3 className="font-heading font-bold text-xl text-white mb-2">
                  {portfolioData.contact.phoneFormatted}
                </h3>
                
                <p className="text-xs text-[#737373] leading-relaxed">
                  Direct telephone contact for priority scheduling and time-sensitive coordination.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-[#303030] flex items-center gap-3">
                <Button
                  href={`tel:${portfolioData.contact.phone}`}
                  variant="secondary"
                  size="sm"
                  className="flex-grow"
                  icon={<Phone className="w-3.5 h-3.5 text-[#FF6B27]" />}
                >
                  Call Directly
                </Button>

                <button
                  onClick={() => handleCopy('phone', portfolioData.contact.phone)}
                  className="p-2 rounded-lg bg-richBlack border border-[#303030] text-[#737373] hover:text-white hover:border-[#FF6B27] transition-colors"
                  title="Copy phone to clipboard"
                >
                  {copiedType === 'phone' ? (
                    <Check className="w-4 h-4 text-[#FF6B27]" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>
          </AnimatedSection>

        </div>

        {/* Social Presence Hub */}
        <AnimatedSection delay={0.3}>
          <div className="mt-16 max-w-4xl mx-auto pt-12 border-t border-[#303030]">
            <div className="text-center mb-8">
              <span className="font-mono text-xs uppercase tracking-wider text-[#FF6B27] font-semibold">
                Professional Network & Social Presence
              </span>
              <h4 className="font-heading font-bold text-2xl text-white mt-1">
                Connected Across Platforms
              </h4>
            </div>

            <SocialLinks variant="cards" theme="dark" />
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
};
