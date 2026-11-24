import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, ExternalLink } from 'lucide-react';
import { experiences } from '../../data/experience';
import { SectionHeading } from '../common/SectionHeading';
import { AnimatedSection } from '../common/AnimatedSection';
import { BrandLogo } from '../common/BrandLogo';

export const ExperiencePreview: React.FC = () => {
  return (
    <section id="experience" className="py-24 lg:py-32 bg-white text-[#0A0A0A] border-b border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <AnimatedSection>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <SectionHeading
              label="Career Overview"
              title="Professional Engineering Experience"
              highlightedWord="Experience"
              subtitle="Production systems, microservice refactoring, and high-throughput pipelines across 3 engineering organizations."
              theme="light"
              className="mb-0"
            />
          </div>
        </AnimatedSection>

        {/* 3 Organizations Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {experiences.map((exp, idx) => {
            const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(exp.mapQuery)}`;

            return (
              <AnimatedSection key={exp.id} delay={idx * 0.12}>
                <div className="bg-[#F5F5F5] rounded-2xl border border-[#E5E5E5] p-7 hover:border-[#FF6B27] transition-all duration-300 flex flex-col justify-between h-full group hover:shadow-lg">
                  <div>
                    {/* Header: Logo, Name, Role */}
                    <div className="flex items-start gap-4 mb-5">
                      <BrandLogo name={exp.company} size="md" />
                      <div className="flex-grow min-w-0">
                        <h3 className="font-heading font-bold text-lg text-[#0A0A0A] leading-snug group-hover:text-[#FF6B27] transition-colors truncate">
                          {exp.company}
                        </h3>
                        <p className="font-mono text-xs text-[#FF6B27] font-semibold mt-0.5">
                          {exp.role}
                        </p>
                        
                        {/* Location Link with Map Icon */}
                        <a
                          href={mapsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[11px] font-mono text-[#737373] hover:text-[#0A0A0A] mt-1 transition-colors"
                          title={`View ${exp.company} on Google Maps`}
                        >
                          <MapPin className="w-3 h-3 text-[#FF6B27]" />
                          <span>{exp.location}</span>
                          <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                        </a>
                      </div>
                    </div>

                    {/* Summary */}
                    <p className="text-sm text-[#303030] leading-relaxed line-clamp-4">
                      {exp.shortSummary}
                    </p>

                    {/* Top verified metric badge if present */}
                    {exp.metrics[0] && (
                      <div className="mt-5 p-3 rounded-lg bg-white border border-[#E5E5E5] flex items-baseline justify-between">
                        <span className="font-heading font-black text-xl text-[#0A0A0A]">
                          {exp.metrics[0].value}
                        </span>
                        <span className="text-xs font-mono text-[#737373] text-right truncate ml-2">
                          {exp.metrics[0].label}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Footer Link */}
                  <div className="mt-8 pt-5 border-t border-[#E5E5E5] flex items-center justify-between">
                    <Link
                      to={`/experience/${exp.slug}`}
                      className="font-heading font-semibold text-xs text-[#0A0A0A] group-hover:text-[#FF6B27] inline-flex items-center gap-1.5 transition-colors"
                    >
                      <span>Explore Experience</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>

                    <span className="font-mono text-[11px] text-[#737373]">
                      Deep Dive
                    </span>
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
