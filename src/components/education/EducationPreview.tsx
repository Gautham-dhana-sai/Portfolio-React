import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, ExternalLink } from 'lucide-react';
import { educationList } from '../../data/education';
import { SectionHeading } from '../common/SectionHeading';
import { AnimatedSection } from '../common/AnimatedSection';
import { BrandLogo } from '../common/BrandLogo';

export const EducationPreview: React.FC = () => {
  return (
    <section id="education" className="py-24 lg:py-32 bg-white text-[#0A0A0A] border-b border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <AnimatedSection>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <SectionHeading
              label="Academic Background"
              title="Education & Foundations"
              highlightedWord="Education"
              subtitle="Formal engineering and computer science background with sustained academic distinction."
              theme="light"
              className="mb-0"
            />

            <div className="mt-6 md:mt-0">
              <Link
                to="/education"
                className="inline-flex items-center gap-2 text-sm font-heading font-semibold text-[#0A0A0A] hover:text-[#FF6B27] transition-colors"
              >
                <span>Explore Academic Timeline</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </AnimatedSection>

        {/* Compact Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {educationList.map((item, idx) => {
            const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.mapQuery)}`;

            return (
              <AnimatedSection key={item.id} delay={idx * 0.1}>
                <div className="bg-[#F5F5F5] p-7 rounded-2xl border border-[#E5E5E5] hover:border-[#FF6B27] transition-all duration-300 flex flex-col justify-between h-full group hover:shadow-md">
                  <div>
                    <div className="flex items-start justify-between mb-4">
                      <BrandLogo name={item.institution} type="education" size="md" />
                      <span className="font-mono text-xs font-bold px-2.5 py-1 rounded bg-white border border-[#E5E5E5] text-[#0A0A0A]">
                        {item.year}
                      </span>
                    </div>

                    <h3 className="font-heading font-bold text-lg text-[#0A0A0A] group-hover:text-[#FF6B27] transition-colors">
                      {item.qualification}
                    </h3>
                    
                    <p className="text-sm font-medium text-[#303030] mt-1">
                      {item.institution}
                    </p>

                    <div className="mt-4 flex items-center justify-between text-xs font-mono">
                      <span className="text-[#FF6B27] font-bold">
                        Score: {item.achievement}
                      </span>

                      <a
                        href={mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[#737373] hover:text-[#0A0A0A] transition-colors"
                        title="View on Google Maps"
                      >
                        <MapPin className="w-3 h-3 text-[#FF6B27]" />
                        <span>Visakhapatnam</span>
                        <ExternalLink className="w-2.5 h-2.5" />
                      </a>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#E5E5E5]">
                    <p className="text-xs text-[#737373] line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

      </div>
    </section>
  );
};
