import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { featuredSkills } from '../../data/skills';
import { SectionHeading } from '../common/SectionHeading';
import { AnimatedSection } from '../common/AnimatedSection';
import { TechnologyIcon } from '../common/TechnologyIcon';

export const SkillsPreview: React.FC = () => {
  return (
    <section id="skills" className="py-24 lg:py-32 bg-[#F5F5F5] text-[#0A0A0A] border-b border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <AnimatedSection>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <SectionHeading
              label="Technical Arsenal"
              title="Core Technologies & Frameworks"
              highlightedWord="Technologies"
              subtitle="A curated selection of languages, databases, cloud services, and tools deployed in production systems."
              theme="light"
              className="mb-0"
            />

            <div className="mt-6 md:mt-0">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-sm font-heading font-semibold text-[#0A0A0A] hover:text-[#FF6B27] transition-colors"
              >
                <span>Explore All Skills</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </AnimatedSection>

        {/* Compact Grid of Featured Technologies */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {featuredSkills.map((skill, idx) => (
            <AnimatedSection key={skill.name} delay={idx * 0.04}>
              <div className="bg-white rounded-xl border border-[#E5E5E5] p-5 hover:border-[#FF6B27] transition-all duration-200 group flex flex-col items-center text-center shadow-sm">
                <div className="w-12 h-12 rounded-lg bg-[#F5F5F5] border border-[#E5E5E5] flex items-center justify-center text-[#171717] group-hover:text-[#FF6B27] group-hover:bg-[#FFF5F0] transition-colors mb-3">
                  <TechnologyIcon name={skill.name} size={24} />
                </div>
                
                <h4 className="font-heading font-bold text-sm text-[#0A0A0A] group-hover:text-[#FF6B27] transition-colors truncate w-full">
                  {skill.name}
                </h4>
                
                <span className="font-mono text-[10px] text-[#737373] mt-1 block truncate w-full">
                  {skill.categoryLabel}
                </span>
              </div>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  );
};
