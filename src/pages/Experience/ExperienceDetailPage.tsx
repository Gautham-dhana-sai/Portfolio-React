import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  MapPin,
  ExternalLink,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Calendar,
  TrendingUp,
  Building2
} from 'lucide-react';
import { experiences, getExperienceBySlug } from '../../data/experience';
import { Breadcrumb } from '../../components/layout/Breadcrumb';
import { BrandLogo } from '../../components/common/BrandLogo';
import { TechnologyIcon } from '../../components/common/TechnologyIcon';
import { Button } from '../../components/common/Button';
import { AnimatedSection } from '../../components/common/AnimatedSection';

export const ExperienceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const experience = getExperienceBySlug(slug || '');

  useEffect(() => {
    if (experience) {
      document.title = `${experience.role} at ${experience.company} — Engineering Deep Dive`;
      window.scrollTo(0, 0);
    }
  }, [experience, slug]);

  if (!experience) {
    return <Navigate to="/experience/akrivia" replace />;
  }

  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(experience.mapQuery)}`;

  // Find next and previous experience for clean inter-linking
  const currentIndex = experiences.findIndex(e => e.slug === experience.slug);
  const prevExp = experiences[currentIndex - 1];
  const nextExp = experiences[currentIndex + 1];

  return (
    <div className="pt-24 pb-24 bg-richBlack text-white">
      {/* Header & Meta Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 border-b border-[#303030]">
        <Breadcrumb
          items={[
            { label: 'Experience', to: '/experience/akrivia' },
            { label: experience.company }
          ]}
        />

        <div className="mt-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="flex items-start gap-5">
            <BrandLogo name={experience.company} size="lg" className="mt-1" />
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full text-xs font-mono font-medium tracking-wider uppercase bg-charcoal border border-[#303030] text-[#FF6B27] mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B27]" />
                {experience.period}
              </div>

              <h1 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-pureWhite tracking-tight">
                {experience.company}
              </h1>

              <div className="flex flex-wrap items-center gap-3 mt-2 font-mono text-sm">
                <span className="text-[#FF6B27] font-semibold">
                  {experience.role}
                </span>
                <span className="text-[#303030]">•</span>
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#737373] hover:text-white transition-colors"
                  title="Open location in Google Maps"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#FF6B27]" />
                  <span>{experience.location}</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
                {experience.parentCompany && (
                  <>
                    <span className="text-[#303030]">•</span>
                    <span className="text-[#737373]">Parent: {experience.parentCompany}</span>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Button
              href={mapsUrl}
              target="_blank"
              variant="dark"
              size="sm"
              icon={<MapPin className="w-3.5 h-3.5 text-[#FF6B27]" />}
            >
              Google Maps
            </Button>
            <Button
              to="/#contact"
              variant="primary"
              size="sm"
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-16">
        
        {/* Product Background & Short Summary */}
        <AnimatedSection>
          <div className="bg-charcoal p-8 sm:p-10 rounded-2xl border border-[#303030] space-y-6">
            <h2 className="font-heading font-bold text-xl text-white flex items-center gap-2">
              <Building2 className="w-5 h-5 text-[#FF6B27]" />
              Product Context & Engineering Mission
            </h2>
            <p className="text-base sm:text-lg text-[#E5E5E5] leading-relaxed">
              {experience.productBackground}
            </p>
            <p className="text-sm text-[#737373] leading-relaxed pt-2 border-t border-[#303030]">
              {experience.shortSummary}
            </p>
          </div>
        </AnimatedSection>

        {/* Verified Metrics Highlights */}
        <AnimatedSection delay={0.1}>
          <div>
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp className="w-4 h-4 text-[#FF6B27]" />
              <h3 className="font-mono text-xs uppercase tracking-wider text-white font-semibold">
                Impact Telemetry & Verified Benchmarks
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {experience.metrics.map((metric, idx) => (
                <div
                  key={idx}
                  className="bg-charcoal p-7 rounded-2xl border border-[#303030] hover:border-[#FF6B27] transition-all group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-heading font-black text-3xl sm:text-4xl text-pureWhite group-hover:text-[#FF6B27] transition-colors">
                      {metric.value}
                    </span>
                    {metric.isVerifiedNumerical && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-richBlack border border-[#303030] text-[#FF6B27]">
                        Verified Metric
                      </span>
                    )}
                  </div>
                  <h4 className="font-heading font-bold text-base text-white mt-1">
                    {metric.label}
                  </h4>
                  <p className="text-xs text-[#737373] mt-2 font-mono leading-relaxed">
                    {metric.sublabel}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Roles Progression Timeline */}
        {experience.rolesTimeline.length > 0 && (
          <AnimatedSection delay={0.15}>
            <div className="bg-charcoal p-8 rounded-2xl border border-[#303030]">
              <h3 className="font-heading font-bold text-xl text-white mb-6 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-[#FF6B27]" />
                Role Progression & Trajectory
              </h3>

              <div className="space-y-6">
                {experience.rolesTimeline.map((roleItem, rIdx) => (
                  <div
                    key={rIdx}
                    className="relative pl-6 border-l-2 border-[#303030] space-y-2 group"
                  >
                    <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-richBlack border-2 border-[#FF6B27]" />
                    <div className="flex flex-wrap items-baseline gap-2">
                      <h4 className="font-heading font-bold text-base text-white">
                        {roleItem.title}
                      </h4>
                      <span className="text-xs font-mono text-[#FF6B27]">
                        ({roleItem.period})
                      </span>
                    </div>
                    <p className="text-sm text-[#737373] leading-relaxed">
                      {roleItem.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        )}

        {/* Architectural Deep-Dive Subsections */}
        <div className="space-y-8">
          <div className="border-b border-[#303030] pb-4">
            <span className="font-mono text-xs uppercase tracking-wider text-[#FF6B27] font-semibold">
              In-Depth Implementations
            </span>
            <h3 className="font-heading font-bold text-2xl text-white mt-1">
              Detailed Engineering Contributions
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {experience.deepDiveTopics.map((topic, tIdx) => (
              <AnimatedSection key={tIdx} delay={tIdx * 0.1}>
                <div className="bg-charcoal p-8 rounded-2xl border border-[#303030] hover:border-[#FF6B27]/60 transition-all space-y-6 shadow-xl">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#303030] pb-4">
                    <div>
                      <span className="font-mono text-xs text-[#FF6B27] uppercase tracking-wider font-semibold block mb-1">
                        {topic.category}
                      </span>
                      <h4 className="font-heading font-bold text-2xl text-pureWhite">
                        {topic.title}
                      </h4>
                    </div>

                    <span className="text-xs font-mono text-[#737373] bg-richBlack px-3 py-1.5 rounded-lg border border-[#303030] shrink-0">
                      {topic.tagline}
                    </span>
                  </div>

                  {/* Bulleted Technical Details */}
                  <div className="space-y-3">
                    {topic.details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-[#FF6B27] shrink-0 mt-1" />
                        <p className="text-sm sm:text-base text-[#E5E5E5] leading-relaxed">
                          {detail}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Sub-topic Tech Stack */}
                  <div className="pt-4 border-t border-[#303030] flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono text-[#737373] mr-2">
                      Stack:
                    </span>
                    {topic.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-richBlack border border-[#303030] text-xs font-mono text-[#E5E5E5]"
                      >
                        <TechnologyIcon name={tech} size={13} className="text-[#FF6B27]" />
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Complete Technology Ecosystem */}
        <AnimatedSection>
          <div className="bg-[#0F0F0F] p-8 rounded-2xl border border-[#303030] space-y-4">
            <h3 className="font-heading font-bold text-lg text-white">
              Full Technology Stack Deployed at {experience.company}
            </h3>
            <div className="flex flex-wrap gap-2.5 pt-2">
              {experience.technologies.map((tech) => (
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

        {/* Inter-Experience Pagination Navigation */}
        <div className="pt-10 border-t border-[#303030] flex flex-col sm:flex-row items-center justify-between gap-4">
          {prevExp ? (
            <Link
              to={`/experience/${prevExp.slug}`}
              className="flex items-center gap-2 text-xs font-heading font-medium text-[#737373] hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4 text-[#FF6B27]" />
              <span>Previous: {prevExp.company}</span>
            </Link>
          ) : (
            <div />
          )}

          <Link
            to="/"
            className="text-xs font-mono text-[#737373] hover:text-white transition-colors"
          >
            ← Return to Home Overview
          </Link>

          {nextExp ? (
            <Link
              to={`/experience/${nextExp.slug}`}
              className="flex items-center gap-2 text-xs font-heading font-semibold text-[#FF6B27] hover:underline transition-colors"
            >
              <span>Next: {nextExp.company}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          ) : (
            <Link
              to="/projects/open-bot"
              className="flex items-center gap-2 text-xs font-heading font-semibold text-[#FF6B27] hover:underline transition-colors"
            >
              <span>Explore Featured Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </div>

      </div>
    </div>
  );
};
