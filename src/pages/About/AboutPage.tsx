import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Cpu,
  Terminal,
  ArrowRight
} from 'lucide-react';
import { portfolioData } from '../../data/portfolio';
import { skillCategories, allSkills } from '../../data/skills';
import { Breadcrumb } from '../../components/layout/Breadcrumb';
import { SectionHeading } from '../../components/common/SectionHeading';
import { AnimatedSection } from '../../components/common/AnimatedSection';
import { TechnologyIcon } from '../../components/common/TechnologyIcon';
import { Button } from '../../components/common/Button';

export const AboutPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  useEffect(() => {
    document.title = `About & Technical Skills — ${portfolioData.name}`;
  }, []);

  const displayedSkills = selectedCategory === 'all'
    ? allSkills
    : allSkills.filter(s => s.category === selectedCategory);

  return (
    <div className="pt-24 pb-24 bg-richBlack text-white">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 border-b border-[#303030]">
        <Breadcrumb items={[{ label: 'About & Technical Profile' }]} />

        <div className="mt-8 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wider uppercase bg-charcoal border border-[#303030] text-[#FF6B27] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B27]" />
            Engineering Profile & Background
          </div>

          <h1 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl text-pureWhite tracking-tight">
            Engineering scalable applications with distributed precision.
          </h1>

          <p className="font-mono text-sm sm:text-base text-[#FF6B27] mt-4">
            {portfolioData.designation} • {portfolioData.experienceYears} of Production Experience • Hyderabad, India
          </p>
        </div>
      </div>

      {/* Professional Summary Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Professional Introduction */}
          <div className="lg:col-span-8 space-y-6">
            <div className="bg-charcoal p-8 sm:p-10 rounded-2xl border border-[#303030] space-y-6">
              <h2 className="font-heading font-bold text-2xl text-pureWhite flex items-center gap-2">
                <Terminal className="w-5 h-5 text-[#FF6B27]" />
                Professional Summary
              </h2>

              <div className="space-y-4 text-base sm:text-lg text-[#E5E5E5] leading-relaxed">
                {portfolioData.aboutFull.paragraphs.map((p, idx) => (
                  <p key={idx} className={idx === 0 ? "font-medium text-white" : "text-[#737373]"}>
                    {p}
                  </p>
                ))}
              </div>

              <div className="pt-4 border-t border-[#303030] flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-xs font-mono text-[#737373]">
                  <span className="w-2 h-2 rounded-full bg-[#FF6B27]" />
                  <span>Enterprise HRMS Modules</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#737373]">
                  <span className="w-2 h-2 rounded-full bg-[#FF6B27]" />
                  <span>Real Estate & Construction Tech</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#737373]">
                  <span className="w-2 h-2 rounded-full bg-[#FF6B27]" />
                  <span>Edge Vision & Serverless Healthcare</span>
                </div>
              </div>
            </div>

            {/* Problem-Solving Approach */}
            <div className="bg-charcoal p-8 rounded-2xl border border-[#303030] space-y-6">
              <h2 className="font-heading font-bold text-2xl text-pureWhite flex items-center gap-2">
                <Cpu className="w-5 h-5 text-[#FF6B27]" />
                Problem-Solving Approach & Philosophy
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {portfolioData.aboutFull.coreValues.map((val, idx) => (
                  <div key={idx} className="bg-richBlack p-5 rounded-xl border border-[#303030]">
                    <span className="text-[#FF6B27] font-mono text-xs font-bold block mb-1">
                      0{idx + 1}.
                    </span>
                    <h3 className="font-heading font-bold text-base text-white mb-2">
                      {val.title}
                    </h3>
                    <p className="text-xs text-[#737373] leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Metrics & Highlights Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-charcoal p-6 rounded-2xl border border-[#303030] space-y-5">
              <h3 className="font-mono text-xs uppercase tracking-wider text-[#FF6B27] font-semibold">
                Core Engineering Capabilities
              </h3>

              <div className="space-y-4">
                {portfolioData.aboutFull.engineeringFocus.map((focus, idx) => (
                  <div key={idx} className="border-b border-[#303030] pb-3 last:border-b-0 last:pb-0">
                    <h4 className="font-heading font-bold text-sm text-white flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B27]" />
                      {focus.title}
                    </h4>
                    <p className="text-xs text-[#737373] mt-1 leading-relaxed">
                      {focus.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-charcoal to-[#111111] p-6 rounded-2xl border border-[#303030] text-center space-y-4">
              <span className="font-mono text-xs text-[#737373]">
                Looking for verified experience?
              </span>
              <h4 className="font-heading font-bold text-lg text-white">
                Explore Detailed Work Timelines
              </h4>
              <div className="flex flex-col gap-2 pt-2">
                <Button to="/experience/akrivia" variant="primary" size="sm">
                  Akrivia Automation (70k rec/min)
                </Button>
                <Button to="/experience/inncircles" variant="secondary" size="sm">
                  Inncircles Tech (Fintech & Cloud)
                </Button>
                <Button to="/experience/motivity" variant="dark" size="sm">
                  Motivity Labs (Edge AI & Limina)
                </Button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Comprehensive Technical Skills Section */}
      <div id="skills" className="border-t border-[#303030] bg-[#0F0F0F] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <AnimatedSection>
            <SectionHeading
              label="Complete Inventory"
              title="Technical Skills & Competencies"
              highlightedWord="Skills"
              subtitle="All technologies, cloud services, databases, and architectural tools verified through production implementations."
              theme="dark"
            />
          </AnimatedSection>

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-lg text-xs font-mono font-medium transition-all whitespace-nowrap ${
                selectedCategory === 'all'
                  ? 'bg-[#FF6B27] text-white shadow-sm'
                  : 'bg-charcoal text-[#737373] hover:text-white border border-[#303030]'
              }`}
            >
              All Skills ({allSkills.length})
            </button>

            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-lg text-xs font-mono font-medium transition-all whitespace-nowrap ${
                  selectedCategory === cat.id
                    ? 'bg-[#FF6B27] text-white shadow-sm'
                    : 'bg-charcoal text-[#737373] hover:text-white border border-[#303030]'
                }`}
              >
                {cat.label} ({cat.skills.length})
              </button>
            ))}
          </div>

          {/* Grouped Skills View if 'all' is selected, or filtered grid */}
          {selectedCategory === 'all' ? (
            <div className="space-y-12">
              {skillCategories.map((category) => (
                <div key={category.id} className="space-y-4">
                  <div className="flex items-center justify-between border-b border-[#303030] pb-2">
                    <div>
                      <h3 className="font-heading font-bold text-xl text-white">
                        {category.label}
                      </h3>
                      <p className="text-xs text-[#737373] mt-0.5 font-mono">
                        {category.description}
                      </p>
                    </div>
                    <span className="font-mono text-xs text-[#FF6B27]">
                      {category.skills.length} items
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="bg-charcoal rounded-xl border border-[#303030] p-4 hover:border-[#FF6B27] transition-all duration-200 group flex items-start gap-3.5"
                      >
                        <div className="w-10 h-10 rounded-lg bg-richBlack border border-[#303030] flex items-center justify-center text-white group-hover:text-[#FF6B27] group-hover:border-[#FF6B27]/40 transition-colors shrink-0">
                          <TechnologyIcon name={skill.name} size={20} />
                        </div>
                        <div className="min-w-0">
                          <h4 className="font-heading font-bold text-sm text-pureWhite group-hover:text-[#FF6B27] transition-colors truncate">
                            {skill.name}
                          </h4>
                          <p className="text-xs text-[#737373] mt-1 leading-snug line-clamp-2">
                            {skill.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {displayedSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="bg-charcoal rounded-xl border border-[#303030] p-4 hover:border-[#FF6B27] transition-all duration-200 group flex items-start gap-3.5"
                >
                  <div className="w-10 h-10 rounded-lg bg-richBlack border border-[#303030] flex items-center justify-center text-white group-hover:text-[#FF6B27] group-hover:border-[#FF6B27]/40 transition-colors shrink-0">
                    <TechnologyIcon name={skill.name} size={20} />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-heading font-bold text-sm text-pureWhite group-hover:text-[#FF6B27] transition-colors truncate">
                      {skill.name}
                    </h4>
                    <p className="text-xs text-[#737373] mt-1 leading-snug line-clamp-2">
                      {skill.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </div>

      {/* Navigation Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 flex items-center justify-between">
        <Link
          to="/"
          className="text-xs font-mono text-[#737373] hover:text-white transition-colors"
        >
          ← Return to Overview
        </Link>

        <Link
          to="/experience/akrivia"
          className="inline-flex items-center gap-1.5 text-xs font-heading font-semibold text-[#FF6B27] hover:underline"
        >
          <span>Explore Professional Experience</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

    </div>
  );
};
