import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  ExternalLink,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { educationList } from '../../data/education';
import { portfolioData } from '../../data/portfolio';
import { Breadcrumb } from '../../components/layout/Breadcrumb';
import { BrandLogo } from '../../components/common/BrandLogo';
import { AnimatedSection } from '../../components/common/AnimatedSection';

export const EducationPage: React.FC = () => {
  useEffect(() => {
    document.title = `Academic Background & Education — ${portfolioData.name}`;
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-24 bg-richBlack text-white">
      {/* Header & Meta */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 border-b border-[#303030]">
        <Breadcrumb items={[{ label: 'Academic Background' }]} />

        <div className="mt-8 max-w-4xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wider uppercase bg-charcoal border border-[#303030] text-[#FF6B27]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B27]" />
            Formal Qualifications & Distinction
          </div>

          <h1 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl text-pureWhite tracking-tight">
            Academic Background & Foundations
          </h1>

          <p className="font-mono text-sm sm:text-base text-[#737373]">
            Rigorous engineering discipline spanning Computer Science, Mechanical Engineering, and Mathematical distinction.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        {/* Detailed Timeline List */}
        <div className="relative border-l-2 border-[#303030] ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {educationList.map((item, idx) => {
            const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.mapQuery)}`;

            return (
              <AnimatedSection key={item.id} delay={idx * 0.12}>
                <div className="relative group">
                  {/* Timeline Node */}
                  <div className="absolute -left-[35px] sm:-left-[51px] top-1.5 w-6 h-6 rounded-full bg-richBlack border-2 border-[#FF6B27] flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-[#FF6B27]" />
                  </div>

                  <div className="bg-charcoal p-8 sm:p-10 rounded-2xl border border-[#303030] hover:border-[#FF6B27] transition-all space-y-6 shadow-xl">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-[#303030] pb-6">
                      <div className="flex items-start gap-4">
                        <BrandLogo name={item.institution} type="education" size="lg" />
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-mono text-xs px-2.5 py-0.5 rounded bg-richBlack border border-[#303030] text-[#FF6B27]">
                              {item.year}
                            </span>
                            {item.fieldOfStudy && (
                              <span className="font-mono text-xs text-[#737373] hidden sm:inline">
                                • {item.fieldOfStudy}
                              </span>
                            )}
                          </div>

                          <h2 className="font-heading font-bold text-2xl text-pureWhite group-hover:text-[#FF6B27] transition-colors">
                            {item.qualification}
                          </h2>
                          
                          <p className="font-heading font-medium text-base text-[#E5E5E5] mt-0.5">
                            {item.institution}
                          </p>

                          <a
                            href={mapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-mono text-[#737373] hover:text-white transition-colors mt-2"
                            title={`View ${item.institution} on Google Maps`}
                          >
                            <MapPin className="w-3.5 h-3.5 text-[#FF6B27]" />
                            <span>{item.location}</span>
                            <ExternalLink className="w-3 h-3 opacity-60" />
                          </a>
                        </div>
                      </div>

                      {/* Achievement Pill */}
                      <div className="sm:text-right shrink-0 bg-richBlack px-4 py-3 rounded-xl border border-[#303030]">
                        <span className="font-mono text-[10px] text-[#737373] block uppercase tracking-wider">
                          {item.achievementLabel}
                        </span>
                        <span className="font-heading font-black text-2xl text-[#FF6B27]">
                          {item.achievement}
                        </span>
                      </div>
                    </div>

                    {/* Detailed narrative */}
                    <p className="text-sm sm:text-base text-[#737373] leading-relaxed">
                      {item.description}
                    </p>

                    {/* Key Highlights */}
                    <div className="space-y-2 pt-2">
                      <span className="font-mono text-xs uppercase tracking-wider text-white font-semibold block mb-2">
                        Key Academic Milestones
                      </span>
                      {item.keyHighlights.map((hl, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#E5E5E5]">
                          <CheckCircle2 className="w-4 h-4 text-[#FF6B27] shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="pt-12 border-t border-[#303030] flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            to="/"
            className="text-xs font-mono text-[#737373] hover:text-white transition-colors"
          >
            ← Return to Home Overview
          </Link>

          <Link
            to="/resume"
            className="inline-flex items-center gap-2 text-xs font-heading font-semibold text-[#FF6B27] hover:underline"
          >
            <span>View & Download Verified Resume</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
