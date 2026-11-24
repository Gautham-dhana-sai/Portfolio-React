import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Terminal } from 'lucide-react';
import { projects } from '../../data/projects';
import { AnimatedSection } from '../common/AnimatedSection';
import { SectionHeading } from '../common/SectionHeading';
import { TechnologyIcon } from '../common/TechnologyIcon';
import { GithubIcon } from '../common/BrandSocialIcon';

export const ProjectPreview: React.FC = () => {
  return (
    <section id="projects" className="py-24 lg:py-32 bg-richBlack border-b border-[#303030]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <AnimatedSection>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <SectionHeading
              label="Selected Work"
              title="Featured Independent Projects"
              highlightedWord="Projects"
              subtitle="Production-grade full stack applications demonstrating RAG vector architectures and local marketplace systems."
              theme="dark"
              className="mb-0"
            />
          </div>
        </AnimatedSection>

        {/* Project Cards (Open-Bot & Find-It-Here) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project, idx) => (
            <AnimatedSection key={project.id} delay={idx * 0.15}>
              <div className="bg-charcoal rounded-2xl border border-[#303030] overflow-hidden group hover:border-[#FF6B27] transition-all duration-300 flex flex-col justify-between h-full shadow-2xl">
                
                {/* Visual Header / Mockup Banner */}
                <div className="relative p-6 sm:p-8 bg-gradient-to-br from-[#171717] to-[#0A0A0A] border-b border-[#303030] overflow-hidden">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-[#FF6B27]/5 rounded-full blur-3xl pointer-events-none" />
                  
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs font-semibold px-3 py-1 rounded-md bg-[#0A0A0A] border border-[#303030] text-[#FF6B27]">
                      {project.category}
                    </span>

                    <div className="flex items-center gap-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-[#0A0A0A] text-[#737373] hover:text-white hover:border-[#FF6B27] border border-[#303030] transition-colors"
                        title="GitHub Repository"
                        aria-label={`GitHub Repository for ${project.name}`}
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-[#0A0A0A] text-[#737373] hover:text-[#FF6B27] hover:border-[#FF6B27] border border-[#303030] transition-colors"
                        title="Live Deployment"
                        aria-label={`Live Demo for ${project.name}`}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  {/* Architecture Schematic Preview (CSS Abstract Mockup) */}
                  <div className="bg-[#0A0A0A] rounded-xl border border-[#303030] p-4 sm:p-5 font-mono text-xs space-y-3">
                    <div className="flex items-center justify-between border-b border-[#303030] pb-2 text-[#737373]">
                      <span className="flex items-center gap-1.5">
                        <Terminal className="w-3.5 h-3.5 text-[#FF6B27]" />
                        {project.slug}.architecture
                      </span>
                      <span className="text-[10px] text-[#FF6B27]">LIVE</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-[11px]">
                      {project.architectureLayers.slice(0, 2).map((layer, lIdx) => (
                        <div key={lIdx} className="bg-[#171717] p-2.5 rounded border border-[#303030]">
                          <span className="text-[#737373] block text-[10px] uppercase font-bold">
                            {layer.layer}
                          </span>
                          <span className="text-white font-medium truncate block mt-0.5">
                            {layer.components.slice(0, 2).join(' + ')}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="font-heading font-bold text-2xl text-pureWhite group-hover:text-[#FF6B27] transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-[#737373] text-sm leading-relaxed mt-2.5">
                      {project.description}
                    </p>

                    {/* Small Tech Indicators */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.technologies.slice(0, 5).map((tech) => (
                        <span
                          key={tech}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#0A0A0A] border border-[#303030] text-xs font-mono text-[#E5E5E5]"
                        >
                          <TechnologyIcon name={tech} size={14} className="text-[#FF6B27]" />
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Link to Dedicated Case Study */}
                  <div className="mt-8 pt-6 border-t border-[#303030] flex items-center justify-between">
                    <Link
                      to={`/projects/${project.slug}`}
                      className="font-heading font-semibold text-sm text-white group-hover:text-[#FF6B27] inline-flex items-center gap-2 transition-colors"
                    >
                      <span>Explore Case Study</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>

                    <span className="text-xs font-mono text-[#737373]">
                      Production Ready
                    </span>
                  </div>
                </div>

              </div>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  );
};
