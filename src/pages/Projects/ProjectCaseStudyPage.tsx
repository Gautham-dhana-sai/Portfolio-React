import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  ExternalLink,
  ArrowRight,
  Cpu,
  CheckCircle2,
  AlertTriangle,
  Workflow
} from 'lucide-react';
import { projects, getProjectBySlug } from '../../data/projects';
import { Breadcrumb } from '../../components/layout/Breadcrumb';
import { TechnologyIcon } from '../../components/common/TechnologyIcon';
import { GithubIcon } from '../../components/common/BrandSocialIcon';
import { Button } from '../../components/common/Button';
import { AnimatedSection } from '../../components/common/AnimatedSection';

export const ProjectCaseStudyPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = getProjectBySlug(slug || '');

  useEffect(() => {
    if (project) {
      document.title = `${project.name} Case Study — Engineering & Architecture`;
      window.scrollTo(0, 0);
    }
  }, [project, slug]);

  if (!project) {
    return <Navigate to="/projects/open-bot" replace />;
  }

  // Cross-link to other project
  const otherProject = projects.find(p => p.slug !== project.slug);

  return (
    <div className="pt-24 pb-24 bg-richBlack text-white">
      {/* Header & Meta Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 border-b border-[#303030]">
        <Breadcrumb
          items={[
            { label: 'Projects', to: '/projects/open-bot' },
            { label: project.name }
          ]}
        />

        <div className="mt-8 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wider uppercase bg-charcoal border border-[#303030] text-[#FF6B27]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B27]" />
              {project.category}
            </div>

            <h1 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl text-pureWhite tracking-tight">
              {project.name}
            </h1>

            <p className="font-heading text-lg sm:text-xl text-[#E5E5E5] leading-relaxed">
              {project.tagline}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Button
              href={project.githubUrl}
              target="_blank"
              variant="secondary"
              size="md"
              icon={<GithubIcon className="w-4 h-4" />}
            >
              GitHub Repository
            </Button>
            <Button
              href={project.liveUrl}
              target="_blank"
              variant="primary"
              size="md"
              icon={<ExternalLink className="w-4 h-4" />}
            >
              Live Application
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-16">
        
        {/* Problem Statement & Solution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatedSection>
            <div className="bg-charcoal p-8 rounded-2xl border border-[#303030] h-full flex flex-col justify-between space-y-4">
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-[#FF6B27] font-semibold block mb-1">
                  01. The Problem
                </span>
                <h2 className="font-heading font-bold text-2xl text-white mb-3">
                  Problem Statement & Context
                </h2>
                <p className="text-sm sm:text-base text-[#737373] leading-relaxed">
                  {project.problemStatement}
                </p>
              </div>
              <div className="pt-4 border-t border-[#303030] flex items-center gap-2 text-xs font-mono text-[#737373]">
                <AlertTriangle className="w-4 h-4 text-[#FF6B27]" />
                <span>Addressed core discovery and domain grounding bottlenecks</span>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="bg-charcoal p-8 rounded-2xl border border-[#303030] h-full flex flex-col justify-between space-y-4">
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-[#FF6B27] font-semibold block mb-1">
                  02. The Solution
                </span>
                <h2 className="font-heading font-bold text-2xl text-white mb-3">
                  Architectural Solution & Concept
                </h2>
                <p className="text-sm sm:text-base text-[#E5E5E5] leading-relaxed">
                  {project.solutionSummary}
                </p>
              </div>
              <div className="pt-4 border-t border-[#303030] flex items-center gap-2 text-xs font-mono text-[#737373]">
                <CheckCircle2 className="w-4 h-4 text-[#FF6B27]" />
                <span>Live production deployment verified on Vercel</span>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Sophisticated Architecture Illustration */}
        <AnimatedSection>
          <div className="bg-charcoal rounded-2xl border border-[#303030] p-8 sm:p-10 space-y-8 shadow-2xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#303030] pb-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#FF6B27] uppercase font-semibold">
                  <Workflow className="w-4 h-4" />
                  <span>Technical Blueprint</span>
                </div>
                <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white mt-1">
                  System Architecture & Data Flow
                </h3>
              </div>

              <div className="flex items-center gap-2 font-mono text-xs text-[#737373]">
                <span className="w-2 h-2 rounded-full bg-[#FF6B27] animate-pulse" />
                <span>Distributed Pipeline</span>
              </div>
            </div>

            {/* Architecture Layers Flow */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {project.architectureLayers.map((layer, lIdx) => (
                <div
                  key={lIdx}
                  className="bg-richBlack p-6 rounded-xl border border-[#303030] hover:border-[#FF6B27] transition-all flex flex-col justify-between relative group"
                >
                  <div className="space-y-3">
                    <span className="text-[10px] font-mono text-[#737373] uppercase tracking-wider font-semibold">
                      Layer 0{lIdx + 1}
                    </span>
                    <h4 className="font-heading font-bold text-lg text-white group-hover:text-[#FF6B27] transition-colors">
                      {layer.layer}
                    </h4>
                    <p className="text-xs text-[#737373] leading-relaxed">
                      {layer.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#303030] space-y-1.5">
                    {layer.components.map((comp, cIdx) => (
                      <span
                        key={cIdx}
                        className="inline-block text-[11px] font-mono bg-[#171717] text-[#E5E5E5] px-2 py-0.5 rounded border border-[#303030] mr-1 mb-1"
                      >
                        {comp}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Feature Matrix */}
        <AnimatedSection>
          <div className="bg-[#0F0F0F] p-8 sm:p-10 rounded-2xl border border-[#303030] space-y-6">
            <h3 className="font-heading font-bold text-2xl text-white">
              Implemented Features & Capabilities
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {project.features.map((feature, fIdx) => (
                <div
                  key={fIdx}
                  className="bg-charcoal p-4 rounded-xl border border-[#303030] flex items-start gap-3"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#FF6B27] shrink-0 mt-0.5" />
                  <span className="text-xs font-mono text-[#E5E5E5] leading-relaxed">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Detailed Case Study Sections */}
        <div className="space-y-8">
          {project.sections.map((section, sIdx) => (
            <AnimatedSection key={sIdx} delay={sIdx * 0.1}>
              <div className="bg-charcoal p-8 sm:p-10 rounded-2xl border border-[#303030] space-y-6">
                <div className="border-b border-[#303030] pb-4">
                  <span className="font-mono text-xs uppercase tracking-wider text-[#FF6B27] font-semibold">
                    {section.title}
                  </span>
                  <h4 className="font-heading font-bold text-2xl text-white mt-1">
                    {section.heading}
                  </h4>
                </div>

                <div className="space-y-4 text-sm sm:text-base text-[#737373] leading-relaxed">
                  {section.content.map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                  ))}
                </div>

                {section.highlights && (
                  <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {section.highlights.map((hl, hIdx) => (
                      <div
                        key={hIdx}
                        className="bg-richBlack p-4 rounded-xl border border-[#303030] text-xs font-mono text-[#E5E5E5]"
                      >
                        <span className="text-[#FF6B27] mr-1.5">•</span>
                        {hl}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Engineering Considerations */}
        <AnimatedSection>
          <div className="bg-charcoal p-8 sm:p-10 rounded-2xl border border-[#303030] space-y-6">
            <h3 className="font-heading font-bold text-2xl text-white flex items-center gap-2">
              <Cpu className="w-5 h-5 text-[#FF6B27]" />
              Engineering Considerations & Technical Constraints
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.engineeringConsiderations.map((consideration, cIdx) => (
                <div
                  key={cIdx}
                  className="bg-richBlack p-5 rounded-xl border border-[#303030] space-y-2"
                >
                  <span className="font-mono text-xs text-[#FF6B27] font-bold">
                    [CONSIDERATION 0{cIdx + 1}]
                  </span>
                  <p className="text-xs sm:text-sm text-[#737373] leading-relaxed">
                    {consideration}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Full Technology Stack */}
        <AnimatedSection>
          <div className="bg-[#0F0F0F] p-8 rounded-2xl border border-[#303030] space-y-4">
            <h3 className="font-heading font-bold text-lg text-white">
              Technology Stack Used in {project.name}
            </h3>
            <div className="flex flex-wrap gap-2.5 pt-2">
              {project.technologies.map((tech) => (
                <div
                  key={tech}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-charcoal border border-[#303030] text-xs font-mono text-white hover:border-[#FF6B27] transition-colors"
                >
                  <TechnologyIcon name={tech} size={16} className="text-[#FF6B27]" />
                  <span>{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Switch to Other Project */}
        {otherProject && (
          <div className="pt-10 border-t border-[#303030] flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              to="/"
              className="text-xs font-mono text-[#737373] hover:text-white transition-colors"
            >
              ← Return to Home Overview
            </Link>

            <Link
              to={`/projects/${otherProject.slug}`}
              className="inline-flex items-center gap-2 text-xs font-heading font-semibold text-[#FF6B27] hover:underline"
            >
              <span>Explore Next Case Study: {otherProject.name}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}

      </div>
    </div>
  );
};
